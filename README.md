# Cricket Performance Smart Contract

 

This project implements a Solidity smart contract to manage cricket player performance statistics on the blockchain. It allows adding players and retrieving their runs scored and wickets taken.

## Description

Functionality
1. addPlayer
Description: Adds a new player with their name, runs scored, and wickets taken.
Parameters:
_name: Name of the player (string)
_runsScored: Runs scored by the player (uint256)
_wicketsTaken: Wickets taken by the player (uint256)
2. getPlayer
Description: Retrieves the details (name, runs scored, wickets taken) of a player based on their player ID.
Parameters:
_playerId: ID of the player whose details are to be retrieved (uint256)
Returns: Tuple containing player's name, runs scored, and wickets taken.
Storage
Uses a mapping players to store player details keyed by playerId.
playersCount keeps track of the total number of players added.
React Frontend
The React frontend provides a user-friendly interface to interact with the smart contract. It allows users to:

Add new players by entering their name, runs scored, and wickets taken.
View player details by entering the player ID.
Technologies Used
React: JavaScript library for building user interfaces.
Web3.js: Library to interact with Ethereum smart contracts.


## Getting Started

### Installing

To download the code, you can visit the following file path:-(solidty code) (https://github.com/Sagarthakur18/ETH-AVAX_assesment_2/blob/main/CricketPerformance.sol)
and frontend react code (https://github.com/Sagarthakur18/ETH-AVAX_assesment_2/blob/main/App.js.js)

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at (https://remix.ethereum.org/.)

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., Meta.sol). Copy and paste the following code into the file: contract MyToken {
```
 function addPlayer(string memory _name, uint256 _runsScored, uint256 _wicketsTaken) public {
        playersCount++;
        players[playersCount] = Player(playersCount, _name, _runsScored, _wicketsTaken);
    }

    function getPlayer(uint256 _playerId) public view returns (string memory, uint256, uint256) {
        Player memory player = players[_playerId];
        return (player.name, player.runsScored, player.wicketsTaken);
    }}
```
and for react code you can simply run it in vs code or command prompt node js should be installed there 


## Authors

sagar thakur(sagarthakur8456@gmail.com)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
