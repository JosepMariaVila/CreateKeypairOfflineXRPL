// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************
// It's not necesssary to generate the keypair
// I put it here and in the visual interface in order to 
// people that doesn't know exactly what's going one 
// understands that the keypair is valid in the XRPL.

function getNet() {
  let net;
  if (document.getElementById("mn").checked) net = "wss://xrplcluster.com";
  return net;
} // End of getNet()


// *******************************************************
// ******************** Get Algorithm ********************
// *******************************************************
// It's not necesssary to generate the keypair. I put it here 
// and in the visual interface in order to people that doesn't 
// know exactly what's going one understands that the keypair 
// is created using the ed25519 elliptic curve.

function getAlgo() {
  let algo;
  if (document.getElementById("ed").checked) algo = "ed25519";
  return algo;
} // End of getAlgo()


// *******************************************************
// ************* Create XRP Mainnet Account **************
// *******************************************************

async function getAccount2() {
  const wallet = xrpl.Wallet.generate("ed25519");
  console.log(wallet);

  standbyResultField.value =
    "Creating a wallet...\n" + "Wallet created:\n" + JSON.stringify(wallet);

  standbyAccountField.value = wallet.address;
  standbySeedField.value = wallet.seed;
} // End of getAccount2()


async function reload() {
  window.location.reload();
}
