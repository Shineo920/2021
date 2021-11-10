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
  setTimeout(refresh, 5000);
}
}
function refresh(){
alert("5 seconds up");
document.getElementById("username").value = "";
location.reload();
}