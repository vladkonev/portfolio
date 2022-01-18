$(document).ready(function(){
    $('div.promo__btns').on('click', 'a:not(.btn)', function() {
        $(this)
          .addClass('btn').siblings().removeClass('btn');
      });

      $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $('#feedback-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
              },
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Введите своё имя",
                minlength: jQuery.validator.format("Минимум {0} символа")
              },
            email: {
              required: "Введите email",
              email: "Неправильно введён email"
            },
            checkbox: {
                required: "Необходимо дать согласие"
              }
          }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");


            $('form').trigger('reset');
        });
        return false;
    });
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});