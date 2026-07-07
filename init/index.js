const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main();

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");

        await initDB();

        await mongoose.connection.close();
        console.log("Connection Closed");
    } catch (err) {
        console.log(err);
    }
}

const initDB = async () => {
    await Listing.deleteMany({});

    const data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a43d84f8f5b5ba5e63a30d6", // Replace with a valid User _id
    }));

    await Listing.insertMany(data);

    console.log("Data was initialized");
};