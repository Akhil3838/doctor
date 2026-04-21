(function ($) {
  $(function () {

    // Navbar scroll effect
    var $nav = $('nav');
    if ($nav.length) {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
          $nav.addClass('scrolled');
        } else {
          $nav.removeClass('scrolled');
        }
      });
    }

    // Dropdown toggle for mobile
    $('.dropdown-toggle').on('click', function (e) {
      if ($(window).width() <= 768) {
        e.preventDefault();

        var $parent = $(this).closest('.dropdown');

        $('.dropdown').not($parent).removeClass('active');
        $parent.toggleClass('active');
      }
    });

    // ================= CARD CAROUSEL (jQuery version) =================
    $('.card-carousel').each(function () {
      var $carousel = $(this);
      var $images = $carousel.find('img');
      var index = 0;

      setInterval(function () {
        $images.eq(index).removeClass('active');
        index = (index + 1) % $images.length;
        $images.eq(index).addClass('active');
      }, 2500);
    });

    // ================= GALLERY MODAL =================
    var eventImages = {
      event1: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
        'https://images.unsplash.com/photo-1511578314322-379afb476865'
      ],
      event2: [
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
        'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf'
      ],
      event3: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865',
        'https://images.unsplash.com/photo-1532103054090-3491f1a05d0d'
      ]
    };

    if ($('#eventModal').length) {
      $('.event-card[data-event]').on('click', function () {
        var eventKey = $(this).data('event');
        var $content = $('#modalContent').empty();
        var images = eventImages[eventKey] || [];

        $.each(images, function (i, src) {
          $('<img>').attr('src', src).appendTo($content);
        });

        $('#eventModal').show();
      });

      $('#eventModal .close').on('click', function () {
        $('#eventModal').hide();
      });

      $(window).on('click', function (e) {
        if ($(e.target).is('#eventModal')) {
          $('#eventModal').hide();
        }
      });
    }

  });
})(jQuery);