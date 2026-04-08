//Lab File 1
fetchProductCatalog
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
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

//fetchProductReviews()
export const fetchProductReviews = (productId: number): Promise<{ id: number; userName: string; comment: string; rating: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, userName: "Alice", comment: "Great product!", rating: 5 },
                    { id: 2, userName: "Bob", comment: "Good value for money.", rating: 4 },
                ]);
            } else {
                reject("Failed to fetch product reviews");
            }
        }, 1000);
    });
};

//fetchSalesReport
//Ttotal dcles