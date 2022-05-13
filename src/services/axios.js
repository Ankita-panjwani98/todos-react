import axios from 'axios';

async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    return response;
  }