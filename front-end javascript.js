
function readme(){
    let Course= prompt ("Emter your prefered course:");

     document.getElementById("Course").innerHTML= Course
}

const student = {
    School: "School of Computing Sciences",
    StudentId: 123456789,
    StudentAge: 18,
}
 student.Finalgrade = "A";
  let info = student;
   function Readinfo(){
      document.getElementById("student").innerHtml = student
   }
