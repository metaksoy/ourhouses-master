const menu = [
  {
    id: 1,
    title: "LUNCH MENU",
    category: "LUNCHMENU",
    price: 186.0 + "₺",
    img: "https://diner.imgix.net/foods/92ff03ca-a3f9-4f86-ac94-7e3277908419.jpeg?auto=compress&q=50",
    desc: `Hafta içi 11:30 - 16:00 saatleri arasında: ''herhangi bir single burger veya hot dog + patates kızartması + soft içecek = 186TL`,
  },
  {
    id: 2,
    title: "POTATO FRIES",
    category: "BAŞLANGIÇLAR",
    price: 46.0 + "₺",
    img: "https://diner.imgix.net/foods/5a7c75bb-6664-40ec-b681-f5c063f13ace.jpeg?auto=compress&h=280",
    desc: `Sade / Baharatlı `,
  },
  {
    id: 3,
    title: "ONION RINGS",
    category: "BAŞLANGIÇLAR",
    price: 46.0 + "₺",
    img: "https://diner.imgix.net/foods/89c9ff27-b10b-4819-a49c-8c67a742edd0.jpeg?auto=compress&q=50",
    desc: `Tempura soğan halkaları, aioli sos ile`,
  },
  {
    id: 4,
    title: "SWEET POTATO FRIES",
    category: "BAŞLANGIÇLAR",
    price: 5.99,
    img: "https://diner.imgix.net/foods/3bc0663d-04ec-448a-a15d-f1dbc1f48220.jpeg?auto=compress&q=50",
    desc: `Türkiye'de ilk! Tatlı patates kızartması`,
  },
  {
    id: 5,
    title: "TATER TOTS",
    category: "BAŞLANGIÇLAR",
    price: 12.99,
    img: "https://diner.imgix.net/foods/683e8ec4-6713-4fa1-8c57-a8f6bb76cbb9.jpeg?auto=compress&q=50",
    desc: `NEW! Jalapeno & cheddar sosla birlikte!`,
  },
  {
    id: 6,
    title: "POUTINE",
    category: "BAŞLANGIÇLAR",
    price: 92.0 + "₺",
    img: "https://diner.imgix.net/foods/7d822a20-75ee-4b31-b59b-891d3a80e711.jpeg?auto=compress&q=50",
    desc: `Gravy soslu patates kızartması! (normal yerine tatlı patates +14₺)`,
  },
  {
    id: 7,
    title: "CHICKEN BURGER",
    category: "BURGERS",
    price: 15.99,
    img: "https://diner.imgix.net/foods/6ae5b462-07ae-4524-8c8a-55b9ccd039f3.jpeg?auto=compress&q=50",
    desc: `60g panelenmiş tavuk göğsü, cheddar peyniri, coleslaw, turşu relish, ev yapımı burger sos (double +56₺)`,
  },
  {
    id: 8,
    title: "BUFFALO CHICKEN BURGER",
    category: "BURGERS",
    price: 12.99,
    img: "https://diner.imgix.net/foods/49d5ac65-79de-4370-82d4-08633ab47f18.jpeg?auto=compress&q=50",
    desc: `
160g panelenmiş tavuk göğsü, cheddar peyniri, buffalo sos, ranch sos, iceberg marul, coleslaw, parmesan zest (double +56₺)`,
  },
  {
    id: 9,
    title: "CHICKEN BURGER BBQ",
    category: "BURGERS",
    price: 3.99,
    img: "https://diner.imgix.net/foods/8603e319-90e9-478c-9e43-ed910ff82165.jpeg?auto=compress&q=50",
    desc: `160g panelenmiş tavuk göğsü, cheddar peyniri, coleslaw, turşu relish, BBQ sos (double +56₺)`,
  },
  {
    id: 9,
    title: "DÖŞ BURGER",
    category: "BURGERS",
    price: 3.99,
    img: "https://b.zmtcdn.com/data/pictures/2/19040652/36f57ac906eb471337bcc275d25f513f.jpg?output-format=webp",
    desc: `Tütsülenerek 12 saatte pişen tiftilmiş 180 gr. dana döş. Dip patates kızartması, coleslaw salata, kızarmış tost ekmeği
    ile`,
  },
  {
    id: 10,
    title: "COCA-COLA®",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/COKE_menu_22_tile_Desktop_1024x557.jpg",
    desc: `​Canınız buz gibi, serinletici bir Coca-Cola'ya zaten can atmıyorduysa bile artık çok geç.​`,
  },
  {
    id: 9,
    title: "FANTA",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/FANTA_menu_22_tile_Desktop_1024x557.jpg",
    desc: `Fanta ister misin? Bu varsayımsaldı. Tabii ki.`,
  },
  {
    id: 9,
    title: "SPRITE",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/SPRITE_menu_22_tile_Desktop_1024x557.jpg",
    desc: `BUUZZZZ GİBİ FERAHLATICI LEZZET`,
  },
  {
    id: 9,
    title: "COCA-COLA ZERO SUGAR® 12OZ",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/COKE-ZERO_menu_22_tile_Desktop_1024x557.jpg",
    desc: `Coca-Cola Sıfır Şeker. Bununla ilgili bilmeniz gereken her şey tam da adında.`,
  },
  {
    id: 9,
    title: "PORTAKAL SUYU",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/MinuteMaidOrange_19_tile_Desktop_1024x557.jpg",
    desc: `Öğle ve akşam yemeği ile çok iyi`,
  },
  {
    id: 9,
    title: "ELMA SUYU",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/MinuteMaidApple_19_tile_Desktop_1024x557.jpg",
    desc: `Günde bir elma… meyve suyunda ve Fries ile birlikte kullanıldığında daha iyidir.​`,
  },
  {
    id: 9,
    title: "ICE VANILLA SHAKE",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/VanillaShake_menu_18_tile_Desktop_1024x557.jpg",
    desc: `İşleri basit tutmayı seviyorsun. Ne sevdiğini ve neden sevdiğini biliyorsun. Burcunuz her gün "Bugün güzel olacak" yazıyor. Bu vanilya sallamak tam size göre.`,
  },
  {
    id: 9,
    title: "ICE CHOCOLATE SHAKE",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/ChocShake_menu_18_tile_Desktop_1024x557.jpg",
    desc: `Zaten bir etli burgerla kendinizi şımarttınız. Neden ikram trenini güzel bir çikolata shake ile devam ettirmiyorsunuz?`,
  },
  {
    id: 9,
    title: "ICE MINT CHOCOLATE SHAKE SMALL",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/AndesMintShake_menu_18_tile_Desktop_1024x557.jpg",
    desc: `Üzerine çırpılmış krema, damla çikolata ve Andes Nane parçaları eklenmiş kremsi naneli çikolata shake.`,
  },
  {
    id: 9,
    title: "ICE MOCHA SHAKE",
    category: "İÇECEKLER",
    price: 3.99,
    img: "https://cds.arbys.ca/assets/product_item/JamocaShake_menu_18_tile_Desktop_1024x557.jpg",
    desc: `Çikolata ve kahve tatları bir araya getirildi. Ve insanlık milkshake ile tanıştı.`,
  },
];

const section = document.querySelector(".section");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["MENU"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "MENU") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
