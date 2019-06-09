// Quotes for generator 1

// "use strict";

let loveQuotes = [
    ['You','I','The', 'We ', 'Your', 'They'],
    ['hug', 'dance','choose', 'listen', 'smile'],
    ['happiness','forever','today', 'lifetime', 'eternity'],
];

let inspirationalQuotes = [
    ['Act  ','Act  ','Everything', 'All', 'Always', 'Dreams', 'Never', 'Try', 'Sky'],
    ['as ', 'without','is', 'will', 'be', 'Put', 'deliver', 'come', 'Give', 'Something','the'],
    ['if','expectation','well', 'be ok', 'quality', 'true','up', 'new', 'limit'],
];


//BUTTON 1  love quotes 
function loveQuoteBtn() {
  let searchBox = document.getElementById("searchBox1").value;
  let numberVal= Number(searchBox);
  renderToPage("renderFirstQuote", numberVal, loveQuotes);
};


//BUTTON 2 inspirational quotes 
function inspirationQuoteBtn() {
    let searchBox = document.getElementById("searchBox2").value;
    let numberVal= Number(searchBox);
    renderToPage("renderFirstQuote2", numberVal, inspirationalQuotes);
  };
  
// Render the quotes to the page
  const renderToPage = function(paragraph, numberVal, array){
    let searchBox = document.getElementById(paragraph).value;
    changeDomStyles(numberVal, array, paragraph);
  };

// --------------------------------------------
  // will test the conditions
  const changeDomStyles= function(numberVal, array, paragraph){
    let p = document.getElementById(paragraph);
    const quotes = array;
    if(numberVal > 0 && numberVal <= 5 ){
      // Call loop function(quoteLoop()) with serach box value  
      p.innerHTML = arrayLoop(numberVal, quotes)
      successColor(p);
    }else{
      notSuccess(p)
   };
  };

//Manipulate the dom based on value 
  const successColor= function(p){
    p.style.color = 'green'
    p.style.backgroundColor = 'transparent'
    p.classList("fade");
  }
  
  const notSuccess= function(p){
    p.innerHTML = 'Invalid value only 1 to 5';
    p.style.color = 'black'
    p.style.backgroundColor='red'
  }
  // -----------------------------------------------

// LOOP value from numberVal   
function arrayLoop(numLoopsToRun, array){
  let fullQuote = ""
  for(let i =0; i<numLoopsToRun; i++ ){
    fullQuote += `${quoteRandom(array)}<hr/>`; 
  } 
  return fullQuote;
};

function quoteRandom(quotes){
quoteRan='';
quotes.map((i)=>{
  quoteRan += `${i[randomNum(i.length)]} `
})
return quoteRan;
}

// Random number
function randomNum(range){
return Math.floor(Math.random()*range);
};
