const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sneha:riya@1079@food.h3kud.mongodb.net/food?retryWrites=true&w=majority'

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Connection error:", err.message);
  }
};

connectToDB();
