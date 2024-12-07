// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************

function getNet() {
  let net;
  if (document.getElementById("mn").checked) net = "wss://xrplcluster.com";
  return net;
} // End of getNet()


// *******************************************************
// ******************** Get Algorithm ********************
// *******************************************************

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
  seeds.value = standbySeedField.value;
  standbyBalanceField.value = "";
  standbyAmountField.value = "";
  standbyDestinationField.value = "";
} // End of getAccount2()


async function reload() {
  window.location.reload();
}
