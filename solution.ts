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


const getLength = (value: string | any[]) : number => {
if (typeof value === "string") {
    return value.length;
} else if (Array.isArray(value)){
return value.length;
} else {
return 0;
}
};


class Person {
    name : string;
    age : number;

    constructor (name : string , age : number){
        this.name = name;
        this.age = age;
    }
    getDetails() : string {
        return `Name: ${this.name}, Age: ${this.age}`
    }
};
const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);
