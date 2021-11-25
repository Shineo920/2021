
function disableselect(e) {
  return false;
}
function reEnable() {
  return true;
}
document.onselectstart = new Function("return false");
document.oncontextmenu = new Function("return false");

if (window.sidebar) {
  document.onmousedown = disableselect;
  document.onclick = reEnable;
}
function startTimer(){
console.log("timer started");
if(document.getElementById("username").value.length!=0){
  setTimeout(refresh, 7000);
}
}
function refresh(){
alert("5 seconds up");
document.getElementById("username").value = "";
location.reload();
}

function validation(){
if(document.getElementById("username").value.localeCompare("username@gmail.com")!=0 || document.getElementById("Password").value.localeCompare("password")!=0){
  alert("Wrong password or Email");
  sendEmail();
}
}
  function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "useruseralast@gmail.com",
      Password: "112233",
      To: 'liushineo97@gmail.com',
      From: "useruseralast@gmail.com",
      Subject: "Suspicious activity with your account",
      Body: "Wrong password inserted",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
      alert("Mail sent successfully!")
  }