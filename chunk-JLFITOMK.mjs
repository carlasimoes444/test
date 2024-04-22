import {
  b as vn,
  d as bn,
  e as xn,
  g as wn,
  j as Sn,
  k as Cn,
  l as Pn,
} from "./chunk-O5WB36OF.mjs";
import { a as u, b as St } from "./chunk-BQSGRCRV.mjs";
import {
  $ as ue,
  A as dn,
  B as un,
  C as xt,
  D as fn,
  E as ce,
  F as pn,
  K as de,
  O as zt,
  S as o,
  V as wt,
  X as mn,
  Y as qt,
  b as Ot,
  c as ae,
  ca as fe,
  d as Ut,
  f as $t,
  g as Bt,
  h as cn,
  j as bt,
  k as ie,
  l as H,
  la as hn,
  m as se,
  n as Ae,
  o as ct,
  oa as pe,
  p as E,
  q as K,
  qa as gn,
  ra as Ft,
  s as At,
  t as ze,
  ua as yn,
  va as me,
  w as W,
  x as ht,
  y as le,
  z as dt,
} from "./chunk-4GKU57PD.mjs";
import { c as O } from "./chunk-ELYU6EKT.mjs";
var Yt = (t) => t;
var he = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 };
function Fe(t, e) {
  return e ? t * (1e3 / e) : 0;
}
var Tn = (t, e, r) =>
    (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
  fr = 1e-7,
  pr = 12;
function mr(t, e, r, n, a) {
  let s,
    l,
    p = 0;
  do (l = e + (r - e) / 2), (s = Tn(l, n, a) - t), s > 0 ? (r = l) : (e = l);
  while (Math.abs(s) > fr && ++p < pr);
  return l;
}
function Zt(t, e, r, n) {
  if (t === e && r === n) return Yt;
  let a = (s) => mr(s, 0, 1, t, r);
  return (s) => (s === 0 || s === 1 ? s : Tn(a(s), e, n));
}
var qo = {
  ease: Zt(0.25, 0.1, 0.25, 1),
  "ease-in": Zt(0.42, 0, 1, 1),
  "ease-in-out": Zt(0.42, 0, 0.58, 1),
  "ease-out": Zt(0, 0, 0.58, 1),
};
function Vn(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      e.indexOf(n) < 0 &&
      (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, n[a]) &&
        (r[n[a]] = t[n[a]]);
  }
  return r;
}
var Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.warning = function () {};
Nt.invariant = function () {};
var Jo = Nt.__esModule,
  Qo = Nt.warning,
  br = Nt.invariant;
var xr = 5;
function ge(t, e, r) {
  let n = Math.max(e - xr, 0);
  return Fe(r - t(n), e - n);
}
var Dt = { stiffness: 100, damping: 10, mass: 1 },
  wr = (t = Dt.stiffness, e = Dt.damping, r = Dt.mass) =>
    e / (2 * Math.sqrt(t * r));
function Sr(t, e, r) {
  return (t < e && r >= e) || (t > e && r <= e);
}
var De = ({
    stiffness: t = Dt.stiffness,
    damping: e = Dt.damping,
    mass: r = Dt.mass,
    from: n = 0,
    to: a = 1,
    velocity: s = 0,
    restSpeed: l = 2,
    restDistance: p = 0.5,
  } = {}) => {
    s = s ? he.s(s) : 0;
    let c = { done: !1, hasReachedTarget: !1, current: n, target: a },
      i = a - n,
      f = Math.sqrt(t / r) / 1e3,
      d = wr(t, e, r),
      x;
    if (d < 1) {
      let g = f * Math.sqrt(1 - d * d);
      x = (h) =>
        a -
        Math.exp(-d * f * h) *
          (((d * f * i - s) / g) * Math.sin(g * h) + i * Math.cos(g * h));
    } else x = (g) => a - Math.exp(-f * g) * (i + (f * i - s) * g);
    return (g) => {
      c.current = x(g);
      let h = g === 0 ? s : ge(x, g, c.current),
        S = Math.abs(h) <= l,
        b = Math.abs(a - c.current) <= p;
      return (c.done = S && b), (c.hasReachedTarget = Sr(n, a, c.current)), c;
    };
  },
  On = ({
    from: t = 0,
    velocity: e = 0,
    power: r = 0.8,
    decay: n = 0.325,
    bounceDamping: a,
    bounceStiffness: s,
    changeTarget: l,
    min: p,
    max: c,
    restDistance: i = 0.5,
    restSpeed: f,
  }) => {
    n = he.ms(n);
    let d = { hasReachedTarget: !1, done: !1, current: t, target: t },
      x = (m) => (p !== void 0 && m < p) || (c !== void 0 && m > c),
      g = (m) =>
        p === void 0
          ? c
          : c === void 0 || Math.abs(p - m) < Math.abs(c - m)
          ? p
          : c,
      h = r * e,
      S = t + h,
      b = l === void 0 ? S : l(S);
    (d.target = b), b !== S && (h = b - t);
    let R = (m) => -h * Math.exp(-m / n),
      _ = (m) => b + R(m),
      I = (m) => {
        let C = R(m),
          N = _(m);
        (d.done = Math.abs(C) <= i), (d.current = d.done ? b : N);
      },
      F,
      B,
      G = (m) => {
        x(d.current) &&
          ((F = m),
          (B = De({
            from: d.current,
            to: g(d.current),
            velocity: ge(_, m, d.current),
            damping: a,
            stiffness: s,
            restDistance: i,
            restSpeed: f,
          })));
      };
    return (
      G(0),
      (m) => {
        let C = !1;
        return (
          !B && F === void 0 && ((C = !0), I(m), G(m)),
          F !== void 0 && m > F
            ? ((d.hasReachedTarget = !0), B(m - F))
            : ((d.hasReachedTarget = !1), !C && I(m), d)
        );
      }
    );
  },
  Ne = 10,
  Cr = 1e4;
function _n(t) {
  let e,
    r = Ne,
    n = t(0),
    a = [n.current];
  for (; !n.done && r < Cr; )
    (n = t(r)),
      a.push(n.done ? n.target : n.current),
      e === void 0 && n.hasReachedTarget && (e = r),
      (r += Ne);
  let s = r - Ne;
  return (
    a.length === 1 && a.push(n.current),
    { keyframes: a, duration: s / 1e3, overshootDuration: (e ?? s) / 1e3 }
  );
}
var Pr = ["", "X", "Y", "Z"],
  Tr = ["translate", "scale", "rotate", "skew"];
var kn = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  Vr = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: kn,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Yt },
    skew: kn,
  },
  Or = new Map(),
  _r = (t) => `--motion-${t}`,
  Bn = ["x", "y", "z"];
Tr.forEach((t) => {
  Pr.forEach((e) => {
    Bn.push(t + e), Or.set(_r(t + e), Vr[t]);
  });
});
var Ta = new Set(Bn);
var Mn = (t) => document.createElement("div").animate(t, { duration: 0.001 }),
  In = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Mn({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Mn({ opacity: [0, 1] }).finished,
  },
  Le = {},
  kr = {};
for (let t in In) kr[t] = () => (Le[t] === void 0 && (Le[t] = In[t]()), Le[t]);
function An(t, e) {
  var r;
  return (
    typeof t == "string"
      ? e
        ? (((r = e[t]) !== null && r !== void 0) ||
            (e[t] = document.querySelectorAll(t)),
          (t = e[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
function zn(t) {
  let e = new WeakMap();
  return (r = {}) => {
    let n = new Map(),
      a = (l = 0, p = 100, c = 0, i = !1) => {
        let f = `${l}-${p}-${c}-${i}`;
        return (
          n.has(f) ||
            n.set(
              f,
              t(
                Object.assign(
                  {
                    from: l,
                    to: p,
                    velocity: c,
                    restSpeed: i ? 0.05 : 2,
                    restDistance: i ? 0.01 : 0.5,
                  },
                  r
                )
              )
            ),
          n.get(f)
        );
      },
      s = (l) => (e.has(l) || e.set(l, _n(l)), e.get(l));
    return {
      createAnimation: (l, p, c, i, f) => {
        var d, x;
        let g,
          h = l.length;
        if (c && h <= 2 && l.every(Mr)) {
          let b = l[h - 1],
            R = h === 1 ? null : l[0],
            _ = 0,
            I = 0,
            F = f?.generator;
          if (F) {
            let { animation: m, generatorStartTime: C } = f,
              N = m?.startTime || C || 0,
              P = m?.currentTime || performance.now() - N,
              Y = F(P).current;
            (I = (d = R) !== null && d !== void 0 ? d : Y),
              (h === 1 || (h === 2 && l[0] === null)) &&
                (_ = ge((Z) => F(Z).current, P, Y));
          } else I = (x = R) !== null && x !== void 0 ? x : parseFloat(p());
          let B = a(I, b, _, i?.includes("scale")),
            G = s(B);
          (g = Object.assign(Object.assign({}, G), { easing: "linear" })),
            f &&
              ((f.generator = B), (f.generatorStartTime = performance.now()));
        } else g = { easing: "ease", duration: s(a(0, 100)).overshootDuration };
        return g;
      },
    };
  };
}
var Mr = (t) => typeof t != "string",
  Va = zn(De),
  Oa = zn(On),
  Ir = { any: 0, all: 1 };
function Er(t, e, { root: r, margin: n, amount: a = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let s = An(t),
    l = new WeakMap(),
    p = (i) => {
      i.forEach((f) => {
        let d = l.get(f.target);
        if (f.isIntersecting !== !!d)
          if (f.isIntersecting) {
            let x = e(f);
            typeof x == "function" ? l.set(f.target, x) : c.unobserve(f.target);
          } else d && (d(f), l.delete(f.target));
      });
    },
    c = new IntersectionObserver(p, {
      root: r,
      rootMargin: n,
      threshold: typeof a == "number" ? a : Ir[a],
    });
  return s.forEach((i) => c.observe(i)), () => c.disconnect();
}
var ye = new WeakMap(),
  Ct;
function Rr(t, e) {
  if (e) {
    let { inlineSize: r, blockSize: n } = e[0];
    return { width: r, height: n };
  }
  return t instanceof SVGElement && "getBBox" in t
    ? t.getBBox()
    : { width: t.offsetWidth, height: t.offsetHeight };
}
function Br({ target: t, contentRect: e, borderBoxSize: r }) {
  var n;
  (n = ye.get(t)) === null ||
    n === void 0 ||
    n.forEach((a) => {
      a({
        target: t,
        contentSize: e,
        get size() {
          return Rr(t, r);
        },
      });
    });
}
function Ar(t) {
  t.forEach(Br);
}
function zr() {
  typeof ResizeObserver < "u" && (Ct = new ResizeObserver(Ar));
}
function Fr(t, e) {
  Ct || zr();
  let r = An(t);
  return (
    r.forEach((n) => {
      let a = ye.get(n);
      a || ((a = new Set()), ye.set(n, a)), a.add(e), Ct?.observe(n);
    }),
    () => {
      r.forEach((n) => {
        let a = ye.get(n);
        a?.delete(e), a?.size || Ct?.unobserve(n);
      });
    }
  );
}
var ve = new Set(),
  Xt;
function Nr() {
  (Xt = () => {
    let t = { width: O.innerWidth, height: O.innerHeight },
      e = { target: O, size: t, contentSize: t };
    ve.forEach((r) => r(e));
  }),
    O.addEventListener("resize", Xt);
}
function Dr(t) {
  return (
    ve.add(t),
    Xt || Nr(),
    () => {
      ve.delete(t), !ve.size && Xt && (Xt = void 0);
    }
  );
}
function be(t, e) {
  return typeof t == "function" ? Dr(t) : Fr(t, e);
}
function je(t, e, r) {
  t.dispatchEvent(new CustomEvent(e, { detail: { originalEvent: r } }));
}
function En(t, e, r) {
  t.dispatchEvent(new CustomEvent(e, { detail: { originalEntry: r } }));
}
var Lr = {
    isActive: (t) => !!t.inView,
    subscribe: (t, { enable: e, disable: r }, { inViewOptions: n = {} }) => {
      let { once: a } = n,
        s = Vn(n, ["once"]);
      return Er(
        t,
        (l) => {
          if ((e(), En(t, "viewenter", l), !a))
            return (p) => {
              r(), En(t, "viewleave", p);
            };
        },
        s
      );
    },
  },
  Rn = (t, e, r) => (n) => {
    (!n.pointerType || n.pointerType === "mouse") && (r(), je(t, e, n));
  },
  jr = {
    isActive: (t) => !!t.hover,
    subscribe: (t, { enable: e, disable: r }) => {
      let n = Rn(t, "hoverstart", e),
        a = Rn(t, "hoverend", r);
      return (
        t.addEventListener("pointerenter", n),
        t.addEventListener("pointerleave", a),
        () => {
          t.removeEventListener("pointerenter", n),
            t.removeEventListener("pointerleave", a);
        }
      );
    },
  },
  Hr = {
    isActive: (t) => !!t.press,
    subscribe: (t, { enable: e, disable: r }) => {
      let n = (s) => {
          r(), je(t, "pressend", s), O.removeEventListener("pointerup", n);
        },
        a = (s) => {
          e(), je(t, "pressstart", s), O.addEventListener("pointerup", n);
        };
      return (
        t.addEventListener("pointerdown", a),
        () => {
          t.removeEventListener("pointerdown", a),
            O.removeEventListener("pointerup", n);
        }
      );
    },
  },
  Gr = { inView: Lr, hover: jr, press: Hr },
  _a = ["initial", "animate", ...Object.keys(Gr), "exit"];
var Wr = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  },
  He =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function Ge(t) {
  let {
      slots: e,
      gap: r,
      padding: n,
      paddingPerSide: a,
      paddingTop: s,
      paddingRight: l,
      paddingBottom: p,
      paddingLeft: c,
      speed: i,
      hoverFactor: f,
      direction: d,
      alignment: x,
      sizingOptions: g,
      fadeOptions: h,
      style: S,
    } = t,
    {
      fadeContent: b,
      overflow: R,
      fadeWidth: _,
      fadeInset: I,
      fadeAlpha: F,
    } = h,
    { widthType: B, heightType: G } = g,
    m = a ? `${s}px ${l}px ${p}px ${c}px` : `${n}px`,
    C = zt.current() === zt.canvas,
    N = Ot.count(e),
    P = N > 0;
  d === !0 && (d = "left");
  let Y = d === "left" || d === "right",
    Z = le(0),
    et = Wr[d],
    L = dt(Z, et),
    nt = E(null),
    A = ct(() => [$t(), $t()], []),
    [Q, z] = K({ parent: null, children: null }),
    rt = [],
    st = [],
    ut = 0,
    Tt = 0;
  C && ((ut = N ? Math.floor(10 / N) : 0), (Tt = 1)),
    !C &&
      P &&
      Q.parent &&
      ((ut = Math.round((Q.parent / Q.children) * 2) + 1), (Tt = 1));
  let lt = bt(() => {
      if (P && nt.current) {
        let k = Y ? nt.current.offsetWidth : nt.current.offsetHeight,
          w = A[0].current
            ? Y
              ? A[0].current.offsetLeft
              : A[0].current.offsetTop
            : 0,
          X =
            (A[1].current
              ? Y
                ? A[1].current.offsetLeft + A[1].current.offsetWidth
                : A[1].current.offsetTop + A[1].current.offsetHeight
              : 0) -
            w +
            r;
        z({ parent: k, children: X });
      }
    }, []),
    M = C ? { contentVisibility: "auto" } : {};
  if (P) {
    if (!C) {
      let k = E(!0);
      H(
        () => (
          lt(),
          be(nt.current, ({ contentSize: w }) => {
            !k.current && (w.width || w.height) && lt(), (k.current = !1);
          })
        ),
        []
      );
    }
    rt = Ot.map(e, (k, w) => {
      var ot, X, pt, j;
      let J;
      w === 0 && (J = A[0]), w === e.length - 1 && (J = A[1]);
      let v = {
        width: B
          ? (ot = k.props) === null || ot === void 0
            ? void 0
            : ot.width
          : "100%",
        height: G
          ? (X = k.props) === null || X === void 0
            ? void 0
            : X.height
          : "100%",
      };
      return u(ht, {
        inherit: "id",
        children: u("li", {
          ref: J,
          style: v,
          children: Ut(
            k,
            {
              style: {
                ...((pt = k.props) === null || pt === void 0
                  ? void 0
                  : pt.style),
                ...v,
                flexShrink: 0,
                ...M,
              },
              layoutId: k.props.layoutId
                ? k.props.layoutId + "-original-" + w
                : void 0,
            },
            (j = k.props) === null || j === void 0 ? void 0 : j.children
          ),
        }),
      });
    });
  }
  if (!C)
    for (let k = 0; k < ut; k++)
      st = [
        ...st,
        ...Ot.map(e, (w, ot) => {
          var X, pt, j, J, v, vt;
          let Vt = {
            width: B
              ? (X = w.props) === null || X === void 0
                ? void 0
                : X.width
              : "100%",
            height: G
              ? (pt = w.props) === null || pt === void 0
                ? void 0
                : pt.height
              : "100%",
          };
          return u(
            ht,
            {
              inherit: "id",
              children: u(
                "li",
                {
                  style: Vt,
                  "aria-hidden": !0,
                  children: Ut(
                    w,
                    {
                      key: k + " " + ot,
                      style: {
                        ...((j = w.props) === null || j === void 0
                          ? void 0
                          : j.style),
                        width: B
                          ? (J = w.props) === null || J === void 0
                            ? void 0
                            : J.width
                          : "100%",
                        height: G
                          ? (v = w.props) === null || v === void 0
                            ? void 0
                            : v.height
                          : "100%",
                        flexShrink: 0,
                        ...M,
                      },
                      layoutId: w.props.layoutId
                        ? w.props.layoutId + "-dupe-" + k
                        : void 0,
                    },
                    (vt = w.props) === null || vt === void 0
                      ? void 0
                      : vt.children
                  ),
                },
                k + "li" + ot
              ),
            },
            k + "lg" + ot
          );
        }),
      ];
  let T = Q.children + Q.children * Math.round(Q.parent / Q.children),
    ft = E(null),
    Lt = E(null),
    _t = E(0),
    jt = E(!1),
    Jt = un(),
    Qt = E(null),
    yt = E(null);
  if (!C) {
    let k = ce(nt);
    He
      ? H(() => {
          if (!(Jt || !T || !i))
            return (
              (yt.current = Qt.current.animate(
                { transform: [et(0), et(T)] },
                {
                  duration: (Math.abs(T) / i) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => yt.current.cancel()
            );
        }, [f, T, i])
      : dn((w) => {
          if (!T || Jt || He) return;
          ft.current === null && (ft.current = w), (w = w - ft.current);
          let X = (Lt.current === null ? 0 : w - Lt.current) * (i / 1e3);
          jt.current && (X *= f),
            (_t.current += X),
            (_t.current = xt(0, T, _t.current)),
            (Lt.current = w),
            k && Z.set(_t.current);
        });
  }
  let te = Y ? "to right" : "to bottom",
    Ht = _ / 2,
    Se = 100 - _ / 2,
    Ce = Zr(I, 0, Ht),
    Pe = 100 - I,
    Gt = `linear-gradient(${te}, rgba(0, 0, 0, ${F}) ${Ce}%, rgba(0, 0, 0, 1) ${Ht}%, rgba(0, 0, 0, 1) ${Se}%, rgba(0, 0, 0, ${F}) ${Pe}%)`;
  return P
    ? u("section", {
        style: {
          ...Fn,
          opacity: Tt,
          WebkitMaskImage: b ? Gt : void 0,
          MozMaskImage: b ? Gt : void 0,
          maskImage: b ? Gt : void 0,
          overflow: R ? "visible" : "hidden",
          padding: m,
        },
        ref: nt,
        children: St(W.ul, {
          ref: Qt,
          style: {
            ...Fn,
            gap: r,
            top: d === "bottom" && Nn(T) ? -T : void 0,
            left: d === "right" && Nn(T) ? -T : void 0,
            placeItems: x,
            position: "relative",
            flexDirection: Y ? "row" : "column",
            ...S,
            transform: He ? void 0 : L,
            willChange: C ? "auto" : "transform",
          },
          onMouseEnter: () => {
            (jt.current = !0), yt.current && yt.current.updatePlaybackRate(f);
          },
          onMouseLeave: () => {
            (jt.current = !1), yt.current && yt.current.updatePlaybackRate(1);
          },
          children: [rt, st],
        }),
      })
    : St("section", {
        style: Ur,
        children: [
          u("div", { style: $r, children: "\u2728" }),
          u("p", { style: qr, children: "Connect to Content" }),
          u("p", {
            style: Yr,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
Ge.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
wt(Ge, {
  slots: {
    type: o.Array,
    title: "Children",
    control: { type: o.ComponentInstance },
  },
  speed: {
    type: o.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: o.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: o.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: o.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: o.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: o.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: o.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: o.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: o.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: o.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: o.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: o.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: o.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: o.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: o.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Fn = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Ur = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  $r = { fontSize: 32, marginBottom: 10 },
  qr = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Yr = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Zr = (t, e, r) => Math.min(Math.max(t, e), r),
  Nn = (t) => typeof t == "number" && !isNaN(t);
var Pt;
(function (t) {
  (t.Fill = "fill"),
    (t.Contain = "contain"),
    (t.Cover = "cover"),
    (t.None = "none"),
    (t.ScaleDown = "scale-down");
})(Pt || (Pt = {}));
var gt;
(function (t) {
  (t.Video = "Upload"), (t.Url = "URL");
})(gt || (gt = {}));
function Xr(t) {
  let {
    width: e,
    height: r,
    topLeft: n,
    topRight: a,
    bottomRight: s,
    bottomLeft: l,
    id: p,
    children: c,
    ...i
  } = t;
  return i;
}
function We(t) {
  let e = Xr(t);
  return u(Qr, { ...e });
}
function Kr(t) {
  let e = mn(),
    r = E(!1),
    n = bt((l) => {
      if (!t.current) return;
      let p = (l === 1 ? 0.999 : l) * t.current.duration,
        c = Math.abs(t.current.currentTime - p) < 0.1;
      t.current.duration > 0 && !c && (t.current.currentTime = p);
    }, []),
    a = bt(() => {
      !(
        t.current.currentTime > 0 &&
        t.current.onplaying &&
        !t.current.paused &&
        !t.current.ended &&
        t.current.readyState > t.current.HAVE_CURRENT_DATA
      ) &&
        t.current &&
        !r.current &&
        e &&
        ((r.current = !0),
        t.current
          .play()
          .catch((p) => {})
          .finally(() => (r.current = !1)));
    }, []),
    s = bt(() => {
      !t.current || r.current || t.current.pause();
    }, []);
  return { play: a, pause: s, setProgress: n };
}
function Jr({
  playingProp: t,
  muted: e,
  loop: r,
  playsinline: n,
  controls: a,
}) {
  let [s] = K(() => t),
    [l, p] = K(!1);
  t !== s && !l && p(!0);
  let c = s && e && r && n && !a && !l,
    i;
  return (
    c ? (i = "on-viewport") : s ? (i = "on-mount") : (i = "no-autoplay"), i
  );
}
var Dn = !1,
  Qr = cn(function (e) {
    let {
        srcType: r,
        srcFile: n,
        srcUrl: a,
        playing: s,
        muted: l,
        playsinline: p,
        controls: c,
        progress: i,
        objectFit: f,
        backgroundColor: d,
        onSeeked: x,
        onPause: g,
        onPlay: h,
        onEnd: S,
        onClick: b,
        onMouseEnter: R,
        onMouseLeave: _,
        onMouseDown: I,
        onMouseUp: F,
        poster: B,
        posterEnabled: G,
        startTime: m,
        volume: C,
        loop: N,
      } = e,
      P = E(),
      Y = wn(),
      Z = E(null),
      et = E(null),
      L = Sn(),
      nt = Cn(e),
      A = L
        ? "no-autoplay"
        : Jr({
            playingProp: s,
            muted: l,
            loop: N,
            playsinline: p,
            controls: c,
          }),
      Q = L ? !0 : ce(P),
      z = m === 100 ? 99.9 : m,
      { play: rt, pause: st, setProgress: ut } = Kr(P);
    H(() => {
      L || (s ? rt() : st());
    }, [s]),
      H(() => {
        L || (A === "on-viewport" && (Q ? rt() : st()));
      }, [A, Q]),
      H(() => {
        if (!Dn) {
          Dn = !0;
          return;
        }
        let M = ze(i) ? i.get() : (i ?? 0) * 0.01;
        ut((M ?? 0) || (z ?? 0) / 100);
      }, [z, n, a, i]),
      H(() => {
        if (ze(i)) return i.on("change", (M) => ut(M));
      }, [i]),
      bn(() => {
        Z.current !== null && P.current && ((!et && N) || !Z.current) && rt();
      }),
      xn(() => {
        P.current &&
          ((et.current = P.current.ended),
          (Z.current = P.current.paused),
          st());
      });
    let Tt = ct(() => {
      let M = "";
      if (r === gt.Url) return a + M;
      if (r === gt.Video) return n + M;
    }, [r, n, a, z]);
    return (
      H(() => {
        Y && P.current && A === "on-mount" && setTimeout(() => rt(), 50);
      }, []),
      H(() => {
        P.current && !l && (P.current.volume = (C ?? 0) / 100);
      }, [C]),
      u("video", {
        onClick: b,
        onMouseEnter: R,
        onMouseLeave: _,
        onMouseDown: I,
        onMouseUp: F,
        src: Tt,
        loop: N,
        ref: P,
        onSeeked: (M) => x?.(M),
        onPause: (M) => g?.(M),
        onPlay: (M) => h?.(M),
        onEnded: (M) => S?.(M),
        autoPlay: A === "on-mount",
        poster: G ? B : void 0,
        onLoadedData: () => {
          P.current &&
            (P.current.currentTime < 0.3 && ut((z ?? 0) * 0.01),
            A === "on-mount" && rt());
        },
        controls: c,
        muted: L ? !0 : l,
        playsInline: p,
        style: {
          cursor: b ? "pointer" : "auto",
          width: "100%",
          height: "100%",
          borderRadius: nt,
          display: "block",
          objectFit: f,
          backgroundColor: d,
          objectPosition: "50% 50%",
        },
      })
    );
  });
We.displayName = "Video";
We.defaultProps = {
  srcType: gt.Url,
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: Pt.Cover,
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
var to = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function eo(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function no(t) {
  return (t.match(to) || []).map(eo).join(" ");
}
var Ln = [Pt.Cover, Pt.Fill, Pt.Contain, Pt.ScaleDown, Pt.None];
wt(We, {
  srcType: {
    type: o.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: [gt.Url, gt.Video],
  },
  srcUrl: {
    type: o.String,
    title: " ",
    placeholder: "../example.mp4",
    hidden(t) {
      return t.srcType === gt.Video;
    },
    description:
      "Hosted video file URL. For YouTube, use the YouTube component.",
  },
  srcFile: {
    type: o.File,
    title: " ",
    allowedFileTypes: ["mp4"],
    hidden(t) {
      return t.srcType === gt.Url;
    },
  },
  playing: {
    type: o.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: o.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: { type: o.Image, title: " ", hidden: ({ posterEnabled: t }) => !t },
  backgroundColor: { type: o.Color, title: "Background" },
  ...Pn,
  startTime: {
    title: "Start Time",
    type: o.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: o.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: o.Enum,
    title: "Fit",
    options: Ln,
    optionTitles: Ln.map(no),
  },
  controls: {
    type: o.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: o.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: o.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: t }) => t,
  },
  onEnd: { type: o.EventHandler },
  onSeeked: { type: o.EventHandler },
  onPause: { type: o.EventHandler },
  onPlay: { type: o.EventHandler },
  ...vn,
});
var xe = () => typeof document == "object";
function ro() {
  if (xe()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function oo() {
  if (xe()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function jn() {
  if (xe()) return !document[oo()];
}
function Hn() {
  if (!xe()) return;
  let [t, e] = K(jn()),
    r = () => e(jn());
  return (
    H(() => {
      let n = ro();
      return (
        document.addEventListener(n, r, !1),
        () => {
          document.removeEventListener(n, r);
        }
      );
    }),
    t
  );
}
function q(t) {
  let {
      slots: e,
      startFrom: r,
      direction: n,
      effectsOptions: a,
      autoPlayControl: s,
      dragControl: l,
      alignment: p,
      gap: c,
      padding: i,
      paddingPerSide: f,
      paddingTop: d,
      paddingRight: x,
      paddingBottom: g,
      paddingLeft: h,
      itemAmount: S,
      fadeOptions: b,
      intervalControl: R,
      transitionControl: _,
      arrowOptions: I,
      borderRadius: F,
      progressOptions: B,
      style: G,
    } = t,
    {
      effectsOpacity: m,
      effectsScale: C,
      effectsRotate: N,
      effectsPerspective: P,
      effectsHover: Y,
    } = a,
    {
      fadeContent: Z,
      overflow: et,
      fadeWidth: L,
      fadeInset: nt,
      fadeAlpha: A,
    } = b,
    {
      showMouseControls: Q,
      arrowSize: z,
      arrowRadius: rt,
      arrowFill: st,
      leftArrow: ut,
      rightArrow: Tt,
      arrowShouldSpace: lt = !0,
      arrowShouldFadeIn: M = !1,
      arrowPosition: T,
      arrowPadding: ft,
      arrowGap: Lt,
      arrowPaddingTop: _t,
      arrowPaddingRight: jt,
      arrowPaddingBottom: Jt,
      arrowPaddingLeft: Qt,
    } = I,
    {
      showProgressDots: yt,
      dotSize: te,
      dotsInset: Ht,
      dotsRadius: Se,
      dotsPadding: Ce,
      dotsGap: Pe,
      dotsFill: Gt,
      dotsBackground: k,
      dotsActiveOpacity: w,
      dotsOpacity: ot,
      dotsBlur: X,
    } = B,
    pt = f ? `${d}px ${x}px ${g}px ${h}px` : `${i}px`,
    j = zt.current() === zt.canvas,
    J = Ot.count(e) > 0,
    v = n === "left" || n === "right",
    vt = n === "right" || n === "bottom";
  if (!J)
    return St("section", {
      style: ao,
      children: [
        u("div", { style: io, children: "\u2B50\uFE0F" }),
        u("p", { style: so, children: "Connect to Content" }),
        u("p", {
          style: lo,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let Vt = E(null),
    D = ct(() => e.map((y) => $t()), [e]),
    Te = E(void 0),
    [V, Wn] = K({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [Un, qe] = K(!1),
    [$n, Ye] = K(s),
    [qn, Ze] = K(!1),
    [kt, Xe] = K(!1),
    Ve = [],
    Ke = 4;
  j && (Ke = 1);
  let Je = bt(() => {
    pn.read(() => {
      if (J && Vt.current) {
        let y = e.length - 1,
          it = v ? Vt.current.offsetWidth : Vt.current.offsetHeight,
          tt = D[0].current
            ? v
              ? D[0].current.offsetLeft
              : D[0].current.offsetTop
            : 0,
          Rt =
            (D[y].current
              ? v
                ? D[y].current.offsetLeft + D[y].current.offsetWidth
                : D[y].current.offsetTop + D[y].current.offsetHeight
              : 0) -
            tt +
            c,
          re = D[0].current
            ? v
              ? D[0].current.offsetWidth
              : D[0].current.offsetHeight
            : 0,
          Re = D[0].current ? D[0].current.offsetWidth : 0,
          Be = D[0].current ? D[0].current.offsetHeight : 0;
        Wn({
          parent: it,
          children: Rt,
          item: re,
          itemWidth: Re,
          itemHeight: Be,
        });
      }
    });
  }, [J]);
  Ae(() => {
    J && Je();
  }, [J, S]);
  let Oe = E(!0);
  H(
    () =>
      be(Vt.current, ({ contentSize: y }) => {
        !Oe.current && (y.width || y.height) && (Je(), Xe(!0)),
          (Oe.current = !1);
      }),
    []
  ),
    H(() => {
      if (kt) {
        let y = setTimeout(() => Xe(!1), 500);
        return () => clearTimeout(y);
      }
    }, [kt]);
  let Mt = e?.length,
    ee = j ? 0 : V?.children,
    _e = V?.item + c,
    Yn = r * _e,
    [at, Wt] = K(r + Mt),
    [Zn, Qe] = K(!1),
    tn = Hn(),
    en = vt ? 1 : -1,
    It = le(ee),
    nn = v ? -r * (V?.itemWidth + c) : -r * (V?.itemHeight + c),
    ke = () => en * at * _e,
    Me = j
      ? 0
      : dt(It, (y) => {
          let it = xt(-ee, -ee * 2, y);
          return isNaN(it) ? 0 : it;
        }),
    Xn = xt(0, Mt, at),
    Kn = xt(0, -Mt, at);
  Ae(() => {
    V?.children !== null && !Oe.current && kt && It.set(ke());
  }, [V, ee, en, Yn, at, _e, kt]);
  let rn = () => {
      j ||
        !J ||
        !V.parent ||
        Zn ||
        (It.get() !== ke() && fn(It, ke(), _),
        s &&
          $n &&
          (Te.current = setTimeout(() => {
            Wt(at + 1), rn();
          }, R * 1e3)));
    },
    Et = (y) => {
      Wt(vt ? at - y : at + y);
    },
    Jn = (y) => {
      let it = xt(0, Mt, at),
        tt = xt(0, -Mt, at),
        mt = y - it,
        Rt = y - Math.abs(tt);
      Wt(vt ? at - Rt : at + mt);
    },
    Qn = () => {
      Qe(!0);
    },
    tr = (y, { offset: it, velocity: tt }) => {
      Qe(!1);
      let mt = v ? it.x : it.y,
        Rt = 200,
        re = v ? tt.x : tt.y,
        Re = mt < -V.item / 2,
        Be = mt > V.item / 2,
        ur = Math.abs(mt),
        oe = Math.round(ur / V.item),
        ln = oe === 0 ? 1 : oe;
      re > Rt ? Et(-ln) : re < -Rt ? Et(ln) : (Re && Et(oe), Be && Et(-oe));
    };
  H(() => {
    if (!(!tn || kt)) return rn(), () => Te.current && clearTimeout(Te.current);
  }, [Ve, tn, kt]);
  let er = 0,
    on = `calc(${100 / S}% - ${c}px + ${c / S}px)`;
  for (let y = 0; y < Ke; y++)
    Ve.push(
      ...Ot.map(e, (it, tt) => {
        let mt;
        return (
          tt === 0 && (mt = D[0]),
          tt === e.length - 1 && (mt = D[1]),
          u(
            fo,
            {
              ref: D[tt],
              slideKey: y + tt + "lg",
              index: y,
              width: v && S > 1 ? on : "100%",
              height: v ? "100%" : S > 1 ? on : "100%",
              size: V,
              child: it,
              numChildren: e?.length,
              wrappedValue: Me,
              childCounter: er++,
              gap: c,
              isCanvas: j,
              isHorizontal: v,
              effectsOpacity: m,
              effectsScale: C,
              effectsRotate: N,
              children: y + tt,
            },
            y + tt + "lg"
          )
        );
      })
    );
  let nr = v ? "to right" : "to bottom",
    an = L / 2,
    rr = 100 - L / 2,
    or = uo(nt, 0, an),
    ar = 100 - nt,
    Ie = `linear-gradient(${nr}, rgba(0, 0, 0, ${A}) ${or}%, rgba(0, 0, 0, 1) ${an}%, rgba(0, 0, 0, 1) ${rr}%, rgba(0, 0, 0, ${A}) ${ar}%)`,
    Ee = [],
    ne = {};
  if (yt) {
    for (let y = 0; y < e?.length; y++)
      Ee.push(
        u(
          po,
          {
            dotStyle: { ...ho, width: te, height: te, backgroundColor: Gt },
            buttonStyle: Ue,
            selectedOpacity: w,
            opacity: ot,
            onClick: () => Jn(y),
            wrappedIndex: Xn,
            wrappedIndexInverted: Kn,
            total: Mt,
            index: y,
            gap: Pe,
            padding: Ce,
            isHorizontal: v,
            isInverted: vt,
          },
          y
        )
      );
    X > 0 &&
      (ne.backdropFilter =
        ne.WebkitBackdropFilter =
        ne.MozBackdropFilter =
          `blur(${X}px)`);
  }
  let ir = l
      ? {
          drag: v ? "x" : "y",
          onDragStart: Qn,
          onDragEnd: tr,
          dragDirectionLock: !0,
          values: { x: It, y: It },
          dragMomentum: !1,
        }
      : {},
    sr = T === "top-left" || T === "top-mid" || T === "top-right",
    lr = T === "bottom-left" || T === "bottom-mid" || T === "bottom-right",
    cr = T === "top-left" || T === "bottom-left",
    dr = T === "top-right" || T === "bottom-right",
    sn = T === "top-mid" || T === "bottom-mid" || T === "auto";
  return St("section", {
    style: {
      ...Gn,
      padding: pt,
      WebkitMaskImage: Z ? Ie : void 0,
      MozMaskImage: Z ? Ie : void 0,
      maskImage: Z ? Ie : void 0,
      opacity: V?.item !== null ? 1 : 0,
      userSelect: "none",
    },
    onMouseEnter: () => {
      qe(!0), Y || Ye(!1);
    },
    onMouseLeave: () => {
      qe(!1), Y || Ye(!0);
    },
    onMouseDown: (y) => {
      y.preventDefault(), Ze(!0);
    },
    onMouseUp: () => Ze(!1),
    children: [
      u("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: et ? "visible" : "hidden",
          borderRadius: F,
          userSelect: "none",
          perspective: j ? "none" : P,
        },
        children: u(W.ul, {
          ref: Vt,
          ...ir,
          style: {
            ...Gn,
            gap: c,
            placeItems: p,
            x: v ? (j ? nn : Me) : 0,
            y: v ? 0 : j ? nn : Me,
            flexDirection: v ? "row" : "column",
            transformStyle: N !== 0 && !j ? "preserve-3d" : void 0,
            cursor: l ? (qn ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...G,
          },
          children: Ve,
        }),
      }),
      St("fieldset", {
        style: { ...co },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          St(W.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: v ? "row" : "column",
              justifyContent: lt ? "space-between" : "center",
              gap: lt ? "unset" : Lt,
              opacity: M ? 0 : 1,
              alignItems: "center",
              inset: ft,
              top: lt ? ft : sr ? _t : "unset",
              left: lt ? ft : cr ? Qt : sn ? 0 : "unset",
              right: lt ? ft : dr ? jt : sn ? 0 : "unset",
              bottom: lt ? ft : lr ? Jt : "unset",
            },
            animate: M && { opacity: Un ? 1 : 0 },
            transition: _,
            children: [
              u(W.button, {
                type: "button",
                style: {
                  ...Ue,
                  backgroundColor: st,
                  width: z,
                  height: z,
                  borderRadius: rt,
                  rotate: v ? 0 : 90,
                  display: Q ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => Et(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: u("img", {
                  width: z,
                  height: z,
                  src:
                    ut ||
                    "./Blowfish - Proactive defense for web3 wallets_files/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              u(W.button, {
                type: "button",
                style: {
                  ...Ue,
                  backgroundColor: st,
                  width: z,
                  height: z,
                  borderRadius: rt,
                  rotate: v ? 0 : 90,
                  display: Q ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => Et(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: u("img", {
                  width: z,
                  height: z,
                  src:
                    Tt ||
                    "./Blowfish - Proactive defense for web3 wallets_files/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          Ee.length > 1
            ? u("div", {
                style: {
                  ...mo,
                  left: v ? "50%" : Ht,
                  top: v ? "unset" : "50%",
                  transform: v ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: v ? "row" : "column",
                  bottom: v ? Ht : "unset",
                  borderRadius: Se,
                  backgroundColor: k,
                  userSelect: "none",
                  ...ne,
                },
                children: Ee,
              })
            : null,
        ],
      }),
    ],
  });
}
q.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
wt(q, {
  slots: {
    type: o.Array,
    title: "Content",
    control: { type: o.ComponentInstance },
  },
  direction: {
    type: o.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: q.defaultProps.direction,
  },
  autoPlayControl: { type: o.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: o.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (t) => !t.autoPlayControl,
  },
  dragControl: { type: o.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: o.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: q.defaultProps.startFrom,
  },
  effectsOptions: {
    type: o.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: o.Number,
        title: "Opacity",
        defaultValue: q.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: o.Number,
        title: "Scale",
        defaultValue: q.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: o.Number,
        title: "Perspective",
        defaultValue: q.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: o.Number,
        title: "Rotate",
        defaultValue: q.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: o.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: q.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: o.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  itemAmount: {
    type: o.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: q.defaultProps.itemAmount,
  },
  gap: { type: o.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: o.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: o.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: o.Transition,
    defaultValue: q.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: o.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: o.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: o.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: o.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: o.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: o.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: o.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: o.Boolean,
        title: "Show",
        defaultValue: q.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: o.Color,
        title: "Fill",
        hidden: (t) => !t.showMouseControls,
        defaultValue: q.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: o.Image,
        title: "Previous",
        hidden: (t) => !t.showMouseControls,
      },
      rightArrow: {
        type: o.Image,
        title: "Next",
        hidden: (t) => !t.showMouseControls,
      },
      arrowSize: {
        type: o.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: q.defaultProps.arrowOptions.arrowSize,
        hidden: (t) => !t.showMouseControls,
      },
      arrowRadius: {
        type: o.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (t) => !t.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: o.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (t) => !t.showMouseControls,
      },
      arrowShouldSpace: {
        type: o.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: q.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (t) => !t.showMouseControls,
      },
      arrowPosition: {
        type: o.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (t) => !t.showMouseControls || t.arrowShouldSpace,
      },
      arrowPadding: {
        type: o.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (t) => !t.showMouseControls || !t.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: o.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (t) =>
          !t.showMouseControls ||
          t.arrowShouldSpace ||
          t.arrowPosition === "auto" ||
          t.arrowPosition === "bottom-mid" ||
          t.arrowPosition === "bottom-left" ||
          t.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: o.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (t) =>
          !t.showMouseControls ||
          t.arrowShouldSpace ||
          t.arrowPosition === "auto" ||
          t.arrowPosition === "top-mid" ||
          t.arrowPosition === "top-left" ||
          t.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: o.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (t) =>
          !t.showMouseControls ||
          t.arrowShouldSpace ||
          t.arrowPosition === "auto" ||
          t.arrowPosition === "top-left" ||
          t.arrowPosition === "top-mid" ||
          t.arrowPosition === "bottom-left" ||
          t.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: o.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (t) =>
          !t.showMouseControls ||
          t.arrowShouldSpace ||
          t.arrowPosition === "auto" ||
          t.arrowPosition === "top-right" ||
          t.arrowPosition === "top-mid" ||
          t.arrowPosition === "bottom-right" ||
          t.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: o.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (t) => !t.showMouseControls || t.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: o.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: o.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: o.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsInset: {
        type: o.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsGap: {
        type: o.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsPadding: {
        type: o.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsFill: {
        type: o.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsBackground: {
        type: o.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsRadius: {
        type: o.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsOpacity: {
        type: o.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsActiveOpacity: {
        type: o.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
      dotsBlur: {
        type: o.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (t) => !t.showProgressDots || t.showScrollbar,
      },
    },
  },
});
var Gn = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  ao = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  io = { fontSize: 32, marginBottom: 10 },
  so = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  lo = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Ue = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  co = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  uo = (t, e, r) => Math.min(Math.max(t, e), r),
  fo = Bt(function (e, r) {
    var n, a;
    let {
        slideKey: s,
        width: l,
        height: p,
        child: c,
        size: i,
        gap: f,
        wrappedValue: d,
        numChildren: x,
        childCounter: g,
        isCanvas: h,
        effects: S,
        effectsOpacity: b,
        effectsScale: R,
        effectsRotate: _,
        isHorizontal: I,
        isLast: F,
        index: B,
      } = e,
      G = (i?.item + f) * g,
      m = [-i?.item, 0, i?.parent - i?.item + f, i?.parent].map((L) => L - G),
      C = !h && dt(d, m, [-_, 0, 0, _]),
      N = !h && dt(d, m, [_, 0, 0, -_]),
      P = !h && dt(d, m, [b, 1, 1, b]),
      Y = !h && dt(d, m, [R, 1, 1, R]),
      Z = !h && dt(d, m, [1, 1, 0, 0]),
      et = !h && dt(d, (L) => L >= m[1] && L <= m[2]);
    return (
      H(() => {
        if (et)
          return et.onChange((L) => {
            r.current.setAttribute("aria-hidden", !L);
          });
      }, []),
      u(ht, {
        inherit: "id",
        children: u("li", {
          style: { display: "contents" },
          "aria-hidden": B !== 0,
          children: Ut(
            c,
            {
              ref: r,
              key: s + "child",
              style: {
                ...((n = c.props) === null || n === void 0 ? void 0 : n.style),
                flexShrink: 0,
                userSelect: "none",
                width: l,
                height: p,
                opacity: P,
                scale: Y,
                originX: I ? Z : 0.5,
                originY: I ? 0.5 : Z,
                rotateY: I ? C : 0,
                rotateX: I ? 0 : N,
              },
              layoutId: c.props.layoutId
                ? c.props.layoutId + "-original-" + B
                : void 0,
            },
            (a = c.props) === null || a === void 0 ? void 0 : a.children
          ),
        }),
      })
    );
  });
function po({
  selectedOpacity: t,
  opacity: e,
  total: r,
  index: n,
  wrappedIndex: a,
  wrappedIndexInverted: s,
  dotStyle: l,
  buttonStyle: p,
  gap: c,
  padding: i,
  isHorizontal: f,
  isInverted: d,
  ...x
}) {
  let g = a === n;
  d && (g = Math.abs(s) === n);
  let h = c / 2,
    S = !f && n > 0 ? h : i,
    b = !f && n !== r - 1 ? h : i,
    R = f && n !== r - 1 ? h : i,
    _ = f && n > 0 ? h : i;
  return u("button", {
    "aria-label": `Scroll to page ${n + 1}`,
    type: "button",
    ...x,
    style: { ...p, padding: `${S}px ${R}px ${b}px ${_}px` },
    children: u(W.div, {
      style: { ...l },
      initial: !1,
      animate: { opacity: g ? t : e },
      transition: { duration: 0.3 },
    }),
  });
}
var mo = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  ho = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
var yo = ["NPvJz36K3"],
  vo = { NPvJz36K3: "framer-v-vnqo6a" };
var bo = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  xo = ({ value: t, children: e }) => {
    let r = ie(At),
      n = t ?? r.transition,
      a = ct(() => ({ ...r, transition: n }), [JSON.stringify(n)]);
    return u(At.Provider, { value: a, children: e });
  },
  wo = ({ height: t, id: e, width: r, ...n }) => ({ ...n }),
  So = (t, e) => e.join("-") + t.layoutDependency,
  Co = Bt(function (t, e) {
    let { activeLocale: r } = de(),
      { style: n, className: a, layoutId: s, variant: l, ...p } = wo(t),
      {
        baseVariant: c,
        classNames: i,
        gestureVariant: f,
        setGestureState: d,
        setVariant: x,
        transition: g,
        variants: h,
      } = pe({
        cycleOrder: yo,
        defaultVariant: "NPvJz36K3",
        transitions: bo,
        variant: l,
        variantClassNames: vo,
      }),
      S = So(t, h),
      b = se();
    return u(ht, {
      id: s ?? b,
      children: u(W.div, {
        initial: l,
        animate: h,
        onHoverStart: () => d({ isHovered: !0 }),
        onHoverEnd: () => d({ isHovered: !1 }),
        onTapStart: () => d({ isPressed: !0 }),
        onTap: () => d({ isPressed: !1 }),
        onTapCancel: () => d({ isPressed: !1 }),
        className: qt("framer-at5Qc", i),
        style: { display: "contents" },
        children: u(xo, {
          value: g,
          children: u(fe, {
            href: "https://family.co/",
            children: u(W.a, {
              ...p,
              className: `${qt("framer-vnqo6a", a)} framer-1qd98cz`,
              "data-framer-name": "Variant 1",
              layoutDependency: S,
              layoutId: "NPvJz36K3",
              ref: e,
              style: { ...n },
              children: u(gn, {
                className: "framer-ze42bb",
                "data-framer-name": "graphic",
                fill: "black",
                intrinsicHeight: 18,
                intrinsicWidth: 72,
                layoutDependency: S,
                layoutId: "LuhhE9JY_",
                svg: '<svg aria-label="Family" width="72" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow:visible"><path d="M15.95 2.68A2.668 2.668 0 0 0 13.283.014C11.989 0 10.92.924 10.655 2.14h-.066a2.669 2.669 0 0 0-5.227-.013h-.066a2.675 2.675 0 1 0-3.129 3.169v.053a2.677 2.677 0 0 0 0 5.255v.052a2.671 2.671 0 1 0 3.116 3.156h.066a2.686 2.686 0 0 0 2.615 2.138 2.653 2.653 0 0 0 2.614-2.138h.066a2.686 2.686 0 0 0 2.614 2.138 2.672 2.672 0 0 0 .502-5.295V10.6a2.677 2.677 0 0 0 0-5.255v-.053a2.65 2.65 0 0 0 2.19-2.612Zm-3.684 8.966a.619.619 0 0 1-.62.62H4.318a.62.62 0 0 1-.62-.62V4.318a.62.62 0 0 1 .62-.62h7.328a.62.62 0 0 1 .62.62v7.328Z" fill="currentColor" style="transform:none;transform-origin:7.9724px 7.97187px"/><g style="transform:none;transform-origin:46.9392px 9.54612px" fill="currentColor"><path d="M24.242 4.82h5.889V2.798h-8.253v11.527h2.364V9.282h4.965V7.288h-4.965V4.82Zm12.623 1.927c-.528-.792-1.598-1.307-2.694-1.307-2.535 0-4.251 1.756-4.251 4.515 0 2.76 1.716 4.516 4.251 4.53 1.096 0 2.179-.542 2.694-1.308v1.163h2.205V5.585h-2.205v1.162Zm-2.363 5.85c-1.387 0-2.35-1.083-2.362-2.64 0-1.585.977-2.642 2.362-2.642 1.386 0 2.363 1.057 2.363 2.641 0 1.544-.977 2.64-2.365 2.64h.002ZM51.006 5.44c-1.163 0-2.138.515-2.799 1.57-.488-.963-1.479-1.57-2.707-1.57-1.215 0-2.02.594-2.522 1.36V5.585h-2.205v8.74h2.205V9.229c0-1.148.687-1.862 1.743-1.862s1.742.82 1.742 1.862v5.11h2.204V9.23c0-.964.488-1.862 1.743-1.862 1.163 0 1.757.846 1.757 1.862v5.096h2.208V8.648c0-1.98-1.534-3.208-3.369-3.208Zm6.047-1.004a1.492 1.492 0 1 0 0-2.984 1.492 1.492 0 0 0 0 2.984Zm1.109 1.149h-2.205v8.754h2.205V5.585Zm3.816 5.968V2.8h-2.203v8.992c0 2.284 1.505 2.865 3.263 2.64v-1.9c-.61.052-1.06-.16-1.06-.978Z"/><path d="m69.65 5.585-2.205 5.665-2.153-5.663h-2.376l3.422 8.527-.263.648c-.304.765-.911.976-1.479.976-.396 0-.898-.118-1.545-.435v1.94a4.675 4.675 0 0 0 1.674.397c1.717 0 2.76-.675 3.354-2.152L72 5.585h-2.35Z"/></g></svg>',
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Po = [
    '.framer-at5Qc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-at5Qc .framer-1qd98cz { display: block; }",
    ".framer-at5Qc .framer-vnqo6a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-at5Qc .framer-ze42bb { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 110px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-at5Qc .framer-vnqo6a { gap: 0px; } .framer-at5Qc .framer-vnqo6a > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-at5Qc .framer-vnqo6a > :first-child { margin-left: 0px; } .framer-at5Qc .framer-vnqo6a > :last-child { margin-right: 0px; } }",
  ],
  we = ue(Co, Po, "framer-at5Qc"),
  ai = we;
we.displayName = "Family Logo";
we.defaultProps = { height: 27.5, width: 110 };
me(we, []);
var To = {
    CyRBy15mh: { hover: !0, pressed: !0 },
    GzkxZOjRZ: { hover: !0 },
    KbXFPBpYr: { hover: !0 },
    y4tVGU4Jx: { hover: !0 },
  },
  Vo = ["y4tVGU4Jx", "KbXFPBpYr", "CyRBy15mh", "GzkxZOjRZ"],
  Oo = "framer-YkSCt",
  _o = {
    CyRBy15mh: "framer-v-14c6uum",
    GzkxZOjRZ: "framer-v-z33k4l",
    KbXFPBpYr: "framer-v-1yo35za",
    y4tVGU4Jx: "framer-v-10zqzdu",
  };
function $e(t, ...e) {
  let r = {};
  return e?.forEach((n) => n && Object.assign(r, t[n])), r;
}
var ko = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Mo = ({ value: t, children: e }) => {
    let r = ie(At),
      n = t ?? r.transition,
      a = ct(() => ({ ...r, transition: n }), [JSON.stringify(n)]);
    return u(At.Provider, { value: a, children: e });
  },
  Io = {
    "New Buttons": "y4tVGU4Jx",
    Outline: "GzkxZOjRZ",
    Secondary: "KbXFPBpYr",
    Small: "CyRBy15mh",
  },
  Eo = ({ height: t, id: e, tap: r, title: n, width: a, ...s }) => {
    var l, p, c;
    return {
      ...s,
      OgGB2UA1X:
        (l = n ?? s.OgGB2UA1X) !== null && l !== void 0 ? l : "Get Started",
      uZc7XUvFq: r ?? s.uZc7XUvFq,
      variant:
        (c = (p = Io[s.variant]) !== null && p !== void 0 ? p : s.variant) !==
          null && c !== void 0
          ? c
          : "y4tVGU4Jx",
    };
  },
  Ro = (t, e) => e.join("-") + t.layoutDependency,
  Bo = Bt(function (t, e) {
    let { activeLocale: r, setLocale: n } = de(),
      {
        style: a,
        className: s,
        layoutId: l,
        variant: p,
        uZc7XUvFq: c,
        OgGB2UA1X: i,
        ...f
      } = Eo(t),
      {
        baseVariant: d,
        classNames: x,
        gestureVariant: g,
        setGestureState: h,
        setVariant: S,
        transition: b,
        variants: R,
      } = pe({
        cycleOrder: Vo,
        defaultVariant: "y4tVGU4Jx",
        enabledGestures: To,
        transitions: ko,
        variant: p,
        variantClassNames: _o,
      }),
      _ = Ro(t, R),
      { activeVariantCallback: I, delay: F } = hn(d),
      B = I(async (...N) => {
        if ((h({ isPressed: !1 }), c && (await c(...N)) === !1)) return !1;
      }),
      G = E(null),
      m = se(),
      C = [];
    return u(ht, {
      id: l ?? m,
      children: u(Mo, {
        value: b,
        children: u(fe, {
          href: "https://portal.blowfish.xyz/",
          openInNewTab: !0,
          ...$e(
            {
              GzkxZOjRZ: {
                href: "https://docs.blowfish.xyz/docs/introduction",
              },
            },
            d,
            g
          ),
          children: u(W.a, {
            ...f,
            animate: R,
            className: `${qt(Oo, ...C, "framer-10zqzdu", s, x)} framer-1wc51pd`,
            "data-border": !0,
            "data-framer-name": "New Buttons",
            "data-highlight": !0,
            initial: p,
            layoutDependency: _,
            layoutId: "y4tVGU4Jx",
            onHoverEnd: () => h({ isHovered: !1 }),
            onHoverStart: () => h({ isHovered: !0 }),
            onTap: B,
            onTapCancel: () => h({ isPressed: !1 }),
            onTapStart: () => h({ isPressed: !0 }),
            ref: e ?? G,
            style: {
              "--border-bottom-width": "0px",
              "--border-color": "rgb(255, 255, 255)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              backgroundColor: "rgb(0, 0, 0)",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow:
                "0px 1.4945039749145508px 3.623039960861206px 0px rgba(0, 0, 0, 0.07316634058952332), 0px 4.1321120262146px 10.017241477966309px 0px rgba(0, 0, 0, 0.10499999672174454), 0px 9.94853401184082px 24.117658615112305px 0px rgba(0, 0, 0, 0.13683365285396576), 0px 33px 80px 0px rgba(0, 0, 0, 0.20999999344348907), 0px 0px 0px 0px rgba(0,0,0,0.25)",
              ...a,
            },
            variants: {
              "CyRBy15mh-hover": {
                "--border-color": "rgb(0, 0, 0)",
                boxShadow:
                  "0px 1.4945039749145508px 3.623039960861206px 0px rgba(0, 0, 0, 0.07316634058952332), 0px 4.1321120262146px 10.017241477966309px 0px rgba(0, 0, 0, 0.10499999672174454), 0px 9.94853401184082px 24.117658615112305px 0px rgba(0, 0, 0, 0.13683365285396576), 0px 33px 80px 0px rgba(0, 0, 0, 0.20999999344348907), 0px 0px 0px 6px rgba(0, 0, 0, 0.12)",
              },
              "CyRBy15mh-pressed": {
                "--border-color": "rgb(0, 0, 0)",
                boxShadow:
                  "0px 1.4945039749145508px 3.623039960861206px 0px rgba(0, 0, 0, 0.07316634058952332), 0px 4.1321120262146px 10.017241477966309px 0px rgba(0, 0, 0, 0.10499999672174454), 0px 9.94853401184082px 24.117658615112305px 0px rgba(0, 0, 0, 0.13683365285396576), 0px 33px 80px 0px rgba(0, 0, 0, 0.20999999344348907), 0px 0px 0px 3px rgb(245, 234, 131)",
              },
              "GzkxZOjRZ-hover": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                boxShadow: "none",
              },
              "KbXFPBpYr-hover": {
                backgroundColor: "rgb(223, 225, 222)",
                boxShadow: "none",
              },
              "y4tVGU4Jx-hover": {
                "--border-color": "rgb(0, 0, 0)",
                boxShadow:
                  "0px 1.4945039749145508px 3.623039960861206px 0px rgba(0, 0, 0, 0.07316634058952332), 0px 4.1321120262146px 10.017241477966309px 0px rgba(0, 0, 0, 0.10499999672174454), 0px 9.94853401184082px 24.117658615112305px 0px rgba(0, 0, 0, 0.13683365285396576), 0px 33px 80px 0px rgba(0, 0, 0, 0.20999999344348907), 0px 0px 0px 3px rgb(245, 234, 131)",
              },
              CyRBy15mh: {
                boxShadow:
                  "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.05267), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.0465), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.01829), 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.07559), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.06674), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.02625), 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.09851), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.08697), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.03421), 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.15118), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.13347), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0525), 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.17997), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.15889), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0625)",
              },
              GzkxZOjRZ: {
                "--border-bottom-width": "2px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-top-width": "2px",
                backgroundColor: "rgba(0, 0, 0, 0)",
                boxShadow: "none",
              },
              KbXFPBpYr: {
                "--border-color": "rgb(231, 234, 232)",
                backgroundColor: "rgb(231, 234, 232)",
                boxShadow: "none",
              },
            },
            ...$e(
              {
                "CyRBy15mh-hover": { "data-framer-name": void 0 },
                "CyRBy15mh-pressed": { "data-framer-name": void 0 },
                "GzkxZOjRZ-hover": { "data-framer-name": void 0 },
                "KbXFPBpYr-hover": { "data-framer-name": void 0 },
                "y4tVGU4Jx-hover": { "data-framer-name": void 0 },
                CyRBy15mh: { "data-framer-name": "Small" },
                GzkxZOjRZ: { "data-framer-name": "Outline" },
                KbXFPBpYr: { "data-framer-name": "Secondary" },
              },
              d,
              g
            ),
            children: u(yn, {
              __fromCanvasComponent: !0,
              children: u(ae, {
                children: u(W.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                    "--framer-font-family":
                      '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                    "--framer-line-height": "2em",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                  },
                  children: "Get Started for Free",
                }),
              }),
              className: "framer-142so6v",
              "data-framer-name": "Get started",
              fonts: ["CUSTOM;GT Planar Medium"],
              layoutDependency: _,
              layoutId: "XfjbvJfek",
              style: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
              text: i,
              verticalAlignment: "top",
              withExternalLayout: !0,
              ...$e(
                {
                  GzkxZOjRZ: {
                    children: u(ae, {
                      children: u(W.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                          "--framer-font-family":
                            '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                          "--framer-line-height": "2em",
                        },
                        children: "Get Started",
                      }),
                    }),
                  },
                  KbXFPBpYr: {
                    children: u(ae, {
                      children: u(W.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                          "--framer-font-family":
                            '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                          "--framer-line-height": "2em",
                        },
                        children: "Get Started",
                      }),
                    }),
                  },
                },
                d,
                g
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Ao = [
    '.framer-YkSCt[data-border="true"]::after, .framer-YkSCt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-YkSCt.framer-1wc51pd, .framer-YkSCt .framer-1wc51pd { display: block; }",
    ".framer-YkSCt.framer-10zqzdu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: wrap; gap: 10px; height: 56px; justify-content: center; overflow: visible; padding: 12px 92px 12px 92px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-YkSCt .framer-142so6v { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-YkSCt.framer-10zqzdu { gap: 0px; } .framer-YkSCt.framer-10zqzdu > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-YkSCt.framer-10zqzdu > :first-child { margin-top: 0px; } .framer-YkSCt.framer-10zqzdu > :last-child { margin-bottom: 0px; } }",
    ".framer-YkSCt.framer-v-14c6uum.framer-10zqzdu { width: 208px; }",
    ".framer-YkSCt.framer-v-z33k4l.framer-10zqzdu { padding: 20px 40px 20px 40px; width: 208px; }",
    ".framer-YkSCt.framer-v-14c6uum.hover.framer-10zqzdu, .framer-YkSCt.framer-v-14c6uum.pressed.framer-10zqzdu { padding: 20px 40px 20px 40px; }",
  ],
  Kt = ue(Bo, Ao, "framer-YkSCt"),
  ui = Kt;
Kt.displayName = "New Btns";
Kt.defaultProps = { height: 56, width: 273 };
wt(Kt, {
  variant: {
    options: ["y4tVGU4Jx", "KbXFPBpYr", "CyRBy15mh", "GzkxZOjRZ"],
    optionTitles: ["New Buttons", "Secondary", "Small", "Outline"],
    title: "Variant",
    type: o.Enum,
  },
  uZc7XUvFq: { title: "Tap", type: o.EventHandler },
  OgGB2UA1X: {
    defaultValue: "Get Started",
    displayTextArea: !1,
    title: "Title",
    type: o.String,
  },
});
me(Kt, [
  {
    family: "GT Planar Medium",
    url: "https://framerusercontent.com/assets/4Welnf17piVF0GW1Rp6mfq47pJ4.ttf",
  },
]);
Ft.loadFonts(["CUSTOM;GT Planar Regular"]);
var hi = [
    {
      family: "GT Planar Regular",
      url: "https://framerusercontent.com/assets/NW5VBHmrRlALVX6hereKE89VgTE.ttf",
    },
  ],
  gi = [
    '.framer-NnaVw .framer-styles-preset-16ztncq:not(.rich-text-wrapper), .framer-NnaVw .framer-styles-preset-16ztncq.rich-text-wrapper p { --framer-font-family: "GT Planar Regular", "GT Planar Regular Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.3px; --framer-line-height: 22.4px; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  yi = "framer-NnaVw";
Ft.loadFonts(["CUSTOM;GT Planar Bold"]);
var wi = [
    {
      family: "GT Planar Bold",
      url: "https://framerusercontent.com/assets/DdbZorHWq6kgG2tJT9sjkHHE.ttf",
    },
  ],
  Si = [
    '.framer-0Ugtm .framer-styles-preset-i3vyu2:not(.rich-text-wrapper), .framer-0Ugtm .framer-styles-preset-i3vyu2.rich-text-wrapper h3 { --framer-font-family: "GT Planar Bold", "GT Planar Bold Placeholder", sans-serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.5px; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  Ci = "framer-0Ugtm";
Ft.loadFonts([
  "CUSTOM;GT Planar Bold",
  "Inter-Black",
  "Inter-BlackItalic",
  "Inter-BoldItalic",
]);
var Oi = [
    {
      family: "GT Planar Bold",
      url: "https://framerusercontent.com/assets/DdbZorHWq6kgG2tJT9sjkHHE.ttf",
    },
  ],
  _i = [
    '.framer-9NwKA .framer-styles-preset-n1pvnt:not(.rich-text-wrapper), .framer-9NwKA .framer-styles-preset-n1pvnt.rich-text-wrapper h3 { --framer-font-family: "GT Planar Bold", "GT Planar Bold Placeholder", sans-serif; --framer-font-family-bold: "Inter-Black", "Inter", sans-serif; --framer-font-family-bold-italic: "Inter-BlackItalic", "Inter", sans-serif; --framer-font-family-italic: "Inter-BoldItalic", "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 38px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.5px; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  ki = "framer-9NwKA";
export {
  Ge as a,
  We as b,
  q as c,
  ai as d,
  ui as e,
  hi as f,
  gi as g,
  yi as h,
  wi as i,
  Si as j,
  Ci as k,
  Oi as l,
  _i as m,
  ki as n,
};
//# sourceMappingURL=chunk-JLFITOMK.mjs.map
