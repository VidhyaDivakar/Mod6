"use strict";
// Activity Building a Promise-Based Data Fetcher
Object.defineProperty(exports, "__esModule", { value: true });
function fetchUserData(name, age, email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name && age && email) {
                resolve({ name, age, email });
            }
            else {
                reject("Missing user information.");
            }
        });
    });
}
//# sourceMappingURL=dataFetcher.js.map