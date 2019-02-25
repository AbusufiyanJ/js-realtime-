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
/*
var height = 0 ;


if(height || height ==  0){
  console.log('variable is defined');
}else {
  console.log('variable has NOT been defined');
}  */


/*


var t1,t2,t3,tt;
t1 = 189;
t2 = 120;
t3 = 103;
tt = (t1+t2+t3) / 3 ;

var s1,s2,s3,ss;

s1 = 116;
s2 = 94;
s3 = 123;
ss = ( s1 +s2 +s3) / 3;

var m1,m2,m3,mm;

m1 = 97;
m2 = 134;
m3 = 105 ;
mm = (m1+m2+m3)/3;
 
if (tt > ss && tt > mm){
  console.log('the average score is ' + t4 + ' john team wins');
} else if ( ss > tt && ss > mm){
  console.log('the average score is ' + s4 + ' mike team wins');
} else if (mm > ss && mm > tt) {
  console.log('the average score is ' + m4 + ' marry team wins');
} else {
  console.log('there is a draw');
}

*/


function calculateAge(year) {
  return 2018 - year;
}

var ageAbu = calculateAge(1980);
var ageSufiyan = calculateAge(1996);
var ageDavid = calculateAge(1996);

console.log(ageAbu, ageSufiyan, ageDavid);

function yearsUntilRetirement(year , firstname) {
var age = calculateAge(year);
var retirement = 65 - age;

if (retirement > 0){

console.log(firstname + ' retires in '
+ retirement + ' years.');
}  else {
  console.log(firstname + ' already retired in'
  + retirement + ' years.');
}
}
yearsUntilRetirement(1992, 'hasa');
yearsUntilRetirement(1996, 'Abu');
yearsUntilRetirement(1950, 'don');

/**********function statement and expressions */


//function declaration


//function expression
var whatDoyouDO = function(job ,firstname){
  switch(job) {

    case 'teacher':
    return firstname + " teach kids about how to code";
    
    case 'driver':
    return firstname + 'drives a car in lisbon';

    case 'designer' :
    return firstname + ' designer beautiful websites';

    default:
     return firstname + "does something else";
 
  }
}

console.log(whatDoyouDO('teacher', 'sabeer'));
console.log(whatDoyouDO('designer', 'Abu'));









