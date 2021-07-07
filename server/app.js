const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', () => {
    res.send('welcome to form')
})


  

app.post('/api/form', (req, res) => {

    let data = req.body;
    console.log(data)
    let smptTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: '465',
        auth: {
            user: "develearn.campaigns@gmail.com",//user email
            pass: "badprogramming" //user email password
        }


    });

    let mailOptions = {
        from: data.mail,
        to: "develearn.campaigns@gmail.com",//user email
        subject: `Develearn Course Enquiry from ${data.name}`,
        html: `
        <h3>information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Mobile: ${data.MobileNo}</li>
        <li>Email: ${data.email}</li>
        <li>Courses: ${data.courses}</li>
        <li>message: ${data.message}</li>
            
        </ul>
        `
    };

    smptTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send("success")
        }
    })

    smptTransport.close();

})





const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server starting at ${PORT}`)
})