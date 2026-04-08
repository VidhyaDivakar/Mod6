//fetchProductCatalog()
fetchProductCatalog()
    .then((products) => {
        console.log("Product Catalog:");
        products.forEach((product) => {
            console.log(`- ${product.name}: $${product.price}`);
        });
    })
    .catch((error) => {
        console.error("Error fetching product catalog:", error);
    });