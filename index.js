
//alert("welcome");
var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6 )+1;
console.log(random1);
if(random1 > random2)
{
    var message="🚩 player 1 won";
}
else if(random2>random1)
{
    var message="player 2 won 🚩";
}
else
{
    var message="draw";
}
var image1="images/dice"+random1+".png";
var image2="images/dice"+random2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);
document.querySelector("h1").innerHTML=message;
