describe("setClasses",function(){var e,s,n,t,a=function(s,a,c){return function(){var o={_config:a};n=document.createElement("div"),c&&(n.className=c),define("Modernizr",[],function(){return o}),define("docElement",[],function(){return n}),t(["setClasses"],function(n){e=n,s()})}()},c=function(){e=void 0,t.undef("setClasses"),t.undef("docElement"),t.undef("Modernizr")};before(function(e){define("package",[],function(){return{}}),(t=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["cleanup"],function(n){s=n,e()})}),describe("cssClasses disabled",function(){before(function(e){a(e,{classPrefix:"fake",enableClasses:!1})}),it("should not add anything",function(e){t(["setClasses"],function(s){s(["detect"]),expect(n.className).to.not.contain("fakedetect"),e()})}),after(c)}),describe("cssClasses enabled, with prefix",function(){before(function(e){a(e,{classPrefix:"fake",enableClasses:!0})}),it("adds a class with a prefix",function(e){t(["setClasses"],function(s){s(["detect"]),expect(n.className).to.contain("fakedetect"),e()})}),after(c)}),describe("cssClasses enabled, without prefix",function(){before(function(e){a(e,{enableClasses:!0})}),after(c),it("adds a class without a prefix",function(e){t(["setClasses"],function(s){s(["detect"]),expect(n.className).to.contain("detect"),e()})})}),describe("enableJSClass enabled, with prefix",function(){before(function(e){a(e,{classPrefix:"fake",enableClasses:!0,enableJSClass:!0}," fakeno-js +fakeno-js fakeno-js- i-has-fakeno-js")}),it("changes the `js` class, and adds a class with a prefix",function(e){t(["setClasses"],function(s){var t=n.className.split(" ");expect(t).to.contain("fakeno-js"),s(["detect"]),t=n.className.split(" "),expect(n.className).to.contain("fakejs"),expect(n.className).to.contain("+fakeno-js"),expect(n.className).to.contain("fakeno-js-"),expect(n.className).to.contain("i-has-fakeno-js"),expect(n.className).to.contain("fakedetect"),e()})}),after(c)}),describe("enableJSClass enabled, without prefix",function(){before(function(e){a(e,{enableJSClass:!0,enableClasses:!0}," no-js +no-js no-js- i-has-no-js")}),after(c),it("changes the `js` class, and adds a class without a prefix",function(e){t(["setClasses"],function(s){var t=n.className.split(" ");expect(t).to.contain("no-js"),s(["detect"]),t=n.className.split(" "),expect(n.className).to.contain("js"),expect(n.className).to.contain("+no-js"),expect(n.className).to.contain("no-js-"),expect(n.className).to.contain("i-has-no-js"),expect(n.className).to.contain("detect"),e()})})}),after(function(){s()})});