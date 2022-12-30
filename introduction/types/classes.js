var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department("accounting");
console.log("accounting", accounting);
accounting.describe();
var accountingCopy = { name: "XXX", describe: accounting.describe };
accountingCopy.describe();
console.log("accountingCopy", accountingCopy);
