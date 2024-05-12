// accordion script
(function () {
    "use strict";
  
    const accordions = document.querySelectorAll("[data-accordion]");
    console.log("here");
    console.log(accordions);
    accordions.forEach((header) => {
      header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle("active");
      });
    });
  })();