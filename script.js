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
        document.getElementById("myImg1").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekY78PU7AdMLKukBFBYBV97JeQbmcZibFyY4Ydbc&s";
    }else{
        document.body.style.backgroundColor = "black";
        b.innerText = "Light Mode";
        a = true;
        document.getElementById("myImg1").src = "data:image/jpeg;base64,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";
    }
     
}


