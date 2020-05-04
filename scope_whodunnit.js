//#### Episode 1


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The output will be "The murderer is Miss Scarlett" because the scenario is declared and is none of the data is changed anywhere


//#### Episode 2


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Output is an error. The is because the 'murderer' variable is a const and can not be changed in. 


//#### Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first console.log will output 'First Verdict: The murderer is Mrs Peacock' because in the declareMurderer() function the murderer variable is changed to Mrs Peacock when the
// the function is called. 
// The second console.log will output 'Second Verdict: The murderer is Professor Plum because the secondVerdict variable contains a string of the initial murderer merged with the 
// phrase "The murderer is" 


//#### Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//The first console.log will output `The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.` This because when the function is called and attached to the 
//variable suspects, the suspectThree variable is changed to be Colonel Mustard.
//The second console.log will output `Suspect three is Colonel Mustard` because once the variable was changed be previous function it will remain changed within this
//code block.

//#### Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//Output will be 'The weapon is the Revolver' because the changeWeapon function was called and used to change the weapon to the Revolver.


//#### Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Output is 'The murderer is Mrs White' because when the changeMurderer function is called, the plotTwist function that is inside changeMurderer is also called.
//This means that the murderer is change to Mrs White and not Mr Green when changeMurderer is called.