const greetingPromise = new Promise ((resolve, reject) => {
    console.log("Hello good to see you!, can I come In");
setTimeout(() => {
    resolve("Welcome to the party!");
}, 5000);
});
    
greetingPromise.then((message) => {
    console.log(message);
})

// ASYNC/AWAIT EXAMPLE
// New Hotness
function welcomeHome(){
    return new Promise((resolve)=>{
        console.log("Welcome to my house!")

        setTimeout(()=>{
            resolve("*looks around in awe* Happy to Be here!");
        }, 10000)
    });
};

async function run(){
    const welcomeMessage = await welcomeHome();
    console.log(welcomeMessage)
}

run();

//Example: Creating Promises
//Here is a basic example of a Promise that simulates a delay using setTimeout, similar to the wait() function
// const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// wait(1000).then(() => console.log("Done waiting!"));


// More Detailed promise - Chaining Stuff!
// Scenario: Checking in a hotel
function checkIn(message, time) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(message);
            resolve();
        }, time)
    })
}
checkIn("Welcome to the Fancy Hotel!", "We are getting your room ready, please wait a moment", 2000)
.then(()=>{
    return checkIn("Your room is ready!", "Here is your key card, enjoy your stay!", 2000);
})


// function orderFood(message, time) {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, time)
// })
// }
// orderFood("Welcome to the restaurant!", "We are preparing your meal, please wait a moment", 5000)
// .then(()=>{
//     return orderFood("Your meal is ready!", "Here is your food, enjoy your meal!", 5000);
// })
// .then(()=>{
//     return orderFood("Would you like dessert?", "We have a delicious selection of desserts, please wait a moment", 5000);
// })