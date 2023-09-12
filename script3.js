const searchBtn = document.getElementById("search-btn");
const countryInput = document.getElementById("country-input");
const result = document.getElementById("result");


searchBtn.addEventListener("click", () => {
  const countryName = countryInput.value.trim();

  if (countryName === "") {
    result.innerHTML = "<h3>The input field cannot be empty</h3>";
    return;
  }

  const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        result.innerHTML = "<h3>No country found with that name.</h3>";
        return;
      }

      const countryData = data[0];
      const flagImg = `<img src="${countryData.flags.svg}" class="flag-img">`;
   
      const countryInfo = `
        <h2>${countryData.name.common}</h2>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${countryData.continents[0]}</span>
        </div>
      </div>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Capital:</h4>
              <span>${countryData.capital[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Population:</h4>
              <span>${countryData.population}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Currencies:</h4>
              <span>${Object.keys(countryData.currencies)[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Languages:</h4>
              <span>${Object.values(countryData.languages).join(", ")}</span>
          </div>
        </div>
      `;

      result.innerHTML = flagImg + countryInfo;
    })
    .catch((error) => {
      console.error(error);
      result.innerHTML = "<h3>An error occurred. Please try again later.</h3>";
    });
});
