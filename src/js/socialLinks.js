document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  const socialLinks = {
    "btn-1": "https://t.me/s45DK",
    "btn-2": "https://www.instagram.com/s45dashok/",
    "btn-3": "https://github.com/Darya-Karnaukh",
    "btn-4": "https://linkedin.com/in/darya-karnaukh-frontend-developer",
  };

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const btnClass = this.classList[1];
      const url = socialLinks[btnClass];

      if (url) {
        window.open(url, "_blank");
      } else {
        console.error("Посилання не знайдено для", btnClass);
      }
    });
  });
});
