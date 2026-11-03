const express = require("express"); /////// framework

const app = express();

let todosRoutes = require("./routes/todos");
const mongoose=require("mongoose")
/////// middleware    بوابة
app.use(express.json());



mongoose.connect("mongodb://localhost:27017/myapp")
app.use("/todos", todosRoutes);

/// custom middleware
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

////put
//// delete

////////////////////RESTFUL API
/// get     /users               get
///// getById   /users/:id       get
///// postNewUser   /users       post
/////  edit      /users/:id      patch Or PUT
///// delete    /users/:id       delete

/////// products

// app.get('/products')
// app.get('/users')
// app.post('')

app.listen(1717, () => console.log("Server is running on port 1717"));
