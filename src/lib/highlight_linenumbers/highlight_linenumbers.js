((win, doc) => {
  
    // 行号和高亮行处理 
    let hljs = {
        $code: doc.querySelectorAll('pre code'),
        hasClass: function (ele, cls) {
            return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        addClass: function (ele, cls) { 
            if (!hljs.hasClass(ele, cls)) {
                ele.className += ' ' + cls;
            }
        },
        removeClass: function (ele, cls) {
            if (hljs.hasClass(ele,cls)) {
                ele.className = ele.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'),' ');
            }
        }
    };
    /**
     * 初始化
     */
    hljs.init = function () {
        let $code = hljs.$code;
        if ($code && $code.length) {
            for (let i = 0; i < $code.length; i++) {
                const elem = $code[i];
                // 输出行号, -1是为了让最后一个换行忽略
                let lines = elem.innerHTML.replace(/>/g, '&gt;').replace(/</g, '&lt;').split(/\n/);
                elem.innerHTML = '<ul>' + lines.map(item => `<li>${item}</li>`).join('') + '</ul>';
                hljs.addClass(elem, 'code-with-line-number');
            }
        }
    };
    hljs.init();
})(window, document);