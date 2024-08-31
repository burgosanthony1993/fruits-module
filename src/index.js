import {choice, remove} from "./helpers"
import foodArray from "./food"

const randomFruit = choice(foodArray); //this triggers the function found in the helpers

const updatedArray = remove(foodArray, randomFruit);

console.log(`I would like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`)
console.log(`I'm sorry, we're all out. we have ${foodArray.length} fruits left`);

/*
console.log(`the random fruit is: ${randomFruit}`);
console.log(`Updated array after removing ${randomFruit}:`, updatedArray);
*/
