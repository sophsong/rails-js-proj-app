
const gridContainer = document.querySelector(".grid-container")
// const playersDiv = document.querySelector(".players")
let newDiv = document.createElement('div')
gridContainer.appendChild(newDiv)



const teamList = document.querySelector(".teams")
function listTeams(){
  fetch('http://localhost:3000/teams')
  .then(function(response){
    return response.json()
  })
  .then(function(teams){
    teams.forEach(function(team){
      const teamListBullet = document.createElement("p")
      teamListBullet.innerText = team.name
      teamList.appendChild(teamListBullet)
      teamListBullet.addEventListener("click", function(){getInfo(team)})//end of function

    })
  })
} //end of getTeams
listTeams()

function getInfo(team){
  fetch(`http://localhost:3000/players/${team.id}`)
  .then(function(response){
    return response.json()
  })
  .then(function(playerArr){
    // console.log(playerArr)
    // const playerPerTeam = document.createElement("p")
    newDiv.innerHTML = ""
    playerArr.forEach(function(player){
      let playerPerTeam = document.createElement("div")
      playerPerTeam.innerHTML = `<h2> Player Profile </h2> Name: ${player.name} <br> Age:  ${player.age} <br> Position: ${player.position}`
      // gridContainer.innerHTML = ""
      newDiv.appendChild(playerPerTeam)
    })

    // console.log(playerArr)
  //   playerArr.forEach(function(playerObj){
  //
  //     const playerName = document.createElement("p")
  //     playerName.innerText = playerObj.name
  //     playersDiv.appendChild(playerName)
  //     gridContainer.appendChild(playersDiv)
  //     console.log(playerObj.team_id)
  //     playerName.addEventListener("click", function(){
  //       getMorePlayerInfo(playerObj)
  //     })
  // })
})
}

function getMorePlayerInfo(playerObj){
  console.log("THIS IS WORKING")
  const playerAge = document.createElement("p")
  playerAge.innerText = "Age: " + playerObj.age
  const playerPosition = document.createElement("p")
  playerPosition.innerText = "Position: " + playerObj.position
  const playerTeamId = document.createElement("p")
  playerTeamId.innerText = "TeamId: " + playerObj.team_id
  playersDiv.appendChild(playerAge)
  playersDiv.appendChild(playerPosition)
  playersDiv.appendChild(playerTeamId)

} //end of function

function formNewPlayer(){
  const createNewPlayer = document.createElement("form")
  createNewPlayer.innerHTML = `
  <form>
  Name:
  <input type="text" name="name" value="" placeholder="Name"> <br>
  Age:
  <input type="text" name="age" value="" placeholder="Age"> <br>
  Position:
  <input type="text" name="position" value="" placeholder="Position"> <br>
  </form>
  `
} //end of new player
