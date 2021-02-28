//页面高亮
hljs.initHighlightingOnLoad();

//复制对象
let clipboard1 = null;
//全局代码编辑器
let __Editor = null;
let __EditorElement = document.querySelector('#code-mirror');
let __EditorViewElement = document.querySelector('.code-mirror-view');
let __EditorCloseElement = document.querySelector('.code-mirror-close');
let __EditorCodeElement = document.querySelector('#code-mirror-code');

let __nodes = null;
let __themeListElement = document.querySelector('.theme-list');

let __superCopyElement = document.querySelector('[supercopy]');
let __superCopySpan = document.getElementById('spanCopy');

let __txtSearch = document.querySelector('#txtSearch');

__EditorElement.addEventListener("keydown", e => {
    //ESC
    if(e.keyCode == 27) {
        __IsCodeEdit = false;
    }
});

//手动切换代码类型
__EditorCodeElement.addEventListener("change", e => {
    __Editor.setOption("mode", __EditorTypes[e.target.value]);
    switch(e.target.value) {
        case 'html':
            __EditorViewElement.innerHTML = __Editor.getValue();
            break;
        case 'javascript':
            __EditorViewElement.innerHTML = eval(__Editor.getValue());
            break;
    }
});

//是否开始编辑代码
Object.defineProperty(window, '__IsCodeEdit', {
    get() {
        return !__EditorElement.classList.contains('ishide');
    },
    set(value) {
        if(value) __EditorElement.classList.remove('ishide');
        else __EditorElement.classList.add('ishide');
    }
});

//是否开始任意复制
Object.defineProperty(window, '__IsSuperCopy', {
    get() {
        return __superCopyElement.classList.contains('active');
    },
    set(value) {
        if(value) {
            __superCopyElement.classList.add('active');
            __superCopyElement.setAttribute('title', '关闭任意复制');
        } else { 
            __superCopyElement.classList.remove('active');
            __superCopyElement.setAttribute('title', '开启任意复制');
            [].forEach.call(document.querySelectorAll('.supercopy_active'), e => e.classList.remove('supercopy_active'));
        }
    }
});

let __themeName = '';
//获取/切换当前主题
Object.defineProperty(window, 'CurrentTheme', {
    get() {
        return __themeName;
    },
    set(value) {
        if(__themeName != value) {
            __themeName = value;
            [].map.call(__themeListElement.querySelectorAll('[theme]'), e => {
                if(e.getAttribute('theme') != value) e.classList.remove('active');
                else e.classList.add('active');
            });
            less.modifyVars({ '@themeName': '"' + value + '"' });
            localStorage.CurrentTheme = value;
        }
    }
});

if(localStorage.CurrentTheme) {
    CurrentTheme = localStorage.CurrentTheme;
}

[].map.call(__themeListElement.querySelectorAll('[theme]'), el => {
    if(el.getAttribute('theme') != CurrentTheme) el.classList.remove('active');
    else el.classList.add('active');
    el.addEventListener('click', e => {
        CurrentTheme = e.currentTarget.getAttribute('theme');
    });
});

let __EditorTypes = {
    'html': {
        name: 'htmlmixed',
        scriptTypes: [
            { matches: /\/x-handlebars-template|\/x-mustache/i, mode: null },
            { matches: /(text|application)\/(x-)?vb(a|script)/i, mode: 'vbscript' }
        ]
    },
    'javascript': 'javascript',
    'css': 'css',
    'less': 'text/x-less',
    'vue-javascript': 'javascript',
    'vue-html': {
        name: 'htmlmixed',
        scriptTypes: [
            { matches: /\/x-handlebars-template|\/x-mustache/i, mode: null },
            { matches: /(text|application)\/(x-)?vb(a|script)/i, mode: 'vbscript' }
        ]
    }
};


//全局提示
let __scrollTop = 0;
let __asideElement = document.querySelector('aside');

//页面滚动操作
let __ticking = false; // rAF 触发锁
let __oldNode = null;


let __currentL1Title = '';
let __bigTitles = Object.assign.apply({}, [].map.call(document.querySelectorAll('#main_category [menulv1]'), i=>{
    return { [i.getAttribute('menulv1')]: i };
}));

const checkMenu = (top = __scrollTop) => {
    let _node = __nodes.find((i,index) => {
        return i.top <= top && __nodes[index+1].top > top;
    });
    if(!_node) _node = __nodes[0];
    if(!__oldNode) {
        __oldNode = _node;
        _node.el.classList.add('active');
    } else if(__oldNode.id !== _node.id) {
        __oldNode.el.classList.remove('active');
        _node.el.classList.add('active');
        __oldNode = _node;
    }

    //console.log(_node.el.parentNode.offsetTop);

    if(_node.l1Title != __currentL1Title) {
        __bigTitles[_node.l1Title].classList.add('current');
        __currentL1Title && __bigTitles[__currentL1Title].classList.remove('current');
        __currentL1Title = _node.l1Title;
    }
}

const getTop = (element) => {
    let _getTop = (e) => {
        var offset = e.offsetTop;
        if (e.offsetParent != null) offset += _getTop(e.offsetParent);
        return offset;
    }
    return _getTop(element);
}

const setScroll = (location = 0, control, speed = 12, fn) => {
    if (!control) {
        // if(location > document.documentElement.offsetHeight - document.documentElement.clientHeight) {
        //     location = document.documentElement.offsetHeight - document.documentElement.clientHeight;
        // }
        control = document.documentElement.scrollTop !== undefined ? document.documentElement : document.body;
        if (document.documentElement.scrollHeight < document.documentElement.clientHeight) {
            fn && fn(); return;
        } else if (location + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
            fn && fn(); return;
        }
    }
    var newlocation = 0;

    if (speed == 0) {
        control.scrollTop = location;
    } else {
        var _timer = () => { 
            requestAnimationFrame(e => {
                if (location > control.scrollTop) {
                    newlocation = (control.scrollTop - location) / speed;
                    if (Math.round(newlocation) == 0) {
                        control.scrollTop = location;
                    }
                    if(control.scrollTop - newlocation > location) {
                        control.scrollTop = location;
                        return;
                    }
                    control.scrollTop -= Math.min(Math.floor(newlocation), -2);
                    _timer();
                } else if (location < control.scrollTop) {
                    newlocation = (location - control.scrollTop) / speed;
                    if (Math.ceil(newlocation) == 0) {
                        control.scrollTop = location;
                    }
                    if(control.scrollTop + newlocation < location) {
                        control.scrollTop = location;
                        return;
                    }
                    control.scrollTop += Math.min(Math.floor(newlocation), -2);
                    _timer();
                } else return;
            });
        };
        _timer();
    }
};

const onScroll = () => {
    if(!__ticking) {
        requestAnimationFrame(e => {
            __scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            checkMenu(__scrollTop);

            if(__scrollTop >= 80 && !__asideElement.classList.contains('aside-fixed')) {
                __asideElement.classList.add('aside-fixed');
            } else if(__scrollTop < 80) {
                __asideElement.classList.remove('aside-fixed');
            }

            __ticking = false;
        });
        __ticking = true;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    //初始化code元素的复制功能
    [].map.call(document.querySelectorAll('code:not([code])'), e => {
        e.setAttribute('title', '点击复制代码');
        e.setAttribute('data-clipboard-text', e.innerHTML);
    });

    //初始化linkmenu元素的跳转功能
    [].map.call(document.querySelectorAll('[linkmenu]'), e => {
        e.innerHTML = '<i class="fa fa-fw fa-mail-forward"></i>' + e.innerHTML;
        e.setAttribute('title', '点击跳转');
        e.onclick = function() {
            setScroll(document.querySelector('[menu="' + this.getAttribute('linkmenu') + '"]').offsetTop + 3, null, 0);
        };
    });
    
    //页面复制
    clipboard1 = new ClipboardJS('[data-clipboard-target],[data-clipboard-text]'); 
    clipboard1.on('success', function(e) {
        e.clearSelection();
    });
    clipboard1.on('error', function(e) {
      console.error(e);
    });

    //初始化代码编辑器 CodeMirror
    __Editor = CodeMirror.fromTextArea(document.getElementById("codeeditor"), {
        mode: __EditorTypes['html'],
        lineNumbers: false,	    //显示行号
        theme: "atom-one-dark",	    //设置主题
        lineWrapping: true,
        foldGutter: true,
        fixedGutter: true,
        //gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        matchBrackets: true,	//括号匹配
        indentUnit: 4,
        tabSize: 4,
        cursorHeight: 0.85,
        styleActiveLine: true
    });
    __Editor.setSize('750px','600px');

    __Editor.on("change",() => {
        __EditorViewElement.innerHTML = __Editor.getValue();
    });

    __EditorCloseElement.addEventListener('click', () => {
        __IsCodeEdit = false;
    });
});

document.querySelector('#main_category').addEventListener('click', function(e) {
    let _link = e.target.getAttribute('link');
    if(isNaN(_link)) {
        setScroll(document.querySelector("[menu='" + _link + "']").offsetTop + 3, undefined, 0);
    }
});

window.addEventListener('load', () => {
    setTimeout(i => {
        
        //document.querySelector("#testdiv").innerHTML = __nodes.map(i=>'<div name="id:'+i.id+', top:'+i.top+'" style="top:'+i.top+'px;" ></div>').slice(0, -1).join('');

        //任意复制
        Array.from(document.querySelectorAll('dl.demo-content > dt,.detail_table .td-view')).forEach(el => {
            el.addEventListener('mousedown', e => {
                if(__IsSuperCopy) {
                    e.target.setAttribute('data-clipboard-text', e.target.outerHTML);
                    new ClipboardJS(e.target);
                }
            }, false);

            el.addEventListener('mouseup', e => {
                if(__IsSuperCopy) {
                    (el=>setTimeout(()=> {
                        el.removeAttribute('data-clipboard-text');
                        __IsSuperCopy = false;
                    }, 10))(e.target);
                }
            }, false);

            el.addEventListener('mouseover', e => {
                __IsSuperCopy && e.target.classList.add('supercopy_active');
            }, false);

            el.addEventListener('mouseout', e => {
                __IsSuperCopy && e.target.classList.remove('supercopy_active');
            }, false);
        });

        document.body.classList.remove('body-shade');
        setTimeout(() => document.body.classList.add('init'), 120);
        
        __nodes = [].map.call(document.querySelectorAll('[menu]'), e => {
            let _code = e.getAttribute('menu');
            _linkEl = document.querySelector("[link='"+_code+"']");
            
            let _codeElement = e.querySelector('pre');
            let _viewElement = e.querySelector('dt');
        
            return { 
                id: _code, 
                top:e.offsetTop, 
                el: _linkEl, 
                codeElement: _codeElement,
                language: _codeElement && _codeElement.getAttribute('language'),
                viewElement: _viewElement,
                l1Title: _linkEl.getAttribute('link').split('-').slice(0,2).join('-')
            };
        }).concat([].map.call(document.querySelectorAll('.td-code'), e => {
            let _code = e.querySelector('[code]').getAttribute('code');

            let _codeElement = e.querySelector('pre');

            return { 
                id: _code,
                top:999999,
                codeElement: _codeElement,
                language: _codeElement && _codeElement.getAttribute('language')
            };
        })).concat([{id:'x', top:999998}]);


        document.documentElement.scrollTop = localStorage.ScrollTop || 0;
        
        onScroll();

        setTimeout(() => {
            if (document.querySelector(".aside-fixed")) {
                document.querySelector(".aside-fixed").scrollTop = localStorage.MenuScrollTop || 0;
            }
        }, 0);
    
        window.addEventListener('scroll', onScroll, false);

        // CanvasParticle({
        //     el: '#bgdiv',
        //     vx: 2,	                //小球x轴速度,正为右，负为左
        //     vy: 2,	                //小球y轴速度
        //     height: 2,	            //小球高宽
        //     width: 2,
        //     count: 50,		        //点个数
        //     color: "202, 83, 96", 	//点颜色
        //     stroke: "219, 122, 133",//线条颜色
        //     dist: 8000, 	        //点吸附距离
        //     e_dist: 12000, 	        //鼠标吸附加速距离
        //     max_conn: 20 	        //点到点最大连接数
        // });
        console.timeEnd('——init——');
    }, 200);
});

//开启代码编辑功能
document.addEventListener('click', e => {
    if(e.target) {
    let menuIndex = e.target.getAttribute('data-contenteditable') || e.target.parentNode.getAttribute('data-contenteditable');
        if(menuIndex) {
            let item = __nodes.find(i => i.id == menuIndex);

            __Editor.setOption("mode", __EditorTypes[item.language]);
            __Editor.setValue(item.codeElement.innerText);
            switch(item.codeElement.getAttribute('language')) {
                case 'html':
                    __EditorViewElement.innerHTML = item.codeElement.innerText;
                    break;
                case 'javascript':
                    __EditorViewElement.innerHTML = eval(item.codeElement.innerText);
                    break;
                case 'vue-html':
                    __EditorViewElement.innerHTML = item.codeElement.innerText;
                    break;
                case 'vue-javascript':
                    __EditorViewElement.innerHTML = eval(item.codeElement.innerText);
                    break;
            }
            __EditorCodeElement.value = item.codeElement.getAttribute('language');
            __IsCodeEdit = true;
        }
    }
}, false);

//开启任意复制快捷键 Alt+c
document.addEventListener('keydown', e => {
    if(e.shiftKey && e.keyCode == 67) {
        __IsSuperCopy = true;
    } 
}, false);

document.addEventListener('keyup', e => {
    __IsSuperCopy = false;
}, false);

let _findList = [], _currentFindIndex = 0, _currentFindTxt = '';

//点击添加焦点
document.querySelector('#lblSearch').addEventListener('mousedown', e => {
    if(document.hasFocus() && document.activeElement === __txtSearch) {
        __txtSearch.value = '';
        Search();
    } else {
        __txtSearch.focus();
        e.stopPropagation();
        e.preventDefault();
    }
});

const Search = e => {
    _currentFindTxt = __txtSearch.value;
    _findList.forEach(i=> {
        if(i.oldNode && i.oldHtml) i.oldNode.innerHTML = i.oldHtml;
    });
    _findList = [], _currentFindIndex = 0;
    window.categoryArr.forEach(i => i.isHide = _currentFindTxt ? true : false);
    if(_currentFindTxt != '') {
        _findList = window.categoryArr.filter(i => {
            return i.level > 0 && (i.title || '').indexOf(_currentFindTxt) >= 0 || (i.remark || '').indexOf(_currentFindTxt) >= 0;
        }).map(i=>Object.assign(i, {
            oldNode: document.querySelector('[menu="'+i.index+'"]'),
            oldHtml: document.querySelector('[menu="'+i.index+'"]').innerHTML
        }));

        if(_findList.length > 0) {
            _findList.forEach(i => i.isHide = false);

            _findList[0].oldNode.innerHTML = _findList[0].oldHtml.replace(new RegExp(_currentFindTxt, 'g'),'<span class="page-selected">' + _currentFindTxt + '</span>');
            setScroll(document.querySelector('[menu="' + _findList[_currentFindIndex++].index + '"]').offsetTop + 3, undefined, 0);
        } else {
            window.categoryArr.forEach(i => i.show());
            __txtSearch.value = '';
            __vue.$message.error({showClose: true, message: '根据 \'' + _currentFindTxt + '\' 未查询到结果。'});
            //Alert('提示', '未查询到结果。');
        }
    }
}

//更改搜索文本进行搜索
document.querySelector('#txtSearch').addEventListener('change', Search, false);

//按键切换到下一个搜索项
__txtSearch.addEventListener('keydown', e => {
    //tab键 或者 回车键
    if(e.keyCode == 9 || e.keyCode == 13) {
        if(_currentFindIndex == _findList.length) {
            _currentFindIndex = 0;
        }
        if(_findList.length > 0) {
            if(_findList[_currentFindIndex].oldHtml) {
                _findList[_currentFindIndex].oldNode.innerHTML = _findList[_currentFindIndex].oldHtml;
            }
            _findList[_currentFindIndex].oldNode.innerHTML = _findList[_currentFindIndex].oldHtml.replace(new RegExp(_currentFindTxt, 'g'),'<span class="page-selected">' + _currentFindTxt + '</span>');
            setScroll(document.querySelector('[menu="' + _findList[_currentFindIndex].index + '"]').offsetTop + 3, undefined, 0);
            _currentFindIndex++;
        }
        if(e.keyCode == 9) e.preventDefault();
    }
});

//弹出桌面通知
const Alert = (title = '', content = '') => {
    if ("Notification" in window) {
        let notification = null;
        if(Notification.permission != 'granted') {
            Notification.requestPermission().then(function(result) {
                if(Notification.permission == 'granted') {
                    notification = new Notification(title, {
                        body: content
                    });
                } else {
                    alert(content);
                }
            });
        } else {
            notification = new Notification(title, {
                body: content
            });
        }
        notification.onclick = i => notification.close();
        return notification;
    }
    return false;
}


window.__vue = new Vue({
    el: '#main_content',
    components: {
        'img-border': {
            data: function () {
                return {
                    sliceTop: '',
                    sliceRight: '',
                    sliceBottom: '',
                    sliceLeft: '',
                    topImg: '',
                    rightImg: '',
                    bottomImg: '',
                    leftImg: '',
                    centerImg: ''
                }
            },
            created: function () {
                this.GetSlice();

                let img = new Image();
                img.src = this.src;
                var timer = null;
                img.onload = () => {
                    let _fn = () => {
                        if(this.$el.offsetWidth) {
                            clearTimeout(timer);
                            let canvas = document.createElement("canvas");
                            let ctx = canvas.getContext('2d');
                            let _top = parseInt(this.sliceTop),
                                _right = parseInt(this.sliceRight),
                                _bottom = parseInt(this.sliceBottom),
                                _left = parseInt(this.sliceLeft);

                            let topWidth = this.$el.offsetWidth - _left - _right;
                            let leftHeight = this.$el.offsetHeight - _top - _bottom;
                                
                            //Top Image
                            canvas.width = topWidth;
                            canvas.height = _top;
                            ctx.drawImage(img, _left, 0, img.width - _left - _right, _top, 0, 0, topWidth, _top);
                            this.topImg = canvas.toDataURL("image/png");

                            //Bottom Image
                            canvas.width = topWidth;
                            canvas.height = _top;
                            ctx.drawImage(img, _left, img.height - _bottom, img.width - _left - _right, _bottom, 0, 0, topWidth, _bottom);
                            this.bottomImg = canvas.toDataURL("image/png");

                            //Left Image
                            canvas.width = _left;
                            canvas.height = leftHeight;
                            ctx.drawImage(img, 0, _top, _left, img.height - _top - _bottom, 0, 0, _left, leftHeight);
                            this.leftImg = canvas.toDataURL("image/png");

                            //Right Image
                            canvas.width = _right;
                            canvas.height = leftHeight;
                            ctx.drawImage(img, img.width - _right, _top, _right, img.height - _top - _bottom, 0, 0, _right, leftHeight);
                            this.rightImg = canvas.toDataURL("image/png");

                            //Center Image
                            canvas.width = topWidth;
                            canvas.height = leftHeight;
                            ctx.drawImage(img, _left, _top, img.width - _left - _right, img.height - _top - _bottom, 0, 0, topWidth, leftHeight);
                            this.centerImg = canvas.toDataURL("image/png");
                        } else {
                            timer = setTimeout(_fn, 100);
                        }
                    };
                    timer = setTimeout(_fn, 100);
                }
            },
            methods: {
                GetSlice() {
                    let slices = this.slice.split(' ');
                    switch (slices.length) {
                        case 1:
                            this.sliceTop = slices[0];
                            this.sliceRight = slices[0];
                            this.sliceBottom = slices[0];
                            this.sliceLeft = slices[0];
                            break;
                        case 2:
                            this.sliceTop = slices[0];
                            this.sliceRight = slices[1];
                            this.sliceBottom = slices[0];
                            this.sliceLeft = slices[1];
                        case 4:
                            this.sliceTop = slices[0];
                            this.sliceRight = slices[1];
                            this.sliceBottom = slices[2];
                            this.sliceLeft = slices[3];
                        default:
                            break;
                    }
                }
            },
            props: {
                src: String,
                slice: String,
                width: Number,
                repeat: String
            },
            template: `<div class="img-border" :style="{padding: [sliceTop, sliceRight, sliceBottom, sliceLeft].join(' '),backgroundImage:'url('+centerImg+')',backgroundPosition: sliceTop + ' ' + sliceLeft}">
                <slot></slot>
                <b class="left" :style="{backgroundImage:'url('+leftImg+')',top:sliceTop,width:sliceLeft,height:'calc(100% - ' + sliceTop + ' - ' + sliceBottom + ')'}"></b>
                <b class="top-left" :style="{backgroundImage:'url('+src+')',backgroundPosition:'top left',width:sliceLeft,height:sliceTop}"></b>
                <b class="top" :style="{backgroundImage:'url('+topImg+')',left:sliceLeft,height:sliceTop,width:'calc(100% - ' + sliceLeft + ' - ' + sliceRight + ')'}"></b>
                <b class="top-right" :style="{backgroundImage:'url('+src+')',backgroundPosition:'top right',width:sliceRight,height:sliceTop}"></b>
                <b class="right" :style="{backgroundImage:'url('+rightImg+')',top:sliceTop,width:sliceRight,height:'calc(100% - ' + sliceTop + ' - ' + sliceBottom + ')'}"></b>
                <b class="bottom-left" :style="{backgroundImage:'url('+src+')',backgroundPosition:'bottom left',width:sliceLeft,height:sliceBottom}"></b>
                <b class="bottom" :style="{backgroundImage:'url('+bottomImg+')',left:sliceLeft,height:sliceBottom,width:'calc(100% - ' + sliceLeft + ' - ' + sliceRight + ')'}"></b>
                <b class="bottom-right" :style="{backgroundImage:'url('+src+')',backgroundPosition:'bottom right',width:sliceRight,height:sliceBottom}"></b>
            </div>`
        },
        //正方形图片框
        'img-square': {
            data: function () {
                return {
                    imgSrc: '',
                    isError: false,
                    imgHeight: '',
                    imgTitle: '',
                    isSuccess: false
                }
            },
            created: function () {
                this.imgHeight = this.height ? this.height : this.width;
                this.imgSrc = this.src;
                this.imgTitle = this.title || '';
            },
            props: {
                src: String,
                width: {
                    type: String
                },
                height: {
                    type: String
                },
                title: {
                    type: String
                }
            },
            methods: {
                loadError() {
                    this.isError = true;
                },
                loadSuccess() {
                    this.isSuccess = true;
                }
            },
            template: `<div :title="imgTitle" :style="{'width':width,'height':imgHeight}" class="img-square" :class="{'img-error':isError,'img-loading':!isSuccess}"><img :alt="imgTitle" :src="imgSrc" @error="loadError" @load="loadSuccess" /></div>`
        }
    },
    data() { 
        return Object.assign.apply({}, window._vueData.map(i=>Object.assign({},i)))
    },
    methods: Object.assign.apply({}, [].concat.apply([{}], window._vueMethod.map(i=>Object.assign({},i)))),
    created: function () {
        //加载Script代码
        setTimeout(() => {
            _scriptAll.forEach(i => {
                i.script(document.querySelector('[menu="' + i.index + '"]'));
            });
        }, 100);
    }
});

window.onerror = function(a, b, c) {
    if(window.__vue) {
        window.__vue.$message.error({showClose: true, message: a});
    }
}