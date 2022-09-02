 const rootElement= document.getElementById(app-body);
fetch('https://api.twelvedata.com/dividends?symbol=AAPL&start_date=1970-01-01&apikey=2ee7d158b44d49c5a4db777c510778d6',{
   method:"GET",
   headers:{
    ContentType:"application/json",
   },
  })
.then((response) =>{
   return response.json();
})
    .then((result) => {
    result.forEach((result => {
      const dividendParentDiv=document.createElement('div');
      dividendParentDiv.className="border-blue-500 border mx-3";
      const dividendAmount=document.createElement('p');
      const dividendPayDate=document.createDocumentFragment('p');
    dividendAmount.innerHTML=result.amount;
    dividendPayDate.innerHTML=result.payment_date;
    dividendParentDiv.appendChild(dividendAmount);
    dividendParentDiv.append(dividendPayDate);
    }),
      
  });

