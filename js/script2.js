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

const renderProducts = async (page=1) => {
    const products = await getproducts2();
    const productContainer = document.querySelector(".container");
    const pagenation= document.getElementById("pagination")

    if (!productContainer || !products) return;

    productContainer.innerHTML = "";
    pagenation.innerHTML="";
    
    const productsPerPage = 10;
    const start=(page-1)*productsPerPage;
    const end=start+productsPerPage;
    const paginatedProducts=products.slice(start,end);

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
        <div class="card">
        <section class="section">
            <h3 class="title">${product.title}</h3>
            </section>
            <p class="more-details">${product.description}</p>
            <p>Price: $${product.price}</p>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
    const totalPage=Math.ceil(products.length/productsPerPage);
    for(let i=1;i<=totalPage;i++){
        const pageButton=document.createElement("button");
        pageButton.textContent=i;
        pagenation.classList.add("page-button");
        if(i===page){
            pageButton.classList.add("active");
        }
        pageButton.addEventListener("click",()=>{
            page=i;
            renderProducts();
        });
        pagenation.appendChild(pageButton);
    }
};
renderProducts();
