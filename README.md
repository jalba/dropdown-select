dropdown-select
===============

<p>
   The goal of Dropdown-Select is simple: merely to extend Bootstrap's dropdown plugin to include all (or at least most) of the functionalities of a <code>&lt;select&gt;</code> element.
</p>
<p>
   Why do that? you may be asking yourself. Well, the answer is that, as useful and reliable as they are in forms and the such, select elements are also pretty much impervious to CSS styling (beyond what libraries/frameworks like Bootstrap have already done) or JavaScript manipulation. So it seemed like a good idea to try to add some functionality to Bootstap's dropdown plugin, to make it a suitable and more friendly (for developers, designers and users alike) replacement for good 'ol <code>&lt;select&gt;</code>.
</p>
<h3>Implementation</h3>
<p>
   In order to use it, you just need to add the script to your head file or (even better)  just before closing the <code>&lt;body&gt;</code> tag.
</p>

<pre>
   &lt;script src="js/dropdown-select.js"&gt;&lt;/script&gt;
</pre>

<p>
   And then, you can instantiate Bootstrap dropdowns as you usually do, either via <a href="http://getbootstrap.com/javascript/#dropdowns">data attributes or via javascript</a>. Just remember to add the class dropdown-select to the element defined as a  dropdown:
</p>
      
<pre>
   &lt;div class=&quot;dropdown <strong>dropdown-select</strong>&quot;&gt;
</pre>

<h3>Features</h3>

<p>
   Find the option you are looking for by typing the first couple of letters. The plugin will match it agains the options and highlight the correct one.
</p>

<p>
   Pick one element of the dropdown to be the one selected by default. For this, you just need to add the <strong>&quot;default&quot;</strong> to the <code>&lt;a&gt;</code> with the desired value:
</p>
<pre>
   &lt;ul class=&quot;dropdown-menu&quot; id=&quot;testList&quot; role=&quot;menu&quot; aria-labelledby=&quot;dLabel&quot;&gt;
   &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; class=&quot;<strong>default</strong>&quot; href=&quot;javascript:void(0)&quot;&gt;Buenos Aires&lt;/a&gt;&lt;/li&gt;
</pre>
<p>
   Define groups of options.  For this you need to add the <strong>disabled</strong> and <strong>groupheader</strong> classes to the li that will serve as the title of the group:
</p>
<pre>
   &lt;div class=&quot;dropdown dropdown-select&quot;&gt;
     &lt;button type=&quot;button&quot; class=&quot;btn form-control dropdown-toggle&quot; data-toggle=&quot;dropdown&quot;&gt;
       &lt;span class=&quot;display&quot;&gt;Click me and type!&lt;/span&gt; &lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;
     &lt;/button&gt;
     &lt;ul class=&quot;dropdown-menu&quot; id=&quot;testList&quot; role=&quot;menu&quot; aria-labelledby=&quot;dLabel&quot;&gt;
       &lt;li role=&quot;presentation&quot; class=&quot;<strong>disabled</strong> <strong>groupheader</strong>&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot;&gt;Buenos Aires&lt;/a&gt;&lt;/li&gt;
       &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot;&gt;Europe&lt;/a&gt;&lt;/li&gt;
       &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot;&gt;Berlin&lt;/a&gt;&lt;/li&gt;
       &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot;&gt;Rome&lt;/a&gt;&lt;/li&gt;
       &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot;&gt;Lisbon&lt;/a&gt;&lt;/li&gt;
       &lt;li role=&quot;presentation&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot;&gt;Madrid&lt;/a&gt;&lt;/li&gt;
     &lt;/ul&gt;
   &lt;/div&gt;
        
</pre>

<p>
   And you can even use it in forms and validate them, by  adding the <strong>&quot;required&quot;</strong> class to the element:
</p>
<pre>
   &lt;div class=&quot;dropdown dropdown-select <strong>required</strong>&quot;&gt;
    ----Rest of the dropdown code here----
</pre>
<p>
   This plugin works on the same browsers as Bootstrap, mayor cross-browser issues with it.
</p>
<p>
   Please, use it, fork it or report any bug that you may find.
</p>