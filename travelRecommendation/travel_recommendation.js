const travelDestinations = document.getElementById('travelDestinations');
const searchBtn = document.getElementById('searchBtn');
const destination =[];

function resetBtn(){
    document.getElementById('travelDestination').value="";
}

function searchDestinations(){
    const input = document.getElementById('travelDestinations');
    const destinationDiv = document.getElementById('destination');
    destinationDiv.innerHTML = '';

    fetch ('travel_recommendation.api.json')
    .then(response => response.json())
    .then(data => {
        const countries = data.countries.find(item => item.name.toLowerCase() === input);
        
        if (countries){
            const name = countries.name.join(',');
            const cities = countries.cities.join(',');
            const description = countries.description.join(',');

            destinationDiv.innerHTML += `<h6>${countries.name}</h6>`;
            destinationDiv.innerHTML += `<img scr = "${condition.imagescr}" alt="jpg">`;

            destinationDiv.innerHTML += `<p><strong>Cities:</strong>${cities}</p>`;
            destinationDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
            } else {
              destinationDiv.innerHTML = 'Condition not found.';
            }
          })

          .catch(error => {
            console.log=('Error:', error);
            destinationDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

searchBtn.addEventListener('click', searchDestinations)

