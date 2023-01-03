interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registredValidators[target.constructor.name] = {
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registredValidators[target.constructor.name] = {
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log("prop", prop);
    for (const validator of objValidatorConfig[prop]) {
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

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  // console.log("createdCourse", createdCourse);

  if (!validate(createdCourse)) {
    alert("Invalid input please try again");
    return;
  }
  console.log("createdCourse", createdCourse);
});
