

const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');

    console.log(input.value);

    fetch(`https://api.twelvedata.com/dividends?symbol=AAPL&start_date=1970-01-01&apikey=2ee7d158b44d49c5a4db777c510778d6/12${input.value}`)
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