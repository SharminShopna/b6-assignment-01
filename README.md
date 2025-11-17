TypeScript Interview Questions - Blog Task :

1. What are some differences between interfaces and types in TypeScript?
Interfaces এবং Types এর মধ্যে পার্থক্য :

interface এবং type – দুটোই object-এর structure ডিফাইন করতে ব্যবহৃত হয়। তবে তাদের মধ্যে কিছু মূল পার্থক্য রয়েছে।

### Similarities

Object shape define করা

Function type define করা

Optional & readonly property রাখা

### Differences

(i). **Extend করার পদ্ধতি**
   - **Interface:** সহজভাবে `extends` বা `implements` ব্যবহার করে extend করা যায়।
   - **Type:** Union (`|`) বা Intersection (`&`) ব্যবহার করে extend করতে হয়।

(ii). **Declaration Merging**
   - **Interface:** Declaration merging সমর্থন করে (একই interface বারবার declare করলে merge হয়ে যায়)।
   - **Type:** Declaration merging সমর্থন করে না।

(iii). **Complex Types Support**
   - **Interface:** Complex types সীমিতভাবে define করা যায়।
   - **Type:** union, tuple, mapped types ইত্যাদি complex টাইপ সহজে define করা যায়।

(iv). **Use Case**
   - **Interface:** মূলত object structure describe করার জন্য ব্যবহৃত হয়।
   - **Type:** Primitive, union, intersection, tuple, function টাইপ—সব ধরনের complex টাইপ define করতে ব্যবহৃত হয়।



Example
interface User {
  name: string;
  age: number;
}

type Product = {
  title: string;
  price: number;
};

2. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof কীওয়ার্ডের ব্যবহার :

keyof কোনো object এর keys গুলোর union তৈরি করে। এটা টাইপ–সেফ property access এর জন্য খুব উপকারী।

Example
interface Person {
  name: string;
  age: number;
  country: string;
}

type PersonKeys = keyof Person;
// "name" | "age" | "country"

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

3. Explain the difference between any, unknown, and never types in TypeScript.

any, unknown, এবং never টাইপের মধ্যে পার্থক্য :
### any

সব ধরনের ভ্যালু রাখতে পারে

Type checking বন্ধ হয়ে যায়

বেশি ব্যবহার ঝুঁকিপূর্ণ

let value: any = 10;
value = "Hello"; // ঠিক আছে

### unknown

যেকোনো ভ্যালু assign করা যায়

কিন্তু ভ্যালু ব্যবহার করার সময় type check করতে হয়

নিরাপদ any

let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

### never

এমন type যা কখনো ঘটবে না

সাধারণত error throw বা infinite loop এ দেখা যায়

function throwError(msg: string): never {
  throw new Error(msg);
}

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums এর ব্যবহার (Numeric + String Enum)

Enum নির্দিষ্ট কিছু related constant values একসাথে গ্রুপ করতে ব্যবহৃত হয়।

### Numeric Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

### String Enum
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING"
}

5. Provide an example of using union and intersection types in TypeScript.

Union এবং Intersection Types
### Union Type
let id: number | string;
id = 101;
id = "A-203";

### Intersection Type
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

const emp: Staff = {
  name: "Sharmin",
  salary: 30000
};