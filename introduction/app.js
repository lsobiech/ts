var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var registredValidators = {};
function Required(target, propName) {
    var _a;
    registredValidators[target.constructor.name] = (_a = {},
        _a[propName] = ["required"],
        _a);
}
function PositiveNumber(target, propName) {
    var _a;
    registredValidators[target.constructor.name] = (_a = {},
        _a[propName] = ["positive"],
        _a);
}
function validate(obj) {
    var objValidatorConfig = registredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    var isValid = true;
    for (var prop in objValidatorConfig) {
        console.log("prop", prop);
        for (var _i = 0, _a = objValidatorConfig[prop]; _i < _a.length; _i++) {
            var validator = _a[_i];
            switch (validator) {
                case "required":
                    // return !!obj[prop];
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
                // return obj[prop] > 0;
            }
        }
    }
    return isValid;
}
var Course = /** @class */ (function () {
    function Course(t, p) {
        this.title = t;
        this.price = p;
    }
    __decorate([
        Required
    ], Course.prototype, "title");
    __decorate([
        PositiveNumber
    ], Course.prototype, "price");
    return Course;
}());
var courseForm = document.querySelector("form");
courseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var titleEl = document.getElementById("title");
    var priceEl = document.getElementById("price");
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    // console.log("createdCourse", createdCourse);
    if (!validate(createdCourse)) {
        alert("Invalid input please try again");
        return;
    }
    console.log("createdCourse", createdCourse);
});
