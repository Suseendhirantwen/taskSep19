var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.eu/rest/v2/all", true);
req.send();
req.onload = function () {
  let result = JSON.parse(req.response);
  console.log("FLAG values");
  result.forEach((item) => {
    console.log(`${item.name} - ${item.flag}`);
  });
  console.log("Country data");
  result.forEach((item) => {
    console.log(`          
                 name: ${item.name} 
                 region: ${item.region}
                 Sub region: ${item.subregion}
                 Population: ${item.population}
                 `);
  });
};
