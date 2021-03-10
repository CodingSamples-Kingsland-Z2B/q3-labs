function validate() {

    // Dom variables 
    const input = document.getElementById('email');
    const reqex = /[a-z]+@[a-z]+\.[a-z]{1,3}/g;

    input.addEventListener('change', (e) => {
        if (!reqex.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    })
}