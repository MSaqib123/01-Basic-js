// //Ternary operator    inline if condition 


// let cnic = 123453423;
// // if(cnic === 1234534234){
// //     console.log("this user is registerd in Pakistna  FBR data");
// // }

// // ternary operater   
// //   conditon   ? "true" : "false";
// var message = "";
// cnic === 1234534234 ? message = "YOur are ok to continue" : message ="bhaag jaa  abhi cnic bnwa phlaa";

// console.log(message);




// 1.  Create a complete marksheet   with    2. Grad  , with   1. Parentage ,  3. subject : English , urdu

//1.  1. number   --> subject wise
//2.  2.  number  sum   , total marks
//3.   total/obtain * 100  ==  perctange 
//4.  grade


//--- 1. User value ----
let english = parseInt(prompt("Etner you English marks")); 
let Urdu = parseInt(prompt("Etner you Urdu marks")); 

//--- 1 validation ---
if( (english<=100 && english >= 1) && (Urdu<=100 && Urdu >= 1) ){
    console.log("Your English Marks : " , english);
    console.log("Your Urdu Marks : " , Urdu);

    // obtain marks
    let obtainTotal = english+Urdu;
    console.log("Your obtain marks : " + obtainTotal);

    // obtain marks
    let totalMarks = 200;


    // percentage 
    let per = (obtainTotal/totalMarks)*100 //percentage
    console.log( per+ " : Your percetage " );


    let grad = '';

    if((per>= 33 && per<=40) ){
        //console.log("Your grad is D");
        grad = "D"
    }
    else if((per>= 41 && per<=50) ){
        //console.log("Your grad is C");
        grad = "C"
    }
    else if((per>= 51 && per<=60) ){
        //console.log("Your grad is B");
        grad = "B"
    }
    else if((per>= 61 && per<=70) ){
        grad = "A"
    }
    else if((per>= 71 && per<=100) ){
        grad = "A++"
    }
    else{
        grad = "Fail"
    }


    if(grad == "Fail"){
        console.log("Bakriyan chranaaa kaa time a gyaa");    
    }
    else{
        console.log("Your grad is : " , grad);
    }

}
else{
    alert("marks are out of range");
}


//--- english  = 100
//--- urdu = 50




// 2. Take value from user   Calculate his Age
//1. 1 value  (1998)
//2. 2025-1998 == 27

let BirthYearOfUser = Number(prompt("Enter you brith year"));

let age = 2025 - BirthYearOfUser;

console.log("Jani you age is : " + age);





// 3. Take table value from user  and  create the  alternative table for it. and value can be any thing 
// 2X1 = 2
// 2X2 = 4


// 1. user   4
// cl( 5 + " * " + 1 + " = " + (5*1));
// cl( uV + " * " + 2 + " = " + (5*2));
// cl( uV + " * " + 3 + " = " + (uV*3));
// cl( uV + " * " + 4 + " = " + (uV*4));
// cl( uV + " * " + 5 + " = " + (uV*5));
// cl( uV + " * " + 1 + " = " + (uV*7));
// cl( uV + " * " + 1 + " = " + (uV*1));
// cl( uV + " * " + 1 + " = " + (uV*1));



//------ Calculator -----------
// 2 
// * , = , /
// 
// if()

