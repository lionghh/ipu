Ext.data.JsonP.ProgressBar({"tagname":"class","name":"ProgressBar","autodetected":{},"files":[{"filename":"ipu.js","href":"ipu.html#ProgressBar"}],"members":[{"name":"defaultOption","tagname":"cfg","owner":"ProgressBar","id":"cfg-defaultOption","meta":{}},{"name":"constructor","tagname":"method","owner":"ProgressBar","id":"method-constructor","meta":{}},{"name":"getProgress","tagname":"method","owner":"ProgressBar","id":"method-getProgress","meta":{}},{"name":"setLevel","tagname":"method","owner":"ProgressBar","id":"method-setLevel","meta":{}},{"name":"setProgress","tagname":"method","owner":"ProgressBar","id":"method-setProgress","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ProgressBar","short_doc":"进度条\n\n&lt;!-- 组件html --&gt;\n         &lt;div class=\"ipu-ipu-progress \"&gt;\n            &lt;span class=\"ipu-progressbar...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ipu.html#ProgressBar' target='_blank'>ipu.js</a></div></pre><div class='doc-contents'><p>进度条</p>\n\n<pre class='inline-example '><code>&lt;!-- 组件html --&gt;\n         &lt;div class=\"ipu-ipu-progress \"&gt;\n            &lt;span class=\"ipu-progressbar\"&gt;&lt;/span&gt;\n         &lt;/div&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultOption' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ProgressBar'>ProgressBar</span><br/><a href='source/ipu.html#ProgressBar-cfg-defaultOption' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ProgressBar-cfg-defaultOption' class='name expandable'>defaultOption</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>刷新组件默认配置 ...</div><div class='long'><p>刷新组件默认配置</p>\n<ul><li><span class='pre'>level</span> : default|warning|highlight|success<div class='sub-desc'><p>级别，显示颜色</p>\n<p>Defaults to: <code>&#39;default&#39;</code></p></div></li><li><span class='pre'>progress</span> : Number<div class='sub-desc'><p>当前进度百分比</p>\n<p>Defaults to: <code>null</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ProgressBar'>ProgressBar</span><br/><a href='source/ipu.html#ProgressBar-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ProgressBar-method-constructor' class='name expandable'>ProgressBar</a>( <span class='pre'>slt, option</span> ) : <a href=\"#!/api/ProgressBar\" rel=\"ProgressBar\" class=\"docClass\">ProgressBar</a><span class=\"signature\"></span></div><div class='description'><div class='short'>不能直接访问该类，调用 ipu.progressBar生成实例 ...</div><div class='long'><p>不能直接访问该类，调用 <a href=\"#!/api/ipu-method-progressBar\" rel=\"ipu-method-progressBar\" class=\"docClass\">ipu.progressBar</a>生成实例</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slt</span> : String|jqueryObj<div class='sub-desc'><p>jquery选择器字符串或jquery对象，用来查找要被组件初始化化的dom</p>\n</div></li><li><span class='pre'>option</span> : Object<div class='sub-desc'><p>组件配置参数，默认配置见 <a href=\"#!/api/ProgressBar-cfg-defaultOption\" rel=\"ProgressBar-cfg-defaultOption\" class=\"docClass\">defaultOption</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ProgressBar\" rel=\"ProgressBar\" class=\"docClass\">ProgressBar</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProgress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ProgressBar'>ProgressBar</span><br/><a href='source/ipu.html#ProgressBar-method-getProgress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ProgressBar-method-getProgress' class='name expandable'>getProgress</a>( <span class='pre'></span> ) : Number|*<span class=\"signature\"></span></div><div class='description'><div class='short'>获取百分进度 ...</div><div class='long'><p>获取百分进度</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number|*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLevel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ProgressBar'>ProgressBar</span><br/><a href='source/ipu.html#ProgressBar-method-setLevel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ProgressBar-method-setLevel' class='name expandable'>setLevel</a>( <span class='pre'>level</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置进度条级别 ...</div><div class='long'><p>设置进度条级别</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>level</span> : default | success | highlight | warning<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProgress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ProgressBar'>ProgressBar</span><br/><a href='source/ipu.html#ProgressBar-method-setProgress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ProgressBar-method-setProgress' class='name expandable'>setProgress</a>( <span class='pre'>pro</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置百分进度 ...</div><div class='long'><p>设置百分进度</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pro</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});