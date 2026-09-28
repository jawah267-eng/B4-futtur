let currentController = [];

// const getproducts = async () => {
//   try {
//     currentController.forEach((controller) => controller.abort());
//     currentController = [];

//     const response = await fetch("https://dummyjson.com/products");
//     const products = await response.json();
//     console.log("got", products.length, "products");
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };
// getproducts();

const getproducts2 = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      const products = data.products;

      console.log("cart", products);
      console.log("got", products.length, "products");
      return products;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

getproducts2();

const renderProducts = async () => {
    const products = await getproducts2();
    const productContainer = document.getElementById("product-container");

    productContainer.innerHTML = "";

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}
renderProducts();