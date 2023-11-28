const mongoose = require("mongoose");

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect("mongodb+srv://yourjinnie0:vmqal4iguffELyU2@cta.iidy1em.mongodb.net/?retryWrites=true&w=majority");
  return handler(req, res);
};
export default connectDb;
