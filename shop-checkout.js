const productNames = ['Apple' , 'Milk' , 'Chicken' , 'Rice'];
const prices = [5 , 8 , 15 , 12];
const getPriceLevel = price => {
    if(price >= 15){
        return 'Expensive';
    } else if(price >= 10){
        return 'Normal';
    } else {
        return 'Cheap';
    }
};
const getTotal = (prices) => {
    let totalPrice = 0;
    prices.forEach((price) => {
        totalPrice += price;
    });
    return totalPrice;
};

const getAverage = (prices) => {
    const total = getTotal(prices);
    return total / prices.length;
};


const getExpensiveProducts = (names, prices) => {
    const result = [];
    prices.forEach((price, index) => {
        if (getPriceLevel(price) === 'Expensive') {
            result.push(names[index]);
        }
       
    });
    return result;
};


const printReport = (names , prices) => {
    prices.forEach((price , index) => {
        console.log(`${names[index]} - $${price} - ${getPriceLevel(price)}`);
    });
    console.log(`Total: $${getTotal(prices)}`);
    console.log(`Average: $${getAverage(prices)}`);
    console.log(`Expensive Products: ${getExpensiveProducts(names , prices)}`);
};

printReport(productNames, prices);