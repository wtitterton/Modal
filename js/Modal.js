
(function($) {

    $.Modal = function(el, options) {

        var defaults = {
            propertyName: 'value',
            onSomeEvent: function() {},
            overlay: $("<div class='overlay'></div>"),
            container:$("<div class='modal-container'></div>"),
            openBtn:'.test',
            overlayColor:"rgba(0,0,0,.3)"
        }
        var modal = this;
        modal.settings = {}
        var init = function()
        {
            modal.settings = $.extend({}, defaults, options);
            modal.el = el;
            $(modal.el).append(modal.settings.overlay);
            $(modal.settings.overlay).append(modal.settings.container);
            $(modal.settings.openBtn).on('click', modal.open);

            // apply style options
            $(modal.settings.overlay).css({
              background: modal.settings.overlayColor,
            })
        }

        // public methods
        modal.open = function()
        {
          $(modal.settings.overlay).addClass('show');
          $(modal.el).addClass('no-scroll');
        }
        modal.close = function()
        {
          $(modal.settings.overlay).removeClass('show');
          $(modal.el).removeClass('no-scroll');
        }
        // private methods
        var foo_private_method = function()
        {

        }
        init();
      }

})(jQuery);
