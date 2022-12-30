// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//   };
// }

// @WithTemplate("<h1>My Person Object</h2>", "app")
// class Person {
//   name = "Max";
//   constructor() {
//     console.log("creating person object");
//   }
// }

// const x = new Person();

// console.log("x", x);
