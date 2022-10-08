import Product from "../src/producto.js";

import Inventory from "../src/inventario.js";

let inventory = new Inventory();

let actions = document.getElementById("actions");

document.getElementById("btnAddElement").addEventListener("click", () => {
  let productCode = document.getElementById("productCode").value;

  let productName = document.getElementById("productName").value;

  let productQuantity = document.getElementById("productQuantity").value;

  let productCost = document.getElementById("productCost").value;





  
  let product = new Product(
    productCode,
    productName,
    productQuantity,
    productCost
  );

  
  if (
    productCode == "" ||
    productName == "" ||
    productQuantity == "" ||
    productCost == ""
  ) {
    actions.innerHTML += `
    <div class="error">
      <p><b>ERROR</b><br>Ingresa los campos correctamente</p>
    </div>
  `;

    document.getElementById("formAdd").reset();
  } else {
    if (inventory.addProduct(product)) {
      actions.innerHTML += `
        <div class="success">
          <p>Se ha <b>AGREGADO</b> un producto</p>
        </div>
      `;

      document.getElementById("formAdd").reset();
    } else {
      actions.innerHTML += `
      <div class="error">
        <p><b>ERROR</b><br>El producto ya existe</p>
      </div>
    `;

      document.getElementById("formAdd").reset();
    }
  }
});

//  Delete Product
document.getElementById("btnDelElement").addEventListener("click", () => {
  let productCodeToDelete = document.getElementById(
    "productCodeToDelete"
  ).value;

  if (productCodeToDelete == "") {
    actions.innerHTML += `
    <div class="error">
      <p><b>ERROR</b><br>Ingresa los campos correctamente</p>
    </div>
  `;

    document.getElementById("formDelete").reset();
  } else {
    if (inventory.deleteProduct(productCodeToDelete)) {
      actions.innerHTML += `
      <div class="success">
        <p>Se ha <b>ELIMINADO</b> un producto</p>
      </div>
    `;

      document.getElementById("formDelete").reset();
    } else {
      actions.innerHTML += `
      <div class="error">
        <p><b>ERROR</b><br>Ingrese un codigo valido</p>
      </div>
    `;

      document.getElementById("formDelete").reset();
    }
  }
});

//  Show Normal List
document.getElementById("btnNormalList").addEventListener("click", () => {
  let productList = document.getElementById("productList");

  if (inventory.showNormalList()) {
    productList.innerHTML = inventory.showNormalList();

    actions.innerHTML += `
    <div class="list">
      <p>Se han <b>LISTADO</b> los productos del Inventario</p>
    </div>
    `;
  } else {
    actions.innerHTML += `
    <div class="error">
      <p><b>ERROR</b><br>La lista de productos esta vacia</p>
    </div>
  `;

    productList.innerHTML = "";
  }
});

//  Show Inverse List
document.getElementById("btnReverseList").addEventListener("click", () => {
  let productList = document.getElementById("productList");

  if (inventory.showInverseList()) {
    productList.innerHTML = inventory.showInverseList();

    actions.innerHTML += `
    <div class="list">
      <p>Se han <b>LISTADO de forma INVERSA</b> los productos del Inventario</p>
    </div>
  `;
  } else {
    actions.innerHTML += `
    <div class="error">
      <p><b>ERROR</b><br>La lista de productos esta vacia</p>
    </div>
  `;

    productList.innerHTML = "";
  }
});

// Search Product
document.getElementById("btnSearchElement").addEventListener("click", () => {
  let productCodeToSearch = document.getElementById(
    "productCodeToSearch"
  ).value;

  let product = inventory.searchProduct(productCodeToSearch);

  if (product) {
    actions.innerHTML += `
    <div class="success">
      <p>Se ha <b>BUSCADO</b> un producto</p>
    </div>
    
    <p>${product.getDetails()}</p>
    `;

    document.getElementById("formSearch").reset();
  } else {
    actions.innerHTML += `
    <div class="error">
      <p><b>ERROR</b><br>El producto no existe</p>
    </div>
    `;

    document.getElementById("formSearch").reset();
  }
});
