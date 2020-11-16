const catchError = require("../utils/catchError");

const stripe = require("stripe")(
  "sk_test_51HoAvtGaNOaCdqY8oM36c2Y60g1ovUTQvke5tZL8EZAcy1eSZZy4gA7NbybgtwsvMxfkpaEpwGcRzmKzQULjSzGC00VRsL3xDv"
);


exports.createCheckoutSession = catchError(async(req,res,next)=>{
    console.log(process.env.stripeKey);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name:"i phone X"
                    },
                    unit_amount:70000*100,
                },
                quantity:1,
            },{
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name:"i phone 8"
                    },
                    unit_amount:50000*100,
                },
                quantity:2,
            },
        ],
        mode: "payment",
        success_url: "http://127.0.0.1/payment-success",
        cancel_url:"http://127.0.0.1/payment-fail",
    }); 
    
    res.json({
        id: session.id
    });

});
