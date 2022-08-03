// 2. Create a program that prompts for an input string and displays output that shows the input string and the number of
// characters the string contains

// nouns = input, string, characters
// verbs = prompt, displays, output,


//npm install prompt-sync
const prompt = require('prompt-sync')();

//Assignment
let inputString = prompt(`What is the input string?` + ` `);


//Selection
if (inputString !== null && inputString !== '') {
    
    console.log(`${inputString} has ${inputString.length} characters`);
}
else {

    //Iteration
    if (inputString === null || inputString === '') {

         let inputString = prompt(`No string or characters have been entered?` + ` `);
        // console.log(`No string or characters have been entered`);
        console.log(`${inputString} has ${inputString.length} characters`);
        
    }
      
}


