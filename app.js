import axios from 'axios';

async function getData(user_id) {
    try {
      const { data: users } = await axios('https://jsonplaceholder.typicode.com/users/' + user_id);
      const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + user_id);
      
      console.log(users);
      console.log(posts);
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
  }
  
  getData(1);
  