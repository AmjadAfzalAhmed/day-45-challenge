// JSON.stringify method takes (value, replacer, space)
// The value is the object you want to stringify. 
// The replacer specifies values of properties to be replaced while stringifying.
// And the space specifies whitespaces for the final output (which helps in readability).
// The replacer is usually null because there's nothing to be replaced.
// The general syntax for stringifying is the one shown in line 2 after variable name.
// The process is generally done for the readibility of the code, because indentation beautifies the content.

import {myObj} from "./Question133.js";


let indentedString = JSON.stringify(myObj, null, 2);

console.log("\n",indentedString);
