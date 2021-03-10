function focus() {

    const inputs = Array.from(document.querySelectorAll('input'));



    inputs.forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    });
}