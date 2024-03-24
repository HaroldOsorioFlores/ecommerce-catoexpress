export async function getCorrectUrlFetchProduct(url: string) {
  let urlProduct = "";
  switch (url) {
    case "cafeteria":
      urlProduct = "elcholo-ucsm";
      break;

    case "panificadora ucsm":
      urlProduct = "panificadora-ucsm";
      break;

    case "ceprobis ucsm":
      urlProduct = "ceprobis-ucsm";
      break;

    default:
      break;
  }

  return urlProduct;
}
