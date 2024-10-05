import axios from 'axios';

export const fetchPostData = async () => {
  try {
    const response = await axios.post('http://192.168.80.170:3000/post/get_all_post');
    return response.data;
  } catch (error) {
    throw new Error('Error al traer los post');
  }
};