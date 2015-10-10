$(document).ready(function(){
	
    
    var siteurl = 'http://localhost/dawarat/js/';
    var siteurl_app = siteurl+'app/';
    
    $(".js_header_courses").click(function() {

        $('.loading').show();
        $('.data').hide();
        $('.no_network').hide();
        
        $.ajax({
            method: "POST",
            url: siteurl_app+'courses',
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    $("body").on("click",".js_course", function(){
        
        var id = $(this).attr('id');
        
        if ( $(this).attr('header_title')!='' ){
            $('.app_name').html($(this).attr('header_title'));
        }
        
        $('.loading').show();
        $('.data').hide();
        $('.no_network').hide();
        
        
        $.ajax({
            url: siteurl_app+'course',
            method: "POST",
            data: { id : id },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        
        return false;
    });
    $("body").on("click",".js_course_sub", function(){
		
        var btn = $(this);
		var course_id = $('.js_course').val();
		var name = $('.js_name').val();
		var email = $('.js_email').val();
		var mobile = $('.js_mobile').val();
		var country = $('.js_country').val();
		var city = $('.js_city_v').val();
		var sex = $('.js_sex').val();
		
		if ( name=='' ){
			alert('المرجو إدخال الإسم الكامل');
		}else if( email=='' ){
			alert('المرجو إدخال بريدك الإلكتروني');
		}else if( country=='' ){
			alert('المرجو تحديد الدولة');
		}else if( city==''){
			alert('المرجو تحديد المدينة'+city);
		}else if( sex=='' ){
			alert('المرجو تحديد الجنس');
		}else{
			
			$.ajax({
                url: siteurl_app+'course_subscribe',
                method: "POST",
                data: { course_id:course_id, 
                        name:name, 
                        email:email, 
                        mobile:mobile, 
                        country:country, 
                        city:city, 
                        sex:sex  },
                timeout: 10000,
                error: function(jqXHR) { 
                    if(jqXHR.status==0) {
                        alert("لا يوجد اتصال بالانترنت !");
                    }
                },
                success: function(data) {
                    var obj = jQuery.parseJSON( data );

                    if ( obj.success==1 ){
                        $('.js_sub_form input').val('');
                        $('.js_sub_form select').val('');
                    }

                    alert(obj.msg);
                }
            })
		}
        
		return false;
	})
    $("body").on("click",".js_courses_search", function(){
        
        var d = $(this).attr('d');
        var section = $(".js_section").val();
        var country = $(".js_country").val();
        var city = $(".js_city_v").val();
        var paid = $(".js_paid").val();
        var date = $(".js_date").val();
        
        
        $('.data_content').html('');
        $('.js_courses_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.ajax({
            url: siteurl_app+'courses/search/',
            method: "POST",
            data: { 'section':section,'country':country,'city':city,'paid':paid,'date':date },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_courses_search').html('<span style="color:#fff;">إبحث</span>');
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_courses_search').html('<span style="color:#fff;">إبحث</span>');
                $('.data_content').html(data).hide().fadeIn(200);
            }
        })
        
        
        return false;
    })
    $("body").on("click",".js_courses_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var section = $(this).attr('section');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        var paid = $(this).attr('paid');
        var date = $(this).attr('date');
        
        $.ajax({
            url: siteurl_app+'courses/pages/',
            method: "POST",
            data: { 'page_is':page_is,'section':section,'country':country,'city':city,'paid':paid,'date':date },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_courses_pagination').hide();
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_courses_pagination').hide();
                $('.pagination_data').append(data);
            }
        })
        
        return false;
    })
    
    $(".js_header_organizers").click(function() {

        $('.loading').show();
        $('.data').hide();
        $.ajax({
            method: "POST",
            url: siteurl_app+'organizers',
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    $("body").on("click",".js_organizer", function(){
        
        var id = $(this).attr('id');
        
        if ( $(this).attr('header_title')!='' ){
            $('.app_name').html($(this).attr('header_title'));
        }
        
        $('.data').hide();
        $('.loading').show();
        $.ajax({
            url: siteurl_app+'organizer',
            method: "POST",
            data: { id : id },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    $("body").on("click",".js_organizers_search", function(){
        
        var d = $(this).attr('d');
        var country = $(".js_country").val();
        var city = $(".js_city_v").val();
        
        
        $('.data_content').html('');
        $('.js_organizers_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.ajax({
            url: siteurl_app+'organizers/search/',
            method: "POST",
            data: { 'country':country,'city':city },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_organizers_search').html('<span style="color:#fff;">إبحث</span>');
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_organizers_search').html('<span style="color:#fff;">إبحث</span>');
                $('.data_content').html(data).hide().fadeIn(200);
            }
        })
        
        
        return false;
    })
    $("body").on("click",".js_organizers_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        
        $('.js_organizers_pagination').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        $.ajax({
            url: siteurl_app+'organizers/pages/',
            method: "POST",
            data: { 'page_is':page_is,'country':country,'city':city },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_organizers_pagination').hide();
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_organizers_pagination').hide();
                $('.pagination_data').append(data);
            }
        })
        return false;
    })
    
    
    $(".js_header_trainers").click(function() {

        $('.loading').show();
        $('.data').hide();
        $.ajax({
            method: "POST",
            url: siteurl_app+'trainers',
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    $("body").on("click",".js_trainer", function(){
        
        var id = $(this).attr('id');
        
        if ( $(this).attr('header_title')!='' ){
            $('.app_name').html($(this).attr('header_title'));
        }
        
        $('.data').hide();
        $('.loading').show();
        $.ajax({
            url: siteurl_app+'trainer',
            method: "POST",
            data: { id : id },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    $("body").on("click",".js_trainers_search", function(){
        
        var d = $(this).attr('d');
        var country = $(".js_country_").val();
        var city = $(".js_city_v").val();
        var sex = $(".js_sex").val();
        
        $('.data_content').html('');
        $('.js_trainers_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.ajax({
            url: siteurl_app+'trainers/search/',
            method: "POST",
            data: { 'country':country,'city':city,'sex':sex },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_trainers_search').html('<span style="color:#fff;">إبحث</span>');
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_trainers_search').html('<span style="color:#fff;">إبحث</span>');
                $('.data_content').html(data).hide().fadeIn(200);
            }
        })
        return false;
    })
    $("body").on("click",".js_trainers_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        var sex = $(this).attr('sex');
        
        $('.js_trainers_pagination').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        $.ajax({
            url: siteurl_app+'trainers/pages/',
            method: "POST",
            data: { 'page_is':page_is,'country':country,'city':city,'sex':sex },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_trainers_pagination').hide();
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_trainers_pagination').hide();
                $('.pagination_data').append(data);
            }
        })
        return false;
    })
        
    $(".js_header_training_rooms").click(function() {

        $('.loading').show();
        $('.data').hide();
        $.ajax({
            method: "POST",
            url: siteurl_app+'training_rooms',
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    $("body").on("click",".js_training_room", function(){
        
        var id = $(this).attr('id');
        
        if ( $(this).attr('header_title')!='' ){
            $('.app_name').html($(this).attr('header_title'));
        }
        
        $('.data').hide();
        $('.loading').show();
        $.ajax({
            url: siteurl_app+'training_room',
            method: "POST",
            data: { id : id },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    $("body").on("click",".js_training_rooms_search", function(){
        
        var d = $(this).attr('d');
        var country = $(".js_country").val();
        var city = $(".js_city_v").val();
        
        $('.data_content').html('');
        $('.js_training_rooms_search').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        
        $.ajax({
            url: siteurl_app+'training_rooms/search/',
            method: "POST",
            data: { 'country':country,'city':city },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_training_rooms_search').html('<span style="color:#fff;">إبحث</span>');
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_training_rooms_search').html('<span style="color:#fff;">إبحث</span>');
                $('.data_content').html(data).hide().fadeIn(200);
            }
        })
        return false;
    })
    $("body").on("click",".js_training_rooms_pagination", function(){
        
        var t = $(this);
        
        var d = $(this).attr('d');
        var page_is = $(this).attr('page_is');
        var country = $(this).attr('country');
        var city = $(this).attr('city');
        
        $('.js_training_rooms_pagination').html('<span style="color:#fff;">المرجو الانتظار...</span>');
        $.ajax({
            url: siteurl_app+'training_rooms/pages/',
            method: "POST",
            data: { 'page_is':page_is,'country':country,'city':city },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.js_training_rooms_pagination').hide();
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_training_rooms_pagination').hide();
                $('.pagination_data').append(data);
            }
        })
        return false;
    })
    
    $("body").on("click",".js_tabs", function(){
        
        var d = $(this).attr('d');
        var video = $("#playerid").attr("d");
        
        if ( d==1 ){
            $('.js_img').show();
        }
        else{
            $('.js_img').hide();
        }
        
        
        if ( d==3 ){
            $("#playerid").attr("src","");
            $("#playerid").attr("src",video);
        }
        else{
            $("#playerid").attr("src","");
        }
        
        
        $('.js_tabs').removeClass('active');
        $(this).addClass('active');
        

        $('.tabs_page').slideUp(400).hide(1000);
        $('.js_tabs_p_'+d).slideDown(600);


    })
    $("body").on("change",".js_country", function(){
		
        var country = $(this).val();
		
		$('.js_city select').addClass('ajax_loader_small');
		
		$.ajax({
            url: siteurl+'city',
            method: "POST",
            data: { country:country },
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    alert("لا يوجد اتصال بالانترنت !");
                }
            },
            success: function(data) {
                $('.js_city').html(data);
            }
        })
	});
    
    $(".js_header_contact_us").click(function() {
        
        $('.data').hide();
        $('.loading').show();
        $.ajax({
            method: "POST",
            url: siteurl_app+'contact_us',
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
    
	$(".js_header_register").click(function() {
        
        $('.data').hide();
        $('.loading').show();
        $.ajax({
            method: "POST",
            url: siteurl_app+'register',
            timeout: 10000,
            error: function(jqXHR) { 
                if(jqXHR.status==0) {
                    $('.loading').hide();
                    $('.no_network').show();
                }
            },
            success: function(data) {
                $('.loading').hide();
                $('.data').html(data).fadeIn(200);
            }
        })
        return false;
    });
	$("body").on("change",".js_membership", function(){
		if ( $(this).val()==1 ){
			$('.js_conditions').show();
		}else{
			$('.js_conditions').hide();
		}
	})
	$("body").on("click",".js_register_send", function(){
        
        var name = $('.js_name').val();
        var email = $('.js_email').val();
        var mobile = $('.js_mobile').val();
        var membership = $('.js_membership').val();
        var accept = $('.js_accept').val();
        
		if ( name=='' ){
			alert('المرجو إدخال الإسم الكامل');
		}else if( email=='' ){
			alert('المرجو إدخال بريدك الإلكتروني');
		}else if( membership=='' ){
			alert('المرجو تحديد نوع العضوية');
		}
		else{
			
			$.ajax({
                url: siteurl_app+'register_send',
                method: "POST",
                data: { 'name':name, 
                        'email':email, 
                        'mobile':mobile, 
                        'membership':membership,
                        'accept':accept },
                timeout: 10000,
                error: function(jqXHR) { 
                    if(jqXHR.status==0) {
                        alert("لا يوجد اتصال بالانترنت !");
                    }
                },
                success: function(data) {
                    var obj = jQuery.parseJSON( data );
                
                    if ( obj.success==1 ){
                        $('.js_sub_form input').val('');
                        $('.js_sub_form select').val('');
                    }

                    $('.js_msg').html(obj.msg);
                }
            })
		}
        return false;
    });
	$("body").on("click",".close", function(){
		$('.js_msg').html('');
	})
	$("body").on("click",".js_date_name", function(){
		$('.js_date_name').hide();
		$('.js_date').show();
	})
	
});



















