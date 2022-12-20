let quotesElement = document.querySelector(".js-quotes");

let exchangeElement = document.querySelector(".js-exchange");

let formCurrency = document.querySelector(".js-form");

let costElement = document.querySelector(".js-cost");

formCurrency.addEventListener("input", () => {
  let quotes = quotesElement.value;
  let exchange = exchangeElement.value;
  let cost = quotes * exchange;

  costElement.innerText = cost.toFixed(2);

  if (cost <= 0) {
    costElement.innerText = "Wprowadź dodatnie liczby";
  }
});
