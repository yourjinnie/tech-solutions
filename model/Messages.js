const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

const MsgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
},
{collection:"all-msgs"}, { timestamps: true }
);

mongoose.models = {}
const Messages = mongoose.model("Messages", MsgSchema)
module.exports = Messages