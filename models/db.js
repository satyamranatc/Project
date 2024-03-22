import mongoose from "mongoose";

// Define a schema for your data
const productSchema = new mongoose.Schema({
    productName: String,
    productPrice: String
});

// Create a model based on the schema
const Product = mongoose.model('Products', productSchema);

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

export default insertProduct;
