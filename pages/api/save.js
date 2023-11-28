import Messages from "../../model/Messages";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const newMsg = new Messages({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });

      await newMsg.save();
      console.log("okay");
      return res.json({ success: true, msg: "Thank You we will contact you soon..." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, msg: "Server error...." });
    }
  }
};

export default connectDb(handler);
