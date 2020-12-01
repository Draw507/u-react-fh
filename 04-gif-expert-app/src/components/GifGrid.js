import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getgifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            {
                images.map(img => (
                    <GifGridItems 
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
            </div>
        </>
    )
}
