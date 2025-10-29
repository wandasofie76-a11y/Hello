
function readme(){
    let Course= prompt ("Emter your prefered course:");

     document.getElementById("Course").innerHTML= Course
}

const student = {
    School: "School of Computing Sciences",
    StudentId: prompt("Enter your Student ID: "),
    StudentAge: 18,
}
 student.Finalgrade = "A";
   function Readinfo(){
    let info = student.StudentId;
      document.getElementById("student").innerHtml = student.StudentId
   }
