import "regenerator-runtime/runtime.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

import "core-js/modules/esnext.global-this.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array-buffer.slice.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.typed-array.uint8-array.js";
import "core-js/modules/es.typed-array.copy-within.js";
import "core-js/modules/es.typed-array.every.js";
import "core-js/modules/es.typed-array.fill.js";
import "core-js/modules/es.typed-array.filter.js";
import "core-js/modules/es.typed-array.find.js";
import "core-js/modules/es.typed-array.find-index.js";
import "core-js/modules/es.typed-array.for-each.js";
import "core-js/modules/es.typed-array.includes.js";
import "core-js/modules/es.typed-array.index-of.js";
import "core-js/modules/es.typed-array.iterator.js";
import "core-js/modules/es.typed-array.join.js";
import "core-js/modules/es.typed-array.last-index-of.js";
import "core-js/modules/es.typed-array.map.js";
import "core-js/modules/es.typed-array.reduce.js";
import "core-js/modules/es.typed-array.reduce-right.js";
import "core-js/modules/es.typed-array.reverse.js";
import "core-js/modules/es.typed-array.set.js";
import "core-js/modules/es.typed-array.slice.js";
import "core-js/modules/es.typed-array.some.js";
import "core-js/modules/es.typed-array.sort.js";
import "core-js/modules/es.typed-array.subarray.js";
import "core-js/modules/es.typed-array.to-locale-string.js";
import "core-js/modules/es.typed-array.to-string.js";
import "core-js/modules/es.typed-array.uint16-array.js";
import "core-js/modules/es.typed-array.uint32-array.js";
import "core-js/modules/es.typed-array.int32-array.js";
import "core-js/modules/es.data-view.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.splice.js";
import "core-js/modules/es.array-buffer.constructor.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.string.starts-with.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.promise.js";
!function () {
  "use strict";

  var t = globalThis.Array,
      e = globalThis.Object,
      n = globalThis.Math,
      s = globalThis.Error,
      a = globalThis.Uint8Array,
      r = globalThis.Uint16Array,
      i = globalThis.Uint32Array,
      c = globalThis.Int32Array,
      o = globalThis.DataView,
      l = globalThis.TextEncoder,
      h = globalThis.crypto,
      p = globalThis.postMessage,
      d = [];

  for (var _t = 0; 256 > _t; _t++) {
    var _e = _t;

    for (var _t2 = 0; 8 > _t2; _t2++) {
      1 & _e ? _e = _e >>> 1 ^ 3988292384 : _e >>>= 1;
    }

    d[_t] = _e;
  }

  var u = /*#__PURE__*/function () {
    function u(t) {
      _classCallCheck(this, u);

      this.crc = t || -1;
    }

    _createClass(u, [{
      key: "append",
      value: function append(t) {
        var e = 0 | this.crc;

        for (var _n = 0, _s = 0 | t.length; _s > _n; _n++) {
          e = e >>> 8 ^ d[255 & (e ^ t[_n])];
        }

        this.crc = e;
      }
    }, {
      key: "get",
      value: function get() {
        return ~this.crc;
      }
    }]);

    return u;
  }();

  var f = {
    concat: function concat(t, e) {
      if (0 === t.length || 0 === e.length) return t.concat(e);
      var n = t[t.length - 1],
          s = f.getPartial(n);
      return 32 === s ? t.concat(e) : f._shiftRight(e, s, 0 | n, t.slice(0, t.length - 1));
    },
    bitLength: function bitLength(t) {
      var e = t.length;
      if (0 === e) return 0;
      var n = t[e - 1];
      return 32 * (e - 1) + f.getPartial(n);
    },
    clamp: function clamp(t, e) {
      if (32 * t.length < e) return t;
      var s = (t = t.slice(0, n.ceil(e / 32))).length;
      return e &= 31, s > 0 && e && (t[s - 1] = f.partial(e, t[s - 1] & 2147483648 >> e - 1, 1)), t;
    },
    partial: function partial(t, e, n) {
      return 32 === t ? e : (n ? 0 | e : e << 32 - t) + 1099511627776 * t;
    },
    getPartial: function getPartial(t) {
      return n.round(t / 1099511627776) || 32;
    },
    _shiftRight: function _shiftRight(t, e, n, s) {
      for (void 0 === s && (s = []); e >= 32; e -= 32) {
        s.push(n), n = 0;
      }

      if (0 === e) return s.concat(t);

      for (var _a = 0; _a < t.length; _a++) {
        s.push(n | t[_a] >>> e), n = t[_a] << 32 - e;
      }

      var a = t.length ? t[t.length - 1] : 0,
          r = f.getPartial(a);
      return s.push(f.partial(e + r & 31, e + r > 32 ? n : s.pop(), 1)), s;
    }
  },
      g = {
    bytes: {
      fromBits: function fromBits(t) {
        var e = f.bitLength(t) / 8,
            n = new a(e);
        var s;

        for (var _a2 = 0; e > _a2; _a2++) {
          0 == (3 & _a2) && (s = t[_a2 / 4]), n[_a2] = s >>> 24, s <<= 8;
        }

        return n;
      },
      toBits: function toBits(t) {
        var e = [];
        var n,
            s = 0;

        for (n = 0; n < t.length; n++) {
          s = s << 8 | t[n], 3 == (3 & n) && (e.push(s), s = 0);
        }

        return 3 & n && e.push(f.partial(8 * (3 & n), s)), e;
      }
    }
  },
      w = {
    sha1: function sha1(t) {
      t ? (this._h = t._h.slice(0), this._buffer = t._buffer.slice(0), this._length = t._length) : this.reset();
    }
  };
  w.sha1.prototype = {
    blockSize: 512,
    reset: function reset() {
      var t = this;
      return t._h = this._init.slice(0), t._buffer = [], t._length = 0, t;
    },
    update: function update(t) {
      var e = this;
      "string" == typeof t && (t = g.utf8String.toBits(t));
      var n = e._buffer = f.concat(e._buffer, t),
          a = e._length,
          r = e._length = a + f.bitLength(t);
      if (r > 9007199254740991) throw new s("Cannot hash more than 2^53 - 1 bits");
      var c = new i(n);
      var o = 0;

      for (var _t3 = e.blockSize + a - (e.blockSize + a & e.blockSize - 1); r >= _t3; _t3 += e.blockSize) {
        e._block(c.subarray(16 * o, 16 * (o + 1))), o += 1;
      }

      return n.splice(0, 16 * o), e;
    },
    finalize: function finalize() {
      var t = this;
      var e = t._buffer;
      var s = t._h;
      e = f.concat(e, [f.partial(1, 1)]);

      for (var _t4 = e.length + 2; 15 & _t4; _t4++) {
        e.push(0);
      }

      for (e.push(n.floor(t._length / 4294967296)), e.push(0 | t._length); e.length;) {
        t._block(e.splice(0, 16));
      }

      return t.reset(), s;
    },
    _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
    _key: [1518500249, 1859775393, 2400959708, 3395469782],
    _f: function _f(t, e, n, s) {
      return t > 19 ? t > 39 ? t > 59 ? t > 79 ? void 0 : e ^ n ^ s : e & n | e & s | n & s : e ^ n ^ s : e & n | ~e & s;
    },
    _S: function _S(t, e) {
      return e << t | e >>> 32 - t;
    },
    _block: function _block(e) {
      var s = this,
          a = s._h,
          r = t(80);

      for (var _t5 = 0; 16 > _t5; _t5++) {
        r[_t5] = e[_t5];
      }

      var i = a[0],
          c = a[1],
          o = a[2],
          l = a[3],
          h = a[4];

      for (var _t6 = 0; 79 >= _t6; _t6++) {
        16 > _t6 || (r[_t6] = s._S(1, r[_t6 - 3] ^ r[_t6 - 8] ^ r[_t6 - 14] ^ r[_t6 - 16]));

        var _e2 = s._S(5, i) + s._f(_t6, c, o, l) + h + r[_t6] + s._key[n.floor(_t6 / 20)] | 0;

        h = l, l = o, o = s._S(30, c), c = i, i = _e2;
      }

      a[0] = a[0] + i | 0, a[1] = a[1] + c | 0, a[2] = a[2] + o | 0, a[3] = a[3] + l | 0, a[4] = a[4] + h | 0;
    }
  };

  var y = {
    getRandomValues: function getRandomValues(t) {
      var e = new i(t.buffer),
          s = function s(t) {
        var e = 987654321;
        var s = 4294967295;
        return function () {
          return e = 36969 * (65535 & e) + (e >> 16) & s, (((e << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s) / 4294967296 + .5) * (n.random() > .5 ? 1 : -1);
        };
      };

      for (var _a3, _r = 0; _r < t.length; _r += 4) {
        var _t7 = s(4294967296 * (_a3 || n.random()));

        _a3 = 987654071 * _t7(), e[_r / 4] = 4294967296 * _t7() | 0;
      }

      return t;
    }
  },
      _ = {
    importKey: function importKey(t) {
      return new _.hmacSha1(g.bytes.toBits(t));
    },
    pbkdf2: function pbkdf2(t, e, n, a) {
      if (n = n || 1e4, 0 > a || 0 > n) throw new s("invalid params to pbkdf2");
      var r = 1 + (a >> 5) << 2;
      var i, c, l, h, p;
      var d = new ArrayBuffer(r);
      var u = new o(d),
          w = 0;
      var y = f;

      for (e = g.bytes.toBits(e), p = 1; (r || 1) > w; p++) {
        for (i = c = t.encrypt(y.concat(e, [p])), l = 1; n > l; l++) {
          for (c = t.encrypt(c), h = 0; h < c.length; h++) {
            i[h] ^= c[h];
          }
        }

        for (l = 0; (r || 1) > w && l < i.length; l++) {
          u.setInt32(w, i[l]), w += 4;
        }
      }

      return d.slice(0, a / 8);
    },
    hmacSha1: /*#__PURE__*/function () {
      function hmacSha1(t) {
        _classCallCheck(this, hmacSha1);

        var e = this,
            n = e._hash = w.sha1,
            s = [[], []],
            a = n.prototype.blockSize / 32;
        e._baseHash = [new n(), new n()], t.length > a && (t = n.hash(t));

        for (var _e3 = 0; a > _e3; _e3++) {
          s[0][_e3] = 909522486 ^ t[_e3], s[1][_e3] = 1549556828 ^ t[_e3];
        }

        e._baseHash[0].update(s[0]), e._baseHash[1].update(s[1]), e._resultHash = new n(e._baseHash[0]);
      }

      _createClass(hmacSha1, [{
        key: "reset",
        value: function reset() {
          var t = this;
          t._resultHash = new t._hash(t._baseHash[0]), t._updated = !1;
        }
      }, {
        key: "update",
        value: function update(t) {
          this._updated = !0, this._resultHash.update(t);
        }
      }, {
        key: "digest",
        value: function digest() {
          var t = this,
              e = t._resultHash.finalize(),
              n = new t._hash(t._baseHash[1]).update(e).finalize();

          return t.reset(), n;
        }
      }, {
        key: "encrypt",
        value: function encrypt(t) {
          if (this._updated) throw new s("encrypt on already updated hmac called!");
          return this.update(t), this.digest(t);
        }
      }]);

      return hmacSha1;
    }()
  },
      m = "Invalid pasword",
      b = 16,
      k = {
    name: "PBKDF2"
  },
      v = e.assign({
    hash: {
      name: "HMAC"
    }
  }, k),
      z = e.assign({
    iterations: 1e3,
    hash: {
      name: "SHA-1"
    }
  }, k),
      C = ["deriveBits"],
      S = [8, 12, 16],
      B = [16, 24, 32],
      I = 10,
      D = [0, 0, 0, 0],
      V = void 0 !== h,
      H = V && void 0 !== h.subtle,
      K = g.bytes,
      A = /*#__PURE__*/function () {
    function A(t) {
      _classCallCheck(this, A);

      var e = this;
      e._tables = [[[], [], [], [], []], [[], [], [], [], []]], e._tables[0][0][0] || e._precompute();
      var n = e._tables[0][4],
          a = e._tables[1],
          r = t.length;
      var i,
          c,
          o,
          l = 1;
      if (4 !== r && 6 !== r && 8 !== r) throw new s("invalid aes key size");

      for (e._key = [c = t.slice(0), o = []], i = r; 4 * r + 28 > i; i++) {
        var _t8 = c[i - 1];
        (i % r == 0 || 8 === r && i % r == 4) && (_t8 = n[_t8 >>> 24] << 24 ^ n[_t8 >> 16 & 255] << 16 ^ n[_t8 >> 8 & 255] << 8 ^ n[255 & _t8], i % r == 0 && (_t8 = _t8 << 8 ^ _t8 >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), c[i] = c[i - r] ^ _t8;
      }

      for (var _t9 = 0; i; _t9++, i--) {
        var _e4 = c[3 & _t9 ? i : i - 4];
        o[_t9] = 4 >= i || 4 > _t9 ? _e4 : a[0][n[_e4 >>> 24]] ^ a[1][n[_e4 >> 16 & 255]] ^ a[2][n[_e4 >> 8 & 255]] ^ a[3][n[255 & _e4]];
      }
    }

    _createClass(A, [{
      key: "encrypt",
      value: function encrypt(t) {
        return this._crypt(t, 0);
      }
    }, {
      key: "decrypt",
      value: function decrypt(t) {
        return this._crypt(t, 1);
      }
    }, {
      key: "_precompute",
      value: function _precompute() {
        var t = this._tables[0],
            e = this._tables[1],
            n = t[4],
            s = e[4],
            a = [],
            r = [];
        var i, c, o, l;

        for (var _t10 = 0; 256 > _t10; _t10++) {
          r[(a[_t10] = _t10 << 1 ^ 283 * (_t10 >> 7)) ^ _t10] = _t10;
        }

        for (var _h = i = 0; !n[_h]; _h ^= c || 1, i = r[i] || 1) {
          var _r2 = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;

          _r2 = _r2 >> 8 ^ 255 & _r2 ^ 99, n[_h] = _r2, s[_r2] = _h, l = a[o = a[c = a[_h]]];

          var _p = 16843009 * l ^ 65537 * o ^ 257 * c ^ 16843008 * _h,
              _d = 257 * a[_r2] ^ 16843008 * _r2;

          for (var _n2 = 0; 4 > _n2; _n2++) {
            t[_n2][_h] = _d = _d << 24 ^ _d >>> 8, e[_n2][_r2] = _p = _p << 24 ^ _p >>> 8;
          }
        }

        for (var _n3 = 0; 5 > _n3; _n3++) {
          t[_n3] = t[_n3].slice(0), e[_n3] = e[_n3].slice(0);
        }
      }
    }, {
      key: "_crypt",
      value: function _crypt(t, e) {
        if (4 !== t.length) throw new s("invalid aes block size");
        var n = this._key[e],
            a = n.length / 4 - 2,
            r = [0, 0, 0, 0],
            i = this._tables[e],
            c = i[0],
            o = i[1],
            l = i[2],
            h = i[3],
            p = i[4];

        var d,
            u,
            f,
            g = t[0] ^ n[0],
            w = t[e ? 3 : 1] ^ n[1],
            y = t[2] ^ n[2],
            _ = t[e ? 1 : 3] ^ n[3],
            m = 4;

        for (var _t11 = 0; a > _t11; _t11++) {
          d = c[g >>> 24] ^ o[w >> 16 & 255] ^ l[y >> 8 & 255] ^ h[255 & _] ^ n[m], u = c[w >>> 24] ^ o[y >> 16 & 255] ^ l[_ >> 8 & 255] ^ h[255 & g] ^ n[m + 1], f = c[y >>> 24] ^ o[_ >> 16 & 255] ^ l[g >> 8 & 255] ^ h[255 & w] ^ n[m + 2], _ = c[_ >>> 24] ^ o[g >> 16 & 255] ^ l[w >> 8 & 255] ^ h[255 & y] ^ n[m + 3], m += 4, g = d, w = u, y = f;
        }

        for (var _t12 = 0; 4 > _t12; _t12++) {
          r[e ? 3 & -_t12 : _t12] = p[g >>> 24] << 24 ^ p[w >> 16 & 255] << 16 ^ p[y >> 8 & 255] << 8 ^ p[255 & _] ^ n[m++], d = g, g = w, w = y, y = _, _ = d;
        }

        return r;
      }
    }]);

    return A;
  }(),
      R = /*#__PURE__*/function () {
    function R(t, e) {
      _classCallCheck(this, R);

      this._prf = t, this._initIv = e, this._iv = e;
    }

    _createClass(R, [{
      key: "reset",
      value: function reset() {
        this._iv = this._initIv;
      }
    }, {
      key: "update",
      value: function update(t) {
        return this.calculate(this._prf, t, this._iv);
      }
    }, {
      key: "incWord",
      value: function incWord(t) {
        if (255 == (t >> 24 & 255)) {
          var _e5 = t >> 16 & 255,
              _n4 = t >> 8 & 255,
              _s2 = 255 & t;

          255 === _e5 ? (_e5 = 0, 255 === _n4 ? (_n4 = 0, 255 === _s2 ? _s2 = 0 : ++_s2) : ++_n4) : ++_e5, t = 0, t += _e5 << 16, t += _n4 << 8, t += _s2;
        } else t += 1 << 24;

        return t;
      }
    }, {
      key: "incCounter",
      value: function incCounter(t) {
        0 === (t[0] = this.incWord(t[0])) && (t[1] = this.incWord(t[1]));
      }
    }, {
      key: "calculate",
      value: function calculate(t, e, n) {
        var s;
        if (!(s = e.length)) return [];
        var a = f.bitLength(e);

        for (var _a4 = 0; s > _a4; _a4 += 4) {
          this.incCounter(n);

          var _s3 = t.encrypt(n);

          e[_a4] ^= _s3[0], e[_a4 + 1] ^= _s3[1], e[_a4 + 2] ^= _s3[2], e[_a4 + 3] ^= _s3[3];
        }

        return f.clamp(e, a);
      }
    }]);

    return R;
  }(),
      W = _.hmacSha1;

  var T = /*#__PURE__*/function () {
    function T(t, n, s) {
      _classCallCheck(this, T);

      e.assign(this, {
        password: t,
        signed: n,
        strength: s - 1,
        pendingInput: new a(0)
      });
    }

    _createClass(T, [{
      key: "append",
      value: function () {
        var _append = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var n, _a5;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  n = this;

                  if (!n.password) {
                    _context2.next = 9;
                    break;
                  }

                  _a5 = E(e, 0, S[n.strength] + 2);
                  _context2.next = 5;
                  return function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, e, n) {
                      var a, r;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return L(t, n, E(e, 0, S[t.strength]));

                            case 2:
                              a = E(e, S[t.strength]), r = t.keys.passwordVerification;

                              if (!(r[0] != a[0] || r[1] != a[1])) {
                                _context.next = 5;
                                break;
                              }

                              throw new s(m);

                            case 5:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x2, _x3, _x4) {
                      return _ref.apply(this, arguments);
                    };
                  }()(n, _a5, n.password);

                case 5:
                  n.password = null;
                  n.aesCtrGladman = new R(new A(n.keys.key), t.from(D));
                  n.hmac = new W(n.keys.authentication);
                  e = E(e, S[n.strength] + 2);

                case 9:
                  return _context2.abrupt("return", G(n, e, new a(e.length - I - (e.length - I) % b), 0, I, !0));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function append(_x) {
          return _append.apply(this, arguments);
        }

        return append;
      }()
    }, {
      key: "flush",
      value: function flush() {
        var t = this,
            e = t.pendingInput,
            n = E(e, 0, e.length - I),
            s = E(e, e.length - I);
        var r = new a(0);

        if (n.length) {
          var _e6 = K.toBits(n);

          t.hmac.update(_e6);

          var _s4 = t.aesCtrGladman.update(_e6);

          r = K.fromBits(_s4);
        }

        var i = !0;

        if (t.signed) {
          var _e7 = E(K.fromBits(t.hmac.digest()), 0, I);

          for (var _t13 = 0; I > _t13; _t13++) {
            _e7[_t13] != s[_t13] && (i = !1);
          }
        }

        return {
          valid: i,
          data: r
        };
      }
    }]);

    return T;
  }();

  var U = /*#__PURE__*/function () {
    function U(t, n) {
      _classCallCheck(this, U);

      e.assign(this, {
        password: t,
        strength: n - 1,
        pendingInput: new a(0)
      });
    }

    _createClass(U, [{
      key: "append",
      value: function () {
        var _append2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
          var n, s, r;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  n = this;
                  s = new a(0);
                  _context4.t0 = n.password;

                  if (!_context4.t0) {
                    _context4.next = 10;
                    break;
                  }

                  _context4.next = 6;
                  return function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, e) {
                      var n, s;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              n = (s = new a(S[t.strength]), V && "function" == typeof h.getRandomValues ? h.getRandomValues(s) : y.getRandomValues(s));
                              _context3.next = 3;
                              return L(t, e, n);

                            case 3:
                              return _context3.abrupt("return", P(n, t.keys.passwordVerification));

                            case 4:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x6, _x7) {
                      return _ref2.apply(this, arguments);
                    };
                  }()(n, n.password);

                case 6:
                  s = _context4.sent;
                  n.password = null;
                  n.aesCtrGladman = new R(new A(n.keys.key), t.from(D));
                  n.hmac = new W(n.keys.authentication);

                case 10:
                  r = new a(s.length + e.length - e.length % b);
                  return _context4.abrupt("return", (r.set(s, 0), G(n, e, r, s.length, 0)));

                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function append(_x5) {
          return _append2.apply(this, arguments);
        }

        return append;
      }()
    }, {
      key: "flush",
      value: function flush() {
        var t = this;
        var e = new a(0);

        if (t.pendingInput.length) {
          var _n5 = t.aesCtrGladman.update(K.toBits(t.pendingInput));

          t.hmac.update(_n5), e = K.fromBits(_n5);
        }

        var n = E(K.fromBits(t.hmac.digest()), 0, I);
        return {
          data: P(e, n),
          signature: n
        };
      }
    }]);

    return U;
  }();

  function G(t, e, n, s, r, i) {
    var c = e.length - r;
    var o;

    for (t.pendingInput.length && (e = P(t.pendingInput, e), n = function (t, e) {
      if (e && e > t.length) {
        var _n6 = t;
        (t = new a(e)).set(_n6, 0);
      }

      return t;
    }(n, c - c % b)), o = 0; c - b >= o; o += b) {
      var _a6 = K.toBits(E(e, o, o + b));

      i && t.hmac.update(_a6);

      var _r3 = t.aesCtrGladman.update(_a6);

      i || t.hmac.update(_r3), n.set(K.fromBits(_r3), o + s);
    }

    return t.pendingInput = E(e, o), n;
  }

  function L(_x8, _x9, _x10) {
    return _L.apply(this, arguments);
  }

  function _L() {
    _L = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(t, n, s) {
      var r, i, c, o;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              r = function (t) {
                if (void 0 === l) {
                  var _e11 = new a((t = unescape(encodeURIComponent(t))).length);

                  for (var _n10 = 0; _n10 < _e11.length; _n10++) {
                    _e11[_n10] = t.charCodeAt(_n10);
                  }

                  return _e11;
                }

                return new l().encode(t);
              }(n);

              _context15.next = 3;
              return function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(t, e, n, s, a) {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          return _context13.abrupt("return", V && H && "function" == typeof h.subtle.importKey ? h.subtle.importKey("raw", e, n, !1, a) : _.importKey(e));

                        case 1:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }));

                return function (_x16, _x17, _x18, _x19, _x20) {
                  return _ref9.apply(this, arguments);
                };
              }()(0, r, v, 0, C);

            case 3:
              i = _context15.sent;
              _context15.next = 6;
              return function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(t, e, n) {
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          if (!(V && H && "function" == typeof h.subtle.deriveBits)) {
                            _context14.next = 6;
                            break;
                          }

                          _context14.next = 3;
                          return h.subtle.deriveBits(t, e, n);

                        case 3:
                          _context14.t0 = _context14.sent;
                          _context14.next = 7;
                          break;

                        case 6:
                          _context14.t0 = _.pbkdf2(e, t.salt, z.iterations, n);

                        case 7:
                          return _context14.abrupt("return", _context14.t0);

                        case 8:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14);
                }));

                return function (_x21, _x22, _x23) {
                  return _ref10.apply(this, arguments);
                };
              }()(e.assign({
                salt: s
              }, z), i, 8 * (2 * B[t.strength] + 2));

            case 6:
              c = _context15.sent;
              o = new a(c);
              t.keys = {
                key: K.toBits(E(o, 0, B[t.strength])),
                authentication: K.toBits(E(o, B[t.strength], 2 * B[t.strength])),
                passwordVerification: E(o, 2 * B[t.strength])
              };

            case 9:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));
    return _L.apply(this, arguments);
  }

  function P(t, e) {
    var n = t;
    return t.length + e.length && (n = new a(t.length + e.length), n.set(t, 0), n.set(e, t.length)), n;
  }

  function E(t, e, n) {
    return t.subarray(e, n);
  }

  var M = /*#__PURE__*/function () {
    function M(t, n) {
      _classCallCheck(this, M);

      e.assign(this, {
        password: t,
        passwordVerification: n
      }), O(this, t);
    }

    _createClass(M, [{
      key: "append",
      value: function append(t) {
        var e = this;

        if (e.password) {
          var _n7 = x(e, t.subarray(0, 12));

          if (e.password = null, _n7[11] != e.passwordVerification) throw new s(m);
          t = t.subarray(12);
        }

        return x(e, t);
      }
    }, {
      key: "flush",
      value: function flush() {
        return {
          valid: !0,
          data: new a(0)
        };
      }
    }]);

    return M;
  }();

  var j = /*#__PURE__*/function () {
    function j(t, n) {
      _classCallCheck(this, j);

      e.assign(this, {
        password: t,
        passwordVerification: n
      }), O(this, t);
    }

    _createClass(j, [{
      key: "append",
      value: function append(t) {
        var e = this;
        var n, s;

        if (e.password) {
          e.password = null;

          var _r4 = h.getRandomValues(new a(12));

          _r4[11] = e.passwordVerification, n = new a(t.length + _r4.length), n.set(F(e, _r4), 0), s = 12;
        } else n = new a(t.length), s = 0;

        return n.set(F(e, t), s), n;
      }
    }, {
      key: "flush",
      value: function flush() {
        return {
          data: new a(0)
        };
      }
    }]);

    return j;
  }();

  function x(t, e) {
    var n = new a(e.length);

    for (var _s5 = 0; _s5 < e.length; _s5++) {
      n[_s5] = J(t) ^ e[_s5], q(t, n[_s5]);
    }

    return n;
  }

  function F(t, e) {
    var n = new a(e.length);

    for (var _s6 = 0; _s6 < e.length; _s6++) {
      n[_s6] = J(t) ^ e[_s6], q(t, e[_s6]);
    }

    return n;
  }

  function O(t, e) {
    t.keys = [305419896, 591751049, 878082192], t.crcKey0 = new u(t.keys[0]), t.crcKey2 = new u(t.keys[2]);

    for (var _n8 = 0; _n8 < e.length; _n8++) {
      q(t, e.charCodeAt(_n8));
    }
  }

  function q(t, e) {
    t.crcKey0.append([e]), t.keys[0] = ~t.crcKey0.get(), t.keys[1] = Q(t.keys[1] + N(t.keys[0])), t.keys[1] = Q(n.imul(t.keys[1], 134775813) + 1), t.crcKey2.append([t.keys[1] >>> 24]), t.keys[2] = ~t.crcKey2.get();
  }

  function J(t) {
    var e = 2 | t.keys[2];
    return N(n.imul(e, 1 ^ e) >>> 8);
  }

  function N(t) {
    return 255 & t;
  }

  function Q(t) {
    return 4294967295 & t;
  }

  var X = "deflate",
      Y = "inflate",
      Z = "Invalid signature";

  var $ = /*#__PURE__*/function () {
    function $(t, _ref3, _ref4) {
      var n = _ref3.signature,
          s = _ref3.password,
          a = _ref3.signed,
          r = _ref3.compressed,
          i = _ref3.zipCrypto,
          c = _ref3.passwordVerification,
          o = _ref3.encryptionStrength;
      var l = _ref4.chunkSize;

      _classCallCheck(this, $);

      var h = !!s;
      e.assign(this, {
        signature: n,
        encrypted: h,
        signed: a,
        compressed: r,
        inflate: r && new t({
          chunkSize: l
        }),
        crc32: a && new u(),
        zipCrypto: i,
        decrypt: h && i ? new M(s, c) : new T(s, a, o)
      });
    }

    _createClass($, [{
      key: "append",
      value: function () {
        var _append3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
          var e;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  e = this;
                  _context5.t0 = e.encrypted && t.length;

                  if (!_context5.t0) {
                    _context5.next = 6;
                    break;
                  }

                  _context5.next = 5;
                  return e.decrypt.append(t);

                case 5:
                  t = _context5.sent;

                case 6:
                  _context5.t1 = e.compressed && t.length;

                  if (!_context5.t1) {
                    _context5.next = 11;
                    break;
                  }

                  _context5.next = 10;
                  return e.inflate.append(t);

                case 10:
                  t = _context5.sent;

                case 11:
                  (!e.encrypted || e.zipCrypto) && e.signed && t.length && e.crc32.append(t);
                  return _context5.abrupt("return", t);

                case 13:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function append(_x11) {
          return _append3.apply(this, arguments);
        }

        return append;
      }()
    }, {
      key: "flush",
      value: function () {
        var _flush = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var t, e, n, _e8, _n9;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  t = this;
                  n = new a(0);

                  if (!t.encrypted) {
                    _context6.next = 7;
                    break;
                  }

                  _e8 = t.decrypt.flush();

                  if (_e8.valid) {
                    _context6.next = 6;
                    break;
                  }

                  throw new s(Z);

                case 6:
                  n = _e8.data;

                case 7:
                  if (!((!t.encrypted || t.zipCrypto) && t.signed)) {
                    _context6.next = 11;
                    break;
                  }

                  _n9 = new o(new a(4).buffer);

                  if (!(e = t.crc32.get(), _n9.setUint32(0, e), t.signature != _n9.getUint32(0, !1))) {
                    _context6.next = 11;
                    break;
                  }

                  throw new s(Z);

                case 11:
                  _context6.t0 = t.compressed;

                  if (!_context6.t0) {
                    _context6.next = 21;
                    break;
                  }

                  _context6.next = 15;
                  return t.inflate.append(n);

                case 15:
                  _context6.t1 = _context6.sent;

                  if (_context6.t1) {
                    _context6.next = 18;
                    break;
                  }

                  _context6.t1 = new a(0);

                case 18:
                  n = _context6.t1;
                  _context6.next = 21;
                  return t.inflate.flush();

                case 21:
                  return _context6.abrupt("return", {
                    data: n,
                    signature: e
                  });

                case 22:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function flush() {
          return _flush.apply(this, arguments);
        }

        return flush;
      }()
    }]);

    return $;
  }();

  var tt = /*#__PURE__*/function () {
    function tt(t, _ref5, _ref6) {
      var n = _ref5.encrypted,
          s = _ref5.signed,
          a = _ref5.compressed,
          r = _ref5.level,
          i = _ref5.zipCrypto,
          c = _ref5.password,
          o = _ref5.passwordVerification,
          l = _ref5.encryptionStrength;
      var h = _ref6.chunkSize;

      _classCallCheck(this, tt);

      e.assign(this, {
        encrypted: n,
        signed: s,
        compressed: a,
        deflate: a && new t({
          level: r || 5,
          chunkSize: h
        }),
        crc32: s && new u(),
        zipCrypto: i,
        encrypt: n && i ? new j(c, o) : new U(c, l)
      });
    }

    _createClass(tt, [{
      key: "append",
      value: function () {
        var _append4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t) {
          var e, n;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  e = this;
                  n = t;
                  _context7.t0 = e.compressed && t.length;

                  if (!_context7.t0) {
                    _context7.next = 7;
                    break;
                  }

                  _context7.next = 6;
                  return e.deflate.append(t);

                case 6:
                  n = _context7.sent;

                case 7:
                  _context7.t1 = e.encrypted && n.length;

                  if (!_context7.t1) {
                    _context7.next = 12;
                    break;
                  }

                  _context7.next = 11;
                  return e.encrypt.append(n);

                case 11:
                  n = _context7.sent;

                case 12:
                  (!e.encrypted || e.zipCrypto) && e.signed && t.length && e.crc32.append(t);
                  return _context7.abrupt("return", n);

                case 14:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function append(_x12) {
          return _append4.apply(this, arguments);
        }

        return append;
      }()
    }, {
      key: "flush",
      value: function () {
        var _flush2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          var t, e, n, _s7, _r5;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  t = this;
                  n = new a(0);
                  _context8.t0 = t.compressed;

                  if (!_context8.t0) {
                    _context8.next = 10;
                    break;
                  }

                  _context8.next = 6;
                  return t.deflate.flush();

                case 6:
                  _context8.t1 = _context8.sent;

                  if (_context8.t1) {
                    _context8.next = 9;
                    break;
                  }

                  _context8.t1 = new a(0);

                case 9:
                  n = _context8.t1;

                case 10:
                  if (!t.encrypted) {
                    _context8.next = 18;
                    break;
                  }

                  _context8.next = 13;
                  return t.encrypt.append(n);

                case 13:
                  n = _context8.sent;
                  _s7 = t.encrypt.flush();
                  e = _s7.signature;
                  _r5 = new a(n.length + _s7.data.length);
                  _r5.set(n, 0), _r5.set(_s7.data, n.length), n = _r5;

                case 18:
                  return _context8.abrupt("return", (t.encrypted && !t.zipCrypto || !t.signed || (e = t.crc32.get()), {
                    data: n,
                    signature: e
                  }));

                case 19:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function flush() {
          return _flush2.apply(this, arguments);
        }

        return flush;
      }()
    }]);

    return tt;
  }();

  var et = {
    init: function init(t) {
      t.scripts && t.scripts.length && importScripts.apply(void 0, t.scripts);
      var e = t.options;
      var n;
      self.initCodec && self.initCodec(), e.codecType.startsWith(X) ? n = self.Deflate : e.codecType.startsWith(Y) && (n = self.Inflate), nt = function (t, e, n) {
        return e.codecType.startsWith(X) ? new tt(t, e, n) : e.codecType.startsWith(Y) ? new $(t, e, n) : void 0;
      }(n, e, t.config);
    },
    append: function () {
      var _append5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(t) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return nt.append(t.data);

              case 2:
                _context9.t0 = _context9.sent;
                return _context9.abrupt("return", {
                  data: _context9.t0
                });

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function append(_x13) {
        return _append5.apply(this, arguments);
      }

      return append;
    }(),
    flush: function flush() {
      return nt.flush();
    }
  };
  var nt;

  function st(t, n, s) {
    return /*#__PURE__*/function () {
      function _class(r) {
        _classCallCheck(this, _class);

        var i = this;
        i.codec = new t(e.assign({}, n, r)), s(i.codec, function (t) {
          if (i.pendingData) {
            var _e9 = i.pendingData;
            i.pendingData = new a(_e9.length + t.length), i.pendingData.set(_e9, 0), i.pendingData.set(t, _e9.length);
          } else i.pendingData = new a(t);
        });
      }

      _createClass(_class, [{
        key: "append",
        value: function () {
          var _append6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(t) {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    return _context10.abrupt("return", (this.codec.push(t), r(this)));

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function append(_x14) {
            return _append6.apply(this, arguments);
          }

          return append;
        }()
      }, {
        key: "flush",
        value: function () {
          var _flush3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    return _context11.abrupt("return", (this.codec.push(new a(0), !0), r(this)));

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));

          function flush() {
            return _flush3.apply(this, arguments);
          }

          return flush;
        }()
      }]);

      return _class;
    }();

    function r(t) {
      if (t.pendingData) {
        var _e10 = t.pendingData;
        return t.pendingData = null, _e10;
      }

      return new a(0);
    }
  }

  addEventListener("message", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(t) {
      var e, n, s, _t14;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e = t.data, n = e.type, s = et[n];

              if (!s) {
                _context12.next = 16;
                break;
              }

              _context12.prev = 2;
              e.data && (e.data = new a(e.data));
              _context12.next = 6;
              return s(e);

            case 6:
              _context12.t0 = _context12.sent;

              if (_context12.t0) {
                _context12.next = 9;
                break;
              }

              _context12.t0 = {};

            case 9:
              _t14 = _context12.t0;
              if (_t14.type = n, _t14.data) try {
                _t14.data = _t14.data.buffer, p(_t14, [_t14.data]);
              } catch (e) {
                p(_t14);
              } else p(_t14);
              _context12.next = 16;
              break;

            case 13:
              _context12.prev = 13;
              _context12.t1 = _context12["catch"](2);
              p({
                type: n,
                error: {
                  message: _context12.t1.message,
                  stack: _context12.t1.stack
                }
              });

            case 16:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[2, 13]]);
    }));

    return function (_x15) {
      return _ref7.apply(this, arguments);
    };
  }()), self.initCodec = function () {
    var _ref8 = function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n = arguments.length > 2 ? arguments[2] : undefined;
      return {
        Deflate: st(t.Deflate, e.deflate, n),
        Inflate: st(t.Inflate, e.inflate, n)
      };
    }(pako, {
      deflate: {
        raw: !0
      },
      inflate: {
        raw: !0
      }
    }, function (t, e) {
      return t.onData = e;
    }),
        t = _ref8.Deflate,
        e = _ref8.Inflate;

    self.Deflate = t, self.Inflate = e;
  };
}();