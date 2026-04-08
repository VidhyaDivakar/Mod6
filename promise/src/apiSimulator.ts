//Function fetchProductCatalog
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => { //using <> to define the type of data
    return new Promise((resolve, reject) => { // for the aynch operation we use new promise
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

//fetchProductReviews() with mandatory product id parameter
export const fetchProductReviews = (productId: number): Promise<{ reviewId: number; productId: number; rating: number; comment: string }[]
> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.85) {
                resolve([
                    {
                        reviewId: 1, productId, rating: 5,
                        comment: "You can trust this product!",
                    },
                    {
                        reviewId: 2, productId, rating: 4,
                        comment: "Very good, but a little bit of lag, can be ignored.",
                    },
                    {
                        reviewId: 3, productId, rating: 3,
                        comment: "Average experience, works as expected.",
                    },
                ]);
            } else {
                reject(`Failed to fetch reviews for product ID ${productId}`);
            }
        }, 1500); // Added 1.5 seconds delay
    });
};

//fetchSalesReport with totalSales, unitSold, averagePrice
export const fetchSalesReport = (): Promise<{ totalSales: number; unitSold: number; averagePrice: number; }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                    totalSales: 10000,
                    unitSold: 50,
                    averagePrice: 240,
                });
            } else {
                reject("Failed to fetch sales report");
            }
        }, 2000);
    });
};

//Ttotal dcles