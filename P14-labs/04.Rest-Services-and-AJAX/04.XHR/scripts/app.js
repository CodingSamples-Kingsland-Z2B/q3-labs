function loadRepos() {
    const xhr = new XMLHttpRequest();

    const url = `https://api.github.com/users/testnakov/repos`



    //  xhr.onprogress = function() {
    //      document.querySelector('#res').innerHTML = `<img src="./loading.gif"/> `
    //  }
    //  xhr.onload = function() {
    //      if (this.status == 200) {
    //          document.querySelector('#res').innerHTML = ``;
    //          document.querySelector('#res').textContent = this.responseText
    //      }
    //  }


    //  Method 2
    xhr.addEventListener('readystatechange', function() {
        if (this.readyState == 4 && this.status == 200)
            document.querySelector('#res').textContent = this.responseText

    })

    xhr.open('GET', url);
    xhr.send();
}