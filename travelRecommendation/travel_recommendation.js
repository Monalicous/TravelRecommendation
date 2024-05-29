const travelRecommendation = document.getElementById('travelRecommendation');
const recommendation =document.getElementById('recommendation');
const searchBtn = document.getElementById('searchBtn');
const vacation = [];

const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);


function searchRecommendations(){
    const input = document.getElementById('travelRecommendation').value.toLowerCase();
    const recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML= '';

    fetch ('travel_recommendation.api.json')
    .then(response => response.json())
    .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);
        const beach = data.beaches.find(item => item.name.toLowerCase() === input);
        const temple = data.temples.find(item => item.name.toLowerCase() === input);


        if (country || beach || temple){
            const id = country.id.join(',');
            const cities = country.cities.join(',');
            const description = country.description.join(',');
            
            input.innerHTML += `${country.name}` || `${beach.name}` || `${temple.name}`;
            input.innerHTML += `<img src = "${country.imagesrc}" alt="hjh">` ;

            input.innerHTML += `<p><strong>Cities:</strong> ${cities}</p>`;
            recommendationDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
            } else {
              recommendationDiv.innerHTML = 'Country could not be found.';
            }
          })

          .catch(error => {
            console.log=('Error:', error);
            recommendationDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

searchBtn.addEventListener('click', searchRecommendations);

