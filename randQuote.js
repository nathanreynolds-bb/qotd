const quoteArray = [
`
"What use was time to those who'd soon achive Digital Immortality?"
— Clyde Dsouza, Memories With Maya
`,
`
"What is a human being, then?'
'A seed.'
'A ... seed?'
'An acorn that is unafraid to destroy itself in growing into a tree."
fro— David Zindell, The Broken God
`,
`
"Everyone is using science and technology to enhance or to alter ourbody chemistry 
in order to stay healthy and be more in control of our lives.
We are all transhumanists to varying degrees."
― Newton Lee, The Transhumanism Handbook
`,
`
"Whichever form of government that democracy will create in the future, 
the great American experiment will go down in history as the freest and the bravest 
in the land of the free and the home of the brave"
― Newton Lee, The Transhumanism Handbook
`,
];

const randIndex = Math.floor(Math.random()*quoteArray.length);

const randQuote = quoteArray[randIndex];

console.log(randQuote);