
const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);

function searchBtn(){
    const input = document.getElementById('travelRecommendation');
    input= '';

    fetch ('travel_recommendation.api.json')
    .then(response => response.json())
    .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);
        
        if (country){
            const id = country.id.join(',');
            const beaches = country.beaches.join(',');
            const temples = country.temples.join(',');
            const description = country.description;

            input.innerHTML += `${country.name}`;
            input.innerHTML += `<img src = "${country.imagesrc}" alt="hjh">`;

            input.innerHTML += `<p><strong>ID:</strong> ${id}</p>`;
            destinationDiv.innerHTML += `<p><strong>Beaches:</strong> ${beaches}</p>`;
            destinationDiv.innerHTML += `<p><strong>Temples:</strong> ${temples}</p>`;
            destinationDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
            } else {
              destinationDiv.innerHTML = 'Country could not found.';
            }
          })

          .catch(error => {
            console.log=('Error:', error);
            destinationDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

