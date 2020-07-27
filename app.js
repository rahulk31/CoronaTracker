async function getdata(){
   var input = document.querySelector(".country");
   
   var confirm = document.querySelector(".numbers1");
   var death = document.querySelector(".numbers3");
   var recover = document.querySelector(".numbers2");
   
   var newConfirm = document.querySelector("#newConfirmed");
   var newDeath = document.querySelector("#newDeaths");
   var newRecover = document.querySelector("#newRecovered");
   
   var title = document.querySelector(".title")
   var country = input.value;
  //console.log(country);
   if(country == ""){
      alert("Pls input correct value")
   }
   try{
      const res = await fetch('https://api.covid19api.com/total/country/'+ country);
      const data = await res.json();
      const len= data.length;
      
      confirm.innerHTML = data[len-1].Confirmed;
		newConfirm.innerHTML="+"+(data[len-1].Confirmed-data[len-2].Confirmed);
      death.innerHTML = data[len-1].Deaths;
		newDeath.innerHTML = "+"+(data[len-1].Deaths-data[len-2].Deaths);
      recover.innerHTML = data[len-1].Recovered;
		newRecover.innerHTML = "+"+(data[len-1].Recovered-data[len-2].Recovered);    
      
      title.innerHTML = input.value.toUpperCase();
    }
   catch(e){
         alert("Country not found")
         input.value ="";
   }
  //alert(data.error.message)
  }