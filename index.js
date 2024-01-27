function checkColorChange(text) {
    if ((text.substring(0, 5) === 'color') && text.charAt(text.length - 1) == ';') {
        let startIndex = 6;
        let endIndex = text.indexOf(';', startIndex);

        let color = text.substring(startIndex, endIndex);
        
        document.body.style.backgroundColor = color;
        document.getElementById('prompt').style.backgroundColor = color;

        if (color == 'white') {
            document.getElementById('prompt').style.color = 'black';
            document.body.style.color = 'black';
            document.getElementById('prompt').style.borderColor = 'black';
        }

        else {
            document.getElementById('prompt').style.color = 'white';
            document.body.style.color = 'white';
            document.getElementById('prompt').style.borderColor = 'white';
        }

        document.getElementById('prompt').value = '';
    }
}

function checkFontChange(text) {
    let font = text.substring(0, 4);
    let change = text.substring(5, 10);

    if (font == 'font') {
        if(change == 'color') {
            let startIndex = 11;
            let endIndex = text.indexOf(';', startIndex);

            let color = text.substring(startIndex, endIndex);
            
            document.body.style.color = color;
            document.getElementById('prompt').style.color = color;
        }
    }
}


let inputField = document.getElementById('prompt');

inputField.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        text = document.getElementById('prompt').value;

        //testowanie komend
        //

        //zmiana koloru strony
        //
        checkColorChange(text);
    
        //zmiana koloru czcionki
        //
        checkFontChange(text);
    }
});