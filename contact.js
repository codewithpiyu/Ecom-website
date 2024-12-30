// console.log("connect page contact");
let name,email,subject, message;
name = document.getElementById('username');
//   console.log(name);
email = document.getElementById ('email') ;
subject = document.getElementById('subject') ;
message = document.getElementById('message') ;
 
const btn = document.getElementById( 'btn');

btn.addEventListener('click' , function(e){
    e.preventDefault()
    let msg = `Name: ${name.value}\n
               Email: ${email.value}\n
               Subject: ${subject.value}\n
               Message: ${message.value}\n
               `;
        console.log('msg: ', msg);
});

