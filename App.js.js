import React, { useState, useEffect } from 'react';
import './App.css';
import Web3 from 'web3';

const contractABI = [
    // Replace with the ABI of your deployed smart contract
	[
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_runsScored",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_wicketsTaken",
					"type": "uint256"
				}
			],
			"name": "addPlayer",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_playerId",
					"type": "uint256"
				}
			],
			"name": "getPlayer",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "players",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "playerId",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "runsScored",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "wicketsTaken",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "playersCount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]

const contractAddress = '0x7AaB958340D275c89D21367aBA5273FbBd45CC22'; // Replace with your deployed contract address

function App() {
    const [playerId, setPlayerId] = useState('');
    const [playerData, setPlayerData] = useState({ name: '', runsScored: 0, wicketsTaken: 0 });
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                    setWeb3(web3Instance);
                    setContract(contractInstance);
                    console.log('Web3 and contract initialized.');
                } catch (error) {
                    console.error('Failed to load web3 or contract, please check console logs.', error);
                }
            } else {
                console.log('Please install MetaMask or another Ethereum wallet extension.');
            }
        };

        initWeb3();
    }, []);

    const getPlayerData = async () => {
        if (contract) {
            try {
                console.log('Fetching data for player ID:', playerId);
                const data = await contract.methods.getPlayer(playerId).call();
                console.log('Data fetched:', data);
                setPlayerData({
                    name: data[0],
                    runsScored: parseInt(data[1]),
                    wicketsTaken: parseInt(data[2])
                });
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        } else {
            console.error('Contract is not loaded.');
        }
    };

    return (
        <div className="App">
            <h1>Cricket Player Performance Tracker</h1>
            <label>
                Enter Player ID:
                <input type="text" value={playerId} onChange={(e) => setPlayerId(e.target.value)} />
            </label>
            <button onClick={getPlayerData}>Get Player Data</button>
            <div>
                <h2>Player Data</h2>
                <p>Name: {playerData.name}</p>
                <p>Runs Scored: {playerData.runsScored}</p>
                <p>Wickets Taken: {playerData.wicketsTaken}</p>
            </div>
        </div>
    );
}

export default App;
