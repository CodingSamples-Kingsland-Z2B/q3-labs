function solve() {

    const dropdownBtn = document.getElementById('dropdown');
    const dropdownUl = document.getElementById('dropdown-ul');
    const box = document.getElementById('box');

    dropdownBtn.addEventListener('click', function() {

        switch (dropdownUl.style.display) {
            case "":
            case "none":
                dropdownUl.style.display = 'block';
                break;
            case "block":
                dropdownUl.style.display = 'none';
                box.style.backgroundColor = 'rgb(114, 112, 112)';

                break;

        }

    })

    dropdownUl.addEventListener('click', function(e) {
        box.style.backgroundColor = e.target.textContent;
    })
}