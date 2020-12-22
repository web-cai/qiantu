(function () {
        var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        var timeoutId;
        function setRem() {
            var clientWidth = document.documentElement.clientWidth;
            var nowPX = clientWidth / 375 * 100;
            document.documentElement.style.fontSize = nowPX + 'px';
        }
        setRem();
        window.addEventListener(supportsOrientationChange, function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                setRem();
            }, 300);
        }, false);
 })();
