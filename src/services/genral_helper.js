import $ from 'jquery';
class  helper  {

    notify(status,msg){
        var rand_no = Math.floor(Math.random() * 90 + 10);
        if(status === "success"){
            $('.error_box').prepend('<div class="alert alert-success" id="notify'+rand_no+'">'+msg+'</div>').show();
        }else{
            $('.error_box').prepend('<div class="alert alert-danger" id="notify'+rand_no+'">'+msg+'</div>').show();
        }
        $("#notify"+rand_no+"").fadeTo(500, 400).slideUp(400, function () {
            $("#notify"+rand_no+"").slideUp(400);
        });
    }

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
            // return `http://${window.location.hostname}:8080/`;
            return `http://localhost:8080/`;
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