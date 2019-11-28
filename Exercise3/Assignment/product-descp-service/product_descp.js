module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
	var product_id = msg.productId;
	for (var i in mockData) {
		//console.log("Looking for productURL");
		if (mockData[i].product_id == product_id) {
			//console.log(mockData[i].product_url);
			respond(null, { result: mockData[i].product_url });
			break;		
		}	
	}
	// done(null,null); //if product_id was not found just print msg to console
	console.log("Product_id was "+product_id); 
    }


    function productName(msg, respond) {
	var product_id = msg.productId;
	for (var i in mockData) {
		//console.log("Looking for productName");
		if (mockData[i].product_id == product_id) {
			//console.log(mockData[i].product_name);
			respond(null, { result: mockData[i].product_name });
			break;		
		}	
	}
	// done(null,null); //if product_id was not found just print msg to console
	console.log("Product_id was "+product_id); 
    }
}
