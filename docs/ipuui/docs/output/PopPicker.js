Ext.data.JsonP.PopPicker({"tagname":"class","name":"PopPicker","autodetected":{},"files":[{"filename":"ipu.js","href":"ipu.html#PopPicker"}],"members":[{"name":"defaultOption","tagname":"cfg","owner":"PopPicker","id":"cfg-defaultOption","meta":{}},{"name":"constructor","tagname":"method","owner":"PopPicker","id":"method-constructor","meta":{}},{"name":"getSelectItems","tagname":"method","owner":"PopPicker","id":"method-getSelectItems","meta":{}},{"name":"hide","tagname":"method","owner":"PopPicker","id":"method-hide","meta":{}},{"name":"setData","tagname":"method","owner":"PopPicker","id":"method-setData","meta":{}},{"name":"show","tagname":"method","owner":"PopPicker","id":"method-show","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-PopPicker","short_doc":"原生select的替代实现，适应数据较多或级联的情况\n\n// 配置项data的数据结构\n        var data = [{text:'显示名称'， value:''}...];\n\n        //　layer=1的数据结构...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ipu.html#PopPicker' target='_blank'>ipu.js</a></div></pre><div class='doc-contents'><p>原生select的替代实现，适应数据较多或级联的情况</p>\n\n<pre class='inline-example '><code>// 配置项data的数据结构\n        var data = [{text:'显示名称'， value:''}...];\n\n        //　layer=1的数据结构\n        var data-1 = [{text:'湖南'， value:'HN'}, {text:'湖北'， value:'HB'}];\n\n        // layer=2时的数据结构，有额外data属性存放下一层级数据\n        var data-1 = [\n            {\n                text:'湖南'，value:'HN', data:[{text:'长沙', value:'CS'}, {text:'湘谭'， value:'XT'}]\n            },{\n                text:'湖北'，value:'HB', data:[{text:'武汉', value:'WH'}, {text:'天门'， value:'TM'}]\n            }\n        ];\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultOption' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PopPicker'>PopPicker</span><br/><a href='source/ipu.html#PopPicker-cfg-defaultOption' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PopPicker-cfg-defaultOption' class='name expandable'>defaultOption</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>组件默认配置项 ...</div><div class='long'><p>组件默认配置项</p>\n<ul><li><span class='pre'>template</span> : String<div class='sub-desc'><p>html结构</p>\n</div></li><li><span class='pre'>pickerTemplate</span> : String<div class='sub-desc'><p>内容dom选择器</p>\n</div></li><li><span class='pre'>data</span> : Object[]<div class='sub-desc'><p>选择项数据</p>\n<ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>子项展示文本</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>子项值</p>\n</div></li><li><span class='pre'>data</span> : Object[]<div class='sub-desc'><p>有更多层级时，此属性存放下一层级的数据</p>\n</div></li></ul></div></li><li><span class='pre'>layer</span> : Number<div class='sub-desc'><p>数据层数</p>\n<p>Defaults to: <code>1</code></p></div></li><li><span class='pre'>btns</span> : String[]<div class='sub-desc'><p>按钮文本</p>\n<p>Defaults to: <code>[&#39;取消&#39;, &#39;确认&#39;]</code></p></div></li><li><span class='pre'>callBack</span> : Function<div class='sub-desc'><p>回调函数</p>\n<p>Defaults to: <code>null</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PopPicker'>PopPicker</span><br/><a href='source/ipu.html#PopPicker-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/PopPicker-method-constructor' class='name expandable'>PopPicker</a>( <span class='pre'>slt, option</span> ) : <a href=\"#!/api/PopPicker\" rel=\"PopPicker\" class=\"docClass\">PopPicker</a><span class=\"signature\"></span></div><div class='description'><div class='short'>不能直接访问该类，调用ipu.popPicker(slt, option)生成实例 ...</div><div class='long'><p>不能直接访问该类，调用<a href=\"#!/api/ipu-method-navBar\" rel=\"ipu-method-navBar\" class=\"docClass\">ipu.popPicker(slt, option)</a>生成实例</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slt</span> : String|jqueryObj<div class='sub-desc'><p>jquery选择器字符串或jquery对象，用来查找要被组件初始化化的dom</p>\n</div></li><li><span class='pre'>option</span> : Object<div class='sub-desc'><p>组件配置参数，默认配置见 <a href=\"#!/api/PopPicker-cfg-defaultOption\" rel=\"PopPicker-cfg-defaultOption\" class=\"docClass\">defaultOption</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/PopPicker\" rel=\"PopPicker\" class=\"docClass\">PopPicker</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSelectItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PopPicker'>PopPicker</span><br/><a href='source/ipu.html#PopPicker-method-getSelectItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PopPicker-method-getSelectItems' class='name expandable'>getSelectItems</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>获取用户选择的项，如果配置项layer为1，则直接返回选择项，\n否则返回一个数组返回每层选中的项 ...</div><div class='long'><p>获取用户选择的项，如果配置项layer为1，则直接返回选择项，\n否则返回一个数组返回每层选中的项</p>\n</div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PopPicker'>PopPicker</span><br/><a href='source/ipu.html#PopPicker-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PopPicker-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>隐藏选择器 ...</div><div class='long'><p>隐藏选择器</p>\n</div></div></div><div id='method-setData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PopPicker'>PopPicker</span><br/><a href='source/ipu.html#PopPicker-method-setData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PopPicker-method-setData' class='name expandable'>setData</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>设置选择项数据 ...</div><div class='long'><p>设置选择项数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : [Object]<div class='sub-desc'><p>选择项数组</p>\n<ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>每个选择项的文本</p>\n</div></li><li><span class='pre'>data</span> : [Object]<div class='sub-desc'><p>如果有多层选择的话，应该有一个data属性</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PopPicker'>PopPicker</span><br/><a href='source/ipu.html#PopPicker-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/PopPicker-method-show' class='name expandable'>show</a>( <span class='pre'>callBack</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>显示选择器 ...</div><div class='long'><p>显示选择器</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callBack</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});