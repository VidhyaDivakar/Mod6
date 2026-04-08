### Reflections Questions

#### Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

Handling errors at each API call ensures one failure doesn’t break the entire flow unexpectedly.
It allows partial success, so other API calls can still complete and provide useful data.
You can give more specific error messages instead of one generic failure at the end.It makes debugging easier because you know exactly which API failed and at what step.

#### How do custom error classes improve debugging and identification?

Custom error classes help clearly distinguish between different error types like network and data issues. 
Using `instanceof` makes it easier to handle errors differently based on their actual category.

#### When might a retry mechanism be more effective than an immediate failure response?

Retry is useful when failures are temporary, like network issues or server timeouts and It improves user experience by automatically recovering without showing errors immediately to users.

It also helps to reduce unnecessary failures when a simple retry could have successfully completed the operation.
