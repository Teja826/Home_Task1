// 1. SET
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.
//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let manager = {
  office: `Dubai`,
  dept: `sales`,
  employees: 0
};
let handler1 = {
  set: (target, propName, newVal) => {
    if (propName === "employees") {
      if (
        Array.isArray(newVal) ||
        typeof newVal == "string" ||
        newVal == null
      ) {
        target[propName] = newVal;
        console.log(target[propName]);
      } 
      else {
        console.log("Strings,Arrays and Null values are allowed");
      }
    } 
    else {
      target[propName] = newVal;
      console.log(target[propName]);
    }
  }
};
let proxy1 = new Proxy(manager, handler1);
proxy1.office = `London`; //updates
proxy1.employees = ["Jim", "Patrick", "Mary"]; //updates
proxy1.employees = 3; // doesn't update
proxy1.employees = null; // updates
proxy1.employees = { name: "Jim" }; // doesn't update

// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is returned.

const users = [
  {
    username: `bob`,
    accessLevel: 1,
    accessCode: 1234
  },
  {
    username: `Mary`,
    accessLevel: 2,
    accessCode: 2345
  },
  {
    username: `Harold`,
    accessLevel: 2,
    accessCode: 9999
  }
];
let handler2 = {
  get: (target, propName) => {
    if (target[propName].accessLevel === 1) {
      return "Access denied";
    }
    else {
      return target[propName];
    }
  }
};
getMessage = message => {
  if (message == undefined) console.log("Access Denied");
  else console.log(message);
};
let proxy2 = new Proxy(users, handler2);
getMessage(proxy2[0].username); // Access Denied
getMessage(proxy2[0].accessCode); // Access Denied
getMessage(proxy2[1].accessCode); // 2345
getMessage(proxy2[2].username); // Harold