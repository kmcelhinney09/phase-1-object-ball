function gameObject() {
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Regie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            },
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                },
            },
        },
    }
}

function homeTeam() {
    const game = gameObject();
    return game.home
}

function awayTeam() {
    const game = gameObject();
    return game.away;
}
function gamePlayers() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}
function numPointsScored(playerName) {
    return gamePlayers()[playerName].points
}

function shoeSize(playerName) {
    return gamePlayers()[playerName].shoe
}


function teamColors(teamNameInput) {
    if (homeTeam().teamName == teamNameInput) {
        return homeTeam().colors
    }
    else if (awayTeam().teamName === teamNameInput) {
        return awayTeam().colors
    }
    else {
        return `${teamNameInput} is not in tonights game`
    }
}

function teamNames() {
    return [homeTeam().teamName, awayTeam().teamName]
}

function playerNumbers(teamNameInput) {
    const playersNumberList = [];
    if (teamNameInput === homeTeam().teamName) {
        const playersArr = Object.entries(homeTeam().players);
        playersArr.forEach(playersArr => playersNumberList.push(playersArr[1].number))
    }
    else if (teamNameInput = awayTeam().teamName) {
        const playersArr = Object.entries(awayTeam().players);
        playersArr.forEach(playersArr => playersNumberList.push(players[1].number))
    }
    return playersNumberList
}


function playerStats(playerName) {
    return gamePlayers()[playerName]
}

function bigShoeRebounds() {
    const playersArr = Object.entries(gamePlayers())
    const largestShoe = playersArr.reduce((acc,playerEntry) => acc = acc > playerEntry[1].shoe? acc : playerEntry[1].shoe)
    const player = playersArr.find(playerArr => playerArr[1].shoe === largestShoe)
    return player[1].rebounds
}

function mostPointsScored() {
    const playersArr = Object.entries(gamePlayers())
    const mostPoints = playersArr.reduce((acc,playerEntry) => acc = acc > playerEntry[1].points? acc : playerEntry[1].points)
    const player = playersArr.find(playerArr => playerArr[1].points === mostPoints)
    return player[0]
}

function winningTeam() {
    const homeTeamPlayers =Object.entries(homeTeam().players);
    const awayTeamPlayers = Object.entries(awayTeam().players);
    const homeScore = homeTeamPlayers.reduce(function (acc,playerEntry){return acc + playerEntry[1].points},0)
    const awayScore = awayTeamPlayers.reduce(function (acc,playerEntry){return acc + playerEntry[1].points},0)
    if (homeScore > awayScore){
        return homeTeam().teamName
    }
    else {
        return awayTeam().teamName
    }
}

function playerWithLongestName() {
    const playersArr = Object.entries(gamePlayers())
    let playerName = playersArr.reduce(function(acc,playerEntry){
        return acc.length > playerEntry[0].length? acc : playerEntry[0]
    })
    return playerName
}

function doesLongNameStealATon() {
    const playersArr = (gamePlayers())
    return playersArr[playerWithLongestName()].steals
}