const catchError = require("../utils/catchError");

const stripe = require("stripe")(
  "sk_test_51HoAvtGaNOaCdqY8oM36c2Y60g1ovUTQvke5tZL8EZAcy1eSZZy4gA7NbybgtwsvMxfkpaEpwGcRzmKzQULjSzGC00VRsL3xDv"
);
const orderProduct = (products, cart) => {
	if (cart) {
	return   products.map((item) => ({
			price_data: {
				currency: 'inr',
				product_data: {
					name: item.product.name,
				},
				unit_amount: item.product.price * 100,
			},
			quantity: item.qty,
        }));
	}
	return  products.map((item) => ({
		price_data: {
			currency: 'inr',
			product_data: {
				name: item.name,
			},
			unit_amount: item.price * 100,
		},
		quantity: item.quantity,
	}));
}

exports.createCheckoutSession = catchError(async(req,res,next)=>{
    const { products } = req.body;
    const { cart } = req.params;
  
    const line_items = orderProduct(products, cart); 

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: "payment",
        success_url: "http://127.0.0.1/payment-success",
        cancel_url:"http://127.0.0.1/payment-fail",
    }); 
    
    res.json({
        id: session.id
    });

});
