console.log("connected");

const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);
if(language === 'und'){
    console.log("SORRY, COULDN'T FIGURE IT OUT. TRY WITH MORE SAMPLE TEXT.")
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`); 
}



// import franc from "franc";
// import { where } from "langs";
// import colors from "colors";

// const input = process.argv[2];
// const langCode = franc(input);
// if(language === 'und'){
//     console.log("SORRY, COULDN'T FIGURE IT OUT. TRY WITH MORE SAMPLE TEXT.")
// } else {
//     const language = where("3", langCode);
//     console.log(`Our best guess is: ${language.name}`); 
// }

