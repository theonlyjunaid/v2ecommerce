import React from 'react'
import CartItem from '../components/Cart/CartItem'
import Navbar from '../components/Navbar'

function cart() {
    const makePayment = async () => {
        console.log("here...");
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
            t.json()
        );
        console.log(data);
        var options = {
            key: process.env.RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
            name: "Manu Arora Pvt Ltd",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Test Transaction",
            image: "https://manuarora.in/logo.png",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Manu Arora",
                email: "manuarorawork@gmail.com",
                contact: "9999999999",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };
    return (
        <div>
            <Navbar />
            <CartItem item={makePayment} />
        </div>
    )
}

export default cart