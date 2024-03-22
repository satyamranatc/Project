import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mongoose Configuration
mongoose.connect('mongodb://localhost:27017/shopio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for your data
const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: String
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

// Function to insert a new product
const insertProduct = async (productName, productPrice) => {
  try {
    // Create a new product instance
    const newProduct = new Product({
      productName: productName,
      productPrice: productPrice
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();
    console.log("Product inserted successfully:", savedProduct);
    return savedProduct; // Return the saved product if needed
  } catch (error) {
    console.error("Error inserting product:", error);
    throw error; // Throw the error for handling in the calling code
  }
};

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', (req, res) => {
    console.log("Hi")
    res.json({"Name":"Jaya"})
});

app.post('/SubmitData', async (req, res) => {
    try {
        const productName = req.body.ProductName;
        const productPrice = req.body.ProductPrice;

        // Insert the product into the database
        await insertProduct(productName, productPrice);

        res.status(200).json({ 
            message: 'Data received and inserted successfully',
            ProductName: productName,
            ProductPrice: productPrice
        });
    } catch (error) {
        console.error('Error handling SubmitData:', error);
        res.status(500).json({ 
            error: 'Internal server error'
        });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});