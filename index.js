

const countryUrl = `https://corona-api.com/countries`;
// const country = document.querySelector('#country')

const counrtyArray=async () => {
    let ctr = await fetch(countryUrl);
    let info = await ctr.json();
    let countryInfo =info.data;
    
    let counrty=[]
    countryInfo.map((s)=>{
        counrty.push(s.name)
        
        })
        // console.log(counrty)
        return counrty

}

counrtyArray();

const totalDeath=async () => {
    let ctr = await fetch(countryUrl);
    let info = await ctr.json();
    let deathInfo =info.data;
    
    let yDeath=[]
    deathInfo.map((s)=>{
        yDeath.push({country:s.name, death:s.latest_data.deaths, confirmed:s.latest_data.confirmed, recovered:s.latest_data.recovered, critical:s.latest_data.critical, })               
        })
        // yLabels=yDeath
        // console.log(yDeath)
        return yDeath

}

let yDeath=totalDeath();

// const getCountry = async () => {
//     let ctr = await fetch(countryUrl);
//     let info = await ctr.json();
//     let objectData =info.data;
//     let countryData=[]
//     objectData.map((s)=>{
//         countryData.push({
//             name:s.name,
//             today:s.today,
//             latest_data:s.latest_data
        
//         })
        
//         })
//         console.log(countryData)
      
//     }
// console.log(getCountry())





const continentUrl = 'https://restcountries.herokuapp.com/api/v1';
const proxy = 'https://api.allorigins.win/raw?url';
let world={}
const getContinent = async () => {
    let cont = await fetch(`${proxy}=${continentUrl}`);
    let data = await cont.json();
    // console.log(data)
    //   console.log (data.region)

    // return data

    let continentData=[]
    let asiaArray=[]
    let europeArray=[]
    let africaArray=[]
    let americasArray=[]
    data.map((s)=>{
        continentData.push({
            country:s.name.common,
            region:s.region,
        })
    if(s.region=='Asia'){
        asiaArray.push(s.name.common)
        xLabels=asiaArray

}
else if(s.region=='Europe'){
    europeArray.push(s.name.common)
    xLabels=europeArray
}
else if(s.region=='Africa'){
    africaArray.push(s.name.common)
    xLabels=africaArray
}
else if(s.region=='Americas'){
    americasArray.push(s.name.common)
    xLabels=americasArray
}
        })
        
        world.Asia=asiaArray
        world.Europe=europeArray
        world.Africa=africaArray
        world.Americas=americasArray
      
    }
    console.log (world)
getContinent();

let conformed
function yAxe(){
    if(yDeath.counrty==world.Asia){
         conformed= yDeath.confirmed
    }
    return conformed
}

let xLabels=[]
let yLabels=[]

const btnAsia=document.querySelector('.btnAsia')
btnAsia.addEventListener('click', asiaDisplay);
let x=[]
async function asiaDisplay() {
    xLabels=await world.Asia
    console.log(xLabels)
    yDeath.map ((s)=>{
 x.push({country:s.name, confirmed:s.latest_data.confirmed, })
    })
    if(x.country==xLabels){
        yLabels=await x.confirmed
        // return confirmed
    }
    // yLabels=await yDeath.confirmed
    console.log(xLabels)
    console.log(yLabels)
}
console.log(asiaDisplay())

// let continent;
// continentbtn.addEventListener('click',async(e)=>{
//     continent=e.getAttribute("id");
//     switch(continent){
//         case ('asia'):
//             xLabels=await  getContinent('Asia')  
//             console.log(xLabels);
//             yLabels=await yAxe(xLabels)
//             break 
//     }
//     case('europe'):

// })



const btnEurope=document.querySelector('.btnEurope')
btnEurope.addEventListener('click', europeDisplay);

async function europeDisplay() {
    btnEurope.innerHTML = await getContinent()
}

const btnAfrica=document.querySelector('.btnEurope')
btnAfrica.addEventListener('click', africaDisplay);

async function africaDisplay() {
    btnAfrica.innerHTML = await getContinent()
}

const btnConfirmed=document.querySelector('.btnConfirmed')
btnConfirmed.addEventListener('click', counrtyConfirmed);

async function counrtyConfirmed() {
    btnConfirmed.innerHTML = await totalDeath()
}



chatrIt()

async function chatrIt(){
    await getContinent()
    await counrtyArray()
    await totalDeath()
const ctx = document.getElementById('myChart').getContext('2d');

const chart = await new Chart(ctx, {
    type: 'line',
    data: {
        labels: xLabels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: yLabels,
        }]
    },

    // Configuration options go here
    options: {}
});
// return chart


}

// async function updateChart(chart,yDeath,data){
//     chart.data.labels.push(xLabels);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     })
//     chart.update();
// };
// updateChart()
// const btnUpdate=document.querySelector('#btnUpdate')
// btnUpdate.addEventListener('click', counrtyDisplay);

// async function counrtyDisplay() {
//     xLabels.innerHTML = await counrtyArray()
// }


continent=e.target.getAttribute("id");
