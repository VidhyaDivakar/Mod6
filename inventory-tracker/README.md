# TypeScript and Object-Oriented Programming

### How does TypeScript enforce type safety in this object-oriented program?

TypeScript checks the types during compile time and throws errors if something is wrong. For example, if I pass a string instead of number, it won’t allow it. It makes sure all classes follow the correct structure. So errors are caught early before running the code.

### How did inheritance reduce code duplication for `PhysicalProduct` and `DigitalProduct`?

Both PhysicalProduct and DigitalProduct use the same base Product class. Common properties like name, price, sku are written only once. Subclasses only add their own extra fields like weight or fileSize. So we avoid repeating the same code again and again.

### What are the benefits of using encapsulation and access modifiers (`public`, `private`, `protected`) in this context?

Encapsulation helps control how data is accessed and modified. Using private/protected prevents direct changes from outside. It keeps the data safe and avoids accidental bugs. Also makes the code more organized and easier to maintain.

### If you had to add a new type of product (e.g., a `SubscriptionProduct`), how would polymorphism make this extension straightforward?

We just create a new class like SubscriptionProduct extending Product and override getPriceWithTax() with its own logic. No need to change existing code like main or taxCalculator as polymorphism handles everything automatically.
