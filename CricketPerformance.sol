// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CricketPerformance {
    struct Player {
        uint256 playerId;
        string name;
        uint256 runsScored;
        uint256 wicketsTaken;
    }

    mapping(uint256 => Player) public players;
    uint256 public playersCount;

    function addPlayer(string memory _name, uint256 _runsScored, uint256 _wicketsTaken) public {
        playersCount++;
        players[playersCount] = Player(playersCount, _name, _runsScored, _wicketsTaken);
    }

    function getPlayer(uint256 _playerId) public view returns (string memory, uint256, uint256) {
        Player memory player = players[_playerId];
        return (player.name, player.runsScored, player.wicketsTaken);
    }
}
