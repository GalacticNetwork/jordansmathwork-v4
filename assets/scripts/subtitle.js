// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "Rare subtitle (real)";
say[1] = "real";
say[2] = "V4!";
say[3] = "games²";
say[4] = "Is on top.";
say[5] = "nice sunset";
say[6] = "You get a cookie!";
say[7] = "Remember your manners!";
say[8] = "this is david. say hi!";
say[9] = "googoogaagaa";
say[10] = "Beep boop! Are you a robot?";
say[11] = "Did you know I have a discord server?";
say[12] = "How many sides does a circle have?";
say[13] = "My disappointment is immeasurable and my day is ruined.";
say[14] = "You can read btw";
say[15] = "Imagine using chromebooks!";
say[16] = "there are voices in my head and they say use JMW.";
say[17] = "Redbull gives you wings...";
say[18] = "Wings give you redbull...";
say[19] = "Since 2021!";
say[20] = "By students, for students.";
say[21] = "Nice.";
say[22] = "This took to long to make";
say[23] = "69 hehe funny number";
say[24] = "we love jmw";
say[25] = "Awesome!";
say[26] = "Down in ohio!";
say[27] = "noot noot!";
say[28] = "100% Fresh!";
say[29] = "LOL";
say[30] = "not our fault if u get caught";
say[31] = "Hacking your pc...";
say[32] = "we finna make a banger with this one -airplay";
say[33] = "back at it again";
say[34] = "apps are pretty cool";
say[35] = "setting sunset...";
say[36] = "uhm, every subtitle is rare 🤓";
say[37] = "slqnt was here 😱";
say[38] = "stay in school kids";


// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
// credit to 3kh0 for the code :)