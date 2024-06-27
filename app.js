const endDate = "10 April 2024 7:50 PM"
const inputs = document.querySelectorAll("input");
document.getElementById("end-date").innerText = endDate;

 function clock()  {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

if(diff<0) return;

    inputs[0].value = (Math.floor(diff/3600/24));
    inputs[1].value = (Math.floor(diff/3600%24));
    inputs[2].value = (Math.floor(diff/60)%60);
    inputs[3].value = (Math.floor(diff) % 60);

}
clock();

setInterval (()=>{
clock()
},1000
);


// 1 day = 24 hr 
// 1hr = 60 min 
// 60 min = 3600 second 