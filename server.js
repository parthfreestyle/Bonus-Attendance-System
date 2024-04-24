let btn = document.getElementById("submitButton");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Retrieve values from form inputs
    let stu_name = document.getElementById("student-name").value;
    let stu_rollno = document.getElementById("roll-no").value;
    let stu_ad = document.getElementById("attendance-date").value;
    let stu_activity = document.getElementById("activity").value;
    let stu_faculty = document.getElementById("faculty").value;
    let stu_bonus_attendance = document.getElementById("bonus-attendance").value;

    // Log the retrieved values
    console.log("Student Name:", stu_name);
    console.log("Roll No:", stu_rollno);
    console.log("Attendance Date:", stu_ad);
    console.log("Activity:", stu_activity);
    console.log("Faculty:", stu_faculty);
    console.log("Bonus Attendance:", stu_bonus_attendance);
});
