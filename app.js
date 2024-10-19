let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

const team1Container = document.getElementById('dteam1'); // Grab Where, Team 1 will draw
const team2Container = document.getElementById('dteam2'); // Grab Where, Team 1 will draw

const team1Players = players.filter(player => player.teamNumber === 1)
const team2Players = players.filter(player => player.teamNumber === 2)

const bankTotal = document.getElementById('bank')

let team1Skill = 0
let team2Skill = 0

function drawTeam1() {
    console.log("drawing team1")
    team1Content = ''
    team1Players.forEach((player1) => {
        team1Content += `<span class=d-flex title = "${player1.name}">${player1.emoji}, ${player1.name}</span>`
    })
    team1Container.innerHTML = 'Team 1: ' + team1Content
  }

function drawTeam2(){
  console.log("drawing team2")
    team2Content = '';

    team2Players.forEach((player2) => {
        team2Content += `<span class=d-flex title = "${player2.name}">${player2.emoji}, ${player2.name}</span>`
    })
    team2Container.innerHTML = 'Team 2: ' + team2Content
}

function betTeam(bet, team) {
  team1Players.forEach((player) => {
    team1Skill += player.skill
  })
  team2Players.forEach((player) => {
    team2Skill += player.skill
  })

  console.log('⚽ team 1', team1Skill)
  console.log('🏈 team 2', team2Skill)
  //... TIE Scenario
  if (team1Skill == team2Skill){
    console.log("Tie! Bet again")
    console.log(bank)
    return
  }
  //... Team1 Bets Scenarios
  if (team == 'team1'){
    console.log('you bet for team1')
    if (team1Skill > team2Skill){
      bank += bet
      console.log(bank)
      drawBank()
      gameOver()
      team1Skill = 0
      team2Skill = 0
      draftPlayers();
      window.alert("Winner! $" + bet + " added to bank")
    }else{
      bank -= bet
      console.log(bank)
      drawBank()
      gameOver()
      team1Skill = 0
      team2Skill = 0
      draftPlayers();
      window.alert("Loser :( $" + bet + " deducted from bank")
    }
    if (team1Skill < team2Skill && bet===150){
      console.log('test')
      bank = 0
      window.alert("The game is over, You will never financially recover.")
      window.location.reload(true)
    }
  }
  
  // ...Team2 Bets Scenarios
  if (team =='team2'){
     console.log('you bet for team1')
    if (team2Skill > team1Skill){
      bank += bet
      console.log(bank)
      drawBank()
      gameOver()
      draftPlayers();
      team1Skill = 0
      team2Skill = 0
      window.alert("Winner! $" + bet + " added to bank")
    }else{
      bank -= bet
      console.log(bank)
      drawBank()
      gameOver()
      draftPlayers();
      team1Skill = 0
      team2Skill = 0
      window.alert("Loser :( $" + bet + " deducted from bank")
    }
    if (team2Skill < team1Skill && bet===150){
      console.log('test')
      bank = 0
      window.alert("The game is over, You will never financially recover.")
      window.location.reload(true)
    }
  }
}
// SECTION Draw Bank
function drawBank(){
  bankTotal.innerHTML = bank
}

// SECTION GAME OVER
function gameOver(){
  if (bank <= 0){
    bank = 0
    window.alert("The game is over, You will never financially recover.")
    window.location.reload(true)
    return
  }
}

// SECTION Draft
function draftPlayers(){
  console.log("Drafting Teams")
  players.forEach((player) => {
    draftNumber = Math.random()
    if (draftNumber < 0.4999999){
      draftNumber = 1
    }else{
      draftNumber = 2
    }
    player.teamNumber = draftNumber
  })
  const team1Players = players.filter(player => player.teamNumber === 1)
  const team2Players = players.filter(player => player.teamNumber === 2)

  console.log("drawing team1")
    team1Content = ''
    team1Players.forEach((player1) => {
        team1Content += `<span class=d-flex title = "${player1.name}">${player1.emoji}, ${player1.name}</span>`
    })
    team1Container.innerHTML = 'Team 1: ' + team1Content

    console.log("drawing team2")
    team2Content = '';

    team2Players.forEach((player2) => {
        team2Content += `<span class=d-flex title = "${player2.name}">${player2.emoji}, ${player2.name}</span>`
    })
    team2Container.innerHTML = 'Team 2: ' + team2Content
  console.log(players)
}

// Draw Initialize
drawTeam1()
drawTeam2()

