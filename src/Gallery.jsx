import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = "https://api.unsplash.com/search/photos?client_id=HiEU_-DkM-7wCIwXyOuXV5i8H0HNgTGZ8UuXJvncdKk";

const Gallery = () => {

    const {searchTerm} = useGlobalContext();

    const response = useQuery({
        queryKey: ['images'],
        queryFn: async() => {
            const result = await axios.get(`${url}&query=${searchTerm}`);

            return result;
        }
    })

    if (response.isLoading) {
        return <section className="image-container">
            <h4>Loading...</h4>
        </section>
    }
    if (response.isError) {
        return <section className="image-container">
            <h4>There was an error...</h4>
        </section>
    }


    if(response.data.data.results.length < 1) {
        return <section className="image-container">
        <h4>No Results Found...</h4>
    </section>
    }

  return (
    <section className="image-container">
        {response.data.data.results.map((item) => {
            const url = item?.urls?.regular;
            return <img src={url} alt={item.alt_description} key={item.id} className='img' />
        })}
    </section>
  )
}

export default Gallery