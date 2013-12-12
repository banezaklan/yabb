define([
    'jquery',
    'underscore',
    'backbone',
    'vm',
    'text!templates/MainMenuTemplate.html',
], function($, _, Backbone, Vm, MainMenuTemplate ) {
    var MainMenuView = Backbone.View.extend({
        el: '#main-menu',
        initialize: function() {
        },
        render: function() {
            $(this.el).html(MainMenuTemplate);
            $('a[href="' + window.location.hash + '"]').addClass('active');
        },
        events: {
            'click a': 'highlightMenuItem'
        },
        highlightMenuItem: function(ev) {
            $('.active').removeClass('active');
            $(ev.currentTarget).addClass('active');
        }
    })

    return MainMenuView;
});
