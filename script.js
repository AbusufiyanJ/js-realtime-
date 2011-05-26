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





// Arrays

var names = ['Abu' ,'Sufiyan' , 'David'];

var years = new Array (1990, 1969 , 1948);

console.log(names);
console.log(names.length);

names[1] = 'ben';
 names[5] = 'yeah';
 console.log(names);

// different data types

var abu = ['abu' , 'sufiyan' , 1996, 'web developer' , 'designer'];


abu.unshift('Mr');
abu.push('kpr college');
abu.pop();
abu.shift();
console.log(abu);

console.log(abu.indexOf(1996));

var isdesigner = abu.indexOf('designer') === -1 ? "is not a designer" : "abu is a designer";
console.log (isdesigner); 

//code challenge

function payment(bill){
   var percent;

  if (bill < 50) {
    percent = 0.2;
  }else if (bill >= 50 && bill < 200 ) {
    percent = 0.15;
  } else {
    percent = .1;
  }
  return percent * bill ;
}
var bill = [124, 48, 268];
var tips = [ payment (bill[0]  ),
             payment (bill[1] ),
             payment (bill[2] ) ];
    
    var final   =[ bill[0] + tips[0]  ];            




//objects and properties


//objects literals
var jash = {

  firstname: 'Abu',
  lastname:'Sufiyan',
  birthYear:'1990',
  family: ['jane','mark','bob','doode'],
  job:'teacher',
  isMarried:false

};

console.log(jash.family);
jash.job = 'web developer';
console.log(jash['lastname']); 

//new object syntax
var jane = new Object();
jane.firstname ='jane';
jane.birthYear = '1996';
jane.lastname = 'smith';
console.log(jane); 

// Objects and methods



var jashh = {

  firstname: 'Abu',
  lastname:'Sufiyan',
  birthYear:1996,
  family: ['jane','mark','bob','doode'],
  job:'teacher',
  isMarried:false,

  age : function(birthYear) {
     this.age = 2019 - this.birthYear;
  }

};

jashh.age();
console.log(jashh);
//----------------------------code challenge------------
var johnn = {
name: 'joh',
mass: 69,
height: 7, 
calcbmi : function(){
 this.bmi = this.mass/(this.height *this.height);
 return this.bmi;
}
}

var markk = {
  name : 'Abu',
  mass : 70,
  height: 7,
  calcbmi : function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}


if (markk.calcbmi() > johnn.calcbmi()) {
  console.log( markk.name + ' BMI is ' + markk.bmi + ' is greater');
}
else if(markk.bmi < johnn.bmi) {
  console.log (johnn.name + ' BMI is ' + johnn.bmi + ' is greater');
} else {
  console.log ("Both have same BMI's")
}

//-----------loops and iteration-------------

//for loop

for  (var i = 1; i <=20; i ++ ){
  console.log(i);
}

var john = ['john', 'smith' ,1990, 'designer' ,false ];

for (var i=0 ; i < john.length ; i++ ){
console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// continue and break statements

var john = ['john', 'smith' ,1990, 'designer' ,false ];

for (var i=0 ; i < john.length ; i++ ){
    if (typeof john[i] !== 'string') continue;
console.log(john[i]);
}

for (var i=0 ; i < john.length ; i++ ){
  if (typeof john[i] !== 'string') break;
console.log(john[i]);
}

// looping backwards
for (var i = john.length - 1; i >= 0; i-- ){
  console.log(john[i]);
};
//code challenge 5
var AAbu = {
   fullnamee : 'Abu',
   bills : [124, 48, 268, 180, 42], 
   calctips : function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++ )
    { 
    var percentage;
    var bill = this.bills[i];

    if (bill <50) {
    percentage = .2;
    } else if (bill >=50 && bill < 200) {
    percentage = .15;
    } else {
    percentage = .1;
    }

this.tips[i] =bill * percentage;
this.finalValues[i] = bill * bill * percentage;

  } 
 }
}
AAbu.calctips();
console.log(AAbu);

































































































































