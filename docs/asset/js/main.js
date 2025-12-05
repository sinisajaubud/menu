// MENU DATA
const menu = [
  // BREAKFAST
  {
    name: "Avocado Toast",
    price: "90K",
    img: "https://sinisajaubud.github.io/menu/asset/img/AVOCADO-TOAST.jpg",
    category: "breakfast",
    desc: "Sourdough toast with guacamole, parmesan, poached eggs, watercress, cherry tomato, dukkah."
  },
  {
    name: "Atlantic",
    price: "120K",
    img: "https://sinisajaubud.github.io/menu/asset/img/ATLANTIC.jpg",
    category: "breakfast",
    desc: "Smoked salmon, smashed avocado, dill-lemon cream cheese, pickled cucumber, capers, sourdough"
  },
  {
    name: "Morning Bliss",
    price: "100K",
    img: "https://sinisajaubud.github.io/menu/asset/img/MORNING-BLISS.jpg",
    category: "breakfast",
    desc: "Two eggs any style, roasted mushroom, streaky bacon, confit cherry tomato, hash brown, sausage, caramelized onion."
  },
  {
    name: "Scrambled Favo",
    price: "110K",
    img: "https://sinisajaubud.github.io/menu/asset/img/SCRAMBLED-FAVO.jpg",
    category: "breakfast",
    desc: "Soft scrambled eggs, streaky bacon, mushroom hollandaise, butter croissant, mixed salad."
  },
  {
    name: "Turkish Egg",
    price: "85K",
    img: "https://sinisajaubud.github.io/menu/asset/img/TURKISH-EGG.jpg",
    category: "breakfast",
    desc: "Poached egg, dill yoghurt sauce, aleppo butter, parsley, jalapeno oil, sourdough."
  },
  {
    name: "Chili Crab Meat Scramble",
    price: "95K",
    img: "https://sinisajaubud.github.io/menu/asset/img/CHILI-CRAB.jpg",
    category: "breakfast",
    desc: "Poached egg, dill yoghurt sauce, aleppo butter, parsley, jalapeno oil, sourdough."
  },

  // LUNCH
  {
    name: "Chicken Teriyaki Bowl",
    price: "65K",
    img: "https://source.unsplash.com/600x400/?chicken-teriyaki",
    category: "lunch",
    desc: "Japanese-style glazed chicken served with rice and vegetables."
  },
  {
    name: "Beef Steak",
    price: "120K",
    img: "https://source.unsplash.com/600x400/?beef-steak",
    category: "lunch",
    desc: "Juicy grilled beef steak cooked to perfection."
  },
  {
    name: "Pasta Alfredo",
    price: "70K",
    img: "https://source.unsplash.com/600x400/?pasta-alfredo",
    category: "lunch",
    desc: "Creamy Alfredo pasta with parmesan cheese."
  },

  // DINNER
  {
    name: "Chocolate Lava Cake",
    price: "45K",
    img: "https://source.unsplash.com/600x400/?chocolate-lava-cake",
    category: "dinner",
    desc: "Warm chocolate cake with melting center."
  },
  {
    name: "Strawberry Cheesecake",
    price: "50K",
    img: "https://source.unsplash.com/600x400/?strawberry-cheesecake",
    category: "dinner",
    desc: "Soft and creamy cheesecake topped with strawberry sauce."
  },
  {
    name: "Ice Cream Sundae",
    price: "30K",
    img: "https://source.unsplash.com/600x400/?ice-cream-sundae",
    category: "dinner",
    desc: "Classic sundae with mixed toppings and vanilla ice cream."
  }
];

// DOM TARGETS — ALL UPDATED
const breakfastList = document.getElementById("breakfastList");
const lunchList = document.getElementById("lunchList");
const dinnerList = document.getElementById("dinnerList");

const breakfastSection = document.getElementById("breakfastSection");
const lunchSection = document.getElementById("lunchSection");
const dinnerSection = document.getElementById("dinnerSection");

const searchInput = document.getElementById("searchInput");

// RENDER MENU
function renderMenu(filter = "") {
  const keyword = filter.toLowerCase().trim();

  breakfastList.innerHTML = "";
  lunchList.innerHTML = "";
  dinnerList.innerHTML = "";

  let breakfastFound = false;
  let lunchFound = false;
  let dinnerFound = false;

  menu.forEach(item => {
    const nameMatch = item.name.toLowerCase().includes(keyword);
    const categoryMatch = item.category.toLowerCase().includes(keyword);

    if (keyword === "" || nameMatch || categoryMatch) {
      const safeName = encodeURIComponent(item.name);

      const card = `
        <div class="col-md-4 menu-item">
          <div class="card menu-card p-2" onclick="openMenuModal('${safeName}')">
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="price">${item.price}</p>
            </div>
          </div>
        </div>
      `;

      if (item.category === "breakfast") { breakfastList.innerHTML += card; breakfastFound = true; }
      if (item.category === "lunch") { lunchList.innerHTML += card; lunchFound = true; }
      if (item.category === "dinner") { dinnerList.innerHTML += card; dinnerFound = true; }
    }
  });

  breakfastSection.style.display = breakfastFound ? "block" : "none";
  lunchSection.style.display = lunchFound ? "block" : "none";
  dinnerSection.style.display = dinnerFound ? "block" : "none";
}

// POPUP FUNCTION
function openMenuModal(encodedName) {
  const name = decodeURIComponent(encodedName);
  const item = menu.find(m => m.name === name);
  if (!item) return;

  document.getElementById("modalTitle").innerText = item.name;
  document.getElementById("modalImg").src = item.img;
  document.getElementById("modalDesc").innerText = item.desc;
  document.getElementById("modalPrice").innerText = item.price;

  document.getElementById("orderBtn").href =
    "https://r.grab.com/g/2-1-6-C7DARPTEEBBEPE";

  const modal = new bootstrap.Modal(document.getElementById("menuModal"));
  modal.show();
}

// INITIAL LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderMenu(searchInput.value);
    });
  }
});
