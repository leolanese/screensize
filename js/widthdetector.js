(function(){

    // make it safe to use the console.log always
    (function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
    {console.log();return window.console;}catch(err){return window.console={};}})());

    var width;
    if (!width) {
        width = {};
    }

    width.detector = (function(){
        // Private members
        var n1 = 'im private',
            n2 = function(id, url){
        };



        return {
            // Public members (returned)
            w: '',
            bp: ['0', '250', '320', '480', '768', '1024', '1900'],

            calc: function(n){
                var i=0, c=1, cont=0,
                    len = width.detector.bp.length,
                    w = document.documentElement.clientWidth;

                while (cont < len) {
                    if ( w > width.detector.bp[i] && w <= width.detector.bp[c]) {
                        console.log( w +'px'+ ':[' + width.detector.bp[i] + '-' + width.detector.bp[c] + ']');
                        return 'w' + width.detector.bp[c];
                    }
                    ++i; ++c; cont++;
                }
            },

            debounce: function(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            },

            // event handler
            resize: function() {
                console.log('resize');
                document.documentElement.className = width.detector.calc();
            },

            // event handler
            rotate: function(){
                console.log('rotate');
                document.documentElement.className = width.detector.calc();
            }

        };

    })();

    window.addEventListener('resize', width.detector.debounce(function(event) {
        width.detector.resize();
    }, 300));


    window.addEventListener('orientationchange', width.detector.debounce(function(event) {
        width.detector.rotate();
    }, 300));

    document.documentElement.className =  width.detector.calc();

})();