const products = [
  {
    id: 1,
    image: './assets/product1.svg',
    title: 'Blue and Coral Mood',
    description: 'Paper poster',
  },
  {
    id: 2,
    image: './assets/product2.svg',
    title: 'Blue and Coral Mood',
    description: 'Paper poster',
  },
  {
    id: 3,
    image: './assets/product3.svg',
    title: 'Blue and Coral Mood',
    description: 'Paper poster',
  },
  {
    id: 4,
    image: './assets/product4.svg',
    title: 'Blue and Coral Mood',
    description: 'Paper poster',
  },
  {
    id: 4,
    image: './assets/product3.svg',
    title: 'Blue and Coral Mood',
    description: 'Paper poster',
  },
  {
    id: 4,
    image: './assets/product1.svg',
    title: 'Blue and Coral Mood',
    description: 'Paper poster',
  },
];

const productContainer = document.querySelector('.product-container');
const productSection = document.getElementById('product-section');
const emptySection = document.getElementById('empty-section');

if (products.length === 0) {
  productSection.classList.add('hidden');
  emptySection.classList.remove('hidden');
  emptySection.classList.add('block');
} else {
  productSection.classList.remove('hidden');
  emptySection.classList.add('hidden');

  products.forEach(product => {
    const productCard = `
  <div class="w-full flex justify-center items-center">
    <div class="w-full productCardShadow max-w-[300px] flex flex-col gap-3 bg-white-1 p-4 rounded-[10px]">
      <div class="w-full relative">
        <img src="${product.image}" class="w-full rounded-[10px] h-[175px] object-fill" alt="${product.title}" />
        <img src="./assets/dots.svg" class="w-[40px] absolute top-3 right-4 cursor-pointer h-[40px]" alt="dots" />
      </div>
      <p class="text-base font-semibold text-black-1">${product.title}</p>
      <p class="text-[12px] font-normal text-black-1">${product.description}</p>
      <button class="w-full h-[40px] hover:opacity-80 bg-[#272727] text-white-1 text-[14px] font-semibold rounded-[10px]">Place an order</button>
      <button class="w-full h-[40px] hover:opacity-80 bg-[#8F92A11A] text-black-2 text-[14px] font-semibold rounded-[10px]">Place an order</button>
    </div>
  </div>
`;

    productContainer.innerHTML += productCard;
  });
}
