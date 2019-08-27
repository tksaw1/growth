

/* Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
    
    
}
*/

// Declaration of Values
var crop = [10,10];

/* j = 0 is Green Beans
 * j = 1 is Red Beans
 * j = 2 is Basil
 * j = 3 is Mint
 * j = 4 is Spring Onions
 * j = 5 is Eucalyptus
 */


/* i = 0 is Hydration
 * i = 1 is Soil Fertilization
 * i = 2 is UV Light
 * i = 3 is Pesticide
 */

// Average values
var h2OStats = document.getElementById("H2Ostats");
var fertilizerStats = document.getElementById("Fertilizerstats");
var uvlStats = document.getElementById("UVLstats");


// Hyrdation values
//crop[0,0] = 90.00; // this line of code is where the variables name will be downloaded via a server to the arduino sensors

var hy_beansGreen = 90.00;
var hy_maxBGreen = 100.00;
hy_beansGreen = (hy_beansGreen/hy_maxBGreen) * 100; // not sure whether I should use arrays or stick with variables
document.getElementById("hy_BG").innerHTML = hy_beansGreen.toString(10)+"%";


//document.getElementById("hy_BG").style.color = "black";
//document.getElementById("hy_BG").style.width = hy_beansGreen.toString(10);


var hy_beansRed = 1.90; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var hy_maxBRed = 100.00;
hy_beansRed = (hy_beansRed/hy_maxBRed) * 100;
document.getElementById("hy_BR").innerHTML = hy_beansRed.toString(10)+"%";

var hy_basil = 15.70; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var hy_maxBasil = 100.00;
hy_basil = (hy_basil/hy_maxBasil) * 100;
document.getElementById("hy_B").innerHTML = hy_basil.toString(10)+"%";

var hy_mint = 5.60; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var hy_maxMint = 100.00;
hy_mint = (hy_mint/hy_maxMint) * 100;
document.getElementById("hy_M").innerHTML = hy_mint.toString(10)+"%";

var hy_onionsSpring = 2.10; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var hy_maxOSpring = 100.00;
hy_onionsSpring = (hy_onionsSpring/hy_maxOSpring) * 100;
document.getElementById("hy_OS").innerHTML = hy_maxOSpring.toString(10)+"%";



// Soil Fertilization Values
var sf_beansGreen = 90.00; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var sf_maxBGreen = 100.00;
sf_beansGreen = (sf_beansGreen/sf_maxBGreen) * 100;
document.getElementById("sf_BG").innerHTML = sf_beansGreen.toString(10)+"%";

var sf_beansRed = 1.90; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var sf_maxBRed = 100.00;
sf_beansRed = (sf_beansRed/sf_maxBRed) * 100;
document.getElementById("sf_BR").innerHTML = sf_beansRed.toString(10)+"%";

var sf_basil = 15.70; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var sf_maxBasil = 100.00;
sf_basil = (sf_basil/sf_maxBasil) * 100;
document.getElementById("sf_B").innerHTML = sf_basil.toString(10)+"%";

var sf_mint = 5.60; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var sf_maxMint = 100.00;
sf_mint = (sf_mint/sf_maxMint) * 100;
document.getElementById("sf_M").innerHTML = sf_mint.toString(10)+"%";

var sf_onionsSpring = 2.10; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var sf_maxOSpring = 100.00;
sf_onionsSpring = (sf_onionsSpring/sf_maxOSpring) * 100;
document.getElementById("sf_OS").innerHTML = sf_maxOSpring.toString(10)+"%";



// ********* P.S forgot to include Eucalyptus


// UV Light
var uv_beansGreen = 90.00; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var uv_maxBGreen = 100.00;
uv_beansGreen = (uv_beansGreen/uv_maxBGreen) * 100;
document.getElementById("uv_BG").innerHTML = uv_beansGreen.toString(10)+"%";

var uv_beansRed = 1.90; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var uv_maxBRed = 100.00;
uv_beansRed = (uv_beansRed/uv_maxBRed) * 100;
document.getElementById("uv_BR").innerHTML = uv_beansRed.toString(10)+"%";

var uv_basil = 15.70; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var uv_maxBasil = 100.00;
uv_basil = (uv_basil/uv_maxBasil) * 100;
document.getElementById("uv_B").innerHTML = uv_basil.toString(10)+"%";

var uv_mint = 5.60; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var uv_maxMint = 100.00;
uv_mint = (uv_mint/uv_maxMint) * 100;
document.getElementById("uv_M").innerHTML = uv_mint.toString(10)+"%";

var uv_onionsSpring = 2.10; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var uv_maxOSpring = 100.00;
uv_onionsSpring = (uv_onionsSpring/uv_maxOSpring) * 100;
document.getElementById("uv_OS").innerHTML = uv_maxOSpring.toString(10)+"%";

// Pesticide
var pe_beansGreen = 90.00; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var pe_maxBGreen = 100.00;
pe_beansGreen = (pe_beansGreen/pe_maxBGreen) * 100;
document.getElementById("pe_BG").innerHTML = pe_beansGreen.toString(10)+"%";

var pe_beansRed = 1.90; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var pe_maxBRed = 100.00;
pe_beansRed = (pe_beansRed/pe_maxBRed) * 100;
document.getElementById("pe_BR").innerHTML = pe_beansRed.toString(10)+"%";

var pe_basil = 15.70; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var pe_maxBasil = 100.00;
pe_basil = (pe_basil/pe_maxBasil) * 100;
document.getElementById("pe_B").innerHTML = pe_basil.toString(10)+"%";

var pe_mint = 5.60; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var pe_maxMint = 100.00;
pe_mint = (pe_mint/pe_maxMint) * 100;
document.getElementById("pe_M").innerHTML = pe_mint.toString(10)+"%";

var pe_onionsSpring = 2.10; // this line of code is where the variables name will be downloaded via a server to the arduino sensors
var pe_maxOSpring = 100.00;
pe_onionsSpring = (pe_onionsSpring/pe_maxOSpring) * 100;
document.getElementById("pe_OS").innerHTML = pe_maxOSpring.toString(10)+"%";

