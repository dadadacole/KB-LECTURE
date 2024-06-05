//const는 상수 값으로 메모리 주소 변경이 불가능
const p1 = { name: 'john', age: 20 };

p1.age = 2232323;

console.log(p1);

//직접 p1을 변경하면 메모리 주소가 변경되기 때문에 오류
//p1 ={name:'lee', age:22}
