$(document).ready(function() {
   

   $("#search_bar").keyup(function(){ 
      $('#nocoursetitle').html('');
      var input, filter, div_full, subdiv, a, i, txtValue;
      input = document.getElementById('search_bar');
      filter = input.value.toUpperCase();
      div_full = document.getElementById("course_full");
      subdiv = div_full.getElementsByTagName('h2');
        for (i = 0; i < subdiv.length; i++) {
             txtValue = subdiv[i].textContent || subdiv[i].innerText;
             if (txtValue.toUpperCase().indexOf(filter) > -1) {
                $check = "";
               $(subdiv[i]).parent().parent().parent().css('display','block');
              } else {
                $(subdiv[i]).parent().parent().parent().css('display','none');
                $check = i;
              }
        }
        if($check){
          $('#nocoursetitle').html('<h2 class="text-center w-100">Courses Not Found</h2>');
        }
   });

   $(document).on('click','.course_filter',function(){
      var value = $(this).attr('data-value');
      var data = $(this).attr('data-id');
      $.ajax({
         url: base_url+'course/course_filter',
         type: 'POST',
         data: {'data':data,'value':value},
         dataType: 'json',
         success: function (data) {
            if(data.status=='success'){
               $('#course_full').html(data.html);
            } 
         }
      });
   });

});