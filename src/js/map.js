const links = document.querySelectorAll(".menu li"),
      mapLinks = document.querySelectorAll(".map g");

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
            el.style.display = "none";
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
            el.style.display = "";
        }
    });

  });
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
              el.style.display = "none";
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
              el.style.display = "";
          }
      });
  
    });
  });