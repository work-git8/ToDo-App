const mongoose = require(`mongoose`);
mongoose.set("strictQuery", false);

// const connection = mongoose
//   .createConnection(
//     ""
//   )
//   .on(`open`, () => {
//     console.log("mongodb connected");
//   })
//   .on(`error`, () => {
//     console.log("mongodb connection error");
//   });
const connection = mongoose.connect('mongodb+srv://user1:abcd1234@cluster0.pmaxejq.mongodb.net/todoDB')
.then(() => console.log('MongoDB Connected!'));
module.exports = connection;
