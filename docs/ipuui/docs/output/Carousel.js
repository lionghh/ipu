Ext.data.JsonP.Carousel({"tagname":"class","name":"Carousel","autodetected":{},"files":[{"filename":"ipu.js","href":"ipu.html#Carousel"}],"deprecated":{"text":"<p>推荐使用 <a href=\"#!/api/HammerCarousel\" rel=\"HammerCarousel\" class=\"docClass\">HammerCarousel</a>\n简单封装IScroll.js的snap功能，实现banner功能</p>\n\n<pre class='inline-example '><code>&lt;!-- 组件html结构如下，li里内容可自定义 --&gt;\n        &lt;div class=\"ipu-carousel ipu-hammer-carousel\"&gt;\n            &lt;ul class=\"ipu-carousel-wrapper\"&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/01.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/02.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/03.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/04.jpg\" alt=\"\"&gt;&lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/div&gt;\n</code></pre>\n"},"uses":["IScroll.js"],"members":[{"name":"defaultOption","tagname":"cfg","owner":"Carousel","id":"cfg-defaultOption","meta":{}},{"name":"constructor","tagname":"method","owner":"Carousel","id":"method-constructor","meta":{}},{"name":"next","tagname":"method","owner":"Carousel","id":"method-next","meta":{}},{"name":"play","tagname":"method","owner":"Carousel","id":"method-play","meta":{}},{"name":"prev","tagname":"method","owner":"Carousel","id":"method-prev","meta":{}},{"name":"refresh","tagname":"method","owner":"Carousel","id":"method-refresh","meta":{}},{"name":"show","tagname":"method","owner":"Carousel","id":"method-show","meta":{}},{"name":"stop","tagname":"method","owner":"Carousel","id":"method-stop","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Carousel","short_doc":" ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"html":"<div><pre class=\"hierarchy\"><h4>Uses</h4><div class='dependency'>IScroll.js</div><h4>Files</h4><div class='dependency'><a href='source/ipu.html#Carousel' target='_blank'>ipu.js</a></div></pre><div class='doc-contents'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This class has been <strong>deprected</strong> </p>\n        <p>推荐使用 <a href=\"#!/api/HammerCarousel\" rel=\"HammerCarousel\" class=\"docClass\">HammerCarousel</a>\n简单封装IScroll.js的snap功能，实现banner功能</p>\n\n<pre class='inline-example '><code>&lt;!-- 组件html结构如下，li里内容可自定义 --&gt;\n        &lt;div class=\"ipu-carousel ipu-hammer-carousel\"&gt;\n            &lt;ul class=\"ipu-carousel-wrapper\"&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/01.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/02.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/03.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/04.jpg\" alt=\"\"&gt;&lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/div&gt;\n</code></pre>\n\n        </div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultOption' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-cfg-defaultOption' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Carousel-cfg-defaultOption' class='name expandable'>defaultOption</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>组件默认配置项 ...</div><div class='long'><p>组件默认配置项</p>\n<p>Defaults to: <code>{index: null, autoPlay: false, duration: 3000, indicator: false, callBack: null}</code></p><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>默认显示的项</p>\n</div></li><li><span class='pre'>autoPlay</span> : Boolean<div class='sub-desc'><p>是否自动播放</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>自动播放间隔，单位ms</p>\n</div></li><li><span class='pre'>indicator</span> : Boolean<div class='sub-desc'><p>是否生成指示器</p>\n</div></li><li><span class='pre'>callBack</span> : Function<div class='sub-desc'><p>切换显示时的回调函数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>当前显示项索引</p>\n</div></li></ul></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Carousel-method-constructor' class='name expandable'>Carousel</a>( <span class='pre'>slt, option</span> ) : <a href=\"#!/api/Carousel\" rel=\"Carousel\" class=\"docClass\">Carousel</a><span class=\"signature\"></span></div><div class='description'><div class='short'>不能直接访问该类，使用ipu.carousel(slt, option)生成实例 ipu.carousel ...</div><div class='long'><p>不能直接访问该类，使用<a href=\"#!/api/ipu-method-carousel\" rel=\"ipu-method-carousel\" class=\"docClass\">ipu.carousel</a>(slt, option)生成实例 <a href=\"#!/api/ipu-method-carousel\" rel=\"ipu-method-carousel\" class=\"docClass\">ipu.carousel</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slt</span> : Dom|JqueryObj|String<div class='sub-desc'><p>jquery对象或者jquery选择器或Dom元素</p>\n</div></li><li><span class='pre'>option</span> : Object<div class='sub-desc'><p>组件配置参数，默认配置见 <a href=\"#!/api/Carousel-cfg-defaultOption\" rel=\"Carousel-cfg-defaultOption\" class=\"docClass\">defaultOption</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Carousel\" rel=\"Carousel\" class=\"docClass\">Carousel</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-next' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-method-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Carousel-method-next' class='name expandable'>next</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示下一项 ...</div><div class='long'><p>显示下一项</p>\n</div></div></div><div id='method-play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-method-play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Carousel-method-play' class='name expandable'>play</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>开始自动播放 ...</div><div class='long'><p>开始自动播放</p>\n</div></div></div><div id='method-prev' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-method-prev' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Carousel-method-prev' class='name expandable'>prev</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示上一项 ...</div><div class='long'><p>显示上一项</p>\n</div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Carousel-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>若窗口发生大小变更，调用此方法更新位移 ...</div><div class='long'><p>若窗口发生大小变更，调用此方法更新位移</p>\n</div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Carousel-method-show' class='name expandable'>show</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示索引index对应的索 ...</div><div class='long'><p>显示索引index对应的索</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>显示项索引</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Carousel'>Carousel</span><br/><a href='source/ipu.html#Carousel-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Carousel-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>停止自动播放 ...</div><div class='long'><p>停止自动播放</p>\n</div></div></div></div></div></div></div>","meta":{"deprecated":{"text":"<p>推荐使用 <a href=\"#!/api/HammerCarousel\" rel=\"HammerCarousel\" class=\"docClass\">HammerCarousel</a>\n简单封装IScroll.js的snap功能，实现banner功能</p>\n\n<pre class='inline-example '><code>&lt;!-- 组件html结构如下，li里内容可自定义 --&gt;\n        &lt;div class=\"ipu-carousel ipu-hammer-carousel\"&gt;\n            &lt;ul class=\"ipu-carousel-wrapper\"&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/01.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/02.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/03.jpg\" alt=\"\"&gt;&lt;/li&gt;\n                &lt;li &gt;&lt;img src=\"../../biz/img/04.jpg\" alt=\"\"&gt;&lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/div&gt;\n</code></pre>\n"}}});