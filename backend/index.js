const app = require("./app");
const connection = require(`./db`);
const UserModel = require("./model/user_model");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!!........");
});

app.listen(port, () => {
  console.log(`Server listening on Port http://localhost:${port}`);
});
