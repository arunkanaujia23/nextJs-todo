"use client"
import React, { useEffect, useState } from 'react'

const ColorSchemaToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedPreference = localStorage.getItem('color-scheme-preference');

        if(storedPreference){
            setIsDarkMode(storedPreference === 'dark');
        }else{
            setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
    },[])

    const toggleColorScheme = () => {
        console.log('is it working')
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    // Store the user's preference in localStorage
    localStorage.setItem('color-scheme-preference', newMode ? 'dark' : 'light');
    console.log(localStorage.getItem('color-scheme-preference'),'color-schema')
  };
  return (
    <button onClick={toggleColorScheme} className="btn">
         {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default ColorSchemaToggle