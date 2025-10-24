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
    throw err;
  }
}

// menambahkan 
export async function getAuthorById(id) {
  try {
    const response = await api.get(`/authors/${id}`);
    return response.data.data;
  } catch (err) {
    console.error("Failed to fetch author by id:", err);
    throw err;
  }
}

export async function updateAuthor(id, author) {
  try {
    const response = await api.put(`/authors/${id}`, author);
    return response.data;
  } catch (err) {
    console.error("Failed to update author:", err);
    throw err;
  }
}

export async function deleteAuthor(id) {
  try {
    const response = await api.delete(`/authors/${id}`);
    return response.data;
  } catch (err) {
    console.error("Failed to delete author:", err);
    throw err;
  }
}
