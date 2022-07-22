import React from 'react'

export const RemoveLS = (key) => {
    localStorage.removeItem(key)
    console.log("remove successfully")
}
