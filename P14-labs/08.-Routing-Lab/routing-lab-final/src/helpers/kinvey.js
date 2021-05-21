export default class Kinvey {

    constructor(app_id, app_secret) {
        this.app_id = app_id;
        this.app_secret = app_secret
    }


    test(data) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/appdata/${this.app_id}`
            let { username, password } = data;
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            }

            fetch(url, { method: 'GET', headers: headers })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    get(endpoint, authToken, loginData) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}`;
            let headers;
            if (loginData) {
                let { username, password } = loginData;
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(username + ":" + password)
                }
            }

            if (authToken) {
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Kinvey ' + authToken
                }
            }

            fetch(url, { method: 'GET', headers: headers })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }


    post(endpoint, data, authToken, loginData) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}`;
            let headers;
            if (loginData) {
                let { username, password } = loginData;
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(username + ":" + password)
                }

            }

            if (authToken) {
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Kinvey ' + authToken
                }
            }

            fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
                .then(res => {
                    if (res.status === 201) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    delete(endpoint, id, authToken, loginData) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}/${id}`;
            let headers;
            if (loginData) {
                let { username, password } = loginData;
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(username + ":" + password)
                }

            }

            if (authToken) {
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Kinvey ' + authToken
                }
            }

            fetch(url, { method: 'DELETE', headers: headers })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }


    edit(endpoint, id, data, authToken, loginData) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}/${id}`;
            let headers;
            if (loginData) {
                let { username, password } = loginData;
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(username + ":" + password)
                }

            }

            if (authToken) {
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Kinvey ' + authToken
                }
            }

            fetch(url, { method: 'PUT', headers: headers, body: JSON.stringify(data) })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }


    signup(data) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/user/${this.app_id}`;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(this.app_id + ":" + this.app_secret)
            }

            fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
                .then(res => {
                    if (res.status === 201) {
                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data._kmd.authtoken))
                .catch(err => reject(err))
        })
    }


    login(data) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/user/${this.app_id}/login`;
            let { username, password } = data;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            }

            fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
                .then(res => {
                    if (res.ok) {

                        return res.json();
                    }
                    throw res;
                }).then(data => resolve(data))
                .catch(err => reject(err))
        })
    }


    logout(authToken) {
        return new Promise((resolve, reject) => {
            let url = `https://baas.kinvey.com/user/${this.app_id}/_logout`;

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Kinvey ' + authToken
            }

            fetch(url, { method: 'POST', headers: headers })
                .then(res => {
                    if (res.status === 204) {
                        resolve({ msg: 'user logged out' })
                    }

                }).catch(err => reject(err))
        })
    }

}