const api = 'http://locahost:3002/api/apppedidos/'

export const ApiService ={
    get(endpoint){
        return fetch(`${api}${endpoint}`)
        .then(resp => resp.json())
    },

    post(endpoint, data){
        return fetch(`${api}${endpoint}`,{
            method:'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        })
        .then(resp => resp.json())

    }
}

