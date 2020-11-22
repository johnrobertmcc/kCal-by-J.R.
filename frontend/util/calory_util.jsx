
export const fetchCalory = (calory) => {

    return $.ajax(
        {
            url: `/api/users/${calory.user_id}/calories/${calory.id}`,
            method: "GET"
        }
    )
}


export const fetchCalories = (userId) => {
    return $.ajax(
        {
            url: `/api/users/${userId}/calories`,
            method: "GET"
        }
    )
};

export const createCalory = (calory) => {
    return $.ajax(
        {
            url: `/api/users/${calory.user_id}/calories`,
            method: "POST",
            data: {calory}
        }
    )
};

export const updateCalory = (calory) => {

    return $.ajax(
        {
            url: `/api/users/${calory.user_id}/calories/${calory.id}`,
            method: "PATCH",
            data: {calory}
        }
    )
};

export const deleteCalorie = (calory) => {
    
    return $.ajax(
        {
            url: `/api/users/${calory.user_id}/calories/${calory.id}`,
            method: "DELETE",
        }
    )
}
