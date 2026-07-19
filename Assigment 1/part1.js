// ==========part 1===========
// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
let numberStr = "123"
let output = Number(numberStr) + 7
console.log("Q) . ");
console.log(output);
console.log("==============");
// ==============================
// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
function cheackFalsy(x) {
    if (!x) {
        return "invalid"
    } else {
        return "Valid"
    }
}
let x = 0
console.log(`the value ${x} is ${cheackFalsy(x)}`);
console.log("==============");
// =================================
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue. (0.5 Grade)
{
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue
        } else {
            console.log(i);
        }
    }
    console.log("==============");
}
// ================================
// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
{

    let input = [1, 2, 3, 4, 5]
    let output = input.filter((num) => {
        return num % 2 == 0
    })
    console.log(output);

}
console.log("=================");
// ==================================
// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
{
    let input1 = [1, 2, 3]
    let input2 = [4, 5, 6]
    let output = [...input1, ...input2]
    console.log(output);

}
console.log("====================");
// ==================================
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
{
    let input = 2
    switch (input) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;

        case 7:
            console.log("saturday");
            break;
        default:
            console.log("day not found");
            break;
    }
}
console.log("=====================");
// =====================================
// 7. Create an array of strings and return their lengths using map method. (0.5 Grade)
{
    let input = ["a", "ab", "abc"]
    let output = input.map((str) => {
        return str.length
    })
    console.log(output);

}
console.log("======================");
// ======================================
// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
function cheackDivisable(num) {
    let output = num % 3 == 0 && num % 5 == 0 ? "divisable by both" : "Not divisable by both"
    return output
}
console.log(cheackDivisable(15));
console.log("=======================");
// =======================================
// 9. Write a function using arrow syntax to return the square of a number. (0.5 Grade)
{
    let input = 5
    let output = (input) => input * input
    console.log(output(5));
}
console.log("=====================");
// ======================================
// 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
{
    const person = {
        name: "John",
        age: 25
    };
    function getPersonInfo(person) {
        const { name, age } = person;
        return `${name} is ${age} years old`;
    }

    console.log(getPersonInfo(person));
}
console.log("========================");
// ======================================
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)

{
    function sum(...nums) {
        let result = 0
        for (let i = 0; i < nums.length; i++) {
            result += nums[i]
        }
        // or using reduce 
        return result
    }
    console.log(sum(1, 2, 3, 4, 5));

}
// =========================================

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
{
    function getSuccessMessage() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Success");
            }, 3000);    
        });    
    }    
    
    getSuccessMessage().then(console.log);
}    
console.log('========================');

// ======================================

// ==========================================
// 13. Write a function to find the largest number in an array. (0.5 Grade)
{
    let input = [1, 3, 7, 2, 4]
    function largest(nums) {
        let largest = nums[0]
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > largest) {
                largest = nums[i]
            } else {
                continue
            }
        }
        return largest
    }
    console.log(largest(input));

    console.log("======================");
}
// =============================================
// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
{
    const person = {
        name: "John",
        age: 30
    };
    function getKeys(obj) {
        return Object.keys(obj);
    }
    console.log(getKeys(person));
    console.log("=================");
}
// =============================================
// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
{
    function splitWords(str) {
        return str.split(" ");
    }
    console.log(splitWords("The quick brown fox"));
    console.log("=================");
}
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// 1.What is the difference between forEach and for...of? When would you use each?
//     forEach =>  array method 
//                 executes a callback function for every element.
//                 eannot use break or continue.
//     for of =>
//                 A loop statement 
//                 works with any iterable object 
//                 can use break and continue 
//     use forEach when:
//                 you need to perform an action on every element.
//                 you do not need break or continue.
//                 you want concise, functional-style code.

//     use for...of when:
//                 you need break or continue.
//                 you need to use await.
//                 you want more control over the loop.
// =====================================================
// =====================================================
// =====================================================
// 2.What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

//     Hoisting  is JavaScript behavior of moving declarations to the top of their scope before code execution.
//     1. var Hoisting
//             var declarations are hoisted and initialized with undefined.

//             console.log(x); // undefined
//             var x = 10;
//             console.log(x); // 10

//         JavaScript treats it roughly like:

//             var x;
//             console.log(x); // undefined
//             x = 10;
//     2. let and const Hoisting

//             let and const are also hoisted, but they are not initialized immediately.

//             console.log(age);
//             let age = 25;

//             Output:
//             ReferenceError: Cannot access 'age' before initialization



//     Temporal Dead Zone (TDZ)

//         The Temporal Dead Zone (TDZ) is the period between:
//         Entering the scope.
//         The line where a let or const variable is declared.

//         During this period, the variable exists but cannot be accessed.

//         {
//             // TDZ starts

//             console.log(name); // ReferenceError

//             let name = "John";

//             // TDZ ends
//         }
// ===================================================================
// ===================================================================
// ===================================================================
// 3. == compares values after performing type coercion ==>> automatic type conversion
//   === compares both value and data type without conversion.
// ==================================================================
// ==================================================================
// ==================================================================
// 4.try catch is used to handle errors without stopping the program.
//  In async operations, it catches errors from await calls
//  allowing you to handle failures instead of stopping the application.
// ==================================================================
// ==================================================================
// ==================================================================
// 5. What’s the difference between type conversion and coercion? Provide examples of each.
// Type conversion is when I manually change a value from one type to another, like:
// Number("123") // 123
// String(123)   // "123"

// Type coercion is when javaScript automatically converts the type during an operation, like:
// "5" - 2 
// "5" + 2

// type conversion (done by the developer),type coercion(done by JavaScript).

