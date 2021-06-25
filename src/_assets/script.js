const data = [
  "Roman says something's impossible",
  "Sumbitch",
  "Family",
  "Corona",
  "Roman being hungry",
  "NOS",
  "Leddy fucking someone up",
  "Cars on a plane",
  "butts",
  "Foreign vs Doesticv cargument",
  "Magical Crucifix",
  "International location",
  "Dom fights with wrench",
  "BBQ",
  "Men having Feelings™ at a window",
  "Dom being really strong",
  "Bald men fighting eachother",
  "Car shopping",
  "Racing",
  "Dom does wheelie",
  "Angrily denting objects",
  "Dom emerges from fire",
  "Casual xenophobia",
  "Dom repairs a car",
  "Someone does the sign of the cross",
  "Francise reference",
  "Actor's career reference",
  "References a movie",
  "The one use of Fuck (PG-13)",
  "NOS engage animation",
  "Driving through gates",
  "Rock drives massive vehicle",
  "Dick joke",
  "Break glass to get car keys",
  "Headbutts",
  "Hobbs says 'Woman'",
  "Forearm grasp",
  "Impossible jump",
  "Surviving certain death",
  "Saying grace",
  "New unlikeable character becomes family",
  "Yelling 'JUMP' to during a chase",
  "Walkie-talkie-less conversations between cars",
  "Gear head flexing",
  "Really bad hacking",
  "Roman getting dunked on",
  "Roman complains about the situation",
  "Roman gets distracted by hot women",
  "Famous actor cameo / added to cast",
  "Ignoring tragedies",
  "Brian reference",
  "Defying orders",
  "Cops letting marks get away",
];

const bingoList = document.getElementById("bingo-list");

const randomItems = data.sort(() => 0.5 - Math.random()).slice(0, 25);
randomItems.splice(12, 0, "FREE");
randomItems.splice(-1, 1);
console.log(randomItems);

bingoList.innerHTML = randomItems
  .map(
    (item) =>
      `<li class="bingo-item"><span class="bingo-item__text">${item}</span></li>`
  )
  .join("");

const bingoItems = document.getElementsByClassName("bingo-item");

for (const element of bingoItems) {
  element.addEventListener("click", function (e) {
    const newSpan = document.createElement("span");
    newSpan.className = "stamped";
    element.appendChild(newSpan);
  });
}
