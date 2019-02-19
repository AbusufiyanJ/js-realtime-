/*
var firstname = prompt('user name');

var age = prompt("user age");
 
console.log(firstname +' '+ age);

var job,isMarried;

job =  prompt('job role');;
isMarried =  prompt('marriage status');;

console.log('The user Name is '+firstname+' And his age is ' + age + ' his job is '
 + job + ' married status '+ isMarried) ;

age = 'twenty two';
job = 'tester';

 console.log('The user Name is '+firstname+' And his age is ' + age + ' his job is '
 + job + ' married status '+ isMarried) ;
  */

  /*---operator----
var year = 2019;
var yearAbu = year - 22;

var yearSufiyan = year - 23;
console.log(typeof yearAbu);

*/


/*-----operator procedence--*/
/*
var now = 2018;
var yearAbu = 1996;
var fullAge = 18;

var isFullage = now - yearAbu;
var ageJohn = now -yearAbu;
var agemark =35;
var average = (ageJohn +agemark)/2;

console.log(average);

//mutiple assigments

var x,y;

x = y = (3+5) * 4 - 6;

console.log(x,y);

x *= 2;
console.log(x);


*/


//code challange
/*
var massAbu = 95;
var heightAbu =1.69;

var massSufiyan =92;
var heightSufiyan = 1.95;  
   

var BMIAbu = massAbu / (heightAbu * heightAbu);

var BMISufiyan = massSufiyan / (heightSufiyan * heightSufiyan);

console.log  ("the Abu BMI is  "+ BMIAbu +"   the Sufiyan BMI is " + BMISufiyan);

 var markHigherBMI = BMIAbu < BMISufiyan;
 console.log("Is Abu\'s BMI higher than sufiyan\'s? " + markHigherBMI);

 if  (BMIAbu > BMISufiyan) {
  console.log("Is Abu\'s BMI higher than sufiyan\'s?")}
 
  else{ 
    console.log("Sufiyan higher than Abu")
  };
 
var Namee = "Abu";
var age = 25 ;

if (age < 13) {
  console.log(Namee + ' is a boy ');
} else if (age >= 13 && age < 18) {
    console.log(Namee + 'is a teenage');
} else {
   console.log(Namee + ' is a man ');
};

*/ 

var firstname , age;

firstname = 'Abu';
var age = 19;

//Ternary Operator

age <= 18 ? console.log(firstname+ ' Ride Cycle') : console.log(firstname+ '  You can drive bike');

var drive = age < 18 ? ' cycle ' : 'bike';
console.log(age + drive);

/*
if (age <= 18){
  var drive = 'ride cycle';
}else {
var drive = ' ride bike';
}

console.log(age + drive); */

//switch Statement
/*
var job = 'Driver';
switch(job) {
  case 'faculty':
  console.log(firstname + ' is a teacher he teach how to code ');
  break;
  case 'Driver':
  console.log(firstname + ' is a driver ');
  break;
  default :
  console.log(firstname + ' he is doing some other job');
}

*/

