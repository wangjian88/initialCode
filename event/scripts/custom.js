
$(window).load(function() {

	"use strict";


	
 		
	$(window).scroll(function () {
        if ($(window).scrollTop() > $("nav").height()) {
            $("nav.navbar-slide").addClass("show-menu");
        } else {
            $("nav.navbar-slide").removeClass("show-menu");
			$(".navbar-slide .navMenuCollapse").collapse({toggle: false});
			$(".navbar-slide .navMenuCollapse").collapse("hide");
			$(".navbar-slide .navbar-toggle").addClass("collapsed");
        }
    });
	
//------------------------------------------------------------------------
//						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
//------------------------------------------------------------------------ 		
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").click()
        }
    });
	
})




$(document).ready(function(){
			
	"use strict";

	
	
//------------------------------------------------------------------------
//						锚点间的滑动效果
//------------------------------------------------------------------------
	$('a.goto, .navbar .nav a').smoothScroll({speed: 1200});




//------------------------------------------------------------------------	
//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
//------------------------------------------------------------------------  
	          
    $('.portfolio-list li').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

	

	
//------------------------------------------------------------------------
//						头部图片
//------------------------------------------------------------------------
if($('.video-bg')[0]) {
	$(function() {
		var BV = new $.BigVideo({container: $('.video-bg'), useFlashForFirefox:false});
		BV.init();
		if(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i)) {
				BV.show('images/video_gag.jpg');
		} else{
			if (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
				BV.show('video/video_bg.ogv', {doLoop:true, ambient:true});
			} else{
				BV.show('video/video_bg.mp4', {doLoop:true, ambient:true, altSource:'video/video_bg.ogv'});
			}
			BV.getPlayer().on('loadedmetadata', function(){
				$('#big-video-wrap video').fadeIn('slow');
			});
		}
	});	
}


		
	
//------------------------------------------------------------------------
//					表单
//------------------------------------------------------------------------          
    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest("form"));
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    }); 
	

		
				
//------------------------------------------------------------------------------------
//						SUBSCRIBE FORM MAILCHIMP INTEGRATIONS SCRIPT
//------------------------------------------------------------------------------------		
    $('#subscribe_form').submit(function() {
        $('.error').hide();
        $('.error').fadeIn();
        // submit the form
        if($(this).valid()){
            $('#subscribe_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function(data) {
                    $('#subscribe_submit').button('reset');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-envelope-open"></i>' + data);
					$('#modalMessage').modal('show');
					
                },
                error: function() {
                    $('#subscribe_submit').button('reset');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!');
					$('#modalMessage').modal('show');
					
                }
            });
        }
        return false; 
    });
	  
	  
	  
	  
//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		  
    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        messages: {
            name: "What's your name?",
            message: "Type your message",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   




//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------	
	
    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                    $('#contact_submit').button('reset');
					$('#modalContact').modal('hide');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-envelope-open"></i>Well done!<br>Your message has been successfully sent!');
					$('#modalMessage').modal('show');
                },
                error: function() {
                    $('#contact_submit').button('reset');
					$('#modalContact').modal('hide');
					
					//Use modal popups to display messages
					$('#modalMessage .modal-title').html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!');
					$('#modalMessage').modal('show');
                }
            });
        } else {
            $('#contact_submit').button('reset')
        }
        return false; 
    });	    	  
    
    
    var odate = new Date();
    var ofirstDay= new Date(2016,6,10,0,0,0)
    var otime = parseInt((odate.getTime() - ofirstDay.getTime())/(1000 * 60 * 60 * 24)) 
    var oday = odate.getDay();
    switch(oday){
    		case 1 : oday="一" 
    		break;
    		case 2 : oday="二" 
    		break;
    		case 3 : oday="三" 
    		break;
    		case 4 : oday="四" 
    		break;
    		case 5 : oday="五" 
    		break;
    		case 6 : oday="六" 
    		break;
    		default : oday="天" 
    		break;
    }
    $(".giant-title span").text((odate.getMonth()+1)+"-"+odate.getDate()+"   星期"+oday)
    $(".giant-title b").text("来到上海的第"+otime+"天")
	
});
