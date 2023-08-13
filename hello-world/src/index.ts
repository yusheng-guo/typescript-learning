console.log('Hello World.');

let age: number = 20;
age = 10.5;
console.log(age);
if (age > 10) {
    age += 10;
}

// tsc --init // 创建配置文件

// 类型

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// 1.any类型
let level: any;

// 2.array类型
let numbers: number[] = [1, 2, 3];
numbers[1] = 10;
numbers.forEach(n => n.toLocaleString);

// 3.tuples 内部使用的JavaScript中的数组
let user: [number, string] = [18, "guo"];
user.push(10);
// 建议：元组长度为2 存放键值对

// 4.enum 枚举类型
// const enum Size { Small, Medium, Large};
// const enum Size { Small = 1, Medium, Large};
// const enum Size { Small = 'a', Medium = 'b', Large = 'c'};
enum Size { Small = 'a', Medium = 'b', Large = 'c'};
let mySize: Size = Size.Medium;
console.log(mySize);

// 5.函数
function cal(x: number, y: number = 100): number {
    if (x < 10)
        return x;
    // undefined JavaScript默认返回一个undefined
    return x * y;
}
console.log(cal(10, 99))

// 6.对象 Object
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee: Employee = {
    id: 1,
    name: "",
    retire: (date: Date) => {
        console.log(date);
    }
}

// 7.联合Union类型 重量转换: 公斤=>两
function kg2tael(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 20
    }
    return parseInt(weight) * 20
}

console.log(kg2tael(10))
console.log(kg2tael('10kg'))

// 8.交集 重量转换: 公斤=>两
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// 9. Literal 字面类型
// Literal (exact, specific)
let quantity: 50 | 100 = 50;
type Quantity = 50 | 100;
let q1: Quantity = 100;

type Metric = 'cm' | 'inch';
let m1: Metric = 'cm';
let m2: Metric = 'inch';

// 10.可空类型 strictNullChecks (tsconfig.json)
function greet(name: string | null | undefined) {
    if (name) {
        console.log("hello", name.toLowerCase);
    }
    console.log("hola");
}
greet("guo");
greet(null);
greet(undefined);

// 11. 可选属性运算符
// ?.