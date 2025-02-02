( function( $ ) {
    "use strict";
    function aimo_section_start_render(){
        var _elementor = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        
        _elementor.hooks.addFilter( 'pxl_section_start_render', function( html, settings, el ) {
            
            if(typeof settings.pxl_parallax_bg_img != 'undefined' && settings.pxl_parallax_bg_img.url != ''){
                html += '<div class="pxl-section-bg-parallax"></div>';
            }

            if(typeof settings.pxl_color_offset != 'undefined' && settings.pxl_color_offset != 'none'){
                html += '<div class="pxl-section-overlay-color"></div>';
            }

            if(typeof settings.pxl_overlay_img != 'undefined' && settings.pxl_overlay_img.url != ''){
                html += '<div class="pxl-overlay--image pxl-overlay--imageLeft"><div class="bg-image"></div></div>';
            }

            if(typeof settings.pxl_overlay_img2 != 'undefined' && settings.pxl_overlay_img2.url != ''){
                html += '<div class="pxl-overlay--image pxl-overlay--imageRight"><div class="bg-image"></div></div>';
            }

            return html;
        } );

        $('.pxl-section-bg-parallax').parent('.elementor-element').addClass('pxl-section-parallax-overflow');
    }

    function aimo_column_before_render(){
        var _elementor = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        _elementor.hooks.addFilter( 'pxl-custom-column/before-render', function( html, settings, el ) {
            if(typeof settings.pxl_column_parallax_bg_img != 'undefined' && settings.pxl_column_parallax_bg_img.url != ''){
                html += '<div class="pxl-column-bg-parallax"></div>';
            }
            return html;
        } );
    }

    function aimo_css_inline_js(){
        var _inline_css = "<style>";
        $(document).find('.pxl-inline-css').each(function () {
            var _this = $(this);
            _inline_css += _this.attr("data-css") + " ";
            _this.remove();
        });
        _inline_css += "</style>";
        $('head').append(_inline_css);
    }

    function aimo_section_before_render(){
        var _elementor = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        _elementor.hooks.addFilter( 'pxl-custom-section/before-render', function( html, settings, el ) {
            if (typeof settings['row_divider'] !== 'undefined') {
                if(settings['row_divider'] == 'angle-top' || settings['row_divider'] == 'angle-bottom' || settings['row_divider'] == 'angle-top-right' || settings['row_divider'] == 'angle-bottom-left') {
                    html =  '<svg class="pxl-row-angle" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>';
                    return html;
                }
                if(settings['row_divider'] == 'angle-top-bottom' || settings['row_divider'] == 'angle-top-bottom-left') {
                    html =  '<svg class="pxl-row-angle pxl-row-angle-top" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg><svg class="pxl-row-angle pxl-row-angle-bottom" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>';
                    return html;
                }
                if(settings['row_divider'] == 'wave-animation-top' || settings['row_divider'] == 'wave-animation-bottom') {
                    html =  '<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150" fill="#fff"><path d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"><animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"></animate></path></svg>';
                    return html;
                }
                if(settings['row_divider'] == 'curved-top' || settings['row_divider'] == 'curved-bottom') {
                    html =  '<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1920 128" version="1.1" preserveAspectRatio="none" style="fill:#ffffff"><path stroke-width="0" d="M-1,126a3693.886,3693.886,0,0,1,1921,2.125V-192H-7Z"></path></svg>';
                    return html;
                }
            }
        } );
    } 

    var PXL_Icon_Contact_Form = function( $scope, $ ) {
        
        setTimeout(function () {
            $('.pxl--item').each(function () {
                var icon_input = $(this).find(".pxl--form-icon"),
                    control_wrap = $(this).find('.wpcf7-form-control');
                control_wrap.before(icon_input.clone());
                icon_input.remove();
            });
        }, 10);

    };

    function aimo_split_text($scope){

        setTimeout(function () {

            var st = $scope.find(".pxl-split-text");
            if(st.length == 0) return;
            gsap.registerPlugin(SplitText);
            st.each(function(index, el) {
                el.split = new SplitText(el, { 
                    type: "lines,words,chars",
                    linesClass: "split-line"
                });
                gsap.set(el, { perspective: 400 });

                if( $(el).hasClass('split-in-fade') ){
                    $(el).addClass('active');
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        ease: "Back.easeOut",
                    });
                }
                if( $(el).hasClass('split-in-right') ){
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        x: "50",
                        ease: "Back.easeOut",
                    });
                }
                if( $(el).hasClass('split-in-left') ){
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        x: "-50",
                        ease: "circ.out",
                    });
                }
                if( $(el).hasClass('split-in-up') ){
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        y: "80",
                        ease: "circ.out",
                    });
                }
                if( $(el).hasClass('split-in-down') ){
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        y: "-80",
                        ease: "circ.out",
                    });
                }
                if( $(el).hasClass('split-in-rotate') ){
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        rotateX: "50deg",
                        ease: "circ.out",
                    });
                }
                if( $(el).hasClass('split-in-scale') ){
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        scale: "0.5",
                        ease: "circ.out",
                    });
                }
                el.anim = gsap.to(el.split.chars, {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: "restart pause resume reverse",
                        start: "top 90%",
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    scale: 1,
                    opacity: 1,
                    duration: 0.8, 
                    stagger: 0.02,
                });
            });

        }, 200);
    }

    function aimo_zoom_point(){
        elementorFrontend.waypoint($(document).find('.pxl-zoom-point'), function () {
            var offset = $(this).offset();
            var offset_top = offset.top;
            var scroll_top = $(window).scrollTop();
        }, {
            offset: -100,
            triggerOnce: true
        });
    }

    function aimo_scroll_fixed_section(){
        if($('.pxl-section-fix-top').length > 0) {
            ScrollTrigger.matchMedia({
                "(min-width: 991px)": function() {
                    const pinnedSections = ['.pxl-section-fix-top'];
                    pinnedSections.forEach(className => {
                        gsap.to(".pxl-section-fix-bottom", {
                            scrollTrigger: {
                                trigger: ".pxl-section-fix-bottom",
                                scrub: true,
                                pin: className,
                                pinSpacing: false,
                                start: 'top bottom',
                                end: "bottom top",
                            },
                        });
                    });
                }
            });
        }
    }

    function aimo_item_marquee($scope){
        const logos = $scope.find('.pxl-item--marquee');
        gsap.set(logos, { autoAlpha: 1 })

        logos.each(function(index, el) {
            gsap.set(el, { xPercent: 100 * index });
        }); 

        if (logos.length > 2) {
            const logosWrap = gsap.utils.wrap(-100, ((logos.length - 1) * 100));
            const durationNumber = logos.data('duration');
            const slipType = logos.data('slip-type');
            var slipResult = `-=${logos.length * 100}`;
            if(slipType == 'right') {
                slipResult = `+=${logos.length * 100}`;
            }
            gsap.to(logos, {
                xPercent: slipResult,
                duration: durationNumber,
                repeat: -1,
                ease: 'none',
                modifiers: {
                    xPercent: xPercent => logosWrap(parseFloat(xPercent))
                }
            });
        }      
    }

    function aimo_item_marquee2($scope){

        const text_marquee = $scope.find('.pxl-text--marquee');

        const boxes = gsap.utils.toArray(text_marquee);

        const loop = text_horizontalLoop(boxes, {paused: false,repeat: -1,});

        function text_horizontalLoop(items, config) {
            items = gsap.utils.toArray(items);
            config = config || {};
            let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
                length = items.length,
                startX = items[0].offsetLeft,
                times = [],
                widths = [],
                xPercents = [],
                curIndex = 0,
                pixelsPerSecond = (config.speed || 1) * 100,
                snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
                totalWidth, curX, distanceToStart, distanceToLoop, item, i;
            gsap.set(items, {
                xPercent: (i, el) => {
                    let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                    xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                    return xPercents[i];
                }
            });
            gsap.set(items, {x: 0});
            totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
            for (i = 0; i < length; i++) {
                item = items[i];
                curX = xPercents[i] / 100 * widths[i];
                distanceToStart = item.offsetLeft + curX - startX;
                distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
                  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
                  .add("label" + i, distanceToStart / pixelsPerSecond);
                times[i] = distanceToStart / pixelsPerSecond;
            }
            function toIndex(index, vars) {
                vars = vars || {};
                (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
                let newIndex = gsap.utils.wrap(0, length, index),
                    time = times[newIndex];
                if (time > tl.time() !== index > curIndex) { 
                    vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
                    time += tl.duration() * (index > curIndex ? 1 : -1);
                }
                curIndex = newIndex;
                vars.overwrite = true;
                return tl.tweenTo(time, vars);
            }
            tl.next = vars => toIndex(curIndex+1, vars);
            tl.previous = vars => toIndex(curIndex-1, vars);
            tl.current = () => curIndex;
            tl.toIndex = (index, vars) => toIndex(index, vars);
            tl.times = times;
            tl.progress(1, true).progress(0, true);
            if (config.reversed) {
                tl.vars.onReverseComplete();
                tl.reverse();
            }
            return tl;
        }
    }

    function aimo_animation_image() {
        let revealContainers = document.querySelectorAll(".pxl-scroll-reveal");
        if (revealContainers.length > 0 && window.innerWidth > 767) {
            gsap.registerPlugin(ScrollTrigger);
    
            revealContainers.forEach((container) => {
                let image = container.querySelector("img");
    
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none"
                    }
                });
                
                tl.set(container, { autoAlpha: 1 });
    
                tl.from(container, {
                    xPercent: -100,
                    duration: 1.5,
                    ease: Power2.out
                });
    
                tl.from(image, {
                    xPercent: 100,
                    scale: 1.3,
                    duration: 1.5,
                    delay: -1.5,
                    ease: Power2.out
                });
            });
        }
        
    }
    function aimo_process3() {
        const cards = document.querySelectorAll(".pxl-process3 .pxl--item");
      
        if (window.innerWidth > 960) {
          cards.forEach((card, index) => {
            card.style.left = `${index * 120}px`;
            card.style.top = `${index * 52}px`;
            card.style.position = "absolute";
            card.style.transition = "transform 0.3s ease, z-index 0s";
      
            card.addEventListener("click", (event) => {
              event.stopPropagation();
      
              cards.forEach((otherCard) => {
                otherCard.style.zIndex = "1"; 
                otherCard.style.transform = "scale(1)";
                const icon = otherCard.querySelector(".pxl-icon");
                if (icon) {
                  icon.classList.remove("pxl_spin");
                }
                const image = otherCard.querySelector("img");
                if (image) {
                  image.style.borderRadius = "12px";
                }
              });
      
              card.style.zIndex = "10"; 
              card.style.transform = "scale(1.1)";
      
              const icon = card.querySelector(".pxl-icon");
              if (icon) {
                icon.classList.add("pxl_spin");
              }
              const image = card.querySelector("img");
              if (image) {
                image.style.borderRadius = "0px";
              }
            });
          });
      
          document.addEventListener("click", () => {
            cards.forEach((card) => {
              card.style.zIndex = "1"; 
              card.style.transform = "scale(1)";
              const icon = card.querySelector(".pxl-icon");
              if (icon) {
                icon.classList.remove("pxl_spin");
              }
              const image = card.querySelector("img");
              if (image) {
                image.style.borderRadius = "12px";
              }
            });
          });
        }
    }
    window.addEventListener("resize", aimo_process3);
      
     /*//////////////*/
     function aimo_split_scroll_color() {
        var revealContainers = document.querySelectorAll(".pxl-heading .pxl-heading--text-scroll");

        if (revealContainers.length > 0) {
            revealContainers.forEach((container) => {
                var text = new SplitText(container, { type: 'words, chars' });
    
                text.words.forEach((word) => {
                    if (word.children.length > 0) {
                        word.children[0].classList.add("first-char");
                    }
                });
    
                gsap.fromTo(text.chars,
                    {
                        position: 'relative',
                        display: 'inline-block',
                        opacity: 0.2,
                        x: -5,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: container,
                            toggleActions: "play pause reverse pause",
                            start: "top 90%",
                            end: "top 40%",
                            scrub: 0.7,
                        }
                    }
                );
            });
        }
    }
      
    function aimo_image_split() {
        let boxWidth = 0;
        let lastScrollY = window.scrollY;
        const mq = window.matchMedia("(max-width: 1200px)");
        let isScrolling = false;
    
        function handleScroll() {
            const container = document.querySelector('.pxl-image-split .containers');
            const box = document.querySelector('.pxl-image-split .pxl-width');
            const fillerSpace = document.querySelector('.pxl-image-split .filler-space');
            if (container && box && fillerSpace) {
                const containerTop = container.getBoundingClientRect().top;
                const fillerBottom = fillerSpace.getBoundingClientRect().bottom;
                const fillerTop = fillerSpace.getBoundingClientRect().top;
                const boxTop = box.getBoundingClientRect().top;
                const deltaY = window.scrollY - lastScrollY;
    
                if (containerTop <= 0) {
                    if (deltaY > 0) {
                        boxWidth = Math.min(100, boxWidth + deltaY * 0.1);
                    }
    
                    if (deltaY < 0 && fillerBottom >= window.innerHeight) {
                        boxWidth = Math.max(0, boxWidth - Math.abs(deltaY) * 0.15);
                    }
                    if (fillerTop >= boxTop) {
                        boxWidth = 0;
                    }
                    box.style.width = boxWidth + '%';
                }
            }
    
            lastScrollY = window.scrollY;
            isScrolling = false; 
        }
    
        function smoothScrollHandler() {
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(handleScroll);
            }
        }
    
        function checkMediaQuery() {
            if (!mq.matches) {
                window.addEventListener('scroll', smoothScrollHandler);
            } else {
                window.removeEventListener('scroll', smoothScrollHandler);
            }
        }
    
        function handleResize() {
            checkMediaQuery();
        }
    
        if (document.querySelector('.pxl-image-split .containers') &&
            document.querySelector('.pxl-image-split .pxl-width') &&
            document.querySelector('.pxl-image-split .filler-space')) {
            checkMediaQuery();
            mq.addEventListener('change', checkMediaQuery);
            window.addEventListener('resize', handleResize);
        }
    }
    /* Custom WebGL Effects */
    function aimo_webgl_effects() {
        var WebGL_vs = `#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        uniform mat4 texture0Matrix;
        uniform mat4 texture1Matrix;
        uniform mat4 mapMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord0 = (texture0Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoord1 = (texture1Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoordMap = (mapMatrix * vec4(aTextureCoord, 0., 1.)).xy;
            vVertexPosition = vertexPosition;
        }`;

        var WebGL_fs = `#ifdef GL_ES
        precision mediump float;
        #endif

        #define PI2 6.28318530718
        #define PI 3.14159265359
        #define S(a,b,n) smoothstep(a,b,n)

        uniform float uTime;
        uniform float uProgress;
        uniform vec2 uReso;
        uniform vec2 uMouse;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        uniform sampler2D texture0;
        uniform sampler2D texture1;
        uniform sampler2D map;

        float exponentialEasing (float x, float a){

            float epsilon = 0.00001;
            float min_param_a = 0.0 + epsilon;
            float max_param_a = 1.0 - epsilon;
            a = max(min_param_a, min(max_param_a, a));

            if (a < 0.5){
                a = 2.0 * a;
                float y = pow(x, a);
                return y;
            } else {
                a = 2.0 * (a-0.5);
                float y = pow(x, 1.0 / (1.-a));
                return y;
            }
        }

        vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
            vec4 color = vec4(0.0);
            vec2 off1 = vec2(1.411764705882353) * direction;
            vec2 off2 = vec2(3.2941176470588234) * direction;
            vec2 off3 = vec2(5.176470588235294) * direction;
            color += texture2D(image, uv) * 0.1964825501511404;
            color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
            color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
            return color;
        }

        void main(){
            vec2 uv0 = vTextureCoord0;
            vec2 uv1 = vTextureCoord1;

            float progress0 = uProgress;
            float progress1 = 1. - uProgress;

            vec4 map = blur13(map, vTextureCoordMap, uReso, vec2(2.)) + 0.5;

            uv0.x += progress0 * map.r;
            uv1.x -= progress1 * map.r;

            vec4 color = texture2D( texture0, uv0 );
            vec4 color1 = texture2D( texture1, uv1 );

            gl_FragColor = mix(color, color1, progress0 );
        }`;
        class WebglHover {
            constructor(set) {
                this.canvas = set.canvas;
                this.webGLCurtain = new Curtains({
                    container: this.canvas,
                    watchScroll: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })
                this.planeElement = set.planeElement;
                this.mouse = {
                    x: 0,
                    y: 0
                };
                this.params = {
                    vertexShader: WebGL_vs,
                    fragmentShader: WebGL_fs,
                    widthSegments: 40,
                    heightSegments: 40,
                    uniforms: {
                        time: {
                            name: "uTime",
                            type: "1f",
                            value: 0
                        },
                        mousepos: {
                            name: "uMouse",
                            type: "2f",
                            value: [0, 0]
                        },
                        resolution: {
                            name: "uReso",
                            type: "2f",
                            value: [innerWidth, innerHeight]
                        },
                        progress: {
                            name: "uProgress",
                            type: "1f",
                            value: 0
                        }
                    }
                };
                this.initPlane();
            }

            initPlane() {
                this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);
                    // this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params)

                if (this.plane) {
                    this.plane.onReady(() => {
                        this.update();
                        this.initEvent();
                    });
                }
            }

            update() {
                this.plane.onRender(() => {
                    this.plane.uniforms.time.value += 0.01;
                    this.plane.uniforms.resolution.value = [innerWidth, innerHeight];
                });
            }

            initEvent() {
                this.planeElement.addEventListener("mouseenter", e => {
                    gsap.to(this.plane.uniforms.progress, .8, {
                        value: 1
                    });
                });

                this.planeElement.addEventListener("mouseout", e => {
                    gsap.to(this.plane.uniforms.progress, .8, {
                        value: 0
                    });
                });
            }
        }

        if (navigator.userAgent.indexOf('Safari') == -1 || navigator.userAgent.indexOf('Chrome') > -1) {        
            $('.pxl-image-effect1.normal').each(function() {
                const $this = $(this),
                canvas = $this.find('.canvas')[0],
                planeElement = $this.find('.item--image')[0],
                initialized = $this.data('initialized');

                if (!initialized && canvas && planeElement) {
                    new WebglHover({
                        canvas: canvas,
                        planeElement: planeElement
                    });
                    $this.data('initialized', true);
                }
            });
        }

            // Effect Expo
        var WebExpo_vs = `#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec2 vTextureCoord;

        void main() {
            gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
        }`;

        var WebExpo_fs = `
        #ifdef GL_ES
        precision mediump float;
        #endif

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        uniform sampler2D planeTexture;

        void main() {
            vec2 textureCoord = vTextureCoord;

            const float PI = 3.141592;

            textureCoord.x += (
            sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.0)) * 0.031))
            + sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.489)) * 0.017))
            ) * 0.0075;

            textureCoord.y += (
            sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.023)) * 0.023))
            + sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.1254)) * 0.037))
            ) * 0.0125;

            gl_FragColor = texture2D(planeTexture, textureCoord);
        }
        `;

        class WebGLExpo {
            constructor(set) {
                this.canvas = set.canvas;
                this.webGLCurtain = new Curtains({
                    container: this.canvas,
                    watchScroll: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })
                this.planeElement = set.planeElement;
                this.mouse = {
                    x: 0,
                    y: 0
                };
                this.params = {
                    vertexShader: WebExpo_vs,
                    fragmentShader: WebExpo_fs,
                    widthSegments: 40,
                    heightSegments: 40,
                    uniforms: {
                        time: {
                            name: "uTime",
                            type: "1f",
                            value: 0
                        },
                        mousepos: {
                            name: "uMouse",
                            type: "2f",
                            value: [0, 0]
                        },
                        resolution: {
                            name: "uReso",
                            type: "2f",
                            value: [innerWidth, innerHeight]
                        },
                        progress: {
                            name: "uProgress",
                            type: "1f",
                            value: 0
                        }
                    }
                };
                this.initPlane();
            }

            initPlane() {
                this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);
                    // this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params)

                if (this.plane) {
                    this.plane.onReady(() => {
                        this.update();
                        this.initEvent();
                    });
                }
            }

            update() {
                this.plane.onRender(() => {
                    this.plane.uniforms.resolution.value = [innerWidth, innerHeight];
                });
            }

            initEvent() {
                let isHovered = false;

                this.planeElement.addEventListener("mouseenter", e => {
                    isHovered = true;
                });

                this.planeElement.addEventListener("mouseout", e => {
                    isHovered = false;
                });

                this.plane.onRender(() => {
                    if (isHovered) {
                        this.plane.uniforms.time.value++;
                    }
                });

            }
        }

        if (navigator.userAgent.indexOf('Safari') == -1 || navigator.userAgent.indexOf('Chrome') > -1) {
            $('.pxl-image-effect1.expo').each(function() {
                const $this = $(this),
                canvas = $this.find('.canvas')[0],
                planeElement = $this.find('.item--image')[0],
                initialized = $this.data('initialized');

                if (!initialized && canvas && planeElement) {
                    new WebGLExpo({
                        canvas: canvas,
                        planeElement: planeElement
                    });
                    $this.data('initialized', true);
                }
            });
        }

            // Effect Wave
        const WebWave_vs = `
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            float waveCoords = ((uTime / 45.0) * 3.5) - 1.75;

            float distanceToWave = distance(vec2(vertexPosition.x, 0.0), vec2(waveCoords, 0.0));

            vertexPosition.z -= (cos(clamp(distanceToWave, 0.0, 0.75) * 3.141592) - cos(0.75 * 3.141592) + (2.0 * sin(3.141592 * uTime / 90.0))) * 0.025;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
            vVertexPosition = vertexPosition;
        }
        `;

        const WebWave_fs = `precision mediump float;

        uniform float uTime;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uExample;


        void main() {

            vec2 textureCoords = vec2(vTextureCoord.x, vTextureCoord.y);
            vec4 finalColor = texture2D(uExample, textureCoords);

            gl_FragColor = finalColor;
        }`;

        class ImgCurtain {
            constructor(set) {
                this.canvas = set.canvas;
                this.webGLCurtain = new Curtains({
                    container: this.canvas,
                    watchScroll: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })
                this.planeElement = set.planeElement;
                this.mouse = {
                    x: 0,
                    y: 0
                };
                this.params = {
                    vertexShader: WebWave_vs,
                    fragmentShader: WebWave_fs,
                    widthSegments: 40,
                    heightSegments: 40,
                    uniforms: {
                        time: {
                            name: "uTime",
                            type: "1f",
                            value: 0
                        },
                        resolution: {
                            name: "uReso",
                            type: "2f",
                            value: [innerWidth, innerHeight]
                        }
                    }
                };
                this.initPlane();
            }

            initPlane() {
                this.plane = this.webGLCurtain.addPlane(this.planeElement, this.params);

                if (this.plane) {
                    this.plane.onReady(() => {
                        this.update();
                        this.initEvent();
                    });
                }
            }

            update() {
                this.plane.onRender(() => {
                    this.plane.uniforms.time.value += 0.01;
                    this.plane.uniforms.resolution.value = [innerWidth, innerHeight];
                });
            }

            initEvent() {
                let isHovered = false;

                this.planeElement.addEventListener("mouseenter", e => {
                    isHovered = true;
                });

                this.planeElement.addEventListener("mouseout", e => {
                    isHovered = false;
                });

                this.plane.onRender(() => {
                    if (isHovered) {
                        this.plane.uniforms.time.value += (45 - this.plane.uniforms.time.value) * 0.0375;
                    } else {
                        this.plane.uniforms.time.value += (0 - this.plane.uniforms.time.value) * 0.0375;
                    }
                });
            }
        }

        if (navigator.userAgent.indexOf('Safari') == -1 || navigator.userAgent.indexOf('Chrome') > -1) {
            $('.pxl-image-effect1.wave').each(function() {
                const $this = $(this),
                canvas = $this.find('.canvas')[0],
                planeElement = $this.find('.item--image')[0],
                initialized = $this.data('initialized');

                if (!initialized && canvas && planeElement) {
                    new ImgCurtain({
                        canvas: canvas,
                        planeElement: planeElement
                    });
                    $this.data('initialized', true);
                }
            });
        }


        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            $('.pxl-image-effect1 .image-front').css('opacity', '1');
        }

    }
    //animation_scroll
    function aimo_animation_scroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        if (window.innerWidth > 991 && elements.length > 0) {
            elements.forEach(function (el) {
                gsap.fromTo(el, 
                    { transform: 'translateY(200px)', opacity: 0 }, 
                    {
                        transform: 'translateY(0)',
                        opacity: 1,
                        duration: 1.15,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });
        }
    }
   //////////////
   function aimo_ScrollEffect() {
    const textElements = document.querySelectorAll('.pxl---text-scroll');

    if (textElements.length > 0) {
      textElements.forEach(function (textElement) {
        const splitter = new SplitText(textElement, {
          type: "words,chars"
        });

        const chars = splitter.chars;

        gsap.fromTo(chars, {
          filter: 'blur(10px) brightness(30%)',
          willChange: 'filter'
        }, {
          filter: 'blur(0px) brightness(100%)',
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: {
            trigger: textElement,
            start: 'top bottom-=15%',
            end: 'bottom center+=15%',
            scrub: 0.2,
          },
        });
      });
    }
    }
  

    
    


    $( window ).on( 'elementor/frontend/init', function() {
        aimo_section_start_render();
        aimo_column_before_render();
        aimo_css_inline_js();
        aimo_section_before_render();
        aimo_zoom_point();
        aimo_scroll_fixed_section();
        aimo_animation_image();
        aimo_process3();
        aimo_split_scroll_color();
        aimo_image_split();
        aimo_webgl_effects();
        aimo_animation_scroll();
        aimo_ScrollEffect();
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_contact_form.default', PXL_Icon_Contact_Form );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_heading.default', function( $scope ) {
            aimo_split_text($scope);
        } );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_text_marquee.default', function( $scope ) {
            aimo_item_marquee2($scope);
        } );
    } );

} )( jQuery );