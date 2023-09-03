import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = "https://api.unsplash.com/search/photos?client_id=HiEU_-DkM-7wCIwXyOuXV5i8H0HNgTGZ8UuXJvncdKk&query=office";

const Gallery = () => {

    const response = useQuery({
        queryKey: ['images'],
        queryFn: async() => {
            const result = await axios.get(url);

            return result;
        }
    })

    console.log(response.data);

  return (
    <h2>Gallery</h2>
  )
}

export default Gallery