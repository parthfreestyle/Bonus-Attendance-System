const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

let emails = ["somani.parth3@gmail.com", "akshaykumarhiran2@gmail.com" , "mantrishivam1906@gmail.com"];

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail(email, subject, obj) {
  
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "somani.parth3@gmail.com",
        pass: "vnlv kkhm nayb fuzi",
      },
    });

    const mail_configs = {
      from: "somani.parth3@gmail.com", // Sender's email address
      to: emails.join(","),
      subject: subject,
      html: `
      <h2>Leave Request</h2>

      <p><strong>Student Name:</strong> ${obj.stu_name} </p>
      <p><strong>Roll Number:</strong> ${obj.stu_rollno} </p>
      <p><strong>Leave Starting Date:</strong> ${obj.stu_ad} </p>
      <p><strong>Number of Leaves:</strong> ${obj.stu_bonus_attendance}</p>
      <h2><strong>Reason for Leave:</strong> ${obj.stu_activity}</h2>

        <p>I understand that my absence from class may disrupt the learning environment, and I assure you that I will make every effort to catch up on missed work promptly.</p>
        
        <p>Thank you for your understanding and cooperation.</p>
        
        <p>Sincerely,<br>${obj.stu_name}<br>${obj.stu_rollno}</p>
      `,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.post("/sendEmail", (req, res) => {
  // Extract data from the request body
  const { stu_name, stu_rollno, stu_ad, stu_activity, stu_faculty, stu_bonus_attendance ,faculty_mail } = req.body;

  // Log the received data
  console.log('Received data:');
  console.log('Student Name:', stu_name);
  console.log('Roll No:', stu_rollno);
  console.log('Attendance Date:', stu_ad);
  console.log('Activity:', stu_activity);
  console.log('Faculty:', stu_faculty);
  console.log('Bonus Attendance:', stu_bonus_attendance);
  console.log('faculty_mail', faculty_mail);

  if(!emails.includes(faculty_mail))
  {
      emails.push(faculty_mail);
  }

  //if(emails.includes())

  // Send email using the extracted data
  sendEmail("akshaykumarhiran2@gmail.com", "Attendance Form Submission", req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
