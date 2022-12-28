{
  const quotesElement = document.querySelector(".js-quotes");

  const exchangeElement = document.querySelector(".js-exchange");

  const formCurrency = document.querySelector(".js-form");

  const costElement = document.querySelector(".js-cost");

  formCurrency.addEventListener("input", () => {
    const quotes = quotesElement.value;
    const exchange = exchangeElement.value;
    let cost = quotes * exchange;

    costElement.innerText = cost.toFixed(2);

    if (cost <= 0) {
      costElement.innerText = "Wprowadź dodatnie liczby";
    }
  });
}
