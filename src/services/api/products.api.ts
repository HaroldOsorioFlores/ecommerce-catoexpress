import { baseApi } from ".";

export async function getProducts(moduleUcsm: string) {
  try {
    const res = await fetch(`${baseApi}/products/${moduleUcsm}`);
    if (!res.ok) throw new Error("Error al traer datos del API");
    return res.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    console.log("ocurrio un error");
  }
}
