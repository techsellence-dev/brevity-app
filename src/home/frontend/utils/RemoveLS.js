export const RemoveLS = (key) => {
    localStorage.removeItem(key)
    console.log("remove successfully", key)
}
