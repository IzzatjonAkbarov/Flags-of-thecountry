import "./style.css";
let Base_url = "https://restcountries.com/v3.1/all";

let dataofthecountry = JSON.parse(localStorage.getItem("dataofthecountry"));
let select = document.getElementById("select");
fetch(Base_url)
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element) => {
      let option = document.createElement("option");

      option.textContent = element.flag;

      select.append(option);
    });
  });
createInfo();
console.log("hello");

function createInfo() {
  let selectedcountry = document.getElementById("selectedcountry");
  let div = document.createElement("div");
  div.innerHTML = `    <section class="bg-blue-50 py-16">
      <div class="container1 mx-auto px-6 md:px-12 lg:px-24">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-blue-900 mb-4"> ${
            dataofthecountry.name.common
          }
          </h1>
          <p class="text-lg text-gray-700 mb-8">
            Discover the fascinating details about this remote territory in the
            ${dataofthecountry.continents}n region.
          </p>
        </div>

 <div
          class="w-full flex items-center gap-10 max-[1200px]:flex-col max-[1200px]:items-start py-5 max-[425px]:py-2">
          <img
            class=" max-[1000px]:w-full m-0 py-5 max-[500px]:h-[300px] max-[425px]:py-2"
            src=${dataofthecountry.flags.png}
            alt=${dataofthecountry.flags.alt} />
          <p
            class="w-[70%] max-[1200px]:w-full font-light text-[17px] max-[425px]:text-[14px] text-[#343333]">
            ${dataofthecountry.altSpellings[1]} is 
            Territory located in the remote ${
              dataofthecountry.continents
            }n region. Spanning an area
            of ${dataofthecountry.area} km<sup>2</sup>,  The
            territory’s capital,${
              dataofthecountry.capital
            }, serves as its administrative
            center. Known for its unique ecosystems, abundant wildlife, and
            breathtaking landscapes, it attracts scientists and adventurers
            alike. The official language is English, and ${
              dataofthecountry.currencies.SLL
            } (${
    dataofthecountry.currencies.SLL
  }) is used as currency. Despite being geographically isolated, the
            islands boast a rich history of exploration and a commitment to
            preserving their pristine environment.
          </p>
        </div>

        

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- General Info -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-blue-800 mb-4">
              General Information
            </h2>
            <ul class="list-disc list-inside text-gray-700">
              <li>
                <b>Official Name:</b> ${dataofthecountry.altSpellings[1]}
              </li>
              <li><b>Population:</b> ${dataofthecountry.population}</li>
              <li><b>Capital:</b> ${dataofthecountry.capital}</li>
              <li><b>Region:</b> ${dataofthecountry.region}</li>
            </ul>
          </div>

          <!-- Geography -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-blue-800 mb-4">Geography</h2>
            <ul class="list-disc list-inside text-gray-700">
              <li><b>Coordinates:</b> ${
                dataofthecountry.capitalInfo.latlng[0]
              } , ${dataofthecountry.capitalInfo.latlng[1]} </li>
              <li><b>Area:</b>${dataofthecountry.area} km<sup>2</sup></li>
              <li><b>Landlocked:</b> ${
                dataofthecountry.landlocked ? "Yes" : "No"
              } </li>
              <li><b>Time Zone:</b>${dataofthecountry.timezones}</li>
            </ul>
          </div>

          <!-- Language and Currency -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-blue-800 mb-4">
         Web-sites
            </h2>
            <ul class="list-disc list-inside text-gray-700">
              <li><b>Web:</b> ${dataofthecountry.tld}</li>
             
            </ul>
          </div>

          <!-- Flag -->
          <div
            class="bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
            <h2 class="text-2xl font-semibold text-blue-800 mb-4">
         Flag-img:
            </h2>
            <img
              src=${dataofthecountry.flags.png}
              alt=${dataofthecountry.flags.alt}
              class="w-32 h-auto border" />
          </div>

          <!-- Maps -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-blue-800 mb-4">Maps</h2>
            <ul class="list-disc list-inside text-gray-700">
              <li>
                <a
                  href=${dataofthecountry.maps.googleMaps}
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >Google Maps</a
                >
              </li>
              <li>
                <a
                  href=${dataofthecountry.maps.openStreetMaps}
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >OpenStreetMaps</a
                >
              </li>
            </ul>
          </div>

          <!-- Additional Info -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-blue-800 mb-4">
              Additional Information
            </h2>
            <ul class="list-disc list-inside text-gray-700">
              <li><b>Continent:</b> ${dataofthecountry.continents}</li>
          
              <li><b>Flag:</b>${dataofthecountry.flag}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>`;
  selectedcountry.append(div);
}
let toMainPage = document.getElementById("toMainPage");
toMainPage.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./index.html";
});
