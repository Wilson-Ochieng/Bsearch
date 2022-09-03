

const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');

    console.log(input.value);

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {

  const amount = document.querySelector('section#dividendsDetails h4');
  const payment_date = document.querySelector('section#dividendsDetails p');
      console.log(data);
      amount.innerText = data.amount;
      payment_date.innerText = data.payment_date;
     
    });
  });
}

document.addEventListener('DOMContentLoaded', init);