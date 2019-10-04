class  helper  {


    get_user(value=""){
        if (localStorage.getItem("userdata")){
            if (value && localStorage.getItem("userdata")){
                let storage = JSON.parse(localStorage.getItem("userdata"));
                return storage[value];
            }else{
                return true;
            }
        }else{
            return false;
        }
    }

    api_call(link){
        if(!link){
            return 'http://localhost:8080/';
        }else{
            return `http://localhost:8080/${link}`;
        }
    }

    cipher = salt => {
        let textToChars = text => text.split('').map(c => c.charCodeAt(0))
        let byteHex = n => ("0" + Number(n).toString(16)).substr(-2)
        let applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code)

        return text => text.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('')
    }

    decipher = salt => {
        let textToChars = text => text.split('').map(c => c.charCodeAt(0))
        textToChars(salt)
        let applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code)
        return encoded => encoded.match(/.{1,2}/g)
            .map(hex => parseInt(hex, 16))
            .map(applySaltToChar)
            .map(charCode => String.fromCharCode(charCode))
            .join('')
    }
   
}


export default new helper();