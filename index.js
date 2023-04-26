
document.getElementById("P").onclick = function(){
    document.getElementById("K").style.backgroundColor='Green';
    let arr = ["Blue", "Pink", "Red", "Green", "yellow", "Black", "Purple", "Coral", "Mint", "Mustard", "Pulm", "Gray", "Ruby", "Clay", "Magenta", "Bronze", "Lime", "Gainsboro", "Orange-red"];
    let x=Math.floor(Math.random()*(arr.length));
    // document.getElementById("R").innerHTML =x;
    document.getElementById("K").style.backgroundColor=arr[x];

}
// document.getElementById