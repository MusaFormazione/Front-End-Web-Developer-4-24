interface iTest<T>{
    prop1: string;
    prop2: T;
}

const obj:iTest<number> = {
    prop1: "",
    prop2: 0
} 

const obj2:iTest<string[]> = {
    prop1: "",
    prop2: ['a', 'b']
}

interface iTestDouble<T, U>{
    prop1: U;
    prop2: T;
}

const obj3:iTestDouble<string, number> = {
    prop1: 0,
    prop2: ""
}