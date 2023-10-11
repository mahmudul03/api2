// function loadData (){
//    false('https://restcountries.com/v3.1/all')
//    .then(res => res.json())
//    .then(data => displayCountry (data))
// }
// function displayCountry(data){
//     const section = document.getElementById('country') ;
//     data.forEach(d => {
//         // console.log(d);
//         const div = document.createElement('div');
//         div.innerHTML=`
//         <h2>name: ${d.name.common}</h2>
//         <img src="${d.flag.png} />

        
         
//         `

//     })

// }
// loadData ()
function loadData(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
 

}
function displayCountry(data){
    const  section = document.getElementById('section');
    
    

    data.forEach(d => {
        
        const div = document.createElement('div');
       
        div.innerHTML=
        `
        <h2>name: ${d.name.common}</h2>
        <img src ="${d.flags.png}"/>
         
        
        <button onclick="displaySingleData('${d.name.common}')   ">Details</button>
       
        
        
        `
        section.appendChild(div)
    })
  
}
const section2 = document.getElementById('section2');
const div = document.createElement('div')

function displaySingleData(data){
    fetch(`https://restcountries.com/v3.1/name/${data} `)
    .then(res => res.json())
    .then(data => {
       console.log(data)
        div.innerHTML=
        `
        <img src ="${data[0].flags.png}"/>
        <h2>name:${data[0].name.common}</h2>
        <h4>Population: ${data[0].population}</h4>
        <h4>Regoin: ${data[0].region}</h4>
        <h4>Capital: ${data[0].capital}</h4>
         

      
        
        `
        section2.appendChild(div)
    })
    window.scroll(0,0);
}



 



loadData ()
 
 