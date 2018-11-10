let tableify = require("html-tableify");

$.ajax({
  url: "api/v1/items",
  type: "GET"
}).then(function (data) {
  console.log(data);
  let parsedData = [];// expected to be a new parsed array of objects we defined
  //for loop running through the "data" array of objects
  for (let i = 0; i < data.length; i++) {
    
    let dataObj = {
      //this is where we will parse for what we want then push to a new array
      name: data[i].name,
      sku: data[i].sku,
      description: data[i].description,
      quantity: data[i].quantity,
      expirationDate: data[i].quantity,
      waiteTimeOnOrderHours: data[i].waiteTimeOnOrderHours

    }
    parsedData.unshift(dataObj);
  }

 return tableHTML = tableify(parsedData, {
     headers: [{
        name: "name",
        align: "left",
        title: "Product Name"
     },{
        name: "sku",
        title: "Product SKU"
     },{
        name: "description",
        title: "Description of Product"
     }]
 }); //(parsedData, {config})

});

module.exports = tableHTML;