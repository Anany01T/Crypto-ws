var btc = document.getElementById("bitcoin");
var dog = document.getElementById("doge");
var ether = document.getElementById("ether");

var settings ={
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers":{}
}
$.ajax(settings).done(function(response){
      console.log(response);
     btc.innerHTML = response.bitcoin.usd;
     dog.innerHTML = response.dogecoin.usd;
     ether.innerHTML = response.ethereum.usd;
});
