//? Original JS
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1");
// const input2 = document.getElementById("num2");

// function add(num1, num2) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(input1.value, input2.value));
// });

//* the ! lets you tell TS that there is for sure a matching element in your HTML file and it will never be null
//* 'as HTMLInputElement' is called typecasting, and it lets TS know what type of element this will be
//* '<HTMLElementButton>document.etc' is another typecasting syntax
//* this is specific TS syntax that will only work in a .ts file
// const button = <HTMLButtonElement>document.querySelector("button")!;
const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  //* adding the ': number' lets you explicitly state what type these are
  return num1 + num2;
}

button.addEventListener("click", function () {
  //* it is necessary to convert these to numbers because ____.value always returns a string
  console.log(add(+input1.value, +input2.value));
});
