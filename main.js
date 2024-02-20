/*Generates a silly story when the "Generate random story" button is pressed.
Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
Generates a new random silly story every time the button is pressed*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas","Bob the builder"];

const insertY = ["the soup kitchen","Disneyland","the White House","Paris"];

const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result(){
let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
//}
// result();
//replace placeholders with actual strings
newStory = newStory.replaceAll(' :insertx:',xItem);
newStory = newStory.replaceAll(' :inserty:',yItem);
newStory = newStory.replace(' :insertz:',zItem);

if(customName.value !== '') {
const name = customName.value;
newStory = newStory.replace("Bob",name);


}

if(document.getElementById("uk").checked) {
const weight = `${Math.round(300/14)} stone`;
const temperature =  `${Math.round((94 - 32) / (5/9))} centigrade`;
newStory=newStory.replace('94 fahrenheit', temperature);
newStory=newStory.replace('300 pounds', weight);


}
//Updates the content of the story
story.textContent = newStory;
story.style.visibility = 'visible';
}