import React from 'react'

export const GetLS = (key) => {
    // console.log("bringing from localStorage")
    const mainData = localStorage.getItem(key)
    // console.log(mainData)
    return mainData;
}
