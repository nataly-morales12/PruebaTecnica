import axios from 'axios';

const direccionUrl = "http://localhost:3000/api/tasks"

export async function getTasks(state) {
    try {
        if(state == "todas"){
            state = undefined
        }
      const response = await axios({
        url: state ? `${direccionUrl}?state=${state}` : direccionUrl,
        method: 'GET',
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
}

export async function saveTask(task) {
    try {
      const response = await axios({
        url: direccionUrl,
        method: 'POST',
        data: task,
      });
      return response.data;
    } catch (error) {
      console.error("Error saving task: ", error);
    }
}

export async function updateTask(id, task) {
  console.log(id)
    try {
      const response = await axios({
        url: `${direccionUrl}/${id}`,
        method: 'PUT',
        data: task,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating task: ", error);
    }
}


export async function deleteTask(id) {
    try {
      const response = await axios({
        url: `${direccionUrl}/${id}`,
        method: 'DELETE',
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  }
