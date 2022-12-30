abstract class Department {
  // public name: string;
  static fiscalYear = 2000;
  protected employees: string[] = [];
  constructor(protected readonly id: string, private name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log("employees nr: ", this.employees.length);
    console.log("employess: ", this.employees);
    console.log("max", Math.max());
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  reports: string[];
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a value");
    }
    this.addReport(value);
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log("this.reports", this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log("employee1", employee1, `${Department.fiscalYear}`);

const it = new ITDepartment("d1", ["Max"]);
console.log("it", it);

it.addEmployee("Max");
it.addEmployee("Tom");

it.describe();
it.printEmployeeInformation();

it.describe();

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
console.log("accounting", accounting);

accounting.mostRecentReport = "Something went wrong 0";
accounting.addReport("Something went wrong...1");
accounting.addReport("Something went wrong...2");
console.log("accounting.mostRecentReport", accounting.mostRecentReport);
accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Maxx");

accounting.printReports();

// const itCopy = { name: "XXX", describe: it.describe };

// itCopy.describe();

// console.log("itCopy", itCopy);
