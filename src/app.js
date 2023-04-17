import Chart from "chart.js/auto";

const getAllProducts = () =>
  fetch("https://dummyjson.com/products").then((res) => res.json());

function compareFn(productA, productB) {
  if (productA.price > productB.price) {
    return -1;
  }
  if (productA.price < productB.price) {
    return 1;
  }

  return 0;
}

getAllProducts().then((response) => {
  // console.log(data);
  const data = response.products.sort(compareFn);
  const productsName = data.map((product) => product.title);
  const productsPrice = data.map((product) => product.price);
  console.log(productsName, productsPrice);

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: productsName,
      datasets: [
        {
          label: "Products in shop",
          data: productsPrice,
        },
      ],
    },
  });
});
