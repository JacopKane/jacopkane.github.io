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
      r = function() {
        this.name = '__st' + ((1e9 * Math.random()) >>> 0) + (t++ + '__')
      }
    ;(r.prototype = {
      set: function(t, r) {
        var i = t[this.name]
        return (
          i && i[0] === t
            ? (i[1] = r)
            : e(t, this.name, { value: [t, r], writable: !0 }),
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
      (window.WeakMap = r)
  })(),
  (function(e) {
    function t(e) {
      N.push(e), O || ((O = !0), b(i))
    }
    function r(e) {
      return (
        (window.ShadowDOMPolyfill &&
          window.ShadowDOMPolyfill.wrapIfNeeded(e)) ||
        e
      )
    }
    function i() {
      O = !1
      var e = N
      ;(N = []),
        e.sort(function(e, t) {
          return e.uid_ - t.uid_
        })
      var t = !1
      e.forEach(function(e) {
        var r = e.takeRecords()
        n(e), r.length && (e.callback_(r, e), (t = !0))
      }),
        t && i()
    }
    function n(e) {
      e.nodes_.forEach(function(t) {
        var r = p.get(t)
        r &&
          r.forEach(function(t) {
            t.observer === e && t.removeTransientObservers()
          })
      })
    }
    function a(e, t) {
      for (var r = e; r; r = r.parentNode) {
        var i = p.get(r)
        if (i)
          for (var n = 0; n < i.length; n++) {
            var a = i[n],
              s = a.options
            if (r === e || s.subtree) {
              var o = t(s)
              o && a.enqueue(o)
            }
          }
      }
    }
    function s(e) {
      ;(this.callback_ = e),
        (this.nodes_ = []),
        (this.records_ = []),
        (this.uid_ = ++M)
    }
    function o(e, t) {
      ;(this.type = e),
        (this.target = t),
        (this.addedNodes = []),
        (this.removedNodes = []),
        (this.previousSibling = null),
        (this.nextSibling = null),
        (this.attributeName = null),
        (this.attributeNamespace = null),
        (this.oldValue = null)
    }
    function d(e) {
      var t = new o(e.type, e.target)
      return (
        (t.addedNodes = e.addedNodes.slice()),
        (t.removedNodes = e.removedNodes.slice()),
        (t.previousSibling = e.previousSibling),
        (t.nextSibling = e.nextSibling),
        (t.attributeName = e.attributeName),
        (t.attributeNamespace = e.attributeNamespace),
        (t.oldValue = e.oldValue),
        t
      )
    }
    function u(e, t) {
      return (D = new o(e, t))
    }
    function h(e) {
      return w ? w : ((w = d(D)), (w.oldValue = e), w)
    }
    function c() {
      D = w = void 0
    }
    function v(e) {
      return e === w || e === D
    }
    function l(e, t) {
      return e === t ? e : w && v(e) ? w : null
    }
    function f(e, t, r) {
      ;(this.observer = e),
        (this.target = t),
        (this.options = r),
        (this.transientObservedNodes = [])
    }
    if (!e.JsMutationObserver) {
      var b,
        p = new WeakMap()
      if (/Trident|Edge/.test(navigator.userAgent)) b = setTimeout
      else if (window.setImmediate) b = window.setImmediate
      else {
        var g = [],
          m = String(Math.random())
        window.addEventListener('message', function(e) {
          if (e.data === m) {
            var t = g
            ;(g = []),
              t.forEach(function(e) {
                e()
              })
          }
        }),
          (b = function(e) {
            g.push(e), window.postMessage(m, '*')
          })
      }
      var O = !1,
        N = [],
        M = 0
      s.prototype = {
        observe: function(e, t) {
          if (
            ((e = r(e)),
            (!t.childList && !t.attributes && !t.characterData) ||
              (t.attributeOldValue && !t.attributes) ||
              (t.attributeFilter &&
                t.attributeFilter.length &&
                !t.attributes) ||
              (t.characterDataOldValue && !t.characterData))
          )
            throw new SyntaxError()
          var i = p.get(e)
          i || p.set(e, (i = []))
          for (var n, a = 0; a < i.length; a++)
            if (i[a].observer === this) {
              ;(n = i[a]), n.removeListeners(), (n.options = t)
              break
            }
          n || ((n = new f(this, e, t)), i.push(n), this.nodes_.push(e)),
            n.addListeners()
        },
        disconnect: function() {
          this.nodes_.forEach(function(e) {
            for (var t = p.get(e), r = 0; r < t.length; r++) {
              var i = t[r]
              if (i.observer === this) {
                i.removeListeners(), t.splice(r, 1)
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
      }
      var D, w
      ;(f.prototype = {
        enqueue: function(e) {
          var r = this.observer.records_,
            i = r.length
          if (r.length > 0) {
            var n = r[i - 1],
              a = l(n, e)
            if (a) return void (r[i - 1] = a)
          } else t(this.observer)
          r[i] = e
        },
        addListeners: function() {
          this.addListeners_(this.target)
        },
        addListeners_: function(e) {
          var t = this.options
          t.attributes && e.addEventListener('DOMAttrModified', this, !0),
            t.characterData &&
              e.addEventListener('DOMCharacterDataModified', this, !0),
            t.childList && e.addEventListener('DOMNodeInserted', this, !0),
            (t.childList || t.subtree) &&
              e.addEventListener('DOMNodeRemoved', this, !0)
        },
        removeListeners: function() {
          this.removeListeners_(this.target)
        },
        removeListeners_: function(e) {
          var t = this.options
          t.attributes && e.removeEventListener('DOMAttrModified', this, !0),
            t.characterData &&
              e.removeEventListener('DOMCharacterDataModified', this, !0),
            t.childList && e.removeEventListener('DOMNodeInserted', this, !0),
            (t.childList || t.subtree) &&
              e.removeEventListener('DOMNodeRemoved', this, !0)
        },
        addTransientObserver: function(e) {
          if (e !== this.target) {
            this.addListeners_(e), this.transientObservedNodes.push(e)
            var t = p.get(e)
            t || p.set(e, (t = [])), t.push(this)
          }
        },
        removeTransientObservers: function() {
          var e = this.transientObservedNodes
          ;(this.transientObservedNodes = []),
            e.forEach(function(e) {
              this.removeListeners_(e)
              for (var t = p.get(e), r = 0; r < t.length; r++)
                if (t[r] === this) {
                  t.splice(r, 1)
                  break
                }
            }, this)
        },
        handleEvent: function(e) {
          switch ((e.stopImmediatePropagation(), e.type)) {
            case 'DOMAttrModified':
              var t = e.attrName,
                r = e.relatedNode.namespaceURI,
                i = e.target,
                n = new u('attributes', i)
              ;(n.attributeName = t), (n.attributeNamespace = r)
              var s =
                e.attrChange === MutationEvent.ADDITION ? null : e.prevValue
              a(i, function(e) {
                if (
                  e.attributes &&
                  (!e.attributeFilter ||
                    !e.attributeFilter.length ||
                    e.attributeFilter.indexOf(t) !== -1 ||
                    e.attributeFilter.indexOf(r) !== -1)
                )
                  return e.attributeOldValue ? h(s) : n
              })
              break
            case 'DOMCharacterDataModified':
              var i = e.target,
                n = u('characterData', i),
                s = e.prevValue
              a(i, function(e) {
                if (e.characterData) return e.characterDataOldValue ? h(s) : n
              })
              break
            case 'DOMNodeRemoved':
              this.addTransientObserver(e.target)
            case 'DOMNodeInserted':
              var o,
                d,
                v = e.target
              'DOMNodeInserted' === e.type
                ? ((o = [v]), (d = []))
                : ((o = []), (d = [v]))
              var l = v.previousSibling,
                f = v.nextSibling,
                n = u('childList', e.target.parentNode)
              ;(n.addedNodes = o),
                (n.removedNodes = d),
                (n.previousSibling = l),
                (n.nextSibling = f),
                a(e.relatedNode, function(e) {
                  if (e.childList) return n
                })
          }
          c()
        }
      }),
        (e.JsMutationObserver = s),
        e.MutationObserver || ((e.MutationObserver = s), (s._isPolyfilled = !0))
    }
  })(self)
