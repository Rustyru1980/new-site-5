import { getJSON } from "wix-fetch";
const baseUrl = "https://api.frankfurter.app/latest";
let currencyOptions = [
  { value: "USD", label: "US Dollars" },
  { value: "EUR", label: "Euros" },
  { value: "JPY", label: "Japanese Yen" },
];
$w.onReady(function () {
  populateDropdowns();
  $w("#calculateButton").onClick(() => {
    calculateCurrency();
  });
});
function populateDropdowns() {
  $w("Dropdown").options = currencyOptions;
  $w("Dropdown").selectedIndex = 0;
}
function calculateCurrency() {
  let initialAmount = Number($w("#sourceAmount").value); // Convert to number
  let sourceSymbol = $w("#sourceCurrency").value;
  let targetSymbol = $w("#targetCurrency").value;
  if (!initialAmount || isNaN(initialAmount)) {
    $w("#targetAmount").value = "Invalid amount";
    return;
  }
  let fullUrl = `${baseUrl}?amount=${initialAmount}&from=${sourceSymbol}&to=${targetSymbol}`;
  getJSON(fullUrl).then((json) => {
    let converted = json.rates[targetSymbol];
    $w("#targetAmount").value = converted.toFixed(2).toString();
  }).catch((err) => {
    $w("#targetAmount").value = "Error";
    console.error("Conversion error:", err);
  });
}