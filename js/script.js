{
  const updatePriceText = (cost) => {
    const costElement = document.querySelector(".js-cost");

    costElement.innerText = `${
      cost < 0 ? "tylko liczby dodatnie" : cost.toFixed(2)
    }`;
  };

  const priceCalculate = () => {
    const quotesElement = document.querySelector(".js-quotes");
    const exchangeElement = document.querySelector(".js-exchange");

    const quotes = quotesElement.value;
    const exchange = exchangeElement.value;
    let cost = quotes * exchange;

    updatePriceText(cost);
  };

  const priceShow = () => {
    const formQuotes = document.querySelector(".js-form");
    formQuotes.addEventListener("input", priceCalculate);
  };

  priceShow();
}

{
  const calculateScore = (amount, currency) => {
    const USD = 4.4;
    const EUR = 4.6;
    const CHF = 4.7;
    switch (currency) {
      case "USD":
        return amount / USD;
      case "EUR":
        return amount / EUR;
      case "CHF":
        return amount / CHF;
    }
  };

  const updateScoreText = (score, currency) => {
    const scoreElement = document.querySelector(".js-score");
    scoreElement.innerHTML = `${score.toFixed(2)} ${currency}`;
  };

  const submitFormCantor = (event) => {
    event.preventDefault();
    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const currency = currencyElement.value;
    const amount = +amountElement.value;

    const score = calculateScore(amount, currency);
    updateScoreText(score, currency);
  };

  const initSubmitFormCantor = () => {
    const formCantorElement = document.querySelector(".js-form-cantor");
    formCantorElement.addEventListener("submit", submitFormCantor);
  };

  initSubmitFormCantor();
}
