const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vrinda:Vrinda%40123@cluster0.kzqjm5z.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("✅ Connected");
    process.exit();
})
.catch((err) => {
    console.log(err);
    process.exit();
});