
$(document).ready(function () {

    $('.check-box').click(function(){
        if($(this).is(':checked')){

            $('.checkBtn').removeAttr('disabled')

            $("button").click(function(){
        
                $("table tr").has(".check-box:not(:checked)").hide();
            });
        
        }else{
            $('.checkBtn').attr('disabled', true);
        }
        
    });

});

