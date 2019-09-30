//global variables
const newTeamButton = document.querySelector("#new-sequence")
const currentPlayerContainer = document.getElementById("current-team");
const flipCard = document.querySelector(".flip-card")
const viewAllTeams = document.querySelector("#view-sequences")
const teamsDiv = document.querySelector(".teams-div")
const tryDiv = document.querySelector(".try")
const newTeamForm = document.createElement("form")


//#1 Deliverable

function Team(name, location, ranking){
  this.name = name;
  this.location = location;
  this.ranking = ranking
} //end of function

Team.prototype.welcomeMessage = function(indTeam) {
    return `Welcome to the ${this.name}'s homepage'!`
} //end of function

Team.prototype.renderTeam = function(indTeam){
  const indTeamName = document.createElement("p")
  indTeamName.innerHTML = indTeam.name
  return indTeamName
  const indTeamLocation = document.createElement("p")
  indTeamLocation.innerHTML = indTeam.location
  return indTeamLocation
} //end of function
// end of #1 Deliverable //


function createNewPlayer(e){
  let newPlayerName = e.target[0].value
  let newPlayerAge = e.target[1].value
  let newPlayerPosition = e.target[2].value
  let newPlayerTeamId = e.target[3].value
  console.log(newPlayerTeamId)
  e.preventDefault();

  //POST request
  fetch('http://localhost:3000/players', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": 'application/json' },
    body: JSON.stringify({
      "name": newPlayerName,
      "age": newPlayerAge,
      "position": newPlayerPosition,
      "team_id": newPlayerTeamId
      })
  })
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    console.log(res)
    let currentPlayer = document.createElement("p");
    currentPlayer.dataset.name = res["name"];
    currentPlayer.dataset.age = res["age"];
    currentPlayer.dataset.position = res["position"];
    currentPlayer.dataset.team_id = res["team_id"];
    currentPlayerContainer.appendChild(currentPlayer);
  }) //end of fetch request

} //end of function

function clearCurrentPlayerContainer(){
  newTeamForm.innerHTML = ""
} //end of clearCurrentPlayerContainer function


viewAllTeams.addEventListener("click",
  function(){
    clearCurrentPlayerContainer()
    indexViewAllTeams()
  }
) //end of event listener

//#2 Deliverable: Index Page
function indexViewAllTeams(){
  fetch('http://localhost:3000/teams')
  .then(res => res.json())
  .then(function(teams){
    teams.forEach(function(teamObj){
      const allTeams = document.createElement('div')
      const showTeam = document.createElement('button')
      showTeam.innerHTML = teamObj.name
      allTeams.appendChild(showTeam)
      tryDiv.appendChild(allTeams)
      showTeam.addEventListener("click", function(){
        showOneTeam(teamObj)
      })
    })
  })
} //end of indexViewAllTeams function

 // end of #2 Deliverable //



//#3 Deliverable: Show Page
function showOneTeam(teamObj){
  fetch(`http://localhost:3000/teams/${teamObj.id}`)
  .then(res => res.json())
  .then(function(indTeam){
      // const teamCard = document.createElement("div")
    const team1 = new Team()
    team1.name = indTeam.name
    team1.location = indTeam.location
    team1.ranking = indTeam.ranking
    team1.welcomeMessage()
    console.log(team1)
    //welcome Message console logs the welcome message
    const teamCard = document.createElement("div")
    // teamCard.appendChild(Team)
    //   const indTeamName = document.createElement("p")
    //   indTeamName.innerHTML = indTeam.name
      teamCard.appendChild(team1.renderTeam(indTeam))
      // teamCard.appendChild(team1.welcomeMessage(indTeam))
    //   const indTeamLocation = document.createElement("p")
    //   indTeamLocation.innerHTML = indTeam.location
    //   teamCard.appendChild(indTeamLocation)
    //   const indTeamRanking =  document.createElement("p")
    //   indTeamRanking.innerHTML = indTeam.ranking
    //   teamCard.appendChild(indTeamRanking)
      const playersForTeamButton = document.createElement("button")
      playersForTeamButton.innerHTML = "View Players"
      teamCard.appendChild(playersForTeamButton)
      playersForTeamButton.addEventListener("click", function(){
        teamCard.innerHTML = ""
        viewPlayersForTeam(teamObj, teamCard)
      })
    clearTryDiv()
    tryDiv.appendChild(teamCard)
  })
} //end of showOneTeam

function clearTryDiv(){
  tryDiv.innerHTML =""
}

// end of #3 Deliverable//


//#4 Deliverable: Has_many relationship =>  team has many players

function viewPlayersForTeam(teamObj, teamCard){
  fetch(`http://localhost:3000/teams/${teamObj.id}/players`)
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    json.forEach(function(playerObj){
      const playersForTeam = document.createElement("p")
      playersForTeam.innerHTML = playerObj.name
      teamCard.appendChild(playersForTeam)
    })
  })
} //end of function

// end of #4 Deliverable//

//#5 Deliverable: Render Form
function renderForm(){
  newTeamButton.addEventListener("click", function(){
      newTeamForm.innerHTML = `<br>
      Player Name:<br>
      <input type="text" name="newPlayerName"><br>
      Player Age:<br>
      <input type="number" name="newPlayerAge"><br>
      Player Position:<br>
      <input type="text" name="newPlayerPosition"><br>
      Team: <br>
                <select name="teams">
                <option value="1">Arizona Cardinals</option>
                <option value="2">Atlanta Falcons</option>
                <option value="3">Baltimore Ravens</option>
                <option value="4">Buffalo Bills</option>
                <option value="5">Carolina Panthers</option>
                <option value="6">Chicago Bears"</option>
                <option value="7">Cincinnati Bengals</option>
                <option value="8">Cleveland Browns</option>
                <option value="9">Dallas Cowboys</option>
                <option value="10">Denver Broncos</option>
                <option value="11">Detroit Lions"</option>
                <option value="12">Green Bay Packers</option>
                <option value="13">Houston Texans</option>
                <option value="14">Indianapolis Colts</option>
                <option value="15">Jacksonville Jaguars</option>
                <option value="16">Kansas City Chiefs</option>
                <option value="17">Los Angeles Chargers</option>
                <option value="18">Los Angeles Rams</option>
                <option value="19">Miami Dolphins</option>
                <option value="20">Minnesota Vikings</option>
                <option value="21">New England Patriots</option>
                <option value="22">New Orleans Saints</option>
                <option value="23">New York Giants</option>
                <option value="24">New York Jets</option>
                <option value="25">Oakland Raiders</option>
                <option value="26">Philadelphia Eagles</option>
                <option value="27">Pittsburgh Steelers</option>
                <option value="28">San Francisco 49ers</option>
                <option value="29">Seattle Seahawks</option>
                <option value="30">Tampa Bay Buccaneers</option>
                <option value="31">Tennessee Titans</option>
                <option value="32">Washington Redskins</option>
                </select>
      <input type="submit" value="Submit"> `
      flipCard.appendChild(newTeamForm);
      newTeamForm.addEventListener("submit", function(e){
            createNewPlayer(e)
      })
  })
} //end of renderForm function
renderForm()

// end of #5 Deliverable //
