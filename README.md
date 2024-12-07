# CreateXRPwalletKeypairOffline

A javascript pieace of code to create OFFLINE a keypair XRP wallet.

It creates a key pair using ed25519 algorithm.

The ed25519 algorithm: seeds have 31 characters (sKdNVBLAmVjgcDrEfDSzTSBqsagHMEd).

Step by step guide to set up the wallet:

Create an empty folder in your desktop and download the 4 files.

Open the HTML file in your browser.

It works for the XRPL Mainnet.

It allows to create a Keypair Mainnet account (which has to be activated later with XRP). DO IT OFFLINE, it's purely mathematical.

Once you have created it offline that wallet can receive XRP. Warning: if you use this wallet to perform a transaction ONLINE like sending XRP, then the private key will become compromised so you should create again a new wallet offline and send your XRP there. These wallets are secure just if you don't perform transactions online with the computer where the key pair has been generated.

You can try it here: https://skunk-proper-smoothly.ngrok-free.app/tools/createKeypairXRPwalletOffline/xrpwallet
