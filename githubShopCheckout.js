const shop = {
    name: 'Jay Mart',
    items: [
        { name: 'Apple', price: 5, stock: 20 },
        { name: 'Milk', price: 8, stock: 0 },
        { name: 'Chicken', price: 15, stock: 6 },
        { name: 'Rice', price: 12, stock: 10 }
    ],
    cart: [],
    getPriceLevel(price) {
        if (price >= 15) {
            return 'Expensive';
        } else if (price >= 10) {
            return 'Normal';
        } else {
            return 'Cheap';
        }
    },
    showProducts() {

        console.log(`===== Welcome to ${this.name} =====`);
        this.items.forEach(item => {
            if (item.stock === 0) {
                console.log(`${item.name} - $${item.price} - ${this.getPriceLevel(item.price)} - SOLD OUT`);
            }
            else {
                console.log(`${item.name} - $${item.price} - ${this.getPriceLevel(item.price)} - stock: ${item.stock}`);
            }
        });
    },
    addToCart(itemName, qty) {
        this.items.forEach(item => {
            if (item.name === itemName) {
                if (item.stock === 0) {
                    console.log(`Sorry, ${item.name} is sold out`);
                } else if (item.stock < qty) {
                    console.log(`Sorry, only ${item.stock} ${item.name} left`);
                } else {
                    item.stock -= qty;
                    this.cart.push({ name: item.name, price: item.price, qty: qty });
                    console.log(`Added ${qty} ${item.name} to cart`);
                }
            }
        });
    },
    showCart() {
        console.log('Cart:');
        this.cart.forEach(cartItem => {
            console.log(`${cartItem.qty} x ${cartItem.name}`);
        });
    },
    getCartTotal() {
        let total = 0;
        this.cart.forEach(cartItem => {
            total += cartItem.qty * cartItem.price;
        });
        return total;
    },
    checkout(rate) {
        console.log('===== Checkout =====');
        this.cart.forEach(cartItem => {
            console.log(`${cartItem.qty} x ${cartItem.name} = $${cartItem.price * cartItem.qty}`);
        });
        console.log(`Total: $${shop.getCartTotal()}`);
        console.log(`After ${rate}% off: $${Math.round(this.getCartTotal() * ((100 - rate) / 100))}`);
        console.log('Thank you for shopping!');
        this.cart = [];
    }

};

shop.showProducts();
shop.addToCart('Apple', 3);
shop.addToCart('Milk', 1);
shop.addToCart('Chicken', 2);
shop.addToCart('Chicken', 10);
shop.showCart();
shop.showProducts();
shop.checkout(15);
shop.showCart();