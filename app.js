const loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
  alert("Please log in first!");
  window.location.href = "login.html";
}

let main=document.getElementById("main");
console.log(main);
let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function fun () {
    try{
        let response=await fetch('https://fakestoreapi.com/products');
        let data=await response.json();
        // console.log(data);
        let titles = data.map(item =>item.title);  //(or) data .map(ele=>console.log(ele,title))
        console.log(titles);
        main.innerHTML=data.map((ele,index)=>{
            return`
            <div class="Items">
              <a href="product.html?id=${ele.id}">
                <img src="${ele.image}"/>
                <h1>${ele.title.slice(0,25)}</h1>
                <p>${ele.category}</p>
                <p>${ele.price}</p>
              </a>
              <button onclick = "addToCart(${index})">Add to Cart</button>  
            </div>`
        }).join("")
    }catch(err){
        console.log(" Error Occurred ");
    }
}
fun();

function addToCart(index) {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      const selectedItem = data[index];
      cart.push(selectedItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("🛒 Product added to cart!");
    })
    .catch(err => console.log("Error adding to cart", err));
}