const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
  // console.log(msg.innerText);

  window.addEventListener("load", ()=>{
    updateExchangeRate();
  });


for (let select of dropdowns)
{
  for(currCode in countryList)
  {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode ==="USD")
    {
      newOption.selected= "selected";
    }
    if (select.name === "to" && currCode ==="INR")
    {
      newOption.selected= "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (event)=>{
    updateFlag(event.target);
  });
}

const updateFlag = (element) =>{
  let currCode = element.value;
  let countryCode = countryList[currCode];
  console.log(currCode, countryCode);
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img= element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (event)=>{
  event.preventDefault(); //dont show the form submitted detail in url and reload when we click on submit button
  updateExchangeRate();
});

const updateExchangeRate = async() =>{
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if(amtVal === "" || amtVal <1){
    amtVal =1;
    amount.value = "1";
  }

  //console.log(fromCurr , toCurr);
  const URL =  `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  // console.log(URL);

  let response = await fetch(URL);
  // console.log(response);

  let data = await response.json();
  // console.log(data);

  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  // console.log(rate);

  let newAmtVal = amtVal*rate;
  

  let newMsgValue = `${amtVal} ${fromCurr.value} = ${newAmtVal} ${toCurr.value}`;
  // console.log(newMsgValue);

  msg.innerText = newMsgValue;

};