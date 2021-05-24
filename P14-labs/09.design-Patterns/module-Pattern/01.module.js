const UICtrl = (function() {
    let text = 'Hello world';

    const changeText = function() {
        const el = document.getElementById('h1');
        el.textContent = text;
    }


    const removeText = function() {
        const el = document.getElementById('h1');
        el.textContent = '';
    }

    return {
        changeText,
        removeText,
    }
})()



UICtrl.changeText()