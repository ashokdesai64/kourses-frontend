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

    img_url(link) {
        if (!link) {
            return 'https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/';
        } else {
            return `https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/${link}`;
        }
    }
    
    img_backend_url(link) {
        if (!link) {
            return 'https://kourses-codeigniter.qseksolutions.com/assets/back-end/upload_data/';
        } else {
            return `https://kourses-codeigniter.qseksolutions.com/assets/back-end/upload_data/${link}`;
        }
    }

    img_backend_auth_profile(link) {
        if (!link) {
            return 'https://kourses-codeigniter.qseksolutions.com/assets/back-end/user_profile/';
        } else {
            return `https://kourses-codeigniter.qseksolutions.com/assets/back-end/user_profile/${link}`;
        }
    }

}


export default new helper();