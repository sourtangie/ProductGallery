export async function getProductList() {
  const serviceUrl =
    "https://private-5815fe-recommendationsknip.apiary-mock.com/products";
  const response = await fetch(serviceUrl, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}
