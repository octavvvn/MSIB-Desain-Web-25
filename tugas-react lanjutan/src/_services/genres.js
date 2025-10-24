import api from "../_api";

export async function getGenres() {
  try {
    const response = await api.get("/genres");
    return response.data.data;
  } catch (err) {
    console.error("Error loading genres:", err);
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

// menambahkan
export async function getGenreById(id) {
  try {
    const response = await api.get(`/genres/${id}`);
    return response.data.data;
  } catch (err) {
    console.error("Failed to fetch genre by id:", err);
    throw err;
  }
}

export async function updateGenre(id, genre) {
  try {
    const response = await api.put(`/genres/${id}`, genre);
    return response.data;
  } catch (err) {
    console.error("Failed to update genre:", err);
    throw err;
  }
}

export async function deleteGenre(id) {
  try {
    const response = await api.delete(`/genres/${id}`);
    return response.data;
  } catch (err) {
    console.error("Failed to delete genre:", err);
    throw err;
  }
}
