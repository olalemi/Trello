import axios from "axios";


 const getBaseUrl = (route) => {
    // return `https://cryptic-chamber-12103-e413eec15a05.herokuapp.com${route}`;
    return `http://localhost:3002${route}`;
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
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createTask(data) {
  try {
    const response = await apiClient.post("/task", data);
    console.log("Response:", response.data);
    return response.data.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateTask(id, newData) {
  try {
    const response = await apiClient.patch(`/task/${id}`, newData);
    console.log("Update Response:", response.data);
    return response.status;
  } catch (error) {
    console.error("Update Error:", error);
  }
}

async function deleteTask(id) {
  try {
    const response = await apiClient.delete(`/task/${id}`);
    console.log("Delete Response:", response.data);
    return response.status;
  } catch (error) {
    console.error("Delete Error:", error);
  }
}

export  {
  createTask,
   getTasks,
  updateTask,
  deleteTask
};

// export default BoardService;
