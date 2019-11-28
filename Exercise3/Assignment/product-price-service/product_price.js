module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product, cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond){
	var product_id = msg.productId;
	for (var i in mockData){
		if (mockData[i].product_id == product_id) {
			//console.log(mockData[i].product_price);
			respond(null, { result: mockData[i].product_price });
			break;		
		}	
	}
	//in case product_id was not found
	console.log("Product_id was "+product_id);
    }

}
