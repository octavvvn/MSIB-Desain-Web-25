import api from "../_api";

export async function getGenres() {
  try {
    const response = await api.get("/genres");
    return response.data.data;
  } catch (err) {
    console.error("Failed to fetch genres:", err);
    return [];
  }
}

export async function addGenre(genre) {
  try {
    const response = await api.post("/genres", genre);
    return response.data;
  } catch (err) {
    console.error("Failed to add genre:", err);
    throw err;
  }
}