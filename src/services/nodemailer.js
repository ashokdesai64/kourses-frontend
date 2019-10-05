const nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//     // service: "gmail",
//     // auth: {
//     //     user: "jaydip.qsek@gmail.com",
//     //     pass: "Jaydip@605"
//     // }
//     service: 'gmail',
//     auth: {
//         type: 'OAuth2',
//         clientId: '338442871337-fh49fjaav2c8112tdtrsg8tnaohpktoc.apps.googleusercontent.com',
//         clientSecret: 'sQEQ8b09R9js9sWwkOwBKbZf'
//     }
// });
// const mailOptions = {
//     from: 'james.patel710@gmail.com',
//     to: 'jaydip.qsek@gmail.com',
//     subject: 'Test Subject',
//     text: 'This is a test',
//     html:'hiii',
//     auth: {
//         user: 'james.patel710@gmail.com',
//         refreshToken: '1/lYKLXNBJYtc-EO6VdhvWm6UbTdl6zeeIk4MZ2yPCUJM',
//         accessToken: 'ya29.Il-UByvAvu3HXvht-mjcPq1eMs8ZUmDU7UabO-1Mq6eFo4KPoEyXtGSrg5R3y9lik148eNfwlnM8pKyccTxobSwoLHmDpgDCEETdcc5LApGKElzsrk1YnbBrVUbDJn2PwQ'
//     }
// }

// transporter.sendMail(mailOptions, function (err, info) {
//     if (err)
//         console.log(err)
//     else
//         console.log(info);
// });

nodemailer.createTestAccount((err, account) => {

    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: "jaydip.qsek@gmail.com",
    //         pass: "Jaydip@605"
    //     }
    // });
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        // auth: {
        //     user: "jaydip.qsek@gmail.com",
        //     pass: "Jaydip@605"
        // }
        // service: 'gmail',
        auth: {
            type: 'OAuth2',
            clientId: '338442871337-fh49fjaav2c8112tdtrsg8tnaohpktoc.apps.googleusercontent.com',
            clientSecret: 'sQEQ8b09R9js9sWwkOwBKbZf'
        }
    });

    const mailOptions = {
        from: 'james.patel710@gmail.com',
        to: 'jaydip.qsek@gmail.com',
        subject: 'Test Subject',
        text: 'This is a test',
        html:'hiii',
        auth: {
            user: 'james.patel710@gmail.com',
            refreshToken: '1/lYKLXNBJYtc-EO6VdhvWm6UbTdl6zeeIk4MZ2yPCUJM',
            accessToken: 'ya29.Il-UByvAvu3HXvht-mjcPq1eMs8ZUmDU7UabO-1Mq6eFo4KPoEyXtGSrg5R3y9lik148eNfwlnM8pKyccTxobSwoLHmDpgDCEETdcc5LApGKElzsrk1YnbBrVUbDJn2PwQ'
        }
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    })
})