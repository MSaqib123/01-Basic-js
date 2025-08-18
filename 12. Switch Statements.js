
//===== Switch statement = if  , else if , else ===

// Syntax
/*
    var x = 25;
    switch(variable)
    {
        case condition1 :
            //message1
            break;

        case condition2 :
            //message1
            break;

        case condition2 :
            //message2
            break;

        case condition3 :
            //message3
            break;

        
        default 
            //else message
            break;

    }




    if()
    else if(){
    }
    else{
        }
*/



//============== Switch ==============
//===== 1. fixed ====
// Fixed  days  , Month , year , 
// Students           1 Name ,  
// Employe      Sallry , Name ,  

//===== 2. String ====== 
//let year = 2022342342;

let days = prompt("Entery your Day");

switch (days) {
    case "Sunday":  //
        console.log("Off Day");
        break;

    case "Monday":
    case "Tuesday":
    case "Wed":
    case "Thir":
    case "Friday":
        console.log("Working days");
        break;

    case "Saterday":  //
        console.log("Tafri days");
        break;
    
    default:
        console.log("Your are out of days this day does not exist in Life");
        break;
}





//============= Task =================
// month .  
// Jan  --> 29 , 30 ,31
// Feb ==>  


// let year = 2019;

// switch (year) {
//     case year == 2019:
//         console.log("Corona Start in this year");
//         break;

//     case year == 2020:
//         console.log("cornan is continue");
//         break;

//     case year == 2021:
//         console.log("akhree Speel");
//         break;

//     case year == 2022:
//         console.log("Azadi");
//         break;
 
//     default:
//         console.log("Zindgi imtehan lati haan, Passaa ni is wajaa");
//         break;
// }
