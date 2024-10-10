import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from 'cart/CartShow';
console.log("Containers");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));