

const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByName');

    console.log(input.value);

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {

  const crypto = document.querySelector('section#cryptoDetails h4');
  const cryptovalue = document.querySelector('section#cryptoDetails p');
      console.log(data);
      crypto.innerText = data.crypto;
      cryptovalue.innerText = data.cryptovalue;
     
    });
  });
}

document.addEventListener('DOMContentLoaded', init);