// Arrays - They are best for lists where the order matters.


const fruits =  ["Apple", "Banana"];
fruits.push("cherry");
fruits.shift();

console.log(fruits);



// Objects - They are used to store labeled data

const car = {brand: "Tesla", model: "Model 3"};
car.year = 2024;

const phone = {brand: "Iphone", model: " 17"};
phone.year = 2025;

console.log(car);

console.log(phone);


// Sets(Unique Values) - Sets automatically filter out duplicates.

const IDs = new Set([1, 2, 3, 4, 5]);
console.log(IDs);
