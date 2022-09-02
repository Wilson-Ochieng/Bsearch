
const api_url = 
'https://api.twelvedata.com/dividends?symbol=AAPL&start_date=1970-01-01&apikey=2ee7d158b44d49c5a4db777c510778d6'

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}
function show(data) {
  let tab = 
      `<tr>
        <th>amount</th>
        <th>payment_date</th>
       
       </tr>`;
  
  // Loop to access all rows 
  for (let r of data.list) {
      tab += `<tr> 
  <td>${r.amount} </td>
  <td>${r.payment_date}</td>
           
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("dividends").innerHTML = tab;

}
fetch('https://api.twelvedata.com/dividends?symbol=AAPL&start_date=1970-01-01&apikey=2ee7d158b44d49c5a4db777c510778d6')
    .then((response) => response.json())
    .then((data) => console.log(data));

