import api from "../_api";

export async function getAuthors() {
  try {
    const response = await api.get("/authors");
    return response.data.data;
  } catch (err) {
    console.error("Failed to fetch authors:", err);
    return [];
  }
}

export async function addAuthor(author) {
  try {
    const response = await api.post("/authors", author);
    return response.data;
  } catch (err) {
    console.error("Failed to add author:", err);
    throw err; // biar bisa ditangkap di create.jsx
  }
}