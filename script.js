let a = document.getElementById("id1");
let b = document.getElementById("btn");

setInterval(() => {
    a.style.color = "red";
    a.style.backgroundColor = "yellow";

}, 1000);
setInterval(() => {
    a.style.color = "yellow";
    a.style.backgroundColor = "red";

}, 2000);

const handleClick = () => {
    
    
    if (a){
        document.body.style.backgroundColor = "white";
        b.innerText = "Dark Mode";
        a = false;
    }else{
        document.body.style.backgroundColor = "black";
        b.innerText = "Light Mode";
        a = true;
    }
     
}
