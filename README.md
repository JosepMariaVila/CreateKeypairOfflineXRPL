# createXRPwalletKeypairOffline
A super simple javascript pieace of code to create a key pair for an XRP wallet completely OFFLINE.

It creates a key pair using ed25519 algorithm

The ed25519 algorithm: seeds have 31 characters (sKdNVBLAmVjgcDrEfDSzTSBqsagHMEd).

Step by step guide to set up the wallet:

Create an empty folder in your desktop and download the 4 files.

Open the HTML file in your browser.

It works for the XRPL Mainet.

It allows to create a Mainnet account (which has to be activated later with XRP). DO IT OFFLINE, it's purely mathematical.

Once you have created it offline that wallet can receive XRP. Warning: if you ever use this wallet to peform a transaction online like sending XRP, then the key will becom compromised so you should create a new wallet and send the XRP there, these wallets are secure just if you don't perform transactions with the computer where the key pair has been generated.

You can try it here: https://skunk-proper-smoothly.ngrok-free.app/tools/supersimpleXRPwallet/xrpwallet
