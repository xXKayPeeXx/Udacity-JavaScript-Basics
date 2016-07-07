/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append("Khrishawn Powell<br> ");
var awesomethoughts="I am Khrishawn and I am AWESOME!<br>";
console.log(awesomethoughts)
var funthoughts=awesomethoughts.replace("AWESOME!","FUN");
$("#main").append(funthoughts);
console.log(funthoughts);
var Name = "Khrishawn Powell"
var formattedName = HTMLheaderName.replace("%data%",Name);
var role = "Student"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName)
var HTMLskills = ["Leadership", "Critical Thinker"]
$("#main").append(HTMLskills)
console.log(HTMLskills);
var bio = {"name":"Khrishawn Powell",
 "age": 18,
"Mobile":"02085677856",
"Twitter": ""@Its_KP"
"Location":"London"};
console.log(bio);
