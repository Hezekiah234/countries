 



 class Countries{
  constructor(country,flag,imageURL,about){
   this.name = country,
   this.flag = flag,
   this.image= imageURL
   this.history = about
  } 
}
let country1 = new Countries("Nigeria","image/Nigeria.jfif","image/nigeria flag.png" ,"Nigeria, in West Africa, boasts cultural diversity and economic significance. With over 200 million inhabitants,d it stands as Africa's most populous nation, facing various socio-economic challenges.") 
let country2 = new Countries("Ghana","image/11398_ghana glance.jpg","image/FB_IMG_16915960518528221.jpg", "Ghana, located in West Africa, is known for its stable democracy, cultural richness, and welcoming atmosphere. With a population of approximately 30 million, it boasts diverse ethnic groups and a growing economy driven by agriculture, mining, and services." ) 
let country3 = new Countries("England","image/regents-street-london-england - Copy.jpg","image/Union-Jack-British-Flag-of-Great-Britain.jpg", "England, part of the United Kingdom, is culturally rich with landmarks like Big Ben. With over 55 million people, it's a dynamic mix of urban and rural lifestyles..") 

let country4 = new Countries("Togo","image/FB_IMG_16915960610572601.jpg","image/FB_IMG_16915960518528221.jpg","Togo, in West Africa, boasts a rich culture and diverse landscapes. With a population of approximately 8 million, it sustains its economy through agriculture and commerce." ) 
let country5 = new Countries("South Africa","image/lauren cape town.jpg","image/Flag-South-Africa.jpg","South Africa, located in Southern Africa, is celebrated for its diverse culture, stunning landscapes,and historical significance. With a population of around 60 million, it's a regional powerhouse." ) 
let country6 = new Countries("America","image/FB_IMG_16915960610572601.jpg","image/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg","America, in North America, is renowned for its diverse culture, technological advancements,and economic dominance. With a population exceeding 330 million, it's a global superpower." ) 
let country7 = new Countries("Germany","image/FB_IMG_16915960610572601.jpg","image/FB_IMG_16915960518528221.jpg", "Germany, in Central Europe, is renowned for its strong economy, rich history, and cultural heritage. With a population exceeding 80 million, it's a key player in European affairs." ) 
let country8 = new Countries("France","image/france-eiffel-tower_square.jpg","image/France-flag-1.png","France, in Western Europe, is famed for its art, cuisine, and iconic landmarks like the Eiffel Tower. With a population surpassing 65 million, it's a cultural and economic powerhouse." ) 
let country9 = new Countries("India","image/india-tajmahal_16x9.jpg","image/india-tajmahal_16x9.jpg","India, in South Asia, is known for its rich history, diverse culture, and economic growth. With a population surpassing 1.3 billion, it's the world's second-most populous country." ) 
let country10 = new Countries("China","image/chinese-flag.png","image/chinese-flag.png","China, in East Asia, is famed for its ancient civilization, rapid development, and global influence. With a population surpassing 1.4 billion, it's the world's most populous nation." ) 
let country11 = new Countries("Korea","image/FB_IMG_16915960610572601.jpg","image/FB_IMG_16915960518528221.jpg","Korea, divided into North and South, boasts a rich cultural heritage and technological prowess. With a combined population of around 75 million, it's a key player in East Asia." ) 
let country12 = new Countries("Senegal","image/_132676150_protectourelectionsenegal.png","image/800px-Flag_of_Senegal.svg.png","Senegal, in West Africa, is known for its vibrant culture, music, and hospitality. With a population of over 16 million, it thrives on agriculture, fishing, and tourism." ) 
let country13 = new Countries("Egypt","image/FB_IMG_16915960610572601.jpg","image/FB_IMG_16915960518528221.jpg","Egypt, in North Africa, is famed for its ancient history, iconic monuments like the pyramids, and rich cultural heritage. With a population exceeding 100 million, it's a regional powerhouse." ) 
let country14 = new Countries("Algeria","image/maxresdefault(1).jpg","image/1200px-Flag_of_Algeria.svg.png","Algeria, in North Africa, boasts a diverse landscape, from the Sahara Desert to the Mediterranean coast. With a population exceeding 40 million, it's a significant player in the region's affairs." ) 
let country15 = new Countries("Cameroon","image/cameroon.jpg","image/cameroon.jpg","cameroon, in West Africa, is known for its vibrant culture, music, and hospitality. With a population of over 16 million, it thrives on agriculture, fishing, and tourism.") 
let country16 = new Countries("Niger","image/006408963073806dbcbe527940dbef65bf072db8arc614x376w735us1.jpg","image/niger-republic-flag-scaled.jpg","Niger, in West Africa, boasts a rich culture and diverse landscapes. With a population of approximately 8 million, it sustains its economy through agriculture and commerce." ) 
let country17 = new Countries("Australia","image/FB_IMG_16915960610572601.jpg","image/Flag_of_Australia_(converted).svg","Australia, in Oceania, is renowned for its stunning landscapes, diverse wildlife, and outdoor lifestyle. With a population of around 25 million, it's a major player in the Asia-Pacific region." ) 
let country18 = new Countries("Mexico","image/maxresdefault.jpg","image/1200px-Flag_of_Mexico.svg.png","Mexico, in North America, is famous for its rich history, vibrant culture, and delicious cuisine. With a population exceeding 120 million, it's a significant player in the global economy." ) 
let country19 = new Countries("Malawi","image/maxresdefault(0).jpg","image/1200px-Flag_of_Malawi.svg.png" ,"malawi, is famous for its rich history, vibrant culture, and delicious cuisine. With a population exceeding 120 million, it's a significant player in the") 
let country20 = new Countries("Ivory Coast","image/FB_IMG_16915960610572601.jpg","image/FB_IMG_16915960518528221.jpg","Ivory coast, in africa, is famous for its rich history, vibrant culture, and delicious cuisine. With a population exceeding 120 million, it's a significant player in the global economy." ) 


const check =(country, flag, imageURL,about) =>{
 if (all.value =='NG') {
  alert('You  are welcome')
  show.style.display ="block"
  danger.style.display ="none"
  console.log(country1);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country1.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country1.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country1.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country1.history}</p>
 </div>
  `

 } else if (all.value =="GN") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country2);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country2.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country2.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country2.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country2.history}</p>
 </div>
  `
 }
 else if (all.value =="EG") {
  alert('You  are welcome')
  show.style.display ="block"
  danger.style.display ="none"
  console.log(country3);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country3.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country3.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country3.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country3.history}</p>
 </div>
  `
 }   else if (all.value =="TG") {
  alert('You  are welcome')
  show.style.display ="block"
  console.log(country4);
  danger.style.display ="none"
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country4.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country4.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country4.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country4.history}</p>
 </div>
  `
 }    else if (all.value =="SA") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country5);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country5.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country5.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country5.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country5.history}</p>
 </div>
  `
 }   else if (all.value =="AM") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country6);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country6.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country6.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country6.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country6.history}</p>
 </div>
  `
 }   
 else if (all.value =="GM") {
  alert('You  are welcome')
  show.style.display ="block"
  danger.style.display ="none"
  console.log(country7);
  show.innerHTML =`
  <div class="mx-auto col-5" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country7.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country7.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country7.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country7.history}</p>
 </div>
  `
 }    else if (all.value =="FC") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country8);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country8.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country8.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country8.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country8.history}</p>
 </div>
  `
 }    else if (all.value =="ID") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country9);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country9.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country9.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country9.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country9.history}</p>
 </div>
  `
 }    else if (all.value =="CN") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country10);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px;">
  <h3>${country10.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country10.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country10.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country10.history}</p>
 </div>
  `
 }    else if (all.value =="KR") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country11);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country11.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country11.flag}" alt=""/>
 <h3>FLAG</h3>9
 <img   style ="height:150px; width:75%;"  src="${country11.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country11.history}</p>
 </div>
  `
 }    else if (all.value =="SG") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country12);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country12.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country12.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country12.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country12.history}</p>
 </div>
  `
 }    else if (all.value =="ET") {
  alert('You  are welcome')
  show.style.display ="block"
  danger.style.display ="none"

  console.log(country13);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country13.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country13.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country13.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country13.history}</p>
 </div>

  `
 }    else if (all.value =="AA") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country14);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country14.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country14.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country14.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country14.history}</p>
 </div>
  `
 }   else if (all.value =="CA") {
  alert('You  are welcome')
  show.style.display ="block"
  danger.style.display ="none"
  console.log(country15);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country15.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country15.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country15.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country15.history}</p>
 </div>
  `
 }     else if (all.value =="NR") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country16);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country16.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country16.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country16.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country16.history}</p>
 </div>
  `
 }   else if (all.value =="AU") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country17);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country17.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country17.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country17.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country17.history}</p>
 </div>
  `
 }    else if (all.value =="MC") {
  alert('You  are welcome')
  danger.style.display ="none"
  show.style.display ="block"
  console.log(country18);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country18.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country18.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country18.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country18.history}</p>
 </div>
  `
 }    else if (all.value =="MW") {
  alert('You  are welcome')
  show.style.display ="block"
  danger.style.display ="none"
  console.log(country19);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country19.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country19.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country19.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country19.history}</p>
 </div>
  `
 }    else if (all.value =="IC") {
  alert('You  are welcome')
  show.style.display ="block"
  console.log(country20);
  show.innerHTML =`
  <div class="mx-auto col-6" style=" margin-top: 40px;background-color: firebrick; width: 350px;  height: 550px; border-radius: 12px; backdrop-filter: blur(30px);  text-align: center; color: white; padding:10px; ">
  <h3>${country20.name} </h3>
 <img   style ="height:150px; width:75%;"  src="${country20.flag}" alt=""/>
 <h3>FLAG</h3>
 <img   style ="height:150px; width:75%;"  src="${country20.image}" alt=""/>
 <p style="margin-top:20px; line-height:22px;">${country20.history}</p>
 </div>
  `
 }   
 
 else if(all.value == "SC") {
  danger.style.display ="block"
 show.style.display ="none"
setTimeout(function(){
  danger.style.display ="none"
},3000);

} else{
  show.style.display ="block"

}
}
