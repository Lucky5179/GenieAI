;(function ($) {

    "use strict";
    
    var pxl_scroll_top;
    var pxl_window_height;
    var pxl_window_width;
    var pxl_scroll_status = '';
    var pxl_last_scroll_top = 0;
    var pxl_post_slip = false;

    $(window).on('load', function () {
        $(".pxl-loader").addClass("is-loaded");
        $('.pxl-swiper-slider, .pxl-header-mobile-elementor').css('opacity', '1');
        $('.pxl-gallery-scroll').parents('body').addClass('body-overflow').addClass('body-visible-sm');
        pxl_window_width = $(window).width();
        pxl_window_height = $(window).height();
        aimo_header_sticky();
        aimo_header_mobile();
        aimo_scroll_to_top();
        aimo_footer_fixed();
        aimo_shop_quantity();
        aimo_submenu_responsive();
        aimo_panel_anchor_toggle();
        aimo_post_grid();
        aimo_header_left_scroll();
    });

    $(window).on('scroll', function () {
        pxl_scroll_top = $(window).scrollTop();
        pxl_window_height = $(window).height();
        pxl_window_width = $(window).width();
        if (pxl_scroll_top < pxl_last_scroll_top) {
            pxl_scroll_status = 'up';
        } else {
            pxl_scroll_status = 'down';
        }
        pxl_last_scroll_top = pxl_scroll_top;
        aimo_header_sticky();
        aimo_scroll_to_top();
        aimo_footer_fixed();
        aimo_ptitle_scroll_opacity();
        aimo_header_left_scroll();
        if (pxl_scroll_top < 100) {
            $('.elementor > .pin-spacer').removeClass('scroll-top-active');
        }
    });

    $(window).on('resize', function () {
        pxl_window_height = $(window).height();
        pxl_window_width = $(window).width();
        aimo_submenu_responsive();
        aimo_header_mobile();
        aimo_post_grid();
    });

    $(document).ready(function () {
        aimo_el_parallax();
        aimo_backtotop_progess_bar();
        aimo_type_file_upload();
        aimo_zoom_point();
        // Custom Dots Slider Revolution
        setTimeout(function() {
            $('.tp-bullets.theme-style2').append('<span class="pxl-revslider-arrow-prev"></span><span class="pxl-revslider-arrow-next"></span>');
            $('.tp-bullets.theme-style2').parent().find('.tparrows').addClass('pxl-revslider-arrow-hide');

            $('.revslider-initialised').each(function () {
                $(this).find('.pxl-revslider-arrow-prev').on('click', function () {
                    $(this).parents('.revslider-initialised').find('.tp-leftarrow').trigger('click');
                });
                $(this).find('.pxl-revslider-arrow-next').on('click', function () {
                    $(this).parents('.revslider-initialised').find('.tp-rightarrow').trigger('click');
                });
            });

        }, 500);

        // Deactive Link
        $('.deactive-click a').on("click", function (e) {
            e.preventDefault();
        });

        /* Start Menu Mobile */
        $('.pxl-header-menu li.menu-item-has-children').append('<span class="pxl-menu-toggle"></span>');
        $('.pxl-menu-toggle').on('click', function () {
            if( $(this).hasClass('active')){
                $(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();    
            }else{
                $(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                $(this).toggleClass('active');
                $(this).parent().find('> .sub-menu').toggleClass('active');
                $(this).parent().find('> .sub-menu').slideToggle();
            }      
        });
    
        $("#pxl-nav-mobile, .pxl-anchor-mobile-menu").on('click', function () {
            $(this).toggleClass('active');
            $('body').toggleClass('body-overflow');
            $('.pxl-header-menu').toggleClass('active');
        });

        $(".pxl-menu-close, .pxl-header-menu-backdrop, #pxl-header-mobile .pxl-menu-primary a.is-one-page").on('click', function () {
            $(this).parents('.pxl-header-main').find('.pxl-header-menu').removeClass('active');
            $('#pxl-nav-mobile').removeClass('active');
            $('body').toggleClass('body-overflow');
        });
        /* End Menu Mobile */

        /* Menu Vertical */
        $('.pxl-nav-vertical li.menu-item-has-children > a').append('<span class="pxl-arrow-toggle"><i class="flaticon-right-arrow"></i></span>');
        $('.pxl-nav-vertical li.menu-item-has-children > a').on('click', function () {
            if( $(this).hasClass('active')){
                $(this).next().toggleClass('active').slideToggle(); 
            }else{
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                $(this).closest('ul').find('a.active').toggleClass('active');
                $(this).find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).toggleClass('active');
                $(this).next().toggleClass('active').slideToggle();
            }   
        });
        /*cricle svg*/
        $('.pxl-circle-svg svg').each(function() {
            var linearGradient = $(this).find('.linear-dot1');
            if (linearGradient.length > 0) {
                var linearGradientId = linearGradient.attr('id');
            }
            var linearGradient1 = $(this).find('.linear-dot2');
            if (linearGradient1.length > 0) {
              var linearGradientId1 = linearGradient1.attr('id');
            }
            var linearGradient2 = $(this).find('.linear-dot3');
            if (linearGradient2.length > 0) {
                var linearGradientId2 = linearGradient2.attr('id');
              }
          aimo_circle_svg(this,linearGradientId,linearGradientId1,linearGradientId2);
        });
        /* Menu Hidden Sidebar Popup */
        $('.pxl-menu-hidden-sidebar li.menu-item-has-children > a').append('<span class="pxl-arrow-toggle"><i class="flaticon-right-arrow"></i></span>');
        $('.pxl-menu-hidden-sidebar li.menu-item-has-children > a').on('click', function () {
            if( $(this).hasClass('active')){
                $(this).next().toggleClass('active').slideToggle(); 
            }else{
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                $(this).closest('ul').find('a.active').toggleClass('active');
                $(this).find('.pxl-menu-toggle.active').toggleClass('active');
                $(this).toggleClass('active');
                $(this).next().toggleClass('active').slideToggle();
            }   
        });

        $('.pxl-menu-hidden-sidebar .pxl-menu-button').on('click', function () {
            $(this).parents('.pxl-menu-hidden-sidebar').toggleClass('active');
            $(this).parents('.pxl-menu-hidden-sidebar').removeClass('boxOut');
            $(this).parents('body').toggleClass('body-overflow');
        });
        $('.pxl-menu-popup-overlay').on('click', function () {
            $(this).parent().removeClass('active');
            $(this).parent().addClass('boxOut');
            $(this).parents('body').removeClass('body-overflow');
        });
        $('.pxl-menu-popup-close, .pxl-menu-hidden-sidebar .pxl-menu-hidden a.is-one-page').on('click', function () {
            $(this).parents('.pxl-menu-hidden-sidebar').removeClass('active');
            $(this).parents('.pxl-menu-hidden-sidebar').addClass('boxOut');
            $(this).parents('body').removeClass('body-overflow');
        });


        /* Mega Menu Max Height */
        var m_h_mega = $('li.pxl-megamenu > .sub-menu > .pxl-mega-menu-elementor').outerHeight();
        var w_h_mega = $(window).height();
        var w_h_mega_css = w_h_mega - 120;
        if(m_h_mega > w_h_mega) {
            $('li.pxl-megamenu > .sub-menu > .pxl-mega-menu-elementor').css('max-height', w_h_mega_css + 'px');
            $('li.pxl-megamenu > .sub-menu > .pxl-mega-menu-elementor').css('overflow-x', 'scroll');
        }
        /* End Mega Menu Max Height */

        /* Scroll To Top */
        $('.pxl-scroll-top').on('click', function () {
            $('html, body').animate({scrollTop: 0}, 1200);
            $(this).parents('.pxl-wapper').find('.elementor > .pin-spacer').addClass('scroll-top-active');
            return false;
        });
        // CSS transition for smooth effect list modern
        $(".pxl-list-modern1 .pxl--item")
        .on("mouseenter", function() {
            $(".pxl-list-modern1 .pxl--item").removeClass("active"); 
            $(this).addClass("active"); 
            $(".pxl-list-modern1 .pxl-list--images .pxl-list--featured").removeClass('active');
            var selected_item = $(this).attr("data-image");
            $(selected_item).addClass('active').removeClass('non-active');
        });
    
        // CSS transition for smooth effect
        $(".pxl-list-modern1 .pxl--item, .pxl-list-modern1 .pxl-list--images .pxl-list--featured")
            .css("transition", "all 0.3s ease");
        
            
        /* Login */
        $('.pxl-user-popup').on('click', function (e) {
            if (e.target === this) { 
                $(this).removeClass('open').addClass('remove');
                $('body').removeClass('ov-hidden');
            }
        });              
        $('.pxl-modal-close').on('click', function () {
            $(this).parent().removeClass('open').addClass('remove');
            $(this).parents('body').removeClass('ov-hidden');
        });
        $('.btn-sign-up').on('click', function () {
            $('.pxl-user-register').addClass('u-open').removeClass('u-close');
            $('.pxl-user-login').addClass('u-close').removeClass('u-open');
        });
        $('.btn-sign-in').on('click', function () {
            $('.pxl-user-register').addClass('u-close').removeClass('u-open');
            $('.pxl-user-login').addClass('u-open').removeClass('u-close');
        });
        $('.pxl-user-have-an-account').on('click', function () {
            $(this).parents('.pxl-modal-content').find('.pxl-user-register').addClass('u-close').removeClass('u-open');
            $(this).parents('.pxl-modal-content').find('.pxl-user-login').addClass('u-open').removeClass('u-close');
        });
        $('.h-btn-user').on('click', function () {
            $('.pxl-user-popup').addClass('open').removeClass('remove');
            $(this).find('.pxl-user-account').toggleClass('active');
        });

        /* Animate Time Delay */
        $('.pxl-grid-masonry').each(function () {
            var eltime = 80;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl-grid-item > .wow').each(function (index, obj) {
                $(this).css('animation-delay', eltime + 'ms');
                if (_elt === index) {
                    eltime = 80;
                    _elt = _elt + elt_inner;
                } else {
                    eltime = eltime + 80;
                }
            });
        });

        $('.btn-text-nina').each(function () {
            var eltime = 0.045;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl--btn-text > span').each(function (index, obj) {
                $(this).css('transition-delay', eltime + 's');
                eltime = eltime + 0.045;
            });
        });

        $('.btn-text-nanuk').each(function () {
            var eltime = 0.05;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl--btn-text > span').each(function (index, obj) {
                $(this).css('animation-delay', eltime + 's');
                eltime = eltime + 0.05;
            });
        });

        $('.btn-text-smoke').each(function () {
            var eltime = 0.05;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('> .pxl--btn-text > span > span > span').each(function (index, obj) {
                $(this).css('--d', eltime + 's');
                eltime = eltime + 0.05;
            });
        });

        $('.btn-text-reverse .pxl-text--front, .btn-text-reverse .pxl-text--back').each(function () {
            var eltime = 0.05;
            var elt_inner = $(this).children().length;
            var _elt = elt_inner - 1;
            $(this).find('.pxl-text--inner > span').each(function (index, obj) {
                $(this).css('transition-delay', eltime + 's');
                eltime = eltime + 0.05;
            });
        });
        
        /* End Animate Time Delay */

        /* Lightbox Popup */
        setTimeout(function() {
            $('.pxl-action-popup').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }, 300);

        $('.pxl-gallery-lightbox').each(function () {
            $(this).magnificPopup({
                delegate: 'a.lightbox',
                type: 'image',
                gallery: {
                    enabled: true
                },
                mainClass: 'mfp-fade',
            });
        });

        /* Page Title Parallax */
        if($('#pxl-page-title-default').hasClass('pxl--parallax')) {
            $(this).stellar();
        }

        /* Cart Sidebar Popup */
        $(".pxl-cart-sidebar-button").on('click', function () {
            $('body').addClass('body-overflow');
            $('#pxl-cart-sidebar').addClass('active');
        });
        $("#pxl-cart-sidebar .pxl-popup--overlay, #pxl-cart-sidebar .pxl-item--close, #pxl-cart-sidebar .pxl-popup--close2").on('click', function () {
            $('body').removeClass('body-overflow');
            $('#pxl-cart-sidebar').removeClass('active');
        });

        /* Start Icon Bounce */
        var boxEls = $('.el-bounce, .pxl-image-effect1, .el-effect-zigzag');
        $.each(boxEls, function(boxIndex, boxEl) {
            loopToggleClass(boxEl, 'active');
        });

        function loopToggleClass(el, toggleClass) {
            el = $(el);
            let counter = 0;
            if (el.hasClass(toggleClass)) {
                waitFor(function () {
                    counter++;
                    return counter == 2;
                }, function () {
                    counter = 0;
                    el.removeClass(toggleClass);
                    loopToggleClass(el, toggleClass);
                }, 'Deactivate', 1000);
            } else {
                waitFor(function () {
                    counter++;
                    return counter == 3;
                }, function () {
                    counter = 0;
                    el.addClass(toggleClass);
                    loopToggleClass(el, toggleClass);
                }, 'Activate', 1000);
            }
        }

        function waitFor(condition, callback, message, time) {
            if (message == null || message == '' || typeof message == 'undefined') {
                message = 'Timeout';
            }
            if (time == null || time == '' || typeof time == 'undefined') {
                time = 100;
            }
            var cond = condition();
            if (cond) {
                callback();
            } else {
                setTimeout(function() {
                    waitFor(condition, callback, message, time);
                }, time);
            }
        }
        /* End Icon Bounce */
        /* Copy Link Site */
        const copyLinkElements = document.querySelectorAll('.btn-copy-link');

        copyLinkElements.forEach(function(element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                const link = window.location.href;
                navigator.clipboard.writeText(link).then(function() {
                    alert('The link has been copied!');
                }).catch(function(error) {
                    console.error('Error copying link: ', error);
                });
            });
        });
        /* Post Feature - Image Swiper */
        const postfeatureSlider = $(".pxl-image--swiper");
        postfeatureSlider
        .slick({
            dots: false,
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            vertical: false,
        });
        postfeatureSlider.on('wheel', (function(e) {
            e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
                $(this).slick('slickNext');
            } else {
                $(this).slick('slickPrev');
            }
        }));

        $(".pxl-swiper-arrow-prev").on(function () {
            $(".pxl-image--swiper").slick("slickPrev");
        });

        $(".pxl-swiper-arrow-next").on(function () {
            $(".pxl-image--swiper").slick("slickNext");
        });
        
        /* Image Effect */
        if($('.pxl-image-tilt').length){
            $('.pxl-image-tilt').parents('.elementor-top-section').addClass('pxl-image-tilt-active');
            $('.pxl-image-tilt').each(function () {
                var pxl_maxtilt = $(this).data('maxtilt'),
                    pxl_speedtilt = $(this).data('speedtilt'),
                    pxl_perspectivetilt = $(this).data('perspectivetilt');
                VanillaTilt.init(this, {
                    max: pxl_maxtilt,
                    speed: pxl_speedtilt,
                    perspective: pxl_perspectivetilt
                });
            });
        }

        /* Select Theme Style */
        $('.wpcf7-select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;
          
            $this.addClass('pxl-select-hidden'); 
            $this.wrap('<div class="pxl-select"></div>');
            $this.after('<div class="pxl-select-higthlight"></div>');

            var $styledSelect = $this.next('div.pxl-select-higthlight');
            $styledSelect.text($this.children('option').eq(0).text());
          
            var $list = $('<ul />', {
                'class': 'pxl-select-options'
            }).insertAfter($styledSelect);
          
            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }
          
            var $listItems = $list.children('li');
          
            $styledSelect.on('click', function(e) {
                e.stopPropagation();
                $('div.pxl-select-higthlight.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.pxl-select-options').addClass('pxl-select-lists-hide');
                });
                $(this).toggleClass('active');
            });
          
            $listItems.on('click', function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
            });
          
            $(document).on('click', function() {
                $styledSelect.removeClass('active');
            });

        });
        $('.pxl-select-higthlight').each(function () {
            $(this).on(function () {
                $(this).parents('.elementor-element').find('.pxl-select-higthlight').removeClass('active');
                $(this).addClass('active');
            });
        });
        /* Nice Select */
        $('.woocommerce-ordering .orderby, #pxl-sidebar-area select, .variations_form.cart .variations select, .pxl-open-table select, .pxl-nice-select').each(function () {
            $(this).niceSelect();
        });

        /* Typewriter */
        if($('.pxl-title--typewriter').length) {
            function typewriterOut(elements, callback)
            {
                if (elements.length){
                    elements.eq(0).addClass('is-active');
                    elements.eq(0).delay( 3000 );
                    elements.eq(0).removeClass('is-active');
                    typewriterOut(elements.slice(1), callback);
                }
                else {
                    callback();
                }
            }

            function typewriterIn(elements, callback)
            {
                if (elements.length){
                    elements.eq(0).addClass('is-active');
                    elements.eq(0).delay( 3000 ).slideDown(3000, function(){
                        elements.eq(0).removeClass('is-active');
                        typewriterIn(elements.slice(1), callback);
                    });
                }
                else {
                    callback();
                }
            }

            function typewriterInfinite(){
                typewriterOut($('.pxl-title--typewriter .pxl-item--text'), function(){ 
                    typewriterIn($('.pxl-title--typewriter .pxl-item--text'), function(){
                        typewriterInfinite();
                    });
                });
            }
            $(function(){
                typewriterInfinite();
            });
        }
        /* End Typewriter */

        /* Section Particles */      
        setTimeout(function() {
            $(".pxl-row-particles").each(function() {
                particlesJS($(this).attr('id'), {
                  "particles": {
                    "number": {
                        "value": $(this).data('number'),
                    },
                    "color": {
                        "value": $(this).data('color')
                    },
                    "shape": {
                        "type": "circle",
                    },
                    "size": {
                        "value": $(this).data('size'),
                        "random": $(this).data('size-random'),
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": $(this).data('move-direction'),
                        "random": true,
                        "out_mode": "out",
                    }
                  },
                  "retina_detect": true
                });
            });
        }, 400);

        /* Get checked input - Mailchimpp */
        $('.mc4wp-form input:checkbox').change(function(){
            if($(this).is(":checked")) {
                $('.mc4wp-form').addClass("pxl-input-checked");
            } else {
                $('.mc4wp-form').removeClass("pxl-input-checked");
            }
        });

        /* Scroll to content */
        $('.pxl-link-to-section .btn').on('click', function(e) {
            var id_scroll = $(this).attr('href');
            var offsetScroll = $('.pxl-header-elementor-sticky').outerHeight();
            e.preventDefault();
            $("html, body").animate({ scrollTop: $(id_scroll).offset().top - offsetScroll }, 600);
        });

        // Hover Overlay Effect
        // $('.pxl-overlay-shake').mousemove(function(event){ 
        //     var offset = $(this).offset();
        //     var W = $(this).outerWidth();
        //     var X = (event.pageX - offset.left);
        //     var Y = (event.pageY - offset.top);
        //     $(this).find('.pxl-overlay--color').css({
        //         'top' : + Y + 'px',
        //         'left' : + X + 'px'
        //     });
        // });

        // Hover Portfolio Effect
        $(".pxl-portfolio-style1 .pxl-post--inner").on("mouseenter", function () {
            $(this).addClass("active-hover").removeClass("none-hover");
        });
        
        $(".pxl-portfolio-style1 .pxl-post--inner").on("mouseleave", function () {
            $(this).removeClass("active-hover").addClass("none-hover");
        });        

        /* Custom One Page by theme */
        if($('.pxl-link-scroll1').length) {
            $('.pxl-item--onepage').on('click', function (e) {
                var _this = $(this);
                var _link = $(this).attr('href');
                var _id_data = e.currentTarget.hash;
                var _offset;
                var _data_offset = $(this).attr('data-onepage-offset');
                if(_data_offset) {
                    _offset = _data_offset;
                } else {
                    _offset = 0;
                }
                if ($(_id_data).length === 1) {
                    var _target = $(_id_data);
                    $('.pxl-onepage-active').removeClass('pxl-onepage-active');
                    _this.addClass('pxl-onepage-active');
                    $('html, body').stop().animate({ scrollTop: _target.offset().top - _offset }, 1000);   
                    return false;
                } else {
                    window.location.href = _link;
                }
                return false;
            });
            $.each($('.pxl-item--onepage'), function (index, item) {
                var target = $(item).attr('href');
                var el =  $(target);
                var _data_offset = $(item).attr('data-onepage-offset');
                var waypoint = new Waypoint({
                    element: el[0],
                    handler: function(direction) {
                        if(direction === 'down'){
                            $('.pxl-onepage-active').removeClass('pxl-onepage-active');
                            $(item).addClass('pxl-onepage-active');
                        }
                        else if(direction === 'up'){
                            var prev = $(item).parent().prev().find('.pxl-item--onepage');
                            $(item).removeClass('pxl-onepage-active');
                            if(prev.length > 0)
                                prev.addClass('pxl-onepage-active');
                        }
                    },
                    offset: _data_offset,
                });
            });
        }

        /* Item Hover Active */
        $('.pxl-hover-item').each(function () {
            $(this).on(function () {
                $(this).parent('.pxl-hover-wrap').find('.pxl-hover-item').removeClass('pxl-active');
                $(this).addClass('pxl-active');
            });
        });

        // Active Mega Menu Hover
        $('li.pxl-megamenu').on('mouseenter', function() {
            $(this).parents('.elementor-section').addClass('section-mega-active');
        }).on('mouseleave', function() {
            $(this).parents('.elementor-section').removeClass('section-mega-active');
        });


    });
    
    jQuery(document).ajaxComplete(function(event, xhr, settings){
        aimo_shop_quantity();
    });

    jQuery( document ).on( 'updated_wc_div', function() {
        aimo_shop_quantity();
    } );
    /*svg */
    function aimo_circle_svg(element, linearGradientId, linearGradientId1, linearGradientId2) {
        var activeWidth = window.innerWidth || document.documentElement.clientWidth;
        if (activeWidth <= 1200) {
            return;
        }
    
        var svgEl = Snap(element);
        if (!svgEl) {
            return;
        }
    
        var size = 16.5;
    
        var filter = svgEl.filter(Snap.filter.shadow(0, 4, 30, 'rgba(0, 255, 255, 0.6)')).addClass('filter1');
        var filter1 = svgEl.filter(Snap.filter.shadow(0, 4, 30, 'rgba(0, 255, 255, 0.1)')).addClass('filter2');
        var filter2 = svgEl.filter(Snap.filter.shadow(0, 4, 30, 'rgba(0, 255, 255, 0.3)')).addClass('filter3');
    
        var circle1 = svgEl.circle(0, 0, size * 1);
        circle1.attr({ id: 'circle1', class: 'dot', fill: 'url(#' + linearGradientId + ')' });
        circle1.attr({ filter: filter });

        var circle2 = svgEl.circle(0, 0, size - 7.5);
        circle2.attr({ id: 'circle2', class: 'dot', fill: 'url(#' + linearGradientId1 + ')' });
        circle2.attr({ filter: filter1 });

        var circle3 = svgEl.circle(0, 0, size - 8);
        circle3.attr({ id: 'circle3', class: 'dot', fill: 'url(#' + linearGradientId2 + ')' });
        circle3.attr({ filter: filter2 });

        var dotEl1 = svgEl.select('#circle1');
        var dotEl2 = svgEl.select('#circle2');
        var dotEl3 = svgEl.select('#circle3');
 
        var motionPath1 = svgEl.select('path').getTotalLength();
        var motionPath2 = svgEl.select('path').getTotalLength();
        var motionPath3 = svgEl.select('path').getTotalLength();
    
        dotEl1.transform('t0,0');
        dotEl2.transform('t0,0');
        dotEl3.transform('t0,0');
    
        var carouselInnerEl = $(".pxl-carousel-inner,.pxl-swiper-arrow");
        var animation1, animation2, animation3;
        var isHovered = false;

        function animateDot(dotEl, motionPath, forward, duration, callback) {
            var fromVal = forward ? 0 : motionPath;
            var toVal = forward ? motionPath : 0;
    
            return Snap.animate(fromVal, toVal, function (val) {
                var point = svgEl.select("path").getPointAtLength(val);
                dotEl.attr({ cx: point.x, cy: point.y });
            }, duration, callback);
        }
    
        function animateDot1(forward) {
            animation1 = animateDot(dotEl1, motionPath1, forward, 15000, function () {
                if (!isHovered) animateDot1(!forward);
            });
        }
    
        function animateDot2(forward) {
            animation2 = animateDot(dotEl2, motionPath2, forward, 15000, function () {
                if (!isHovered) animateDot2(!forward);
            });
        }
    
        function animateDot3(forward) {
            animation3 = animateDot(dotEl3, motionPath3, forward, 18000, function () {
                if (!isHovered) animateDot3(!forward);
            });
        }

        animateDot1(true);
        animateDot2(false);
        animateDot3(true);
    }
    
    ///
    /* Header Sticky */
    function aimo_header_sticky() {
        if($('#pxl-header-elementor').hasClass('is-sticky')) {
            if (pxl_scroll_top > 100) {
                $('.pxl-header-elementor-sticky.pxl-sticky-stb').addClass('pxl-header-fixed');
                $('#pxl-header-mobile').addClass('pxl-header-mobile-fixed');
            } else {
                $('.pxl-header-elementor-sticky.pxl-sticky-stb').removeClass('pxl-header-fixed');
                $('#pxl-header-mobile').removeClass('pxl-header-mobile-fixed');
            }

            if (pxl_scroll_status == 'up' && pxl_scroll_top > 100) {
                $('.pxl-header-elementor-sticky.pxl-sticky-stt').addClass('pxl-header-fixed');
            } else {
                $('.pxl-header-elementor-sticky.pxl-sticky-stt').removeClass('pxl-header-fixed');
            }
        }

        $('.pxl-header-elementor-sticky').parents('body').addClass('pxl-header-sticky');
    }
    
    /* Header Left Scroll */
    function aimo_header_left_scroll() {
        if($('.px-header--left_sidebar').hasClass('px-header-sidebar-style2')) {
            var h_section_top = $('.h5-section-top').outerHeight() + 50;
            console.log(h_section_top);
            if (pxl_scroll_top > h_section_top) {
                $('.px-header--left_sidebar').addClass('px-header--left_shadow');
            } else {
                $('.px-header--left_sidebar').removeClass('px-header--left_shadow');
            }
        }
    }

    /* Header Mobile */
    function aimo_header_mobile() {
        var h_header_mobile = $('#pxl-header-elementor').outerHeight();
        if(pxl_window_width < 1199) {
            $('#pxl-header-elementor').css('min-height', h_header_mobile + 'px');
        }
    }

    /* Scroll To Top */
    function aimo_scroll_to_top() {
        if (pxl_scroll_top < pxl_window_height) {
            $('.pxl-scroll-top').addClass('pxl-off').removeClass('pxl-on');
        }
        if (pxl_scroll_top > pxl_window_height) {
            $('.pxl-scroll-top').addClass('pxl-on').removeClass('pxl-off');
        }
    }

    /* Footer Fixed */
    function aimo_footer_fixed() {
        setTimeout(function(){
            var h_footer = $('.pxl-footer-fixed #pxl-footer-elementor').outerHeight() - 1;
            $('.pxl-footer-fixed #pxl-main').css('margin-bottom', h_footer + 'px');
        }, 600);
    }

    /* WooComerce Quantity */
    function aimo_shop_quantity() {
        "use strict";
        $('#pxl-wapper .quantity').append('<span class="quantity-icon quantity-down pxl-icon--caretdown pxl-icon--minus"></span><span class="quantity-icon quantity-up pxl-icon--caretup pxl-icon--plus"></span>');
        $('.quantity-up').on('click', function () {
            $(this).parents('.quantity').find('input[type="number"]').get(0).stepUp();
            $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
        });
        $('.quantity-down').on('click', function () {
            $(this).parents('.quantity').find('input[type="number"]').get(0).stepDown();
            $(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled');
        });
        $('.quantity-icon').on('click', function () {
            var quantity_number = $(this).parents('.quantity').find('input[type="number"]').val();
            var add_to_cart_button = $(this).parents( ".product, .woocommerce-product-inner" ).find(".add_to_cart_button");
            add_to_cart_button.attr('data-quantity', quantity_number);
            add_to_cart_button.attr("href", "?add-to-cart=" + add_to_cart_button.attr("data-product_id") + "&quantity=" + quantity_number);
        });
        $('.woocommerce-cart-form .actions .button').removeAttr('disabled');
    }

    /* Menu Responsive Dropdown */
    function aimo_submenu_responsive() {
        var $aimo_menu = $('.pxl-header-elementor-main, .pxl-header-elementor-sticky');
        $aimo_menu.find('.pxl-menu-primary li').each(function () {
            var $aimo_submenu = $(this).find('> ul.sub-menu');
            if ($aimo_submenu.length == 1) {
                if ( ($aimo_submenu.offset().left + $aimo_submenu.width() + 0 ) > $(window).width()) {
                    $aimo_submenu.addClass('pxl-sub-reverse');
                }
            }
        });
    }

    function aimo_panel_anchor_toggle(){
        'use strict';
        $(document).on('click','.pxl-anchor-button',function(e){
            e.preventDefault();
            e.stopPropagation();
            var target = $(this).attr('data-target');
            $(target).toggleClass('active');
            $('body').addClass('body-overflow');
            $('.pxl-popup--conent .wow').addClass('animated').removeClass('aniOut');
            $('.pxl-popup--conent .fadeInPopup').removeClass('aniOut');
            if($(target).find('.pxl-search-form').length > 0){
                setTimeout(function(){
                    $(target).find('.pxl-search-form .pxl-search-field').focus();
                },1000);
            }
        });

        $('.pxl-anchor-button').each(function () {
            var t_target = $(this).attr('data-target');
            var t_delay = $(this).attr('data-delay-hover');
            $(t_target).find('.pxl-popup--conent').css('transition-delay', t_delay + 'ms');
            $(t_target).find('.pxl-popup--overlay').css('transition-delay', t_delay + 'ms');
        });

        $(".pxl-hidden-panel-popup .pxl-popup--overlay, .pxl-hidden-panel-popup .pxl-close-popup").on('click', function () {
            $('body').removeClass('body-overflow');
            $('.pxl-hidden-panel-popup').removeClass('active');
            $('.pxl-popup--conent .wow').addClass('aniOut').removeClass('animated');
            $('.pxl-popup--conent .fadeInPopup').addClass('aniOut');
        });

        $(".pxl-button.pxl-atc-popup").on('click', function () {
            $('body').addClass('body-overflow');
            $(this).parents('.pxl-wapper').find('.pxl-page-popup').addClass('active');
        });
        $(".pxl-popup--close").on('click', function () {
            $('body').removeClass('body-overflow');
            $(this).parent().removeClass('active');
        });

        /* Custom Theme Style */
        $('blockquote:not(.pxl-blockquote)').append('<i class="pxl-blockquote-icon flaticon-quote-1 text-gradient"></i>');
    }

    /* Post Grid */
    function aimo_post_grid() {
        setTimeout(function(){
            $('.pxl-item--inner').each(function () {
                var item_w = $(this).outerWidth();
                var item_h = $(this).outerHeight();
                $(this).find('.pxl-item--imgfilter').css('width', item_w + 'px');
                $(this).find('.pxl-item--imgfilter').css('height', item_h + 'px');
            });
        }, 300);
    }

    /* Page Title Scroll Opacity */
    function aimo_ptitle_scroll_opacity() {
        var divs = $('#pxl-page-title-elementor.pxl-scroll-opacity .elementor-widget'),
            limit = $('#pxl-page-title-elementor.pxl-scroll-opacity').outerHeight();
        if (pxl_scroll_top <= limit) {
            divs.css({ 'opacity' : (1 - pxl_scroll_top/limit)});
        }
    }

    /* Preloader Default */
    $.fn.extend({
        jQueryImagesLoaded: function () {
          var $imgs = this.find('img[src!=""]')

          if (!$imgs.length) {
            return $.Deferred()
              .resolve()
              .promise()
          }

          var dfds = []

          $imgs.each(function () {
            var dfd = $.Deferred()
            dfds.push(dfd)
            var img = new Image()
            img.onload = function () {
              dfd.resolve()
            }
            img.onerror = function () {
              dfd.resolve()
            }
            img.src = this.src
          })

          return $.when.apply($, dfds)
        }
    })

    /* Button Parallax */
    function aimo_el_parallax() {
        $('.btn-text-parallax').on('mouseenter', function() {
            $(this).addClass('hovered');
        });
        $('.btn-text-parallax').on('mouseleave', function() {
            $(this).removeClass('hovered');
        });
        $('.btn-text-parallax').on('mousemove', function(e) {
            const bounds = this.getBoundingClientRect();
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height;
            const deltaX = Math.floor((centerX - e.clientX)) * 0.172;
            const deltaY = Math.floor((centerY - e.clientY)) * 0.273;
            $(this).find('.pxl--btn-text').css({
                transform: 'translate3d('+ deltaX * 0.32 +'px, '+ deltaY * 0.32 +'px, 0px)'
            });
            $(this).css({
                transform: 'translate3d('+ deltaX * 0.25 +'px, '+ deltaY * 0.25 +'px, 0px)'
            });
        });

        $('.el-parallax-wrap').each(function () {
            $(this).on('mouseenter', function() {
                $(this).addClass('hovered');
            });

            $(this).on('mouseleave', function() { 
                $(this).removeClass('hovered');
            });

            $(this).on('mousemove', function(e) {
                const bounds = this.getBoundingClientRect();
                const centerX = bounds.left + bounds.width / 2;
                const centerY = bounds.top + bounds.height;
                const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
                const deltaY = Math.floor((centerY - e.clientY)) * 0.333;
                $(this).find('.el-parallax-item').css({
                    transform: 'translate3d('+ deltaX * 0.32 +'px, '+ deltaY * 0.32 +'px, 0px)'
                });
            });
        });

        $('.pxl-hover-parallax').on('mousemove', function(e) {
            const bounds = this.getBoundingClientRect();
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height;
            const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
            const deltaY = Math.floor((centerY - e.clientY)) * 0.333;
            $(this).find('.pxl-item-parallax').css({
                transform: 'translate3d('+ deltaX * 0.32 +'px, '+ deltaY * 0.32 +'px, 0px)'
            });
        });
    }
    
    
    /* Back To Top Progress Bar */
    function aimo_backtotop_progess_bar() {
        if($('.pxl-scroll-top').length > 0) {
            var progressPath = document.querySelector('.pxl-scroll-top path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';      
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);   
            var offset = 50;
            var duration = 550;
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > offset) {
                    $('.pxl-scroll-top').addClass('active-progress');
                } else {
                    $('.pxl-scroll-top').removeClass('active-progress');
                }
            });
        }
    }
    /* Custom Type File Upload*/
    function aimo_type_file_upload() {

        var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
        isIE = /msie/i.test( navigator.userAgent );

        $.fn.pxl_custom_type_file = function() {

            return this.each(function() {

            var $file = $(this).addClass('pxl-file-upload-hidden'),
            $wrap = $('<div class="pxl-file-upload-wrapper">'),
            $button = $('<button type="button" class="pxl-file-upload-button">Choose File</button>'),
            $input = $('<input type="text" class="pxl-file-upload-input" placeholder="No File Choose" />'),
            $label = $('<label class="pxl-file-upload-button" for="'+ $file[0].id +'">Choose File</label>');
            $file.css({
                position: 'absolute',
                opacity: '0',
                visibility: 'hidden'
            });

            $wrap.insertAfter( $file )
            .append( $file, $input, ( isIE ? $label : $button ) );

            $file.attr('tabIndex', -1);
            $button.attr('tabIndex', -1);

            $button.on('click', function () {
                $file.focus().on();
            });

            $file.change(function() {

            var files = [], fileArr, filename;

            if ( multipleSupport ) {
                fileArr = $file[0].files;
                for ( var i = 0, len = fileArr.length; i < len; i++ ) {
                files.push( fileArr[i].name );
                }
                filename = files.join(', ');
            } else {
                filename = $file.val().split('\\').pop();
            }

            $input.val( filename )
                .attr('title', filename)
                .focus();
            });

            $input.on({
                blur: function() { $file.trigger('blur'); },
                keydown: function( e ) {
                if ( e.which === 13 ) {
                    if ( !isIE ) { 
                        $file.trigger('click'); 
                    }
                } else if ( e.which === 8 || e.which === 46 ) {
                    $file.replaceWith( $file = $file.clone( true ) );
                    $file.trigger('change');
                    $input.val('');
                } else if ( e.which === 9 ){
                    return;
                } else {
                        return false;
                    }
                }
            });

            });

        };
        $('.wpcf7-file[type=file]').pxl_custom_type_file();
    }

    // Zoom Point
    function aimo_zoom_point() {
        $(".pxl-zoom-point").each(function () {

            let scaleOffset = $(this).data('offset');
            let scaleAmount = $(this).data('scale-mount');

            function scrollZoom() {
                const images = document.querySelectorAll("[data-scroll-zoom]");
                let scrollPosY = 0;
                scaleAmount = scaleAmount / 100;

                const observerConfig = {
                    rootMargin: "0% 0% 0% 0%",
                    threshold: 0
                };

                images.forEach(image => {
                    let isVisible = false;
                    const observer = new IntersectionObserver((elements, self) => {
                        elements.forEach(element => {
                            isVisible = element.isIntersecting;
                        });
                    }, observerConfig);

                    observer.observe(image);

                    image.style.transform = `scale(${1 + scaleAmount * percentageSeen(image)})`;

                    window.addEventListener("scroll", () => {
                    if (isVisible) {
                        scrollPosY = window.pageYOffset;
                        image.style.transform = `scale(${1 +
                        scaleAmount * percentageSeen(image)})`;
                    }
                    });
                });

                function percentageSeen(element) {
                    const parent = element.parentNode;
                    const viewportHeight = window.innerHeight;
                    const scrollY = window.scrollY;
                    const elPosY = parent.getBoundingClientRect().top + scrollY + scaleOffset;
                    const borderHeight = parseFloat(getComputedStyle(parent).getPropertyValue('border-bottom-width')) + parseFloat(getComputedStyle(element).getPropertyValue('border-top-width'));
                    const elHeight = parent.offsetHeight + borderHeight;

                    if (elPosY > scrollY + viewportHeight) {
                        return 0;
                    } else if (elPosY + elHeight < scrollY) {
                        return 100;
                    } else {
                        const distance = scrollY + viewportHeight - elPosY;
                        let percentage = distance / ((viewportHeight + elHeight) / 100);
                        percentage = Math.round(percentage);

                        return percentage;
                    }
                }
            }

            scrollZoom();

        });
    }
    /* Pricing Hover */
    $('.pxl-pricing1').each(function () {
        $(this).on(function () {
            $(this).parents('.elementor-element').find('.pxl-pricing1').removeClass('is-popular');
            $(this).addClass('is-popular');
        });
    });
    ///img slip hover
    $(document).ready(function() {
        $('.pxl-image-split1 .pxl--item').on('click', function () {
            var parentSection = $(this).closest('.pxl-image-split1');
            parentSection.find('.pxl--item').not(this).removeClass('active');
            $(this).toggleClass('active');
        });
    });
     

    /////
    const buttonClass = '.pxl-icon2 .pxl-item--icon';
    const $button = document.querySelector(buttonClass);

    if ($button) {
        document.addEventListener('DOMContentLoaded', function () {
            gsap.set($button, {
                opacity: 1
            });

            const rotate = gsap.timeline({
                scrollTrigger: {
                    trigger: 'html',
                    scrub: 0.5,
                    start: 'top top',
                    end: '+=10000',
                }
            }).to($button, {
                rotation: 360 * 7,
                duration: 1,
                ease: 'none'
            });
        });
    }

    ///
    $('.riple').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });

    ///////button video cover cursor
    const videoWidget = document.querySelector('.pxl-video-style3 .pxl-video--inner');
    const videoButton = document.querySelector('.btn-video-wrap');

    if (videoWidget && videoButton) {
        const widgetWidth = videoWidget.offsetWidth;
        const widgetHeight = videoWidget.offsetHeight;
        const buttonWidth = videoButton.offsetWidth;
        const buttonHeight = videoButton.offsetHeight;
    
        videoButton.style.transform = `translate(${(widgetWidth - buttonWidth) / 2}px, ${(widgetHeight - buttonHeight) / 2}px)`;
    
        videoWidget.addEventListener('mousemove', (e) => {
            const rect = videoWidget.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const buttonX = Math.min(Math.max(0, mouseX - buttonWidth / 2), widgetWidth - buttonWidth);
            const buttonY = Math.min(Math.max(0, mouseY - buttonHeight / 2), widgetHeight - buttonHeight);
            videoButton.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
        });

        videoWidget.addEventListener('mouseleave', () => {
            videoButton.style.transform = `translate(${(widgetWidth - buttonWidth) / 2}px, ${(widgetHeight - buttonHeight) / 2}px)`;
        });
    }


    
    ///////////////////////////////////////
    // CSS transition for smooth effect process
    $(document).ready(function() {
        $(".pxl-process .pxl-list-modern1 .pxl--item").eq(1).addClass("active"); 
        updateBackgroundHeight();
        startAutoRotate();
    });
    
    let autoRotateInterval; 
    
    function updateBackgroundHeight() {
        var activeHeight = 0;
    
        $(".pxl-process .pxl-list-modern1 .pxl--item").each(function() {
            if ($(this).hasClass('active')) {
                return false;
            }
            activeHeight += $(this).outerHeight(true);
        });
    
        activeHeight += 87;
    
        $(".pxl-process .pxl-bacground-gradien").height(activeHeight);
    }

    function startAutoRotate() {
        let items = $(".pxl-process .pxl-list-modern1 .pxl--item");
        let currentIndex = items.index($(".pxl-process .pxl-list-modern1 .pxl--item.active"));
        const totalItems = items.length;
    
        autoRotateInterval = setInterval(function() {
            items.removeClass("active");
            items.eq(currentIndex).addClass("active"); 
            $(".pxl-process .pxl-list-modern1 .pxl-list--images .pxl-list--featured").removeClass('active');
            var selected_item = items.eq(currentIndex).attr("data-image");
            $(selected_item).addClass('active').removeClass('non-active');
            
            updateBackgroundHeight();
    
            currentIndex = (currentIndex + 1) % totalItems;
        }, 3000); 
    }
    
    $(".pxl-process .pxl-list-modern1 .pxl--item").on("mouseenter", function() {
        clearInterval(autoRotateInterval);
        $(".pxl-process .pxl-list-modern1 .pxl--item").removeClass("active");
        $(this).addClass("active");
    
        $(".pxl-process .pxl-list-modern1 .pxl-list--images .pxl-list--featured").removeClass('active');
        var selected_item = $(this).attr("data-image");
        $(selected_item).addClass('active').removeClass('non-active');
        updateBackgroundHeight();
    });
    
    $(".pxl-process .pxl-list-modern1 .pxl--item").on("mouseleave", function() {
        startAutoRotate();
    });
    

    // CSS transition for smooth effect
    $(".pxl-process .pxl-list-modern1 .pxl--item, .pxl-process .pxl-list-modern1 .pxl-list--images .pxl-list--featured")
    .css("transition", "all 0.3s ease");
    
    
    /*img carousel 4*////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function() {
        if (!document.querySelector(".pxl-image-2d .item")) {
            return;
        }
        gsap.registerPlugin(Draggable, InertiaPlugin);
    
        let items = gsap.utils.toArray(".pxl-image-2d .item");

        

        let carousel = buildCarousel(items, {
            radiusX: 1200,
            radiusY: 1000,
            activeAngle: -90,
            draggable: true,
            onClick(element, self) {
                self.to(element, { duration: 3, ease: "linear" }, "short");
            },
            onActivate(element, self) {
                element.classList.add("active");
            },
            onDeactivate(element, self) {
                element.classList.remove("active");
            },
        });
        carousel.render();

        function buildCarousel(
            targets,
            {
                radiusX = 200,
                radiusY = 200,
                activeAngle = -90,
                activeElement,
                onClick,
                onActivate,
                onDeactivate,
                onStart,
                onStop,
                draggable,
                autoAdvance
            }
            ) {
            targets = gsap.utils.toArray(targets);
            gsap.set(targets, { xPercent: -50, x: 0, yPercent: -50, y: 0 });
            let DEG2RAD = Math.PI / 180,
                eventTypes = (
                "ontouchstart" in document.documentElement
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : !("onpointerdown" in document.documentElement)
                    ? "mousedown,mousemove,mouseup,mouseup"
                    : "pointerdown,pointermove,pointercancel,pointerup"
                ).split(","),
                round = (value) => Math.round(value * 10000) / 10000,
                tempDiv = document.createElement("div"),
                quantity = targets.length,
                angleInc = 360 / quantity,
                wrap = gsap.utils.wrap(0, quantity),
                angleWrap = gsap.utils.wrap(0, 360),
                rotation = 0,
                dragged,
                onPressRotation,
                autoAdvanceCall =
                autoAdvance &&
                gsap.delayedCall(parseFloat(autoAdvance) || 2, () => {
                    self.next();
                    autoAdvanceCall.restart(true);
                }),
                xSetters = targets.map((el) => gsap.quickSetter(el, "x", "px")),
                ySetters = targets.map((el) => gsap.quickSetter(el, "y", "px")),
                self = {
                rotation(value) {
                    if (arguments.length) {
                    let prevActive = activeElement;
                    rotation = angleWrap(value);
                    activeElement = targets[wrap(Math.round(-value / angleInc))];
                    self.render();
                    if (prevActive !== activeElement) {
                        onDeactivate && prevActive && onDeactivate(prevActive, self);
                        onActivate && onActivate(activeElement, self);
                    }
                    }
                    return rotation;
                },
                resize(rx, ry) {
                    radiusX = rx;
                    radiusY = ry;
                    self.render();
                },
                render() {
                    self.render = function () {
                        let inc = angleInc * DEG2RAD,
                            a = (rotation + activeAngle) * DEG2RAD,
                            activeIndex = targets.indexOf(activeElement);
                
                        for (let i = 0; i < quantity; i++) {
                            xSetters[i](round(Math.cos(a) * radiusX));
                            ySetters[i](round(Math.sin(a) * radiusY));
                
                            if (i === activeIndex) {
                                gsap.to(targets[i], { opacity: 1, rotate: 0, duration: 0.3, ease: "power1.out" });
                            } else if (i === wrap(activeIndex - 1) || i === wrap(activeIndex + 1)) {
                                gsap.to(targets[i], { opacity: 1, rotate: i === wrap(activeIndex - 1) ? -18 : 18, duration: 0.3, ease: "power1.out" });
                            } else if (i === wrap(activeIndex - 2) || i === wrap(activeIndex + 2)) {
                                gsap.to(targets[i], { opacity: 1, rotate: i === wrap(activeIndex - 2) ? -30 : 30, duration: 0.3, ease: "power1.out" });
                            } else if (i === wrap(activeIndex - 3) || i === wrap(activeIndex + 3)) {
                                gsap.to(targets[i], { opacity: 0, rotate: i === wrap(activeIndex - 3) ? -60 : 60, duration: 0.3, ease: "power1.out" });
                            } else {
                                gsap.to(targets[i], { opacity: 0, rotate: 0, duration: 0.3, ease: "power1.out" });
                            }
                
                            a += inc;
                        }
                    };
                },
                
                activeElement(value) {
                    if (arguments.length) {
                    self.rotation(self.elementRotation(value));
                    }
                    return activeElement;
                },
                elementRotation(element) {
                    let index = targets.indexOf(gsap.utils.toArray(element)[0]);
                    return (quantity - index) * angleInc;
                },
                to(elOrRotation, vars, direction) {
                    vars = vars || {};
                    vars.rotation =
                    typeof elOrRotation === "number"
                        ? elOrRotation
                        : self.elementRotation(elOrRotation) || parseFloat(elOrRotation);
                    vars.overwrite = true;
                    let { onUpdate, onComplete } = vars,
                    _onStart = vars.onStart;
                    autoAdvanceCall && autoAdvanceCall.pause();
                    vars.onStart = function () {
                    onStart && onStart(activeElement, self);
                    _onStart && _onStart.call(this);
                    };
                    vars.onComplete = function () {
                    onStop && onStop(activeElement, self);
                    onComplete && onComplete.call(this);
                    autoAdvanceCall && autoAdvanceCall.restart(true);
                    };
                    if (direction) {
                    let getter = gsap.getProperty(tempDiv);
                    vars.onUpdate = function () {
                        self.rotation(getter("rotation"));
                        onUpdate && onUpdate.call(this);
                    };
                    vars.rotation += "_" + direction;
                    return gsap.fromTo(tempDiv, { rotation: rotation }, vars);
                    }
                    return gsap.to(self, vars);
                },
                next(vars, direction) {
                    vars = {
                    ...vars,
                    duration: 8
                    };
                    let element = targets[wrap(targets.indexOf(activeElement) + 1)];
                    self.to(element, vars, direction || "ccw");
                },
                previous(vars, direction) {
                    vars = {
                    ...vars,
                    duration: 8
                    };
                    let element = targets[wrap(targets.indexOf(activeElement) - 1)];
                    self.to(element, vars, direction || "cw");
                },
                kill() {
                    targets.forEach((el) => {
                    el.removeEventListener("click", _onClick);
                    el.removeEventListener(eventTypes[0], onPress);
                    el.removeEventListener(eventTypes[2], onRelease);
                    el.removeEventListener(eventTypes[3], onRelease);
                    });
                    gsap.killTweensOf(self);
                    tempDiv.parentNode && tempDiv.parentNode.removeChild(tempDiv);
                    autoAdvanceCall && autoAdvanceCall.kill();
                    draggable && draggable.kill();
                },
                autoAdvance: autoAdvanceCall
                },
                _onClick = (e) => {
                if (!dragged) {
                    autoAdvanceCall && autoAdvanceCall.restart(true);
                    onClick && onClick(e.currentTarget, self);
                }
                },
                onPress = (e) => {
                onPressRotation = rotation;
                gsap.set(tempDiv, { rotation: rotation });
                autoAdvanceCall && autoAdvanceCall.pause();
                gsap.killTweensOf(self);
                draggable.startDrag(e);
                dragged = false;
                },
                onRelease = (e) => {
                draggable.endDrag(e);
                if (rotation === onPressRotation) {
                    autoAdvanceCall && autoAdvanceCall.restart(true);
                    draggable.tween && draggable.tween.kill();
                    _onClick(e);
                }
                },
                syncDraggable = () => {
                if (!dragged) {
                    onStart && onStart(activeElement, self);
                    dragged = true;
                }
                self.rotation(draggable.rotation);
                };
            targets[0].parentNode.appendChild(tempDiv);
            gsap.set(tempDiv, {
                visibility: "hidden",
                position: "absolute",
                width: 0,
                height: 0,
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50
            });
            targets.forEach((el) => {
                if (draggable) {
                el.addEventListener(eventTypes[0], onPress);
                el.addEventListener(eventTypes[2], onRelease);
                el.addEventListener(eventTypes[3], onRelease);
                } else {
                el.addEventListener("click", _onClick);
                }
            });
    
            self.snap = angleInc;
            draggable &&
                (self.draggable = draggable =
                Draggable.create(tempDiv, {
                    type: "rotation",
                    snap: gsap.utils.snap(angleInc),
                    inertia: true,
                    onThrowComplete: () => {
                    autoAdvanceCall && autoAdvanceCall.restart(true);
                    onStop && onStop(activeElement, self);
                    },
                    onThrowUpdate: syncDraggable,
                    onDrag: syncDraggable
                })[0]);
            self.activeElement(gsap.utils.toArray(activeElement)[0] || targets[0]);
            return self;
            }
    
        let lastScrollPosition = 0;
        let enableScrollEffect = true;
        function handleScroll() {
            if (!enableScrollEffect) return;
        
            let currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPosition) {
                carousel.next();
            }
            lastScrollPosition = currentScrollPosition;
        }
        
        window.addEventListener("scroll", handleScroll);
    });
    
    /* text scroll ver2 */
    $(document).ready(function() {
        if (document.querySelectorAll('.pxl-text-editor2 .pxl-text-content').length === 0) {
            return;
        }        
      
        gsap.config({ trialWarn: false });
        console.clear();
        gsap.registerPlugin(ScrollTrigger, SplitText);
      
        let split = new SplitText(".pxl-text-editor2 .pxl-text-content", { type: "lines" });
      
        function makeItHappen() {
          $.each(split.lines, function(_, target) {
            gsap.to(target, {
              backgroundPositionX: 0,
              ease: "none",
              scrollTrigger: {
                trigger: target,
                markers: false,
                scrub: 0.75,
                start: "top center",
                end: "bottom center"
              }
            });
          });
        }
      
        let someDelay = gsap.delayedCall(0.2, newTriggers).pause();
      
        $(window).on("resize", function() {
          someDelay.restart(true);
        });
      
        function newTriggers() {
          ScrollTrigger.getAll().forEach(function(trigger) {
            trigger.kill();
          });
          split.split();
          makeItHappen();
        }
      
        makeItHappen();
    });
    /* Text Hover Silde */
    if ($('.pxl-nav-menu1:not(.fr-gradient) .pxl-menu-primary .sub-menu li a span, .pxl-nav-menu1:not(.fr-gradient) .pxl-menu-primary .children li a span, .pxl-blog-style1 .pxl-post--inner .pxl-post--title a, .pxl-team-layout1 .pxl-item--inner .pxl-item--position, .pxl-post-carousel .pxl-post--inner .pxl-post--title a, .pxl-blog-list .pxl-item--title a').length > 0) {
        $('.pxl-nav-menu1:not(.fr-gradient) .pxl-menu-primary .sub-menu li a span, .pxl-nav-menu1:not(.fr-gradient) .pxl-menu-primary .children li a span, .pxl-blog-style1 .pxl-post--inner .pxl-post--title a, .pxl-team-layout1 .pxl-item--inner .pxl-item--position, .pxl-post-carousel .pxl-post--inner .pxl-post--title a, .pxl-blog-list .pxl-item--title a').each(function () {
            var text = $(this).text().trim();
            var html = $.map(text.split(''), function(char, index) {
                return '<span class="char" style="--char-index:' + index + ';">' + char + '</span>';
            }).join('');
            $(this).html(html);
        });
    }
   // Line animation
    if (document.querySelectorAll(".pxl-line .pxl-item--inner").length > 0) {
        gsap.from(".pxl-line .pxl-item--inner", {
            x: "-100%",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".pxl-line .pxl-item--inner",
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });
    }


    // Line icon animation
    if (document.querySelectorAll(".pxl-line-icon1")) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pxl-line-icon1",
                start: "top 105%", 
                toggleActions: "play none none none"
            }
        });
        tl.from(".pxl-line-icon1 .pxl-line", {
            width: 0,
            duration: 1.5,
            ease: "power2.out"
        });
        tl.from(".pxl-line-icon1 .pxl-item--icon", {
            rotation: -360, 
            duration: 3,
            ease: "power2.out"
        }, "<");
    }
    ///svg 
    const svgIcons = document.querySelectorAll(".pxl-line-icon2 svg");

    if (document.querySelector(".pxl-line-icon2")) {
        gsap.registerPlugin(ScrollTrigger);

        svgIcons.forEach((svg) => {
            const paths = svg.querySelectorAll("path");

            paths.forEach((path) => {
                const lineLength = path.getTotalLength();
                path.style.strokeDasharray = lineLength;
                path.style.strokeDashoffset = lineLength;

                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 2,
                    scrollTrigger: {
                        trigger: svg,
                        start: "top 50%",
                        toggleActions: "play none none none",
                    },
                });
            });
        });
    }

    //////
    if (jQuery('.pxl-image-box1').length > 0) {
        var imgs = jQuery.makeArray(jQuery('.pxl-image-box-animation .pxl-box-inner .img-counter img'));
        imgs.reverse();
    
        if (imgs.length > 0) {
            function crossfade() {
                jQuery(imgs).each(function (index, img) {
                    jQuery(img).css({
                        zIndex: index === 0 ? 0 : 1
                    });
    
                    gsap.to(img, {
                        duration: 1.8,
                        autoAlpha: index === 0 ? 0 : 1,
                        scale: index === 0 ? 0.85 : 1,
                        rotationY: index === 0 ? 120 : 0,
                        x: index === 0 ? "0%" : "0%",
                        filter: index === 0 ? "blur(8px)" : "blur(0px)",
                        ease: "power3.inOut"
                    });
                });
    
                imgs.push(imgs.shift());
            }
    
            var cycle = setInterval(crossfade, 1300);
    
            jQuery(window).on('unload', function () {
                clearInterval(cycle);
            });
        }
    }
    ////////////////
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
      
          if (targetElement) {
            const offset = parseInt(targetElement.getAttribute('data-onepage-offset') || 0, 10);

            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      
            gsap.to(window, {
              scrollTo: offsetTop - offset, 
              duration: 1,
              ease: 'power2.inOut'
            });
          }
        });
      });
      
      
      

    
    
    
      
      
      
      
      

})(jQuery);