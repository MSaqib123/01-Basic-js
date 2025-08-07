//---- 1. if  condition  -----
//synaxt
// if(condition)
// {
//     // if condition is true   ===>

//         ///block
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
//     console.log("a");
// }

// 1. if  else
let number = 102; //100
if (number >= 27 && number <= 100) {
  //true //false
  ///block
  console.log("Your pass in English");
} else {
  console.log("Your fail in english");
}

// 2.  if else  ,  else if

let grad = "ksdfkl";

if (grad == "A") {
  console.log("Your grad is A");
} else if (grad == "B") {
  console.log("Your grad is B");
} else if (grad == "C") {
  console.log("Your grad is C");
} else if (grad == "D") {
  console.log("Your grad is D");
} else {
  console.log("fail");
}

// 3. nested if
// if ka under  multiple if

let username = "saqibsd"
let password = "12345"

if(username == "saqib" && password == "12345")
{
    let isUsername = false;  // false
    let isPassword = false; // true

    //username
    if(username == "saqib"){
        isUsername= true;
    }
    else{
        console.log("Username is incorrect");
    }

    //password
    if(password == "12345"){
        isPassword = true
    }
    else{
        console.log("Password is incorrect");
    }



    // both are correct
    if(isUsername == true && isPassword == true){
        console.log("Login Successfully");
    }

}
else{
    console.log("Incorrect information");
}
