const links = document.querySelectorAll(".menu li"),
  mapLinks = document.querySelectorAll(".g");

const requestData = (id) => {
  fetch("../data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      location.href = `html/building.html?info=${data[id - 1].district}`;
    });
};

links.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("class");

    links.forEach((el) => {
      if (el.getAttribute("class") != selfClass) {
        el.style.background = "transparent";
        el.style.color = "#EDEDED";
      }
    });

    mapLinks.forEach((el) => {
      if (el.getAttribute("id") != selfClass) {
        el.style.filter = "grayscale(100%)";
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    links.forEach((el) => {
      el.style.background = "";
      el.style.color = "";
    });

    mapLinks.forEach((el) => {
      el.style.filter = "";
    });
  });

  item.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let id = parseInt(self.dataset.id);
    requestData(id);
  });
});

mapLinks.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("id");

    links.forEach((el) => {
      if (el.getAttribute("class") != selfClass) {
        el.style.background = "transparent";
        el.style.color = "#EDEDED";
      }
    });

    mapLinks.forEach((el) => {
      if (el.getAttribute("id") != selfClass) {
        el.style.filter = "grayscale(100%)";
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    links.forEach((el) => {
      el.style.background = "";
      el.style.color = "";
    });

    mapLinks.forEach((el) => {
      el.style.filter = "";
    });
  });

  item.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let id = parseInt(self.dataset.id);
    requestData(id);
  });
});
