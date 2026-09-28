// 		// const products = [



// 		// 	{ id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics", inStock: true },
// 		// 	{ id: 2, name: "Canvas Backpack", price: 64.5, category: "Accessories", inStock: true },
// 		// 	{ id: 3, name: "Ceramic Coffee Mug", price: 18, category: "Home", inStock: false },
// 		// 	{ id: 4, name: "Running Shoes", price: 129.95, category: "Footwear", inStock: true },
// 		// 	{ id: 5, name: "Desk Lamp", price: 42, category: "Home", inStock: false }
// 		// ];

// 		// const cart = [];
// 		// const catalog = document.querySelector("#catalog");
// 		// const cartCount = document.querySelector("#cartCount");

// 		// for (const product of products) {
// 		// 	const stockLabel = product.inStock ? "In Stock" : "Out of Stock";
// 		// 	const stockClass = product.inStock ? "in-stock" : "out-of-stock";
// 		// 	const disabledAttribute = product.inStock ? "" : "disabled";

// 		// 	const cardHTML = `
// 		// 		<article class="product-card">
// 		// 			<h2>${product.name}</h2>
// 		// 			<p class="price">$${product.price.toFixed(2)}</p>
// 		// 			<p class="category">${product.category}</p>
// 		// 			<span class="stock-badge ${stockClass}">${stockLabel}</span>
// 		// 			<button type="button" class="add-to-cart" data-product-id="${product.id}" ${disabledAttribute}>Add to Cart</button>
// 		// 		</article>
// 		// 	`;

// 		// 	catalog.insertAdjacentHTML("beforeend", cardHTML);
// 		// }

// 		// catalog.addEventListener("click", (event) => {
// 		// 	if (!event.target.matches(".add-to-cart")) return;

// 		// 	const product = products.find((item) => item.id === Number(event.target.dataset.productId));
// 		// 	if (!product || !product.inStock) return;

// 		// 	cart.push(product);
// 		// 	cartCount.textContent = cart.length;
// 		// });

// //     let questions = [
// //         { question: "What is the capital of France?", choices: ["London", "Berlin", "Paris", "Madrid"], correct: 2 },
// //         { question: "What is the largest planet in our solar system?", choices: ["Mars", "Jupiter", "Saturn", "Uranus"], correct: 1 },
// //         { question: "What is the chemical symbol for gold?", choices: ["Go", "Gd", "Au", "Ag"], correct: 2 }
// //     ];

// //     let index = 0;

    
// //     function showQuestion(index) {
// // let currentQuestion = questions[index];
// //     let questionText = document.getElementById("questionText");
// //         questionText.textContent = currentQuestion.question;
// // 		let choicesContainer = document.getElementById("choices");
// //         let button;
// //         for (choice of currentQuestion.choices) {
// //             console.log(choice);
// //            button = document.createElement("button");
// //             button.textContent = choice;
// //             button.addEventListener("click", function() {
// //                 if (this.textContent === currentQuestion.choices[currentQuestion.correct]) {
// //                 button.style.backgroundColor = "green";
// //                 } else {
// //                     this.style.backgroundColor = "red";
// //                 }
// //             });
// //             choicesContainer.appendChild(button);
// //         }
// //     }
// // function nextQuestion() {
// // 	index++;
// // 	if (index < questions.length) {
// // 		showQuestion(index);
// // 	} else {
// // 		document.getElementById("questionText").textContent = "Quiz completed!";
// // 		document.getElementById("choices").innerHTML = "";
// // 	}
// // }

// const students = [
//   {
//     name: "Ahmed",
//     grades: [85, 90, 78]
//   },
//   {
//     name: "Sara",
//     grades: [92, 88, 95]
//   },
//   {
//     name: "Omar",
//     grades: [70, 75, 80]
//   },
//   {
//     name: "Lina",
//     grades: [98, 94, 91]
//   },
//   {
//     name: "Youssef",
//     grades: [65, 73, 69]
//   }
// ];


// function calculateAverage(grades) {
//   const sum = grades.reduce((acc, grade) => acc + grade, 0);
//   return (sum / grades.length).toFixed(1);
// }

// function getStatus(average) {
// average=average>=60? "pass" : "fail";
// return average;
// }

// function renderTable(students) {
//   const table = document.getElementById("table");
//   const tbody = table.querySelector("tbody");

//   students.forEach((student) => {
//     const average = calculateAverage(student.grades);
//     const status = getStatus(average);

//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${student.name}</td>
//       <td>${average}</td>
//       <td class="${status}">${status}</td>
//     `;
//     tbody.appendChild(row);
//   });
// }

// function renderStats(students) {
// 	let s= document.getElementById("stats");
// 	let html=`<p>Total Students: ${students.length}</p>
// 	<p>Passing Students: ${students.filter(s => getStatus(calculateAverage(s.grades)) === "pass").length}</p>
// 	<p>Failing Students: ${students.filter(s => getStatus(calculateAverage(s.grades)) === "fail").length}</p>
// 	<p>Average Grade: ${calculateAverage(students.flatMap(s => s.grades))}</p>
// 	<p>Highest Grade: ${Math.max(...students.flatMap(s => s.grades))}</p>
// 	<p>Lowest Grade: ${Math.min(...students.flatMap(s => s.grades))}</p>`;

// 	s.innerHTML = html;
// }
// renderTable(students);
// renderStats(students);

// async function fetchData(id = 1) {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
// 		method: "PATCH",
// 		headers:{ "Content-Type": "application/json" },
// 		body:JSON.stringify({ name: "Jawa h", email: "jawa.doe@example.com" })
// 	});
// 	if (!res.ok) {
// 		throw new Error(`HTTP error! status: ${res.status}`);
// 	}
// 	const data = await res.json();
// 	console.log(data.length);
// 	return data;
// }
// fetchData().then(data => console.log(data)).catch(err => console.error(err));
// async function fetchData(id) {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
// 		method: "DELETE",
// 	});
// 	 console.log("Deleted", res.ok, "status:", res.status);

// }
// fetchData(1).then(data => console.log(data)).catch(err => console.error(err));
// async function fetchData() {
// 	const response =  await fetch("https://jsonplaceholder.typicode.com/users");
//   const uu= await response.json();
// const x= uu.map( user=>({name:user.name, email:user.email}));
//  console.log(x);
// }
// fetchData();
// // fetchData(1).then(data => console.log(data)).catch(err => console.error(err));

// async function groubByCity() {
// 		const response =  await fetch("https://jsonplaceholder.typicode.com/users");
//   const uu= await response.json();
//   const grouped = uu.reduce((acc, user) => {
// 	const city=user.address.city;
//     (acc[city]??[]).push(user);
//     return acc;
//   }, {});
//  for(const city in grouped){
// 	console.log(`City: ${city}, Users: ${grouped[city].length}`);
//  }
// }
// async function getUser() {
// 	const ids=[1,2,3];
// 	const res=await  Promise.allSettled(
// 		ids.map(
// 			id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(  
// 				r => {
// 					if (!r.ok) throw new Error(`HTTP ${r.status}`);
// 					return r.json();
// 				})
// 		)
// 	);
//   res.forEach((r, i) => {
//     if (r.status === "fulfilled") console.log(`user ${ids[i]}:`, r.value.name);
//     else console.log(`user ${ids[i]} failed:`, r.reason.message);
//   });
// }
// getUser();
// async function withTimeout() {
//   try {
//     const user = await Promise.race([
//       fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
//       new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 50))
//     ]);
//     console.log(user.name);
//   } catch (error) {
//     console.log("Failed:", error.message);
//   }
// }

// let currentController = null;

// async function loadUsers() {
//   currentController?.abort();                 // cancel any in-flight request
//   currentController = new AbortController();

//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//       signal: currentController.signal
//     });
//     const users = await response.json();
//     console.log("got", users.length, "users");
//   } catch (error) {
//     if (error.name !== "AbortError") console.log("Error:", error.message);
//   } finally {
//     currentController = null;
//   }
// }

// Simulate two quick clicks:
// loadUsers();
// setTimeout(loadUsers, 10);