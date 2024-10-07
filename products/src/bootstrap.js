import faker from "faker";

let products = "";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
    // ReactDOM.render(<App />, el);
    el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container doesn't have an element
  if (el) {
    mount(el);
  }
}

export { mount };
