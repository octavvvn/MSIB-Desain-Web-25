import api from "../_api";

export const getBooks = async () => {
  const res = await api.get("/books");
  return res.data.data || res.data;
};

export const addBook = async (data) => {
  const res = await api.post("/books", data);
  return res.data;
};
