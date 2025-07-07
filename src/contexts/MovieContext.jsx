import React, {createContext,useState, useContext,useEffect } from 'react';

const MovieContext=createContext()

export const useMovieContext=()=>useContext(MovieContext)
export const MovieProvider=({children}) => {
    const [favorites,setFavorites]=useState([])
    useEffect(()=>{
        const storedFavs=localStorage.getItem('favorites')
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFavorite=(movie)=>{
        setFavorites(prev=>[...prev,movie])
    }
    const removeFromFavourite=(movieId)=>{
        setFavorites(prev=>prev.filter(movie=>movie.id !== movie))
    }
    const isFavorite=(movieId)=>{
        return favorites.some(movie=>movie.id === movieId)
    }
    const value={
        favorites,
        setFavorites,
        removeFromFavourite,
        addToFavorite,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>;
}