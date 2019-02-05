var browsers = require('./test/browser/sauce-browsers.json')
module.exports = function(e) {
  'use strict'
  require('load-grunt-tasks')(e)
  var s = e.file.expand([
    'test/universal/**/*.js',
    'test/browser/**/*.js',
    '!test/browser/setup.js',
    '!test/browser/integration/*.js'
  ])
  e.initConfig({
    env: {
      nodeTests: ['test/universal/**/*.js', 'test/node/**/*.js'],
      browserTests: s,
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: 'test/coverage/instrument',
        urls: [
          'http://localhost:9999/test/unit.html',
          'http://localhost:9999/test/index.html'
        ]
      }
    },
    generate: { dest: './dist/modernizr-build.js' },
    copy: {
      'gh-pages': {
        files: [
          {
            expand: !0,
            src: [
              './**/*',
              '!./test/coverage/**',
              '!./node_modules/*grunt-*/**',
              '!./node_modules/**/node_modules/**'
            ],
            dest: 'gh-pages'
          }
        ]
      }
    },
    jscs: {
      src: [
        'Gruntfile.js',
        'src/*.js',
        'lib/*.js',
        'test/**/*.js',
        'feature-detects/**/*.js',
        '!src/html5printshiv.js',
        '!test/coverage/**/*.js',
        '!test/js/lib/**/*.js',
        '!src/html5shiv.js'
      ]
    },
    jshint: {
      options: {
        jshintrc: !0,
        ignores: ['src/html5printshiv.js', 'src/html5shiv.js']
      },
      files: [
        'Gruntfile.js',
        'src/*.js',
        'lib/*.js',
        'feature-detects/**/*.js'
      ],
      tests: {
        options: { jshintrc: !0 },
        files: {
          src: [
            '<%= env.nodeTests%>',
            '<%= env.browserTests %>',
            'test/browser/setup.js',
            'test/browser/integration/*.js'
          ]
        }
      }
    },
    clean: { dist: ['dist', 'test/coverage', 'test/*.html', 'gh-pages'] },
    jade: {
      compile: {
        options: {
          data: {
            unitTests: s,
            integrationTests: e.file.expand(['test/browser/integration/*.js'])
          }
        },
        files: {
          'test/unit.html': 'test/browser/unit.jade',
          'test/iframe.html': 'test/browser/iframe.jade',
          'test/index.html': 'test/browser/integration.jade'
        }
      }
    },
    connect: {
      server: {
        options: {
          middleware: function(s, t) {
            return [
              function(s, t, r) {
                var o = s.headers['user-agent']
                if ('/coverage/client' == s.url && 'POST' == s.method) {
                  var n = encodeURI(o.replace(/\//g, '-')),
                    i = ''
                  return (
                    s.on('data', function(e) {
                      i += e
                    }),
                    void s.on('end', function() {
                      e.file.write('test/coverage/reports/' + n + '.json', i),
                        t.end()
                    })
                  )
                }
                s.url.match(/^\/(src|lib)\//) &&
                  (s.url = '/test/coverage/instrument' + s.url),
                  r()
              },
              s['static'](t.base)
            ]
          },
          base: '',
          port: 9999
        }
      }
    },
    'saucelabs-custom': {
      all: {
        options: {
          urls: '<%= env.coverage.urls %>',
          testname: process.env.CI_BUILD_NUMBER || 'Modernizr Test',
          browsers: browsers,
          maxRetries: 3
        }
      }
    },
    mocha: { test: { options: { urls: '<%= env.coverage.urls %>', log: !0 } } },
    mochaTest: {
      test: { options: { reporter: 'dot' }, src: ['<%= env.nodeTests%>'] }
    },
    instrument: {
      files: ['src/**/*.js', 'lib/**/*.js'],
      options: { basePath: 'test/coverage/instrument/' }
    },
    storeCoverage: { options: { dir: 'test/coverage/reports' } },
    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: { type: 'lcov', dir: 'test/coverage/reports', print: 'detail' }
    },
    coveralls: {
      all: { src: 'test/coverage/reports/lcov.info', options: { force: !0 } }
    }
  }),
    e.registerMultiTask(
      'generate',
      'Create a version of Modernizr from Grunt',
      function() {
        var s = this.async(),
          t = require('./lib/config-all'),
          r = require('./lib/cli'),
          o = this.data
        r.build(t, function(t) {
          e.file.write(o, t), s()
        })
      }
    ),
    e.registerTask('nodeTests', ['mochaTest']),
    e.registerTask('browserTests', ['connect', 'mocha']),
    e.registerTask('build', ['clean', 'generate']),
    e.registerTask('lint', ['jshint', 'jscs']),
    e.registerTask('default', ['lint', 'build'])
  var t = ['clean', 'lint', 'jade', 'instrument', 'env:coverage', 'nodeTests']
  process.env.APPVEYOR
    ? e.registerTask('test', t)
    : 'true' !== process.env.BROWSER_COVERAGE
    ? e.registerTask('test', t.concat(['generate', 'browserTests']))
    : e.registerTask(
        'test',
        t.concat([
          'generate',
          'storeCoverage',
          'browserTests',
          'saucelabs-custom',
          'makeReport',
          'coveralls'
        ])
      )
}
