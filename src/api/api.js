import axios from "axios";

const URL = "http://shopmate.skr.dk:3001/api/";

export async function getAll() {
  return await fetchData("GET", URL);
}

export async function getById(id) {
  return await fetchData("GET", URL + id);
}

export async function create(item) {
  return await fetchData("POST", URL, item);
}

export async function update(updatedItem) {
  return await fetchData("PUT", URL + updatedItem.id, updatedItem);
}

export async function deleteItem(itemId) {
  return await fetchData("DELETE", URL + itemId);
}

const fetchData = async (method, endpoint, request = null) => {
  let response;
  method = method.toUpperCase().trim();
  try {
    // Add 'httpsAgent' option to ignore SSL verification in a development environment
    const axiosConfig = {
      httpsAgent: {
        rejectUnauthorized: false,
      },
    };
    switch (method) {
      case "GET":
        response = await axios.get(endpoint);
        break;
      case "POST":
        response = await axios.post(endpoint, request);
        break;
      case "PUT":
        response = await axios.put(endpoint, request);
        break;
      case "DELETE":
        response = await axios.delete(endpoint);
        break;
      default:
        throw new Error(
          `Invalid HTTP method; please use 'GET', 'POST', 'PUT' or 'DELETE'`
        );
    }

    return response.data;
  } catch (error) {
    console.log("Could not fetch data: ", error);
  }
};
