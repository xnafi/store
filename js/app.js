let Data;
fetch('../data.json')
  .then(res => res.json())
  .then(data => {
    Data = data
    getData(data)
  })

function getData(data) {
  console.log(data);
  const parentDiv = document.getElementById('drawer-parent');
  data.forEach(element => {
    const { name, id, price, img } = element;
    const div = document.createElement('div')
    div.classList.add('card', 'bg-base-100', 'shadow-2xl', 'p-4')
    div.innerHTML = `
        <figure class="">
      <img
        src="${img}"
        alt="Shoes"
        class="rounded-lg w-full h-[300px]"
      />
    </figure>
    <div class="mt-[20px]">
      <div class="flex justify-between">
        <h2 class="card-title">${name}</h2>
        <div class="flex text-lg">
          <span class="mr-4"
            ><i class="fa-solid fa-heart text-slate-500"></i
          ></span>
          <span
            ><i class="fa-solid fa-square-minus text-red-700"></i
          ></span>
        </div>
      </div>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <h3 class="card-title">Price: ${price}</h3>
      <div class="mt-2 flex justify-between">
        <label
        onclick="handleModal('${id}')"
          for="my-modal-3"
          class="btn btn-outline btn-primary w-[45%] mx-auto flex justify-center items-center"
        >
          <i class="fa-solid fa-circle-info mr-2"></i> See Details
        </label>
        <button
        onclick="handleBuy('${id}')"
          class="btn btn-outline btn-secondary w-[45%] mx-auto block"
        >
          <i class="fa-solid fa-bag-shopping mr-2"></i>Buy Now
        </button>
      </div>
  </div>
                       
        `
    parentDiv.appendChild(div)
  });
}

function handleModal(id) {
  console.log(Data);
  const product = Data.find((data) => data.id === id)
  const { price, name, img } = product
  const parentDiv = document.getElementById('modal-parent')
  const div = document.createElement('div');
  div.classList.add('modal-box', 'relative')
  div.innerHTML = `
    <label
      for="my-modal-3"
      class="btn btn-sm btn-circle absolute right-2 top-2"
      >✕</label
    >
    <div class="py-4 flex flex-col gap-3">
      <img
        src="${img}"
        alt=""
        class="w-full h-[300px] rounded-xl"
      />
      <h1 class="text-2xl font-bold">
        <span class="text-violet-600">Product:</span> ${name}
      </h1>
      <p class="text-lg text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        quis quae atque deserunt amet eius reiciendis ducimus,
        quisquam eum. Beatae laudantium ipsam perspiciatis debitis
        inventore excepturi quis voluptate, praesentium omnis.
      </p>
      <h1 class="text-2xl font-bold text-violet-600">Features:</h1>
      <p class="text-gray-700 text-lg">
        Feature1,Feature2,Feature3,Feature4
      </p>
      <h1 class="text-2xl font-bold">
        <span class="text-violet-600">Price : </span> $${price}
      </h1>
    </div>
                         
    `
  parentDiv.appendChild(div)

}
let count = 0;
let Price = 0;
let Tax = 0;
let total = 0;
function handleBuy(id) {
  let product = Data.find(data => data.id === id)
  const { name, img, price } = product;
  const parentDiv = document.getElementById('cart-parent')
  const div = document.createElement('div')
  div.classList.add('border-[2px]', 'bg-gray-200', 'border-red-400', 'rounded-lg', 'px-2', 'flex', 'justify-between', 'items-center', 'flex-row')
  div.innerHTML = `
    <img
      src="${img}"
      alt=""
      class="w-[15%] rounded-lg py-2"
    />
    <p>"${name}"</p>
    <p class="border-[2px] rounded-lg px-[10px] py-[2px]">1</p>
    <i class="fa-sharp fa-solid text-red-500 fa-trash text-xl" onclick="deleteItem('${id}')"></i>
    `
  parentDiv.appendChild(div)

  const cartCountNav = document.getElementById('cart-count-nav')
  const newCount = cartCountNav.innerText = count += 1
  const productCount = document.getElementById('product-count').innerText = newCount;
  const productPrice = document.getElementById('product-price').innerText = Price += price;
  const productTax = document.getElementById('product-tax').innerText = (productPrice * 10 / 100 + Tax).toFixed(2)
  const productTotal = document.getElementById('product-total').innerText = (productPrice + parseInt(productTax))

}

document.getElementById('clear-all').addEventListener('click', function () {
  const parentDiv = document.getElementById('cart-parent').innerHTML = '';
  document.getElementById('product-count').innerText = 0;
  document.getElementById('cart-count-nav').innerText = 0;
  document.getElementById('product-price').innerText = 0;
  document.getElementById('product-tax').innerText = 0;
  document.getElementById('product-total').innerText = 0;
})

const deleteItem = (id) => {
  // const item = Data.find(item => item.id !== id)
  // console.log(item);
  let item = Product.filter(pro => pro.id !== id)



}