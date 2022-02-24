console.log("Hello");
//alert("Hello This is HIFSA");

//Variables
var b = 'smoothie';
console.log(b);

var someNumber=45;
console.log(someNumber);

//Manipulate DOM with JavaScript
/* changing HTML with JavaScript*/

//document.getElementById('someText').innerHTML = "Hey There";
//let age = prompt("What is your age");
//document.getElementById('someHeading').innerHTML = age;

//Numbers in JavaScript
 var num1 = 5;
 //increment num1 by 1
 num1++;
  //decrament num1 by 1
 num1--;
  console.log(num1);

  // Divide ,multiply * , remainder %
  console.log(num1 + " + " + " 6 =" ,num1 + 6);
  console.log(num1 + " - " + " 6 =" ,num1 - 6);
  console.log(num1 + " * " + " 6 =" ,num1 * 6);
  console.log(num1 + " / " + " 6 =" ,num1 / 6);
  console.log(num1 + " % " + " 6 =" ,num1 % 6);
  


  //Functions 
   function fun(){
       alert("This is the Function ");
   }

   //fun();
  // var name = prompt("Whats is your name?");
   function greeting(nameInput){
       var result = "Hello  " + nameInput;
       console.log(result);
   }
    
  // greeting(name);


   //How do argument work in functions?

   //adding two numbers in function 

   function sumNumbers(num1,num2){
       var result = num1 + num2 ;
       console.log(result); 
   }

   sumNumbers(10,10);
   sumNumbers('10','10');
   sumNumbers("Hello "," HIFSA");
   
   //while loops

   var num = 0 ;
   while (num < 10 ){
       num += 1;
       console.log(num);
   }
    //For loop

    for (let num = 0 ; num < 10 ; num++)
    {
        console.log(num);
    }

    //Data Types 
     
     let Age = 22; //number
     let  Name = 'Hifsa' //string 
     let  fullname= {first:"Hifsa" , last:"Saleem"}; //object 
     let truth = false; //boolean 
     let groceries = ['apple', 'banana' , 'oranges']; //array 
     let random; //undefined
     let nothing= null; //value null 

     //Strings  in JavaScript (Common Mthods)
      let fruit = "banana";
      let moreFruits = "banana\napple" // newline 
      console.log(fruit.length);
      console.log(fruit.indexOf('nan'));
      console.log(fruit.slice(2,6));
      console.log(fruit.replace("ban",123));
      console.log(fruit.toUpperCase());
      console.log(fruit.toLowerCase());
      console.log(fruit.charAt(2));
      console.log(fruit[1]);
      let fruits = "banana,apple,orange,blackberry";
      console.log(fruit.split('')); //split by characters 
      console.log(fruits.split(',')); //split by comma 





