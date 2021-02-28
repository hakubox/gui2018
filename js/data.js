window.__data = [
    {
        title: '全局',
        remark: '',
        children: [
            {
                title: '框架基础说明',
                remark: `<div class="block">
    <h4 class="mb10">依据《2018戈吉产品视觉设计规范》开发完成并做部分调整。</h4>
    <ul class="mlist">
        <li>当前版本：1.0.0</li>
        <li>更新日期：2018.10.09</li>
    </ul>
</div>`,
                children: [
                    {
                        title: '开发注意点',
                        remark: `<div class="block">
    <ol class="mlist">
        <li>项目开发中仅使用文档内类样式，尽量不要私自新增类样式，新增的样式有可能无法实现顺利扩展及切换主题。</li>
        <li>任何情况下请勿增加行内或页内样式，理由同上且会导致后期无法维护。</li>
        <li>尽量保证语义化，例如表示文本用span，表示图标用i，大段文本用p，具体请参考：<a linkmenu="1-1-3">语义化标签</a></li>
        <li>本框架大部分功能性控件是采用Element组件库，在真正开发页面前建议仔细阅读Element框架中的指南以及组件库：<a class="linkurl" target="_blank" href="http://element-cn.eleme.io">Element</a></li>
        <li>框架内容与Element组件库有少量内容重复，开发时尽量考虑采用Element组件库。</li>
    </ol>
</div>`,
                    }, {
                        title: '常用样式',
                        remark: `<p>常用的系统样式名都采用极简方式命名，且所有样式都附带<strong>!important</strong>最高优先级，在页面中需谨慎使用，能不用则尽量不用。</p>
<div class="block">
    <ul class="mlist">
        <li>外边距 [<strong>margin</strong>]：分为上(mt)下(mb)左(ml)右(mr)外边距，按距离分为：<strong>5、10、15、20、25、30、35、40、45、50</strong>，例如：<code>mt10</code></li>
        <li>内边距 [<strong>padding</strong>]：分为上(pt)下(pb)左(pl)右(pr)内边距，按距离分为：<strong>5、10、15、20、25、30、35、40、45、50</strong>，例如：<code>pb10</code></li>
        <li>行高 [<strong>line-height</strong>]：按距离分为<strong>5、10、15、20、25、30、35、40、45、50</strong>，例如：<code>lh10</code></li>
        <li>水平对齐方式 [<strong>text-align</strong>]：分为左对齐<code>tal</code>、右对齐<code>tar</code>、居中<code>tac</code>、继承<code>tai</code></li>
        <li>垂直对齐方式 [<strong>vertical-align</strong>]：分为上对齐<code>vat</code>、文本上对齐<code>vatt</code>、居中<code>vam</code>、文本下对齐<code>vatb</code>、下对齐<code>vab</code>、继承<code>vai</code></li>
        <li>宽度 [<strong>width</strong>]：按宽度分为50像素<code>w50</code>、100像素<code>w100</code>、150像素<code>w150</code>、200像素<code>w200</code></li>
        <li>浮动 [<strong>float</strong>]：按浮动方式分为左浮动<code>fl</code>、右浮动<code>fr</code>、右浮动<code>fr</code>、继承父级浮动<code>fi</code>，以及清除浮动是<code>clear</code></li>
    </ul>
</div>`
                    }, {
                        title: '语义化标签',
                        remark: `<div class="block">
    <ul class="mlist">
        <li>一行内的普通文本应使用<strong>&lt;span&gt;</strong>标签，标题使用<strong>&lt;h1&gt;</strong>~<strong>&lt;h6&gt;</strong>标签，页面内的属性名称应使用<strong>&lt;label&gt;</strong>或<strong>&lt;span&gt;</strong>标签。</li>
        <li>整个页面头部应该使用<strong>&lt;header&gt;</strong>标签，页面脚部使用&lt;footer&gt;</strong>标签。</li>
        <li>页面头部导航应该使用<strong>&lt;nav&gt;</strong>标签。</li>
        <li>左侧菜单、侧边栏、广告、友情链接应该使用<strong>&lt;aside&gt;</strong>标签。</li>
        <li>页面一个独立内容分组应考虑使用<strong>&lt;section&gt;</strong>标签。</li>
        <li>多行的文本应该使用<strong>&lt;p&gt;</strong>标签。</li>
        <li>列表应该使用<strong>&lt;ul&gt;</strong>或&lt;ol&gt;</strong>嵌套&lt;li&gt;</strong>。</li>
        <li>含名称以及描述/操作的块应使用<strong>&lt;dl&gt;</strong>标签嵌套<strong>&lt;dt&gt;</strong>及<strong>&lt;dd&gt;</strong>标签。</li>
    </ul>
</div>`
                    }, {
                        title: '更新日志',
                        remark: `<div class="block">
    <ul class="mlist">
        <li version="1.0.0">-</li>
    </ul>
</div>`,
                    }
                ]
            }, {
                title: '传统栅格布局',
                remark: `<p>传统项目栅格布局方式，给固定栏设置了固定像素宽度，通过父级guid，子级g+栏数来完成栅格布局，最多24栏，其中<code>g1</code>最小<code>g24</code>最大。最大宽度固定为1180像素，因此无法实现嵌套布局。</p>
<p>另外还需要注意此栅格布局中g1~g24的类样式会给上一个元素添加20px左外边距，不需要手动添加，也不可重新设置。</p>`,
                children: [
                    {
                        title: '基础栅格',
                        subtitle: '',
                        code: `<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div>
        <div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div>
        <div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div>
        <div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div>
        <div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div>
        <div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div><div class="g1 bgd">g1</div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g2 bgd">g2</div><div class="g2 bgd">g2</div><div class="g2 bgd">g2</div><div class="g2 bgd">g2</div>
        <div class="g2 bgd">g2</div><div class="g2 bgd">g2</div><div class="g2 bgd">g2</div><div class="g2 bgd">g2</div>
        <div class="g2 bgd">g2</div><div class="g2 bgd">g2</div><div class="g2 bgd">g2</div><div class="g2 bgd">g2</div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g3 bgd">g3</div><div class="g3 bgd">g3</div><div class="g3 bgd">g3</div><div class="g3 bgd">g3</div>
        <div class="g3 bgd">g3</div><div class="g3 bgd">g3</div><div class="g3 bgd">g3</div><div class="g3 bgd">g3</div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g4 bgd">g4</div><div class="g4 bgd">g4</div><div class="g4 bgd">g4</div>
        <div class="g4 bgd">g4</div><div class="g4 bgd">g4</div><div class="g4 bgd">g4</div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g6 bgd">g6</div><div class="g6 bgd">g6</div><div class="g6 bgd">g6</div><div class="g6 bgd">g6</div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g8 bgd">g8</div><div class="g8 bgd">g8</div><div class="g8 bgd">g8</div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g12 bgd">g12</div><div class="g12 bgd">g12</div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="guid">
        <div class="g24 bgd">g24</div>
    </div>
</div>`,
                        remark: ''
                    }
                ]
            }, {
                title: '标准栅格布局',
                remark: `<p>推荐使用的仿BootStrap栅格布局方式，通过父级row，子级col+栏数来完成栅格布局，最多12栏，其中<code>col1</code>最小<code>col12</code>最大，可多层嵌套使用。</p>
<p>另外还需要注意此栅格布局中col1~col12的类样式会自带10px左右内边距，也可通过给父级row增加内置样式<code>colp0</code>、<code>colp5</code>、<code>colp15</code>等调节边距大小。</p>`,
                children: [
                    {
                        title: '基础栅格',
                        subtitle: '',
                        code: `<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div>
        <div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col3"><div class="bgd">col3</div></div><div class="col3"><div class="bgd">col3</div></div>
        <div class="col3"><div class="bgd">col3</div></div><div class="col3"><div class="bgd">col3</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col4"><div class="bgd">col4</div></div><div class="col4"><div class="bgd">col4</div></div><div class="col4"><div class="bgd">col4</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col6"><div class="bgd">col6</div></div><div class="col6"><div class="bgd">col6</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col12"><div class="bgd">col12</div></div>
    </div>
</div>`,
                        remark: ''
                    }, {
                        title: '嵌套栅格',
                        subtitle: '',
                        code: `<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col12">
            <div class="row">
                <div class="col6">
                    <div class="row">
                        <div class="col6"><div class="bgd">col6 - col6</div></div>
                        <div class="col6"><div class="bgd">col6 - col6</div></div>
                    </div>
                </div>
                <div class="col6"><div class="bgd">col6</div></div>
            </div>
        </div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col12">
            <div class="row">
                <div class="col4">
                    <div class="row">
                        <div class="col8"><div class="bgd">col4 - col8</div></div>
                        <div class="col4"><div class="bgd">col4 - col4</div></div>
                    </div>
                </div>
                <div class="col8">
                    <div class="row">
                        <div class="col10"><div class="bgd">col8 - col10</div></div>
                        <div class="col2"><div class="bgd">col8 - col2</div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
                        remark: ''
                    }, {
                        title: '可变式块间距',
                        subtitle: '',
                        code: `<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col12">
            <div class="row colp0">
                <div class="col3"><div class="bgd">colp0</div></div>
                <div class="col3"><div class="bgd">colp0</div></div>
                <div class="col3"><div class="bgd">colp0</div></div>
                <div class="col3"><div class="bgd">colp0</div></div>
            </div>
        </div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row">
        <div class="col12">
            <div class="row colp5">
                <div class="col3"><div class="bgd">colp5</div></div>
                <div class="col3"><div class="bgd">colp5</div></div>
                <div class="col3"><div class="bgd">colp5</div></div>
                <div class="col3"><div class="bgd">colp5</div></div>
            </div>
        </div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colp5">
        <div class="col6">
            <div class="row colp20">
                <div class="col3"><div class="bgd">colp20</div></div>
                <div class="col3"><div class="bgd">colp20</div></div>
                <div class="col3"><div class="bgd">colp20</div></div>
                <div class="col3"><div class="bgd">colp20</div></div>
            </div>
        </div>
        <div class="col6">
            <div class="row colp10">
                <div class="col3"><div class="bgd">colp10</div></div>
                <div class="col3"><div class="bgd">colp10</div></div>
                <div class="col3"><div class="bgd">colp10</div></div>
                <div class="col3"><div class="bgd">colp10</div></div>
            </div>
        </div>
    </div>
</div>`,
                        remark: '<p>使用<code>colp0</code>、<code>colp5</code>、<code>colp15</code>、<code>colp20</code>等内置类样式不仅可以用来改变当前栅格的间隙宽度，甚至可以在不同层嵌套不同宽度间隙的栅格。</p>'
                    }, {
                        title: '更多列',
                        subtitle: '',
                        code: `<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
        <div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div><div class="col1"><div class="bgd">col1</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div>
        <div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div>
        <div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div>
        <div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div><div class="col2"><div class="bgd">col2</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col3"><div class="bgd">col3</div></div><div class="col3"><div class="bgd">col3</div></div><div class="col3"><div class="bgd">col3</div></div>
        <div class="col3"><div class="bgd">col3</div></div><div class="col3"><div class="bgd">col3</div></div><div class="col3"><div class="bgd">col3</div></div>
        <div class="col3"><div class="bgd">col3</div></div><div class="col3"><div class="bgd">col3</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col4"><div class="bgd">col4</div></div><div class="col4"><div class="bgd">col4</div></div><div class="col4"><div class="bgd">col4</div></div>
        <div class="col4"><div class="bgd">col4</div></div><div class="col4"><div class="bgd">col4</div></div><div class="col4"><div class="bgd">col4</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col6"><div class="bgd">col6</div></div><div class="col6"><div class="bgd">col6</div></div><div class="col6"><div class="bgd">col6</div></div>
        <div class="col6"><div class="bgd">col6</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col8"><div class="bgd">col8</div></div><div class="col8"><div class="bgd">col8</div></div><div class="col8"><div class="bgd">col8</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col12"><div class="bgd">col12</div></div><div class="col12"><div class="bgd">col12</div></div>
    </div>
</div>
<div class="mt10 mb10 tac lh30">
    <div class="row colm24">
        <div class="col24"><div class="bgd">col24</div></div>
    </div>
</div>`,
                        remark: `<p>此标准框架可以实现任意多列，目前可以通过<code>colm24</code>实现24列，如果有需要也可以通过修改源码实现任意多列的栅格结构。</p>`
                    }
                ]
            }, {
                title: '表单',
                remark: '<p>用于展示数据属性/值或者明细信息。</p>',
                children: [
                    {
                        title: '基础数据展示表单',
                        code: `<div class="form cols3">
    <dl><dt>姓名</dt><dd>张三</dd></dl>
    <dl><dt>年龄</dt><dd>17</dd></dl>
    <dl><dt>性别</dt><dd>男</dd></dl>
    <dl><dt>身高</dt><dd>160</dd></dl>
    <dl><dt>分数</dt><dd>92</dd></dl>
    <dl><dt>浮动率</dt><dd>0.21</dd></dl>
    <dl><dt>综合评价</dt><dd>自我感觉良好</dd></dl>
</div>`
                    }, {
                        title: '基础数据展示栅格（单列）',
                        code: `<div class="form cols1">
    <dl><dt>姓名</dt><dd>张三</dd></dl>
    <dl><dt>年龄</dt><dd>17</dd></dl>
    <dl><dt>性别</dt><dd>男</dd></dl>
    <dl><dt>身高</dt><dd>160</dd></dl>
    <dl><dt>分数</dt><dd>92</dd></dl>
    <dl><dt>浮动率</dt><dd>0.21</dd></dl>
    <dl><dt>综合评价</dt><dd>良好</dd></dl>
</div>`
                    }, {
                        title: '预设尺寸',
                        remark: `<p>三种预设尺寸，从上到下分别是小、中、大。</p>`,
                        code: `<div class="form form-xs cols3">
    <dl><dt>姓名</dt><dd>张三</dd></dl>
    <dl><dt>年龄</dt><dd>17</dd></dl>
    <dl><dt>性别</dt><dd>男</dd></dl>
    <dl><dt>身高</dt><dd>160</dd></dl>
    <dl><dt>分数</dt><dd>92</dd></dl>
    <dl><dt>浮动率</dt><dd>0.21</dd></dl>
    <dl><dt>综合评价</dt><dd>良好</dd></dl>
</div><hr />
<div class="form form-sm cols3">
    <dl><dt>姓名</dt><dd>张三</dd></dl>
    <dl><dt>年龄</dt><dd>17</dd></dl>
    <dl><dt>性别</dt><dd>男</dd></dl>
    <dl><dt>身高</dt><dd>160</dd></dl>
    <dl><dt>分数</dt><dd>92</dd></dl>
    <dl><dt>浮动率</dt><dd>0.21</dd></dl>
    <dl><dt>综合评价</dt><dd>良好</dd></dl>
</div><hr />
<div class="form form-md cols3">
    <dl><dt>姓名</dt><dd>张三</dd></dl>
    <dl><dt>年龄</dt><dd>17</dd></dl>
    <dl><dt>性别</dt><dd>男</dd></dl>
    <dl><dt>身高</dt><dd>160</dd></dl>
    <dl><dt>分数</dt><dd>92</dd></dl>
    <dl><dt>浮动率</dt><dd>0.21</dd></dl>
    <dl><dt>综合评价</dt><dd>良好</dd></dl>
</div>`
                    }, {
                        title: '可编辑表单',
                        remark: `<p>注意在表单内仅做显示的内容文本需要以<strong>span/label/strong/p</strong>等文本标签包裹，系统会自动给这些标签增加10px的左内边距</p>`,
                        code: `<div class="form form-edit cols3">
    <dl><dt>姓名</dt><dd><input type="text" class="input" value="张三" /></dd></dl>
    <dl><dt>年龄</dt><dd><input type="number" class="input" value="17" /></dd></dl>
    <dl><dt>性别</dt><dd><span>男</span></dd></dl>
    <dl><dt>身高</dt><dd><span>160</span></dd></dl>
    <dl><dt>分数</dt><dd><span>92</span></dd></dl>
    <dl><dt>浮动率</dt><dd><span>0.21</span></dd></dl>
    <dl class="full"><dt>综合评价</dt><dd><textarea class="input">良好</textarea></dd></dl>
</div>`
                    }, {
                        title: '居左标签式表单',
                        remark: `<p></p>`,
                        code: `<div class="form form-edit form-labelleft cols3">
    <dl><dt>姓名</dt><dd><input type="text" class="input" value="张三" /></dd></dl>
    <dl><dt>年龄</dt><dd><input type="number" class="input" value="17" /></dd></dl>
    <dl><dt>性别</dt><dd><span>男</span></dd></dl>
    <dl><dt>身高</dt><dd><span>160</span></dd></dl>
    <dl><dt>分数</dt><dd><span>92</span></dd></dl>
    <dl><dt>浮动率</dt><dd><span>0.21</span></dd></dl>
    <dl class="full"><dt>综合评价</dt><dd><textarea class="input">良好</textarea></dd></dl>
</div>`
                    }, {
                        title: '浮动标签式表单',
                        remark: `<p></p>`,
                        code: `<div class="form form-edit form-labeltop cols3">
    <dl><dt>姓名</dt><dd><input type="text" class="input" value="张三" /></dd></dl>
    <dl><dt>年龄</dt><dd><input type="number" class="input" value="17" /></dd></dl>
    <dl><dt>性别</dt><dd><span>男</span></dd></dl>
    <dl><dt>身高</dt><dd><span>160</span></dd></dl>
    <dl><dt>分数</dt><dd><span>92</span></dd></dl>
    <dl><dt>浮动率</dt><dd><span>0.21</span></dd></dl>
    <dl class="full"><dt>综合评价</dt><dd><textarea class="input">良好</textarea></dd></dl>
</div>`
                    }, {
                        title: '浮动标签式表单2',
                        remark: `<p></p>`,
                        code: `<div class="form form-edit form-labeltop2 cols3">
    <dl><dt>姓名</dt><dd><input type="text" class="input" value="张三" /></dd></dl>
    <dl><dt>年龄</dt><dd><input type="number" class="input" value="17" /></dd></dl>
    <dl><dt>性别</dt><dd><span>男</span></dd></dl>
    <dl><dt>身高</dt><dd><span>160</span></dd></dl>
    <dl><dt>分数</dt><dd><span>92</span></dd></dl>
    <dl><dt>浮动率</dt><dd><span>0.21</span></dd></dl>
    <dl class="full"><dt>综合评价</dt><dd><textarea class="input">良好</textarea></dd></dl>
</div>`
                    }, {
                        title: '单行表单',
                        remark: `<p>将表单放置于一行内，类似于面包屑，暂不考虑编辑情况下的样式，也不支持附加cols多列样式。</p>`,
                        code: `<div class="form form-inline">
    <dl><dt>姓名</dt><dd>张三</dl>
    <dl><dt>年龄</dt><dd>17</dl>
    <dl><dt>性别</dt><dd>男</dd></dl>
    <dl><dt>身高</dt><dd>160</dd></dl>
    <dl><dt>分数</dt><dd>92</dd></dl>
    <dl><dt>浮动率</dt><dd>0.21</dd></dl>
    <dl><dt>综合评价</dt><dd>良好</dd></dl>
</div>`
                    }
                ]
            }, {
                title: '信息点',
                remark: `<p>和表单功能大致相同，只是默认行间距较窄，注意此信息点暂不支持左列定宽且放置红色星号（代码不支持）</p>`,
                children: [
                    {
                        title: '多列样式',
                        remark: `<p>列数标准和表单相同，支持1~6列，默认1列。</p>`,
                        code: `<ul class="infos cols3">
    <li label="姓名">张三</li>
    <li label="年龄">17</li>
    <li required label="性别">男</li>
    <li label="身高">160</li>
    <li label="分数">92</li>
    <li label="浮动率">0.21</li>
    <li label="综合评价">良好</li>
</ul>`
                    }, {
                        title: '单行样式',
                        remark: ``,
                        code: `<ul class="infos infos-inline">
    <li label="姓名">张三</li>
    <li label="年龄">17</li>
    <li required label="性别">男</li>
    <li label="身高">160</li>
    <li label="分数">92</li>
    <li label="浮动率">0.21</li>
    <li label="综合评价">良好</li>
</ul>`
                    }, 
                ]
            }, {
                title: '表格',
                remark: `<p>核心布局的一种，可以用来布局及展示数据，仅需要布局功能则给table添加<code>table-blank</code>类样式</p>
<p>需要注意在任何情况下都应该添加<code>thead</code><code>tbody</code>块，然后选择性添加<code>tfoot</code>块</p>
<p>另外如果需要类似冻结行列等等的高级功能请参考<a class="linkurl" target="_blank" href="http://element-cn.eleme.io/#/zh-CN/component/table">高级表格</a></p>`,
                children: [
                    {
                        title: '基本表格',
                        subtitle: '',
                        remark: `<p>仅使用基础样式的表格，若需要高级表格功能可参考Element的表格。</p>`,
                        code:  `<table class="table">
    <thead>
        <tr>
            <th class="td-icon"><input type="checkbox" /></th>
            <th>名称</th>
            <th>重量</th>
            <th>价格</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="td-icon"><input type="checkbox" /></td>
            <td>橘</td>
            <td>7</td>
            <td>72</td>
        </tr>
        <tr>
            <td class="td-icon"><input type="checkbox" /></td>
            <td>栗子</td>
            <td>3.5</td>
            <td>80</td>
        </tr>
    </tbody>
</table>`
                    }, {
                        title: '完整边框表格',
                        subtitle: '',
                        code:  `<table class="table table-border">
    <thead>
        <tr>
            <th class="td-icon"><input type="checkbox" /></th>
            <th>名称</th>
            <th>重量</th>
            <th>价格</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="td-icon"><input type="checkbox" /></td>
            <td>橘</td>
            <td>7</td>
            <td>72</td>
        </tr>
        <tr>
            <td class="td-icon"><input type="checkbox" /></td>
            <td>栗子</td>
            <td>3.5</td>
            <td>80</td>
        </tr>
    </tbody>
</table>`
                    }, {
                        title: '预设尺寸',
                        subtitle: '',
                        remark: `<p>仅使用基础样式的表格。</p>`,
                        code:  ``,
                        detail: [
                            {
                                remark: '表格_小',
                                code: `<table class="table table-sm">
    <thead>
        <tr>
            <th class="td-icon"><input type="checkbox" /></th>
            <th>名称</th>
            <th>重量</th>
            <th>价格</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="td-icon"><input type="checkbox" /></td>
            <td>橘</td>
            <td>7</td>
            <td>72</td>
        </tr>
    </tbody>
</table>`
                            }, {
                                remark: '表格_中',
                                code: `<table class="table table-md">
    <thead>
        <tr>
            <th class="td-icon"><input type="checkbox" /></th>
            <th>名称</th>
            <th>重量</th>
            <th>价格</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="td-icon"><input type="checkbox" /></td>
            <td>栗子</td>
            <td>3.5</td>
            <td>80</td>
        </tr>
    </tbody>
</table>`
                            }
                        ]
                    }
                ]
            }, {
                title: '列表',
                subtitle: '',
                remark: '',
                children: [
                    {
                        title: '基本列表',
                        code: `<div class="row">
    <div class="cols4">
        <ul class="list">
            <li>沃尔玛 WAL-MART STORES</li>
            <li>国家电网公司 STATE GRID</li>
            <li>中国石油化工集团公司 SINOPEC GROUP</li>
        </ul>
    </div>
    <div class="cols4">
        <ol class="list">
            <li>沃尔玛 WAL-MART STORES</li>
            <li>国家电网公司 STATE GRID</li>
            <li>中国石油化工集团公司 SINOPEC GROUP</li>
        </ol>
    </div>
</div>`
                    }, {
                        title: '预设尺寸',
                        code: `<div class="row">
    <div class="cols4">
        <ol class="list list-xs">
            <li>沃尔玛 WAL-MART STORES</li>
            <li>国家电网公司 STATE GRID</li>
            <li>中国石油化工集团公司 SINOPEC GROUP</li>
        </ol>
    </div>
    <div class="cols4">
        <ol class="list list-sm">
            <li>沃尔玛 WAL-MART STORES</li>
            <li>国家电网公司 STATE GRID</li>
            <li>中国石油化工集团公司 SINOPEC GROUP</li>
        </ol>
    </div>
    <div class="cols4">
        <ol class="list list-md">
            <li>沃尔玛 WAL-MART STORES</li>
            <li>国家电网公司 STATE GRID</li>
            <li>中国石油化工集团公司 SINOPEC GROUP</li>
        </ol>
    </div>
</div>`
                    }, {
                        title: '嵌套列表',
                        remark: `<p>类似于树状图，可通过嵌套列表来实现最简单的树状图，但是如果需要树状图功能的话还是推荐用Element的树状图组件，另外注意嵌套列表里的文本需要用文本标签包裹。</p>`,
                        code: `<ol class="list">
    <li>
        <span>水果</span>
        <ol class="list">
            <li>
                <span>香蕉</span>
            </li>
            <li>
                <span>苹果</span>
            </li>
            <li>
                <span>梨子</span>
            </li>
        </ol>
    </li>
    <li>
        <span>蔬菜</span>
        <ol class="list">
            <li>
                <span>黄瓜</span>
            </li>
            <li>
                <span>白菜</span>
            </li>
            <li>
                <span>辣椒</span>
            </li>
        </ol>
    </li>
    <li>
        <span>饮料</span>
        <ol class="list">
            <li>
                <span>果汁</span>
            </li>
            <li>
                <span>咖啡</span>
            </li>
            <li>
                <span>茶</span>
            </li>
        </ol>
    </li>
</ol>`
                    }, {
                        title: '无符号列表',
                        code: `<ol class="list list-no">
    <li>沃尔玛 WAL-MART STORES</li>
    <li>国家电网公司 STATE GRID</li>
    <li>中国石油化工集团公司 SINOPEC GROUP</li>
</ol>`
                    }, {
                        title: '内联列表',
                        code: `<ol class="list list-inline">
    <li>沃尔玛 WAL-MART STORES</li>
    <li>国家电网公司 STATE GRID</li>
    <li>中国石油化工集团公司 SINOPEC GROUP</li>
</ol>`
                    }
                ]
            }, {
                title: '文本',
                remark: '',
                children: [
                    {
                        title: '标题',
                        subtitle: '',
                        remark: '<p>注意点：标题默认为行内块样式，宽度默认为自动，不占满一整行，如果需要占满整行可以添加<code>block</code>类样式。</p>',
                        detail: [
                            {
                                remark: 'h1 / 大标题',
                                code: `<h1>大标题 h1</h1>
<span class="h1">大标题 h1</span>`
                            }, {
                                remark: 'h2 / 标题',
                                code: `<h2>标题 h2</h2>
<span class="h2">标题 h2</span>`
                            }, {
                                remark: 'h3 / 小标题',
                                code: `<h3>小标题 h3</h3>
<span class="h3">小标题 h3</span>`
                            }, {
                                remark: 'h4 / 栏目标题',
                                code: `<h4>栏目标题 h4</h4>
<span class="h4">栏目标题 h4</span>`
                            }, {
                                remark: 'h5 / 正文',
                                code: `<h5>正文 h5</h5>
<span class="h5">正文 h5</span>`
                            }, {
                                remark: 'h6 / 正文(小)',
                                code: `<h6>正文(小) h6</h6>
<span class="h6">正文(小) h6</span>`
                            }
                        ]
                    }, {
                        title: '正文',
                        subtitle: '',
                        code: `<span>正文，同h5</span><br />
<small>正文(小)，同h6</small>`,
                        remark: `<p>正文对应标题的h5及h6，只是不占满一行且不加粗</p>`
                    }, {
                        title: '段落',
                        subtitle: '',
                        code: `<h1>戈吉科技 Wishbuild 32px</h1>
<p>戈吉科技拥有近百人的专业研究咨询、信息技术和平台研发团队，包括：具有数据库平台开发和应用经验的平台设计开发人员；戈吉科技拥有近百人的专业研究咨询、信息技术和平台研发团队，包括：具有数据库平台开发和应用经验的平台设计开发人员；</p>
<p>熟悉房地产领域产品、模块、部品部件等标准应用的咨询工程师；戈吉科技拥有近百人的专业研究咨询、信息技术和平台研发团队，包括：具有数据库平台开发和应用经验的平台设计开发人员；</p>`,
                        remark: ''
                    }, {
                        title: '文字颜色（状态）',
                        subtitle: '',
                        remark: '',
                        code: '',
                        detail: [
                            {
                                remark: '正文、参数',
                                code: `<span>上海锦绣天地</span>`
                            }, {
                                remark: '信息点名称、辅助说明',
                                code: `<span class="txt-prop">项目地址：</span>`
                            }, {
                                remark: '超链接，使用添加link类样式的a标签',
                                code: `<a class="link">跳转到</a><br />
<a class="link disabled">无效链接</a>`
                            }, {
                                remark: '错误',
                                code: `<span class="txt-danger">您输入的密码错误。</span>`
                            }, {
                                remark: '重点、当前统计数、必填项、价格',
                                code: `<span class="txt-primary">您输入的密码错误</span><br />
<h4 class="txt-primary">120.6<small>元</small></h4>`
                            }, {
                                remark: '警告、询问、等待',
                                code: `<span class="txt-warning">审核中...</span><br />
<span class="txt-warning">密码不能为空。</span>`
                            }, {
                                remark: '完成、成功',
                                code: `<span class="txt-success">审核通过</span>`
                            }, {
                                remark: '失效、表单填写提示',
                                code: `<span class="txt-disabled">请输入关键字</span>`
                            }
                        ]
                    }, {
                        title: '文字背景（状态）',
                        subtitle: '',
                        remark: `<p>如果需要整行的背景文本，可以考虑使用<strong>p</strong>标签而非<strong>span</strong>标签包裹</p>`,
                        code: '',
                        detail: [
                            {
                                remark: '错误',
                                code: `<span class="bg-danger">您输入的密码错误。</span>`
                            }, {
                                remark: '重点、当前统计数、必填项、价格',
                                code: `<span class="bg-primary">您输入的密码错误</span><br />
<h4 class="bg-primary">120.6<small>元</small></h4>`
                            }, {
                                remark: '警告、询问、等待',
                                code: `<span class="bg-warning">审核中...</span><br />
<span class="bg-warning">密码不能为空。</span>`
                            }, {
                                remark: '完成、成功',
                                code: `<span class="bg-success">审核通过</span>`
                            }, {
                                remark: '失效、表单填写提示',
                                code: `<span class="bg-disabled">请输入关键字</span>`
                            }
                        ]
                    }, {
                        title: '特殊文字',
                        subtitle: '',
                        remark: '',
                        detail: [
                            {
                                remark: '代码',
                                code: `<code>cell-ss</code>`
                            }, {
                                remark: '快捷键',
                                code: `<span class="txt-key">Ctrl + S</span>`
                            }, {
                                remark: '大写字母',
                                code: `<span class="txt-upper">JavaScript</span>`
                            }, {
                                remark: '小写字母',
                                code: `<span class="txt-lower">JavaScript</span>`
                            }
                        ]
                    }
                ]
            }, {
                title: '色彩',
                remark: '',
                children: [
                    {
                        title: '主色调',
                        subtitle: '',
                        showCode: false,
                        code: `<div class="color-block bgc-primary tac txt-white">
    <span class="vam">主色调</span><br />
    <span class="vam">#B01D2D</span>
</div>
<div class="color-block bgc-success tac txt-white">
    <span class="vam">成功色</span><br />
    <span class="vam">#1DB09F</span>
</div>
<div class="color-block bgc-warning tac txt-white">
    <span class="vam">警告色</span><br />
    <span class="vam">#FFA726</span>
</div>
<div class="color-block bgc-danger tac txt-white">
    <span class="vam">错误色</span><br />
    <span class="vam">#F4511E</span>
</div>
<div class="color-block bgc-link tac txt-white">
    <span class="vam">链接色</span><br />
    <span class="vam">#3498DB</span>
</div>`,
                        remark: ''
                    }, {
                        title: '灰度色调',
                        subtitle: '',
                        showCode: false,
                        code: `<div class="color-block bgc-shade tac txt-white">
    <span class="vam">遮罩色</span><br />
    <span class="vam">#000000</span>
</div>
<div class="color-block bgc-text tac txt-white">
    <span class="vam">主文字色</span><br />
    <span class="vam">#333333</span>
</div>
<div class="color-block bgc-assist-text tac txt-white">
    <span class="vam">辅助字色</span><br />
    <span class="vam">#999999</span>
</div>
<div class="color-block bgc-disabled-text tac">
    <span class="vam">无效文字色</span><br />
    <span class="vam">#CCCCCC</span>
</div>
<div class="color-block bgc-border tac">
    <span class="vam">边框色</span><br />
    <span class="vam">#DDDDDD</span>
</div>
<div class="color-block bgc-disabled tac">
    <span class="vam">无效背景色</span><br />
    <span class="vam">#EEEEEE</span>
</div>
<div class="color-block bgc-background tac">
    <span class="vam">大背景色</span><br />
    <span class="vam">#F6F6F6</span>
</div>
<div class="color-block bgc-even tac">
    <span class="vam">隔行背景色</span><br />
    <span class="vam">#FAFAFA</span>
</div>
<div class="color-block bgc-white tac">
    <span class="vam">白色</span><br />
    <span class="vam">#FFFFFF</span>
</div>`,
                        remark: ''
                    }
                ]
            }, {
                title: '按钮',
                remark: '',
                children: [
                    {
                        title: '功能样式',
                        subtitle: '在页面上使用定义好功能样式的按钮',
                        code: `<input class="btn btn-default" type="button" value="默认 btn-default" />
<input class="btn btn-primary" type="button" value="主要 btn-primary" />
<input class="btn btn-success" type="button" value="成功 btn-success" />
<input class="btn btn-warning" type="button" value="警告 btn-warning" />
<input class="btn btn-danger" type="button" value="错误 btn-danger" />
<input class="btn btn-link" type="button" value="超链接 btn-link" />`,
                        remark: ''
                    }, {
                        title: '预设尺寸',
                        subtitle: '在页面上使用不同尺寸的按钮',
                        code: `<p>
    <input class="btn btn-md btn-block btn-default" type="button" value="整行按钮 btn-md btn-block" />
    <input class="btn btn-md btn-block btn-primary" type="button" value="整行按钮 btn-md btn-block" />
</p>
<p>
    <input class="btn btn-lg btn-default" type="button" value="大按钮 btn-lg" />
    <input class="btn btn-lg btn-primary" type="button" value="大按钮 btn-lg" />
</p>
<p>
    <input class="btn btn-md btn-default" type="button" value="中按钮 btn-md" />
    <input class="btn btn-md btn-primary" type="button" value="中按钮 btn-md" />
</p>
<p>
    <input class="btn btn-sm btn-default" type="button" value="小按钮（默认） btn-sm" />
    <input class="btn btn-sm btn-primary" type="button" value="小按钮（默认） btn-sm" />
</p>
<p>
    <input class="btn btn-xs btn-default" type="button" value="微小按钮 btn-xs" />
    <input class="btn btn-xs btn-primary" type="button" value="微小按钮 btn-xs" />
</p>`,
                        remark: ''
                    }, {
                        title: '按钮状态',
                        subtitle: '',
                        code: `<p>
    <input class="btn btn-md btn-default" type="button" value="正常状态 normal" />
    <input class="btn btn-md btn-primary" type="button" value="正常状态 normal" />
    <input class="btn btn-md btn-success" type="button" value="正常状态 normal" />
    <input class="btn btn-md btn-warning" type="button" value="正常状态 normal" />
    <input class="btn btn-md btn-danger" type="button" value="正常状态 normal" />
</p>
<p>
    <input class="btn btn-md btn-default active" type="button" value="选中状态 active" />
    <input class="btn btn-md btn-primary active" type="button" value="选中状态 active" />
    <input class="btn btn-md btn-success active" type="button" value="选中状态 active" />
    <input class="btn btn-md btn-warning active" type="button" value="选中状态 active" />
    <input class="btn btn-md btn-danger active" type="button" value="选中状态 active" />
</p>
<p>
    <input class="btn btn-md btn-default disabled" type="button" value="禁用状态 disabled" />
    <input class="btn btn-md btn-primary disabled" type="button" value="禁用状态 disabled" />
    <input class="btn btn-md btn-success disabled" type="button" value="禁用状态 disabled" />
    <input class="btn btn-md btn-warning disabled" type="button" value="禁用状态 disabled" />
    <input class="btn btn-md btn-danger disabled" type="button" value="禁用状态 disabled" />
</p>`,
                        remark: `<p>在不同状态下的按钮，超链接形式的按钮没有特殊状态，状态标记使用class或属性状态均为有效。</p>`
                    }, {
                        title: '带图标及文字的按钮',
                        subtitle: `这种按钮建议使用a标签实现，动画效果通过Font-Awesome的<code>fa-spin</code>或<span class="code" data-clipboard-text="">fa-pulse</span>实现`,
                        code: `<p>
    <a class="btn btn-md btn-default"><i class="fa fa-thumbs-up"></i>图标按钮</a>
    <a class="btn btn-md btn-primary"><i class="fa fa-thumbs-up"></i>图标按钮</a>
    <a class="btn btn-md btn-success"><i class="fa fa-thumbs-up"></i>图标按钮</a>
    <a class="btn btn-md btn-warning"><i class="fa fa-thumbs-up"></i>图标按钮</a>
    <a class="btn btn-md btn-danger"><i class="fa fa-thumbs-up"></i>图标按钮</a>
</p>
<p>
    <a class="btn btn-md btn-default active"><i class="fa fa-cog fa-spin"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-primary active"><i class="fa fa-cog fa-spin"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-success active"><i class="fa fa-cog fa-spin"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-warning active"><i class="fa fa-cog fa-spin"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-danger active"><i class="fa fa-cog fa-spin"></i>旋转图标按钮</a>
</p>
<p>
    <a class="btn btn-md btn-default active"><i class="fa fa-spinner fa-pulse"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-primary active"><i class="fa fa-spinner fa-pulse"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-success active"><i class="fa fa-spinner fa-pulse"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-warning active"><i class="fa fa-spinner fa-pulse"></i>旋转图标按钮</a>
    <a class="btn btn-md btn-danger active"><i class="fa fa-spinner fa-pulse"></i>旋转图标按钮</a>
</p>`,
                        remark: ''
                    }, {
                        title: '图标按钮',
                        subtitle: '仅包含图标，需要给按钮增加<code>btn-icon</code>样式，建议使用a标签实现',
                        code: `<a class="btn btn-default btn-icon"><i class="fa fa-thumbs-up"></i></a>
<a class="btn btn-primary btn-icon"><i class="fa fa-thumbs-up"></i></a>
<a class="btn btn-success btn-icon"><i class="fa fa-thumbs-up"></i></a>
<a class="btn btn-warning btn-icon"><i class="fa fa-thumbs-up"></i></a>
<a class="btn btn-danger btn-icon"><i class="fa fa-thumbs-up"></i></a>`,
                        remark: ''
                    }, {
                        title: '正方形图标按钮',
                        subtitle: '仅包含图标，建议使用a标签实现',
                        code: `<p>
    <a class="btn btn-lg btn-default btn-square"><i class="fa fa-close"></i></a>
    <a class="btn btn-lg btn-primary btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-lg btn-success btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-lg btn-warning btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-lg btn-danger btn-square"><i class="fa fa-times"></i></a>
</p>
<p>
    <a class="btn btn-md btn-default btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-md btn-primary btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-md btn-success btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-md btn-warning btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-md btn-danger btn-square"><i class="fa fa-times"></i></a>
</p>
<p>
    <a class="btn btn-sm btn-default btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-sm btn-primary btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-sm btn-success btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-sm btn-warning btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-sm btn-danger btn-square"><i class="fa fa-times"></i></a>
</p>
<p>
    <a class="btn btn-xs btn-default btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-xs btn-primary btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-xs btn-success btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-xs btn-warning btn-square"><i class="fa fa-times"></i></a>
    <a class="btn btn-xs btn-danger btn-square"><i class="fa fa-times"></i></a>
</p>`,
                        remark: ''
                    }, {
                        title: '按钮组',
                        subtitle: '使用<code>btn-group</code>组合多个控件，此样式除了按钮同样可以用到其他组件例如文本框上，另外此样式在同级按钮上也可以使用',
                        detail: [
                            {
                                remark: `标准按钮组`,
                                code: `<div class="btn-group">
    <a class="btn btn-default active">按钮</a>
    <a class="btn btn-primary">按钮</a>
    <a class="btn btn-success"><i class="fa fa-check"></i>按钮</a>
    <a class="btn btn-warning">按钮</a>
</div>`
                            }, {
                                remark: `横向占满的按钮组`,
                                code: `<div class="btn-group-block">
    <a class="btn btn-default active">按钮</a>
    <a class="btn btn-primary">按钮</a>
    <a class="btn btn-success"><i class="fa fa-check"></i>按钮</a>
    <a class="btn btn-warning">按钮</a>
</div>`
                            }, {
                                remark: `简易按钮组`,
                                code: `<a class="btn btn-group btn-default active">按钮</a>
<a class="btn btn-primary">按钮</a>
<a class="btn btn-success"><i class="fa fa-check"></i>按钮</a>`
                            }
                        ],
                        remark: ''
                    }, {
                        title: '加载状态',
                        subtitle: '使用<code>btn-loading</code>类样式实现按钮的加载状态',
                        code: `<p>
    <a class="btn btn-block btn-loading">加载中</a>
</p>
<p>
    <a class="btn">默认按钮</a><a class="btn btn-loading">加载中</a><a on class="btn">点击切换</a>
</p>`,
                        script: el => {
                            el.querySelector('[on]').onclick = function() {
                                this.removeAttribute('on');
                                if (this.classList.contains('btn-loading')) {
                                    this.classList.remove('btn-loading');
                                } else {
                                    this.classList.add('btn-loading');
                                }
                            };
                        },
                        remark: ''
                    }
                ]
            }, {
                title: '图片',
                remark: '',
                detail: [
                    {
                        remark: '基本方形图片',
                        language: `vue-html`,
                        code: `<img-square src="https://www.baidu.com/img/bd_logo1.png" width="100px"></img-square>`
                    }, {
                        remark: '带外边框的方形图片',
                        language: `vue-html`,
                        code: `<img-square class="img-border" src="https://www.baidu.com/img/bd_logo1.png" width="100px"></img-square>`
                    }, {
                        remark: '加载错误的方形图片',
                        language: `vue-html`,
                        code: `<img-square class="img-border" src="aaa" width="100px"></img-square>`
                    }, {
                        remark: '任意宽高的图片',
                        language: `vue-html`,
                        code: `<img-square class="img-border" src="https://www.baidu.com/img/bd_logo1.png" width="200px" height="100px"></img-square>`
                    }
                ]
            }, {
                title: '辅助样式',
                remark: ``,
                children: [
                    {
                        title: '角标',
                        detail: [
                            {
                                remark: `预设尺寸`,
                                code: `<i class="badge badge-sm">默认尺寸：小</i>
<i class="badge badge-md">尺寸：中</i>
<i class="badge badge-lg">尺寸：大</i>`
                            }, {
                                remark: `多状态`,
                                code: `<i class="badge badge-default">过期</i>
<i class="badge badge-danger">未完成</i>
<i class="badge badge-warning">进行中</i>
<i class="badge badge-success">通过</i>
<hr />
<i class="badge">黑</i>
<i class="badge badge-hot">热门</i>
<i class="badge badge-wait">等待</i>
<i class="badge badge-ok">完成</i>`
                            }, {
                                remark: `圆角样式`,
                                code: `<i class="badge badge-md badge-hot">无圆角</i>
<i class="badge badge-md badge-hot">小圆角</i>
<i class="badge badge-hot badge-md badge-radius">大圆角</i>
<i class="badge badge-hot badge-md badge-circle">全圆角</i>`
                            }
                        ],
                        remark: ``
                    }, {
                        title: '引用',
                        code: `<blockquote>一段引用的文字。</blockquote>`,
                        remark: ``
                    }, {
                        title: '必填',
                        code: ``,
                        remark: `<p>一般给需要增加必填的元素加上<code>required</code>类样式即可，特殊场景下可以使用<code>&lt;i class="required"&gt;&lt;/i&gt;</code>标签</p>`,
                        detail: [
                            {
                                remark: '表单场景',
                                code: `<div class="form form-edit cols1">
    <dl>
        <dt class="required">项目名称</dt>
        <dd><input type="text" class="input" /></dd>
    </dl>
    <dl>
        <dt><i class="required"></i>数量</dt>
        <dd><input type="number" class="input" /></dd>
    </dl>
</div>`
                            }, {
                                remark: '输入组场景',
                                code: `<div class="input-group">
    <span class="required">姓名</span>
    <input class="input" />
</div>
<div class="input-group">
    <span class="required">年龄</span>
    <input class="input" />
</div>`
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        title: '表单',
        remark: '',
        children: [
            {
                title: '单行文本框',
                remark: '',
                children: [
                    {
                        title: '基本样式',
                        subtitle: '',
                        code: ``,
                        detail: [
                            {
                                remark: '尺寸：微小。 用于行内元素，列表或表格内使用',
                                code: `<input class="input input-xs" placeholder="请输入内容" />`
                            }, {
                                remark: '尺寸：小。 用于表单',
                                code: `<input class="input input-sm" placeholder="请输入内容" />`
                            }, {
                                remark: '尺寸：大。 用于登录、注册、重要表单',
                                code: `<input class="input input-md" placeholder="请输入内容" />`
                            }, {
                                remark: '尺寸：大。 用于全局搜索',
                                code: `<input class="input input-lg" placeholder="请输入内容" />`
                            }
                        ],
                    }, {
                        title: '文本框状态',
                        subtitle: '',
                        remark: `<p>注意：禁用状态除了属性<code>disabled</code>，也可以使用类样式<code>.disabled</code>。</p>
<p>区别是属性<code>disabled</code>同时限制了用户的输入，而类样式<code>.disabled</code>如果需要限制用户输入最低需要IE11及以上兼容性，不兼容更低版本浏览器。</p>`,
                        code: ``,
                        detail: [
                            {
                                remark: '输入值错误状态',
                                code: `<input class="input invalid" placeholder="请输入内容" />
<i>输入值不能为空。</i>`
                            }, {
                                remark: '输入值正确状态',
                                code: `<input class="input valid" placeholder="请输入内容" />
<i>输入正确。</i>`
                            }, {
                                remark: '禁用状态',
                                code: `<input class="input" disabled placeholder="请输入内容" />`
                            }
                        ]
                    }, {
                        title: '数值区间',
                        subtitle: '',
                        remark: `<p>表示从某个数值到某个数值的区间，注意：区间的默认长度是100%，如果需要表现较短的区间可以用长度限制类样式<code>w100</code>等来实现。</p>`,
                        code: ``,
                        detail: [
                            {
                                remark: '标准区间-小',
                                code: `<div class="input-range">
    <input class="input" />
    <input class="input" />
</div>`
                            }, {
                                remark: '标准区间-中',
                                code: `<div class="input-range">
    <input class="input input-md" />
    <input class="input input-md" />
</div>`
                            }, {
                                remark: '标准区间-大',
                                code: `<div class="input-range">
    <input class="input input-lg" />
    <input class="input input-lg" />
</div>`
                            }, {
                                remark: '定义分割文字的区间，使用<code>split</code>属性控制，仅支持单个文字。',
                                code: `<div range-split="至" class="input-range">
    <input class="input" />
    <input class="input" />
</div>`
                            }
                        ]
                    }
                ]
            }, {
                title: '多行文本框',
                remark: '<p>基础文本框，注意：需要显示当前字数需要使用js手动修改i标签的<code>count</code>属性。</p>',
                children: [
                    {
                        title: '基本样式',
                        subtitle: '',
                        code: ``,
                        script: el => {
                            [].forEach.call(el.querySelectorAll('[on]'), item => {
                                item.removeAttribute('on');
                                item.oninput = function() {
                                    this.nextElementSibling.setAttribute('count', this.value.length);
                                };
                            });
                        },
                        detail: [
                            {
                                remark: '尺寸：小',
                                code: `<textarea on class="input input-xs" maxlength="200" placeholder="提示">多行文本框_小</textarea>
<i count="7" maxcount="200"></i>`
                            }, {
                                remark: '尺寸：中',
                                code: `<textarea on class="input input-sm" maxlength="200" placeholder="提示" >多行文本框_中</textarea>
<i count="7" maxcount="200"></i>`
                            }, {
                                remark: '尺寸：大',
                                code: `<textarea on class="input input-md" maxlength="200" placeholder="提示" >多行文本框_大</textarea>
<i count="7" maxcount="200"></i>`
                            }
                        ],
                        remark: ''
                    }, {
                        title: '文本框状态',
                        subtitle: '',
                        remark: `<p>注意：禁用状态除了属性<code>disabled</code>，也可以使用类样式<code>.disabled</code>。</p>
<p>区别是属性<code>disabled</code>同时限制了用户的输入，而类样式<code>.disabled</code>如果需要限制用户输入最低需要IE11及以上兼容性，不兼容更低版本浏览器。</p>`,
                        code: ``,
                        script: el => {
                            [].forEach.call(el.querySelectorAll('[on]'), item => {
                                item.removeAttribute('on');
                                item.oninput = function() {
                                    this.nextElementSibling.setAttribute('count', this.value.length);
                                };
                            });
                        },
                        detail: [
                            {
                                remark: '输入值错误状态',
                                code: `<textarea on value="" class="input invalid" maxlength="200" placeholder="请输入..."></textarea>
<i count="0" maxcount="200">输入框不能为空</i>`
                            }, {
                                remark: '输入值正确状态',
                                code: `<textarea on value="" class="input valid" maxlength="200" placeholder="请输入..."></textarea>
<i count="0" maxcount="200">正确</i>`
                            }, {
                                remark: '禁用状态',
                                code: `<textarea on value="" class="input" disabled maxlength="200" placeholder="请输入..."></textarea>
<i count="0" maxcount="200"></i>`
                            }
                        ]
                    }
                ]
            }, {
                title: '输入组',
                remark: '在一行上放置多个输入控件或文本。',
                children: [
                    {
                        title: '基本样式',
                        subtitle: '',
                        remark: `<p>注意点1：普通情况下只需要设定输入组长度，默认100%，而不需要设置输入组内部元素长度。</p>
<p>注意点2：输入组内部元素类样式必须为.input/.btn或者是span/label/i元素才能生效，并不是所有元素都能生效。</p>`,
                        detail: [
                            {
                                remark: '输入邮箱示例',
                                code: `<div class="input-group">
    <input type="email" class="input" />
    <span>@qq.com</span>
    <a class="btn btn-primary">提交</a>
</div>`
                            }, {
                                remark: '输入姓名示例',
                                code: `<div class="input-group">
    <span>姓名</span>
    <input class="input" />
    <a class="btn btn-primary">提交</a>
</div>`
                            }, {
                                remark: '数值区间示例，标准数值区间控件见<a linkmenu="3-3-3">时间区间</a>',
                                code: `<div class="input-group">
    <input class="input" value="北京" />
    <span>至</span>
    <input class="input" value="上海" />
</div>`
                            }, {
                                remark: '输入年月日信息',
                                code: `<div class="input-group">
    <input class="input" value="2018" />
    <span>年</span>
    <input class="input" value="09" />
    <span>月</span>
    <input class="input" value="16" />
    <span>日</span>
</div>`
                            }, {
                                remark: '连续的输入控件，需要在输入框中加入带类样式<code>input-group-split</code>的分割的文本标签',
                                code: `<div class="input-group">
    <input class="input" value="192" />
    <span class="input-group-split"></span>
    <input class="input" value="168" />
    <span class="input-group-split"></span>
    <input class="input" value="0" />
    <span class="input-group-split"></span>
    <input class="input" value="1" />
</div>`
                            }, {
                                remark: '分散输入组，需要给输入组添加样式<code>spacing</code>，默认分散的间距为<strong>10px</strong>',
                                code: `<div class="input-group spacing">
    <span>姓名</span>
    <input class="input" value="" />
    <span>年龄</span>
    <input type="number" class="input" value="" />
    <a class="btn btn-primary">提交</a>
</div>`
                            }
                        ]
                    }
                ]
            }, {
                title: '表单小提示',
                remark: `<p>html版的表单提示，一般和表单控件配合使用，也可以考虑使用Element组件里的<a linkmenu="3-17">Tooltip 文字提示组件</a>。</p>`,
                children: [
                    {
                        title: '基本样式',
                        subtitle: '',
                        code: `<div class="input invalid">
    <input type="text" placeholder="用户名" value="">
    <i class="tooltip tooltip-danger">用户名不能为空</i>
</div>`,
                    }
                ]
            }
        ]
    }, {
        title: 'Element 组件',
        remark: '',
        children: [
            {
                title: 'Select 下拉框',
                remark: '',
                children: [
                    {
                        title: '基础下拉框',
                        remark: '',
                        vueData: {
                            value_1: '',
                            options_1: [
                                { value: 1, label: '黄金糕' }, 
                                { value: 2, label: '双皮奶' }, 
                                { value: 3, label: '蚵仔煎' }
                            ]
                        },
                        code: `<el-select v-model="value_1" placeholder="请选择">
    <el-option
    v-for="(item,index) in options_1"
    :key="index"
    :label="item.label"
    :value="item.value">
    </el-option>
</el-select>`
                    }
                ]
            }, {
                title: 'Radio 单选框',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        remark: '',
                        code: `<el-radio v-model="value_2" label="1">备选项A</el-radio>
<el-radio v-model="value_2" label="2">备选项B</el-radio>`,
                        vueData: {
                            value_2: ''
                        }
                    }, {
                        title: '预设尺寸',
                        remark: '',
                        code: `<el-radio class="input-xs" v-model="value_21" label="1">尺寸：微小</el-radio>
<el-radio class="input-sm" v-model="value_21" label="2">尺寸：小（默认）</el-radio>
<el-radio class="input-md" v-model="value_21" label="3">尺寸：中</el-radio>`,
                        vueData: {
                            value_21: ''
                        }
                    }
                ]
            }, {
                title: 'Checkbox 多选框',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        code: `<el-checkbox v-model="value_3">备选项</el-checkbox>`,
                        vueData: {
                            value_3: ''
                        }
                    }, {
                        title: '预设尺寸',
                        code: `<el-checkbox class="input-xs" v-model="value_31[0]">尺寸：微小</el-checkbox>
<el-checkbox class="input-sm" v-model="value_31[1]">尺寸：小（默认）</el-checkbox>
<el-checkbox class="input-md" v-model="value_31[2]">尺寸：中</el-checkbox>`,
                        vueData: {
                            value_31: ['','','']
                        }
                    }
                ]
            }, {
                title: 'Tree 树状图',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        language: 'vue-html',
                        code: `<el-tree :data="treeValue_1" show-checkbox></el-tree>`,
                        vueData: {
                            treeValue_1: [{
                                    label: '一级 1',
                                    children: [{
                                        label: '二级 1-1',
                                        children: [{
                                            label: '三级 1-1-1'
                                        }]
                                    }]
                                }, {
                                    label: '一级 2',
                                    children: [{
                                        label: '二级 2-1',
                                        children: [{
                                            label: '三级 2-1-1'
                                        }]
                                    }, {
                                        label: '二级 2-2',
                                        children: [{
                                            label: '三级 2-2-1'
                                        }]
                                    }]
                                }, {
                                    label: '一级 3',
                                    children: [{
                                        label: '二级 3-1',
                                        children: [{
                                            label: '三级 3-1-1'
                                        }]
                                    }, {
                                        label: '二级 3-2',
                                        children: [{
                                            label: '三级 3-2-1'
                                        }]
                                    }]
                                }]
                        }
                    }
                ]
            }, {
                title: 'Upload 上传',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        code: `<el-upload
    class="upload-demo w300"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    :limit="3">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>`
                    }, {
                        title: '头像上传',
                        vueData: {
                            imageUrl: ''
                        },
                        vueMethod: {
                            handleAvatarSuccess(res, file) {
                                this.imageUrl = URL.createObjectURL(file.raw);
                            },
                            beforeAvatarUpload(file) {
                                const isJPG = file.type === 'image/jpeg';
                                const isLt2M = file.size / 1024 / 1024 < 2;
                        
                                if (!isJPG) {
                                    this.$message.error('上传头像图片只能是 JPG 格式!');
                                }
                                if (!isLt2M) {
                                    this.$message.error('上传头像图片大小不能超过 2MB!');
                                }
                                return isJPG && isLt2M;
                            }
                        },
                        code: `<el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>`
                    }
                ]
            }, {
                title: 'Rate 评分',
                remark: '',
                vueData: {
                    rateValue_1: ''
                },
                code: `<el-rate v-model="rateValue_1"></el-rate>`,
                children: [

                ]
            }, {
                title: 'TimePicker 时间选择器',
                remark: '',
                vueData: {
                    value_71: '',
                    value_72: ['','','']
                },
                children: [
                    {
                        title: '基础风格',
                        code: `<el-time-select class="w300" v-model="value_71" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"placeholder="选择时间"></el-time-select>`,
                    }, {
                        title: '预设尺寸',
                        detail: [
                            {
                                remark: '尺寸：微小',
                                code: `<el-time-select size="mini" v-model="value_72[0]" 
    :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select><hr />
<el-time-select class="input-xs" v-model="value_72[0]" 
    :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select>`
                            }, {
                                remark: '尺寸：小',
                                code: `<el-time-select size="small" v-model="value_72[1]" 
    :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select><hr />
<el-time-select class="input-sm" v-model="value_72[1]" 
    :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select>`
                            }, {
                                remark: '尺寸：中',
                                code: `<el-time-select size="large" v-model="value_72[2]" 
    :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select><hr />
<el-time-select class="input-md" v-model="value_72[2]" 
    :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select>`
                            }
                        ]
                    }
                ]
            }, {
                title: 'DatePicker 日期选择器',
                remark: '',
                vueData: {
                    value_81: '',
                    value_82: ['','','']
                },
                children: [
                    {
                        title: '基础风格',
                        code: `<el-date-picker class="w300" v-model="value_81" type="date" placeholder="选择日期"></el-date-picker>`,
                        
                    }, {
                        title: '预设尺寸',
                        detail: [
                            {
                                remark: '尺寸：微小',
                                code: `<el-date-picker size="mini" v-model="value_82[0]" type="date" placeholder="选择日期"></el-date-picker><hr />
<el-date-picker class="input-xs" v-model="value_82[0]" type="date" placeholder="选择日期"></el-date-picker>`
                            }, {
                                remark: '尺寸：小',
                                code: `<el-date-picker size="small" v-model="value_82[1]" type="date" placeholder="选择日期"></el-date-picker><hr />
<el-date-picker class="input-sm" v-model="value_82[1]" type="date" placeholder="选择日期"></el-date-picker>`
                            }, {
                                remark: '尺寸：中',
                                code: `<el-date-picker size="large" v-model="value_82[2]" type="date" placeholder="选择日期"></el-date-picker><hr />
<el-date-picker class="input-md" v-model="value_82[2]" type="date" placeholder="选择日期"></el-date-picker>`
                            }
                        ]
                    }
                ]
            }, {
                title: '时间日期选择器',
                remark: ``,
                vueData: {
                    value_91: '',
                    value_92: ['','','']
                },
                children: [
                    {
                        title: '基础风格',
                        code: `<el-date-picker class="w300" v-model="value_91" type="datetime" placeholder="选择日期时间"></el-date-picker>`,
                    }, {
                        title: '预设尺寸',
                        detail: [
                            {
                                remark: '尺寸：微小',
                                code: `<el-date-picker size="mini" v-model="value_92[0]" type="datetime" placeholder="选择日期时间"></el-date-picker><hr />
<el-date-picker class="input-xs" v-model="value_92[0]" type="datetime" placeholder="选择日期时间"></el-date-picker>`
                            }, {
                                remark: '尺寸：小',
                                code: `<el-date-picker size="small" v-model="value_92[1]" type="datetime" placeholder="选择日期时间"></el-date-picker><hr />
<el-date-picker class="input-sm" v-model="value_92[1]" type="datetime" placeholder="选择日期时间"></el-date-picker>`
                            }, {
                                remark: '尺寸：中',
                                code: `<el-date-picker size="medium" v-model="value_92[2]" type="datetime" placeholder="选择日期时间"></el-date-picker><hr />
<el-date-picker class="input-md" v-model="value_92[2]" type="datetime" placeholder="选择日期时间"></el-date-picker>`
                            }, {
                                remark: '尺寸：大',
                                code: `<el-date-picker size="large" v-model="value_92[2]" type="datetime" placeholder="选择日期时间"></el-date-picker><hr />
<el-date-picker class="input-lg" v-model="value_92[2]" type="datetime" placeholder="选择日期时间"></el-date-picker>`
                            }
                        ],
                    }
                ]
            }, {
                title: 'Cascader 级联选择器',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        language: `vue-html`,
                        code: `<el-cascader :options="cascaderOptions_1" v-model="cascaderValue_1"></el-cascader>`,
                        vueData: {
                            cascaderValue_1: [],
                            cascaderOptions_1: [{
                                value: 'zhinan',
                                label: '指南',
                                children: [
                                    {
                                        value: 'shejiyuanze',
                                        label: '设计原则',
                                        children: [
                                            {
                                                value: 'yizhi',
                                                label: '一致'
                                            }, {
                                                value: 'fankui',
                                                label: '反馈'
                                            }, {
                                                value: 'xiaolv',
                                                label: '效率'
                                            }, {
                                                value: 'kekong',
                                                label: '可控'
                                            }
                                        ]
                                    }
                                ]
                            }]
                        }
                    }, {
                        title: '预设尺寸',
                        detail: [
                            {
                                remark: `尺寸：微小`,
                                language: `vue-html`,
                                code: `<el-cascader size="mini" :options="cascaderOptions_1" v-model="cascaderValue_1"></el-cascader>`
                            }, {
                                remark: `尺寸：小`,
                                language: `vue-html`,
                                code: `<el-cascader size="small" :options="cascaderOptions_1" v-model="cascaderValue_1"></el-cascader>`
                            }, {
                                remark: `尺寸：中`,
                                language: `vue-html`,
                                code: `<el-cascader size="medium" :options="cascaderOptions_1" v-model="cascaderValue_1"></el-cascader>`
                            }
                        ]
                    }
                ]
            }, {
                title: 'Slidere 滑块',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        language: 'vue-html',
                        code: `<el-slider v-model="sliderValue_1"></el-slider>`,
                        vueData: {
                            sliderValue_1: 30
                        }
                    }
                ]
            }, {
                title: 'Table 表格',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        language: 'vue-html',
                        viewCode: `<el-table :data="tableValue1">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
</el-table>`,
                        code: `<div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition"><div class="hidden-columns"><div></div> <div></div> <div></div></div><div class="el-table__header-wrapper"><table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1194px;"><colgroup><col name="el-table_1_column_1" width="180"><col name="el-table_1_column_2" width="180"><col name="el-table_1_column_3" width="834"></colgroup><thead class=""><tr class=""><th colspan="1" rowspan="1" class="el-table_1_column_1     is-leaf"><div class="cell">日期</div></th><th colspan="1" rowspan="1" class="el-table_1_column_2     is-leaf"><div class="cell">姓名</div></th><th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf"><div class="cell">地址</div></th></tr></thead></table></div><div class="el-table__body-wrapper is-scrolling-none"><table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1194px;"><colgroup><col name="el-table_1_column_1" width="180"><col name="el-table_1_column_2" width="180"><col name="el-table_1_column_3" width="834"></colgroup><tbody><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-02</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">张三</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">上海市普陀区金沙江路 1518 弄</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-04</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">李四</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">上海市普陀区金沙江路 1517 弄</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-01</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">王五</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">上海市普陀区金沙江路 1519 弄</div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell">2016-05-03</div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">赵六</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">上海市普陀区金沙江路 1516 弄</div></td></tr><!----></tbody></table><!----><!----></div><!----><!----><!----><!----><div class="el-table__column-resize-proxy" style="display: none;"></div></div>`,
                    }
                ]
            }, {
                title: 'Pagination 分页',
                remark: '',
                children: [
                    {
                        title: '基础风格',
                        language: `vue-html`,
                        code: `<el-pagination
    :current-page="1"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400">
</el-pagination>`,

                    }
                ]
            }, {
                title: 'Notification 通知',
                remark: '<p>Element组件自带通知功能，具体可参考<a class="linkurl" target="_blank" href="http://element-cn.eleme.io/#/zh-CN/component/notification">Notification 通知</a></p>',
                language: 'vue-javascript',
                code: `<div role="alert" class="el-notification right" style="position: relative;left: 0px;">
    <div class="el-notification__group">
        <h2 class="el-notification__title">提示</h2>
        <div class="el-notification__content">
            <p>一条提示消息</p>
        </div>
        <div class="el-notification__closeBtn el-icon-close"></div>
    </div>
</div>`,
                viewCode: `this.$notify({
    title: '提示',
    message: '一条提示消息'
});`,
                detail: [
                    {
                        remark: '弹出一条自动关闭的消息',
                        language: 'vue-javascript',
                        code: `<el-button class="btn" @click="notification_show_1">点击弹出消息</el-button>`,
                        viewCode: `this.$notify({
    title: '提示',
    message: '一条提示消息'
});`,
                        vueMethod: {
                            notification_show_1: function() {
                                this.$notify({
                                    title: '提示',
                                    message: '一条提示消息'
                                });
                            }
                        },
                    }
                ]
            }, {
                title: 'MessageBox 消息弹出框',
                remark: `<p>Element组件自带消息弹出框功能，具体可参考<a class="linkurl" target="_blank" href="http://element-cn.eleme.io/#/zh-CN/component/message-box">MessageBox 弹框</a></p>
<p>注意：<strong>center: true</strong>属性是必要的。</p>`,
                language: 'vue-javascript',
                code: `<div tabindex="-1" role="dialog" aria-modal="true" aria-label="提示" class="el-message-box__wrapper" style="position: relative;z-index: 1;">
    <div class="el-message-box el-message-box--center">
        <div class="el-message-box__header">
            <div class="el-message-box__title">
                <div class="el-message-box__status el-icon-warning"></div>
                <span>提示</span>
            </div>
            <button type="button" aria-label="Close" class="el-message-box__headerbtn">
                <i class="el-message-box__close el-icon-close"></i>
            </button>
        </div>
        <div class="el-message-box__content">
            <div class="el-message-box__message">
                <p>此操作将永久删除该文件, 是否继续?</p>
            </div>
            <div class="el-message-box__input" style="display: none;">
                <div class="el-input">
                    <input type="text" autocomplete="off" placeholder="" class="el-input__inner">
                </div>
                <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
            </div>
        </div>
        <div class="el-message-box__btns">
            <button type="button" class="el-button el-button--default el-button--small"><span>取消</span></button>
            <button type="button" class="el-button el-button--default el-button--small el-button--primary "><span>确定</span></button>
        </div>
    </div>
</div>
<div class="v-modal" tabindex="0" style="position:absolute;z-index: 0;"></div>`,
                viewCode: `this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    center: true
})`,
                detail: [
                    {
                        remark: '成功弹出框',
                        language: 'vue-javascript',
                        code: `<a class="btn btn-success" @click="messageBox_show_1()">操作成功</a>`,
                        vueMethod: {
                            messageBox_show_1: function() {
                                this.$confirm('当前项目提交成功。', '操作成功', {
                                    confirmButtonText: '完成',
                                    cancelButtonText: '继续添加',
                                    type: 'success',
                                    center: true,
                                    lockScroll: false
                                })
                            }
                        },
                        viewCode: `this.$confirm('当前项目提交成功。', '操作成功', {
    confirmButtonText: '完成',
    cancelButtonText: '继续添加',
    type: 'success',
    center: true
})`,
                    }, {
                        remark: '警告弹出框',
                        language: 'vue-javascript',
                        code: `<a class="btn btn-warning" @click="messageBox_show_2()">操作警告</a>`,
                        vueMethod: {
                            messageBox_show_2: function() {
                                this.$confirm('删除该目录，将会删除该目录下所有子目录您确定要删除“××目录”吗？', '操作提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning',
                                    center: true,
                                    lockScroll: false
                                })
                            }
                        },
                        viewCode: `this.$confirm('删除该目录，将会删除该目录下所有子目录您确定要删除“××目录”吗？', '操作提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    center: true
})`,
                    }, {
                        remark: '错误弹出框',
                        language: 'vue-javascript',
                        code: `<a class="btn btn-danger" @click="messageBox_show_3()">操作错误</a>`,
                        vueMethod: {
                            messageBox_show_3: function() {
                                this.$confirm('对不起，您没有权限删除该项目！', '操作失败', {
                                    cancelButtonText: '关闭',
                                    type: 'error',
                                    center: true,
                                    lockScroll: false
                                })
                            }
                        },
                        viewCode: `this.$confirm('对不起，您没有权限删除该项目！', '操作失败', {
    cancelButtonText: '关闭',
    type: 'error',
    center: true
})`,
                    }
                ]
            }, {
                title: 'Dialog 弹出层',
                language: 'vue-html',
                viewCode: `<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
</el-dialog>`,
                code: `<div class="el-dialog__wrapper" style="z-index: 2;position: relative;">
    <div class="el-dialog" style="margin: 0px auto;">
        <div class="el-dialog__header">
            <span class="el-dialog__title">提示</span>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
        </div>
        <div class="el-dialog__body">
            <span>这是一段信息</span>
        </div>
        <div class="el-dialog__footer">
            <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </div>
    </div>
</div>
<div class="v-modal" style="position: absolute;z-index: 0;"></div>`,
                detail: [
                    {
                        remark: '居中弹出层',
                        language: 'vue-html',
                        code: `<el-button type="text" @click="dialog_1_isShow = true">点击打开 Dialog</el-button>
<el-dialog
title="提示"
:lock-scroll="false"
:visible.sync="dialog_1_isShow"
width="30%"
:before-close="dialog_close_1">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialog_1_isShow = false">取 消</el-button>
        <el-button type="primary" @click="dialog_1_isShow = false">确 定</el-button>
    </span>
</el-dialog>`,
                        vueData: {
                            dialog_1_isShow: false
                        },
                        vueMethod: {
                            dialog_show_1: function() {
                                this.$confirm('当前项目提交成功。', '操作成功', {
                                    confirmButtonText: '完成',
                                    cancelButtonText: '继续添加',
                                    type: 'success',
                                    center: true,
                                    lockScroll: false
                                })
                            },
                            dialog_close_1: function(done) {
                                this.$confirm('确认关闭？').then(_ => done()).catch(_ => {});
                            }
                        },
                    }, {
                        remark: '右侧弹出层',
                        language: 'vue-html',
                        code: `<el-button class="btn" type="text" @click="dialog_2_isShow = true">点击打开 Dialog</el-button>
<el-dialog class="dialog-right"
title="提示"
:lock-scroll="false"
:visible.sync="dialog_2_isShow"
width="30%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialog_2_isShow = false">取 消</el-button>
        <el-button type="primary" @click="dialog_2_isShow = false">确 定</el-button>
    </span>
</el-dialog>`,
                        vueData: {
                            dialog_2_isShow: false
                        },
                        vueMethod: {
                            dialog_show_2: function() {
                                this.$confirm('当前项目提交成功。', '操作成功', {
                                    confirmButtonText: '完成',
                                    cancelButtonText: '继续添加',
                                    type: 'success',
                                    center: true,
                                    lockScroll: false
                                })
                            }
                        },
                    }, {
                        remark: '全屏弹出层',
                        language: 'vue-html',
                        code: `<el-button type="text" @click="dialog_3_isShow = true">点击打开 Dialog</el-button>
<el-dialog
title="提示"
:fullscreen="true"
:visible.sync="dialog_3_isShow"
width="30%"
:before-close="dialog_close_3">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialog_3_isShow = false">取 消</el-button>
        <el-button type="primary" @click="dialog_3_isShow = false">确 定</el-button>
    </span>
</el-dialog>`,
                        vueData: {
                            dialog_3_isShow: false
                        },
                        vueMethod: {
                            dialog_show_3: function() {
                                this.$confirm('当前项目提交成功。', '操作成功', {
                                    confirmButtonText: '完成',
                                    cancelButtonText: '继续添加',
                                    type: 'success',
                                    center: true,
                                    lockScroll: false
                                })
                            },
                            dialog_close_3: function(done) {
                                this.$confirm('确认关闭？').then(_ => done()).catch(_ => {});
                            }
                        },
                    }
                ]
            }, {
                title: 'Tooltip 文字提示',
                language: 'vue-html',
                code: `<el-tooltip class="item w100" effect="dark" :content="value_1" placement="top-start">
    <input class="input" v-model="value_1" />
</el-tooltip>`
            }, {
                title: 'NavMenu 导航菜单',
                remark: '',
                code: `<el-menu :default-active="navmenu_active_1" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="#">订单管理</a></el-menu-item>
    </el-menu>
    <hr class="mt30 mb30" />
    <el-menu :default-active="navmenu_active_1" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="#">订单管理</a></el-menu-item>
</el-menu>`,
                vueData: {
                    navmenu_active_1: '1',
                },
                children: [

                ]
            }
        ]
    }, {
        title: '自定义组件',
        remark: '',
        children: [
            {
                title: '穿梭框',
                remark: '',
                children: [

                ]
            }
        ]
    }, {
        title: '页面模板',
        remark: '',
        children: [
            {
                title: '公用模块',
                remark: '',
                children: [
                    {
                        title: '主菜单',
                        code: `<div class="main-menu">
<div class="main-menu-content">
    <ul>
        <li class="  ">
            <a url="http://xinli.standard.36cpa.cn/#/index?type=1">产品线</a>
        </li>
        <li class="  ">
            <a url="http://xinli.standard.36cpa.cn/#/parts">部品部件</a>
        </li>
        <li class="  ">
            <a url="http://xinli.standard.36cpa.cn/#/knowledge">知识库</a>
        </li>
        <li class=" haschild ">
            <a url="">项目库</a> 
            <ul>
                <li class="  ">
                    <a url="http://xinli.standard.36cpa.cn/#/chart?t=chart">平台数据分析</a>
                </li>
                <li class=" haschild ">
                    <a url="http://xinli.standard.36cpa.cn/#/chart_downloads_Statistics?t=chart">下载 / 浏览统计</a>
                    <ul>
                        <li class="  ">
                            <a url="http://xinli.standard.36cpa.cn/#/aaa?t=chart">测试地址</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="  ">
            <a url="http://xinli.standard.36cpa.cn/#/front_system_notice">系统公告</a>
        </li>
        <li class="fr active">
            <a url="/xinli/1/front/project_library_list">
                <i class="fas fa-th"></i>项目库
            </a>
        </li>
    </ul>
</div>
</div>`
                    },
                    {
                        title: '面板',
                        remark: '',
                        detail: [
                            {
                                remark: '主面板-基本面板',
                                code: `<div class="panel-main">
    <div class="panel-content">
        面板内容
    </div>
</div>`
                            }, {
                                remark: '主面板-完整面板',
                                code: `<div class="panel-main">
    <div class="panel-header">
        <span class="panel-title">栏目名称</span>
        <ul class="panel-tools">
            <li class="panel-tool"><a class="link">更多<i class="fa fa-fw fa-angle-right"></i></a></li>
        </ul>
    </div>
    <div class="panel-content">
        面板内容
    </div>
</div>`
                            }, {
                                remark: '侧面板-基本面板',
                                code: `<div class="panel-side">
    <div class="panel-content">
        面板内容
    </div>
</div>`
                            }, {
                                remark: '侧面板-完整面板',
                                code: `<div class="panel-side">
    <div class="panel-header">
        <span class="panel-title">栏目名称</span>
        <ul class="panel-tools">
            <li class="panel-tool"><a class="link">更多<i class="fa fa-fw fa-angle-right"></i></a></li>
        </ul>
    </div>
    <div class="panel-content">
        面板内容
    </div>
    <div class="panel-footer">
        面板脚部
    </div>
</div>`
                            }
                        ]
                    }, {
                        title: '时间轴',
                        remark: '',
                        detail: [
                            {
                                remark: `中尺寸时间轴`,
                                code: `<ul class="steps-md">
    <li class="active">登录网站</li>
    <li class="active">点击编辑</li>
    <li>成功提交</li>
</ul>
<hr />
<ul class="steps-md steps-outline">
    <li class="active">登录网站</li>
    <li>点击编辑</li>
    <li>成功提交</li>
</ul>`
                            }, {
                                remark: `小尺寸时间轴`,
                                code: `<ul class="steps-sm">
    <li class="active">登录网站</li>
    <li class="active">点击编辑</li>
    <li>成功提交</li>
</ul>
<hr />
<ul class="steps-sm steps-outline">
    <li class="active">登录网站</li>
    <li>点击编辑</li>
    <li>成功提交</li>
</ul>`
                            }
                        ]
                    }, {
                        title: '对比栏',
                        remark: '',
                        code: `<div class="procompare">
    <div class="procompare-header">
        <h3 class="procompare-title">对比栏</h3>
        <div class="procompare-message">
            <el-alert title="对比栏已满，您可以删除不需要的栏内商品再继续添加！" type="error" show-icon :closable="false"></el-alert>
        </div>
        <div class="procompare-tools">
            <a class="btn">清空对比项</a>
            <a class="btn btn-primary">立即对比</a>
            <i class="procompare-close el-icon-close"></i>
        </div>
    </div>
    <div class="procompare-list">
        <div class="procompare-item">
            <span class="procompare-item-title">苏州分行项目</span>
            <div class="procompare-item-tools">
                <a class="btn">删除</a>
            </div>
        </div>
        <div class="procompare-item blank"></div>
        <div class="procompare-item blank"></div>
        <div class="procompare-item blank"></div>
    </div>
</div>`
                    }, {
                        title: '小登录框',
                        remark: '',
                        code: `<div class="login-form">
    <div class="header">
        <img src="" />
        <h2>欢迎登录</h2>
    </div>
    <div class="input invalid">
        <i class="input-icon fa fa-fw fa-user"></i>
        <input type="text" placeholder="用户名" value="" />
        <i class="tooltip tooltip-danger">用户名不能为空</i>
    </div>
    <div class="input">
        <i class="input-icon fa fa-fw fa-lock"></i>
        <input type="password" placeholder="密码" value="" />
    </div>
    <button class="btn btn-block btn-lg btn-primary">登录</button>
</div>`,
                        children: [
        
                        ]
                    }, {
                        title: '图片边框元素',
                        subtitle: '',
                        code: `<div class="w50" v-imgborder="{src:'../img/test/border-image2.png', slice: '30px'}">图片边框按钮</div>`
                    }, {
                        title: '无数据状态',
                        remark: `<p>注意点1：需要无数据状态使用<strong>:after</strong>伪元素选择器实现，添加此样式前需要确认原元素是否已使用<strong>:after</strong>伪元素选择器。</p>
<p>注意点2：会默认给当前div添加最低<strong>150px</strong>的高度。`,
                        code: `<div class="data-no"></div>`
                    }, {
                        title: '加载中',
                        remark: `<p>注意点1：需要加载状态使用<strong>:after</strong>伪元素选择器实现，添加此样式前需要确认原元素是否已使用<strong>:after</strong>伪元素选择器。</p>
<p>注意点2：会默认给当前div添加最低<strong>150px</strong>的高度。`,
                        code: `<div class="data-loading"></div>`
                    }, {
                        title: '分类筛选框',
                        code: `<div class="category-filter">
    <div class="category-filter-selected">
        <span class="category-filter-selected-title">已选项目：</span>
        <ul>
            <li label="所在区域">浦东</li>
            <li label="业态">高层、小高层、超高层、联排、别墅、步行街、其他等等等等</li>
            <li label="SPEC目录">主体-地坪</li>
            <li class="selected-clear"><i class="fa fa-fw fa-trash-o"></i>全部清除</li>
        </ul>
    </div>
    <div class="category-filter-content">
        <div class="category-filter-list">
            <span class="category-filter-list-title">所在区域：</span>
            <ul>
                <li>全部</li><li class="active">浦东</li><li>闵行</li><li class="active">宝山</li><li class="active">徐汇</li><li>长宁</li><li>松江</li><li>嘉定</li><li>黄浦</li><li>静安</li><li>闸北</li><li>虹口</li><li>青浦</li><li>奉贤</li><li>金山</li>
            </ul>
        </div>
        <div class="category-filter-list">
            <span class="category-filter-list-title">品牌：</span>
            <ul>
                <li class="active">全部</li><li>华润</li><li>恒大</li><li>绿地</li><li>保利</li><li>中海</li><li>万科</li><li>龙湖</li><li>富力</li><li>世茂</li><li>中粮</li><li>银泰</li><li>碧桂园</li><li>首开</li><li>首创</li><li>远洋</li><li>朗视</li><li>万达</li><li>复地</li><li>鸿坤</li><li>绿城</li><li>华夏幸福</li><li>中信</li><li>金科</li><li>雅乐居</li>
            </ul>
            <div class="category-filter-list-tools">
                <a class="btn"><i class="fa fa-angle-up"></i>收起</a>
                <a class="btn">多选</a>
            </div>
        </div>
        <div class="category-filter-list">
            <span class="category-filter-list-title">售价：</span>
            <ul>
                <li>全部</li><li>100万以下</li><li>100～150万</li><li>150～200万</li><li>200～300万</li><li>300～500万</li><li>500～1000万</li><li>1000万以上</li>
            </ul>
        </div>
        <div class="category-filter-list">
            <span class="category-filter-list-title">SPEC目录：</span>
            <ul>
                <li>全部</li><li class="active extend">结构</li><li>主体</li><li>装修</li><li>幕墙</li><li>景观</li><li>强电</li><li>弱电</li><li>给排水</li><li>消防</li><li>自动</li><li>1000万以上</li>
            </ul>
        </div>
        <div class="category-filter-list detail">
            <ul>
            <li>全部</li><li>地坪</li><li>砂浆</li><li class="active">砌体</li><li>膜材</li><li>金属</li><li>水泥</li><li>弱电</li><li>混凝土</li><li>防火</li><li>防水</li><li>防腐</li><li>人防</li><li>加固</li>
            </ul>
        </div>
    </div>
</div>`,
                    }, {
                        title: '数据卡片（横）',
                        language: 'vue-html',
                        code: `<div class="data-card">
    <img-square src="../img/test1.jpg"></img-square>
    <div class="data-card-content">
        <h3>上海锦绣天地 一期</h3>
        <ul class="infos cols1 auto">
            <li label="负责人">宋正文</li>
            <li label="开始时间">2016-06-21</li>
            <li label="项目地址">上海市青浦区徐泾镇蟠中东路</li>
            <li label="所属区域">华东</li>
        </ul>
        <div class="tools">
            <a class="btn"><i class="fa fa-square-o"></i>对比</a>
            <a class="btn"><i class="fa fa-star-o"></i>收藏</a>
        </div>
    </div>
</div>`
                    }, {
                        title: '数据卡片（纵）',
                        language: 'vue-html',
                        code: `<div class="data-card-vertical">
    <img-square src="../img/test1.jpg"></img-square>
    <div class="data-card-content">
        <h4>上海锦绣天地 一期</h4>
        <ul class="infos cols1 auto">
            <li label="负责人">宋正文</li>
            <li label="开始时间">2016-06-21</li>
            <li label="项目地址">上海市青浦区徐泾镇蟠中东路</li>
            <li label="所属区域">华东</li>
        </ul>
        <div class="tools">
            <a class="btn"><i class="fa fa-square-o"></i>对比</a>
            <a class="btn"><i class="fa fa-star-o"></i>收藏</a>
        </div>
    </div>
</div>`
                    }
                ]
            }, {
                title: 'ERP系统',
                remark: '',
                children: [
                    {
                        title: '示例列表页面',
                        remark: '',
                        language: `vue-html`,
                        code: `<el-breadcrumb class="mb20" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">主菜单</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">示例列表页面</a></el-breadcrumb-item>
</el-breadcrumb>
<div class="form-header">
    <h2>示例列表页面</h2>
    <div class="form-header-tools">
        <a class="btn btn-md btn-primary">新增项目</a>
        <a class="btn btn-md btn-default">导出</a>
    </div>
</div>
<div class="category-filter">
    <div class="category-filter-selected">
        <span class="category-filter-selected-title">已选项目：</span>
        <ul>
            <li label="项目">镇江分行</li>
            <li class="selected-clear"><i class="fa fa-fw fa-trash-o"></i>全部清除</li>
        </ul>
    </div>
    <div class="category-filter-content">
        <div class="category-filter-list">
            <span class="category-filter-list-title">项目：</span>
            <ul>
                <li>全部</li><li class="active">镇江分行</li><li>深圳分行</li>
            </ul>
        </div>
        <div class="category-filter-list">
            <span class="category-filter-list-title">采购方式：</span>
            <ul>
                <li>全部</li><li>公开招标</li><li>邀请招标</li><li>竞争性谈判</li><li>询价</li><li>单一来源采购</li>
            </ul>
        </div>
    </div>
</div>
<div class="input-group mt10 mb10">
    <span>&nbsp;项目名称：</span>
    <input class="input" value="" />
    <span>&nbsp;&nbsp;时间范围：</span>
    <el-date-picker size="small" v-model="value_82[0]" type="date" placeholder="选择日期"></el-date-picker>
    <span>至</span>
    <el-date-picker size="small" v-model="value_82[1]" type="date" placeholder="选择日期"></el-date-picker>
</div>
<table class="table">
    <thead>
        <tr>
            <th>序号</th>
            <th>项目名称</th>
            <th>采购时间</th>
            <th>采购类型</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>测试项目A</td>
            <td>2018-01-02</td>
            <td>类型A</td>
            <td>
                <a class="link">编辑</a>
                <a class="link">删除</a>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>测试项目B</td>
            <td>2018-01-20</td>
            <td>类型A</td>
            <td>
                <a class="link">编辑</a>
                <a class="link">删除</a>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>测试项目C</td>
            <td>2018-03-06</td>
            <td>类型A</td>
            <td>
                <a class="link">编辑</a>
                <a class="link">删除</a>
            </td>
        </tr>
    </tbody>
</table>`,
                    }, {
                        title: '示例编辑页面',
                        remark: '',
                        language: `vue-html`,
                        vueData: {
                            editItem1: {
                                name: 'Admin',
                                address: '地区1',
                                startDate: '',
                                endDate: '',
                                area: '',
                                code: '',
                                category: ['超出逾期', '首选'],
                                remark: ''
                            },
                            categoryList: [
                                '战略', '超出逾期', '首选', '可选', '限制条件使用', '不合格', '黑名单', '低于预期'
                            ]
                        },
                        code: `<div class="form-header">
    <h2>示例编辑页面</h2>
    <div class="form-header-tools">
        <a class="btn btn-md btn-primary">下一步</a>
        <a class="btn btn-md btn-default">查看示例</a>
    </div>
    <ul class="infos infos-inline">
        <li label="示例名称">示例A</li>
        <li label="预览方式">直接预览</li>
    </ul>
</div>
<div class="panel-main">
    <div class="panel-header">
        <span class="panel-title">编辑面板</span>
        <ul class="panel-tools">
            <li class="panel-tool"><a class="link">跳转到</a></li>
        </ul>
    </div>
    <div class="panel-content">
        <div class="form form-edit cols2">
            <dl>
                <dt class="required">名称</dt>
                <dd>
                    <input class="input" :class="{'invalid':!editItem1.name}" v-model="editItem1.name" />
                    <i>{{editItem1.name ? '' : '姓名不能为空'}}</i>
                </dd>
            </dl>
            <dl>
                <dt>选择区域</dt>
                <dd>
                    <el-select v-model="editItem1.address" placeholder="请选择">
                        <el-option v-for="i in ['区域1','区域2','区域3','区域4','区域5']" :key="i" :label="i" :value="i"></el-option>
                    </el-select>
                </dd>
            </dl>
            <dl>
                <dt class="required">日期</dt>
                <dd>
                    <div class="input-group">
                        <el-date-picker v-model="editItem1.startDate" type="date" placeholder="开始日期"></el-date-picker>
                        <span>至</span>
                        <el-date-picker v-model="editItem1.endDate" type="date" placeholder="开始日期"></el-date-picker>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>面积</dt>
                <dd>
                    <div class="input-group">
                        <input class="input" v-model="editItem1.area" />
                        <span>㎡</span>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>组织机构代码证号</dt>
                <dd>
                    <input class="input" :class="{'invalid':!editItem1.code.length < 6}" v-model="editItem1.code" />
                    <i>{{editItem1.code.length > 6 ? '' : '组织机构代码证号填写错误，请检查！'}}</i>
                </dd>
            </dl>
            <dl class="full">
                <dt>分类</dt>
                <dd>
                    <el-checkbox-group v-model="editItem1.category">
                        <el-checkbox v-for="(a,index) in categoryList" :key="index" :label="a"></el-checkbox>
                    </el-checkbox-group>
                </dd>
            </dl>
            <dl class="full">
                <dt>备注</dt>
                <dd>
                    <textarea class="input" v-model="editItem1.remark" maxlength="200" placeholder="请输入..."></textarea>
                    <i :count="editItem1.remark.length" :maxcount="200"></i>
                </dd>
            </dl>
            <dl class="full">
                <dt>上传附件</dt>
                <dd>
                    <el-upload class="upload-demo w300" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </dd>
            </dl>
        </div>
    </div>
</div>`,
                        children: [
                            
                        ],
                    }
                ]
            }
        ]
    }
];