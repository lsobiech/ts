"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Luka",
    age: 30,
    hobbies: ["spots", "cooking"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = "actor";
let favouriteActivities;
favouriteActivities = ["Sports"];
console.log("person", person);
console.log("person.name", person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
