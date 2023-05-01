const mongoose = require("mongoose");

exports.db = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("Unable To Connect DB ", error);
  }
};

// module.exports = db;

// const mongoose = require("mongoose")
// exports.dbConnect = () => {
//     try {
//         mongoose.connect(process.env.MONGO_URL)
//         console.log("mongo is connect");
//     } catch (error) {
//         console.log("error" + error);
//     }
// }
