// navBar Toggle Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
console.log(navLinks);
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

let count = 0;

function selectSets(elementId) {
  const element = document.getElementById(elementId);

  // selected seat counter element
  const updateSeat = document.getElementById("selectedSets");

  // if already selected
  if (element.classList.contains("background-green")) {
    element.classList.remove("background-green");
    count--;

    // update UI
    updateSeat.innerText = count;

    return;
  }

  // maximum 4 seats
  if (count >= 4) {
    alert("You can only select 4 seats");
    return;
  }

  // select seat
  changeBgById(elementId);

  count++;

  // update UI
  updateSeat.innerText = count;
}
