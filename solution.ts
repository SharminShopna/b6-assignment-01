const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return value;
    }
};


const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return 0;
    }
};


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
};

// const person1 = new Person('John Doe', 30);
// const person2 = new Person('Alice', 25);


type Item = {
    title: string;
    rating: number;
}
const filterByRating = (value: Item[]): Item[] => {
    return value.filter(item => item.rating >= 4)
}

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (user: User[]): User[] => {
    return user.filter(value => value.isActive === true)
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (value: Book) => {
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable ? 'Yes' : 'No'}`)
};

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };
// printBookDetails(myBook);


const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]): (string | number)[] => {
    const result: (string | number)[] = [];
    for (let i = 0; i < array1.length; i++) {
        if (!result.includes(array1[i])) {
            result.push(array1[i])
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (!result.includes(array2[i])) {
            result.push(array2[i])
        }
    }
    return result;
};

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (value: Product[]): number =>{
    return value.reduce((total,product) => {
        const { price, quantity, discount } = product;
        if (discount && discount > 0){
            const discountAmount = price * (discount / 100);
            const productPrice = (price - discountAmount) * quantity;
            return total + productPrice;
        }
        return total + (price * quantity);
    }, 0)
};
// const products = [
//   { name: 'Pen', price: 10, quantity: 2 },
//   { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//   { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];
