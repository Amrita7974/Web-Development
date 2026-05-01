let i = 10;
if(i%2==0){
    console.log("even Number");
}
else{
    console.log("odd number");
}

let marks = 40;
if(marks>=30){
    console.log("pass");
}
else{
    console.log("Fail"); 
}


if(score >= 90 && score <=100) 
     {
        console.log("A");
        
     }
    else if(score >=80 && score <=89 )
        {
            console.log("B");
        } 

      else if(score >=60 && score <=69 )
        {
            console.log("C");
        }    
    else {
        console.log("Fail");
    } 

    let user = "abcde";
    let pass = "12345";
    if(user==="abcde" && pass==="12345"){
        console.log("login sucess");
    }
    else{
        console.log("login failed");
    }

    let data;
    let n = "Amrita";
    data  = n || "N/A"

    // if(n){
    //     data = n;
    // }
    // else{
    //     data = "N/a"
    // }
    console.log(data);


    let choice;
    switch(choice){
        case 1:{
            console.log("Tea");
            break;
        }
        case 2:{
            console.log("coffee");
            break;
        }
        case 3:{
            console.log("Lassi");
            break;
        }
        default:{
            console.log(panni);
        }

    }
    


