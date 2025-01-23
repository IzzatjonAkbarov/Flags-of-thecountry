import "./style.css";
let searchedarea = document.getElementById("searchedarea");
let flagsimg = document.querySelector(".flagsimg");
let Base_url = "https://restcountries.com/v3.1/";
fetch(`${Base_url}all`)
  .then((data) => data.json())
  .then((data) => {
    gettingdata(data);
    throwingToPage(data);
  })
  .catch((err) => console.log(err));

function gettingdata(data) {
  data.forEach((element) => {
    let a = document.createElement("a");

    a.innerHTML = ` <a href="./admin.html" class="relative box w-fit ">
        <img class="" src="${element.flags.png}" alt="" />
        <p
          class="w-full nameofthecountry text-white py-5 bg-[#00000057]  text-center">
          ${element.name.common}
        </p>
      </a>`;

    flagsimg.append(a);
  });
}
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchedElement = form.search.value;

  fetch(`${Base_url}all`)
    .then((data) => data.json())
    .then((data) => {
      filteringdata(data, searchedElement.toLowerCase().trim());
      form.search.value = "";
    });
});

function filteringdata(data, searchedElement) {
  data.filter((element) => {
    let nameofthecountry = element.name.common;
    if (
      nameofthecountry.toLowerCase().trim().includes(searchedElement) &&
      searchedElement !== ""
    ) {
      searchedarea.innerHTML = "";
      let div = document.createElement("div");
      div.innerHTML = ` <div
                class="flex items-center gap-3 w-full bg-white border rounded-lg px-2 py-3">
                <p>${element.flag}</p>
                <p>${element.name.common}</p>
              </div>`;
      searchedarea.append(div);
      searchedarea.addEventListener("click", (e) => {
        localStorage.clear();

        localStorage.setItem("dataofthecountry", JSON.stringify(element));
        window.location.href = "./admin.html";
      });
    } else {
      console.log("not found");
    }
  });
}
let box = document.querySelector(".box");
function throwingToPage(data) {
  flagsimg.addEventListener("click", (e) => {
    data.filter((element) => {
      if (element.flags.png == e.target.src) {
        localStorage.setItem("dataofthecountry", JSON.stringify(element));
      }
    });
  });
}
let select = document.getElementById("select");
fetch(`${Base_url}all`)
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element) => {
      let option = document.createElement("option");
      option.textContent = element.flag;

      select.append(option);
    });
  });
let category = document.getElementById("category");

category.addEventListener("click", (e) => {
  if (e.target.id && e.target.id !== "category") {
    fetch(`${Base_url}region/${e.target.id}`)
      .then((data) => data.json())
      .then((data) => {
        flagsimg.innerHTML = "";
        gettingdata(data);
      });
  }
});
