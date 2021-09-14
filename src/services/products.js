export async function getProducts() {
  return new Promise((resolve, reject) => {
    fetch('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
      .then(response => response.json())
      .then(data => {
        resolve(data.products);
      });
  });
};