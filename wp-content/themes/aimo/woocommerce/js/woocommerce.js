;(function ($) {

    "use strict";

    $(document).ready(function () {
        $('.single_variation_wrap').addClass('clearfix');
        $('.woocommerce-variation-add-to-cart').addClass('clearfix');

        $('.cart-total-wrap').on('click', function () {
            $('.widget-cart-sidebar').toggleClass('open');
            $(this).toggleClass('cart-open');
            $('.site-overlay').toggleClass('open');
        });

        $('.site-overlay').on('click', function () {
            $(this).removeClass('open');
            $(this).parents('#page').find('.widget-cart-sidebar').removeClass('open');
        });

        $('.woocommerce-tab-heading').on('click', function () {
            $(this).toggleClass('open');
            $(this).parent().find('.woocommerce-tab-content').slideToggle('');
        });

        $('.site-menu-right .h-btn-cart, .mobile-menu-cart .h-btn-cart').on('click', function (e) {
            e.preventDefault();
            $(this).parents('#ct-header-wrap').find('.widget_shopping_cart').toggleClass('open');
            $('.ct-hidden-sidebar').removeClass('open');
            $('.ct-search-popup').removeClass('open');
        });

        $('.woocommerce-add-to-cart a.button.product_type_grouped:not(".no-animate")').append( '<i class="caseicon-link4"></i>' );

        $('.woocommerce-add-to-cart a.button').on('click', function () {
            $(this).parents('.woocommerce-product-inner').addClass('cart-added');
        });

        $('.woocommerce-archive-layout .layout-grid').on('click', function () {
            $(this).addClass('active');
            $(this).parent().find('.layout-list').removeClass('active');
            $(this).parents('.site-main').find('ul.products').addClass('ct-products-grid').removeClass('ct-products-list');
            $(this).parents('.pxl-content-area').find('ul.products').removeAttr('class').addClass($(this).attr('data-cls'));
        });

        $('.woocommerce-archive-layout .layout-list').on('click', function () {
            $(this).addClass('active');
            $(this).parent().find('.layout-grid').removeClass('active');
            $(this).parents('.site-main').find('ul.products').addClass('ct-products-list').removeClass('ct-products-grid');
            $(this).parents('.pxl-content-area').find('ul.products').removeAttr('class').addClass($(this).attr('data-cls'));
        });

        $('.woocommerce-archive-layout .layout-list.active').parents('.site-main').find('ul.products').addClass('ct-products-list').removeClass('ct-products-grid');

        setTimeout(function () {
            $('.ct-grid .product_type_variable, .ct-slick-slider .product_type_variable').removeAttr('data-product_id');
            $('.ct-product-carousel6.woocommerce .woocommerce-product-inner .woocommerce-add-to--cart .button').append( '<i class="flaticon-shopping-cart-1"></i>' );
            $('.ct-product-carousel9.woocommerce .woocommerce-product-inner .woocommerce-add-to--cart .button').append( '<i class="flaticon-shopping-cart-1"></i>' );
        }, 300);

        $(".woocommerce .products").on("click", ".quantity input", function() {
            return false;
        });
        $(".woocommerce .products").on("change input", ".quantity .qty", function() {
            var add_to_cart_button = $(this).parents( ".product" ).find(".add_to_cart_button");
            add_to_cart_button.attr('data-quantity', $(this).val());
            add_to_cart_button.attr("href", "?add-to-cart=" + add_to_cart_button.attr("data-product_id") + "&quantity=" + $(this).val());
        });
        $('.flex-viewport').parents('.woocommerce-gallery-inner').addClass('flex-slider-active');

        /* Single Product - Sidebar -- No Form */
        $('.woocommerce-summary-inner').each(function() {
            if ($(this).find('.variations_form').length === 0) {    
                var sidebar = $('.woocommerce-summary-inner');
                if ( $('.woocommerce-summary--entry').length > 0) {
                    sidebar.removeAttr('class').addClass('woocommerce-summary-inner col-xl-4 col-lg-4 col-md-6 col-12');
                }

                var sidebar = $('.woocommerce-summary--entry');
                if ( $('.woocommerce-summary--entry').length > 0) {
                    sidebar.removeClass('row');
                }

                var sidebar = $('.woocommerce-summary-content');
                if ( $('.woocommerce-summary-content').length > 0) {
                    sidebar.removeAttr('class').addClass('woocommerce-summary-content');
                }

                var sidebar = $('.woocommerce-sg-sidebar');
                if (sidebar.length > 0) {
                    sidebar.removeAttr('class').addClass('woocommerce-sg-sidebar col-xl-3 col-lg-3 col-md-12 col-12');
                }
            }
        });


        /* Add Placeholder Review Form */
        var $text_name = $('.single-product #review_form .comment-form-author label').text();
        $('.single-product #review_form .comment-form-author input').each(function (ev) {
            if (!$(this).val()) {
                $(this).attr("placeholder", $text_name);
            }
        });
        var $text_email = $('.single-product #review_form .comment-form-email label').text();
        $('.single-product #review_form .comment-form-email input').each(function (ev) {
            if (!$(this).val()) {
                $(this).attr("placeholder", $text_email);
            }
        });
        var $text_comment = $('.single-product #review_form .comment-form-comment label').text();
        $('.single-product #review_form .comment-form-comment textarea').each(function (ev) {
            if (!$(this).val()) {
                $(this).attr("placeholder", $text_comment);
            }
        });

        $('.pxl-item--attr .pxl-button--info').on('click', function () {
            $(this).toggleClass('active');
        });

        /* Checkout Placeholder */
        $('.woocommerce-checkout #billing_first_name').attr("placeholder", "Fast Name");
        $('.woocommerce-checkout #billing_last_name').attr("placeholder", "Last Name");
        $('.woocommerce-checkout #billing_company').attr("placeholder", "Company Name");
        $('.woocommerce-checkout #billing_company').attr("placeholder", "Company");
        $('.woocommerce-checkout #billing_city').attr("placeholder", "Town / City");
        $('.woocommerce-checkout #billing_postcode').attr("placeholder", "ZIP Code");
        $('.woocommerce-checkout #billing_phone').attr("placeholder", "Phone Number");
        $('.woocommerce-checkout #billing_email').attr("placeholder", "Email Address");
        $('#customer_login #username').attr("placeholder", "Username or email address");
        $('#customer_login #password').attr("placeholder", "Password");
        $('#customer_login #reg_email').attr("placeholder", "Email address");
        $('#customer_login #reg_username').attr("placeholder", "Username");
        $('#customer_login #reg_password').attr("placeholder", "Password");
        $('.lost_reset_password #user_login').attr("placeholder", "Username or email");

    });

})(jQuery);


jQuery( document ).on( 'qv_loader_stop', function () {
    jQuery( this ).ready( function ( $ ) {
        $('#yith-quick-view-modal .quantity').append('<span class="quantity-icon quantity-down pxl-icon--minus"></span><span class="quantity-icon quantity-up pxl-icon--plus"></span>');
        $('#yith-quick-view-modal .quantity-up').on('click', function () {
            $(this).parents('.quantity').find('input[type="number"]').get(0).stepUp();
        });
        $('#yith-quick-view-modal .quantity-down').on('click', function () {
            $(this).parents('.quantity').find('input[type="number"]').get(0).stepDown();
        });
    } );
} );

document.addEventListener("DOMContentLoaded", function() {
    var targetNode = document.querySelector('.woocommerce-product-gallery');
    
    if (targetNode) { 
        var observer = new MutationObserver(function(mutationsList, observer) {
            var nav = document.querySelector('.flex-control-nav');
            var target = document.querySelector('.woocommerce-summary-inner');
            
            if (nav && target) {
                target.appendChild(nav);
                observer.disconnect(); 
            }
        });

        observer.observe(targetNode, { childList: true, subtree: true });
    }
});



