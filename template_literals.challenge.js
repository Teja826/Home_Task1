
// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%
const checkRegistered = (name)=>{
    const registered = 'shyam';
    if(name){
        let discount=(registered === name.toLowerCase().trim())?(5):(4);
        return `${name} is eligible for ${discount}% discount`;  
    }
    else{
        console.log("Member Should Exist");
    }
}
let member = " Shyam ";
console.log(checkRegistered(member));
