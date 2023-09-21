import axios from "axios";

const getBaseUrl = (route) => {
  return `https://cryptic-chamber-12103-e413eec15a05.herokuapp.com${route}`;
};

const route = "/api/v1";
const apiClient = axios.create({
  baseURL: getBaseUrl(route),
  headers: {
    "Content-Type": "application/json"
  }
});

async function getTasks() {
  try {
    const response = await apiClient.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error; 
  }
}

async function createTask(data) {
  try {
    const response = await apiClient.post("/task", data);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}

async function updateTask(id, newData) {
  try {
    const response = await apiClient.patch(`/task/${id}`, newData);
    return response.status;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}

async function deleteTask(id) {
  try {
    const response = await apiClient.delete(`/task/${id}`);
    return response.status;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}

export { createTask, getTasks, updateTask, deleteTask };
