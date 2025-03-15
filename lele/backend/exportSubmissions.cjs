const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
require('dotenv').config();
const nodemailer = require('nodemailer');

async function exportSubmissions() {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    const submissions = await db.all('SELECT * FROM submissions');
    await db.close();

    const jsonSubmissions = JSON.stringify(submissions, null, 2);
    console.log("Submissions exported as JSON:", jsonSubmissions);

    // Send email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'lelealiga@gmail.com',
        subject: 'Submission Details',
        text: jsonSubmissions
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
}

exportSubmissions().catch(console.error);
