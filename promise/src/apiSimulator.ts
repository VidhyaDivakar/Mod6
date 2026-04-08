// Adding error classes for handling few error scneraios
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}

//Function fetchProductCatalog with id, name, price parameters
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => { //using <> to define the type of data
    return new Promise((resolve, reject) => { // for the aynch operation we use new promise
        setTimeout(() => {
            const isNetworkAvailable = Math.random() < 0.8;
            if (isNetworkAvailable) {
                return reject(new NetworkError("Failed to fetch product catalog"));
            }
            const data = [
                { id: 1, name: "Laptop", price: 1200 },
                { id: 2, name: "Headphones", price: 200 },
            ];
            // Simulate data issue
            const isDataValid = Math.random() < 0.9;

            if (!isDataValid) {
                return reject(new DataError("Invalid product data received"));
            }
            resolve(data);
        }, 1000);
    });
};

//fetchProductReviews() with mandatory product id parameter
export const fetchProductReviews = (productId: number): Promise<{ reviewId: number; productId: number; rating: number; comment: string }[]
> => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() < 0.2) {
                return reject(new NetworkError('Failed to fetch reviwes for product ID ${productId}'));
            }
            const reviews = [
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
            ];
            if (Math.random() < 0.1) {
                return reject(new DataError("Corrupted review data"));
            }

            resolve(reviews);
        }, 1500); // Added 1.5 seconds delay
    });
};

//fetchSalesReport with totalSales, unitSold, averagePrice
export const fetchSalesReport = (): Promise<{ totalSales: number; unitSold: number; averagePrice: number; }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                return reject(new NetworkError("Failed to fetch sales report"));
            }
            const report = {
                totalSales: 50000,
                unitsSold: 200,
                averagePrice: 250,
            };
            if (Math.random() < 0.1) {
                return reject(new DataError("Incomplete sales report data"));
            }

            resolve(report);
        }, 1000);
    });
};

