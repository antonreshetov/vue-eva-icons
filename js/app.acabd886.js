(function (t) { function e (e) { for (var i, s, r = e[0], c = e[1], l = e[2], v = 0, p = []; v < r.length; v++)s = r[v], a[s] && p.push(a[s][0]), a[s] = 0; for (i in c)Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]); u && u(e); while (p.length)p.shift()(); return o.push.apply(o, l || []), n() } function n () { for (var t, e = 0; e < o.length; e++) { for (var n = o[e], i = !0, r = 1; r < n.length; r++) { var c = n[r]; a[c] !== 0 && (i = !1) }i && (o.splice(e--, 1), t = s(s.s = n[0])) } return t } var i = {}; var a = { app: 0 }; var o = []; function s (e) { if (i[e]) return i[e].exports; var n = i[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports }s.m = t, s.c = i, s.d = function (t, e, n) { s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, s.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, s.t = function (t, e) { if (1 & e && (t = s(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var n = Object.create(null); if (s.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var i in t)s.d(n, i, function (e) { return t[e] }.bind(null, i)); return n }, s.n = function (t) { var e = t && t.__esModule ? function () { return t['default'] } : function () { return t }; return s.d(e, 'a', e), e }, s.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, s.p = '/vue-eva-icons/'; var r = window['webpackJsonp'] = window['webpackJsonp'] || []; var c = r.push.bind(r); r.push = e, r = r.slice(); for (var l = 0; l < r.length; l++)e(r[l]); var u = c; o.push([0, 'chunk-vendors']), n() })({ 0: function (t, e, n) { t.exports = n('56d7') }, '087e': function (t, e, n) { 'use strict'; var i = n('2ac7'); var a = n.n(i); a.a }, '2ac7': function (t, e, n) {}, '2e7d': function (t, e, n) {}, '56d7': function (t, e, n) { 'use strict'; n.r(e); n('cadf'), n('551c'), n('097d'); var i = n('2b0e'); var a = function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { attrs: { id: 'app' } }, [n('div', { staticClass: 'header' }, [n('span', [t._v('support the developer, put a star to')]), n('a', { attrs: { href: 'https://github.com/antonreshetov/vue-eva-icons', target: '_blank' } }, [n('app-button', [n('eva-icon', { attrs: { name: 'github' } }), t._v('GitHub\n      ')], 1)], 1), n('span', [t._v('repo :)')]), n('div', { staticClass: 'carbonads' })]), n('h1', [t._v('\n    Vue Eva Icons\n    '), n('span', { staticClass: 'version' }, [t._v(t._s(t.version))])]), n('p', [t._v('\n    Simply beautiful open source\n    Eva icons as Vue components.\n  ')]), t._m(0), n('div', { staticClass: 'demo' }, [n('div', { staticClass: 'tag' }, [t._v('<eva-icon name="github" animation="pulse" fill="limegreen"></eva-icon>')]), n('eva-icon', { attrs: { name: 'github', animation: 'pulse', fill: 'limegreen' } })], 1), n('div', { staticClass: 'search-input' }, [n('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.search, expression: 'search' }], staticClass: 'search-input__inner', attrs: { type: 'text', placeholder: 'Type to search' }, domProps: { value: t.search }, on: { input: function (e) { e.target.composing || (t.search = e.target.value) } } }), n('eva-icon', { attrs: { name: 'search' } })], 1), n('div', { staticClass: 'icons-toolbar' }, [n('div', { staticClass: 'icons-toolbar__col' }, [n('app-button-group', { model: { value: t.fill, callback: function (e) { t.fill = e }, expression: 'fill' } }, [n('app-button', { attrs: { name: 'fill' } }, [n('eva-icon', { attrs: { name: 'star' } }), t._v('Fill\n        ')], 1), n('app-button', { attrs: { name: 'outline' } }, [n('eva-icon', { attrs: { name: 'star-outline' } }), t._v('Outline\n        ')], 1)], 1)], 1), n('div', { staticClass: 'icons-toolbar__col icons-toolbar__col--right' }, [n('span', { staticClass: 'label' }, [t._v('Animation:')]), n('app-button-group', { model: { value: t.animation, callback: function (e) { t.animation = e }, expression: 'animation' } }, [n('app-button', { attrs: { name: 'zoom' } }, [n('eva-icon', { attrs: { name: 'maximize-outline' } }), t._v('Zoom\n        ')], 1), n('app-button', { attrs: { name: 'pulse' } }, [n('eva-icon', { attrs: { name: 'activity' } }), t._v('Pulse\n        ')], 1), n('app-button', { attrs: { name: 'shake' } }, [n('eva-icon', { attrs: { name: 'radio' } }), t._v('Shake\n        ')], 1), n('app-button', { attrs: { name: 'flip' } }, [n('eva-icon', { attrs: { name: 'flip-2' } }), t._v('Flip\n        ')], 1)], 1)], 1)]), n('div', { staticClass: 'desc right' }, [t._v('Click by icon to copy html tag of component')]), n('div', { staticClass: 'icons' }, [t.fill === 'fill' ? t._l(t.filled, function (e) { return n('div', { key: e.name, staticClass: 'icons__item', on: { click: function (n) { t.onCopy(e.name) } } }, [n('div', { staticClass: 'tooltip' }, [t._v(t._s(e.name))]), n('eva-icon', { attrs: { name: e.name, animation: t.animation, fill: '#409eff' } })], 1) }) : t._e(), t.fill === 'outline' ? t._l(t.outline, function (e) { return n('div', { key: e.name, staticClass: 'icons__item', on: { click: function (n) { t.onCopy(e.name) } } }, [n('div', { staticClass: 'tooltip' }, [t._v(t._s(e.name))]), n('eva-icon', { attrs: { name: e.name, animation: t.animation, fill: '#409eff' } })], 1) }) : t._e()], 2), t.isNoResult ? n('div', { staticClass: 'no-result' }, [t._v('Sorry, no result')]) : t._e(), n('transition', { attrs: { name: 'fade' } }, [t.alert ? n('div', { staticClass: 'overlay' }, [n('h3', [t._v('Tag copied')])]) : t._e()]), n('textarea', { ref: 'html', staticStyle: { opacity: '0' }, domProps: { innerHTML: t._s(t.html) } }), t._m(1)], 1) }; var o = [function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('p', [t._v('\n    Documentation\n    '), n('a', { attrs: { href: 'https://github.com/antonreshetov/vue-eva-icons#vue-eva-icons' } }, [t._v('here')]), t._v('.\n  ')]) }, function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'vfc-project' }, [n('div', { staticClass: 'vfc-project__inner' }, [n('div', { staticClass: 'desc' }, [t._v('Other cool icons')]), n('h4', [t._v('Vue Unicons')]), n('p', [t._v('1000+ Pixel-perfect svg icons for your next project')]), n('a', { attrs: { href: 'https://antonreshetov.github.io/vue-unicons/', target: '_blank' } }, [n('div', { staticClass: 'cta' }, [t._v('View project')])])])]) }]; var s = (n('7f7f'), n('386d'), n('3b2b'), n('ac6a'), n('456d'), n('66d7')); var r = function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'btn', class: { 'btn--active': t.isActive }, on: { click: t.onClick } }, [t._t('default')], 2) }; var c = []; var l = { name: 'AppButton', props: { name: { type: String, default: void 0 } }, computed: { isActive: function () { return this.$parent.active === this.name } }, methods: { onClick: function () { this.$parent.$emit('change', this.name) } } }; var u = l; var v = (n('087e'), n('2877')); var p = Object(v['a'])(u, r, c, !1, null, null, null); p.options.__file = 'Button.vue'; var d = p.exports; var f = function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'btn-group' }, [t._t('default')], 2) }; var m = []; var h = { name: 'AppButtonGroup', model: { prop: 'active', event: 'change' }, props: { active: { type: String, default: void 0 } }, data: function () { return {} } }; var b = h; var _ = (n('9471'), Object(v['a'])(b, f, m, !1, null, null, null)); _.options.__file = 'ButtonGroup.vue'; var g = _.exports; var y = n('9224').version; var C = { name: 'App', components: { AppButton: d, AppButtonGroup: g }, data: function () { return { eva: s['icons'], search: '', fill: 'fill', animation: 'zoom', html: '<div></div>', alert: !1, version: y } }, computed: { icons: function () { var t = this; return Object.keys(this.eva).map(function (e) { return t.eva[e] }) }, searchedIcons: function () { var t = new RegExp(this.search.toLowerCase()); return this.icons.filter(function (e) { return t.test(e.name) }) }, filled: function () { return this.searchedIcons.filter(function (t) { return !/outline/.test(t.name) }) }, outline: function () { return this.searchedIcons.filter(function (t) { return /outline/.test(t.name) }) }, isNoResult: function () { return this.filled.length === 0 && this.outline.length === 0 } }, mounted: function () { this.addCarbon() }, methods: { onCopy: function (t) { var e = this; this.html = '<eva-icon name="'.concat(t, '"></eva-icon>'), this.showAlert(), setTimeout(function () { e.$refs.html.select(), document.execCommand('copy') }, 10) }, showAlert: function () { var t = this; this.alert = !0, setTimeout(function () { t.alert = !1 }, 500) }, addCarbon: function () { var t = document.createElement('script'); t.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CK7DEK7I&placement=antonreshetovgithubio"'), t.setAttribute('id', '_carbonads_js'), document.querySelector('.carbonads').appendChild(t) } } }; var j = C; var w = (n('5c0b'), Object(v['a'])(j, a, o, !1, null, null, null)); w.options.__file = 'App.vue'; var x = w.exports; var k = function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('i', { staticClass: 'eva-hover' }, [n('svg', { staticClass: 'eva eva-animation', class: 'eva-icon-hover-' + t.animation, attrs: { xmlns: 'http://www.w3.org/2000/svg', width: t.width, height: t.height, viewBox: '0 0 24 24', fill: t.fill }, domProps: { innerHTML: t._s(t.icon) }, on: { click: function (e) { t.$emit('click') } } })]) }; var S = []; var O = (n('c5f6'), { name: 'EvaIcon', props: { name: { type: String, default: void 0 }, width: { type: [String, Number], default: 24 }, height: { type: [String, Number], default: 24 }, animation: { type: String, default: void 0 }, fill: { type: String, default: 'inherit' } }, computed: { icon: function () { return s['icons'][this.name] ? s['icons'][this.name].contents : void console.error('Name of icon is not correct') } } }); var A = O; var E = Object(v['a'])(A, k, S, !1, null, null, null); E.options.__file = 'EvaIcon.vue'; var $ = E.exports; var P = { install: function (t, e) { t.component($.name, $) } }; i['a'].config.productionTip = !1, i['a'].use(P), new i['a']({ render: function (t) { return t(x) } }).$mount('#app') }, '5c0b': function (t, e, n) { 'use strict'; var i = n('5e27'); var a = n.n(i); a.a }, '5e27': function (t, e, n) {}, 9224: function (t) { t.exports = { name: 'vue-eva-icons', description: 'Simply beautiful open source icons as Vue components', version: '1.1.0', private: !1, repository: { type: 'git', url: 'git+https://github.com/antonreshetov/vue-eva-icons.git' }, keywords: ['vue', 'vuejs', 'vue-component', 'vue-icons', 'components', 'icons'], main: 'dist/vue-eva.common.js', license: 'MIT', author: 'Anton Reshetov', scripts: { serve: 'vue-cli-service serve', build: 'npm run test:unit && vue-cli-service build --target lib --name vue-eva ./src/components/index.js', 'build:docs': 'vue-cli-service build --dest docs', lint: 'vue-cli-service lint', 'test:unit': 'vue-cli-service test:unit' }, dependencies: { 'eva-icons': '^1.1.0', vue: '^2.5.17' }, devDependencies: { '@vue/cli-plugin-babel': '^3.0.0', '@vue/cli-plugin-eslint': '^3.0.0', '@vue/cli-plugin-unit-jest': '^3.1.1', '@vue/cli-service': '^3.0.0', '@vue/eslint-config-standard': '^4.0.0', '@vue/test-utils': '^1.0.0-beta.20', 'babel-core': '7.0.0-bridge.0', 'babel-eslint': '^10.0.1', 'babel-jest': '^23.6.0', eslint: '^5.8.0', 'eslint-plugin-vue': '^5.0.0-0', 'lint-staged': '^8.1.0', 'node-sass': '^4.10.0', 'sass-loader': '^7.1.0', 'vue-template-compiler': '^2.5.17' }, gitHooks: { 'pre-commit': 'lint-staged' }, 'lint-staged': { '*.js': ['vue-cli-service lint', 'git add'], '*.vue': ['vue-cli-service lint', 'git add'] } } }, 9471: function (t, e, n) { 'use strict'; var i = n('2e7d'); var a = n.n(i); a.a } })
// # sourceMappingURL=app.acabd886.js.map
