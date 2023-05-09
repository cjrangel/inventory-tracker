var itemName=document.getElementById('itemName');
var marketplace=document.getElementById('marketPlace');
var cost=document.getElementById('cost');
var forSalePrice=document.getElementById('forSalePrice');
var profit=document.getElementById('profit');

var btn = document.getElementById("submitButton");
btn.addEventListener("click", function() {
   
  displayInfo(itemName,marketplace,cost,forSalePrice,profit);
});


function displayInfo(itemName,marketplace,cost,forSalePrice,profit){
console.log(itemName.value);
console.log(marketplace.value);
console.log(cost.value);
console.log(forSalePrice.value);
console.log(profit.value);



}

// displayInfo(itemName,marketplace,cost,forSalePrice,profit);