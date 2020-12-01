import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {
    //const [state, setstate] = useState(initialState);
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=udmwJUZPMvp5olYFMGhCS8cBKaP9gjuA';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });

        console.log(gifs);
    };

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
