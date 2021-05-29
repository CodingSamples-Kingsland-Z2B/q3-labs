export function isAuth() {

    if (sessionStorage.getItem('loggedIn')) {
        return true; //user is logged in 
    } else {
        // User not logged in 
        return false;
    }

}


export function sendMsg(type, msg, time) {

    if (type == 'error') {
        let errorBox = document.getElementById('errorBox');
        let p = document.createElement('P');
        p.textContent = msg;
        p.classList.add('error-msg');
        errorBox.style.display = 'block';
        errorBox.appendChild(p);
        setTimeout(() => {
            errorBox.querySelectorAll('.error-msg').forEach(msg => msg.remove());
            errorBox.style.display = 'none';
        }, time * 1000)

    } else if (type == "info") {
        let infoBox = document.getElementById('infoBox');
        let p = document.createElement('P');
        p.textContent = msg;
        p.classList.add('info-msg');
        infoBox.style.display = 'block';
        infoBox.appendChild(p);
        setTimeout(() => {
            infoBox.querySelectorAll('.info-msg').forEach(msg => msg.remove());
            infoBox.style.display = 'none';
        }, time * 1000)
    }
}