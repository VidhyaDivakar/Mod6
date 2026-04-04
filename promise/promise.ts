//Chained Promise with TS

function hotelWelcome(message: string, time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(message);
        }, time);
    });
}
hotelWelcome("Welcome to our hotel!", 1000)
    .then(() => {
        return hotelWelcome("Your room is ready!", 2000);
    })
    .then(() => {
        return hotelWelcome("Enjoy your stay!", 2000);
    })

// Error Handling with Promises
function rentalAvailabilityCheck(FullyBooked) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (FullyBooked) {
                reject("Sorry, we are fully booked.");
            } else {
                resolve("Great news! We have rooms available.");
            }
        }, 3000)
    })
}
const fullyBooked = true; // change to false to see the success case
rentalAvailabilityCheck(fullyBooked)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

// Error Promise Function
function fullCityCheck(ifFull: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ifFull) {
                reject("Sorry, the city is fully booked.");
            } else {
                resolve("Great news! We have availability in the city.");
            }
        }, 2000);
    })
}

const cityFullyBooked: boolean = true;
fullCityCheck(cityFullyBooked)
    .then((message: string) => {
        console.log(message);   
    }) 
    .catch((error: number) => {
        if(error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred.");
        }
        console.error(error);
    }); 