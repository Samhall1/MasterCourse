let deck1 = [
    { name: "Harry Potter", toptrumps: 100 },
    { name: "Severus Snape", toptrumps: 100 },
    { name: "Ron Weasley", toptrumps: 100 },
    { name: "Lord Voldemort", toptrumps: 100 },
    { name: "Bellatrix Lestrange", toptrumps: 100 },
    { name: "Fleur Delacour", toptrumps: 100 },
    { name: "Ginny Weasley", toptrumps: 100 },
    { name: "Remus lupin", toptrumps: 100 },
    { name: "Draco Malfoy", toptrumps: 100 },
    { name: "Neville Longbottom", toptrumps: 100 },
    { name: "Sybill Trelawney", toptrumps: 100 },
    { name: "Horace Slughorn",  toptrumps: 100 },
    { name: "Quirinus Quirrell", toptrumps: 100 },
    { name: "Arthur Weasley", toptrumps: 100 },
    { name: "Cho Chang", toptrumps: 100 }
];

let deck2 = [
    { name: "Albus Dumbledore", toptrumps: 25 },
    { name: "Sirius Black", toptrumps: 25 },
    { name: "Hermione Granger", toptrumps: 25},
    { name: "Cederic Diggory", toptrumps: 25 },
    { name: "Rubeus Hagrid", toptrumps: 25 },
    { name: "Fenrir Greyback", toptrumps: 25 },
    { name: "Argus Filch", toptrumps: 25 },
    { name: "Luna Lovegood", toptrumps: 25 },
    { name: "Molly Weasley", toptrumps: 17 },
    { name: "Minerva McGonagall", toptrumps: 16 },
    { name: "Nymphadora Tonks", toptrumps: 4 },
    { name: "Victor Krum", toptrumps: 7 },
    { name: "Gilderoy Lockhart", toptrumps: 6 },
    { name: "Lucius Malfoy",toptrumps: 14 },
    { name: "Peter Pettigrew", toptrumps: 13 }

];

let lockdown = [];
let round = 0;

while (deck1.length < 30 && deck2.length < 30){
    //round++;
    let hand1 = deck1.slice(0, 1);
    let hand2 = deck2.slice(0, 1);
    deck1.shift();
    deck2.shift();
    round++;
    function game () {
        if (hand1[0].toptrumps < hand2[0].toptrumps) {
            console.log("Deck 2 won round! " + round)
            deck2.push(hand1[0], hand2[0])

            if(lockdown.length > 0 ) {
                deck2.push(lockdown[0], lockdown[1]);
                lockdown = [];
                console.log(deck2.length)

            } 

        }  else if (hand1[0].toptrumps == hand2[0].toptrumps) {
            console.log("Its a draw, both cards are in lockdown.")
            lockdown.push(hand1[0], hand2[0])

        } else if (hand1[0].toptrumps > hand2[0].toptrumps) {
            console.log("Deck 1 won round! " + round)
            deck1.push(hand1[0], hand2[0])

            if(lockdown.length > 0){
                deck1.push(lockdown[0], lockdown[1]);
                lockdown = [];
                console.log(deck2.length)
            }
        } 
       
    };
   
    game();

};

if(deck1.length == 30) {
    console.log("Game Over, Player1 Wins ");
} else if (deck2.length == 30) {
    console.log("Game Over, Player2 Wins ");                   
} 

// console.log(deck1.length, deck2.length);















    






















