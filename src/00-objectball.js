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


function numPointsScored(playerName) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    debugger
    for (const key in homePlayers) {
        if (key === playerName) {
            return homePlayers[playerName].points
        }
    }
    debugger
    for (const key in awayPlayers) {
        if (key === playerName) {
            return awayPlayers[playerName].points
        }
    }
    debugger
    return "Player is not on the Home or Away team this time"

}

function shoeSize(playerName) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    for (const key in homePlayers) {
        if (key === playerName) {
            return homePlayers[playerName].shoe
        }
    }
    for (const key in awayPlayers) {
        if (key === playerName) {
            return awayPlayers[playerName].shoe
        }
    }
    return "Player is not on the Home or Away team this time"

}


function teamColors(teamName) {
    const game = gameObject();
    const home = game.home;
    const away = game.away;
    if (home.teamName === teamName) {
        return home.colors;
    }
    else if (away.teamName === teamName) {
        return away.colors;
    }
    else {
        return `${teamName} is not in tonights game`
    }
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName]
}

function playerNumbers(teamName) {
    const game = gameObject();
    const home = game.home;
    const away = game.away;
    debugger
    if (teamName === home.teamName) {
        const playersNumbers = [];
        for (const key in home.players) {
            playersNumbers.push(home.players[key].number)
            debugger
        }
        return playersNumbers;
    }
    else if (teamName = away.teamName) {
        if (teamName === away.teamName) {
            const playersNumbers = [];
            for (const key in away.players) {
                playersNumbers.push(away.players[key].number)
                debugger
            }
            return playersNumbers;
        }
    }
    else {
        return `${teamName} is not in tonights game`
    }
}

function playerStats(playerName) {
    const game = gameObject();
    const homeTeam = game.home.players;
    const awayTeam = game.away.players;
    for (const player in homeTeam) {
        if (player === playerName) {
            return homeTeam[player]
        }
    }
    for (const player in awayTeam) {
        if (player === playerName) {
            return awayTeam[player]
        }
    }
    return `${playerName} is not a player on any of tonights teams`
}

function bigShoeRebounds() {
    const game = gameObject();
    const homeTeam = game.home.players;
    const awayTeam = game.away.players;
    let largestShoe = 0;
    let playerName = '';
    let team = '';
    for (const player in homeTeam) {
        if (homeTeam[player].shoe > largestShoe) {
            largestShoe = homeTeam[player].shoe
            playerName = player
            team = 'home'
        }
    }
    for (const player in awayTeam) {
        if (awayTeam[player].shoe > largestShoe) {
            largestShoe = awayTeam[player].shoe
            playerName = player
            team = 'away'
        }
    }
    if (team === 'home') {
        return homeTeam[playerName].rebounds;
    }
    else {
        return awayTeam[playerName].rebounds;
    }
}

function mostPointsScored() {
    const game = gameObject();
    const home = game.home.players;
    const away = game.away.players;
    let largestScore = 0;
    let playerName = ' ';
    for (const player in home) {
        if (home[player].points > largestScore) {
            largestScore = home[player].points
            playerName = player
        }
    }
    for (const player in away) {
        if (away[player].points > largestScore) {
            largestScore = away[player].points
            playerName = player
        }
    }
    return playerName;
}

function winningTeam() {
    const game = gameObject();
    const homeTeam = game.home.players;
    const awayTeam = game.away.players;
    const homeScore = [];
    const awayScore = [];

    for (const player in homeTeam) {
        homeScore.push(homeTeam[player].points)
    }
    for (const player in awayTeam) {
        awayScore.push(awayTeam[player].points)
    }

    const homeTeamScore = homeScore.reduce(function (accumulator, points) {
        return accumulator + points
    })

    const awayTeamScore = awayScore.reduce(function (accumulator, points) {
        return accumulator + points
    })

    if (homeTeamScore > awayTeamScore) {
        return game.home.teamName;
    }
    else {
        return game.away.teamName;
    }
}

function playerWithLongestName() {
    const game = gameObject();
    const homeTeam = game.home.players;
    const awayTeam = game.away.players;
    const playersNamesList = [];
    let longestNameLength = 0;
    let longestName = '';

    for (const player in homeTeam) {
        const playerSplit = player.split(" ");
        playersNamesList.push(playerSplit);
    }
    for (const player in awayTeam) {
        const playerSplit = player.split(" ");
        playersNamesList.push(playerSplit);
    }
    playersNamesList.forEach(function (e) {
        const nameNoSpace = e.join("")
        const nameLength = nameNoSpace.length;
        if (nameLength > longestNameLength) {
            longestNameLength = nameLength;
            longestName = e.join(" ");
        }
    })
    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const homeTeam = game.home.players;
    const awayTeam = game.away.players;
    const longestName = playerWithLongestName();
    const longestNameSteals = playerStats(longestName).steals;
    for (const player in homeTeam) {
        const nonLongestPlayerStats = playerStats(player);
        if (nonLongestPlayerStats.steals > longestNameSteals) {
            return false
        }
    }
    for (const player in awayTeam) {
        const nonLongestPlayerStats = playerStats(player);
        if (nonLongestPlayerStats.steals > longestNameSteals) {
            return false
        }
    }
    return true;
}

function runTest(){
    const game = gameObject();
    const homeTeam = game.home.players;
    const awayTeam = game.away.players;
    const tonightsTeamNames = teamNames();
    for(const player in homeTeam){
        console.log(numPointsScored(player));
        console.log(shoeSize(player));
        console.log(playerStats(player));

    }
    tonightsTeamNames.forEach(function(e){
        teamColors(e);
        playerNumbers(e);
    })
    console.log(bigShoeRebounds());
    console.log(mostPointsScored());
    console.log(winningTeam());
    console.log(playerWithLongestName());
    console.log(doesLongNameStealATon());

}