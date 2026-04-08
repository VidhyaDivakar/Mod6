//fetchProductCatalog() to fetch product details and display them in console
import { fetchProductCatalog } from "./apiSimulator";
import { fetchProductReviews } from "./apiSimulator";
import { fetchSalesReport } from "./apiSimulator";
import { NetworkError, DataError } from "./apiSimulator";
// function to handle the entire flow of API calls
const apiCall = () => {
    fetchProductCatalog().then((products) => { // first we fetch the product catalog, then we handle the reviews and sales report in the .then() chain
        console.log("Product Catalog:"); // we get the products in array
        console.log(products);

        // Fetching reviews for each product from fetchProductReviews()
        const reviewPromises = products.map((product) => { // map creates new array of promise
            return fetchProductReviews(product.id)
                .then((reviews) => {
                    console.log(`Reviews for ${product.name}:`);
                    console.log(reviews);
                })
                .catch((error) => {
                    console.error(
                        `Fetching the errors for product ID ${product.id}:`,
                        error
                    );
                });
        });

        return Promise.all(reviewPromises);
    })
        .then(() => {
            return fetchSalesReport();
        })
        .then((report) => {
            console.log("Sales Report:");
            console.log(report);
        })
        .catch((error) => {
            if (error instanceof NetworkError) {
                console.error("Network issue:", error.message);
            } else if (error instanceof DataError) {
                console.error("Data issue:", error.message);
            } else {
                console.error("Unknown error:", error);
            }
        })
        .finally(() => {
            console.log("All API calls have been attempted.");
        });


    apiCall();
}