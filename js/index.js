// var $ = require('jquery')
// let { validate } = require('jquery-validation');
// require('jquery-validation/dist/localization/messages_es.min.js');
// require('jquery-validation/dist/additional-methods.js');
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel';









function colorCustomTabsContent() {
    jQuery(".tabs-topics-content-container .tab-topics-content .principal-content .text-principal-content").each(function() {
        let dataBackgroundColor = jQuery(this).attr("data-background-color");
        let dataColorText = jQuery(this).attr("data-text-color");
        jQuery(this).css("background-color", dataBackgroundColor);
        jQuery(this).css("color", dataColorText);

    });
}


jQuery(".tabs-topics .tabs-topics-list .owl-dots .owl-dot.active")

// ==================== INICIO TABS INTERNOS CONTENIDO PARA VIVIR / TRABAJAR ====================

function initialTabsByFeatures() {
    // agregar HREF a los tabs 
    let tabsTopics = jQuery(".tabs-topics .tabs-topics-list a")
    jQuery(tabsTopics).each((i, element) => {
        jQuery(element).attr("href", `#tabMediaModel${i}`)
        jQuery(element).attr("class", `tab-link-media-model ${i}`)
    })

    // agregar id a los slides 
    let sliderImagesModels = jQuery(".tabs-topics-content-container .tab-topics-content")
    jQuery(sliderImagesModels).each((i, element) => {
        jQuery(element).attr("id", `tabMediaModel${i}`)
    })

    jQuery(".tabs-topics .tabs-topics-list .tabs-topics-list-items:first-child").addClass("active")

    jQuery(".tabs-topics-content-container .tab-topics-content").first().addClass("active")

    jQuery(".tabs-topics .tabs-topics-list .tabs-topics-list-items").each((i, element) => {
        jQuery(element).on("click", function() {
            jQuery(".tabs-topics .tabs-topics-list .tabs-topics-list-items").removeClass("active")
            jQuery(this).addClass("active");

            let contenidoMediaActivo = jQuery(this).find('.tab-link-media-model').attr("href")

            jQuery(".tabs-topics-content-container .tab-topics-content").removeClass("active")
            jQuery(contenidoMediaActivo).addClass('active');
        })

    })

}


// Shorthand for $( document ).ready()
$(function() {


    let tabsSlider = jQuery(".tabs-topics .tabs-topics-list");

    if (jQuery(window).width() <= 576) {
        function sliderTabs() {
            tabsSlider.addClass('owl-carousel').owlCarousel({
                items: 2,
                loop: true,
                nav: false,
                dots: true,
                autoplay: false,
                navPosition: 'bottom', //posicion bullets
                controls: false, //botones prev/next
                preventScrollOnTouch: 'force',
                responsive: {
                    0: {
                        gutter: 0, //separacion entre slides
                        items: 2,
                        edgePadding: 0, //espaciado hacia los lados
                        autoplay: false,
                        autoplayHoverPause: true,
                        autoplayTimeout: 3500,
                        autoplayButtonOutput: false,
                        center: true, //centrar el slide activo
                    },
                    768: {
                        gutter: 0, //separacion entre slides
                        items: 3,
                        edgePadding: 0, //espaciado hacia los lados
                        autoplay: false
                    },

                    992: {
                        gutter: 0, //separacion entre slides
                        items: 3,
                        edgePadding: 0, //espaciado hacia los lados
                        autoplay: false
                    },
                }
            });

        }
    } else {
        jQuery(this).removeClass("owl-carousel")
    }

    initialTabsByFeatures();
    colorCustomTabsContent();
    sliderTabs();

});



jQuery(window).on("load", function(e) {

});