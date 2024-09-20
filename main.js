// USUARIO
function UserData() {
const User = prompt("Hi! What is your name?");
alert ("¡Welcome " + User + "!");
console.log ("Welcome", User);

const Age = prompt ("How old are You " + User + "?");
if (Age < 18){
    alert (("Please ") + User + (", only purchase if you have adult supervision!"));
    console.log ("Minors may not purchase without adult supervision.");
}else {
    alert (("Hi ") + User + ("! These gears will take your game to the next level"));
    console.log ("Adults can purchase without restrictions.");
}
}
UserData ();

//ARRAYS
brands = ["Razer", "Logitech", "Corsair", "Redragon"]

// PRODUCTO Y PRECIO
/* KEYBOARDS */
let Keyboards = "Ornata V3 - $69.99"
/* MICES */
let Mices = "Viper Ultimat - $159.99"
/* AUDIO */
let Sound = "Krakenk V3 Pro - $79.99"
/* MATS */
let Mats = "Atlas - $99.99"
/* CHAIRS */
let Chairs = "Iskur - $649.99"

// SWICTH
let Products = prompt ("What are you looking for among these options: Keyboards, Mice, Sound, Mats, Chairs")

switch (Products) {
    case "Keyboards":
        alert (Keyboards);
        break;
    case "Mices":
        alert (Mices);
        break;
    case "Sound":
        alert (Sound);
        break;
    case "Mats":
        alert (Mats);
        break;
    case "Chairs":
        alert (Chairs);
        break;
    default:
        alert ("Please enter one of these options: Keyboards, Mices, Sound, Mats, Chairs")
        break;
}

