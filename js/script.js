function convertToFahrenheit() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    alert("Masukkan nilai Celcius yang valid.");
    return;
  }
  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById(
    "calculation"
  ).value = `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;
}

function resetFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation").value = "";
}

function reverseConversion() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  if (isNaN(fahrenheit)) {
    alert("Masukkan nilai Fahrenheit yang valid.");
    return;
  }
  const celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsius").value = celsius.toFixed(2);
  document.getElementById(
    "calculation"
  ).value = `${fahrenheit} °F = ${celsius.toFixed(2)} °C`;
}
