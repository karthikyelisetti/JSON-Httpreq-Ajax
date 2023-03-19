var table = "";
var countryArr = [];


const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

function getCountryDetails() {
  var country = document.getElementById("search-text").value.toUpperCase();
  var main = document.getElementById("table-body");
  var isValid = false;
  if (countryArr.includes(country)) {
    alert(`Country ${country} is already available in the list`, "warning");
  } else {
    fetch(`https://sheet2api.com/v1/01BZJx8PTlSz/countries_by-population_2019`)
      .then((res) => res.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].name.toUpperCase() == country) {
            isValid = true;
            countryArr.push(data[i].name.toUpperCase());
            table +=
              "<tr>" +
              "<td>" +
              data[i].Rank +
              "</td>" +
              "<td>" +
              data[i].name +
              "</td>" +
              "<td>" +
              data[i].population +
              "</td>" +
              "<td>" +
              data[i].GrowthRate +
              "</td>" +
              "<td>" +
              data[i].area +
              "</td>" +
              "</tr>";
            break;
          }
        }

        if (isValid) {
          main.innerHTML = table;
        } else {
          alert(`Entered value is not available in the Countries API list`, "warning");
        }
      });
  }
}
