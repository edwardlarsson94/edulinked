import axios from 'axios';

export const loginUser = async (email:string, password:string) => {
  try {
    const response = await axios.post('http://192.168.80.170:3000/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al iniciar sesión, verifica tus credenciales');
  }
};
