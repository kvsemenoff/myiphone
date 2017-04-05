

$(document).ready(function(){


  $('.js-phone').mask("+7(999)999-99-99?");

   

   $('a[data-name="js-modal"]').on("click", function(e){
        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();
        
        var  $this = $(this),
        $namephone = $this.parents('.dfheadbot_telbox').find('.dfheadbot_name').html(),
        $price = $this.parents('.dfheadbot_telbox').find('.dfheadbot_newpricetxt b').html();
        $('input[name="namephone"]').val($namephone);
        $('input[name="price"]').val($price);

        $(id).css("left", winW/2-$(id).width()/2);
        $(id).css("top", winH/2-$(id).height()/2);
        $('body').css("overflow-y", "hidden");
        $(id).fadeIn();
        $('#js-mask').fadeIn();
    });
    

    $('#js-mask').on("click", function(){
        $('#js-mask').hide();
        $('.js-window').hide();
        $('body').removeAttr("style");

    });

            $(function() {
                $(window).scroll(function() {
                    if($(this).scrollTop() != 0) {
                        $('#toTop').fadeIn();
                    } else {
                        $('#toTop').fadeOut();
                    }
                });
                $('#toTop').click(function() {
                    $('body,html').animate({scrollTop:0},800);
                });
            });

    /*MODAL SUBMIT*/
    $('.js-submit').submit(function(){
        var phone = $(this).find('input[name="phone"]');
        
        if(phone.val() == ""){
            phone.focus();
            return false;
        }

        else{
            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "/message.php", 
                data: form_data,
                success: function() {
                    cleanTnanks(this);
                }
            });
        }
        return false;
    });

    function cleanTnanks(form){
        $('.js-window').hide();
        $("input[type=text]").val("");
        $('a[href=#js-form2]').trigger('click');
                // location = "thanks.php";
            };



    $("#DateCountdown").TimeCircles({
        circle_bg_color: "none",
        use_background: false,        
        fg_width: 0.03,
        number_size: 0.25,
        time: {
        Days: { color: "none" , show:false },
        Hours: { color: "#e94f8d" , text: "Часа"},
        Minutes: { color: "#efd920" , text: "Минут"},
        Seconds: { color: "#b6d06f" , text: "Секунд"}
    }


    });
        
     

 });


