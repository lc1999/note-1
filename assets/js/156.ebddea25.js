(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{217:function(e,a,r){"use strict";r.r(a);var t=r(0),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"环境构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境构建","aria-hidden":"true"}},[e._v("#")]),e._v(" 环境构建")]),e._v(" "),r("h2",{attrs:{id:"首先搭建好环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首先搭建好环境","aria-hidden":"true"}},[e._v("#")]),e._v(" 首先搭建好环境")]),e._v(" "),r("p",[e._v("可参考如下教程")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://gorails.com/setup/osx/10.11-el-capitan",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gorails"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://readful.com/post/12322300571/%E5%A6%82%E4%BD%95%E4%BB%8E-0-%E5%BC%80%E5%A7%8B%E5%AD%A6-ruby-on-rails-%E6%BC%AB%E6%AD%A5%E7%89%88",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何从 0 开始学 Ruby on Rails （漫步版）"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"检测环境是否搭建成功"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#检测环境是否搭建成功","aria-hidden":"true"}},[e._v("#")]),e._v(" 检测环境是否搭建成功")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("ruby -v")]),e._v(" 检查版本")]),e._v(" "),r("li",[r("code",[e._v("rails -v")])])]),e._v(" "),r("h2",{attrs:{id:"新建一个-app-项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新建一个-app-项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 新建一个 app 项目")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("rails new app -d mysql")])])]),e._v(" "),r("h2",{attrs:{id:"启动-rails-服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动-rails-服务器","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动 rails 服务器")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 普通模式启动\n  rails s\n# 启动手机监听\n  rails s -b 0.0.0.0\n")])])]),r("hr"),e._v(" "),r("h2",{attrs:{id:"安装-rails-可能遇到的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-rails-可能遇到的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Rails 可能遇到的问题")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("Could not find a valid gem 'rails' (= 4.3.6) in any repository")]),e._v("\n可以参考："),r("a",{attrs:{href:"http://stackoverflow.com/questions/9962051/could-not-find-a-valid-gem-in-any-repository-rubygame-and-others",target:"_blank",rel:"noopener noreferrer"}},[e._v("“Could not find a valid gem in any repository” (rubygame and others)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("如果遇到找不到 gem 资源情况，可能是被墙了，可以通过修改 "),r("code",[e._v("Gemfile")]),e._v(" 文件头部 sources 来解决")])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 方法一：将 https 修改为 http\n  $ gem sources --add http://rubygems.org/\n\n# 方法二：使用淘宝镜像源(https://ruby.taobao.org/)\n  $ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/\n  $ gem sources -l\n  *** CURRENT SOURCES ***\n  https://ruby.taobao.org\n  # 请确保只有 ruby.taobao.org\n  $ gem install rails\n\n# 方法三：使用 Ruby-China 镜像源(https://gems.ruby-china.org/)\n  $ gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/\n  $ gem sources -l\n  https://gems.ruby-china.org\n  # 确保只有 gems.ruby-china.org\n")])])]),r("h2",{attrs:{id:"rake-版本问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rake-版本问题","aria-hidden":"true"}},[e._v("#")]),e._v(" Rake 版本问题")]),e._v(" "),r("p",[e._v("如果有用 Bundler 的話，你可以在 Gemfile 中指定 gem 'rake', '0.8.7'，然後每次打 bundle exec rake 就是用 0.8.7 的版本了。BTW，如果指定了 0.8.7 還打 rake 的話，你會看到以下錯誤：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("rake aborted!\nYou have already activated rake 0.9.0,\nbut your Gemfile requires rake 0.8.7.\nConsider using bundle exec.\n(See full trace by running task with --trace)\n")])])]),r("p",[e._v("解决方法：")]),e._v(" "),r("ul",[r("li",[e._v("方法一：命令前添加 "),r("code",[e._v("bundle exec")]),e._v("，例如："),r("code",[e._v("bundle exec rake db:migrate")])]),e._v(" "),r("li",[e._v("方法二：卸载新版本的而插件，参考 「gem 插件版本不对」")])]),e._v(" "),r("h2",{attrs:{id:"gem-插件版本不对"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gem-插件版本不对","aria-hidden":"true"}},[e._v("#")]),e._v(" gem 插件版本不对")]),e._v(" "),r("blockquote",[r("p",[e._v("特别是提示  当前 rake 版本高于需要使用的 rake 版本")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 查看所有插件\ngem list\n\n# 卸载插件\ngem uninstall <插件名>\n\n# 选择后卸载\n")])])]),r("h2",{attrs:{id:"ignoring-—-because-its-extensions-are-not-built-try-gem-pristine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ignoring-—-because-its-extensions-are-not-built-try-gem-pristine","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Ignoring — because its extensions are not built. Try: gem pristine")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://joshgreendesign.com/uncategorized/ignoring-extensions-not-built-try-gem-pristine/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("然后执行："),r("code",[e._v("rvm install ruby-2.2.3")])]),e._v(" "),r("h2",{attrs:{id:"mysql-问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-问题","aria-hidden":"true"}},[e._v("#")]),e._v(" mysql 问题")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  #`Can't connect to local MySQL server through socket  /tmp/mysql.sock`\n  $ mysql.server start\n\n  #MySQL2 Error - Unknown database\n  rake db:create\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);