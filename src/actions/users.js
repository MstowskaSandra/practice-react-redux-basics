export const addUserAction = ({ name }) => {
    return {
        type: "addNewUser", 
        payload: { name },
    }
}

export const removeUserAction = ({ id }) => {
    return {
        type: "removeUser", 
        payload: { id },
    }
}

export const removeAllUsersAction = () => {
    return {
        type: "clearUsers"
    }
}