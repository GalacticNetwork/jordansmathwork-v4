// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "bro came a long way from the trenches";
say[1] = "bluds lost";
say[2] = "find the map";
say[3] = "imlost²";
say[4] = "find home ez.";
say[5] = "mommy im lost";
say[6] = "bro's drenched";
say[7] = "ez";
say[8] = "this is david. say hi!";
say[9] = "googoogaagaa";
say[10] = "um, im lost 🤓";
say[11] = "Did you know I have a discord server?";
say[12] = "How many sides does a circle have?";
say[13] = "redbull gets you lost.";
say[14] = "You can read btw";
say[15] = "Imagine using chromebooks!";
say[16] = "there are voices in my head and they say use go back to home.";
say[17] = "Redbull gives you wings...";
say[18] = "Wings give you redbull...";
say[19] = "Since 2021!";
say[20] = "By students, for students.";
say[21] = "Nice.";
say[22] = "This took to long to make";
say[23] = "ez";
say[24] = "we love jmw";
say[25] = "clocks";
say[26] = "frick ohio";
say[27] = "running out of ideas";
say[28] = "free man";
say[29] = "tweddledeee";
say[30] = "not our fault if u get caught";
say[31] = "my crush is...";
say[32] = "how tf -airplay";
say[33] = "back at it again";
say[34] = "cool fit";
say[35] = "loser lost";
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