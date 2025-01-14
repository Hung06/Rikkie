// hoán đổi 2 giá trị 
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}
console.log(swap(1, "Hello")); // ["Hello",1]
