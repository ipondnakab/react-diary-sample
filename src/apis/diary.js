import axios from "axios";
export const getAllDiary = async () => {
  const response = await axios.get("/diary");
  return response.data;
};

export const getDiaryById = async (id) => {
  const response = await axios.get(`/diary/${id}`);
  return response.data;
};

export const editDiary = async (data) => {
  const response = await axios.patch(`/diary`, data);
  return response.data;
};

export const deleteDiary = async (id) => {
  const response = await axios.delete(`/diary`, { data: { diaryId: id } });
  return response.data;
};

export const createDiary = async (data) => {
  const response = await axios.post("/diary", data);
  return response.data;
};
