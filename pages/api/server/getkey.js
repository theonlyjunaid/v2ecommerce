const app = (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
}
export default app