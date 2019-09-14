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
   
}


export default new helper();