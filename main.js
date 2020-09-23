var student_names = [0,0,0,0];
function submit()
{
    var name1 = document.getElementById("student_1").Value;
    var name2 = document.getElementById("student_2").Value;
    var name3 = document.getElementById("student_3").Value;
    var name4 = document.getElementById("student_4").Value;
    student_names.push(name1);
    student_names.push(name2);
    student_names.push(name3);
    student_names.push(name4);

 console.log(student_names);
 document.getElementById("display_name").innerHTML=student_names;
 document.getElementById("button_submit").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_names.sort();
    console.log(student_names);
   document.getElementById("display_name").innerHTML=student_names;
}