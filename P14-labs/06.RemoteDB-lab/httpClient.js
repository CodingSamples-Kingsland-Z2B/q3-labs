class httpClient {
    // Get Request 
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    // Post Method 
    post(url, data, headers) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                })
                .then((res) => {
                    return res.json();
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })

    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(data)
                })
                .then((res) => {
                    return res.json();
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',

                })
                .then((res) => {
                    return res.json();
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

}