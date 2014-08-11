define(["jquery", "marionette", "parse", "views/form", "settings"],
    function($, Marionette, Parse, FormView, settings){

        var application = new Backbone.Marionette.Application();

        Parse.initialize(settings.parseApplicationId, settings.parseApplicationKey);

        application.addRegions({
            contactRegion: {
                selector: '#contact-form'
            }
        });


        application.on('start', function(){


            // animate homepage scroll
            $('.down-arrow').click(function(){
                $('html, body').animate({
                     scrollTop: $("#mission").offset().top
                 }, 1200);
            });

            // initialize form
            var contactView = new FormView();
            application.contactRegion.show(contactView);

        });

        return application;
});