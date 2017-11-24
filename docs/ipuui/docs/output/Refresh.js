Ext.data.JsonP.Refresh({"tagname":"class","name":"Refresh","autodetected":{},"files":[{"filename":"ipu.js","href":"ipu.html#Refresh"}],"uses":["IScroll.js"],"members":[{"name":"defaultOption","tagname":"cfg","owner":"Refresh","id":"cfg-defaultOption","meta":{}},{"name":"bottomEnable","tagname":"property","owner":"Refresh","id":"property-bottomEnable","meta":{}},{"name":"bottomLoading","tagname":"property","owner":"Refresh","id":"property-bottomLoading","meta":{}},{"name":"topEnable","tagname":"property","owner":"Refresh","id":"property-topEnable","meta":{}},{"name":"topLoading","tagname":"property","owner":"Refresh","id":"property-topLoading","meta":{}},{"name":"constructor","tagname":"method","owner":"Refresh","id":"method-constructor","meta":{}},{"name":"enableBottom","tagname":"method","owner":"Refresh","id":"method-enableBottom","meta":{}},{"name":"enableTop","tagname":"method","owner":"Refresh","id":"method-enableTop","meta":{}},{"name":"endBottomLoading","tagname":"method","owner":"Refresh","id":"method-endBottomLoading","meta":{}},{"name":"endTopLoading","tagname":"method","owner":"Refresh","id":"method-endTopLoading","meta":{}},{"name":"refresh","tagname":"method","owner":"Refresh","id":"method-refresh","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Refresh","short_doc":"通过IScroll.js实现上拉下拉加载\n\n&lt;!-- 组件html结构，最外层div应有一个固定的高度，会在此元素上初始化iScroll --&gt;\n         &lt;div&gt;\n             &lt;...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"html":"<div><pre class=\"hierarchy\"><h4>Uses</h4><div class='dependency'>IScroll.js</div><h4>Files</h4><div class='dependency'><a href='source/ipu.html#Refresh' target='_blank'>ipu.js</a></div></pre><div class='doc-contents'><p>通过IScroll.js实现上拉下拉加载</p>\n\n<pre class='inline-example '><code>&lt;!-- 组件html结构，最外层div应有一个固定的高度，会在此元素上初始化iScroll --&gt;\n         &lt;div&gt;\n             &lt;div class=\"ipu-refresh-wrapper\"&gt;\n                &lt;!-- 此处组件初始化后，会添加上拉html --&gt;\n                 &lt;div class=\"refresh-content\"&gt;\n                    内容区...\n                 &lt;/div&gt;\n                &lt;!-- 此处组件初始化后，会添加下拉html --&gt;\n             &lt;/div&gt;\n         &lt;/div&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultOption' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-cfg-defaultOption' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-cfg-defaultOption' class='name expandable'>defaultOption</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>刷新组件默认配置 ...</div><div class='long'><p>刷新组件默认配置</p>\n<p>Defaults to: <code>{bottomLoadFun: null, topLoadFun: null, initEnableTop: true, initEnableBottom: true, bottomLoadHtml: &#39;&lt;div class=&quot;ipu-refresh-bottom&quot;&gt;&lt;span class=&quot;ipu-refresh-loading&quot;&gt;&lt;/span&gt;&lt;/div&gt;&#39;, topLoadHtml: &#39;&lt;div class=&quot;ipu-refresh-top&quot;&gt;&lt;span class=&quot;ipu-refresh-loading&quot;&gt;&lt;/span&gt;&lt;div class=&quot;ipu-refresh-arrow&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;, bottomAddLen: 0, iScrollOption: {}}</code></p><ul><li><span class='pre'>bottomLoadFun</span> : Function<div class='sub-desc'><p>上拉时，触发底加载的响应函数</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>topLoadFun</span> : Function<div class='sub-desc'><p>下拉时，触发顶部加载的响应函数</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>initEnableTop</span> : Boolean<div class='sub-desc'><p>初始化时，是否启用顶部加载功能</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>initEnableBottom</span> : Boolean<div class='sub-desc'><p>初始化时，是否启用底部加载功能</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>bottomLoadHtml</span> : String<div class='sub-desc'><p>底部加载时显示的html片段，不建议变动</p>\n<p>Defaults to: <code>...</code></p></div></li><li><span class='pre'>topLoadHtml</span> : String<div class='sub-desc'><p>顶部加载时显示的html片段，不建议变动</p>\n<p>Defaults to: <code>...</code></p></div></li><li><span class='pre'>bottomAddLen</span> : Number<div class='sub-desc'><p>距离底部多远时，触发底部加载</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>iScrollOption</span> : Object<div class='sub-desc'><p>上下拉使用的是IScroll组件，通过此参数配置IScroll初始化的参数</p>\n<p>Defaults to: <code>{}</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bottomEnable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-property-bottomEnable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-property-bottomEnable' class='name expandable'>bottomEnable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>底部是否可加载</p>\n</div><div class='long'><p>底部是否可加载</p>\n</div></div></div><div id='property-bottomLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-property-bottomLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-property-bottomLoading' class='name expandable'>bottomLoading</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>底部是否加载中 ...</div><div class='long'><p>底部是否加载中</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-topEnable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-property-topEnable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-property-topEnable' class='name expandable'>topEnable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>顶部是否可加载</p>\n</div><div class='long'><p>顶部是否可加载</p>\n</div></div></div><div id='property-topLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-property-topLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-property-topLoading' class='name expandable'>topLoading</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>顶部是否加载中 ...</div><div class='long'><p>顶部是否加载中</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Refresh-method-constructor' class='name expandable'>Refresh</a>( <span class='pre'>slt, option</span> ) : <a href=\"#!/api/Refresh\" rel=\"Refresh\" class=\"docClass\">Refresh</a><span class=\"signature\"></span></div><div class='description'><div class='short'>不能直接访问该类，调用ipu.refresh(slt, option)生成实例 ...</div><div class='long'><p>不能直接访问该类，调用<a href=\"#!/api/ipu-method-refresh\" rel=\"ipu-method-refresh\" class=\"docClass\">ipu.refresh</a>(slt, option)生成实例</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slt</span> : String|JqueryObj|Dom<div class='sub-desc'><p>jquery选择器字符串或jquery对象，用来查找要被组件初始化化的dom</p>\n</div></li><li><span class='pre'>option</span> : Object<div class='sub-desc'><p>组件参数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Refresh\" rel=\"Refresh\" class=\"docClass\">Refresh</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-enableBottom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-method-enableBottom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-method-enableBottom' class='name expandable'>enableBottom</a>( <span class='pre'>enable</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>是否启用底部加载功能 ...</div><div class='long'><p>是否启用底部加载功能</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>enable</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-enableTop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-method-enableTop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-method-enableTop' class='name expandable'>enableTop</a>( <span class='pre'>enable</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>是否启动顶部加载功能 ...</div><div class='long'><p>是否启动顶部加载功能</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>enable</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-endBottomLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-method-endBottomLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-method-endBottomLoading' class='name expandable'>endBottomLoading</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>结束底部加载，defaultOption.bottomLoadFun中处理完加载后，最后调用此方法 ...</div><div class='long'><p>结束底部加载，defaultOption.bottomLoadFun中处理完加载后，最后调用此方法</p>\n</div></div></div><div id='method-endTopLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-method-endTopLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-method-endTopLoading' class='name expandable'>endTopLoading</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>结束顶部加载，defaultOption.topLoadFun中处理完加载后，最后调用此方法 ...</div><div class='long'><p>结束顶部加载，defaultOption.topLoadFun中处理完加载后，最后调用此方法</p>\n</div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Refresh'>Refresh</span><br/><a href='source/ipu.html#Refresh-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Refresh-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在内容发生变化时，但是又不是因为顶部加载或底部加载导致的，此时调用此方法刷新IScroll ...</div><div class='long'><p>在内容发生变化时，但是又不是因为顶部加载或底部加载导致的，此时调用此方法刷新IScroll</p>\n</div></div></div></div></div></div></div>","meta":{}});