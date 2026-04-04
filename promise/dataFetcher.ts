// Activity Building a Promise-Based Data Fetcher

function fetchUserData(name: string, age: number, email: string): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (name && age && email) {
                resolve({ name, age, email });
            } else {
                reject("Missing user information.");
            }
        }