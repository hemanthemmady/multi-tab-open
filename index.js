const theForm = document.querySelector("#form");
const theLinks = document.querySelector("#links");

theForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const linkArr = theLinks.value.split("\n");
  linkArr.forEach((element) => {
    window.open(element, "_blank");
  });
});
