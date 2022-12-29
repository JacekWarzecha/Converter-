{
  const priceCalculate = () => {
    const quotesElement = document.querySelector(".js-quotes");
    const exchangeElement = document.querySelector(".js-exchange");
    const costElement = document.querySelector(".js-cost");
    const quotes = quotesElement.value;
    const exchange = exchangeElement.value;
    let cost = quotes * exchange;
    costElement.innerText = cost.toFixed(2);

    if (cost <= 0) {
      costElement.innerText = "Wprowadź dodatnie liczby";
    }
  };

  // Chciałem zrobić funkcję i wywołać ją po przecinku za .."input", priceCalculate, /tu\ -ale nie działało

  // const textShow = () => {
  //   if (cost <= 0) {
  //     costElement.innerText = "Wprowadź dodatnie liczby";
  //   }
  // }

  const priceShow = () => {
    const formCurrency = document.querySelector(".js-form");
    formCurrency.addEventListener("input", priceCalculate);
  };

  priceShow();
}
