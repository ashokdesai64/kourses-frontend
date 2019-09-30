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
   
}


export default new helper();