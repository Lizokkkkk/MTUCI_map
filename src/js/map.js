const links = document.querySelectorAll(".menu li"),
      mapLinks = document.querySelectorAll(".g");

const requestData = (id) => {
    fetch('../data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        location.href=`building.html?info=${data[id - 1].district}`;
    })
};

links.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("class");

    links.forEach((el) => {
      if (el.getAttribute("class") != selfClass) {
        el.style.background = "transparent";
        el.querySelector("a").style.color = "#EDEDED";
      }
    });

    mapLinks.forEach((el) => {
        if (el.getAttribute("id") != selfClass) {
            // el.style.display = "none";
            // el.style.filter = "url(#filter0_d_77_155)";
            // el.style.-webkit-filter = "grayscale(100%)";
            el.style.filter = "grayscale(100%)";
        }
    });
  });

  item.addEventListener("mouseleave", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("class");

    links.forEach((el) => {
      el.style.background = "";
      el.style.tr
      el.querySelector("a").style.color = "";
    });

    mapLinks.forEach((el) => {
        if (el.getAttribute("id") != selfClass) {
            el.style.filter = "";
        }
    });
  });

  item.addEventListener('click', (e) => {
    e.preventDefault();
    let self = e.currentTarget;
    let id = parseInt(self.dataset.id);
    requestData(id);
  })
});

mapLinks.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      let self = e.currentTarget;
      let selfClass = self.getAttribute("id");
  
      links.forEach((el) => {
        if (el.getAttribute("class") != selfClass) {
          el.style.background = "transparent";
          el.querySelector("a").style.color = "#EDEDED";
        }
      });
  
      mapLinks.forEach((el) => {
          if (el.getAttribute("id") != selfClass) {
            el.style.filter = "grayscale(100%)";
          }
      });
    });
  
    item.addEventListener("mouseleave", (e) => {
      let self = e.currentTarget;
      let selfClass = self.getAttribute("id");
  
      links.forEach((el) => {
        el.style.background = "";
        el.style.tr
        el.querySelector("a").style.color = "";
      });
  
      mapLinks.forEach((el) => {
          if (el.getAttribute("id") != selfClass) {
            el.style.filter = "";
          }
      });
    });

    item.addEventListener('click', (e) => {
        e.preventDefault();
        let self = e.currentTarget;
        let id = parseInt(self.dataset.id);
        requestData(id);
    });
});
