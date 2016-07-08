/*
This is empty on purpose! Your code to build the resume will go here.
*/
$("#main").append("Khrishawn Powell<br> ");
//var awesomethoughts="I am Khrishawn and I am AWESOME!<br>";
//console.log(awesomethoughts)
//var funthoughts=awesomethoughts.replace("AWESOME!","FUN");
//$("#main").append(funthoughts);
//console.log(funthoughts);
var Name = "Khrishawn Powell"
var formattedName = HTMLheaderName.replace("%data%",Name);
var role = "Student"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName)
/*var HTMLskills = ["Leadership", "Critical Thinker"]
$("#main").append(HTMLskills)
console.log(HTMLskills)
*/
/*$("#main").append(bio.Mobile);
$("#main").append(bio.Twitter);
$("#main").append(bio.skills);
$("#main").append(bio.bioPic);
var work ={};
work.position = "Customer Service assistant"
work.employer = "Nobody"
work.years = "2 years"
$("#main").append(work.position);
$("#main").append(work.pemployer);
$("#main").append(work.years);
*/
var education = {
  "name": "Woolwich Polytechnic",
  "Location":"Woolwich",
  "Qualifications": ["A Level Mathematics", "A Level Government and Politics", "A Level Business"],
  "dates":2017,
  "url":"http://www.woolwichpoly.co.uk/"
}
var work = {
  "Occupation":"Customer Service assistant",
  "Employer":"ASDA",
  "Time of employment": "2 Years"
}
var Achievements = {
  "Awards":"Princess Diana Award"
}
var bio = {"name":"Khrishawn Powell",
"age": 18,
"Mobile":"02085677856",
"Twitter": "@Its_KP",
"Location":"London",
"welcomeMessage": "Ambition is Key to success",
"skills": ["Making money", "Deep Thinker"],
"bioPic": "images/fry.jpg"}
