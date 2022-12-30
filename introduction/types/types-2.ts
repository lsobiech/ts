// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Luka",
//   age: 30,
//   hobbies: ["spots", "cooking"],
//   role: [2, "author"],
// };



enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Luka",
  age: 30,
  hobbies: ["spots", "cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = "actor";

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log("person", person);
console.log("person.name", person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
