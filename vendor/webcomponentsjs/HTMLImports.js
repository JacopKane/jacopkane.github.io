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
  (function(e) {
    function t(e) {
      E.push(e), g || ((g = !0), f(r))
    }
    function n(e) {
      return (
        (window.ShadowDOMPolyfill &&
          window.ShadowDOMPolyfill.wrapIfNeeded(e)) ||
        e
      )
    }
    function r() {
      g = !1
      var e = E
      ;(E = []),
        e.sort(function(e, t) {
          return e.uid_ - t.uid_
        })
      var t = !1
      e.forEach(function(e) {
        var n = e.takeRecords()
        o(e), n.length && (e.callback_(n, e), (t = !0))
      }),
        t && r()
    }
    function o(e) {
      e.nodes_.forEach(function(t) {
        var n = v.get(t)
        n &&
          n.forEach(function(t) {
            t.observer === e && t.removeTransientObservers()
          })
      })
    }
    function i(e, t) {
      for (var n = e; n; n = n.parentNode) {
        var r = v.get(n)
        if (r)
          for (var o = 0; o < r.length; o++) {
            var i = r[o],
              a = i.options
            if (n === e || a.subtree) {
              var s = t(a)
              s && i.enqueue(s)
            }
          }
      }
    }
    function a(e) {
      ;(this.callback_ = e),
        (this.nodes_ = []),
        (this.records_ = []),
        (this.uid_ = ++_)
    }
    function s(e, t) {
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
      var t = new s(e.type, e.target)
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
    function c(e, t) {
      return (y = new s(e, t))
    }
    function u(e) {
      return L ? L : ((L = d(y)), (L.oldValue = e), L)
    }
    function l() {
      y = L = void 0
    }
    function h(e) {
      return e === L || e === y
    }
    function m(e, t) {
      return e === t ? e : L && h(e) ? L : null
    }
    function p(e, t, n) {
      ;(this.observer = e),
        (this.target = t),
        (this.options = n),
        (this.transientObservedNodes = [])
    }
    if (!e.JsMutationObserver) {
      var f,
        v = new WeakMap()
      if (/Trident|Edge/.test(navigator.userAgent)) f = setTimeout
      else if (window.setImmediate) f = window.setImmediate
      else {
        var w = [],
          b = String(Math.random())
        window.addEventListener('message', function(e) {
          if (e.data === b) {
            var t = w
            ;(w = []),
              t.forEach(function(e) {
                e()
              })
          }
        }),
          (f = function(e) {
            w.push(e), window.postMessage(b, '*')
          })
      }
      var g = !1,
        E = [],
        _ = 0
      a.prototype = {
        observe: function(e, t) {
          if (
            ((e = n(e)),
            (!t.childList && !t.attributes && !t.characterData) ||
              (t.attributeOldValue && !t.attributes) ||
              (t.attributeFilter &&
                t.attributeFilter.length &&
                !t.attributes) ||
              (t.characterDataOldValue && !t.characterData))
          )
            throw new SyntaxError()
          var r = v.get(e)
          r || v.set(e, (r = []))
          for (var o, i = 0; i < r.length; i++)
            if (r[i].observer === this) {
              ;(o = r[i]), o.removeListeners(), (o.options = t)
              break
            }
          o || ((o = new p(this, e, t)), r.push(o), this.nodes_.push(e)),
            o.addListeners()
        },
        disconnect: function() {
          this.nodes_.forEach(function(e) {
            for (var t = v.get(e), n = 0; n < t.length; n++) {
              var r = t[n]
              if (r.observer === this) {
                r.removeListeners(), t.splice(n, 1)
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
      var y, L
      ;(p.prototype = {
        enqueue: function(e) {
          var n = this.observer.records_,
            r = n.length
          if (n.length > 0) {
            var o = n[r - 1],
              i = m(o, e)
            if (i) return void (n[r - 1] = i)
          } else t(this.observer)
          n[r] = e
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
            var t = v.get(e)
            t || v.set(e, (t = [])), t.push(this)
          }
        },
        removeTransientObservers: function() {
          var e = this.transientObservedNodes
          ;(this.transientObservedNodes = []),
            e.forEach(function(e) {
              this.removeListeners_(e)
              for (var t = v.get(e), n = 0; n < t.length; n++)
                if (t[n] === this) {
                  t.splice(n, 1)
                  break
                }
            }, this)
        },
        handleEvent: function(e) {
          switch ((e.stopImmediatePropagation(), e.type)) {
            case 'DOMAttrModified':
              var t = e.attrName,
                n = e.relatedNode.namespaceURI,
                r = e.target,
                o = new c('attributes', r)
              ;(o.attributeName = t), (o.attributeNamespace = n)
              var a =
                e.attrChange === MutationEvent.ADDITION ? null : e.prevValue
              i(r, function(e) {
                if (
                  e.attributes &&
                  (!e.attributeFilter ||
                    !e.attributeFilter.length ||
                    e.attributeFilter.indexOf(t) !== -1 ||
                    e.attributeFilter.indexOf(n) !== -1)
                )
                  return e.attributeOldValue ? u(a) : o
              })
              break
            case 'DOMCharacterDataModified':
              var r = e.target,
                o = c('characterData', r),
                a = e.prevValue
              i(r, function(e) {
                if (e.characterData) return e.characterDataOldValue ? u(a) : o
              })
              break
            case 'DOMNodeRemoved':
              this.addTransientObserver(e.target)
            case 'DOMNodeInserted':
              var s,
                d,
                h = e.target
              'DOMNodeInserted' === e.type
                ? ((s = [h]), (d = []))
                : ((s = []), (d = [h]))
              var m = h.previousSibling,
                p = h.nextSibling,
                o = c('childList', e.target.parentNode)
              ;(o.addedNodes = s),
                (o.removedNodes = d),
                (o.previousSibling = m),
                (o.nextSibling = p),
                i(e.relatedNode, function(e) {
                  if (e.childList) return o
                })
          }
          l()
        }
      }),
        (e.JsMutationObserver = a),
        e.MutationObserver || ((e.MutationObserver = a), (a._isPolyfilled = !0))
    }
  })(self),
  (function(e) {
    'use strict'
    if (!window.performance || !window.performance.now) {
      var t = Date.now()
      window.performance = {
        now: function() {
          return Date.now() - t
        }
      }
    }
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = (function() {
        var e =
          window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
        return e
          ? function(t) {
              return e(function() {
                t(performance.now())
              })
            }
          : function(e) {
              return window.setTimeout(e, 1e3 / 60)
            }
      })()),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = (function() {
          return (
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            function(e) {
              clearTimeout(e)
            }
          )
        })())
    var n = (function() {
      var e = document.createEvent('Event')
      return e.initEvent('foo', !0, !0), e.preventDefault(), e.defaultPrevented
    })()
    if (!n) {
      var r = Event.prototype.preventDefault
      Event.prototype.preventDefault = function() {
        this.cancelable &&
          (r.call(this),
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return !0
            },
            configurable: !0
          }))
      }
    }
    var o = /Trident/.test(navigator.userAgent)
    if (
      ((!window.CustomEvent ||
        (o && 'function' != typeof window.CustomEvent)) &&
        ((window.CustomEvent = function(e, t) {
          t = t || {}
          var n = document.createEvent('CustomEvent')
          return (
            n.initCustomEvent(
              e,
              Boolean(t.bubbles),
              Boolean(t.cancelable),
              t.detail
            ),
            n
          )
        }),
        (window.CustomEvent.prototype = window.Event.prototype)),
      !window.Event || (o && 'function' != typeof window.Event))
    ) {
      var i = window.Event
      ;(window.Event = function(e, t) {
        t = t || {}
        var n = document.createEvent('Event')
        return n.initEvent(e, Boolean(t.bubbles), Boolean(t.cancelable)), n
      }),
        (window.Event.prototype = i.prototype)
    }
  })(window.WebComponents),
  (window.HTMLImports = window.HTMLImports || { flags: {} }),
  (function(e) {
    function t(e, t) {
      ;(t = t || p),
        r(function() {
          i(e, t)
        }, t)
    }
    function n(e) {
      return 'complete' === e.readyState || e.readyState === w
    }
    function r(e, t) {
      if (n(t)) e && e()
      else {
        var o = function() {
          ;('complete' !== t.readyState && t.readyState !== w) ||
            (t.removeEventListener(b, o), r(e, t))
        }
        t.addEventListener(b, o)
      }
    }
    function o(e) {
      e.target.__loaded = !0
    }
    function i(e, t) {
      function n() {
        d == c && e && e({ allImports: s, loadedImports: u, errorImports: l })
      }
      function r(e) {
        o(e), u.push(this), d++, n()
      }
      function i(e) {
        l.push(this), d++, n()
      }
      var s = t.querySelectorAll('link[rel=import]'),
        d = 0,
        c = s.length,
        u = [],
        l = []
      if (c)
        for (var h, m = 0; m < c && (h = s[m]); m++)
          a(h)
            ? (u.push(this), d++, n())
            : (h.addEventListener('load', r), h.addEventListener('error', i))
      else n()
    }
    function a(e) {
      return l
        ? e.__loaded || (e['import'] && 'loading' !== e['import'].readyState)
        : e.__importParsed
    }
    function s(e) {
      for (var t, n = 0, r = e.length; n < r && (t = e[n]); n++) d(t) && c(t)
    }
    function d(e) {
      return 'link' === e.localName && 'import' === e.rel
    }
    function c(e) {
      var t = e['import']
      t
        ? o({ target: e })
        : (e.addEventListener('load', o), e.addEventListener('error', o))
    }
    var u = 'import',
      l = Boolean(u in document.createElement('link')),
      h = Boolean(window.ShadowDOMPolyfill),
      m = function(e) {
        return h ? window.ShadowDOMPolyfill.wrapIfNeeded(e) : e
      },
      p = m(document),
      f = {
        get: function() {
          var e =
            window.HTMLImports.currentScript ||
            document.currentScript ||
            ('complete' !== document.readyState
              ? document.scripts[document.scripts.length - 1]
              : null)
          return m(e)
        },
        configurable: !0
      }
    Object.defineProperty(document, '_currentScript', f),
      Object.defineProperty(p, '_currentScript', f)
    var v = /Trident/.test(navigator.userAgent),
      w = v ? 'complete' : 'interactive',
      b = 'readystatechange'
    l &&
      (new MutationObserver(function(e) {
        for (var t, n = 0, r = e.length; n < r && (t = e[n]); n++)
          t.addedNodes && s(t.addedNodes)
      }).observe(document.head, { childList: !0 }),
      (function() {
        if ('loading' === document.readyState)
          for (
            var e,
              t = document.querySelectorAll('link[rel=import]'),
              n = 0,
              r = t.length;
            n < r && (e = t[n]);
            n++
          )
            c(e)
      })()),
      t(function(e) {
        ;(window.HTMLImports.ready = !0),
          (window.HTMLImports.readyTime = new Date().getTime())
        var t = p.createEvent('CustomEvent')
        t.initCustomEvent('HTMLImportsLoaded', !0, !0, e), p.dispatchEvent(t)
      }),
      (e.IMPORT_LINK_TYPE = u),
      (e.useNative = l),
      (e.rootDocument = p),
      (e.whenReady = t),
      (e.isIE = v)
  })(window.HTMLImports),
  (function(e) {
    var t = [],
      n = function(e) {
        t.push(e)
      },
      r = function() {
        t.forEach(function(t) {
          t(e)
        })
      }
    ;(e.addModule = n), (e.initializeModules = r)
  })(window.HTMLImports),
  window.HTMLImports.addModule(function(e) {
    var t = /(url\()([^)]*)(\))/g,
      n = /(@import[\s]+(?!url\())([^;]*)(;)/g,
      r = {
        resolveUrlsInStyle: function(e, t) {
          var n = e.ownerDocument,
            r = n.createElement('a')
          return (
            (e.textContent = this.resolveUrlsInCssText(e.textContent, t, r)), e
          )
        },
        resolveUrlsInCssText: function(e, r, o) {
          var i = this.replaceUrls(e, o, r, t)
          return (i = this.replaceUrls(i, o, r, n))
        },
        replaceUrls: function(e, t, n, r) {
          return e.replace(r, function(e, r, o, i) {
            var a = o.replace(/["']/g, '')
            return (
              n && (a = new URL(a, n).href),
              (t.href = a),
              (a = t.href),
              r + "'" + a + "'" + i
            )
          })
        }
      }
    e.path = r
  }),
  window.HTMLImports.addModule(function(e) {
    var t = {
      async: !0,
      ok: function(e) {
        return (
          (e.status >= 200 && e.status < 300) ||
          304 === e.status ||
          0 === e.status
        )
      },
      load: function(n, r, o) {
        var i = new XMLHttpRequest()
        return (
          (e.flags.debug || e.flags.bust) && (n += '?' + Math.random()),
          i.open('GET', n, t.async),
          i.addEventListener('readystatechange', function(e) {
            if (4 === i.readyState) {
              var n = null
              try {
                var a = i.getResponseHeader('Location')
                a && (n = '/' === a.substr(0, 1) ? location.origin + a : a)
              } catch (e) {
                console.error(e.message)
              }
              r.call(o, !t.ok(i) && i, i.response || i.responseText, n)
            }
          }),
          i.send(),
          i
        )
      },
      loadDocument: function(e, t, n) {
        this.load(e, t, n).responseType = 'document'
      }
    }
    e.xhr = t
  }),
  window.HTMLImports.addModule(function(e) {
    var t = e.xhr,
      n = e.flags,
      r = function(e, t) {
        ;(this.cache = {}),
          (this.onload = e),
          (this.oncomplete = t),
          (this.inflight = 0),
          (this.pending = {})
      }
    ;(r.prototype = {
      addNodes: function(e) {
        this.inflight += e.length
        for (var t, n = 0, r = e.length; n < r && (t = e[n]); n++)
          this.require(t)
        this.checkDone()
      },
      addNode: function(e) {
        this.inflight++, this.require(e), this.checkDone()
      },
      require: function(e) {
        var t = e.src || e.href
        ;(e.__nodeUrl = t), this.dedupe(t, e) || this.fetch(t, e)
      },
      dedupe: function(e, t) {
        if (this.pending[e]) return this.pending[e].push(t), !0
        return this.cache[e]
          ? (this.onload(e, t, this.cache[e]), this.tail(), !0)
          : ((this.pending[e] = [t]), !1)
      },
      fetch: function(e, r) {
        if ((n.load && console.log('fetch', e, r), e))
          if (e.match(/^data:/)) {
            var o = e.split(','),
              i = o[0],
              a = o[1]
            ;(a = i.indexOf(';base64') > -1 ? atob(a) : decodeURIComponent(a)),
              setTimeout(
                function() {
                  this.receive(e, r, null, a)
                }.bind(this),
                0
              )
          } else {
            var s = function(t, n, o) {
              this.receive(e, r, t, n, o)
            }.bind(this)
            t.load(e, s)
          }
        else
          setTimeout(
            function() {
              this.receive(e, r, { error: 'href must be specified' }, null)
            }.bind(this),
            0
          )
      },
      receive: function(e, t, n, r, o) {
        this.cache[e] = r
        for (
          var i, a = this.pending[e], s = 0, d = a.length;
          s < d && (i = a[s]);
          s++
        )
          this.onload(e, i, r, n, o), this.tail()
        this.pending[e] = null
      },
      tail: function() {
        --this.inflight, this.checkDone()
      },
      checkDone: function() {
        this.inflight || this.oncomplete()
      }
    }),
      (e.Loader = r)
  }),
  window.HTMLImports.addModule(function(e) {
    var t = function(e) {
      ;(this.addCallback = e),
        (this.mo = new MutationObserver(this.handler.bind(this)))
    }
    ;(t.prototype = {
      handler: function(e) {
        for (var t, n = 0, r = e.length; n < r && (t = e[n]); n++)
          'childList' === t.type &&
            t.addedNodes.length &&
            this.addedNodes(t.addedNodes)
      },
      addedNodes: function(e) {
        this.addCallback && this.addCallback(e)
        for (var t, n = 0, r = e.length; n < r && (t = e[n]); n++)
          t.children && t.children.length && this.addedNodes(t.children)
      },
      observe: function(e) {
        this.mo.observe(e, { childList: !0, subtree: !0 })
      }
    }),
      (e.Observer = t)
  }),
  window.HTMLImports.addModule(function(e) {
    function t(e) {
      return 'link' === e.localName && e.rel === u
    }
    function n(e) {
      var t = r(e)
      return 'data:text/javascript;charset=utf-8,' + encodeURIComponent(t)
    }
    function r(e) {
      return e.textContent + o(e)
    }
    function o(e) {
      var t = e.ownerDocument
      t.__importedScripts = t.__importedScripts || 0
      var n = e.ownerDocument.baseURI,
        r = t.__importedScripts ? '-' + t.__importedScripts : ''
      return t.__importedScripts++, '\n//# sourceURL=' + n + r + '.js\n'
    }
    function i(e) {
      var t = e.ownerDocument.createElement('style')
      return (t.textContent = e.textContent), a.resolveUrlsInStyle(t), t
    }
    var a = e.path,
      s = e.rootDocument,
      d = e.flags,
      c = e.isIE,
      u = e.IMPORT_LINK_TYPE,
      l = 'link[rel=' + u + ']',
      h = {
        documentSelectors: l,
        importsSelectors: [
          l,
          'link[rel=stylesheet]:not([type])',
          'style:not([type])',
          'script:not([type])',
          'script[type="application/javascript"]',
          'script[type="text/javascript"]'
        ].join(','),
        map: { link: 'parseLink', script: 'parseScript', style: 'parseStyle' },
        dynamicElements: [],
        parseNext: function() {
          var e = this.nextToParse()
          e && this.parse(e)
        },
        parse: function(e) {
          if (this.isParsed(e))
            return void (
              d.parse && console.log('[%s] is already parsed', e.localName)
            )
          var t = this[this.map[e.localName]]
          t && (this.markParsing(e), t.call(this, e))
        },
        parseDynamic: function(e, t) {
          this.dynamicElements.push(e), t || this.parseNext()
        },
        markParsing: function(e) {
          d.parse && console.log('parsing', e), (this.parsingElement = e)
        },
        markParsingComplete: function(e) {
          ;(e.__importParsed = !0),
            this.markDynamicParsingComplete(e),
            e.__importElement &&
              ((e.__importElement.__importParsed = !0),
              this.markDynamicParsingComplete(e.__importElement)),
            (this.parsingElement = null),
            d.parse && console.log('completed', e)
        },
        markDynamicParsingComplete: function(e) {
          var t = this.dynamicElements.indexOf(e)
          t >= 0 && this.dynamicElements.splice(t, 1)
        },
        parseImport: function(e) {
          if (
            ((e['import'] = e.__doc),
            window.HTMLImports.__importsParsingHook &&
              window.HTMLImports.__importsParsingHook(e),
            e['import'] && (e['import'].__importParsed = !0),
            this.markParsingComplete(e),
            e.__resource && !e.__error
              ? e.dispatchEvent(new CustomEvent('load', { bubbles: !1 }))
              : e.dispatchEvent(new CustomEvent('error', { bubbles: !1 })),
            e.__pending)
          )
            for (var t; e.__pending.length; )
              (t = e.__pending.shift()), t && t({ target: e })
          this.parseNext()
        },
        parseLink: function(e) {
          t(e) ? this.parseImport(e) : ((e.href = e.href), this.parseGeneric(e))
        },
        parseStyle: function(e) {
          var t = e
          ;(e = i(e)),
            (t.__appliedElement = e),
            (e.__importElement = t),
            this.parseGeneric(e)
        },
        parseGeneric: function(e) {
          this.trackElement(e), this.addElementToDocument(e)
        },
        rootImportForElement: function(e) {
          for (var t = e; t.ownerDocument.__importLink; )
            t = t.ownerDocument.__importLink
          return t
        },
        addElementToDocument: function(e) {
          var t = this.rootImportForElement(e.__importElement || e)
          t.parentNode.insertBefore(e, t)
        },
        trackElement: function(e, t) {
          var n = this,
            r = function(o) {
              e.removeEventListener('load', r),
                e.removeEventListener('error', r),
                t && t(o),
                n.markParsingComplete(e),
                n.parseNext()
            }
          if (
            (e.addEventListener('load', r),
            e.addEventListener('error', r),
            c && 'style' === e.localName)
          ) {
            var o = !1
            if (e.textContent.indexOf('@import') == -1) o = !0
            else if (e.sheet) {
              o = !0
              for (
                var i, a = e.sheet.cssRules, s = a ? a.length : 0, d = 0;
                d < s && (i = a[d]);
                d++
              )
                i.type === CSSRule.IMPORT_RULE &&
                  (o = o && Boolean(i.styleSheet))
            }
            o &&
              setTimeout(function() {
                e.dispatchEvent(new CustomEvent('load', { bubbles: !1 }))
              })
          }
        },
        parseScript: function(t) {
          var r = document.createElement('script')
          ;(r.__importElement = t),
            (r.src = t.src ? t.src : n(t)),
            (e.currentScript = t),
            this.trackElement(r, function(t) {
              r.parentNode && r.parentNode.removeChild(r),
                (e.currentScript = null)
            }),
            this.addElementToDocument(r)
        },
        nextToParse: function() {
          return (
            (this._mayParse = []),
            !this.parsingElement &&
              (this.nextToParseInDoc(s) || this.nextToParseDynamic())
          )
        },
        nextToParseInDoc: function(e, n) {
          if (e && this._mayParse.indexOf(e) < 0) {
            this._mayParse.push(e)
            for (
              var r,
                o = e.querySelectorAll(this.parseSelectorsForNode(e)),
                i = 0,
                a = o.length;
              i < a && (r = o[i]);
              i++
            )
              if (!this.isParsed(r))
                return this.hasResource(r)
                  ? t(r)
                    ? this.nextToParseInDoc(r.__doc, r)
                    : r
                  : void 0
          }
          return n
        },
        nextToParseDynamic: function() {
          return this.dynamicElements[0]
        },
        parseSelectorsForNode: function(e) {
          var t = e.ownerDocument || e
          return t === s ? this.documentSelectors : this.importsSelectors
        },
        isParsed: function(e) {
          return e.__importParsed
        },
        needsDynamicParsing: function(e) {
          return this.dynamicElements.indexOf(e) >= 0
        },
        hasResource: function(e) {
          return !t(e) || void 0 !== e.__doc
        }
      }
    ;(e.parser = h), (e.IMPORT_SELECTOR = l)
  }),
  window.HTMLImports.addModule(function(e) {
    function t(e) {
      return n(e, a)
    }
    function n(e, t) {
      return 'link' === e.localName && e.getAttribute('rel') === t
    }
    function r(e) {
      return !!Object.getOwnPropertyDescriptor(e, 'baseURI')
    }
    function o(e, t) {
      var n = document.implementation.createHTMLDocument(a)
      n._URL = t
      var o = n.createElement('base')
      o.setAttribute('href', t),
        n.baseURI || r(n) || Object.defineProperty(n, 'baseURI', { value: t })
      var i = n.createElement('meta')
      return (
        i.setAttribute('charset', 'utf-8'),
        n.head.appendChild(i),
        n.head.appendChild(o),
        (n.body.innerHTML = e),
        window.HTMLTemplateElement &&
          HTMLTemplateElement.bootstrap &&
          HTMLTemplateElement.bootstrap(n),
        n
      )
    }
    var i = e.flags,
      a = e.IMPORT_LINK_TYPE,
      s = e.IMPORT_SELECTOR,
      d = e.rootDocument,
      c = e.Loader,
      u = e.Observer,
      l = e.parser,
      h = {
        documents: {},
        documentPreloadSelectors: s,
        importsPreloadSelectors: [s].join(','),
        loadNode: function(e) {
          m.addNode(e)
        },
        loadSubtree: function(e) {
          var t = this.marshalNodes(e)
          m.addNodes(t)
        },
        marshalNodes: function(e) {
          return e.querySelectorAll(this.loadSelectorsForNode(e))
        },
        loadSelectorsForNode: function(e) {
          var t = e.ownerDocument || e
          return t === d
            ? this.documentPreloadSelectors
            : this.importsPreloadSelectors
        },
        loaded: function(e, n, r, a, s) {
          if (
            (i.load && console.log('loaded', e, n),
            (n.__resource = r),
            (n.__error = a),
            t(n))
          ) {
            var d = this.documents[e]
            void 0 === d &&
              ((d = a ? null : o(r, s || e)),
              d && ((d.__importLink = n), this.bootDocument(d)),
              (this.documents[e] = d)),
              (n.__doc = d)
          }
          l.parseNext()
        },
        bootDocument: function(e) {
          this.loadSubtree(e), this.observer.observe(e), l.parseNext()
        },
        loadedAll: function() {
          l.parseNext()
        }
      },
      m = new c(h.loaded.bind(h), h.loadedAll.bind(h))
    if (((h.observer = new u()), !document.baseURI)) {
      var p = {
        get: function() {
          var e = document.querySelector('base')
          return e ? e.href : window.location.href
        },
        configurable: !0
      }
      Object.defineProperty(document, 'baseURI', p),
        Object.defineProperty(d, 'baseURI', p)
    }
    ;(e.importer = h), (e.importLoader = m)
  }),
  window.HTMLImports.addModule(function(e) {
    var t = e.parser,
      n = e.importer,
      r = {
        added: function(e) {
          for (var r, o, i, a, s = 0, d = e.length; s < d && (a = e[s]); s++)
            r || ((r = a.ownerDocument), (o = t.isParsed(r))),
              (i = this.shouldLoadNode(a)),
              i && n.loadNode(a),
              this.shouldParseNode(a) && o && t.parseDynamic(a, i)
        },
        shouldLoadNode: function(e) {
          return 1 === e.nodeType && o.call(e, n.loadSelectorsForNode(e))
        },
        shouldParseNode: function(e) {
          return 1 === e.nodeType && o.call(e, t.parseSelectorsForNode(e))
        }
      }
    n.observer.addCallback = r.added.bind(r)
    var o =
      HTMLElement.prototype.matches ||
      HTMLElement.prototype.matchesSelector ||
      HTMLElement.prototype.webkitMatchesSelector ||
      HTMLElement.prototype.mozMatchesSelector ||
      HTMLElement.prototype.msMatchesSelector
  }),
  (function(e) {
    function t() {
      window.HTMLImports.importer.bootDocument(r)
    }
    var n = e.initializeModules
    e.isIE
    if (!e.useNative) {
      n()
      var r = e.rootDocument
      'complete' === document.readyState ||
      ('interactive' === document.readyState && !window.attachEvent)
        ? t()
        : document.addEventListener('DOMContentLoaded', t)
    }
  })(window.HTMLImports)
