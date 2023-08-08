import axios from "axios";

const apiUrl:string= "https://picsum.photos/v2/list";

const fetchPhotos = async (page:number, limit: number) => {
  try{
    const response = await axios.get(`${apiUrl}?page=${page}&limit=${limit}`);
    return response.data;
  } catch(error){
    console.error("Error fetching photos: ", error);
    throw error;
  }
};

export default fetchPhotos;