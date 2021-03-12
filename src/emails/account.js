const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to:email,
    from:'Mouniswar7@gmail.com',
    subject:`Thanks for Joining in`,
    text: `Welcome to the App, ${name}. Let me know how you get along with the app`,
  }).then(() => {
    console.log('Email Sent')
  }).catch((e) => {
    console.log(e)
  })
}

const sendEmailOnCancellation = (email, name) => {
  sgMail.send({
    to:email,
    from:'Mouniswar7@gmail.com',
    subject:'Want to know What Regret You have',
    text:`Hi ${name}, May i please what regret you have and what can we do to improve our Services`
  }).then(() => {
    console.log('EMail Sent')
  }).catch((e) => console.log(e))
}

module.exports = {
  sendWelcomeEmail,
  sendEmailOnCancellation
}