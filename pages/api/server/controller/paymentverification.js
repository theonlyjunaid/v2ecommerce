const paymentVerification = async (req, res) => {
    // console.log(req.body)
    // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body
    // const body = razorpay_order_id + "|" + razorpay_payment_id;


    // const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    //     .update(body.toString())
    //     .digest('hex');
    // console.log("sig received ", razorpay_signature);
    // console.log("sig generated ", expectedSignature);
    // const isAuthentic = expectedSignature === razorpay_signature;
    // if (isAuthentic) {
    //     await Payment.create({
    //         razorpay_payment_id,
    //         razorpay_order_id,
    //         razorpay_signature,
    //     })
    //     res.redirect("http://localhost:3000/paymentsuccess?referenceId=" + razorpay_payment_id)
    // }
    // else {
    res.status(200).json({
        succewss: false
    })
    // }
}
export default paymentVerification