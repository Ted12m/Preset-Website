const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hmz:hmz@feedback.shkaz.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('connection successful');
}).catch(() => {
    console.log(Error);
})