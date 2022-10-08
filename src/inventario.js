export default class Inventory {
  constructor() {
    this.products = [];
  }

  searchProduct(code) {
    let low = 0;
    let high = this.products.length - 1;

    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      let guess = this.products[middle];

      if (guess.getCode() == code) {
        return this.products[middle];
      }

      if (guess.getCode() > code) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    return false;
  }

  addProduct(product) {
    if (this.searchProduct(product.getCode())) {
      return false;
    } else {
      this.products.push(product);

      this.#sortProducts();
      return true;
    }
  }

  deleteProduct(code) {
    if (this.searchProduct(code)) {
      for (let i = 0; i < this.products.length; i++) {
        if (code === this.products[i].getCode()) {
          for (let j = i; j < this.products.length - 1; j++) {
            this.products[j] = this.products[j + 1];
          }

          this.products.pop();
        }
      }
      return true;
    } else {
      return false;
    }
  }

  showNormalList() {
    let list = "";

    if (this.products.length > 0) {
      for (let i = 0; i < this.products.length; i++) {
        list += this.products[i].getDetails();
      }
    } else {
      return false;
    }

    return list;
  }

  showInverseList() {
    let list = "";
    if (this.products.length > 0) {
      for (let i = this.products.length - 1; i >= 0; i--) {
        list += this.products[i].getDetails();
      }
    } else {
      return false;
    }

    return list;
  }

  #sortProducts() {
    for (let i = 0; i < this.products.length; i++) {
      for (let j = 0; j < this.products.length; j++) {
        if (Number(this.products[i].code) < Number(this.products[j].code)) {
          let tmp = this.products[i];
          this.products[i] = this.products[j];
          this.products[j] = tmp;
        }
      }
    }
  }
}
