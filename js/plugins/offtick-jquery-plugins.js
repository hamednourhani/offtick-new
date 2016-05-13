/**
 * Created by itstar on 2016/05/12.
 */
(function ( $ ) {

    $.fn.hide_site_section = function( options ) {

         //This is the easiest way to have default options.
        var settings = $.extend({
            togglerID : "hideToggler",
            sectionName : "section"
        }, options );


        var hide_section = this;

        var hide_section_toggler = $('#'+settings.togglerID);
        var section_show_button = hide_section_toggler.children('#showSection'+settings.sectionName);
        var section_hide_button = hide_section_toggler.children('#hideSection'+settings.sectionName);
        var section_height = this.innerHeight();
        var showSectionAnimation = {
            '-webkit-transform' : 'translateY(' +'-'+section_height+'px)',
            '-moz-transform'    : 'translateY(' +'-'+section_height+'px)',
            '-ms-transform'     : 'translateY(' +'-'+section_height+'px)',
            '-o-transform'      : 'translateY(' +'-'+section_height+'px)',
            'transform'         : 'translateY(' +'-'+section_height+'px)'
        };

        var hideSectionAnimation = {
            '-webkit-transform' : 'translateY(0px)',
            '-moz-transform'    : 'translateY(0px)',
            '-ms-transform'     : 'translateY(0px)',
            '-o-transform'      : 'translateY(0px)',
            'transform'         : 'translateY(0px)'
        };
        var autoHeight = {
            'height' : section_height,
        }

        var zeroHeight ={
            'height' : '0px',
        }

        hide_section.css(zeroHeight);
        hide_section.show = false;

        hide_section_toggler.click(function(event){
            event.preventDefault();
           if(hide_section.show == false) {
               hide_section.css(autoHeight);
               hide_section.show = true;
               section_show_button.css('display','none');
               section_hide_button.css('display','inline-block');
               $('html, body').animate({
                   scrollTop: $(hide_section).offset().top
               }, 2000);
           } else {
               hide_section.css(zeroHeight);
               hide_section.show = false;
               section_show_button.css('display','inline-block');
                section_hide_button.css('display','none');

           }

        });


        return this;
    };

}( jQuery ));
