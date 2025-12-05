// MENU DATA
const menu = [
  // STARTER
  {
    name: "Avocado Toast",
    price: "90K",
    img: "https://sinisajaubud.github.io/menu/asset/img/AVOCADO-TOAST.jpg",
    category: "starter",
    desc: "Sourdough toast with guacamole, parmesan, poached eggs, watercress, cherry tomato, dukkah."
  },
  {
    name: "Atlantic",
    price: "120K",
    img: "https://sinisajaubud.github.io/menu/asset/img/ATLANTIC.jpg",
    category: "starter",
    desc: "Smoked salmon, smashed avocado, dill-lemon cream cheese, pickled cucumber, capers, sourdough"
  },
  {
    name: "Morning Bliss",
    price: "100K",
    img: "https://sinisajaubud.github.io/menu/asset/img/MORNING-BLISS.jpg",
    category: "starter",
    desc: "Two eggs any style, roasted mushroom, streaky bacon, confit cherry tomato, hash brown, sausage, caramelized onion."
  },
  {
    name: "Scrambled Favo",
    price: "110K",
    img: "https://sinisajaubud.github.io/menu/asset/img/SCRAMBLED-FAVO.jpg",
    category: "starter",
    desc: "Soft scrambled eggs, streaky bacon, mushroom hollandaise, butter croissant, mixed salad."
  },
  {
    name: "Turkish Egg",
    price: "85K",
    img: "https://sinisajaubud.github.io/menu/asset/img/TURKISH-EGG.jpg",
    category: "starter",
    desc: "Poached egg, dill yoghurt sauce, aleppo butter, parsley, jalapeno oil, sourdough."
  },

  // MAIN COURSE
  {
    name: "Chicken Teriyaki Bowl",
    price: "65K",
    img: "https://source.unsplash.com/600x400/?chicken-teriyaki",
    category: "main",
    desc: "Japanese-style glazed chicken served with rice and vegetables."
  },
  {
    name: "Beef Steak",
    price: "120K",
    img: "https://source.unsplash.com/600x400/?beef-steak",
    category: "main",
    desc: "Juicy grilled beef steak cooked to perfection."
  },
  {
    name: "Pasta Alfredo",
    price: "70K",
    img: "https://source.unsplash.com/600x400/?pasta-alfredo",
    category: "main",
    desc: "Creamy Alfredo pasta with parmesan cheese."
  },

  // DESSERT
  {
    name: "Chocolate Lava Cake",
    price: "45K",
    img: "https://source.unsplash.com/600x400/?chocolate-lava-cake",
    category: "dessert",
    desc: "Warm chocolate cake with melting center."
  },
  {
    name: "Strawberry Cheesecake",
    price: "50K",
    img: "https://source.unsplash.com/600x400/?strawberry-cheesecake",
    category: "dessert",
    desc: "Soft and creamy cheesecake topped with strawberry sauce."
  },
  {
    name: "Ice Cream Sundae",
    price: "30K",
    img: "https://source.unsplash.com/600x400/?ice-cream-sundae",
    category: "dessert",
    desc: "Classic sundae with mixed toppings and vanilla ice cream."
  }
];

// DOM TARGETS
const starterList = document.getElementById("starterList");
const mainList = document.getElementById("mainList");
const dessertList = document.getElementById("dessertList");

const starterSection = document.getElementById("starterSection");
const mainSection = document.getElementById("mainSection");
const dessertSection = document.getElementById("dessertSection");
const searchInput = document.getElementById("searchInput");

// RENDER MENU
function renderMenu(filter = "") {
  const keyword = filter.toLowerCase().trim();

  starterList.innerHTML = "";
  mainList.innerHTML = "";
  dessertList.innerHTML = "";

  let starterFound = false;
  let mainFound = false;
  let dessertFound = false;

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

      if (item.category === "starter") { starterList.innerHTML += card; starterFound = true; }
      if (item.category === "main") { mainList.innerHTML += card; mainFound = true; }
      if (item.category === "dessert") { dessertList.innerHTML += card; dessertFound = true; }
    }
  });

  starterSection.style.display = starterFound ? "block" : "none";
  mainSection.style.display = mainFound ? "block" : "none";
  dessertSection.style.display = dessertFound ? "block" : "none";
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
