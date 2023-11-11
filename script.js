let key="729b50da4bfb4889935d1c372c2f7b2a";
let cardData=document.querySelector(".cardData");
let searchBtn=document.getElementById("searchBtn");
let inputData=document.getElementById("inputData");
let searchType=document.getElementById("type");

const getData= async(input)=>{
    let res=await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData=await res.json();
    console.log(jsonData.articles);
    searchType.innerText="Search: "+input
    cardData.innerHTML="";
    inputData.value="";
   
    jsonData.articles.forEach(function(article) {
       console.log(article); 
       let divs=document.createElement("div");
    divs.classList.add("card");
     cardData.appendChild(divs);
     divs.innerHTML=`
     <img src="${article.urlToImage}" alt="">
      <h3>
      ${article.title}
      </h3>
<p>${article.description}</p>
     `
     divs.addEventListener("click",function(){
        window.open(article.url);

     })
    })
    
}
window.addEventListener("load",function(){
    getData("India")

})
searchBtn.addEventListener("click", function(){
    let inputText=inputData.value;
    getData(inputText)
    getData();
})
function navClick(navName){
    if(navName=="politics"){
        document.getElementById("politics").style.color="skyblue";
        document.getElementById("technology").style.color="white";
        document.getElementById("sports").style.color="white";
    }
    if(navName=="technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("technology").style.color="skyblue";
        document.getElementById("sports").style.color="white";
    }
    if(navName=="sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("sports").style.color="skyblue";
    }

    getData(navName);
}