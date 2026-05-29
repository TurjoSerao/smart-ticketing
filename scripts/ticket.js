// navBar Toggle Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
console.log(navLinks);
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

let couponUsed = false;
let count = 0;
let seatPrice = 550;
let remainingSeat = 40;

function selectSets(elementId) {
  const element = document.getElementById(elementId);

  const updateSeat = document.getElementById("selectedSets");

  const remainingSeatElement = document.getElementById("remainingSeats");

  const totalPriceElement = document.getElementById("totalPrice");

  const selectedSeatContainer = document.getElementById(
    "selectedSeatContainer",
  );

  // already selected
  if (element.classList.contains("background-green")) {
    element.classList.remove("background-green");

    count--;
    remainingSeat++;

    updateSeat.innerText = count;
    remainingSeatElement.innerText = remainingSeat;

    // remove seat row
    const removeSeat = document.getElementById(elementId + "-seat");

    removeSeat.remove();

    // update price
    totalPriceElement.innerText = count * seatPrice;
    document.getElementById("grandTotal").innerText = count * seatPrice;
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
  remainingSeat--;

  updateSeat.innerText = count;
  remainingSeatElement.innerText = remainingSeat;

  // add selected seat info
  const div = document.createElement("div");

  div.id = elementId + "-seat";

  div.style.display = "flex";
  div.style.justifyContent = "space-between";
  div.style.padding = "10px 0";

  div.innerHTML = `
      <span>${elementId.toUpperCase()}</span>
      <span>Economy</span>
      <span>${seatPrice}</span>
  `;

  selectedSeatContainer.appendChild(div);

  // total price
  totalPriceElement.innerText = count * seatPrice;
  document.getElementById("grandTotal").innerText = count * seatPrice;
}

// coupon function

function applyCoupon() {
  // already used
  if (couponUsed) {
    alert("Coupon already used");
    return;
  }

  const couponInput = document.getElementById("couponInput");

  const couponCode = couponInput.value.trim();

  const totalPrice = count * seatPrice;

  const grandTotalElement = document.getElementById("grandTotal");

  let discount = 0;

  // coupon conditions
  if (couponCode === "NEW15") {
    discount = totalPrice * 0.15;
  } else if (couponCode === "Couple20") {
    discount = totalPrice * 0.2;
  } else {
    alert("Invalid Coupon");
    return;
  }

  // final price
  const finalPrice = totalPrice - discount;

  grandTotalElement.innerText = finalPrice;

  couponUsed = true;

  // disable button
  document.getElementById("applyBtn").disabled = true;

  alert("Coupon Applied Successfully");
}

function openModal() {
  // optional validation
  if (count === 0) {
    alert("Please select at least one seat");
    return;
  }

  document.getElementById("bookingModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}
