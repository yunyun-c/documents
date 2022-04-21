const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    upDateGuestCount();
    clearInput();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const upDateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "Chinese Chicken Salad Spring Rolls",
    "3-Bean Israeli Couscous Salad",
    "Pasta Salad with Smoked Gouda, Roasted Red Peppers & Artichoke Hearts",
    "Kiwi-Jalapeño Salsa",
    "Seasonal Fruit Chaat",
    "Pineapple Salsa",
    "Veggie Nori Rolls",
    "Pummelo, Fennel, and Radish Salad",
    "Napa Cabbage & Kale Coleslaw with Creamy Miso-Ginger Dressing",
    "Lemon Cream Icebox Cake",
    "Muffin-Tin Ice Cream Cakes",
    "No-Bake Cream Cheese Pie with Summer Fruit",
    "Peanut Butter Chocolate Energy Bars"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
