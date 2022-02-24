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

   fun();
   var name = prompt("Whats is your name?");
   function greeting(nameInput){
       var result = "Hello  " + nameInput;
       console.log(result);
   }
    
   greeting(name);


   //How do argument work in functions?

   //adding two numbers in function 

   function sumNumbers(num1,num2){
       var result = num1 + num2 ;
       console.log(result); 
   }

   sumNumbers(10,10);
   sumNumbers('10','10');
   sumNumbers("Hello "," HIFSA");
   