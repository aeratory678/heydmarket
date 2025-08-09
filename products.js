const products = [
  {
    name: "Dell Latitude 14\" Laptop Core i5 4.2GHz 16GB RAM 512GB SSD",
    description: "eBay Refurbished certified, like new, backed by a one year warranty",
    price: 1595,
    regions: "US",
    image: "💻"
  },
  {
    name: "ULTRAKILL",
    description: "MANKIND IS DEAD. BLOOD IS FUEL. HELL IS FULL.",
    price: 150,
    regions: "ALL",
    image: "🤖"
  },
  {
    name: "Steam Deck 512GB OLED",
    description: "At least its cheaper than the switch 2!",
    price: 2950,
    oldPrice: 3540,
    regions: "US, EU, CA, AU",
    image: "🎮"
  },
  {
    name: "Catears (2 pack)",
    description: "Yes I use Arch Linux how did you know?",
    price: 55,
    regions: "US, EU, IN, CA, AU",
    image: "🐱"
  },
  {
    name: "Thigh Highs (2 pack)",
    description: "Guys after studying comp sci:",
    price: 55,
    regions: "US, EU, IN, CA, AU",
    image: "🧦"
  },
  {
    name: "Crucial Pro 32GB DDR5 RAM Kit (2x16GB)",
    description: "6000MHz, Intel XMP 3.0 and AMD EXPO also supported on the same RAM module",
    price: 425,
    regions: "US, EU, CA, AU",
    image: "🧠"
  },
  {
    name: "AMD Ryzen 7 7700X 8C 16T",
    description: "this chip does not go with the salsa!",
    price: 1225,
    regions: "US, EU, CA, AU",
    image: "🟧"
  },
  {
    name: "NVIDIA H100 Tensor Core GPU",
    description: "How the fuck would you even get this",
    price: 9999,
    regions: "ALL",
    image: "🟩"
  },
  {
    name: "1cm Tungsten Cube",
    description: "cube friend :D",
    price: 200,
    regions: "US",
    image: "🧊"
  },
  {
    name: "Crucial P310 1TB SSD",
    description: "*slaps hood* this thing can fit so many cat pics",
    price: 440,
    regions: "US, EU, IN, CA, AU",
    image: "💾"
  }
];

function renderProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  products.forEach(product => {
    const orderGrid = document.createElement('div');
    orderGrid.className = 'order-grid';
    orderGrid.innerHTML = `
      <div class="product-image" style="font-size: 64px; text-align: center;">${product.image}</div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="price-box">
          <div class="price-row">
            <span>PRICE:</span>
            <span id="item-price">
              ${product.oldPrice ? `<del><img src='shell.png' alt='shell icon' class='shell-icon' style='width:18px;height:18px;'> ${product.oldPrice}</del> <span style='color: #08e54c; font-weight: bold;'><img src='shell.png' alt='shell icon' class='shell-icon' style='width:18px;height:18px;'> ${product.price}</span>` : `<img src='shell.png' alt='shell icon' class='shell-icon' style='width:18px;height:18px;'> ${product.price}`}
            </span>
          </div>
          <div class="price-row">
            <span>QUANTITY:</span>
            <span id="quantity-display">1</span>
          </div>
          <div class="price-row">
            <span>TOTAL:</span>
            <span id="total-cost-container">
              <img src='shell.png' alt='shell icon' class='shell-icon' style='width:18px;height:18px;'> ${product.price}
            </span>
          </div>
        </div>
        <div class="balance-box">
          <div class="price-row">
            <span>YOUR BALANCE:</span>
            <span><img src='shell.png' alt='shell icon' class='shell-icon' style='width:18px;height:18px;'> 150</span>
          </div>
        </div>
        <div id="insufficient-funds-warning" class="hidden warning-box">
          <blink>!!! NOT ENOUGH SHELLS !!!</blink><br>
          Need <span id="shortage-amount">0</span> more shells!
        </div>
        <form class="order-form">
          <div class="form-row">
            <label class="form-label" for="quantity">QUANTITY:</label>
            <input class="quantity-input" type="number" name="quantity" id="quantity" value="1" min="1" max="10">
          </div>
          <div class="form-row">
            <label class="form-label" for="address">SHIPPING ADDRESS:</label>
            <select class="address-select" name="address" id="address">
              <option value="1">123 Main St</option>
              <option value="2">456 Side Ave</option>
            </select>
          </div>
          <div class="form-row">
            <b>Regions:</b> ${product.regions}
          </div>
          <input type="submit" id="purchase-button" class="submit-btn" value="!!! GET IT NOW !!!">
        </form>
      </div>
    `;
    grid.appendChild(orderGrid);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Prevent scrolling while loader is visible
  document.body.classList.add('no_scroll');

  // Loader fade-out logic (5s + random)
  setTimeout(function() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.classList.add('fade-out');
    }
    document.body.classList.remove('no_scroll');
  }, 5000 + Math.random()*3989);

  renderProducts();
});
