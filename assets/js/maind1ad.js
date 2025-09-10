! function (e) {
    "use strict";
    e.fn.meanmenu = function (t) {
        var i = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        t = e.extend(i, t);
        var n = window.innerWidth || document.documentElement.clientWidth;
        return this.each((function () {
            var e = t.meanMenuTarget,
                i = t.meanMenuContainer,
                a = t.meanMenuClose,
                s = t.meanMenuCloseSize,
                o = t.meanMenuOpen,
                l = t.meanRevealPosition,
                r = t.meanRevealPositionDistance,
                c = t.meanRevealColour,
                d = t.meanScreenWidth,
                p = t.meanNavPush,
                u = ".meanmenu-reveal",
                v = t.meanShowChildren,
                w = t.meanExpandableChildren,
                h = t.meanExpand,
                m = t.meanRemoveAttrs,
                b = t.onePage,
                f = t.meanDisplay,
                g = t.removeElements,
                y = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (y = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var P = "",
                C = function () {
                    if ("center" === l) {
                        var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                        P = "left:" + e + ";right:auto;", y ? jQuery(".meanmenu-reveal").animate({
                            left: e
                        }) : jQuery(".meanmenu-reveal").css("left", e)
                    }
                },
                V = !1,
                j = !1;
            "right" === l && (P = "right:" + r + ";left:auto;"), "left" === l && (P = "left:" + r + ";right:auto;"), C();
            var k = "",
                S = function () {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(i).removeClass("mean-container"), jQuery(e).css("display", f), V = !1, j = !1, jQuery(g).removeClass("mean-remove")
                },
                x = function () {
                    var t = "background:" + c + ";color:" + c + ";" + P;
                    if (n <= d) {
                        jQuery(g).addClass("mean-remove"), j = !0, jQuery(i).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + t + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var l = jQuery(e).html();
                        jQuery(".mean-nav").html(l), m && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each((function () {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        })), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", p), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(u).html(o), k = jQuery(u), jQuery(".mean-nav ul").hide(), v ? w ? (jQuery(".mean-nav ul ul").each((function () {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + s + '">' + h + "</a>")
                        })), jQuery(".mean-expand").on("click", (function (e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).prev("ul").slideUp(300, (function () { })), jQuery(this).parent().removeClass("dropdown-opened")) : (jQuery(this).prev("ul").slideDown(300, (function () { })), jQuery(this).parent().addClass("dropdown-opened")), jQuery(this).toggleClass("mean-clicked")
                        }))) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), k.removeClass("meanclose"), jQuery(k).click((function (e) {
                            e.preventDefault(), !1 === V ? (k.css("text-align", "center"), k.css("text-indent", "0"), k.css("font-size", s), jQuery(".mean-nav ul:first").slideDown(), V = !0) : (jQuery(".mean-nav ul:first").slideUp(), V = !1), k.toggleClass("meanclose"), jQuery(k).is(".meanmenu-reveal.meanclose") ? k.html(a) : k.html(o), jQuery(g).addClass("mean-remove")
                        })), b && jQuery(".mean-nav ul > li > a:first-child").on("click", (function () {
                            jQuery(".mean-nav ul:first").slideUp(), V = !1, jQuery(k).toggleClass("meanclose").html(o)
                        }))
                    } else S()
                };
            y || jQuery(window).resize((function () {
                n = window.innerWidth || document.documentElement.clientWidth, S(), n <= d ? (x(), C()) : S()
            })), jQuery(window).resize((function () {
                n = window.innerWidth || document.documentElement.clientWidth, y ? (C(), n <= d ? !1 === j && x() : S()) : (S(), n <= d && (x(), C()))
            })), x()
        }))
    }
}(jQuery),
    function (e) {
        var t = e(window);
        e("#mobile-menu").meanmenu({
            meanMenuContainer: ".tp-mobile-menu",
            meanScreenWidth: "1199",
            meanExpand: ['<i class="fal fa-plus"></i>']
        }), t.on("scroll", (function () {
            t.scrollTop() < 300 ? e("#header-sticky").removeClass("header-sticky") : e("#header-sticky").addClass("header-sticky")
        })), (new WOW).init(), (e(".ptg-slider-active").length > 0 || e(".it-brand-slider-active").length > 0 || e(".it-brand-slider1-active").length > 0 || e(".tp-bs-testi-active").length > 0 || e(".tp-bs-testi-active-2").length > 0 || e(".brand-slider-active").length > 0 || e(".mp-brand-slider-active").length > 0 || e(".app-brand-slider-active").length > 0 || e(".ptg-brand-slider-active").length > 0 || e(".tp-it-testi-active").length > 0 || e(".tp-ptg-testi-active").length > 0 || e(".ca-testi-active").length > 0 || e(".da-project-active").length > 0 || e(".law-service-slider").length > 0 || e(".law-porffolio-active").length > 0 || e(".ha-portfolio-slider-active").length > 0 || e(".da-testi-active").length > 0 || e(".app-testi-active").length > 0 || e(".shop-swipper-slider-active").length > 0 || e(".swiper--top").length > 0 || e(".tp-gl-silder").length > 0 || e(".tp-gl-silder-2").length > 0) && (e("<link>").appendTo("head").attr({
            type: "text/css",
            rel: "stylesheet",
            href: e("meta[name=siteurl]").attr("content") + "assets/css/swiper-bundle.css"
        }), e.ajaxSetup({
            cache: !0
        }), e.getScript(e("meta[name=siteurl]").attr("content") + "assets/js/swiper-bundle.js", (function () {
            if (jQuery(".ptg-slider-active").length > 0) {
                let t = ".ptg-slider-active",
                    i = new Swiper(t, {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        paginationClickable: !0,
                        loop: !1,
                        effect: "fade",
                        autoplay: {
                            delay: 4e3,
                            disableOnInteraction: !0
                        },
                        noSwiping: !1,
                        pagination: {
                            el: ".ptg-sldider-dot",
                            clickable: !0,
                            renderBullet: function (e, t) {
                                return '<span class="' + t + '"><button>0' + (e + 1) + "</button></span>"
                            }
                        },
                        navigation: {
                            nextEl: ".slider-button-next",
                            prevEl: ".slider-button-prev"
                        },
                        a11y: !1
                    });
                new IntersectionObserver(((e, t) => {
                    e[0].isIntersecting && (t.disconnect(), i.autoplay.start())
                })).observe(document.querySelector("#ptg-slider-active")),
                    function (i, n) {
                        let a = function () {
                            e(i + " [data-animation]").each((function () {
                                let t = e(this).data("animation"),
                                    i = e(this).data("delay"),
                                    n = e(this).data("duration");
                                e(this).removeClass("anim" + t).addClass(t + " animated").css({
                                    webkitAnimationDelay: i,
                                    animationDelay: i,
                                    webkitAnimationDuration: n,
                                    animationDuration: n
                                }).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
                                    e(this).removeClass(t + " animated")
                                }))
                            }))
                        };
                        a(), n.on("slideChange", (function () {
                            e(t + " [data-animation]").removeClass("animated")
                        })), n.on("slideChange", a)
                    }(t, i)
            }
            new Swiper(".it-brand-slider-active", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".it-brand-slider1-active", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                allowTouchMove: !1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".tp-bs-testi-active", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: !0,
                pagination: {
                    el: ".it-testi-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".it-testi-button-next",
                    prevEl: ".it-testi-button-prev"
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    }
                }
            }), new Swiper(".tp-bs-testi-active-2", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: !0,
                pagination: {
                    el: ".it-testi-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".it-testi-button-next-2",
                    prevEl: ".it-testi-button-prev-2"
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    }
                }
            }), new Swiper(".brand-slider-active", {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: !0,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".mp-brand-slider-active", {
                slidesPerView: 5,
                spaceBetween: 30,
                loop: !0,
                breakpoints: {
                    1200: {
                        slidesPerView: 5
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".app-brand-slider-active", {
                slidesPerView: 5,
                spaceBetween: 30,
                loop: !0,
                centeredSlides: !0,
                breakpoints: {
                    1200: {
                        slidesPerView: 5
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".ptg-brand-slider-active", {
                slidesPerView: 5,
                spaceBetween: 30,
                loop: !0,
                centeredSlides: !0,
                autoplay: {
                    delay: 5e3
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 5
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".tp-it-testi-active", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: !0,
                pagination: {
                    el: ".it-testi-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".it-testi-button-next",
                    prevEl: ".it-testi-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".tp-ptg-testi-active", {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: !0,
                pagination: {
                    el: ".ptg-testi-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".ptg-testi-button-next",
                    prevEl: ".ptg-testi-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".ca-testi-active", {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: !0,
                pagination: {
                    el: ".ptg-testi-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".ca-tasti-button-next",
                    prevEl: ".ca-tasti-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".da-project-active", {
                loop: !0,
                slidesPerView: "auto",
                spaceBetween: 30,
                pagination: {
                    el: ".da-project-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".da-project-button-next",
                    prevEl: ".da-project-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".law-service-slider", {
                slidesPerView: 4,
                loop: !0,
                slidesPerView: "auto",
                spaceBetween: 30,
                pagination: {
                    el: ".da-project-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".law-sv-button-next",
                    prevEl: ".law-sv-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".law-porffolio-active", {
                loop: !0,
                slidesPerView: "3",
                spaceBetween: 30,
                pagination: {
                    el: ".da-project-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".law-pf-button-next",
                    prevEl: ".law-pf-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".law-porffolio-active_2", {
                loop: true,
                slidesPerView: 4,   // 👈 default 4
                spaceBetween: 30,
                pagination: {
                    el: ".da-project-pagenation",
                    clickable: true
                },
                navigation: {
                    nextEl: ".law-pf-button-next_2",
                    prevEl: ".law-pf-button-prev_2"
                },
                breakpoints: {
                    1400: { slidesPerView: 4 }, // 👈 large screens
                    1200: { slidesPerView: 4 },
                    992: { slidesPerView: 3 }, // 👈 tablets landscape
                    768: { slidesPerView: 2 }, // 👈 tablets portrait
                    576: { slidesPerView: 1 }, // 👈 mobiles
                    0: { slidesPerView: 1 }
                }
            });

            new Swiper(".ha-portfolio-slider-active", {
                loop: !0,
                slidesPerView: 4,
                spaceBetween: 40,
                centeredSlides: !0,
                pagination: {
                    el: ".da-project-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".law-pf-button-next",
                    prevEl: ".law-pf-button-prev"
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 2.5
                    },
                    768: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".da-testi-active", {
                loop: !0,
                slidesPerView: "auto",
                spaceBetween: 30,
                pagination: {
                    el: ".da-testi-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".da-testi-button-next",
                    prevEl: ".da-testi-button-prev"
                }
            }), new Swiper(".app-testi-active", {
                loop: !0,
                slidesPerView: "auto",
                spaceBetween: 50,
                centeredSlides: !0,
                slidesPerView: 2,
                pagination: {
                    el: ".app-testi-pagenation",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".app-testi-button-next",
                    prevEl: ".app-testi-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".shop-swipper-slider-active", {
                loop: !0,
                slidesPerView: "auto",
                spaceBetween: 30,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".pd-sd-button-next",
                    prevEl: ".pd-sd-button-prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 1
                    },
                    0: {
                        slidesPerView: 1
                    }
                }
            }), new Swiper(".swiper--top", {
                spaceBetween: 0,
                centeredSlides: !0,
                speed: 3e4,
                slidesPerView: 1,
                autoplay: {
                    delay: 1
                },
                loop: !0,
                freeMode: !0,
                slidesPerView: "auto",
                allowTouchMove: !1,
                disableOnInteraction: !0
            }), new Swiper(".tp-gl-silder", {
                spaceBetween: 30,
                centeredSlides: !0,
                speed: 6e3,
                autoplay: {
                    delay: 1
                },
                loop: !0,
                slidesPerView: "auto",
                allowTouchMove: !1,
                disableOnInteraction: !0
            });
            new Swiper(".tp-gl-silder-2", {
                spaceBetween: 30,
                centeredSlides: !0,
                speed: 6e3,
                autoplay: {
                    delay: 1,
                    reverseDirection: !0
                },
                loop: !0,
                slidesPerView: "auto",
                allowTouchMove: !1,
                disableOnInteraction: !0
            })
        }))), e("[data-background").each((function () {
            e(this).css("background-image", "url( " + e(this).attr("data-background") + "  )")
        })), e(".tp-header-nav").on("click", (function () {
            e(".tp-offcanvas").addClass("opened"), e(".body-overlay").addClass("opened")
        })), e(".tp-offcanvas-close").on("click", (function () {
            e(".tp-offcanvas").removeClass("opened"), e(".body-overlay").removeClass("opened")
        })), e(".close-btns").on("click", (function () {
            e(".tost-box-area").slideToggle(1e3)
        })), e(".body-overlay").on("click", (function () {
            e(".tp-offcanvas").removeClass("opened"), e(".body-overlay").removeClass("opened")
        })), e(".counter-up").length > 0 && (e.ajaxSetup({
            cache: !0
        }), e.getScript(e("meta[name=siteurl]").attr("content") + "assets/js/counterup.js", (function () {
            e(".counter-up").counterUp({
                delay: 10,
                time: 1e3
            })
        }))), e(".cart-minus").on("click", (function () {
            var t = e(this).parent().find("input"),
                i = parseInt(t.val()) - 1;
            return i = i < 1 ? 1 : i, t.val(i), t.change(), !1
        })), e(".cart-plus").on("click", (function () {
            var t = e(this).parent().find("input");
            return t.val(parseInt(t.val()) + 1), t.change(), !1
        })), e("#showlogin").on("click", (function () {
            e("#checkout-login").slideToggle(900)
        }));
        var i = e("#tp-backto-top");
        e(window).on("scroll", (function () {
            e(window).scrollTop() > 300 ? i.addClass("show") : i.removeClass("show")
        })), i.on("click", (function (t) {
            t.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, "300")
        })), e(".tp-btn-hover").on("mouseenter", (function (t) {
            var i = e(this).offset(),
                n = t.pageX - i.left,
                a = t.pageY - i.top;
            e(this).find("b").css({
                top: a,
                left: n
            })
        })), e(".tp-btn-hover").on("mouseout", (function (t) {
            var i = e(this).offset(),
                n = t.pageX - i.left,
                a = t.pageY - i.top;
            e(this).find("b").css({
                top: a,
                left: n
            })
        }))
    }(jQuery), $(window).on("load", (function () {
        $(".page-loader").length > 0 && $(".page-loader").delay(1e3).fadeOut("slow")
    })), $(window).on("load", (function () {
        setTimeout((function () {
            if ($("#mobile").length > 0 || $("#mobile1").length > 0 || $("#mobile2").length > 0 || $("#mobile_m").length > 0) {
                let e = null,
                    t = null,
                    i = null,
                    n = null;
                $("<link>").appendTo("head").attr({
                    type: "text/css",
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.css"
                }), $.ajaxSetup({
                    cache: !0
                }), $.getScript("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js", (function () {
                    $("#mobile").length > 0 && (e = window.intlTelInput(document.querySelector("#mobile"), {
                        geoIpLookup: function (e) {
                            e("IN")
                        },
                        hiddenInput: "full_number",
                        initialCountry: "auto",
                        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js"
                    }), $("#mobile").on("countrychange", (function (t) {
                        $("#country_code").val(e.getSelectedCountryData().dialCode), $(this).next("input").val("+" + e.getSelectedCountryData().dialCode + " " + $(this).val())
                    })), $("#mobile").on("change", (function (t) {
                        $(this).next("input").val("+" + e.getSelectedCountryData().dialCode + " " + $(this).val())
                    }))), $("#mobile1").length > 0 && (t = window.intlTelInput(document.querySelector("#mobile1"), {
                        geoIpLookup: function (e) {
                            e("IN")
                        },
                        hiddenInput: "full_number",
                        initialCountry: "auto",
                        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js"
                    }), $("#mobile1").on("countrychange", (function (e) {
                        $("#country_code1").val(t.getSelectedCountryData().dialCode), $(this).next("input").val("+" + t.getSelectedCountryData().dialCode + " " + $(this).val())
                    })), $("#mobile1").on("change", (function (e) {
                        $(this).next("input").val("+" + t.getSelectedCountryData().dialCode + " " + $(this).val())
                    }))), $("#mobile2").length > 0 && (i = window.intlTelInput(document.querySelector("#mobile2"), {
                        geoIpLookup: function (e) {
                            e("IN")
                        },
                        hiddenInput: "full_number",
                        initialCountry: "auto",
                        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js"
                    }), $("#mobile2").on("countrychange", (function (e) {
                        $("#country_code2").val(i.getSelectedCountryData().dialCode), $(this).next("input").val("+" + i.getSelectedCountryData().dialCode + " " + $(this).val())
                    })), $("#mobile2").on("change", (function (e) {
                        $(this).next("input").val("+" + i.getSelectedCountryData().dialCode + " " + $(this).val())
                    }))), $("#mobile_m").length > 0 && (n = window.intlTelInput(document.querySelector("#mobile_m"), {
                        geoIpLookup: function (e) {
                            e("IN")
                        },
                        hiddenInput: "full_number",
                        initialCountry: "auto",
                        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js"
                    }), $("#mobile_m").on("countrychange", (function (e) {
                        $("#country_code_m").val(n.getSelectedCountryData().dialCode), $(this).next("input").val("+" + n.getSelectedCountryData().dialCode + " " + $(this).val())
                    })), $("#mobile_m").on("change", (function (e) {
                        $(this).next("input").val("+" + n.getSelectedCountryData().dialCode + " " + $(this).val())
                    })))
                }))
            }
        }), 3e3)
    }));
let menuToggle = document.querySelector(".menuToggle");
menuToggle.onclick = function () {
    menuToggle.classList.toggle("active")
}, jQuery((function (e) {
    e(".lazy").each((function () {
        var t = e(this),
            i = t.attr("data-src"),
            n = new Image;
        n.onload = function () {
            t.attr("src", i)
        }, n.src = i, e(this).removeAttr("data-src"), e(this).removeClass("thumbnail"), e(this).removeClass("lazy")
    })), e(".bg-lazy").each((function () {
        var t = e(this).offset().top,
            i = e(this).offset().top + e(this).outerHeight(),
            n = screen.height + 200,
            a = e(window).scrollTop();
        if (n > t && a < i) {
            var s = e(this),
                o = s.attr("data-src"),
                l = new Image;
            l.onload = function () {
                s.css({
                    "background-image": "url(" + encodeURI(o).replace("(", "%28").replace(")", "%29") + ")"
                }), e(this).removeClass("bg-lazy")
            }, l.src = o, e(this).removeClass("thumbnail")
        }
    })), window.onload = function () {
        window.onscroll = function () {
            e("body").offset().top, e("body").offset().top, e("body").outerHeight(), e(window).scrollTop(), e(window).innerHeight(), e(window).scrollTop();
            e(".lazy").each((function () {
                var t = e(this).offset().top,
                    i = e(this).offset().top + e(this).outerHeight(),
                    n = e(window).scrollTop() + e(window).innerHeight(),
                    a = e(window).scrollTop();
                if (n > t && a < i) {
                    var s = e(this),
                        o = s.attr("data-src"),
                        l = new Image;
                    l.onload = function () {
                        s.attr("src", o)
                    }, l.src = o, e(this).removeAttr("data-src"), e(this).removeClass("thumbnail"), e(this).removeClass("lazy")
                }
            })), e(".bg-lazy").each((function () {
                var t = e(this).offset().top,
                    i = e(this).offset().top + e(this).outerHeight(),
                    n = e(window).scrollTop() + e(window).innerHeight(),
                    a = e(window).scrollTop();
                if (n > t && a < i) {
                    var s = e(this),
                        o = s.attr("data-src"),
                        l = new Image;
                    l.onload = function () {
                        s.css({
                            "background-image": "url(" + encodeURI(o).replace("(", "%28").replace(")", "%29") + ")"
                        }), e(this).removeClass("bg-lazy")
                    }, l.src = o, e(this).removeClass("thumbnail")
                }
            })), e(".lazy-frame").each((function () {
                var t = e(this).offset().top,
                    i = e(this).offset().top + e(this).outerHeight(),
                    n = e(window).scrollTop() + e(window).innerHeight(),
                    a = e(window).scrollTop();
                n > t && a < i && (e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src"), e(this).removeClass("lazy-frame"))
            }))
        }
    }
})),
    function (e) {
        e.fn.extend({
            easyResponsiveTabs: function (t) {
                var i = t = e.extend({
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    activate: function () { }
                }, t),
                    n = i.type,
                    a = i.fit,
                    s = i.width;
                tabsRight = "tab-right", accord = "accordion";
                var o = window.location.hash,
                    l = !(!window.history || !history.replaceState);
                e(this).bind("tabactivate", (function (e, i) {
                    "function" == typeof t.activate && t.activate.call(i, e)
                })), this.each((function () {
                    var i, r = e(this),
                        c = r.find("ul.resp-tabs-list"),
                        d = r.attr("id");
                    r.find("ul.resp-tabs-list li").addClass("resp-tab-item"), r.css({
                        display: "block",
                        width: s
                    }), r.find(".resp-tabs-container > div").addClass("resp-tab-content"),
                        function () {
                            if ("tab-top" == n && r.addClass("resp-tabs-top"), "tab-bottom" == n) {
                                var e = r.addClass("resp-tabs-bottom");
                                e.find("ul.resp-tabs-list").insertAfter(e.find(".resp-tabs-container"))
                            }
                            "tab-left" == n && r.addClass("resp-tabs-left"), n == tabsRight && r.addClass("resp-tabs-right"), 1 == a && r.css({
                                width: "100%",
                                margin: "0px"
                            }), n == accord && (r.addClass("resp-accordion"), r.find(".resp-tabs-list").css("display", "none"))
                        }(), r.find(".resp-tab-content").before("<h4 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h4>");
                    var p = 0;
                    r.find(".resp-accordion").each((function () {
                        i = e(this);
                        var t = r.find(".resp-tab-item:eq(" + p + ")"),
                            n = r.find(".resp-accordion:eq(" + p + ")");
                        n.append(t.html()), n.data(t.data()), i.attr("aria-controls", "tab_item-" + p), p++
                    }));
                    var u = 0;
                    r.find(".resp-tab-item").each((function () {
                        $tabItem = e(this), $tabItem.attr("aria-controls", "tab_item-" + u), $tabItem.attr("role", "tab");
                        var t = 0;
                        r.find(".resp-tab-content").each((function () {
                            e(this).attr("aria-labelledby", "tab_item-" + t), t++
                        })), u++
                    }));
                    var v = 0;
                    if ("" != o) {
                        var w = o.match(new RegExp(d + "([0-9]+)"));
                        null !== w && 2 === w.length && (v = parseInt(w[1], 10) - 1) > u && (v = 0)
                    }
                    e(r.find(".resp-tab-item")[v]).addClass("resp-tab-active"), !0 === t.closed || "accordion" === t.closed && !c.is(":visible") || "tabs" === t.closed && c.is(":visible") ? e(r.find(".resp-tab-content")[v]).addClass("resp-tab-content-active resp-accordion-closed") : (e(r.find(".resp-accordion")[v]).addClass("resp-tab-active"), e(r.find(".resp-tab-content")[v]).addClass("resp-tab-content-active").attr("style", "display:block")), r.find("[role=tab]").each((function () {
                        e(this).click((function () {
                            var t = e(this),
                                i = t.attr("aria-controls");
                            if (t.hasClass("resp-accordion") && t.hasClass("resp-tab-active")) return r.find(".resp-tab-content-active").slideUp("", (function () {
                                e(this).addClass("resp-accordion-closed")
                            })), t.removeClass("resp-tab-active"), !1;
                            if (!t.hasClass("resp-tab-active") && t.hasClass("resp-accordion") ? (r.find(".resp-tab-active").removeClass("resp-tab-active"), r.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), r.find("[aria-controls=" + i + "]").addClass("resp-tab-active"), r.find(".resp-tab-content[aria-labelledby = " + i + "]").slideDown().addClass("resp-tab-content-active")) : (r.find(".resp-tab-active").removeClass("resp-tab-active"), r.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), r.find("[aria-controls=" + i + "]").addClass("resp-tab-active"), r.find(".resp-tab-content[aria-labelledby = " + i + "]").addClass("resp-tab-content-active").attr("style", "display:block")), t.trigger("tabactivate", t), l) {
                                var n = window.location.hash,
                                    a = d + (parseInt(i.substring(9), 10) + 1).toString();
                                if ("" != n) {
                                    var s = new RegExp(d + "[0-9]+");
                                    a = null != n.match(s) ? n.replace(s, a) : n + "|" + a
                                } else a = "#" + a;
                                history.replaceState(null, null, a)
                            }
                        }))
                    })), e(window).resize((function () {
                        r.find(".resp-accordion-closed").removeAttr("style")
                    }))
                }))
            }
        })
    }(jQuery), window.onhashchange = function () {
        var e = window.location.hash.split("left-tab")[1];
        $(".resp-tabs-list li:nth-child(" + e + ")").trigger("click")
    }, $(document).ready((function () {
        $.fn.easyResponsiveTabs ? ($("#top-tab").easyResponsiveTabs({
            type: "tab-top"
        }), $("#top-tab1").easyResponsiveTabs({
            type: "tab-top"
        }), $("#bottom-tab").easyResponsiveTabs({
            type: "tab-bottom"
        }), $("#left-tab").easyResponsiveTabs({
            type: "tab-left"
        }), $("#right-tab").easyResponsiveTabs({
            type: "tab-right"
        }), $("#accordion").easyResponsiveTabs({
            type: "accordion"
        })) : console.log("jQuery easyResponsiveTabs plugin not found"), $(document).on(".resp-accordion", "click", (function () {
            $(".resp-tabs-container").find(".lazy").each((function () {
                var e = $(this),
                    t = e.attr("data-src"),
                    i = new Image;
                i.onload = function () {
                    e.attr("src", t)
                }, i.src = t, $(this).removeAttr("data-src"), $(this).removeClass("thumbnail"), $(this).removeClass("lazy")
            }))
        }))
    })), $(document).ready((function () {
        $(".popup-btn").click((function () {
            var e = $("#" + $(this).data("popup"));
            e.addClass("active").find(".fade-out").click((function () {
                e.css("opacity", "0").find(".popup-content").css("margin-top", "350px"), setTimeout((function () {
                    $(".popup").removeClass("active"), e.css("opacity", "").find(".popup-content").css("margin-top", "")
                }), 600)
            }))
        }))
    })), $("[data-fancybox]").length > 0 && $.getScript($("meta[name=siteurl]").attr("content") + "assets/js/jquery.fancybox.js?v=1.2", (function () { }));