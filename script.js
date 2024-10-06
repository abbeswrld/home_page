const gameButtons = document.querySelectorAll(".game-tile");
const gameTitle = document.getElementById("game-title");
const gameContent = document.getElementById("game-content");

const gameDescriptions = {
  "swords-and-souls": {
    title: "Swords & Souls: Neverseen",
    content: "Описание игры Swords & Souls: Neverseen..."
  },
  "teamfight-tactics": {
    title: "Teamfight Tactics",
    content: "Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics...Описание игры Teamfight Tactics..." 
  },
  "league-of-legends":{
    title: "League of Legends",
    content: "LOOOOOOL"
  },
  "castle-crashers":{
    title: "Castle Crashers",
    content: "LOOOOOOL"
  },
  "cookie-clicker":{
    title: "Cookie Clicker",
    content: "LOOOOOOL"
  },
  "dwarf-fortress":{
    title: "Dwarf Fortress",
    content: "LOOOOOOL"
  },
  "divinity-original-sin-2":{
    title: "Divinity Original Sin 2",
    content: "LOOOOOOL"
  },
  "dota-2":{
    title: "Dota 2",
    content: "LOOOOOOL"
  },
  "deep-rock-galactic":{
    title: "Deep Rock Galactic",
    content: "LOOOOOOL"
  },
  "euro-truck-simulator-2":{
    title: "Euro Truck Simulator 2",
    content: "LOOOOOOL"
  },
  "factorio":{
    title: "Factorio ",
    content: "LOOOOOOL"
  },
  "graveyard-keeper":{
    title: "Graveyard Keeper",
    content: "LOOOOOOL"
  },
  "lego-batman-3":{
    title: "LEGO® Batman™ 3:Beyond Gotham",
    content: "LOOOOOOL"
  },
  "minishoot":{
    title: " Minishoot' Adventures",
    content: "LOOOOOOL"
  },
  "pokemon-white":{
    title: "Pokémon White",
    content: "LOOOOOOL"
  },
  "plants-vs-zombies":{
    title: "Plants vs. Zombies",
    content: "LOOOOOOL"
  },
  "risk-of-rain-2":{
    title: "Risk of Rain 2 ",
    content: "LOOOOOOL"
  },
  "shapez":{
    title: "Shapez",
    content: "LOOOOOOL"
  },
  "shapez-2":{
    title: "Shapez 2",
    content: "LOOOOOOL"
  },
  "south-park":{
    title: "South Park™: The Stick of Truth™",
    content: "LOOOOOOL"
  },
  "stardew-valley":{
    title: "Stardew Valley",
    content: "LOOOOOOL"
  },
  "the-binding-of-isaac":{
    title: "The Binding of Isaac: Rebirth",
    content: "LOOOOOOL"
  },
  "terraria":{
    title: "Terraria",
    content: "LOOOOOOL"
  },
  

};

gameButtons.forEach(button => {
  button.addEventListener("click", () => {
    const gameId = button.dataset.game;
    const gameData = gameDescriptions[gameId];

    gameTitle.textContent = gameData.title;
    gameContent.textContent = gameData.content;
  });
});
