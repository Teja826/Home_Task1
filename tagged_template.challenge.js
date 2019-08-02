//With the template provided, write a template tag that will validate an SQL statement:
//Only SELECT or UPDATE statements are valid - write validation logic which allows only SELECT, UPDATE
//The passwords table cannot be altered
//there is no order by clause, add it and order by asc
// When done, return the reconstructed query or a note any errors

let city = `chicago`; //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT * FROM`;
let table = `USERS`;
let whereClauses = [
  `uid = ${2+1}`,
  `OR city = ${city}`
]
let update = ``;
let order = `ORDER BY ASC`;
let result = checkQuery`${command}${table}${update}WHERE${whereClauses[0]} ${whereClauses[1]}${order}`;
console.log(result);
// Your code to call the tag and log the return value here...
// your output should be - SELECT * FROM USERS WHERE uid = 3 OR city = chicago ORDER BY asc
// Spread syntax is a more common and easy here if you are comfortable with it

function checkQuery(strings, ...exp) {
  //Your validation code here...
  let str0 = strings[3];
  if (
    ((exp[0] === "SELECT * FROM" || exp[0] === "UPDATE") && exp[5] === "ORDER BY ASC") &&
    !(exp[0] === "UPDATE" && exp[1] === "PASSWORDS")
  ) {
    	finalQuery = `${exp[0]} ${exp[1]}${exp[2]} ${str0} ${exp[3]} ${exp[4]} ${exp[5]}`;
  } else {
    	finalQuery = "Error";
  }
  return finalQuery;
}
