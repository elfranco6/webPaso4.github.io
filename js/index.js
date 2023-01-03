// var $ = require('jquery')
// let { validate } = require('jquery-validation');
// require('jquery-validation/dist/localization/messages_es.min.js');
// require('jquery-validation/dist/additional-methods.js');
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel';

// ('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// })



function colorCustomTabsContent() {
    jQuery(".tabs-topics-content-container .tab-topics-content .principal-content .text-principal-content").each(function() {
        let dataBackgroundColor = jQuery(this).attr("data-background-color");
        let dataColorText = jQuery(this).attr("data-text-color");
        jQuery(this).css("background-color", dataBackgroundColor);
        jQuery(this).css("color", dataColorText);

    });
}

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

jQuery(window).on("load", function(e) {

});



// Shorthand for $( document ).ready()
$(function() {
    initialTabsByFeatures();
    colorCustomTabsContent();

})