/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
'undefined' == typeof WeakMap &&
  !(function() {
    var e = Object.defineProperty,
      t = Date.now() % 1e9,
      n = function() {
        this.name = '__st' + ((1e9 * Math.random()) >>> 0) + (t++ + '__')
      }
    ;(n.prototype = {
      set: function(t, n) {
        var r = t[this.name]
        return (
          r && r[0] === t
            ? (r[1] = n)
            : e(t, this.name, { value: [t, n], writable: !0 }),
          this
        )
      },
      get: function(e) {
        var t
        return (t = e[this.name]) && t[0] === e ? t[1] : void 0
      },
      delete: function(e) {
        var t = e[this.name]
        return !(!t || t[0] !== e) && ((t[0] = t[1] = void 0), !0)
      },
      has: function(e) {
        var t = e[this.name]
        return !!t && t[0] === e
      }
    }),
      (window.WeakMap = n)
  })(),
  (window.ShadowDOMPolyfill = {}),
  (function(e) {
    'use strict'
    function t() {
      if ('undefined' != typeof chrome && chrome.app && chrome.app.runtime)
        return !1
      if (navigator.getDeviceStorage) return !1
      try {
        var e = new Function('return true;')
        return e()
      } catch (t) {
        return !1
      }
    }
    function n(e) {
      if (!e) throw new Error('Assertion failed')
    }
    function r(e, t) {
      for (var n = k(t), r = 0; r < n.length; r++) {
        var o = n[r]
        A(e, o, F(t, o))
      }
      return e
    }
    function o(e, t) {
      for (var n = k(t), r = 0; r < n.length; r++) {
        var o = n[r]
        switch (o) {
          case 'arguments':
          case 'caller':
          case 'length':
          case 'name':
          case 'prototype':
          case 'toString':
            continue
        }
        A(e, o, F(t, o))
      }
      return e
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) if (t[n] in e) return t[n]
    }
    function a(e, t, n) {
      ;(B.value = n), A(e, t, B)
    }
    function s(e, t) {
      var n = e.__proto__ || Object.getPrototypeOf(e)
      if (U)
        try {
          k(n)
        } catch (r) {
          n = n.__proto__
        }
      var o = R.get(n)
      if (o) return o
      var i = s(n),
        a = E(i)
      return g(n, a, t), a
    }
    function c(e, t) {
      m(e, t, !0)
    }
    function u(e, t) {
      m(t, e, !1)
    }
    function l(e) {
      return /^on[a-z]+$/.test(e)
    }
    function p(e) {
      return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(e)
    }
    function d(e) {
      return I && p(e)
        ? new Function('return this.__impl4cf1e782hg__.' + e)
        : function() {
            return this.__impl4cf1e782hg__[e]
          }
    }
    function f(e) {
      return I && p(e)
        ? new Function('v', 'this.__impl4cf1e782hg__.' + e + ' = v')
        : function(t) {
            this.__impl4cf1e782hg__[e] = t
          }
    }
    function h(e) {
      return I && p(e)
        ? new Function(
            'return this.__impl4cf1e782hg__.' +
              e +
              '.apply(this.__impl4cf1e782hg__, arguments)'
          )
        : function() {
            return this.__impl4cf1e782hg__[e].apply(
              this.__impl4cf1e782hg__,
              arguments
            )
          }
    }
    function w(e, t) {
      try {
        return e === window && 'showModalDialog' === t
          ? q
          : Object.getOwnPropertyDescriptor(e, t)
      } catch (n) {
        return q
      }
    }
    function m(t, n, r, o) {
      for (var i = k(t), a = 0; a < i.length; a++) {
        var s = i[a]
        if (
          'polymerBlackList_' !== s &&
          !(s in n || (t.polymerBlackList_ && t.polymerBlackList_[s]))
        ) {
          U && t.__lookupGetter__(s)
          var c,
            u,
            p = w(t, s)
          if ('function' != typeof p.value) {
            var m = l(s)
            ;(c = m ? e.getEventHandlerGetter(s) : d(s)),
              (p.writable || p.set || V) &&
                (u = m ? e.getEventHandlerSetter(s) : f(s))
            var v = V || p.configurable
            A(n, s, {
              get: c,
              set: u,
              configurable: v,
              enumerable: p.enumerable
            })
          } else r && (n[s] = h(s))
        }
      }
    }
    function v(e, t, n) {
      if (null != e) {
        var r = e.prototype
        g(r, t, n), o(t, e)
      }
    }
    function g(e, t, r) {
      var o = t.prototype
      n(void 0 === R.get(e)),
        R.set(e, t),
        P.set(o, e),
        c(e, o),
        r && u(o, r),
        a(o, 'constructor', t),
        (t.prototype = o)
    }
    function b(e, t) {
      return R.get(t.prototype) === e
    }
    function y(e) {
      var t = Object.getPrototypeOf(e),
        n = s(t),
        r = E(n)
      return g(t, r, e), r
    }
    function E(e) {
      function t(t) {
        e.call(this, t)
      }
      var n = Object.create(e.prototype)
      return (n.constructor = t), (t.prototype = n), t
    }
    function S(e) {
      return e && e.__impl4cf1e782hg__
    }
    function M(e) {
      return !S(e)
    }
    function T(e) {
      if (null === e) return null
      n(M(e))
      var t = e.__wrapper8e3dd93a60__
      return null != t ? t : (e.__wrapper8e3dd93a60__ = new (s(e, e))(e))
    }
    function O(e) {
      return null === e ? null : (n(S(e)), e.__impl4cf1e782hg__)
    }
    function N(e) {
      return e.__impl4cf1e782hg__
    }
    function j(e, t) {
      ;(t.__impl4cf1e782hg__ = e), (e.__wrapper8e3dd93a60__ = t)
    }
    function L(e) {
      return e && S(e) ? O(e) : e
    }
    function _(e) {
      return e && !S(e) ? T(e) : e
    }
    function D(e, t) {
      null !== t &&
        (n(M(e)), n(void 0 === t || S(t)), (e.__wrapper8e3dd93a60__ = t))
    }
    function C(e, t, n) {
      ;(G.get = n), A(e.prototype, t, G)
    }
    function H(e, t) {
      C(e, t, function() {
        return T(this.__impl4cf1e782hg__[t])
      })
    }
    function x(e, t) {
      e.forEach(function(e) {
        t.forEach(function(t) {
          e.prototype[t] = function() {
            var e = _(this)
            return e[t].apply(e, arguments)
          }
        })
      })
    }
    var R = new WeakMap(),
      P = new WeakMap(),
      W = Object.create(null),
      I = t(),
      A = Object.defineProperty,
      k = Object.getOwnPropertyNames,
      F = Object.getOwnPropertyDescriptor,
      B = { value: void 0, configurable: !0, enumerable: !1, writable: !0 }
    k(window)
    var U = /Firefox/.test(navigator.userAgent),
      q = {
        get: function() {},
        set: function(e) {},
        configurable: !0,
        enumerable: !0
      },
      V = (function() {
        var e = Object.getOwnPropertyDescriptor(Node.prototype, 'nodeType')
        return e && !e.get && !e.set
      })(),
      G = { get: void 0, configurable: !0, enumerable: !0 }
    ;(e.addForwardingProperties = c),
      (e.assert = n),
      (e.constructorTable = R),
      (e.defineGetter = C),
      (e.defineWrapGetter = H),
      (e.forwardMethodsToWrapper = x),
      (e.isIdentifierName = p),
      (e.isWrapper = S),
      (e.isWrapperFor = b),
      (e.mixin = r),
      (e.nativePrototypeTable = P),
      (e.oneOf = i),
      (e.registerObject = y),
      (e.registerWrapper = v),
      (e.rewrap = D),
      (e.setWrapper = j),
      (e.unsafeUnwrap = N),
      (e.unwrap = O),
      (e.unwrapIfNeeded = L),
      (e.wrap = T),
      (e.wrapIfNeeded = _),
      (e.wrappers = W)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e, t, n) {
      return { index: e, removed: t, addedCount: n }
    }
    function n() {}
    var r = 0,
      o = 1,
      i = 2,
      a = 3
    ;(n.prototype = {
      calcEditDistances: function(e, t, n, r, o, i) {
        for (
          var a = i - o + 1, s = n - t + 1, c = new Array(a), u = 0;
          u < a;
          u++
        )
          (c[u] = new Array(s)), (c[u][0] = u)
        for (var l = 0; l < s; l++) c[0][l] = l
        for (var u = 1; u < a; u++)
          for (var l = 1; l < s; l++)
            if (this.equals(e[t + l - 1], r[o + u - 1]))
              c[u][l] = c[u - 1][l - 1]
            else {
              var p = c[u - 1][l] + 1,
                d = c[u][l - 1] + 1
              c[u][l] = p < d ? p : d
            }
        return c
      },
      spliceOperationsFromEditDistances: function(e) {
        for (
          var t = e.length - 1, n = e[0].length - 1, s = e[t][n], c = [];
          t > 0 || n > 0;

        )
          if (0 != t)
            if (0 != n) {
              var u,
                l = e[t - 1][n - 1],
                p = e[t - 1][n],
                d = e[t][n - 1]
              ;(u = p < d ? (p < l ? p : l) : d < l ? d : l),
                u == l
                  ? (l == s ? c.push(r) : (c.push(o), (s = l)), t--, n--)
                  : u == p
                  ? (c.push(a), t--, (s = p))
                  : (c.push(i), n--, (s = d))
            } else c.push(a), t--
          else c.push(i), n--
        return c.reverse(), c
      },
      calcSplices: function(e, n, s, c, u, l) {
        var p = 0,
          d = 0,
          f = Math.min(s - n, l - u)
        if (
          (0 == n && 0 == u && (p = this.sharedPrefix(e, c, f)),
          s == e.length &&
            l == c.length &&
            (d = this.sharedSuffix(e, c, f - p)),
          (n += p),
          (u += p),
          (s -= d),
          (l -= d),
          s - n == 0 && l - u == 0)
        )
          return []
        if (n == s) {
          for (var h = t(n, [], 0); u < l; ) h.removed.push(c[u++])
          return [h]
        }
        if (u == l) return [t(n, [], s - n)]
        for (
          var w = this.spliceOperationsFromEditDistances(
              this.calcEditDistances(e, n, s, c, u, l)
            ),
            h = void 0,
            m = [],
            v = n,
            g = u,
            b = 0;
          b < w.length;
          b++
        )
          switch (w[b]) {
            case r:
              h && (m.push(h), (h = void 0)), v++, g++
              break
            case o:
              h || (h = t(v, [], 0)),
                h.addedCount++,
                v++,
                h.removed.push(c[g]),
                g++
              break
            case i:
              h || (h = t(v, [], 0)), h.addedCount++, v++
              break
            case a:
              h || (h = t(v, [], 0)), h.removed.push(c[g]), g++
          }
        return h && m.push(h), m
      },
      sharedPrefix: function(e, t, n) {
        for (var r = 0; r < n; r++) if (!this.equals(e[r], t[r])) return r
        return n
      },
      sharedSuffix: function(e, t, n) {
        for (
          var r = e.length, o = t.length, i = 0;
          i < n && this.equals(e[--r], t[--o]);

        )
          i++
        return i
      },
      calculateSplices: function(e, t) {
        return this.calcSplices(e, 0, e.length, t, 0, t.length)
      },
      equals: function(e, t) {
        return e === t
      }
    }),
      (e.ArraySplice = n)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t() {
      a = !1
      var e = i.slice(0)
      i = []
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
    function n(e) {
      i.push(e), a || ((a = !0), r(t, 0))
    }
    var r,
      o = window.MutationObserver,
      i = [],
      a = !1
    if (o) {
      var s = 1,
        c = new o(t),
        u = document.createTextNode(s)
      c.observe(u, { characterData: !0 }),
        (r = function() {
          ;(s = (s + 1) % 2), (u.data = s)
        })
    } else r = window.setTimeout
    e.setEndOfMicrotask = n
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      e.scheduled_ || ((e.scheduled_ = !0), h.push(e), w || (l(n), (w = !0)))
    }
    function n() {
      for (w = !1; h.length; ) {
        var e = h
        ;(h = []),
          e.sort(function(e, t) {
            return e.uid_ - t.uid_
          })
        for (var t = 0; t < e.length; t++) {
          var n = e[t]
          n.scheduled_ = !1
          var r = n.takeRecords()
          i(n), r.length && n.callback_(r, n)
        }
      }
    }
    function r(e, t) {
      ;(this.type = e),
        (this.target = t),
        (this.addedNodes = new d.NodeList()),
        (this.removedNodes = new d.NodeList()),
        (this.previousSibling = null),
        (this.nextSibling = null),
        (this.attributeName = null),
        (this.attributeNamespace = null),
        (this.oldValue = null)
    }
    function o(e, t) {
      for (; e; e = e.parentNode) {
        var n = f.get(e)
        if (n)
          for (var r = 0; r < n.length; r++) {
            var o = n[r]
            o.options.subtree && o.addTransientObserver(t)
          }
      }
    }
    function i(e) {
      for (var t = 0; t < e.nodes_.length; t++) {
        var n = e.nodes_[t],
          r = f.get(n)
        if (!r) return
        for (var o = 0; o < r.length; o++) {
          var i = r[o]
          i.observer === e && i.removeTransientObservers()
        }
      }
    }
    function a(e, n, o) {
      for (
        var i = Object.create(null), a = Object.create(null), s = e;
        s;
        s = s.parentNode
      ) {
        var c = f.get(s)
        if (c)
          for (var u = 0; u < c.length; u++) {
            var l = c[u],
              p = l.options
            if (
              (s === e || p.subtree) &&
              ('attributes' !== n || p.attributes) &&
              ('attributes' !== n ||
                !p.attributeFilter ||
                (null === o.namespace &&
                  p.attributeFilter.indexOf(o.name) !== -1)) &&
              ('characterData' !== n || p.characterData) &&
              ('childList' !== n || p.childList)
            ) {
              var d = l.observer
              ;(i[d.uid_] = d),
                (('attributes' === n && p.attributeOldValue) ||
                  ('characterData' === n && p.characterDataOldValue)) &&
                  (a[d.uid_] = o.oldValue)
            }
          }
      }
      for (var h in i) {
        var d = i[h],
          w = new r(n, e)
        'name' in o &&
          'namespace' in o &&
          ((w.attributeName = o.name), (w.attributeNamespace = o.namespace)),
          o.addedNodes && (w.addedNodes = o.addedNodes),
          o.removedNodes && (w.removedNodes = o.removedNodes),
          o.previousSibling && (w.previousSibling = o.previousSibling),
          o.nextSibling && (w.nextSibling = o.nextSibling),
          void 0 !== a[h] && (w.oldValue = a[h]),
          t(d),
          d.records_.push(w)
      }
    }
    function s(e) {
      if (
        ((this.childList = !!e.childList),
        (this.subtree = !!e.subtree),
        'attributes' in e ||
        !('attributeOldValue' in e || 'attributeFilter' in e)
          ? (this.attributes = !!e.attributes)
          : (this.attributes = !0),
        'characterDataOldValue' in e && !('characterData' in e)
          ? (this.characterData = !0)
          : (this.characterData = !!e.characterData),
        (!this.attributes && (e.attributeOldValue || 'attributeFilter' in e)) ||
          (!this.characterData && e.characterDataOldValue))
      )
        throw new TypeError()
      if (
        ((this.characterData = !!e.characterData),
        (this.attributeOldValue = !!e.attributeOldValue),
        (this.characterDataOldValue = !!e.characterDataOldValue),
        'attributeFilter' in e)
      ) {
        if (null == e.attributeFilter || 'object' != typeof e.attributeFilter)
          throw new TypeError()
        this.attributeFilter = m.call(e.attributeFilter)
      } else this.attributeFilter = null
    }
    function c(e) {
      ;(this.callback_ = e),
        (this.nodes_ = []),
        (this.records_ = []),
        (this.uid_ = ++v),
        (this.scheduled_ = !1)
    }
    function u(e, t, n) {
      ;(this.observer = e),
        (this.target = t),
        (this.options = n),
        (this.transientObservedNodes = [])
    }
    var l = e.setEndOfMicrotask,
      p = e.wrapIfNeeded,
      d = e.wrappers,
      f = new WeakMap(),
      h = [],
      w = !1,
      m = Array.prototype.slice,
      v = 0
    ;(c.prototype = {
      constructor: c,
      observe: function(e, t) {
        e = p(e)
        var n,
          r = new s(t),
          o = f.get(e)
        o || f.set(e, (o = []))
        for (var i = 0; i < o.length; i++)
          o[i].observer === this &&
            ((n = o[i]), n.removeTransientObservers(), (n.options = r))
        n || ((n = new u(this, e, r)), o.push(n), this.nodes_.push(e))
      },
      disconnect: function() {
        this.nodes_.forEach(function(e) {
          for (var t = f.get(e), n = 0; n < t.length; n++) {
            var r = t[n]
            if (r.observer === this) {
              t.splice(n, 1)
              break
            }
          }
        }, this),
          (this.records_ = [])
      },
      takeRecords: function() {
        var e = this.records_
        return (this.records_ = []), e
      }
    }),
      (u.prototype = {
        addTransientObserver: function(e) {
          if (e !== this.target) {
            t(this.observer), this.transientObservedNodes.push(e)
            var n = f.get(e)
            n || f.set(e, (n = [])), n.push(this)
          }
        },
        removeTransientObservers: function() {
          var e = this.transientObservedNodes
          this.transientObservedNodes = []
          for (var t = 0; t < e.length; t++)
            for (var n = e[t], r = f.get(n), o = 0; o < r.length; o++)
              if (r[o] === this) {
                r.splice(o, 1)
                break
              }
        }
      }),
      (e.enqueueMutation = a),
      (e.registerTransientObservers = o),
      (e.wrappers.MutationObserver = c),
      (e.wrappers.MutationRecord = r)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e, t) {
      ;(this.root = e), (this.parent = t)
    }
    function n(e, t) {
      if (e.treeScope_ !== t) {
        e.treeScope_ = t
        for (var r = e.shadowRoot; r; r = r.olderShadowRoot)
          r.treeScope_.parent = t
        for (var o = e.firstChild; o; o = o.nextSibling) n(o, t)
      }
    }
    function r(n) {
      if ((n instanceof e.wrappers.Window, n.treeScope_)) return n.treeScope_
      var o,
        i = n.parentNode
      return (o = i ? r(i) : new t(n, null)), (n.treeScope_ = o)
    }
    ;(t.prototype = {
      get renderer() {
        return this.root instanceof e.wrappers.ShadowRoot
          ? e.getRendererForHost(this.root.host)
          : null
      },
      contains: function(e) {
        for (; e; e = e.parent) if (e === this) return !0
        return !1
      }
    }),
      (e.TreeScope = t),
      (e.getTreeScope = r),
      (e.setTreeScope = n)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      return e instanceof G.ShadowRoot
    }
    function n(e) {
      return A(e).root
    }
    function r(e, r) {
      var s = [],
        c = e
      for (s.push(c); c; ) {
        var u = a(c)
        if (u && u.length > 0) {
          for (var l = 0; l < u.length; l++) {
            var d = u[l]
            if (i(d)) {
              var f = n(d),
                h = f.olderShadowRoot
              h && s.push(h)
            }
            s.push(d)
          }
          c = u[u.length - 1]
        } else if (t(c)) {
          if (p(e, c) && o(r)) break
          ;(c = c.host), s.push(c)
        } else (c = c.parentNode), c && s.push(c)
      }
      return s
    }
    function o(e) {
      if (!e) return !1
      switch (e.type) {
        case 'abort':
        case 'error':
        case 'select':
        case 'change':
        case 'load':
        case 'reset':
        case 'resize':
        case 'scroll':
        case 'selectstart':
          return !0
      }
      return !1
    }
    function i(e) {
      return e instanceof HTMLShadowElement
    }
    function a(t) {
      return e.getDestinationInsertionPoints(t)
    }
    function s(e, t) {
      if (0 === e.length) return t
      t instanceof G.Window && (t = t.document)
      for (
        var n = A(t), r = e[0], o = A(r), i = u(n, o), a = 0;
        a < e.length;
        a++
      ) {
        var s = e[a]
        if (A(s) === i) return s
      }
      return e[e.length - 1]
    }
    function c(e) {
      for (var t = []; e; e = e.parent) t.push(e)
      return t
    }
    function u(e, t) {
      for (var n = c(e), r = c(t), o = null; n.length > 0 && r.length > 0; ) {
        var i = n.pop(),
          a = r.pop()
        if (i !== a) break
        o = i
      }
      return o
    }
    function l(e, t, n) {
      t instanceof G.Window && (t = t.document)
      var o,
        i = A(t),
        a = A(n),
        s = r(n, e),
        o = u(i, a)
      o || (o = a.root)
      for (var c = o; c; c = c.parent)
        for (var l = 0; l < s.length; l++) {
          var p = s[l]
          if (A(p) === c) return p
        }
      return null
    }
    function p(e, t) {
      return A(e) === A(t)
    }
    function d(e) {
      if (!X.get(e) && (X.set(e, !0), h(V(e), V(e.target)), W)) {
        var t = W
        throw ((W = null), t)
      }
    }
    function f(e) {
      switch (e.type) {
        case 'load':
        case 'beforeunload':
        case 'unload':
          return !0
      }
      return !1
    }
    function h(t, n) {
      if (K.get(t)) throw new Error('InvalidStateError')
      K.set(t, !0), e.renderAllPending()
      var o, i, a
      if (f(t) && !t.bubbles) {
        var s = n
        s instanceof G.Document && (a = s.defaultView) && ((i = s), (o = []))
      }
      if (!o)
        if (n instanceof G.Window) (a = n), (o = [])
        else if (((o = r(n, t)), !f(t))) {
          var s = o[o.length - 1]
          s instanceof G.Document && (a = s.defaultView)
        }
      return (
        ne.set(t, o),
        w(t, o, a, i) && m(t, o, a, i) && v(t, o, a, i),
        J.set(t, re),
        $['delete'](t, null),
        K['delete'](t),
        t.defaultPrevented
      )
    }
    function w(e, t, n, r) {
      var o = oe
      if (n && !g(n, e, o, t, r)) return !1
      for (var i = t.length - 1; i > 0; i--) if (!g(t[i], e, o, t, r)) return !1
      return !0
    }
    function m(e, t, n, r) {
      var o = ie,
        i = t[0] || n
      return g(i, e, o, t, r)
    }
    function v(e, t, n, r) {
      for (var o = ae, i = 1; i < t.length; i++)
        if (!g(t[i], e, o, t, r)) return
      n && t.length > 0 && g(n, e, o, t, r)
    }
    function g(e, t, n, r, o) {
      var i = z.get(e)
      if (!i) return !0
      var a = o || s(r, e)
      if (a === e) {
        if (n === oe) return !0
        n === ae && (n = ie)
      } else if (n === ae && !t.bubbles) return !0
      if ('relatedTarget' in t) {
        var c = q(t),
          u = c.relatedTarget
        if (u) {
          if (u instanceof Object && u.addEventListener) {
            var p = V(u),
              d = l(t, e, p)
            if (d === a) return !0
          } else d = null
          Z.set(t, d)
        }
      }
      J.set(t, n)
      var f = t.type,
        h = !1
      Y.set(t, a), $.set(t, e), i.depth++
      for (var w = 0, m = i.length; w < m; w++) {
        var v = i[w]
        if (v.removed) h = !0
        else if (
          !(v.type !== f || (!v.capture && n === oe) || (v.capture && n === ae))
        )
          try {
            if (
              ('function' == typeof v.handler
                ? v.handler.call(e, t)
                : v.handler.handleEvent(t),
              ee.get(t))
            )
              return !1
          } catch (g) {
            W || (W = g)
          }
      }
      if ((i.depth--, h && 0 === i.depth)) {
        var b = i.slice()
        i.length = 0
        for (var w = 0; w < b.length; w++) b[w].removed || i.push(b[w])
      }
      return !Q.get(t)
    }
    function b(e, t, n) {
      ;(this.type = e), (this.handler = t), (this.capture = Boolean(n))
    }
    function y(e, t) {
      if (!(e instanceof se)) return V(T(se, 'Event', e, t))
      var n = e
      return be || 'beforeunload' !== n.type || this instanceof O
        ? void B(n, this)
        : new O(n)
    }
    function E(e) {
      return e && e.relatedTarget
        ? Object.create(e, { relatedTarget: { value: q(e.relatedTarget) } })
        : e
    }
    function S(e, t, n) {
      var r = window[e],
        o = function(t, n) {
          return t instanceof r ? void B(t, this) : V(T(r, e, t, n))
        }
      if (
        ((o.prototype = Object.create(t.prototype)), n && k(o.prototype, n), r)
      )
        try {
          F(r, o, new r('temp'))
        } catch (i) {
          F(r, o, document.createEvent(e))
        }
      return o
    }
    function M(e, t) {
      return function() {
        arguments[t] = q(arguments[t])
        var n = q(this)
        n[e].apply(n, arguments)
      }
    }
    function T(e, t, n, r) {
      if (ve) return new e(n, E(r))
      var o = q(document.createEvent(t)),
        i = me[t],
        a = [n]
      return (
        Object.keys(i).forEach(function(e) {
          var t = null != r && e in r ? r[e] : i[e]
          'relatedTarget' === e && (t = q(t)), a.push(t)
        }),
        o['init' + t].apply(o, a),
        o
      )
    }
    function O(e) {
      y.call(this, e)
    }
    function N(e) {
      return 'function' == typeof e || (e && e.handleEvent)
    }
    function j(e) {
      switch (e) {
        case 'DOMAttrModified':
        case 'DOMAttributeNameChanged':
        case 'DOMCharacterDataModified':
        case 'DOMElementNameChanged':
        case 'DOMNodeInserted':
        case 'DOMNodeInsertedIntoDocument':
        case 'DOMNodeRemoved':
        case 'DOMNodeRemovedFromDocument':
        case 'DOMSubtreeModified':
          return !0
      }
      return !1
    }
    function L(e) {
      B(e, this)
    }
    function _(e) {
      return e instanceof G.ShadowRoot && (e = e.host), q(e)
    }
    function D(e, t) {
      var n = z.get(e)
      if (n)
        for (var r = 0; r < n.length; r++)
          if (!n[r].removed && n[r].type === t) return !0
      return !1
    }
    function C(e, t) {
      for (var n = q(e); n; n = n.parentNode) if (D(V(n), t)) return !0
      return !1
    }
    function H(e) {
      I(e, Ee)
    }
    function x(t, n, o, i) {
      e.renderAllPending()
      var a = V(Se.call(U(n), o, i))
      if (!a) return null
      var c = r(a, null),
        u = c.lastIndexOf(t)
      return u == -1 ? null : ((c = c.slice(0, u)), s(c, t))
    }
    function R(e) {
      return function() {
        var t = te.get(this)
        return (t && t[e] && t[e].value) || null
      }
    }
    function P(e) {
      var t = e.slice(2)
      return function(n) {
        var r = te.get(this)
        r || ((r = Object.create(null)), te.set(this, r))
        var o = r[e]
        if (
          (o && this.removeEventListener(t, o.wrapped, !1),
          'function' == typeof n)
        ) {
          var i = function(t) {
            var r = n.call(this, t)
            r === !1
              ? t.preventDefault()
              : 'onbeforeunload' === e &&
                'string' == typeof r &&
                (t.returnValue = r)
          }
          this.addEventListener(t, i, !1), (r[e] = { value: n, wrapped: i })
        }
      }
    }
    var W,
      I = e.forwardMethodsToWrapper,
      A = e.getTreeScope,
      k = e.mixin,
      F = e.registerWrapper,
      B = e.setWrapper,
      U = e.unsafeUnwrap,
      q = e.unwrap,
      V = e.wrap,
      G = e.wrappers,
      z = (new WeakMap(), new WeakMap()),
      X = new WeakMap(),
      K = new WeakMap(),
      Y = new WeakMap(),
      $ = new WeakMap(),
      Z = new WeakMap(),
      J = new WeakMap(),
      Q = new WeakMap(),
      ee = new WeakMap(),
      te = new WeakMap(),
      ne = new WeakMap(),
      re = 0,
      oe = 1,
      ie = 2,
      ae = 3
    b.prototype = {
      equals: function(e) {
        return (
          this.handler === e.handler &&
          this.type === e.type &&
          this.capture === e.capture
        )
      },
      get removed() {
        return null === this.handler
      },
      remove: function() {
        this.handler = null
      }
    }
    var se = window.Event
    ;(se.prototype.polymerBlackList_ = { returnValue: !0, keyLocation: !0 }),
      (y.prototype = {
        get target() {
          return Y.get(this)
        },
        get currentTarget() {
          return $.get(this)
        },
        get eventPhase() {
          return J.get(this)
        },
        get path() {
          var e = ne.get(this)
          return e ? e.slice() : []
        },
        stopPropagation: function() {
          Q.set(this, !0)
        },
        stopImmediatePropagation: function() {
          Q.set(this, !0), ee.set(this, !0)
        }
      })
    var ce = (function() {
      var e = document.createEvent('Event')
      return e.initEvent('test', !0, !0), e.preventDefault(), e.defaultPrevented
    })()
    ce ||
      (y.prototype.preventDefault = function() {
        this.cancelable &&
          (U(this).preventDefault(),
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return !0
            },
            configurable: !0
          }))
      }),
      F(se, y, document.createEvent('Event'))
    var ue = S('UIEvent', y),
      le = S('CustomEvent', y),
      pe = {
        get relatedTarget() {
          var e = Z.get(this)
          return void 0 !== e ? e : V(q(this).relatedTarget)
        }
      },
      de = k({ initMouseEvent: M('initMouseEvent', 14) }, pe),
      fe = k({ initFocusEvent: M('initFocusEvent', 5) }, pe),
      he = S('MouseEvent', ue, de),
      we = S('FocusEvent', ue, fe),
      me = Object.create(null),
      ve = (function() {
        try {
          new window.FocusEvent('focus')
        } catch (e) {
          return !1
        }
        return !0
      })()
    if (!ve) {
      var ge = function(e, t, n) {
        if (n) {
          var r = me[n]
          t = k(k({}, r), t)
        }
        me[e] = t
      }
      ge('Event', { bubbles: !1, cancelable: !1 }),
        ge('CustomEvent', { detail: null }, 'Event'),
        ge('UIEvent', { view: null, detail: 0 }, 'Event'),
        ge(
          'MouseEvent',
          {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            button: 0,
            relatedTarget: null
          },
          'UIEvent'
        ),
        ge('FocusEvent', { relatedTarget: null }, 'UIEvent')
    }
    var be = window.BeforeUnloadEvent
    ;(O.prototype = Object.create(y.prototype)),
      k(O.prototype, {
        get returnValue() {
          return U(this).returnValue
        },
        set returnValue(e) {
          U(this).returnValue = e
        }
      }),
      be && F(be, O)
    var ye = window.EventTarget,
      Ee = ['addEventListener', 'removeEventListener', 'dispatchEvent']
    ;[Node, Window].forEach(function(e) {
      var t = e.prototype
      Ee.forEach(function(e) {
        Object.defineProperty(t, e + '_', { value: t[e] })
      })
    }),
      (L.prototype = {
        addEventListener: function(e, t, n) {
          if (N(t) && !j(e)) {
            var r = new b(e, t, n),
              o = z.get(this)
            if (o) {
              for (var i = 0; i < o.length; i++) if (r.equals(o[i])) return
            } else (o = []), (o.depth = 0), z.set(this, o)
            o.push(r)
            var a = _(this)
            a.addEventListener_(e, d, !0)
          }
        },
        removeEventListener: function(e, t, n) {
          n = Boolean(n)
          var r = z.get(this)
          if (r) {
            for (var o = 0, i = !1, a = 0; a < r.length; a++)
              r[a].type === e &&
                r[a].capture === n &&
                (o++, r[a].handler === t && ((i = !0), r[a].remove()))
            if (i && 1 === o) {
              var s = _(this)
              s.removeEventListener_(e, d, !0)
            }
          }
        },
        dispatchEvent: function(t) {
          var n = q(t),
            r = n.type
          X.set(n, !1), e.renderAllPending()
          var o
          C(this, r) || ((o = function() {}), this.addEventListener(r, o, !0))
          try {
            return q(this).dispatchEvent_(n)
          } finally {
            o && this.removeEventListener(r, o, !0)
          }
        }
      }),
      ye && F(ye, L)
    var Se = document.elementFromPoint
    ;(e.elementFromPoint = x),
      (e.getEventHandlerGetter = R),
      (e.getEventHandlerSetter = P),
      (e.wrapEventTargetMethods = H),
      (e.wrappers.BeforeUnloadEvent = O),
      (e.wrappers.CustomEvent = le),
      (e.wrappers.Event = y),
      (e.wrappers.EventTarget = L),
      (e.wrappers.FocusEvent = we),
      (e.wrappers.MouseEvent = he),
      (e.wrappers.UIEvent = ue)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e, t) {
      Object.defineProperty(e, t, w)
    }
    function n(e) {
      u(e, this)
    }
    function r() {
      ;(this.length = 0), t(this, 'length')
    }
    function o(e) {
      for (var t = new r(), o = 0; o < e.length; o++) t[o] = new n(e[o])
      return (t.length = o), t
    }
    function i(e) {
      a.call(this, e)
    }
    var a = e.wrappers.UIEvent,
      s = e.mixin,
      c = e.registerWrapper,
      u = e.setWrapper,
      l = e.unsafeUnwrap,
      p = e.wrap,
      d = window.TouchEvent
    if (d) {
      var f
      try {
        f = document.createEvent('TouchEvent')
      } catch (h) {
        return
      }
      var w = { enumerable: !1 }
      n.prototype = {
        get target() {
          return p(l(this).target)
        }
      }
      var m = { configurable: !0, enumerable: !0, get: null }
      ;[
        'clientX',
        'clientY',
        'screenX',
        'screenY',
        'pageX',
        'pageY',
        'identifier',
        'webkitRadiusX',
        'webkitRadiusY',
        'webkitRotationAngle',
        'webkitForce'
      ].forEach(function(e) {
        ;(m.get = function() {
          return l(this)[e]
        }),
          Object.defineProperty(n.prototype, e, m)
      }),
        (r.prototype = {
          item: function(e) {
            return this[e]
          }
        }),
        (i.prototype = Object.create(a.prototype)),
        s(i.prototype, {
          get touches() {
            return o(l(this).touches)
          },
          get targetTouches() {
            return o(l(this).targetTouches)
          },
          get changedTouches() {
            return o(l(this).changedTouches)
          },
          initTouchEvent: function() {
            throw new Error('Not implemented')
          }
        }),
        c(d, i, f),
        (e.wrappers.Touch = n),
        (e.wrappers.TouchEvent = i),
        (e.wrappers.TouchList = r)
    }
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e, t) {
      Object.defineProperty(e, t, s)
    }
    function n() {
      ;(this.length = 0), t(this, 'length')
    }
    function r(e) {
      if (null == e) return e
      for (var t = new n(), r = 0, o = e.length; r < o; r++) t[r] = a(e[r])
      return (t.length = o), t
    }
    function o(e, t) {
      e.prototype[t] = function() {
        return r(i(this)[t].apply(i(this), arguments))
      }
    }
    var i = e.unsafeUnwrap,
      a = e.wrap,
      s = { enumerable: !1 }
    ;(n.prototype = {
      item: function(e) {
        return this[e]
      }
    }),
      t(n.prototype, 'item'),
      (e.wrappers.NodeList = n),
      (e.addWrapNodeListMethod = o),
      (e.wrapNodeList = r)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    ;(e.wrapHTMLCollection = e.wrapNodeList),
      (e.wrappers.HTMLCollection = e.wrappers.NodeList)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      N(e instanceof S)
    }
    function n(e) {
      var t = new T()
      return (t[0] = e), (t.length = 1), t
    }
    function r(e, t, n) {
      L(t, 'childList', {
        removedNodes: n,
        previousSibling: e.previousSibling,
        nextSibling: e.nextSibling
      })
    }
    function o(e, t) {
      L(e, 'childList', { removedNodes: t })
    }
    function i(e, t, r, o) {
      if (e instanceof DocumentFragment) {
        var i = s(e)
        B = !0
        for (var a = i.length - 1; a >= 0; a--)
          e.removeChild(i[a]), (i[a].parentNode_ = t)
        B = !1
        for (var a = 0; a < i.length; a++)
          (i[a].previousSibling_ = i[a - 1] || r),
            (i[a].nextSibling_ = i[a + 1] || o)
        return (
          r && (r.nextSibling_ = i[0]),
          o && (o.previousSibling_ = i[i.length - 1]),
          i
        )
      }
      var i = n(e),
        c = e.parentNode
      return (
        c && c.removeChild(e),
        (e.parentNode_ = t),
        (e.previousSibling_ = r),
        (e.nextSibling_ = o),
        r && (r.nextSibling_ = e),
        o && (o.previousSibling_ = e),
        i
      )
    }
    function a(e) {
      if (e instanceof DocumentFragment) return s(e)
      var t = n(e),
        o = e.parentNode
      return o && r(e, o, t), t
    }
    function s(e) {
      for (var t = new T(), n = 0, r = e.firstChild; r; r = r.nextSibling)
        t[n++] = r
      return (t.length = n), o(e, t), t
    }
    function c(e) {
      return e
    }
    function u(e, t) {
      R(e, t), e.nodeIsInserted_()
    }
    function l(e, t) {
      for (var n = _(t), r = 0; r < e.length; r++) u(e[r], n)
    }
    function p(e) {
      R(e, new O(e, null))
    }
    function d(e) {
      for (var t = 0; t < e.length; t++) p(e[t])
    }
    function f(e, t) {
      var n = e.nodeType === S.DOCUMENT_NODE ? e : e.ownerDocument
      n !== t.ownerDocument && n.adoptNode(t)
    }
    function h(t, n) {
      if (n.length) {
        var r = t.ownerDocument
        if (r !== n[0].ownerDocument)
          for (var o = 0; o < n.length; o++) e.adoptNodeNoRemove(n[o], r)
      }
    }
    function w(e, t) {
      h(e, t)
      var n = t.length
      if (1 === n) return W(t[0])
      for (
        var r = W(e.ownerDocument.createDocumentFragment()), o = 0;
        o < n;
        o++
      )
        r.appendChild(W(t[o]))
      return r
    }
    function m(e) {
      if (void 0 !== e.firstChild_)
        for (var t = e.firstChild_; t; ) {
          var n = t
          ;(t = t.nextSibling_),
            (n.parentNode_ = n.previousSibling_ = n.nextSibling_ = void 0)
        }
      e.firstChild_ = e.lastChild_ = void 0
    }
    function v(e) {
      if (e.invalidateShadowRenderer()) {
        for (var t = e.firstChild; t; ) {
          N(t.parentNode === e)
          var n = t.nextSibling,
            r = W(t),
            o = r.parentNode
          o && Y.call(o, r),
            (t.previousSibling_ = t.nextSibling_ = t.parentNode_ = null),
            (t = n)
        }
        e.firstChild_ = e.lastChild_ = null
      } else
        for (var n, i = W(e), a = i.firstChild; a; )
          (n = a.nextSibling), Y.call(i, a), (a = n)
    }
    function g(e) {
      var t = e.parentNode
      return t && t.invalidateShadowRenderer()
    }
    function b(e) {
      for (var t, n = 0; n < e.length; n++)
        (t = e[n]), t.parentNode.removeChild(t)
    }
    function y(e, t, n) {
      var r
      if (((r = A(n ? U.call(n, P(e), !1) : q.call(P(e), !1))), t)) {
        for (var o = e.firstChild; o; o = o.nextSibling)
          r.appendChild(y(o, !0, n))
        if (e instanceof F.HTMLTemplateElement)
          for (
            var i = r.content, o = e.content.firstChild;
            o;
            o = o.nextSibling
          )
            i.appendChild(y(o, !0, n))
      }
      return r
    }
    function E(e, t) {
      if (!t || _(e) !== _(t)) return !1
      for (var n = t; n; n = n.parentNode) if (n === e) return !0
      return !1
    }
    function S(e) {
      N(e instanceof V),
        M.call(this, e),
        (this.parentNode_ = void 0),
        (this.firstChild_ = void 0),
        (this.lastChild_ = void 0),
        (this.nextSibling_ = void 0),
        (this.previousSibling_ = void 0),
        (this.treeScope_ = void 0)
    }
    var M = e.wrappers.EventTarget,
      T = e.wrappers.NodeList,
      O = e.TreeScope,
      N = e.assert,
      j = e.defineWrapGetter,
      L = e.enqueueMutation,
      _ = e.getTreeScope,
      D = e.isWrapper,
      C = e.mixin,
      H = e.registerTransientObservers,
      x = e.registerWrapper,
      R = e.setTreeScope,
      P = e.unsafeUnwrap,
      W = e.unwrap,
      I = e.unwrapIfNeeded,
      A = e.wrap,
      k = e.wrapIfNeeded,
      F = e.wrappers,
      B = !1,
      U = document.importNode,
      q = window.Node.prototype.cloneNode,
      V = window.Node,
      G = window.DocumentFragment,
      z = (V.prototype.appendChild, V.prototype.compareDocumentPosition),
      X = V.prototype.isEqualNode,
      K = V.prototype.insertBefore,
      Y = V.prototype.removeChild,
      $ = V.prototype.replaceChild,
      Z = /Trident|Edge/.test(navigator.userAgent),
      J = Z
        ? function(e, t) {
            try {
              Y.call(e, t)
            } catch (n) {
              if (!(e instanceof G)) throw n
            }
          }
        : function(e, t) {
            Y.call(e, t)
          }
    ;(S.prototype = Object.create(M.prototype)),
      C(S.prototype, {
        appendChild: function(e) {
          return this.insertBefore(e, null)
        },
        insertBefore: function(e, n) {
          t(e)
          var r
          n
            ? D(n)
              ? (r = W(n))
              : ((r = n), (n = A(r)))
            : ((n = null), (r = null)),
            n && N(n.parentNode === this)
          var o,
            s = n ? n.previousSibling : this.lastChild,
            c = !this.invalidateShadowRenderer() && !g(e)
          if (((o = c ? a(e) : i(e, this, s, n)), c))
            f(this, e), m(this), K.call(P(this), W(e), r)
          else {
            s || (this.firstChild_ = o[0]),
              n ||
                ((this.lastChild_ = o[o.length - 1]),
                void 0 === this.firstChild_ &&
                  (this.firstChild_ = this.firstChild))
            var u = r ? r.parentNode : P(this)
            u ? K.call(u, w(this, o), r) : h(this, o)
          }
          return (
            L(this, 'childList', {
              addedNodes: o,
              nextSibling: n,
              previousSibling: s
            }),
            l(o, this),
            e
          )
        },
        removeChild: function(e) {
          if ((t(e), e.parentNode !== this)) {
            for (
              var r = !1, o = (this.childNodes, this.firstChild);
              o;
              o = o.nextSibling
            )
              if (o === e) {
                r = !0
                break
              }
            if (!r) throw new Error('NotFoundError')
          }
          var i = W(e),
            a = e.nextSibling,
            s = e.previousSibling
          if (this.invalidateShadowRenderer()) {
            var c = this.firstChild,
              u = this.lastChild,
              l = i.parentNode
            l && J(l, i),
              c === e && (this.firstChild_ = a),
              u === e && (this.lastChild_ = s),
              s && (s.nextSibling_ = a),
              a && (a.previousSibling_ = s),
              (e.previousSibling_ = e.nextSibling_ = e.parentNode_ = void 0)
          } else m(this), J(P(this), i)
          return (
            B ||
              L(this, 'childList', {
                removedNodes: n(e),
                nextSibling: a,
                previousSibling: s
              }),
            H(this, e),
            e
          )
        },
        replaceChild: function(e, r) {
          t(e)
          var o
          if (
            (D(r) ? (o = W(r)) : ((o = r), (r = A(o))), r.parentNode !== this)
          )
            throw new Error('NotFoundError')
          var s,
            c = r.nextSibling,
            u = r.previousSibling,
            d = !this.invalidateShadowRenderer() && !g(e)
          return (
            d
              ? (s = a(e))
              : (c === e && (c = e.nextSibling), (s = i(e, this, u, c))),
            d
              ? (f(this, e), m(this), $.call(P(this), W(e), o))
              : (this.firstChild === r && (this.firstChild_ = s[0]),
                this.lastChild === r && (this.lastChild_ = s[s.length - 1]),
                (r.previousSibling_ = r.nextSibling_ = r.parentNode_ = void 0),
                o.parentNode && $.call(o.parentNode, w(this, s), o)),
            L(this, 'childList', {
              addedNodes: s,
              removedNodes: n(r),
              nextSibling: c,
              previousSibling: u
            }),
            p(r),
            l(s, this),
            r
          )
        },
        nodeIsInserted_: function() {
          for (var e = this.firstChild; e; e = e.nextSibling)
            e.nodeIsInserted_()
        },
        hasChildNodes: function() {
          return null !== this.firstChild
        },
        get parentNode() {
          return void 0 !== this.parentNode_
            ? this.parentNode_
            : A(P(this).parentNode)
        },
        get firstChild() {
          return void 0 !== this.firstChild_
            ? this.firstChild_
            : A(P(this).firstChild)
        },
        get lastChild() {
          return void 0 !== this.lastChild_
            ? this.lastChild_
            : A(P(this).lastChild)
        },
        get nextSibling() {
          return void 0 !== this.nextSibling_
            ? this.nextSibling_
            : A(P(this).nextSibling)
        },
        get previousSibling() {
          return void 0 !== this.previousSibling_
            ? this.previousSibling_
            : A(P(this).previousSibling)
        },
        get parentElement() {
          for (var e = this.parentNode; e && e.nodeType !== S.ELEMENT_NODE; )
            e = e.parentNode
          return e
        },
        get textContent() {
          for (var e = '', t = this.firstChild; t; t = t.nextSibling)
            t.nodeType != S.COMMENT_NODE && (e += t.textContent)
          return e
        },
        set textContent(e) {
          null == e && (e = '')
          var t = c(this.childNodes)
          if (this.invalidateShadowRenderer()) {
            if ((v(this), '' !== e)) {
              var n = P(this).ownerDocument.createTextNode(e)
              this.appendChild(n)
            }
          } else m(this), (P(this).textContent = e)
          var r = c(this.childNodes)
          L(this, 'childList', { addedNodes: r, removedNodes: t }),
            d(t),
            l(r, this)
        },
        get childNodes() {
          for (
            var e = new T(), t = 0, n = this.firstChild;
            n;
            n = n.nextSibling
          )
            e[t++] = n
          return (e.length = t), e
        },
        cloneNode: function(e) {
          return y(this, e)
        },
        contains: function(e) {
          return E(this, k(e))
        },
        compareDocumentPosition: function(e) {
          return z.call(P(this), I(e))
        },
        isEqualNode: function(e) {
          return X.call(P(this), I(e))
        },
        normalize: function() {
          for (
            var e, t, n = c(this.childNodes), r = [], o = '', i = 0;
            i < n.length;
            i++
          )
            (t = n[i]),
              t.nodeType === S.TEXT_NODE
                ? e || t.data.length
                  ? e
                    ? ((o += t.data), r.push(t))
                    : (e = t)
                  : this.removeChild(t)
                : (e && r.length && ((e.data += o), b(r)),
                  (r = []),
                  (o = ''),
                  (e = null),
                  t.childNodes.length && t.normalize())
          e && r.length && ((e.data += o), b(r))
        }
      }),
      j(S, 'ownerDocument'),
      x(V, S, document.createDocumentFragment()),
      delete S.prototype.querySelector,
      delete S.prototype.querySelectorAll,
      (S.prototype = C(Object.create(M.prototype), S.prototype)),
      (e.cloneNode = y),
      (e.nodeWasAdded = u),
      (e.nodeWasRemoved = p),
      (e.nodesWereAdded = l),
      (e.nodesWereRemoved = d),
      (e.originalInsertBefore = K),
      (e.originalRemoveChild = Y),
      (e.snapshotNodeList = c),
      (e.wrappers.Node = S)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(t, n, r, o) {
      for (var i = null, a = null, s = 0, c = t.length; s < c; s++)
        (i = b(t[s])),
          (!o && (a = v(i).root) && a instanceof e.wrappers.ShadowRoot) ||
            (r[n++] = i)
      return n
    }
    function n(e) {
      return String(e).replace(/\/deep\/|::shadow|>>>/g, ' ')
    }
    function r(e) {
      return String(e)
        .replace(/:host\(([^\s]+)\)/g, '$1')
        .replace(/([^\s]):host/g, '$1')
        .replace(':host', '*')
        .replace(
          /\^|\/shadow\/|\/shadow-deep\/|::shadow|\/deep\/|::content|>>>/g,
          ' '
        )
    }
    function o(e, t) {
      for (var n, r = e.firstElementChild; r; ) {
        if (r.matches(t)) return r
        if ((n = o(r, t))) return n
        r = r.nextElementSibling
      }
      return null
    }
    function i(e, t) {
      return e.matches(t)
    }
    function a(e, t, n) {
      var r = e.localName
      return r === t || (r === n && e.namespaceURI === D)
    }
    function s() {
      return !0
    }
    function c(e, t, n) {
      return e.localName === n
    }
    function u(e, t) {
      return e.namespaceURI === t
    }
    function l(e, t, n) {
      return e.namespaceURI === t && e.localName === n
    }
    function p(e, t, n, r, o, i) {
      for (var a = e.firstElementChild; a; )
        r(a, o, i) && (n[t++] = a),
          (t = p(a, t, n, r, o, i)),
          (a = a.nextElementSibling)
      return t
    }
    function d(n, r, o, i, a) {
      var s,
        c = g(this),
        u = v(this).root
      if (u instanceof e.wrappers.ShadowRoot) return p(this, r, o, n, i, null)
      if (c instanceof L) s = M.call(c, i)
      else {
        if (!(c instanceof _)) return p(this, r, o, n, i, null)
        s = S.call(c, i)
      }
      return t(s, r, o, a)
    }
    function f(n, r, o, i, a) {
      var s,
        c = g(this),
        u = v(this).root
      if (u instanceof e.wrappers.ShadowRoot) return p(this, r, o, n, i, a)
      if (c instanceof L) s = O.call(c, i, a)
      else {
        if (!(c instanceof _)) return p(this, r, o, n, i, a)
        s = T.call(c, i, a)
      }
      return t(s, r, o, !1)
    }
    function h(n, r, o, i, a) {
      var s,
        c = g(this),
        u = v(this).root
      if (u instanceof e.wrappers.ShadowRoot) return p(this, r, o, n, i, a)
      if (c instanceof L) s = j.call(c, i, a)
      else {
        if (!(c instanceof _)) return p(this, r, o, n, i, a)
        s = N.call(c, i, a)
      }
      return t(s, r, o, !1)
    }
    var w = e.wrappers.HTMLCollection,
      m = e.wrappers.NodeList,
      v = e.getTreeScope,
      g = e.unsafeUnwrap,
      b = e.wrap,
      y = document.querySelector,
      E = document.documentElement.querySelector,
      S = document.querySelectorAll,
      M = document.documentElement.querySelectorAll,
      T = document.getElementsByTagName,
      O = document.documentElement.getElementsByTagName,
      N = document.getElementsByTagNameNS,
      j = document.documentElement.getElementsByTagNameNS,
      L = window.Element,
      _ = window.HTMLDocument || window.Document,
      D = 'http://www.w3.org/1999/xhtml',
      C = {
        querySelector: function(t) {
          var r = n(t),
            i = r !== t
          t = r
          var a,
            s = g(this),
            c = v(this).root
          if (c instanceof e.wrappers.ShadowRoot) return o(this, t)
          if (s instanceof L) a = b(E.call(s, t))
          else {
            if (!(s instanceof _)) return o(this, t)
            a = b(y.call(s, t))
          }
          return a &&
            !i &&
            (c = v(a).root) &&
            c instanceof e.wrappers.ShadowRoot
            ? o(this, t)
            : a
        },
        querySelectorAll: function(e) {
          var t = n(e),
            r = t !== e
          e = t
          var o = new m()
          return (o.length = d.call(this, i, 0, o, e, r)), o
        }
      },
      H = {
        matches: function(t) {
          return (t = r(t)), e.originalMatches.call(g(this), t)
        }
      },
      x = {
        getElementsByTagName: function(e) {
          var t = new w(),
            n = '*' === e ? s : a
          return (t.length = f.call(this, n, 0, t, e, e.toLowerCase())), t
        },
        getElementsByClassName: function(e) {
          return this.querySelectorAll('.' + e)
        },
        getElementsByTagNameNS: function(e, t) {
          var n = new w(),
            r = null
          return (
            (r = '*' === e ? ('*' === t ? s : c) : '*' === t ? u : l),
            (n.length = h.call(this, r, 0, n, e || null, t)),
            n
          )
        }
      }
    ;(e.GetElementsByInterface = x),
      (e.SelectorsInterface = C),
      (e.MatchesInterface = H)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      for (; e && e.nodeType !== Node.ELEMENT_NODE; ) e = e.nextSibling
      return e
    }
    function n(e) {
      for (; e && e.nodeType !== Node.ELEMENT_NODE; ) e = e.previousSibling
      return e
    }
    var r = e.wrappers.NodeList,
      o = {
        get firstElementChild() {
          return t(this.firstChild)
        },
        get lastElementChild() {
          return n(this.lastChild)
        },
        get childElementCount() {
          for (
            var e = 0, t = this.firstElementChild;
            t;
            t = t.nextElementSibling
          )
            e++
          return e
        },
        get children() {
          for (
            var e = new r(), t = 0, n = this.firstElementChild;
            n;
            n = n.nextElementSibling
          )
            e[t++] = n
          return (e.length = t), e
        },
        remove: function() {
          var e = this.parentNode
          e && e.removeChild(this)
        }
      },
      i = {
        get nextElementSibling() {
          return t(this.nextSibling)
        },
        get previousElementSibling() {
          return n(this.previousSibling)
        }
      },
      a = {
        getElementById: function(e) {
          return /[ \t\n\r\f]/.test(e)
            ? null
            : this.querySelector('[id="' + e + '"]')
        }
      }
    ;(e.ChildNodeInterface = i),
      (e.NonElementParentNodeInterface = a),
      (e.ParentNodeInterface = o)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      r.call(this, e)
    }
    var n = e.ChildNodeInterface,
      r = e.wrappers.Node,
      o = e.enqueueMutation,
      i = e.mixin,
      a = e.registerWrapper,
      s = e.unsafeUnwrap,
      c = window.CharacterData
    ;(t.prototype = Object.create(r.prototype)),
      i(t.prototype, {
        get nodeValue() {
          return this.data
        },
        set nodeValue(e) {
          this.data = e
        },
        get textContent() {
          return this.data
        },
        set textContent(e) {
          this.data = e
        },
        get data() {
          return s(this).data
        },
        set data(e) {
          var t = s(this).data
          o(this, 'characterData', { oldValue: t }), (s(this).data = e)
        }
      }),
      i(t.prototype, n),
      a(c, t, document.createTextNode('')),
      (e.wrappers.CharacterData = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      return e >>> 0
    }
    function n(e) {
      r.call(this, e)
    }
    var r = e.wrappers.CharacterData,
      o = (e.enqueueMutation, e.mixin),
      i = e.registerWrapper,
      a = window.Text
    ;(n.prototype = Object.create(r.prototype)),
      o(n.prototype, {
        splitText: function(e) {
          e = t(e)
          var n = this.data
          if (e > n.length) throw new Error('IndexSizeError')
          var r = n.slice(0, e),
            o = n.slice(e)
          this.data = r
          var i = this.ownerDocument.createTextNode(o)
          return (
            this.parentNode &&
              this.parentNode.insertBefore(i, this.nextSibling),
            i
          )
        }
      }),
      i(a, n, document.createTextNode('')),
      (e.wrappers.Text = n)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      return i(e).getAttribute('class')
    }
    function n(e, t) {
      a(e, 'attributes', { name: 'class', namespace: null, oldValue: t })
    }
    function r(t) {
      e.invalidateRendererBasedOnAttribute(t, 'class')
    }
    function o(e, o, i) {
      var a = e.ownerElement_
      if (null == a) return o.apply(e, i)
      var s = t(a),
        c = o.apply(e, i)
      return t(a) !== s && (n(a, s), r(a)), c
    }
    if (!window.DOMTokenList)
      return void console.warn(
        'Missing DOMTokenList prototype, please include a compatible classList polyfill such as http://goo.gl/uTcepH.'
      )
    var i = e.unsafeUnwrap,
      a = e.enqueueMutation,
      s = DOMTokenList.prototype.add
    DOMTokenList.prototype.add = function() {
      o(this, s, arguments)
    }
    var c = DOMTokenList.prototype.remove
    DOMTokenList.prototype.remove = function() {
      o(this, c, arguments)
    }
    var u = DOMTokenList.prototype.toggle
    DOMTokenList.prototype.toggle = function() {
      return o(this, u, arguments)
    }
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(t, n) {
      var r = t.parentNode
      if (r && r.shadowRoot) {
        var o = e.getRendererForHost(r)
        o.dependsOnAttribute(n) && o.invalidate()
      }
    }
    function n(e, t, n) {
      l(e, 'attributes', { name: t, namespace: null, oldValue: n })
    }
    function r(e) {
      a.call(this, e)
    }
    var o = e.ChildNodeInterface,
      i = e.GetElementsByInterface,
      a = e.wrappers.Node,
      s = e.ParentNodeInterface,
      c = e.SelectorsInterface,
      u = e.MatchesInterface,
      l = (e.addWrapNodeListMethod, e.enqueueMutation),
      p = e.mixin,
      d = (e.oneOf, e.registerWrapper),
      f = e.unsafeUnwrap,
      h = e.wrappers,
      w = window.Element,
      m = [
        'matches',
        'mozMatchesSelector',
        'msMatchesSelector',
        'webkitMatchesSelector'
      ].filter(function(e) {
        return w.prototype[e]
      }),
      v = m[0],
      g = w.prototype[v],
      b = new WeakMap()
    ;(r.prototype = Object.create(a.prototype)),
      p(r.prototype, {
        createShadowRoot: function() {
          var t = new h.ShadowRoot(this)
          f(this).polymerShadowRoot_ = t
          var n = e.getRendererForHost(this)
          return n.invalidate(), t
        },
        get shadowRoot() {
          return f(this).polymerShadowRoot_ || null
        },
        setAttribute: function(e, r) {
          var o = f(this).getAttribute(e)
          f(this).setAttribute(e, r), n(this, e, o), t(this, e)
        },
        removeAttribute: function(e) {
          var r = f(this).getAttribute(e)
          f(this).removeAttribute(e), n(this, e, r), t(this, e)
        },
        get classList() {
          var e = b.get(this)
          if (!e) {
            if (((e = f(this).classList), !e)) return
            ;(e.ownerElement_ = this), b.set(this, e)
          }
          return e
        },
        get className() {
          return f(this).className
        },
        set className(e) {
          this.setAttribute('class', e)
        },
        get id() {
          return f(this).id
        },
        set id(e) {
          this.setAttribute('id', e)
        }
      }),
      m.forEach(function(e) {
        'matches' !== e &&
          (r.prototype[e] = function(e) {
            return this.matches(e)
          })
      }),
      w.prototype.webkitCreateShadowRoot &&
        (r.prototype.webkitCreateShadowRoot = r.prototype.createShadowRoot),
      p(r.prototype, o),
      p(r.prototype, i),
      p(r.prototype, s),
      p(r.prototype, c),
      p(r.prototype, u),
      d(w, r, document.createElementNS(null, 'x')),
      (e.invalidateRendererBasedOnAttribute = t),
      (e.matchesNames = m),
      (e.originalMatches = g),
      (e.wrappers.Element = r)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      switch (e) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '"':
          return '&quot;'
        case ' ':
          return '&nbsp;'
      }
    }
    function n(e) {
      return e.replace(j, t)
    }
    function r(e) {
      return e.replace(L, t)
    }
    function o(e) {
      for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0
      return t
    }
    function i(e) {
      if (e.namespaceURI !== C) return !0
      var t = e.ownerDocument.doctype
      return t && t.publicId && t.systemId
    }
    function a(e, t) {
      switch (e.nodeType) {
        case Node.ELEMENT_NODE:
          for (
            var o,
              a = e.tagName.toLowerCase(),
              c = '<' + a,
              u = e.attributes,
              l = 0;
            (o = u[l]);
            l++
          )
            c += ' ' + o.name + '="' + n(o.value) + '"'
          return _[a]
            ? (i(e) && (c += '/'), c + '>')
            : c + '>' + s(e) + '</' + a + '>'
        case Node.TEXT_NODE:
          var p = e.data
          return t && D[t.localName] ? p : r(p)
        case Node.COMMENT_NODE:
          return '<!--' + e.data + '-->'
        default:
          throw (console.error(e), new Error('not implemented'))
      }
    }
    function s(e) {
      e instanceof N.HTMLTemplateElement && (e = e.content)
      for (var t = '', n = e.firstChild; n; n = n.nextSibling) t += a(n, e)
      return t
    }
    function c(e, t, n) {
      var r = n || 'div'
      e.textContent = ''
      var o = T(e.ownerDocument.createElement(r))
      o.innerHTML = t
      for (var i; (i = o.firstChild); ) e.appendChild(O(i))
    }
    function u(e) {
      w.call(this, e)
    }
    function l(e, t) {
      var n = T(e.cloneNode(!1))
      n.innerHTML = t
      for (
        var r, o = T(document.createDocumentFragment());
        (r = n.firstChild);

      )
        o.appendChild(r)
      return O(o)
    }
    function p(t) {
      return function() {
        return e.renderAllPending(), M(this)[t]
      }
    }
    function d(e) {
      m(u, e, p(e))
    }
    function f(t) {
      Object.defineProperty(u.prototype, t, {
        get: p(t),
        set: function(n) {
          e.renderAllPending(), (M(this)[t] = n)
        },
        configurable: !0,
        enumerable: !0
      })
    }
    function h(t) {
      Object.defineProperty(u.prototype, t, {
        value: function() {
          return e.renderAllPending(), M(this)[t].apply(M(this), arguments)
        },
        configurable: !0,
        enumerable: !0
      })
    }
    var w = e.wrappers.Element,
      m = e.defineGetter,
      v = e.enqueueMutation,
      g = e.mixin,
      b = e.nodesWereAdded,
      y = e.nodesWereRemoved,
      E = e.registerWrapper,
      S = e.snapshotNodeList,
      M = e.unsafeUnwrap,
      T = e.unwrap,
      O = e.wrap,
      N = e.wrappers,
      j = /[&\u00A0"]/g,
      L = /[&\u00A0<>]/g,
      _ = o([
        'area',
        'base',
        'br',
        'col',
        'command',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr'
      ]),
      D = o([
        'style',
        'script',
        'xmp',
        'iframe',
        'noembed',
        'noframes',
        'plaintext',
        'noscript'
      ]),
      C = 'http://www.w3.org/1999/xhtml',
      H = /MSIE/.test(navigator.userAgent),
      x = window.HTMLElement,
      R = window.HTMLTemplateElement
    ;(u.prototype = Object.create(w.prototype)),
      g(u.prototype, {
        get innerHTML() {
          return s(this)
        },
        set innerHTML(e) {
          if (H && D[this.localName]) return void (this.textContent = e)
          var t = S(this.childNodes)
          this.invalidateShadowRenderer()
            ? this instanceof N.HTMLTemplateElement
              ? c(this.content, e)
              : c(this, e, this.tagName)
            : !R && this instanceof N.HTMLTemplateElement
            ? c(this.content, e)
            : (M(this).innerHTML = e)
          var n = S(this.childNodes)
          v(this, 'childList', { addedNodes: n, removedNodes: t }),
            y(t),
            b(n, this)
        },
        get outerHTML() {
          return a(this, this.parentNode)
        },
        set outerHTML(e) {
          var t = this.parentNode
          if (t) {
            t.invalidateShadowRenderer()
            var n = l(t, e)
            t.replaceChild(n, this)
          }
        },
        insertAdjacentHTML: function(e, t) {
          var n, r
          switch (String(e).toLowerCase()) {
            case 'beforebegin':
              ;(n = this.parentNode), (r = this)
              break
            case 'afterend':
              ;(n = this.parentNode), (r = this.nextSibling)
              break
            case 'afterbegin':
              ;(n = this), (r = this.firstChild)
              break
            case 'beforeend':
              ;(n = this), (r = null)
              break
            default:
              return
          }
          var o = l(n, t)
          n.insertBefore(o, r)
        },
        get hidden() {
          return this.hasAttribute('hidden')
        },
        set hidden(e) {
          e ? this.setAttribute('hidden', '') : this.removeAttribute('hidden')
        }
      }),
      [
        'clientHeight',
        'clientLeft',
        'clientTop',
        'clientWidth',
        'offsetHeight',
        'offsetLeft',
        'offsetTop',
        'offsetWidth',
        'scrollHeight',
        'scrollWidth'
      ].forEach(d),
      ['scrollLeft', 'scrollTop'].forEach(f),
      [
        'focus',
        'getBoundingClientRect',
        'getClientRects',
        'scrollIntoView'
      ].forEach(h),
      E(x, u, document.createElement('b')),
      (e.wrappers.HTMLElement = u),
      (e.getInnerHTML = s),
      (e.setInnerHTML = c)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.unsafeUnwrap,
      a = e.wrap,
      s = window.HTMLCanvasElement
    ;(t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        getContext: function() {
          var e = i(this).getContext.apply(i(this), arguments)
          return e && a(e)
        }
      }),
      o(s, t, document.createElement('canvas')),
      (e.wrappers.HTMLCanvasElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.mixin,
      o = e.registerWrapper,
      i = window.HTMLContentElement
    ;(t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        constructor: t,
        get select() {
          return this.getAttribute('select')
        },
        set select(e) {
          this.setAttribute('select', e)
        },
        setAttribute: function(e, t) {
          n.prototype.setAttribute.call(this, e, t),
            'select' === String(e).toLowerCase() &&
              this.invalidateShadowRenderer(!0)
        }
      }),
      i && o(i, t),
      (e.wrappers.HTMLContentElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.wrapHTMLCollection,
      a = e.unwrap,
      s = window.HTMLFormElement
    ;(t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        get elements() {
          return i(a(this).elements)
        }
      }),
      o(s, t, document.createElement('form')),
      (e.wrappers.HTMLFormElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      r.call(this, e)
    }
    function n(e, t) {
      if (!(this instanceof n))
        throw new TypeError(
          'DOM object constructor cannot be called as a function.'
        )
      var o = i(document.createElement('img'))
      r.call(this, o),
        a(o, this),
        void 0 !== e && (o.width = e),
        void 0 !== t && (o.height = t)
    }
    var r = e.wrappers.HTMLElement,
      o = e.registerWrapper,
      i = e.unwrap,
      a = e.rewrap,
      s = window.HTMLImageElement
    ;(t.prototype = Object.create(r.prototype)),
      o(s, t, document.createElement('img')),
      (n.prototype = t.prototype),
      (e.wrappers.HTMLImageElement = t),
      (e.wrappers.Image = n)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = (e.mixin, e.wrappers.NodeList, e.registerWrapper),
      o = window.HTMLShadowElement
    ;(t.prototype = Object.create(n.prototype)),
      (t.prototype.constructor = t),
      o && r(o, t),
      (e.wrappers.HTMLShadowElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      if (!e.defaultView) return e
      var t = p.get(e)
      if (!t) {
        for (t = e.implementation.createHTMLDocument(''); t.lastChild; )
          t.removeChild(t.lastChild)
        p.set(e, t)
      }
      return t
    }
    function n(e) {
      for (
        var n, r = t(e.ownerDocument), o = c(r.createDocumentFragment());
        (n = e.firstChild);

      )
        o.appendChild(n)
      return o
    }
    function r(e) {
      if ((o.call(this, e), !d)) {
        var t = n(e)
        l.set(this, u(t))
      }
    }
    var o = e.wrappers.HTMLElement,
      i = e.mixin,
      a = e.registerWrapper,
      s = e.unsafeUnwrap,
      c = e.unwrap,
      u = e.wrap,
      l = new WeakMap(),
      p = new WeakMap(),
      d = window.HTMLTemplateElement
    ;(r.prototype = Object.create(o.prototype)),
      i(r.prototype, {
        constructor: r,
        get content() {
          return d ? u(s(this).content) : l.get(this)
        }
      }),
      d && a(d, r),
      (e.wrappers.HTMLTemplateElement = r)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.registerWrapper,
      o = window.HTMLMediaElement
    o &&
      ((t.prototype = Object.create(n.prototype)),
      r(o, t, document.createElement('audio')),
      (e.wrappers.HTMLMediaElement = t))
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      r.call(this, e)
    }
    function n(e) {
      if (!(this instanceof n))
        throw new TypeError(
          'DOM object constructor cannot be called as a function.'
        )
      var t = i(document.createElement('audio'))
      r.call(this, t),
        a(t, this),
        t.setAttribute('preload', 'auto'),
        void 0 !== e && t.setAttribute('src', e)
    }
    var r = e.wrappers.HTMLMediaElement,
      o = e.registerWrapper,
      i = e.unwrap,
      a = e.rewrap,
      s = window.HTMLAudioElement
    s &&
      ((t.prototype = Object.create(r.prototype)),
      o(s, t, document.createElement('audio')),
      (n.prototype = t.prototype),
      (e.wrappers.HTMLAudioElement = t),
      (e.wrappers.Audio = n))
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      return e.replace(/\s+/g, ' ').trim()
    }
    function n(e) {
      o.call(this, e)
    }
    function r(e, t, n, i) {
      if (!(this instanceof r))
        throw new TypeError(
          'DOM object constructor cannot be called as a function.'
        )
      var a = c(document.createElement('option'))
      o.call(this, a),
        s(a, this),
        void 0 !== e && (a.text = e),
        void 0 !== t && a.setAttribute('value', t),
        n === !0 && a.setAttribute('selected', ''),
        (a.selected = i === !0)
    }
    var o = e.wrappers.HTMLElement,
      i = e.mixin,
      a = e.registerWrapper,
      s = e.rewrap,
      c = e.unwrap,
      u = e.wrap,
      l = window.HTMLOptionElement
    ;(n.prototype = Object.create(o.prototype)),
      i(n.prototype, {
        get text() {
          return t(this.textContent)
        },
        set text(e) {
          this.textContent = t(String(e))
        },
        get form() {
          return u(c(this).form)
        }
      }),
      a(l, n, document.createElement('option')),
      (r.prototype = n.prototype),
      (e.wrappers.HTMLOptionElement = n),
      (e.wrappers.Option = r)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.unwrap,
      a = e.wrap,
      s = window.HTMLSelectElement
    ;(t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        add: function(e, t) {
          'object' == typeof t && (t = i(t)), i(this).add(i(e), t)
        },
        remove: function(e) {
          return void 0 === e
            ? void n.prototype.remove.call(this)
            : ('object' == typeof e && (e = i(e)), void i(this).remove(e))
        },
        get form() {
          return a(i(this).form)
        }
      }),
      o(s, t, document.createElement('select')),
      (e.wrappers.HTMLSelectElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.unwrap,
      a = e.wrap,
      s = e.wrapHTMLCollection,
      c = window.HTMLTableElement
    ;(t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        get caption() {
          return a(i(this).caption)
        },
        createCaption: function() {
          return a(i(this).createCaption())
        },
        get tHead() {
          return a(i(this).tHead)
        },
        createTHead: function() {
          return a(i(this).createTHead())
        },
        createTFoot: function() {
          return a(i(this).createTFoot())
        },
        get tFoot() {
          return a(i(this).tFoot)
        },
        get tBodies() {
          return s(i(this).tBodies)
        },
        createTBody: function() {
          return a(i(this).createTBody())
        },
        get rows() {
          return s(i(this).rows)
        },
        insertRow: function(e) {
          return a(i(this).insertRow(e))
        }
      }),
      o(c, t, document.createElement('table')),
      (e.wrappers.HTMLTableElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.wrapHTMLCollection,
      a = e.unwrap,
      s = e.wrap,
      c = window.HTMLTableSectionElement
    ;(t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        constructor: t,
        get rows() {
          return i(a(this).rows)
        },
        insertRow: function(e) {
          return s(a(this).insertRow(e))
        }
      }),
      o(c, t, document.createElement('thead')),
      (e.wrappers.HTMLTableSectionElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.HTMLElement,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.wrapHTMLCollection,
      a = e.unwrap,
      s = e.wrap,
      c = window.HTMLTableRowElement
    ;(t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        get cells() {
          return i(a(this).cells)
        },
        insertCell: function(e) {
          return s(a(this).insertCell(e))
        }
      }),
      o(c, t, document.createElement('tr')),
      (e.wrappers.HTMLTableRowElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      switch (e.localName) {
        case 'content':
          return new n(e)
        case 'shadow':
          return new o(e)
        case 'template':
          return new i(e)
      }
      r.call(this, e)
    }
    var n = e.wrappers.HTMLContentElement,
      r = e.wrappers.HTMLElement,
      o = e.wrappers.HTMLShadowElement,
      i = e.wrappers.HTMLTemplateElement,
      a = (e.mixin, e.registerWrapper),
      s = window.HTMLUnknownElement
    ;(t.prototype = Object.create(r.prototype)),
      a(s, t),
      (e.wrappers.HTMLUnknownElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.Element,
      r = e.wrappers.HTMLElement,
      o = e.registerWrapper,
      i = (e.defineWrapGetter, e.unsafeUnwrap),
      a = e.wrap,
      s = e.mixin,
      c = 'http://www.w3.org/2000/svg',
      u = window.SVGElement,
      l = document.createElementNS(c, 'title')
    if (!('classList' in l)) {
      var p = Object.getOwnPropertyDescriptor(n.prototype, 'classList')
      Object.defineProperty(r.prototype, 'classList', p),
        delete n.prototype.classList
    }
    ;(t.prototype = Object.create(n.prototype)),
      s(t.prototype, {
        get ownerSVGElement() {
          return a(i(this).ownerSVGElement)
        }
      }),
      o(u, t, document.createElementNS(c, 'title')),
      (e.wrappers.SVGElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      d.call(this, e)
    }
    var n = e.mixin,
      r = e.registerWrapper,
      o = e.unwrap,
      i = e.wrap,
      a = window.SVGUseElement,
      s = 'http://www.w3.org/2000/svg',
      c = i(document.createElementNS(s, 'g')),
      u = document.createElementNS(s, 'use'),
      l = c.constructor,
      p = Object.getPrototypeOf(l.prototype),
      d = p.constructor
    ;(t.prototype = Object.create(p)),
      'instanceRoot' in u &&
        n(t.prototype, {
          get instanceRoot() {
            return i(o(this).instanceRoot)
          },
          get animatedInstanceRoot() {
            return i(o(this).animatedInstanceRoot)
          }
        }),
      r(a, t, u),
      (e.wrappers.SVGUseElement = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.EventTarget,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.unsafeUnwrap,
      a = e.wrap,
      s = window.SVGElementInstance
    s &&
      ((t.prototype = Object.create(n.prototype)),
      r(t.prototype, {
        get correspondingElement() {
          return a(i(this).correspondingElement)
        },
        get correspondingUseElement() {
          return a(i(this).correspondingUseElement)
        },
        get parentNode() {
          return a(i(this).parentNode)
        },
        get childNodes() {
          throw new Error('Not implemented')
        },
        get firstChild() {
          return a(i(this).firstChild)
        },
        get lastChild() {
          return a(i(this).lastChild)
        },
        get previousSibling() {
          return a(i(this).previousSibling)
        },
        get nextSibling() {
          return a(i(this).nextSibling)
        }
      }),
      o(s, t),
      (e.wrappers.SVGElementInstance = t))
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      o(e, this)
    }
    var n = e.mixin,
      r = e.registerWrapper,
      o = e.setWrapper,
      i = e.unsafeUnwrap,
      a = e.unwrap,
      s = e.unwrapIfNeeded,
      c = e.wrap,
      u = window.CanvasRenderingContext2D
    n(t.prototype, {
      get canvas() {
        return c(i(this).canvas)
      },
      drawImage: function() {
        ;(arguments[0] = s(arguments[0])),
          i(this).drawImage.apply(i(this), arguments)
      },
      createPattern: function() {
        return (
          (arguments[0] = a(arguments[0])),
          i(this).createPattern.apply(i(this), arguments)
        )
      }
    }),
      r(u, t, document.createElement('canvas').getContext('2d')),
      (e.wrappers.CanvasRenderingContext2D = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      i(e, this)
    }
    var n = e.addForwardingProperties,
      r = e.mixin,
      o = e.registerWrapper,
      i = e.setWrapper,
      a = e.unsafeUnwrap,
      s = e.unwrapIfNeeded,
      c = e.wrap,
      u = window.WebGLRenderingContext
    if (u) {
      r(t.prototype, {
        get canvas() {
          return c(a(this).canvas)
        },
        texImage2D: function() {
          ;(arguments[5] = s(arguments[5])),
            a(this).texImage2D.apply(a(this), arguments)
        },
        texSubImage2D: function() {
          ;(arguments[6] = s(arguments[6])),
            a(this).texSubImage2D.apply(a(this), arguments)
        }
      })
      var l = Object.getPrototypeOf(u.prototype)
      l !== Object.prototype && n(l, t.prototype)
      var p = /WebKit/.test(navigator.userAgent)
        ? { drawingBufferHeight: null, drawingBufferWidth: null }
        : {}
      o(u, t, p), (e.wrappers.WebGLRenderingContext = t)
    }
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.Node,
      r = e.GetElementsByInterface,
      o = e.NonElementParentNodeInterface,
      i = e.ParentNodeInterface,
      a = e.SelectorsInterface,
      s = e.mixin,
      c = e.registerObject,
      u = e.registerWrapper,
      l = window.DocumentFragment
    ;(t.prototype = Object.create(n.prototype)),
      s(t.prototype, i),
      s(t.prototype, a),
      s(t.prototype, r),
      s(t.prototype, o),
      u(l, t, document.createDocumentFragment()),
      (e.wrappers.DocumentFragment = t)
    var p = c(document.createComment(''))
    e.wrappers.Comment = p
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      var t = p(l(e).ownerDocument.createDocumentFragment())
      n.call(this, t), c(t, this)
      var o = e.shadowRoot
      h.set(this, o), (this.treeScope_ = new r(this, a(o || e))), f.set(this, e)
    }
    var n = e.wrappers.DocumentFragment,
      r = e.TreeScope,
      o = e.elementFromPoint,
      i = e.getInnerHTML,
      a = e.getTreeScope,
      s = e.mixin,
      c = e.rewrap,
      u = e.setInnerHTML,
      l = e.unsafeUnwrap,
      p = e.unwrap,
      d = e.wrap,
      f = new WeakMap(),
      h = new WeakMap()
    ;(t.prototype = Object.create(n.prototype)),
      s(t.prototype, {
        constructor: t,
        get innerHTML() {
          return i(this)
        },
        set innerHTML(e) {
          u(this, e), this.invalidateShadowRenderer()
        },
        get olderShadowRoot() {
          return h.get(this) || null
        },
        get host() {
          return f.get(this) || null
        },
        invalidateShadowRenderer: function() {
          return f.get(this).invalidateShadowRenderer()
        },
        elementFromPoint: function(e, t) {
          return o(this, this.ownerDocument, e, t)
        },
        getSelection: function() {
          return document.getSelection()
        },
        get activeElement() {
          var e = p(this).ownerDocument.activeElement
          if (!e || !e.nodeType) return null
          for (var t = d(e); !this.contains(t); ) {
            for (; t.parentNode; ) t = t.parentNode
            if (!t.host) return null
            t = t.host
          }
          return t
        }
      }),
      (e.wrappers.ShadowRoot = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      var t = p(e).root
      return t instanceof f ? t.host : null
    }
    function n(t, n) {
      if (t.shadowRoot) {
        n = Math.min(t.childNodes.length - 1, n)
        var r = t.childNodes[n]
        if (r) {
          var o = e.getDestinationInsertionPoints(r)
          if (o.length > 0) {
            var i = o[0].parentNode
            i.nodeType == Node.ELEMENT_NODE && (t = i)
          }
        }
      }
      return t
    }
    function r(e) {
      return (e = l(e)), t(e) || e
    }
    function o(e) {
      a(e, this)
    }
    var i = e.registerWrapper,
      a = e.setWrapper,
      s = e.unsafeUnwrap,
      c = e.unwrap,
      u = e.unwrapIfNeeded,
      l = e.wrap,
      p = e.getTreeScope,
      d = window.Range,
      f = e.wrappers.ShadowRoot
    ;(o.prototype = {
      get startContainer() {
        return r(s(this).startContainer)
      },
      get endContainer() {
        return r(s(this).endContainer)
      },
      get commonAncestorContainer() {
        return r(s(this).commonAncestorContainer)
      },
      setStart: function(e, t) {
        ;(e = n(e, t)), s(this).setStart(u(e), t)
      },
      setEnd: function(e, t) {
        ;(e = n(e, t)), s(this).setEnd(u(e), t)
      },
      setStartBefore: function(e) {
        s(this).setStartBefore(u(e))
      },
      setStartAfter: function(e) {
        s(this).setStartAfter(u(e))
      },
      setEndBefore: function(e) {
        s(this).setEndBefore(u(e))
      },
      setEndAfter: function(e) {
        s(this).setEndAfter(u(e))
      },
      selectNode: function(e) {
        s(this).selectNode(u(e))
      },
      selectNodeContents: function(e) {
        s(this).selectNodeContents(u(e))
      },
      compareBoundaryPoints: function(e, t) {
        return s(this).compareBoundaryPoints(e, c(t))
      },
      extractContents: function() {
        return l(s(this).extractContents())
      },
      cloneContents: function() {
        return l(s(this).cloneContents())
      },
      insertNode: function(e) {
        s(this).insertNode(u(e))
      },
      surroundContents: function(e) {
        s(this).surroundContents(u(e))
      },
      cloneRange: function() {
        return l(s(this).cloneRange())
      },
      isPointInRange: function(e, t) {
        return s(this).isPointInRange(u(e), t)
      },
      comparePoint: function(e, t) {
        return s(this).comparePoint(u(e), t)
      },
      intersectsNode: function(e) {
        return s(this).intersectsNode(u(e))
      },
      toString: function() {
        return s(this).toString()
      }
    }),
      d.prototype.createContextualFragment &&
        (o.prototype.createContextualFragment = function(e) {
          return l(s(this).createContextualFragment(e))
        }),
      i(window.Range, o, document.createRange()),
      (e.wrappers.Range = o)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      ;(e.previousSibling_ = e.previousSibling),
        (e.nextSibling_ = e.nextSibling),
        (e.parentNode_ = e.parentNode)
    }
    function n(n, o, i) {
      var a = x(n),
        s = x(o),
        c = i ? x(i) : null
      if ((r(o), t(o), i))
        n.firstChild === i && (n.firstChild_ = i),
          (i.previousSibling_ = i.previousSibling)
      else {
        ;(n.lastChild_ = n.lastChild),
          n.lastChild === n.firstChild && (n.firstChild_ = n.firstChild)
        var u = R(a.lastChild)
        u && (u.nextSibling_ = u.nextSibling)
      }
      e.originalInsertBefore.call(a, s, c)
    }
    function r(n) {
      var r = x(n),
        o = r.parentNode
      if (o) {
        var i = R(o)
        t(n),
          n.previousSibling && (n.previousSibling.nextSibling_ = n),
          n.nextSibling && (n.nextSibling.previousSibling_ = n),
          i.lastChild === n && (i.lastChild_ = n),
          i.firstChild === n && (i.firstChild_ = n),
          e.originalRemoveChild.call(o, r)
      }
    }
    function o(e) {
      W.set(e, [])
    }
    function i(e) {
      var t = W.get(e)
      return t || W.set(e, (t = [])), t
    }
    function a(e) {
      for (var t = [], n = 0, r = e.firstChild; r; r = r.nextSibling) t[n++] = r
      return t
    }
    function s() {
      for (var e = 0; e < F.length; e++) {
        var t = F[e],
          n = t.parentRenderer
        ;(n && n.dirty) || t.render()
      }
      F = []
    }
    function c() {
      ;(T = null), s()
    }
    function u(e) {
      var t = A.get(e)
      return t || ((t = new f(e)), A.set(e, t)), t
    }
    function l(e) {
      var t = D(e).root
      return t instanceof _ ? t : null
    }
    function p(e) {
      return u(e.host)
    }
    function d(e) {
      ;(this.skip = !1), (this.node = e), (this.childNodes = [])
    }
    function f(e) {
      ;(this.host = e),
        (this.dirty = !1),
        this.invalidateAttributes(),
        this.associateNode(e)
    }
    function h(e) {
      for (var t = [], n = e.firstChild; n; n = n.nextSibling)
        E(n) ? t.push.apply(t, i(n)) : t.push(n)
      return t
    }
    function w(e) {
      if (e instanceof j) return e
      if (e instanceof N) return null
      for (var t = e.firstChild; t; t = t.nextSibling) {
        var n = w(t)
        if (n) return n
      }
      return null
    }
    function m(e, t) {
      i(t).push(e)
      var n = I.get(e)
      n ? n.push(t) : I.set(e, [t])
    }
    function v(e) {
      return I.get(e)
    }
    function g(e) {
      I.set(e, void 0)
    }
    function b(e, t) {
      var n = t.getAttribute('select')
      if (!n) return !0
      if (((n = n.trim()), !n)) return !0
      if (!(e instanceof O)) return !1
      if (!U.test(n)) return !1
      try {
        return e.matches(n)
      } catch (r) {
        return !1
      }
    }
    function y(e, t) {
      var n = v(t)
      return n && n[n.length - 1] === e
    }
    function E(e) {
      return e instanceof N || e instanceof j
    }
    function S(e) {
      return e.shadowRoot
    }
    function M(e) {
      for (var t = [], n = e.shadowRoot; n; n = n.olderShadowRoot) t.push(n)
      return t
    }
    var T,
      O = e.wrappers.Element,
      N = e.wrappers.HTMLContentElement,
      j = e.wrappers.HTMLShadowElement,
      L = e.wrappers.Node,
      _ = e.wrappers.ShadowRoot,
      D = (e.assert, e.getTreeScope),
      C = (e.mixin, e.oneOf),
      H = e.unsafeUnwrap,
      x = e.unwrap,
      R = e.wrap,
      P = e.ArraySplice,
      W = new WeakMap(),
      I = new WeakMap(),
      A = new WeakMap(),
      k = C(window, [
        'requestAnimationFrame',
        'mozRequestAnimationFrame',
        'webkitRequestAnimationFrame',
        'setTimeout'
      ]),
      F = [],
      B = new P()
    ;(B.equals = function(e, t) {
      return x(e.node) === t
    }),
      (d.prototype = {
        append: function(e) {
          var t = new d(e)
          return this.childNodes.push(t), t
        },
        sync: function(e) {
          if (!this.skip) {
            for (
              var t = this.node,
                o = this.childNodes,
                i = a(x(t)),
                s = e || new WeakMap(),
                c = B.calculateSplices(o, i),
                u = 0,
                l = 0,
                p = 0,
                d = 0;
              d < c.length;
              d++
            ) {
              for (var f = c[d]; p < f.index; p++) l++, o[u++].sync(s)
              for (var h = f.removed.length, w = 0; w < h; w++) {
                var m = R(i[l++])
                s.get(m) || r(m)
              }
              for (
                var v = f.addedCount, g = i[l] && R(i[l]), w = 0;
                w < v;
                w++
              ) {
                var b = o[u++],
                  y = b.node
                n(t, y, g), s.set(y, !0), b.sync(s)
              }
              p += v
            }
            for (var d = p; d < o.length; d++) o[d].sync(s)
          }
        }
      }),
      (f.prototype = {
        render: function(e) {
          if (this.dirty) {
            this.invalidateAttributes()
            var t = this.host
            this.distribution(t)
            var n = e || new d(t)
            this.buildRenderTree(n, t)
            var r = !e
            r && n.sync(), (this.dirty = !1)
          }
        },
        get parentRenderer() {
          return D(this.host).renderer
        },
        invalidate: function() {
          if (!this.dirty) {
            this.dirty = !0
            var e = this.parentRenderer
            if ((e && e.invalidate(), F.push(this), T)) return
            T = window[k](c, 0)
          }
        },
        distribution: function(e) {
          this.resetAllSubtrees(e), this.distributionResolution(e)
        },
        resetAll: function(e) {
          E(e) ? o(e) : g(e), this.resetAllSubtrees(e)
        },
        resetAllSubtrees: function(e) {
          for (var t = e.firstChild; t; t = t.nextSibling) this.resetAll(t)
          e.shadowRoot && this.resetAll(e.shadowRoot),
            e.olderShadowRoot && this.resetAll(e.olderShadowRoot)
        },
        distributionResolution: function(e) {
          if (S(e)) {
            for (var t = e, n = h(t), r = M(t), o = 0; o < r.length; o++)
              this.poolDistribution(r[o], n)
            for (var o = r.length - 1; o >= 0; o--) {
              var i = r[o],
                a = w(i)
              if (a) {
                var s = i.olderShadowRoot
                s && (n = h(s))
                for (var c = 0; c < n.length; c++) m(n[c], a)
              }
              this.distributionResolution(i)
            }
          }
          for (var u = e.firstChild; u; u = u.nextSibling)
            this.distributionResolution(u)
        },
        poolDistribution: function(e, t) {
          if (!(e instanceof j))
            if (e instanceof N) {
              var n = e
              this.updateDependentAttributes(n.getAttribute('select'))
              for (var r = !1, o = 0; o < t.length; o++) {
                var e = t[o]
                e && b(e, n) && (m(e, n), (t[o] = void 0), (r = !0))
              }
              if (!r) for (var i = n.firstChild; i; i = i.nextSibling) m(i, n)
            } else
              for (var i = e.firstChild; i; i = i.nextSibling)
                this.poolDistribution(i, t)
        },
        buildRenderTree: function(e, t) {
          for (var n = this.compose(t), r = 0; r < n.length; r++) {
            var o = n[r],
              i = e.append(o)
            this.buildRenderTree(i, o)
          }
          if (S(t)) {
            var a = u(t)
            a.dirty = !1
          }
        },
        compose: function(e) {
          for (
            var t = [], n = e.shadowRoot || e, r = n.firstChild;
            r;
            r = r.nextSibling
          )
            if (E(r)) {
              this.associateNode(n)
              for (var o = i(r), a = 0; a < o.length; a++) {
                var s = o[a]
                y(r, s) && t.push(s)
              }
            } else t.push(r)
          return t
        },
        invalidateAttributes: function() {
          this.attributes = Object.create(null)
        },
        updateDependentAttributes: function(e) {
          if (e) {
            var t = this.attributes
            ;/\.\w+/.test(e) && (t['class'] = !0),
              /#\w+/.test(e) && (t.id = !0),
              e.replace(/\[\s*([^\s=\|~\]]+)/g, function(e, n) {
                t[n] = !0
              })
          }
        },
        dependsOnAttribute: function(e) {
          return this.attributes[e]
        },
        associateNode: function(e) {
          H(e).polymerShadowRenderer_ = this
        }
      })
    var U = /^(:not\()?[*.#[a-zA-Z_|]/
    ;(L.prototype.invalidateShadowRenderer = function(e) {
      var t = H(this).polymerShadowRenderer_
      return !!t && (t.invalidate(), !0)
    }),
      (N.prototype.getDistributedNodes = j.prototype.getDistributedNodes = function() {
        return s(), i(this)
      }),
      (O.prototype.getDestinationInsertionPoints = function() {
        return s(), v(this) || []
      }),
      (N.prototype.nodeIsInserted_ = j.prototype.nodeIsInserted_ = function() {
        this.invalidateShadowRenderer()
        var e,
          t = l(this)
        t && (e = p(t)),
          (H(this).polymerShadowRenderer_ = e),
          e && e.invalidate()
      }),
      (e.getRendererForHost = u),
      (e.getShadowTrees = M),
      (e.renderAllPending = s),
      (e.getDestinationInsertionPoints = v),
      (e.visual = { insertBefore: n, remove: r })
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(t) {
      if (window[t]) {
        r(!e.wrappers[t])
        var c = function(e) {
          n.call(this, e)
        }
        ;(c.prototype = Object.create(n.prototype)),
          o(c.prototype, {
            get form() {
              return s(a(this).form)
            }
          }),
          i(window[t], c, document.createElement(t.slice(4, -7))),
          (e.wrappers[t] = c)
      }
    }
    var n = e.wrappers.HTMLElement,
      r = e.assert,
      o = e.mixin,
      i = e.registerWrapper,
      a = e.unwrap,
      s = e.wrap,
      c = [
        'HTMLButtonElement',
        'HTMLFieldSetElement',
        'HTMLInputElement',
        'HTMLKeygenElement',
        'HTMLLabelElement',
        'HTMLLegendElement',
        'HTMLObjectElement',
        'HTMLOutputElement',
        'HTMLTextAreaElement'
      ]
    c.forEach(t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      r(e, this)
    }
    var n = e.registerWrapper,
      r = e.setWrapper,
      o = e.unsafeUnwrap,
      i = e.unwrap,
      a = e.unwrapIfNeeded,
      s = e.wrap,
      c = window.Selection
    ;(t.prototype = {
      get anchorNode() {
        return s(o(this).anchorNode)
      },
      get focusNode() {
        return s(o(this).focusNode)
      },
      addRange: function(e) {
        o(this).addRange(a(e))
      },
      collapse: function(e, t) {
        o(this).collapse(a(e), t)
      },
      containsNode: function(e, t) {
        return o(this).containsNode(a(e), t)
      },
      getRangeAt: function(e) {
        return s(o(this).getRangeAt(e))
      },
      removeRange: function(e) {
        o(this).removeRange(i(e))
      },
      selectAllChildren: function(e) {
        o(this).selectAllChildren(e instanceof ShadowRoot ? o(e.host) : a(e))
      },
      toString: function() {
        return o(this).toString()
      }
    }),
      c.prototype.extend &&
        (t.prototype.extend = function(e, t) {
          o(this).extend(a(e), t)
        }),
      n(window.Selection, t, window.getSelection()),
      (e.wrappers.Selection = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      r(e, this)
    }
    var n = e.registerWrapper,
      r = e.setWrapper,
      o = e.unsafeUnwrap,
      i = e.unwrapIfNeeded,
      a = e.wrap,
      s = window.TreeWalker
    ;(t.prototype = {
      get root() {
        return a(o(this).root)
      },
      get currentNode() {
        return a(o(this).currentNode)
      },
      set currentNode(e) {
        o(this).currentNode = i(e)
      },
      get filter() {
        return o(this).filter
      },
      parentNode: function() {
        return a(o(this).parentNode())
      },
      firstChild: function() {
        return a(o(this).firstChild())
      },
      lastChild: function() {
        return a(o(this).lastChild())
      },
      previousSibling: function() {
        return a(o(this).previousSibling())
      },
      previousNode: function() {
        return a(o(this).previousNode())
      },
      nextNode: function() {
        return a(o(this).nextNode())
      }
    }),
      n(s, t),
      (e.wrappers.TreeWalker = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      l.call(this, e), (this.treeScope_ = new m(this, null))
    }
    function n(e) {
      var n = document[e]
      t.prototype[e] = function() {
        return D(n.apply(L(this), arguments))
      }
    }
    function r(e, t) {
      x.call(L(t), _(e)), o(e, t)
    }
    function o(e, t) {
      e.shadowRoot && t.adoptNode(e.shadowRoot), e instanceof w && i(e, t)
      for (var n = e.firstChild; n; n = n.nextSibling) o(n, t)
    }
    function i(e, t) {
      var n = e.olderShadowRoot
      n && t.adoptNode(n)
    }
    function a(e) {
      j(e, this)
    }
    function s(e, t) {
      var n = document.implementation[t]
      e.prototype[t] = function() {
        return D(n.apply(L(this), arguments))
      }
    }
    function c(e, t) {
      var n = document.implementation[t]
      e.prototype[t] = function() {
        return n.apply(L(this), arguments)
      }
    }
    var u = e.GetElementsByInterface,
      l = e.wrappers.Node,
      p = e.ParentNodeInterface,
      d = e.NonElementParentNodeInterface,
      f = e.wrappers.Selection,
      h = e.SelectorsInterface,
      w = e.wrappers.ShadowRoot,
      m = e.TreeScope,
      v = e.cloneNode,
      g = e.defineGetter,
      b = e.defineWrapGetter,
      y = e.elementFromPoint,
      E = e.forwardMethodsToWrapper,
      S = e.matchesNames,
      M = e.mixin,
      T = e.registerWrapper,
      O = e.renderAllPending,
      N = e.rewrap,
      j = e.setWrapper,
      L = e.unsafeUnwrap,
      _ = e.unwrap,
      D = e.wrap,
      C = e.wrapEventTargetMethods,
      H = (e.wrapNodeList, new WeakMap())
    ;(t.prototype = Object.create(l.prototype)),
      b(t, 'documentElement'),
      b(t, 'body'),
      b(t, 'head'),
      g(t, 'activeElement', function() {
        var e = _(this).activeElement
        if (!e || !e.nodeType) return null
        for (var t = D(e); !this.contains(t); ) {
          for (; t.parentNode; ) t = t.parentNode
          if (!t.host) return null
          t = t.host
        }
        return t
      }),
      [
        'createComment',
        'createDocumentFragment',
        'createElement',
        'createElementNS',
        'createEvent',
        'createEventNS',
        'createRange',
        'createTextNode'
      ].forEach(n)
    var x = document.adoptNode,
      R = document.getSelection
    M(t.prototype, {
      adoptNode: function(e) {
        return e.parentNode && e.parentNode.removeChild(e), r(e, this), e
      },
      elementFromPoint: function(e, t) {
        return y(this, this, e, t)
      },
      importNode: function(e, t) {
        return v(e, t, L(this))
      },
      getSelection: function() {
        return O(), new f(R.call(_(this)))
      },
      getElementsByName: function(e) {
        return h.querySelectorAll.call(
          this,
          '[name=' + JSON.stringify(String(e)) + ']'
        )
      }
    })
    var P = document.createTreeWalker,
      W = e.wrappers.TreeWalker
    if (
      ((t.prototype.createTreeWalker = function(e, t, n, r) {
        var o = null
        return (
          n &&
            (n.acceptNode && 'function' == typeof n.acceptNode
              ? (o = {
                  acceptNode: function(e) {
                    return n.acceptNode(D(e))
                  }
                })
              : 'function' == typeof n &&
                (o = function(e) {
                  return n(D(e))
                })),
          new W(P.call(_(this), _(e), t, o, r))
        )
      }),
      document.registerElement)
    ) {
      var I = document.registerElement
      ;(t.prototype.registerElement = function(t, n) {
        function r(e) {
          return e
            ? void j(e, this)
            : i
            ? document.createElement(i, t)
            : document.createElement(t)
        }
        var o, i
        if (
          (void 0 !== n && ((o = n.prototype), (i = n['extends'])),
          o || (o = Object.create(HTMLElement.prototype)),
          e.nativePrototypeTable.get(o))
        )
          throw new Error('NotSupportedError')
        for (
          var a, s = Object.getPrototypeOf(o), c = [];
          s && !(a = e.nativePrototypeTable.get(s));

        )
          c.push(s), (s = Object.getPrototypeOf(s))
        if (!a) throw new Error('NotSupportedError')
        for (var u = Object.create(a), l = c.length - 1; l >= 0; l--)
          u = Object.create(u)
        ;[
          'createdCallback',
          'attachedCallback',
          'detachedCallback',
          'attributeChangedCallback'
        ].forEach(function(e) {
          var t = o[e]
          t &&
            (u[e] = function() {
              D(this) instanceof r || N(this), t.apply(D(this), arguments)
            })
        })
        var p = { prototype: u }
        i && (p['extends'] = i),
          (r.prototype = o),
          (r.prototype.constructor = r),
          e.constructorTable.set(u, r),
          e.nativePrototypeTable.set(o, u)
        I.call(_(this), t, p)
        return r
      }),
        E([window.HTMLDocument || window.Document], ['registerElement'])
    }
    E(
      [
        window.HTMLBodyElement,
        window.HTMLDocument || window.Document,
        window.HTMLHeadElement,
        window.HTMLHtmlElement
      ],
      [
        'appendChild',
        'compareDocumentPosition',
        'contains',
        'getElementsByClassName',
        'getElementsByTagName',
        'getElementsByTagNameNS',
        'insertBefore',
        'querySelector',
        'querySelectorAll',
        'removeChild',
        'replaceChild'
      ]
    ),
      E(
        [
          window.HTMLBodyElement,
          window.HTMLHeadElement,
          window.HTMLHtmlElement
        ],
        S
      ),
      E(
        [window.HTMLDocument || window.Document],
        [
          'adoptNode',
          'importNode',
          'contains',
          'createComment',
          'createDocumentFragment',
          'createElement',
          'createElementNS',
          'createEvent',
          'createEventNS',
          'createRange',
          'createTextNode',
          'createTreeWalker',
          'elementFromPoint',
          'getElementById',
          'getElementsByName',
          'getSelection'
        ]
      ),
      M(t.prototype, u),
      M(t.prototype, p),
      M(t.prototype, h),
      M(t.prototype, d),
      M(t.prototype, {
        get implementation() {
          var e = H.get(this)
          return e
            ? e
            : ((e = new a(_(this).implementation)), H.set(this, e), e)
        },
        get defaultView() {
          return D(_(this).defaultView)
        }
      }),
      T(window.Document, t, document.implementation.createHTMLDocument('')),
      window.HTMLDocument && T(window.HTMLDocument, t),
      C([
        window.HTMLBodyElement,
        window.HTMLDocument || window.Document,
        window.HTMLHeadElement
      ])
    var A = document.implementation.createDocument
    ;(a.prototype.createDocument = function() {
      return (arguments[2] = _(arguments[2])), D(A.apply(L(this), arguments))
    }),
      s(a, 'createDocumentType'),
      s(a, 'createHTMLDocument'),
      c(a, 'hasFeature'),
      T(window.DOMImplementation, a),
      E(
        [window.DOMImplementation],
        [
          'createDocument',
          'createDocumentType',
          'createHTMLDocument',
          'hasFeature'
        ]
      ),
      (e.adoptNodeNoRemove = r),
      (e.wrappers.DOMImplementation = a),
      (e.wrappers.Document = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      n.call(this, e)
    }
    var n = e.wrappers.EventTarget,
      r = e.wrappers.Selection,
      o = e.mixin,
      i = e.registerWrapper,
      a = e.renderAllPending,
      s = e.unwrap,
      c = e.unwrapIfNeeded,
      u = e.wrap,
      l = window.Window,
      p = window.getComputedStyle,
      d = window.getDefaultComputedStyle,
      f = window.getSelection
    ;(t.prototype = Object.create(n.prototype)),
      (l.prototype.getComputedStyle = function(e, t) {
        return u(this || window).getComputedStyle(c(e), t)
      }),
      d &&
        (l.prototype.getDefaultComputedStyle = function(e, t) {
          return u(this || window).getDefaultComputedStyle(c(e), t)
        }),
      (l.prototype.getSelection = function() {
        return u(this || window).getSelection()
      }),
      delete window.getComputedStyle,
      delete window.getDefaultComputedStyle,
      delete window.getSelection,
      ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(
        function(e) {
          ;(l.prototype[e] = function() {
            var t = u(this || window)
            return t[e].apply(t, arguments)
          }),
            delete window[e]
        }
      ),
      o(t.prototype, {
        getComputedStyle: function(e, t) {
          return a(), p.call(s(this), c(e), t)
        },
        getSelection: function() {
          return a(), new r(f.call(s(this)))
        },
        get document() {
          return u(s(this).document)
        }
      }),
      d &&
        (t.prototype.getDefaultComputedStyle = function(e, t) {
          return a(), d.call(s(this), c(e), t)
        }),
      i(l, t, window),
      (e.wrappers.Window = t)
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    var t = e.unwrap,
      n = window.DataTransfer || window.Clipboard,
      r = n.prototype.setDragImage
    r &&
      (n.prototype.setDragImage = function(e, n, o) {
        r.call(this, t(e), n, o)
      })
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      var t
      ;(t = e instanceof i ? e : new i(e && o(e))), r(t, this)
    }
    var n = e.registerWrapper,
      r = e.setWrapper,
      o = e.unwrap,
      i = window.FormData
    i && (n(i, t, new i()), (e.wrappers.FormData = t))
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    var t = e.unwrapIfNeeded,
      n = XMLHttpRequest.prototype.send
    XMLHttpRequest.prototype.send = function(e) {
      return n.call(this, t(e))
    }
  })(window.ShadowDOMPolyfill),
  (function(e) {
    'use strict'
    function t(e) {
      var t = n[e],
        r = window[t]
      if (r) {
        var o = document.createElement(e),
          i = o.constructor
        window[t] = i
      }
    }
    var n = (e.isWrapperFor,
    {
      a: 'HTMLAnchorElement',
      area: 'HTMLAreaElement',
      audio: 'HTMLAudioElement',
      base: 'HTMLBaseElement',
      body: 'HTMLBodyElement',
      br: 'HTMLBRElement',
      button: 'HTMLButtonElement',
      canvas: 'HTMLCanvasElement',
      caption: 'HTMLTableCaptionElement',
      col: 'HTMLTableColElement',
      content: 'HTMLContentElement',
      data: 'HTMLDataElement',
      datalist: 'HTMLDataListElement',
      del: 'HTMLModElement',
      dir: 'HTMLDirectoryElement',
      div: 'HTMLDivElement',
      dl: 'HTMLDListElement',
      embed: 'HTMLEmbedElement',
      fieldset: 'HTMLFieldSetElement',
      font: 'HTMLFontElement',
      form: 'HTMLFormElement',
      frame: 'HTMLFrameElement',
      frameset: 'HTMLFrameSetElement',
      h1: 'HTMLHeadingElement',
      head: 'HTMLHeadElement',
      hr: 'HTMLHRElement',
      html: 'HTMLHtmlElement',
      iframe: 'HTMLIFrameElement',
      img: 'HTMLImageElement',
      input: 'HTMLInputElement',
      keygen: 'HTMLKeygenElement',
      label: 'HTMLLabelElement',
      legend: 'HTMLLegendElement',
      li: 'HTMLLIElement',
      link: 'HTMLLinkElement',
      map: 'HTMLMapElement',
      marquee: 'HTMLMarqueeElement',
      menu: 'HTMLMenuElement',
      menuitem: 'HTMLMenuItemElement',
      meta: 'HTMLMetaElement',
      meter: 'HTMLMeterElement',
      object: 'HTMLObjectElement',
      ol: 'HTMLOListElement',
      optgroup: 'HTMLOptGroupElement',
      option: 'HTMLOptionElement',
      output: 'HTMLOutputElement',
      p: 'HTMLParagraphElement',
      param: 'HTMLParamElement',
      pre: 'HTMLPreElement',
      progress: 'HTMLProgressElement',
      q: 'HTMLQuoteElement',
      script: 'HTMLScriptElement',
      select: 'HTMLSelectElement',
      shadow: 'HTMLShadowElement',
      source: 'HTMLSourceElement',
      span: 'HTMLSpanElement',
      style: 'HTMLStyleElement',
      table: 'HTMLTableElement',
      tbody: 'HTMLTableSectionElement',
      template: 'HTMLTemplateElement',
      textarea: 'HTMLTextAreaElement',
      thead: 'HTMLTableSectionElement',
      time: 'HTMLTimeElement',
      title: 'HTMLTitleElement',
      tr: 'HTMLTableRowElement',
      track: 'HTMLTrackElement',
      ul: 'HTMLUListElement',
      video: 'HTMLVideoElement'
    })
    Object.keys(n).forEach(t),
      Object.getOwnPropertyNames(e.wrappers).forEach(function(t) {
        window[t] = e.wrappers[t]
      })
  })(window.ShadowDOMPolyfill)
