import api from "./api";

export const getAccommodations = async () => {
  const { data } = await api.get("/accommodations");
  return data;
};

export const getAccommodation = async (id) => {
  const { data } = await api.get(`/accommodations/${id}`);
  return data;
};