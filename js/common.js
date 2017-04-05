

$(document).ready(function(){


  $('.js-phone').mask("+7(999)999-99-99?");

   

   $('a[data-name="js-modal"]').on("click", function(e){
        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();  

          var gift = $('.dfactive').attr('data-name');
        $('input[name="gift"]').val(gift);      

        var  $this = $(this),
        $namephone = $this.parents('.dfheadbot_telbox').find('.dfheadbot_name').html(),
        $price = $this.parents('.dfheadbot_telbox').find('.dfheadbot_newpricetxt b').html();
        $('input[name="namephone"]').val($namephone);
        $('input[name="price"]').val($price);

        $(id).css("left", winW/2-$(id).width()/2);
        $(id).css("top", winH/2-$(id).height()/2);
        // $('body').css("overflow-y", "hidden");
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


    var owl2 = $("#dfslider");
    owl2.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:0,
        mouseDrag:false,
        touchDrag: false,
        center:false,     //если нужны обрезаные края
        navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
        responsive:{
              0:{
                items:1
            },
            480:{
                items:2 
            },
            750:{
                items:3 
            },
            990:{
                items:4
            },      

            1248:{
                items:4
            }
        }
    }); 
        
     $('.div-fl .dd-img-box').on('click', function(){
        $('.dd-img-box').removeClass('dfactive');
        $(this).addClass('dfactive');
         var gift = $('.dfactive').attr('data-name');
        $('input[name="gift"]').val(gift);
       
     });

 });


