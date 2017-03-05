//(function () {
//    'use strict';
//})();
var parallaxMouseMove = (function() {
    return {
        init: function init() {
            if ("#scene.axis") {
                var parallaxContainer = document.getElementById('scene'),
                    layers = parallaxContainer.children;

                window.addEventListener('mousemove', function (e) {
                    var pageX = e.pageX,
                        pageY = e.pageY,
                        initialX = (window.innerWidth / 2) - pageX,
                        initialY = (window.innerHeight / 2) - pageY;

                    //console.log(document.);

                    [].slice.call(layers).forEach(function (layer, i) {
                        var divider = i / 100,
                            bottomPosition = (window.innerHeight / 2) * divider,
                            positionX = initialX * divider,
                            positionY = initialY * divider,
                            layerStyle = layer.style,
                            transFormString = 'translate3d(' + positionX + 'px,' + positionY + 'px,0)';
                        layerStyle.transform = transFormString;
                        layerStyle.bottom = '-' + bottomPosition + 'px';
                    });


                });
            }
        }
    }
})();


var flipper = (function() {
    return {
        init: function init() {
            console.log('ghd');
            var button = $('.auth__button'),
            flipContainer = $('.flipper'),
            backButton = $('.auth__back-button');
            button.on('click', (function() {

                flipContainer.addClass('flip');
                button.addClass('auth__button_hidden');
            }));
            backButton.on('click', (function() {
                flipContainer.removeClass('flip');
                button.removeClass('auth__button_hidden');
            }));
        }
    }
})();


window.onload = (function() {
    //console.log('ghd');
    parallaxMouseMove.init();
    flipper.init();
});



//(function() {
//
//    var parallaxScroll = (function () {
//
//        var bg = document.querySelector('.parallax-bg'),
//            user = document.querySelector('.parallax-user'),
//            sectionName = document.querySelector('.parallax-name');
//
//        return {
//            move: function (block, windowScroll, strafeAmount) {
//                var strafe = windowScroll / -strafeAmount + '%',
//                    style = block.style;
//
//                style.marginTop = strafe;
//            },
//
//            init: function (wScroll) {
//                this.move(bg, wScroll, 45);
//                this.move(sectionName, wScroll, 35);
//                this.move(user, wScroll, 25);
//            }
//        }
//
//    })();
//
//    window.onscroll = function() {
//
//        var wScroll = window.pageYOffset;
//       // console.log(wScroll);
//        parallaxScroll.init(wScroll);
//    };
//})();
//
