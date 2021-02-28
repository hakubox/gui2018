//图片边框指令
Vue.directive('imgborder', {
    inserted: function (el, binding) {
        el.className += ' img-border';

        var slices = binding.value.slice.split(' '),
            sliceTop = '',
            sliceRight = '',
            sliceBottom = '',
            sliceLeft = '',
            topImg = '',
            rightImg = '',
            bottomImg = '',
            leftImg = '',
            centerImg = '';
        switch (slices.length) {
            case 1:
                sliceTop = slices[0];
                sliceRight = slices[0];
                sliceBottom = slices[0];
                sliceLeft = slices[0];
                break;
            case 2:
                sliceTop = slices[0];
                sliceRight = slices[1];
                sliceBottom = slices[0];
                sliceLeft = slices[1];
            case 4:
                sliceTop = slices[0];
                sliceRight = slices[1];
                sliceBottom = slices[2];
                sliceLeft = slices[3];
            default:
                break;
        }

        el.style.padding = [sliceTop, sliceRight, sliceBottom, sliceLeft].join(' ');

        var img = new Image();
        img.src = binding.value.src;
        var timer = null;
        img.onload = function() {
            var _fn = function() {
                if(el.offsetWidth > 0) {
                    clearTimeout(timer);
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext('2d');
                    var _top = parseInt(sliceTop),
                        _right = parseInt(sliceRight),
                        _bottom = parseInt(sliceBottom),
                        _left = parseInt(sliceLeft);

                    var topWidth = el.offsetWidth - _left - _right;
                    var leftHeight = el.offsetHeight - _top - _bottom;
                        
                    //Top Image
                    canvas.width = topWidth;
                    canvas.height = _top;
                    ctx.drawImage(img, _left, 0, img.width - _left - _right, _top, 0, 0, topWidth, _top);
                    topImg = canvas.toDataURL("image/png");

                    //Bottom Image
                    canvas.width = topWidth;
                    canvas.height = _top;
                    ctx.drawImage(img, _left, img.height - _bottom, img.width - _left - _right, _bottom, 0, 0, topWidth, _bottom);
                    bottomImg = canvas.toDataURL("image/png");

                    //Left Image
                    canvas.width = _left;
                    canvas.height = leftHeight;
                    ctx.drawImage(img, 0, _top, _left, img.height - _top - _bottom, 0, 0, _left, leftHeight);
                    leftImg = canvas.toDataURL("image/png");

                    //Right Image
                    canvas.width = _right;
                    canvas.height = leftHeight;
                    ctx.drawImage(img, img.width - _right, _top, _right, img.height - _top - _bottom, 0, 0, _right, leftHeight);
                    rightImg = canvas.toDataURL("image/png");

                    //Center Image
                    canvas.width = topWidth;
                    canvas.height = leftHeight;
                    ctx.drawImage(img, _left, _top, img.width - _left - _right, img.height - _top - _bottom, 0, 0, topWidth, leftHeight);
                    centerImg = canvas.toDataURL("image/png");

                    el.style.backgroundImage = 'url(' + centerImg + ')';
                    el.style.backgroundPosition = sliceTop + ' ' + sliceLeft;

                    el.innerHTML += 
                        '<b class="left" style="background-image:url(\''+leftImg+'\');top:'+sliceTop+';width:'+sliceLeft+';height:calc(100% - ' + sliceTop + ' - ' + sliceBottom + ')"></b>' +
                        '<b class="top-left" style="background-image:url(\''+binding.value.src+'\');background-position:top left;width:'+sliceLeft+';height:'+sliceTop+'"></b>' +
                        '<b class="top" style="background-image:url(\''+topImg+'\');left:'+sliceLeft+';height:'+sliceTop+';width:calc(100% - ' + sliceLeft + ' - ' + sliceRight + ')"></b>' +
                        '<b class="top-right" style="background-image:url(\''+binding.value.src+'\');background-position:top right;width:'+sliceRight+';height:'+sliceTop+'"></b>' +
                        '<b class="right" style="background-image:url(\''+rightImg+'\');top:'+sliceTop+';width:'+sliceRight+';height:calc(100% - ' + sliceTop + ' - ' + sliceBottom + ')"></b>' +
                        '<b class="bottom-left" style="background-image:url(\''+binding.value.src+'\');background-position:bottom left;width:'+sliceLeft+';height:'+sliceBottom+'"></b>' +
                        '<b class="bottom" style="background-image:url('+bottomImg+');left:'+sliceLeft+';height:'+sliceBottom+';width:calc(100% - ' + sliceLeft + ' - ' + sliceRight + ')"></b>' +
                        '<b class="bottom-right" style="background-image:url(\''+binding.value.src+'\');background-position:bottom right;width:'+sliceRight+';height:'+sliceBottom+'"></b>';
                } else {
                    timer = setTimeout(_fn, 50);
                }
            };
            timer = setTimeout(_fn, 50);
        }
    }
})