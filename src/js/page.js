const info = document.querySelector("#info");

const header = new URL(document.location).searchParams;

if (header.get("info") !== "404") {
  info.innerHTML += `${header.get("info")}`;
} else if (header.get("info") === "404") {
  info.innerHTML = "Ошибка 404! Данной страницы не существует";
}

const openPopUp = document.getElementById("open_pop_up"),
  search = document.getElementById("pop_up_body"),
  div = document.getElementById("pop_up_container"),
  popUp = document.getElementById("pop_up"),
  input = document.getElementById("pop_up_input"),
  searchBtn = document.getElementById("pop_up_btn");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});

div.addEventListener("click", (e) => {
  const closePopUp = e.composedPath().includes(search);

  if (!closePopUp) {
    popUp.classList.remove("active");
    input.value = "";
    searchBtn.classList.remove("active");
  }
});

input.addEventListener("input", () => {
  if (input.value != "") {
    searchBtn.classList.add("active");
  } else {
    searchBtn.classList.remove("active");
  }
});

const building = [],
  buildingName = [],
  searchMenu = document.querySelector(".pop_up_menu");

fetch("../data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((line) => {
      building.push(line);
      buildingName.push(line.district);
    });
  });

function getMenu(word, building) {
  return building.filter((b) => {
    const regex = new RegExp(word, "gi");
    return b.district.match(regex);
  });
}

function displayMenu() {
  searchMenu.innerHTML = "";
  const menu = getMenu(this.value, building);
  const html = menu.map((building) => {
    return [building.class, building.district];
  });
  html.forEach((item) => {
    const [nameClass, name] = item;
    const popUpMenu = document.createElement("li");
    popUpMenu.className = nameClass;
    popUpMenu.innerHTML = name;
    searchMenu.append(popUpMenu);
  });

  const popUpMenu = document.querySelectorAll(".pop_up_menu li");
  popUpMenu.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      let self = e.currentTarget;
      let selfClass = self.getAttribute("class");

      popUpMenu.forEach((el) => {
        if (el.getAttribute("class") != selfClass) {
          el.style.background = "#D9D9D9";
        }
      });
    });

    item.addEventListener("mouseleave", () => {
      popUpMenu.forEach((el) => {
        el.style.background = "";
      });
    });

    item.addEventListener("click", (e) => {
      let self = e.currentTarget;
      input.value = self.textContent;
      searchMenu.innerHTML = "";
    });
  });

  if (input.value === "") {
    searchMenu.innerHTML = "";
  }
}

input.addEventListener("input", displayMenu);

function sendInput() {
  if (buildingName.includes(input.value)) {
    location.href = `http://127.0.0.1:5501/src/html/building.html?info=${input.value}`;
  } else {
    location.href = `http://127.0.0.1:5501/src/html/building.html?info=404`;
  }
}

searchBtn.addEventListener("click", sendInput);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});