describe("tests",function(){var t,e;before(function(n){var a=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});a(["tests","cleanup"],function(a,r){t=a,e=r,n()})}),it("is an array",function(){expect(t).to.be.an("array")}),after(function(){e()})});