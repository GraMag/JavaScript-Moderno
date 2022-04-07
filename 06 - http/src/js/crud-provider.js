const urlCrud = 'https://reqres.in/api/users';

const getUser = async(id) => {
    const resp = await fetch(`${urlCrud}/${id}`); 
    const {data} = await resp.json();

    return data;
}

const createUser = async(user) => {
    const resp = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    } );

    return await resp.json();
}

const updateUser = async(id, user) => {
    const resp = await fetch(`${urlCrud}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    } );

    return await resp.json();
}

const deleteUser = async(id) => {
    const resp = await fetch(`${urlCrud}/${id}`, {
        method: 'DELETE'
    } );

    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
}

export{
    getUser,
    createUser,
    updateUser,
    deleteUser
}
