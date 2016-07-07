/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append("Khrishawn Powell<br> ");
var awesomethoughts="I am Khrishawn and I am AWESOME!";
console.log(awesomethoughts)
var funthoughts=awesomethoughts.replace("AWESOME!","FUN");
$("#main").append(funthoughts);
console.log(funthoughts);
var Name = "Khrishawn Powell"
var formattedName = HTMLheaderName.replace("%data%",Name);
var role = "Student<br>"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
console.log(formattedName);
console.log(formattedRole);
