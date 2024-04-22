import {
  a as D,
  b as x1,
  c as y1,
  d as K,
  e as V,
  f as re,
  g as ae,
  h as te,
  i as ie,
  j as ne,
  k as oe,
  l as se,
  m as le,
  n as me,
} from "./chunk-JLFITOMK.mjs";
import { a as fe, b as ce, c as de } from "./chunk-QYXPTBX3.mjs";
import { a as ge, b as xe, c as ye } from "./chunk-X2L2KT44.mjs";
import {
  a as S1,
  b as l1,
  f as z1,
  g as E1,
  h as m1,
  i as f1,
  j as c1,
} from "./chunk-ZLTHNVAZ.mjs";
import { a as T, b as T1 } from "./chunk-XZAOBLPA.mjs";
import { a as q1 } from "./chunk-IUFPEQHK.mjs";
import "./chunk-O5WB36OF.mjs";
import { a as pe, b as he, c as ue } from "./chunk-BCH3JLBN.mjs";
import { a as J1, b as $1, c as ee, e as V1 } from "./chunk-XLKUJOEB.mjs";
import { a as e, b as t } from "./chunk-BQSGRCRV.mjs";
import {
  $ as P,
  K as H,
  M,
  Q as D1,
  S as s1,
  V as g1,
  Y as z,
  Z as U1,
  _ as o,
  aa as O1,
  ba as Y1,
  c as r,
  ca as h,
  ea as c,
  g as q,
  ga as f,
  ia as v,
  k as a1,
  m as _,
  ma as X1,
  n as G1,
  na as Q1,
  o as t1,
  oa as i1,
  p as w,
  qa as s,
  ra as K1,
  s as S,
  ta as d,
  ua as i,
  va as G,
  w as a,
  wa as C,
  x as A,
} from "./chunk-4GKU57PD.mjs";
import "./chunk-C2L34XTF.mjs";
import "./chunk-ELYU6EKT.mjs";
var ar = {
    dJXajMr0F: { hover: !0, pressed: !0 },
    GvmDfnQm6: { hover: !0, pressed: !0 },
    QIWiriWE8: { hover: !0, pressed: !0 },
  },
  tr = ["QIWiriWE8", "dJXajMr0F", "GvmDfnQm6"],
  ir = "framer-ByNMR",
  nr = {
    dJXajMr0F: "framer-v-1l4x6p",
    GvmDfnQm6: "framer-v-10bnprl",
    QIWiriWE8: "framer-v-1oq6ael",
  };
function we(m, ...l) {
  let g = {};
  return l?.forEach((u) => u && Object.assign(g, m[u])), g;
}
var or = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  sr = ({ value: m, children: l }) => {
    let g = a1(S),
      u = m ?? g.transition,
      x = t1(() => ({ ...g, transition: u }), [JSON.stringify(u)]);
    return e(S.Provider, { value: x, children: l });
  },
  lr = {
    "Variant 1": "QIWiriWE8",
    "Variant 2": "dJXajMr0F",
    "Variant 3": "GvmDfnQm6",
  },
  mr = ({ height: m, id: l, title: g, width: u, ...x }) => {
    var N, L, W;
    return {
      ...x,
      frDEA3RBK:
        (N = g ?? x.frDEA3RBK) !== null && N !== void 0 ? N : "Learn More",
      variant:
        (W = (L = lr[x.variant]) !== null && L !== void 0 ? L : x.variant) !==
          null && W !== void 0
          ? W
          : "QIWiriWE8",
    };
  },
  fr = (m, l) => l.join("-") + m.layoutDependency,
  cr = q(function (m, l) {
    let { activeLocale: g, setLocale: u } = H(),
      {
        style: x,
        className: N,
        layoutId: L,
        variant: W,
        frDEA3RBK: Y,
        ...n
      } = mr(m),
      {
        baseVariant: X,
        classNames: b,
        gestureVariant: k,
        setGestureState: F,
        setVariant: e1,
        transition: j,
        variants: p,
      } = i1({
        cycleOrder: tr,
        defaultVariant: "QIWiriWE8",
        enabledGestures: ar,
        transitions: or,
        variant: W,
        variantClassNames: nr,
      }),
      B = fr(m, p),
      Z = w(null),
      R = _(),
      Q = [];
    return e(A, {
      id: L ?? R,
      children: e(sr, {
        value: j,
        children: e(h, {
          href: "https://docs.blowfish.xyz/reference/scan-domain-1",
          openInNewTab: !0,
          ...we(
            {
              dJXajMr0F: {
                href: "https://docs.blowfish.xyz/reference/scan-transactions-evm",
              },
            },
            X,
            k
          ),
          children: t(a.a, {
            ...n,
            animate: p,
            className: `${z(ir, ...Q, "framer-1oq6ael", N, b)} framer-1bb0h4y`,
            "data-framer-name": "Variant 1",
            initial: W,
            layoutDependency: B,
            layoutId: "QIWiriWE8",
            onHoverEnd: () => F({ isHovered: !1 }),
            onHoverStart: () => F({ isHovered: !0 }),
            onTap: () => F({ isPressed: !1 }),
            onTapCancel: () => F({ isPressed: !1 }),
            onTapStart: () => F({ isPressed: !0 }),
            ref: l ?? Z,
            style: {
              "--border-bottom-width": "0px",
              "--border-color": "rgba(0, 0, 0, 0)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              opacity: 0.4,
              ...x,
            },
            variants: {
              "dJXajMr0F-hover": {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                opacity: 0.6,
              },
              "dJXajMr0F-pressed": {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                opacity: 0.6,
              },
              "GvmDfnQm6-hover": {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                opacity: 0.6,
              },
              "GvmDfnQm6-pressed": {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                opacity: 0.6,
              },
              "QIWiriWE8-hover": {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                opacity: 0.6,
              },
              "QIWiriWE8-pressed": {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                opacity: 0.6,
              },
            },
            ...we(
              {
                "dJXajMr0F-hover": {
                  "data-border": !0,
                  "data-framer-name": void 0,
                },
                "dJXajMr0F-pressed": {
                  "data-border": !0,
                  "data-framer-name": void 0,
                },
                "GvmDfnQm6-hover": {
                  "data-border": !0,
                  "data-framer-name": void 0,
                },
                "GvmDfnQm6-pressed": {
                  "data-border": !0,
                  "data-framer-name": void 0,
                },
                "QIWiriWE8-hover": {
                  "data-border": !0,
                  "data-framer-name": void 0,
                },
                "QIWiriWE8-pressed": {
                  "data-border": !0,
                  "data-framer-name": void 0,
                },
                dJXajMr0F: { "data-framer-name": "Variant 2" },
                GvmDfnQm6: { "data-framer-name": "Variant 3" },
              },
              X,
              k
            ),
            children: [
              e(i, {
                __fromCanvasComponent: !0,
                children: e(r, {
                  children: e(a.p, {
                    style: {
                      "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                      "--framer-font-family":
                        '"DM Sans", "DM Sans Placeholder", sans-serif',
                      "--framer-font-weight": "700",
                      "--framer-letter-spacing": "-0.02em",
                      "--framer-line-height": "140%",
                      "--framer-text-alignment": "right",
                    },
                    children: "Learn More",
                  }),
                }),
                className: "framer-s27ble",
                "data-framer-name": "Learn More",
                fonts: ["GF;DM Sans-700"],
                layoutDependency: B,
                layoutId: "kUssaYd6M",
                text: Y,
                verticalAlignment: "center",
                withExternalLayout: !0,
              }),
              e(s, {
                className: "framer-5t31a7",
                "data-framer-name": "Icon",
                fill: "rgba(0,0,0,1)",
                intrinsicHeight: 11,
                intrinsicWidth: 8,
                layoutDependency: B,
                layoutId: "rzDUUsnbs",
                svg: `<svg width="8" height="11" viewBox="-1 -1 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 9L5.25 4.5L0.75 -7.15256e-07" stroke="black" stroke-width="1.47335" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  dr = [
    '.framer-ByNMR[data-border="true"]::after, .framer-ByNMR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ByNMR.framer-1bb0h4y, .framer-ByNMR .framer-1bb0h4y { display: block; }",
    ".framer-ByNMR.framer-1oq6ael { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-ByNMR .framer-s27ble { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-ByNMR .framer-5t31a7 { aspect-ratio: 0.8888888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 11px); position: relative; width: 9px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ByNMR.framer-1oq6ael { gap: 0px; } .framer-ByNMR.framer-1oq6ael > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-ByNMR.framer-1oq6ael > :first-child { margin-left: 0px; } .framer-ByNMR.framer-1oq6ael > :last-child { margin-right: 0px; } }",
  ],
  d1 = P(cr, dr, "framer-ByNMR"),
  N1 = d1;
d1.displayName = "text button";
d1.defaultProps = { height: 22.5, width: 99.5 };
g1(d1, {
  variant: {
    options: ["QIWiriWE8", "dJXajMr0F", "GvmDfnQm6"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: s1.Enum,
  },
  frDEA3RBK: {
    defaultValue: "Learn More",
    displayTextArea: !1,
    title: "Title",
    type: s1.String,
  },
});
G(d1, [
  {
    family: "DM Sans",
    style: "normal",
    url: "https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2",
    weight: "700",
  },
]);
var pr = ["gzJ8zTNMA"],
  hr = "framer-wzD9C",
  ur = { gzJ8zTNMA: "framer-v-1t5uoso" };
var gr = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  xr = ({ value: m, children: l }) => {
    let g = a1(S),
      u = m ?? g.transition,
      x = t1(() => ({ ...g, transition: u }), [JSON.stringify(u)]);
    return e(S.Provider, { value: x, children: l });
  },
  yr = ({ height: m, id: l, width: g, ...u }) => ({ ...u }),
  wr = (m, l) => l.join("-") + m.layoutDependency,
  vr = q(function (m, l) {
    let { activeLocale: g, setLocale: u } = H(),
      { style: x, className: N, layoutId: L, variant: W, ...Y } = yr(m),
      {
        baseVariant: n,
        classNames: X,
        gestureVariant: b,
        setGestureState: k,
        setVariant: F,
        transition: e1,
        variants: j,
      } = i1({
        cycleOrder: pr,
        defaultVariant: "gzJ8zTNMA",
        transitions: gr,
        variant: W,
        variantClassNames: ur,
      }),
      p = wr(m, j),
      B = Q1(),
      Z = D1(() => W),
      R = w(null),
      Q = _(),
      o1 = [];
    return e(A, {
      id: L ?? Q,
      children: e(xr, {
        value: e1,
        children: e(a.div, {
          ...Y,
          animate: j,
          className: z(hr, ...o1, "framer-1t5uoso", N, X),
          "data-framer-name": "Variant 1",
          initial: B ? W : Z,
          layoutDependency: p,
          layoutId: "gzJ8zTNMA",
          onHoverEnd: () => k({ isHovered: !1 }),
          onHoverStart: () => k({ isHovered: !0 }),
          onTap: () => k({ isPressed: !1 }),
          onTapCancel: () => k({ isPressed: !1 }),
          onTapStart: () => k({ isPressed: !0 }),
          ref: l ?? R,
          style: { ...x },
          children: e(s, {
            className: "framer-uchald",
            "data-framer-name": "graphic",
            fill: "black",
            intrinsicHeight: 33,
            intrinsicWidth: 172,
            layoutDependency: p,
            layoutId: "FnXWgGVPt",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 172 33"><path fill="#161616" d="M151.26 16.64c-.89-.58-1.86-1-2.78-1.52-.6-.33-1.24-.63-1.76-1.06-.88-.72-.7-2.15.22-2.77 1.33-.88 3.52-.39 3.76 1.41 0 .04.04.07.08.07h2c.05 0 .09-.04.07-.1a3.94 3.94 0 0 0-1.46-2.94 4.66 4.66 0 0 0-2.84-.97c-5.28 0-5.77 5.59-2.92 7.35.33.2 3.12 1.6 4.1 2.21 1 .61 1.3 1.73.88 2.6-.4.81-1.4 1.37-2.42 1.3-1.1-.06-1.96-.66-2.26-1.59-.05-.17-.08-.5-.08-.63a.09.09 0 0 0-.08-.08h-2.17c-.03 0-.07.04-.07.08 0 1.56.39 2.43 1.45 3.22 1 .75 2.1 1.07 3.22 1.07 2.97 0 4.5-1.68 4.8-3.41.28-1.7-.22-3.23-1.74-4.24Zm-94.2-7.59h-2.02a.09.09 0 0 0-.07.05l-1.78 5.86a.08.08 0 0 1-.16 0L51.25 9.1c-.01-.04-.04-.05-.08-.05h-3.31c-.04 0-.08.04-.08.07v14.96c0 .04.04.08.08.08h2.17c.04 0 .08-.04.08-.08V12.7c0-.09.13-.1.15-.02l1.8 5.9.13.4c0 .05.03.06.07.06h1.67c.04 0 .06-.03.07-.05l.13-.42 1.8-5.9c.02-.08.15-.06.15.03v11.37c0 .04.04.08.08.08h2.17c.04 0 .08-.04.08-.08V9.12c0-.03-.04-.07-.08-.07h-1.27Zm60.98 0a.09.09 0 0 0-.08.05l-1.78 5.86a.08.08 0 0 1-.16 0l-1.78-5.86c0-.04-.03-.05-.07-.05h-3.3c-.04 0-.08.04-.08.07v14.96c0 .04.04.08.08.08h2.17c.03 0 .07-.04.07-.08V12.7c0-.09.13-.1.16-.02l1.8 5.9.12.4c.02.05.04.06.08.06h1.66a.1.1 0 0 0 .08-.05l.13-.42 1.8-5.9c.02-.08.15-.06.15.03v11.37c0 .04.04.08.08.08h2.17c.04 0 .08-.04.08-.08V9.12c0-.03-.04-.07-.08-.07h-3.3Zm-27.99 0H79.8c-.03 0-.07.04-.07.07V11c0 .04.04.08.07.08h3.97v13c0 .05.04.09.07.09h2.17c.04 0 .08-.04.08-.08V11.07h3.96c.04 0 .08-.04.08-.08V9.12c0-.03-.02-.07-.08-.07Zm12.8 15.11h1.98c.05 0 .09-.06.07-.1l-4.08-15.01c0-.04-.03-.06-.07-.06H97.9a.09.09 0 0 0-.07.06l-4.08 15c-.02.05.02.1.07.1h1.98c.04 0 .06-.02.08-.05l1.18-4.36c.01-.04.04-.05.08-.05h4.36c.04 0 .07.02.08.05l1.18 4.36c.02.03.06.06.08.06Zm-5.18-6.61 1.58-5.85a.08.08 0 0 1 .16 0l1.58 5.85c.02.05-.02.1-.07.1h-3.17c-.06 0-.1-.05-.08-.1Zm38.85 6.61h1.98c.05 0 .09-.06.08-.1L134.5 9.04c-.02-.04-.04-.06-.08-.06h-2.83a.09.09 0 0 0-.08.06l-4.08 15c-.01.05.03.1.08.1h1.97c.04 0 .07-.02.08-.05l1.18-4.36c.02-.04.04-.05.08-.05h4.37c.03 0 .06.02.07.05l1.19 4.36c0 .03.04.06.07.06Zm-5.18-6.61 1.59-5.85a.08.08 0 0 1 .15 0l1.59 5.85c0 .05-.03.1-.08.1h-3.17c-.05 0-.1-.05-.08-.1Zm-64.12 4.39V17.3c0-.04.03-.08.07-.08h5.78c.04 0 .08-.04.08-.07v-1.87a.09.09 0 0 0-.08-.08H67.3c-.04 0-.07-.04-.07-.08v-3.96c0-.04.03-.08.07-.08h6.58c.04 0 .08-.04.08-.08V9.14a.09.09 0 0 0-.08-.08h-8.9a.09.09 0 0 0-.08.08v14.94c0 .04.04.08.08.08h9.17c.04 0 .08-.04.08-.08V22.1a.09.09 0 0 0-.08-.08h-6.86c-.04-.01-.06-.04-.06-.09Zm103.86 2.09-7.5-7.74a.08.08 0 0 1 0-.1l6.75-7a.07.07 0 0 0-.06-.13h-2.76c-.03 0-.04.01-.05.03l-5.73 5.93a.08.08 0 0 1-.13-.05V9.14a.09.09 0 0 0-.08-.08h-2.17a.09.09 0 0 0-.08.08v14.95c0 .04.04.08.08.08h2.17c.04 0 .08-.04.08-.08v-6.58c0-.07.09-.1.13-.05l6.5 6.68a.1.1 0 0 0 .04.03h2.77c.05-.01.1-.1.04-.14Z"/><path fill="#E17726" stroke="#E17726" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m32.96 1-13.14 9.72 2.45-5.73L32.96 1Z"/><path fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m2.66 1 13.02 9.8L13.35 5 2.66 1Zm25.57 22.53-3.5 5.34 7.49 2.06 2.14-7.28-6.13-.12Zm-26.96.12 2.13 7.28 7.47-2.06-3.48-5.34-6.12.12Z"/><path fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m10.47 14.51-2.08 3.14 7.4.34-.24-7.97-5.08 4.5Zm14.68.01-5.16-4.6-.17 8.07 7.4-.34-2.07-3.13ZM10.87 28.87l4.49-2.16-3.86-3-.63 5.16Zm9.4-2.17 4.46 2.17-.6-5.17-3.86 3Z"/><path fill="#D5BFB2" stroke="#D5BFB2" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m24.73 28.87-4.46-2.16.36 2.9-.04 1.23 4.14-1.97Zm-13.86 0 4.16 1.97-.03-1.23.36-2.9-4.49 2.16Z"/><path fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m15.1 21.78-3.7-1.08 2.62-1.2 1.09 2.28Zm5.41 0 1.1-2.29 2.63 1.2-3.73 1.1Z"/><path fill="#CC6228" stroke="#CC6228" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m10.87 28.87.65-5.34-4.13.12 3.48 5.22Zm13.23-5.34.63 5.34 3.5-5.22-4.13-.12Zm3.13-5.88-7.4.34.68 3.8 1.1-2.3 2.63 1.2 2.99-3.04ZM11.4 20.7l2.62-1.2 1.09 2.28.69-3.8-7.4-.33 3 3.05Z"/><path fill="#E27525" stroke="#E27525" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m8.4 17.65 3.1 6.05-.1-3-3-3.05Zm15.84 3.05-.12 3 3.1-6.05-2.98 3.05Zm-8.44-2.71-.7 3.8.88 4.48.2-5.91-.38-2.37Zm4.02 0-.36 2.36.18 5.92.87-4.49-.69-3.8Z"/><path fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m20.51 21.78-.87 4.49.63.44 3.85-3 .12-3.01-3.73 1.08ZM11.4 20.7l.1 3 3.86 3 .62-.43-.87-4.49-3.72-1.08Z"/><path fill="#C0AC9D" stroke="#C0AC9D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m20.6 30.84.03-1.23-.34-.28h-4.96l-.33.28.03 1.23-4.16-1.97 1.46 1.2 2.95 2.03h5.05l2.96-2.04 1.44-1.19-4.14 1.97Z"/><path fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m20.27 26.7-.63-.43h-3.66l-.62.44-.36 2.9.33-.28h4.96l.34.28-.36-2.9Z"/><path fill="#763E1A" stroke="#763E1A" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M33.52 11.35 34.62 6l-1.66-5-12.7 9.4 4.89 4.11 6.9 2.01 1.52-1.77-.66-.48 1.05-.96-.8-.62 1.05-.8-.7-.54ZM1 5.99l1.12 5.36-.72.53 1.07.8-.8.63 1.04.96-.66.48 1.52 1.77 6.9-2 4.89-4.13L2.66 1 1 5.99Z"/><path fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="m32.05 16.52-6.9-2 2.08 3.13-3.1 6.05 4.1-.05h6.13l-2.31-7.13Zm-21.58-2.01-6.9 2.01-2.3 7.13H7.4l4.1.05-3.1-6.05 2.08-3.14Zm9.35 3.48.45-7.6 2-5.4h-8.92l2 5.4.45 7.6.17 2.38v5.9h3.67l.02-5.9.16-2.38Z"/></svg>',
            withExternalLayout: !0,
          }),
        }),
      }),
    });
  }),
  Cr = [
    '.framer-wzD9C[data-border="true"]::after, .framer-wzD9C [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-wzD9C.framer-1um937q, .framer-wzD9C .framer-1um937q { display: block; }",
    ".framer-wzD9C.framer-1t5uoso { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-wzD9C .framer-uchald { aspect-ratio: 5.212121212121212 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); position: relative; width: 172px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wzD9C.framer-1t5uoso { gap: 0px; } .framer-wzD9C.framer-1t5uoso > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-wzD9C.framer-1t5uoso > :first-child { margin-left: 0px; } .framer-wzD9C.framer-1t5uoso > :last-child { margin-right: 0px; } }",
  ],
  L1 = P(vr, Cr, "framer-wzD9C"),
  J = L1;
L1.displayName = "Metamask Logo";
L1.defaultProps = { height: 33, width: 172 };
G(L1, []);
var Nr = C(V),
  Lr = {
    oHUY5lEtV: { hover: !0, pressed: !0 },
    qMc_epy1P: { hover: !0, pressed: !0 },
    QOltFhqTI: { hover: !0, pressed: !0 },
  },
  Ir = ["qMc_epy1P", "oHUY5lEtV", "QOltFhqTI"],
  Wr = "framer-gAEBf",
  br = {
    oHUY5lEtV: "framer-v-sgtn9p",
    qMc_epy1P: "framer-v-93opud",
    QOltFhqTI: "framer-v-1mcigsl",
  };
function $(m, ...l) {
  let g = {};
  return l?.forEach((u) => u && Object.assign(g, m[u])), g;
}
var kr = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Mr = ({ value: m, children: l }) => {
    let g = a1(S),
      u = m ?? g.transition,
      x = t1(() => ({ ...g, transition: u }), [JSON.stringify(u)]);
    return e(S.Provider, { value: x, children: l });
  },
  jr = {
    "Variant 1": "qMc_epy1P",
    "Variant 2": "oHUY5lEtV",
    "Variant 3": "QOltFhqTI",
  },
  Zr = ({ height: m, id: l, width: g, ...u }) => {
    var x, N;
    return {
      ...u,
      variant:
        (N = (x = jr[u.variant]) !== null && x !== void 0 ? x : u.variant) !==
          null && N !== void 0
          ? N
          : "qMc_epy1P",
    };
  },
  Fr = (m, l) => l.join("-") + m.layoutDependency,
  Br = q(function (m, l) {
    let { activeLocale: g, setLocale: u } = H(),
      { style: x, className: N, layoutId: L, variant: W, ...Y } = Zr(m),
      {
        baseVariant: n,
        classNames: X,
        gestureVariant: b,
        setGestureState: k,
        setVariant: F,
        transition: e1,
        variants: j,
      } = i1({
        cycleOrder: Ir,
        defaultVariant: "qMc_epy1P",
        enabledGestures: Lr,
        transitions: kr,
        variant: W,
        variantClassNames: br,
      }),
      p = Fr(m, j),
      B = w(null),
      Z = () =>
        !!(
          ["QOltFhqTI-hover", "QOltFhqTI-pressed"].includes(b) ||
          n === "QOltFhqTI"
        ),
      R = () =>
        !(
          ["oHUY5lEtV-hover", "oHUY5lEtV-pressed"].includes(b) ||
          n === "oHUY5lEtV"
        ),
      Q = () =>
        !(
          [
            "oHUY5lEtV-hover",
            "QOltFhqTI-hover",
            "QOltFhqTI-pressed",
            "oHUY5lEtV-pressed",
          ].includes(b) || ["oHUY5lEtV", "QOltFhqTI"].includes(n)
        ),
      o1 = () =>
        !!(
          ["oHUY5lEtV-hover", "oHUY5lEtV-pressed"].includes(b) ||
          n === "oHUY5lEtV"
        ),
      Z1 = _(),
      F1 = [];
    return e(A, {
      id: L ?? Z1,
      children: e(Mr, {
        value: e1,
        children: t(a.div, {
          ...Y,
          animate: j,
          className: z(Wr, ...F1, "framer-93opud", N, X),
          "data-border": !0,
          "data-framer-name": "Variant 1",
          initial: W,
          layoutDependency: p,
          layoutId: "qMc_epy1P",
          onHoverEnd: () => k({ isHovered: !1 }),
          onHoverStart: () => k({ isHovered: !0 }),
          onTap: () => k({ isPressed: !1 }),
          onTapCancel: () => k({ isPressed: !1 }),
          onTapStart: () => k({ isPressed: !0 }),
          ref: l ?? B,
          style: {
            "--border-bottom-width": "2px",
            "--border-color": "rgba(255, 255, 255, 0.56)",
            "--border-left-width": "2px",
            "--border-right-width": "2px",
            "--border-style": "solid",
            "--border-top-width": "2px",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.24)",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            boxShadow:
              "8px 8px 16px 0px rgba(138, 138, 138, 0.1599999964237213)",
            WebkitBackdropFilter: "blur(8px)",
            ...x,
          },
          variants: {
            "oHUY5lEtV-hover": {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(173, 227, 168)",
              "--border-left-width": "3px",
              "--border-right-width": "3px",
              "--border-top-width": "3px",
            },
            "oHUY5lEtV-pressed": {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(173, 227, 168)",
              "--border-left-width": "3px",
              "--border-right-width": "3px",
              "--border-top-width": "3px",
            },
            "qMc_epy1P-hover": {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(173, 227, 168)",
              "--border-left-width": "3px",
              "--border-right-width": "3px",
              "--border-top-width": "3px",
            },
            "qMc_epy1P-pressed": {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(173, 227, 168)",
              "--border-left-width": "3px",
              "--border-right-width": "3px",
              "--border-top-width": "3px",
            },
            "QOltFhqTI-hover": {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(173, 227, 168)",
              "--border-left-width": "3px",
              "--border-right-width": "3px",
              "--border-top-width": "3px",
            },
          },
          ...$(
            {
              "oHUY5lEtV-hover": { "data-framer-name": void 0 },
              "oHUY5lEtV-pressed": { "data-framer-name": void 0 },
              "qMc_epy1P-hover": { "data-framer-name": void 0 },
              "qMc_epy1P-pressed": { "data-framer-name": void 0 },
              "QOltFhqTI-hover": { "data-framer-name": void 0 },
              "QOltFhqTI-pressed": { "data-framer-name": void 0 },
              oHUY5lEtV: { "data-framer-name": "Variant 2" },
              QOltFhqTI: { "data-framer-name": "Variant 3" },
            },
            n,
            b
          ),
          children: [
            Z() &&
              e(a.div, {
                className: "framer-x7ydtx",
                "data-framer-name": "Frame 6356619",
                layoutDependency: p,
                layoutId: "bPsgfSsdf",
                style: {
                  background:
                    "linear-gradient(-88.76563688091204deg, rgba(173, 227, 168, 1) 0%, rgba(139, 230, 130, 1) 100%)",
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                },
                children: e(i, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(a.p, {
                      style: {
                        "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                        "--framer-font-family":
                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "700",
                        "--framer-letter-spacing": "-0.5px",
                        "--framer-line-height": "16px",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "most popular",
                    }),
                  }),
                  className: "framer-1fc0ouu",
                  "data-framer-name": "most popular",
                  fonts: ["GF;DM Sans-700"],
                  layoutDependency: p,
                  layoutId: "HHy5cgMX1",
                  style: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
            t(a.div, {
              className: "framer-13sbc92",
              "data-framer-name": "title",
              layoutDependency: p,
              layoutId: "CWt8TP2k1",
              children: [
                e(i, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(a.p, {
                      style: {
                        "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                        "--framer-font-family":
                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                        "--framer-font-size": "32px",
                        "--framer-font-weight": "700",
                        "--framer-letter-spacing": "-0.5px",
                        "--framer-line-height": "40px",
                      },
                      children: "Growth",
                    }),
                  }),
                  className: "framer-n85ptp",
                  "data-framer-name": "Growth",
                  fonts: ["GF;DM Sans-700"],
                  layoutDependency: p,
                  layoutId: "DHmoj2GEX",
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...$(
                    {
                      oHUY5lEtV: {
                        children: e(r, {
                          children: e(a.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-font-size": "32px",
                              "--framer-font-weight": "700",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "40px",
                            },
                            children: "Enterprise",
                          }),
                        }),
                      },
                      QOltFhqTI: {
                        children: e(r, {
                          children: e(a.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-font-size": "32px",
                              "--framer-font-weight": "700",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "40px",
                            },
                            children: "Free",
                          }),
                        }),
                      },
                    },
                    n,
                    b
                  ),
                }),
                e(i, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(a.p, {
                      style: {
                        "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                        "--framer-font-family":
                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "20px",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                      },
                      children: "A plan that grows with your business.",
                    }),
                  }),
                  className: "framer-qerfxs",
                  "data-framer-name": "A plan that grows with your business.",
                  fonts: ["GF;DM Sans-regular"],
                  layoutDependency: p,
                  layoutId: "VMHkNVrv9",
                  style: { "--extracted-r6o4lv": "rgba(0, 0, 0, 0.6)" },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...$(
                    {
                      oHUY5lEtV: {
                        children: e(r, {
                          children: e(a.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "20px",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                            },
                            children:
                              "Guaranteed SLAs and world class support.",
                          }),
                        }),
                      },
                      QOltFhqTI: {
                        children: e(r, {
                          children: e(a.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "20px",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                            },
                            children: "Powerful tools for free.",
                          }),
                        }),
                      },
                    },
                    n,
                    b
                  ),
                }),
              ],
            }),
            e(s, {
              className: "framer-ofro4v",
              "data-framer-name": "line",
              fill: "rgba(0,0,0,1)",
              intrinsicHeight: 3,
              intrinsicWidth: 334,
              layoutDependency: p,
              layoutId: "bHb6PpMjs",
              svg: `<svg width="334" height="3" viewBox="-1 -1 334 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.666626" y1="0.5" x2="331.333" y2="0.5" stroke="#E6ECE8"/>
</svg>
`,
              withExternalLayout: !0,
            }),
            t(a.div, {
              className: "framer-1o3bt0u",
              "data-framer-name": "price",
              layoutDependency: p,
              layoutId: "NsMs5gEcj",
              children: [
                R() &&
                  e(a.div, {
                    className: "framer-1u3s3lr",
                    "data-framer-name": "$",
                    layoutDependency: p,
                    layoutId: "C0btcLjBY",
                    children: e(i, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e(a.p, {
                          style: {
                            "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                            "--framer-font-family":
                              '"DM Sans", "DM Sans Placeholder", sans-serif',
                            "--framer-font-size": "24px",
                            "--framer-font-weight": "700",
                            "--framer-letter-spacing": "-0.5px",
                            "--framer-line-height": "24px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))",
                          },
                          children: "$",
                        }),
                      }),
                      className: "framer-1075oij",
                      "data-framer-name": "$",
                      fonts: ["GF;DM Sans-700"],
                      layoutDependency: p,
                      layoutId: "gm3KzJh8t",
                      style: { "--extracted-r6o4lv": "rgba(0, 0, 0, 0.4)" },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                e(i, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(a.p, {
                      style: {
                        "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                        "--framer-font-family":
                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                        "--framer-font-size": "64px",
                        "--framer-font-weight": "700",
                        "--framer-letter-spacing": "-0.5px",
                        "--framer-line-height": "51px",
                        "--framer-text-alignment": "center",
                      },
                      children: "500",
                    }),
                  }),
                  className: "framer-1n2fxg3",
                  "data-framer-name": "500",
                  fonts: ["GF;DM Sans-700"],
                  layoutDependency: p,
                  layoutId: "dU9Inq4Z6",
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...$(
                    {
                      oHUY5lEtV: {
                        children: e(r, {
                          children: e(a.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-font-size": "64px",
                              "--framer-font-weight": "700",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "51px",
                              "--framer-text-alignment": "center",
                            },
                            children: "Custom",
                          }),
                        }),
                      },
                      QOltFhqTI: {
                        children: e(r, {
                          children: e(a.p, {
                            style: {
                              "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                              "--framer-font-family":
                                '"DM Sans", "DM Sans Placeholder", sans-serif',
                              "--framer-font-size": "64px",
                              "--framer-font-weight": "700",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "51px",
                              "--framer-text-alignment": "center",
                            },
                            children: "0",
                          }),
                        }),
                      },
                    },
                    n,
                    b
                  ),
                }),
                e(i, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(a.p, {
                      style: {
                        "--font-selector": "R0Y7RE0gU2Fucy01MDA=",
                        "--framer-font-family":
                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                        "--framer-font-size": "24px",
                        "--framer-font-weight": "500",
                        "--framer-letter-spacing": "-0.5px",
                        "--framer-line-height": "24px",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))",
                      },
                      children: "/mo",
                    }),
                  }),
                  className: "framer-snqev0",
                  "data-framer-name": "/mo",
                  fonts: ["GF;DM Sans-500"],
                  layoutDependency: p,
                  layoutId: "PUe8F8ieZ",
                  style: { "--extracted-r6o4lv": "rgba(0, 0, 0, 0.4)" },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            e(s, {
              className: "framer-4xac44",
              "data-framer-name": "line",
              fill: "rgba(0,0,0,1)",
              intrinsicHeight: 3,
              intrinsicWidth: 334,
              layoutDependency: p,
              layoutId: "BtuJRQGD0",
              svg: `<svg width="334" height="3" viewBox="-1 -1 334 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.666626" y1="0.5" x2="331.333" y2="0.5" stroke="#E6ECE8"/>
</svg>
`,
              withExternalLayout: !0,
            }),
            t(a.div, {
              className: "framer-e6ej4e",
              "data-framer-name": "info-box",
              layoutDependency: p,
              layoutId: "q9NXUghu1",
              children: [
                t(a.div, {
                  className: "framer-wlxojp",
                  "data-framer-name": "bullet-point",
                  layoutDependency: p,
                  layoutId: "bKfTa9FoX",
                  children: [
                    e(s, {
                      className: "framer-4km7e0",
                      "data-framer-name": "checkmark",
                      fill: "rgba(0,0,0,1)",
                      intrinsicHeight: 16,
                      intrinsicWidth: 17,
                      layoutDependency: p,
                      layoutId: "kC5UGUiak",
                      svg: `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.666626" width="16" height="16" rx="8" fill="#191F1D" fill-opacity="0.05"/>
<path d="M5.66663 8L7.66663 10L11.6666 6" stroke="#191F1D" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
`,
                      withExternalLayout: !0,
                    }),
                    e(i, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e(a.p, {
                          style: {
                            "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                            "--framer-font-family":
                              '"DM Sans", "DM Sans Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "20px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                          },
                          children: "Enterprise Support",
                        }),
                      }),
                      className: "framer-1ibc5uc",
                      "data-framer-name": "Enterprise Support",
                      fonts: ["GF;DM Sans-regular"],
                      layoutDependency: p,
                      layoutId: "wc0SlbFqT",
                      style: { "--extracted-r6o4lv": "rgba(0, 0, 0, 0.6)" },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...$(
                        {
                          oHUY5lEtV: {
                            children: e(r, {
                              children: e(a.p, {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "20px",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                                },
                                children: "VIP support",
                              }),
                            }),
                          },
                          QOltFhqTI: {
                            children: e(r, {
                              children: e(a.p, {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "20px",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                                },
                                children:
                                  "Dapp, Transaction, and Token Security",
                              }),
                            }),
                          },
                        },
                        n,
                        b
                      ),
                    }),
                  ],
                }),
                t(a.div, {
                  className: "framer-1fg4x9u",
                  "data-framer-name": "bullet-point",
                  layoutDependency: p,
                  layoutId: "Goig7RAsp",
                  children: [
                    e(s, {
                      className: "framer-1vynwi9",
                      "data-framer-name": "checkmark",
                      fill: "rgba(0,0,0,1)",
                      intrinsicHeight: 16,
                      intrinsicWidth: 17,
                      layoutDependency: p,
                      layoutId: "cBYHMlrPn",
                      svg: `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.666626" width="16" height="16" rx="8" fill="#191F1D" fill-opacity="0.05"/>
<path d="M5.66663 8L7.66663 10L11.6666 6" stroke="#191F1D" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
`,
                      withExternalLayout: !0,
                    }),
                    e(i, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e(a.p, {
                          style: {
                            "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                            "--framer-font-family":
                              '"DM Sans", "DM Sans Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "20px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                          },
                          children: "Uptime SLA",
                        }),
                      }),
                      className: "framer-6mzscw",
                      "data-framer-name": "Uptime SLA",
                      fonts: ["GF;DM Sans-regular"],
                      layoutDependency: p,
                      layoutId: "Dtb_I1OzK",
                      style: { "--extracted-r6o4lv": "rgba(0, 0, 0, 0.6)" },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...$(
                        {
                          oHUY5lEtV: {
                            children: e(r, {
                              children: e(a.p, {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "20px",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                                },
                                children: "Scaled usage discounts",
                              }),
                            }),
                          },
                          QOltFhqTI: {
                            children: e(r, {
                              children: e(a.p, {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "20px",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                                },
                                children: "Access to 10+ blockchains",
                              }),
                            }),
                          },
                        },
                        n,
                        b
                      ),
                    }),
                  ],
                }),
              ],
            }),
            e(a.div, {
              className: "framer-7yn2zm-container",
              layoutDependency: p,
              layoutId: "mC3xNpPqa-container",
              children: e(V, {
                height: "100%",
                id: "mC3xNpPqa",
                layoutId: "mC3xNpPqa",
                OgGB2UA1X: "Get Started",
                style: { width: "100%" },
                variant: "KbXFPBpYr",
                width: "100%",
              }),
            }),
            t(a.div, {
              className: "framer-13ia1ni",
              "data-framer-name": "logo",
              layoutDependency: p,
              layoutId: "UkwlfaXW7",
              children: [
                e(i, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(a.p, {
                      style: {
                        "--font-selector": "R0Y7RE0gU2Fucy1yZWd1bGFy",
                        "--framer-font-family":
                          '"DM Sans", "DM Sans Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "16px",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))",
                      },
                      children: "For companies like:",
                    }),
                  }),
                  className: "framer-1evncl5",
                  "data-framer-name": "For companies like:",
                  fonts: ["GF;DM Sans-regular"],
                  layoutDependency: p,
                  layoutId: "QPLMfBp6N",
                  style: { "--extracted-r6o4lv": "rgba(0, 0, 0, 0.4)" },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                Q() &&
                  e(s, {
                    className: "framer-89g5hb",
                    "data-framer-name": "Bitski-Logo",
                    fill: "rgba(0,0,0,1)",
                    intrinsicHeight: 22,
                    intrinsicWidth: 78,
                    layoutDependency: p,
                    layoutId: "HZQ_qfgUH",
                    svg: `<svg width="78" height="22" viewBox="0 0 78 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_616_4899)">
<mask id="mask0_616_4899" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="78" height="22">
<path d="M77.28 0.331543H0V21.5623H77.28V0.331543Z" fill="white"/>
</mask>
<g mask="url(#mask0_616_4899)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.943016 0.331543H7.51796C11.8704 0.331543 14.1855 2.9031 14.1855 6.67073C14.1855 7.14916 14.0621 7.8668 13.9694 8.31536C13.9386 8.49474 13.9077 8.61433 13.9077 8.73399C13.9077 8.97316 14.0003 9.12268 14.3398 9.30206C16.408 10.4384 17.3341 12.2923 17.3341 14.9236C17.3341 18.6015 14.9881 21.2628 10.1727 21.2628H0.943016C0.449125 21.2628 0.263916 21.0535 0.263916 20.5751V1.01928C0.263916 0.540856 0.449125 0.331543 0.943016 0.331543ZM5.94683 8.55485H7.52111C8.32367 8.55485 8.94104 8.07643 8.94104 7.14944C8.94104 6.25238 8.32367 5.74405 7.52111 5.74405H5.94683C5.45293 5.74405 5.26773 5.95336 5.26773 6.43179V7.86711C5.26773 8.34553 5.45293 8.55485 5.94683 8.55485ZM5.94683 15.8506H10.0832C11.287 15.8506 11.9661 15.432 11.9661 14.4452C11.9661 13.4883 11.287 13.0399 10.0832 13.0399H5.94683C5.45293 13.0399 5.26773 13.2492 5.26773 13.7276V15.1629C5.26773 15.6413 5.45293 15.8506 5.94683 15.8506ZM19.25 20.5751V6.99965C19.25 6.52122 19.4352 6.31191 19.9291 6.31191H23.7259C24.2198 6.31191 24.405 6.52122 24.405 6.99965V20.5751C24.405 21.0535 24.2198 21.2628 23.7259 21.2628H19.9291C19.4352 21.2628 19.25 21.0535 19.25 20.5751ZM19.25 4.00947V1.01928C19.25 0.540856 19.4352 0.331543 19.9291 0.331543H23.7259C24.2198 0.331543 24.405 0.540856 24.405 1.01928V4.00947C24.405 4.4879 24.2198 4.69721 23.7259 4.69721H19.9291C19.4352 4.69721 19.25 4.4879 19.25 4.00947ZM28.5711 11.2457H26.8116C26.3177 11.2457 26.1017 11.0663 26.1017 10.5879V6.96975C26.1017 6.49132 26.2869 6.31191 26.8116 6.31191H28.5711C29.065 6.31191 29.2502 6.10259 29.2502 5.62417V1.01928C29.2502 0.540856 29.4355 0.331543 29.9294 0.331543H33.7262C34.22 0.331543 34.4052 0.540856 34.4052 1.01928V5.62417C34.4052 6.10259 34.5904 6.31191 35.0843 6.31191H38.6034C39.0972 6.31191 39.3133 6.49132 39.3133 6.96975V10.5879C39.3133 11.0663 39.0972 11.2457 38.6034 11.2457H35.0843C34.5904 11.2457 34.4052 11.455 34.4052 11.9334V20.5751C34.4052 21.0535 34.22 21.2628 33.7262 21.2628H29.9294C29.4355 21.2628 29.2502 21.0535 29.2502 20.5751V11.9334C29.2502 11.455 29.065 11.2457 28.5711 11.2457ZM47.1244 21.5625C44.7167 21.5625 42.2472 20.8449 40.4877 19.7983C40.179 19.6189 40.1173 19.29 40.3025 18.9311L41.6916 16.3895C41.9386 15.941 42.309 15.9709 42.7411 16.2101C44.0375 16.9577 45.7662 17.4959 47.0935 17.4959C47.9269 17.4959 48.5443 17.2567 48.5443 16.7184C48.5443 16.2101 47.9887 16.0307 47.1553 16.0307H46.4761C42.8337 16.0307 40.3334 14.2665 40.3334 11.2165C40.3334 7.8077 43.4819 6.01358 46.9392 6.01358C49.2234 6.01358 50.9212 6.40231 52.7424 7.35916C53.0819 7.53858 53.2054 7.86751 52.9894 8.22634L51.4151 10.8876C51.199 11.2763 50.7359 11.3062 50.3347 11.067C49.1 10.3195 47.9887 10.1102 46.97 10.1102C46.044 10.1102 45.581 10.4091 45.581 10.8278C45.581 11.3361 46.044 11.5454 47.3713 11.5454H48.1431C51.6311 11.5454 53.8846 13.19 53.8846 16.0606C53.8846 19.6189 51.0756 21.5625 47.1244 21.5625ZM65.3745 13.1594L70.3752 20.3956C70.6838 20.8442 70.4986 21.2628 69.943 21.2628H65.4671C64.9423 21.2628 64.5411 21.203 64.1089 20.5751L61.7012 17.1962C61.4233 16.8074 61.1456 16.8074 60.806 17.1363L60.559 17.3756C60.1578 17.7643 60.1269 17.9736 60.1269 18.5119V20.605C60.1269 21.0535 59.9417 21.2628 59.4478 21.2628H55.6201C55.1571 21.2628 54.9719 21.0535 54.9719 20.605V0.989386C54.9719 0.540856 55.1571 0.331543 55.6201 0.331543H59.4478C59.9417 0.331543 60.1269 0.540856 60.1269 0.989386V9.69083C60.1269 10.1693 60.5899 10.2888 60.9294 9.90015L63.5533 7.02956C63.9854 6.55113 64.4176 6.31191 64.9732 6.31191H69.7887C70.3752 6.31191 70.5295 6.82024 70.1282 7.20897L65.4671 12.0231C65.0967 12.4119 65.0041 12.6511 65.3745 13.1594ZM71.854 20.5751V6.99965C71.854 6.52122 72.0392 6.31191 72.5331 6.31191H76.3299C76.8238 6.31191 77.009 6.52122 77.009 6.99965V20.5751C77.009 21.0535 76.8238 21.2628 76.3299 21.2628H72.5331C72.0392 21.2628 71.854 21.0535 71.854 20.5751ZM71.854 4.00947V1.01928C71.854 0.540856 72.0392 0.331543 72.5331 0.331543H76.3299C76.8238 0.331543 77.009 0.540856 77.009 1.01928V4.00947C77.009 4.4879 76.8238 4.69721 76.3299 4.69721H72.5331C72.0392 4.69721 71.854 4.4879 71.854 4.00947Z" fill="#E9405F"/>
</g>
</g>
<defs>
<clipPath id="clip0_616_4899">
<rect width="78" height="22" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                    withExternalLayout: !0,
                  }),
                Z() &&
                  e(s, {
                    className: "framer-1ra1uyo",
                    "data-framer-name": "logo",
                    fill: "rgba(0,0,0,1)",
                    intrinsicHeight: 32,
                    intrinsicWidth: 105,
                    layoutDependency: p,
                    layoutId: "Ik8u0zmM3",
                    svg: `<svg width="105" height="32" viewBox="0 0 105 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_616_4864)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7782 14.0327H30.3494V13.8567C30.3494 11.9128 29.4463 10.1795 28.0372 9.05421C26.9876 8.21692 25.661 7.71827 24.2172 7.71827H23.7964C23.4581 7.71827 23.149 7.68627 22.9279 7.56894C22.7068 7.45161 22.5683 7.24894 22.5683 6.91029V6.65434C22.5683 6.13431 22.3579 5.66234 22.0169 5.32369C21.6759 4.9824 21.2045 4.77171 20.6876 4.77171H17.2966C17.2593 4.58773 17.2193 4.40107 17.182 4.21708C17.1447 4.03308 17.1048 3.84643 17.0675 3.66243C17.4085 3.53177 17.7175 3.29978 17.9412 2.97712C18.538 2.11849 18.3275 0.937203 17.4724 0.339893C16.6146 -0.257417 15.4346 -0.0467589 14.8379 0.809207C14.2412 1.66784 14.4516 2.84913 15.3067 3.44644C15.4319 3.53443 15.5625 3.6011 15.6983 3.65443C15.669 3.78509 15.6424 3.91842 15.613 4.04908C15.5625 4.29175 15.5092 4.52907 15.4559 4.76907H11.8331C11.4068 4.76907 11.0153 4.91038 10.6983 5.15038C10.2454 5.49436 9.94973 6.03836 9.94973 6.65434V6.91029C9.94973 7.08096 9.91512 7.21429 9.85383 7.32361C9.6674 7.64629 9.23051 7.71827 8.72172 7.71827C7.45109 7.71827 6.27099 8.10492 5.29335 8.76625C3.66044 9.87021 2.58958 11.7368 2.58958 13.8567V14.0327H2.1607C1.67589 14.0327 1.23369 14.222 0.906038 14.5313C0.551747 14.8647 0.333313 15.3367 0.333313 15.862V20.0458C0.333313 20.5524 0.538428 21.0084 0.868743 21.3391C1.19906 21.6697 1.65724 21.8751 2.1607 21.8751H2.58958V22.4964C2.58958 23.7577 2.97583 24.9603 3.66044 25.9629C4.22517 26.7895 4.99234 27.4775 5.91402 27.9548L13.6604 31.3174C14.5422 31.7707 15.5065 32 16.4708 32C17.4351 32 18.3994 31.7734 19.2811 31.3174L27.0276 27.9548C28.1171 27.3922 28.9908 26.5309 29.5689 25.5016C30.075 24.6003 30.352 23.571 30.352 22.499V21.8777H30.7809C31.2311 21.8777 31.644 21.7151 31.9636 21.4458C32.3605 21.1098 32.611 20.6084 32.611 20.0485V15.8646C32.611 15.3606 32.4085 14.9047 32.0782 14.574C31.7479 14.2434 31.287 14.0327 30.7809 14.0327H30.7782ZM26.3536 22.0751C26.3536 22.5871 26.2364 23.0804 26.026 23.523C25.7143 24.1737 25.1975 24.7203 24.5316 25.0643L18.0078 27.7948C17.5257 28.0428 16.9983 28.1681 16.4681 28.1681C15.938 28.1681 15.4133 28.0428 14.9284 27.7948L8.40474 25.0643C7.92523 24.8163 7.52031 24.4643 7.21667 24.043C6.81175 23.4803 6.58265 22.795 6.58265 22.0751V14.214C6.58265 13.3367 7.01421 12.5634 7.6775 12.0914C8.10369 11.7874 8.62314 11.6115 9.18521 11.6115H11.5587C12.1128 11.6115 12.6509 11.7475 13.1277 11.9954C13.6045 12.2434 14.0227 12.6088 14.3424 13.0621L14.7793 13.6861C15.1895 14.2727 15.8288 14.5687 16.4681 14.5687C17.1075 14.5687 17.7468 14.2754 18.157 13.6861L18.5939 13.0621C18.8656 12.6701 19.2146 12.3474 19.6088 12.1074C20.1336 11.7874 20.7436 11.6115 21.3749 11.6115H23.7484C24.3691 11.6115 24.9418 11.8301 25.3867 12.1928C25.9727 12.6701 26.3483 13.3981 26.3483 14.214V22.0751H26.3536ZM11.9183 16.1393H11.5587C11.1005 16.1393 10.6797 16.3099 10.36 16.59C9.97906 16.9233 9.73662 17.4139 9.73662 17.9605V21.0511C9.73662 21.5551 9.94176 22.0111 10.2694 22.339C10.5997 22.6697 11.0526 22.8724 11.556 22.8724H11.9156C12.4191 22.8724 12.8746 22.667 13.2023 22.339C13.5326 22.0084 13.735 21.5551 13.735 21.0511V17.9605C13.735 17.4219 13.5033 16.9393 13.133 16.6059C12.8107 16.3153 12.3818 16.1366 11.9156 16.1366L11.9183 16.1393ZM21.4309 16.1393H21.7905C22.222 16.1393 22.6216 16.2913 22.9332 16.542C23.3462 16.8753 23.6099 17.3872 23.6099 17.9605V21.0511C23.6099 21.4938 23.45 21.9017 23.189 22.2164C22.856 22.6164 22.3525 22.8724 21.7905 22.8724H21.4309C20.8688 22.8724 20.3653 22.619 20.0324 22.2164C19.7686 21.8991 19.6088 21.4938 19.6088 21.0484V17.9579C19.6088 17.4539 19.8139 16.9979 20.1416 16.6699C20.4719 16.3393 20.9247 16.1366 21.4282 16.1366L21.4309 16.1393Z" fill="url(#paint0_linear_616_4864)"/>
<path d="M48.7112 10.7902C45.6134 10.7902 43.7567 13.0381 43.7567 16.214C43.7567 19.3899 45.5388 21.6138 48.7594 21.6138C50.957 21.6138 51.9557 20.5632 52.3712 20.1738C52.7365 19.8085 53.0055 19.6139 53.4956 19.6139C54.3025 19.6139 54.8621 20.0752 54.8621 20.9072C54.8621 21.4218 54.6648 21.7845 54.3268 22.1551C53.7914 22.7151 51.9105 24.379 48.7406 24.379C44.1028 24.379 40.7837 20.8618 40.7837 16.2194C40.7837 11.5768 44.1748 8.03564 48.7167 8.03564C51.2792 8.03564 53.1308 9.18496 53.9858 9.96358C54.5211 10.4782 54.6435 10.8196 54.6435 11.1822C54.6435 11.9395 54.1533 12.5741 53.2983 12.5741C52.9334 12.5741 52.6163 12.4515 52.2007 12.1342C51.3006 11.4249 50.3948 10.7902 48.7112 10.7902Z" fill="#014448"/>
<path d="M56.6148 18.2219C56.6148 14.5074 59.228 11.7715 63.0082 11.7715C66.3993 11.7715 69.1298 13.7981 69.1298 17.1712V22.6697C69.1298 23.547 68.5701 24.1843 67.6912 24.1843C66.8601 24.1843 66.3004 23.6003 66.3004 22.7924V22.7444H66.1568C65.5469 23.5523 64.4255 24.379 62.5206 24.379C59.2732 24.379 56.6122 21.9604 56.6122 18.2219H56.6148ZM62.8348 21.8137C64.838 21.8137 66.2501 20.7151 66.2501 18.7579V17.3659C66.2501 15.3153 64.9339 14.3634 63.0082 14.3634C60.5442 14.3634 59.4944 15.9526 59.4944 18.0779C59.4944 20.4965 60.7117 21.8137 62.8348 21.8137Z" fill="#014448"/>
<path d="M77.1902 11.7714C79.2625 11.7714 80.3869 12.7714 80.8263 13.3607H80.97V9.5368C80.97 8.65953 81.559 8.02222 82.4115 8.02222C83.2635 8.02222 83.8496 8.65684 83.8496 9.5368V18.6165C83.8496 22.1097 81.0927 24.3816 77.6535 24.3816C73.9218 24.3816 71.3351 21.6217 71.3351 17.9312C71.3351 14.2406 73.9483 11.7741 77.1902 11.7741V11.7714ZM77.5819 14.3126C75.4345 14.3126 74.2121 15.6059 74.2121 18.0485C74.2121 20.1737 75.2615 21.763 77.7494 21.763C79.6542 21.763 80.97 20.5897 80.97 18.5631V17.3899C80.97 15.4086 79.5557 14.3126 77.5763 14.3126H77.5819Z" fill="#014448"/>
<path d="M91.8627 11.7714C93.935 11.7714 95.059 12.7714 95.4988 13.3607H95.6425V9.5368C95.6425 8.65953 96.2311 8.02222 97.0836 8.02222C97.936 8.02222 98.5221 8.65684 98.5221 9.5368V18.6165C98.5221 22.1097 95.7652 24.3816 92.326 24.3816C88.5939 24.3816 86.0076 21.6217 86.0076 17.9312C86.0076 14.2406 88.6208 11.7741 91.8627 11.7741V11.7714ZM92.254 14.3126C90.107 14.3126 88.8846 15.6059 88.8846 18.0485C88.8846 20.1737 89.934 21.763 92.4219 21.763C94.3267 21.763 95.6425 20.5897 95.6425 18.5631V17.3899C95.6425 15.4086 94.2283 14.3126 92.2514 14.3126H92.2569H92.254Z" fill="#014448"/>
<path d="M101.325 13.6566C101.325 12.8007 101.884 12.166 102.763 12.166C103.642 12.166 104.202 12.8007 104.202 13.6566V22.8643C104.202 23.7416 103.618 24.3789 102.763 24.3789C101.908 24.3789 101.325 23.7443 101.325 22.8643V13.6566Z" fill="#014448"/>
<path d="M101.287 9.46492C101.287 8.6275 101.9 7.99829 102.742 7.99829C103.584 7.99829 104.217 8.6275 104.217 9.46492C104.217 10.3023 103.605 10.9315 102.742 10.9315C101.879 10.9315 101.287 10.3023 101.287 9.46492Z" fill="#014448"/>
</g>
<defs>
<linearGradient id="paint0_linear_616_4864" x1="8.34613" y1="3.5691" x2="22.4997" y2="28.5824" gradientUnits="userSpaceOnUse">
<stop stop-color="#90E4E4"/>
<stop offset="0.62" stop-color="#02BBBE"/>
<stop offset="1" stop-color="#00BFC2"/>
</linearGradient>
<clipPath id="clip0_616_4864">
<rect width="104" height="32" fill="white" transform="translate(0.333313)"/>
</clipPath>
</defs>
</svg>
`,
                    withExternalLayout: !0,
                  }),
                o1() &&
                  e(s, {
                    className: "framer-1vtyg0u",
                    "data-framer-name": "Phantom-Logo-Purple 1",
                    layout: "position",
                    layoutDependency: p,
                    layoutId: "J0bSIITy6",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 145 28"><g transform="translate(0.667 0)" id="ss2532792928_1"><path d="M 0 28.667 L 0 0.667 L 144 0.667 L 144 28.667 Z" fill="transparent"></path><path d="M 4.024 28 C 8.364 28 11.625 24.268 13.571 21.32 C 13.335 21.972 13.203 22.624 13.203 23.251 C 13.203 24.973 14.203 26.199 16.175 26.199 C 18.884 26.199 21.777 23.851 23.276 21.32 C 23.171 21.685 23.119 22.024 23.119 22.337 C 23.119 23.538 23.802 24.294 25.196 24.294 C 29.589 24.294 34.007 16.596 34.007 9.864 C 34.007 4.619 31.324 -0 24.592 -0 C 12.756 -0 0 14.3 0 23.538 C 0 27.165 1.973 28 4.024 28 Z M 20.515 9.29 C 20.515 7.985 21.251 7.072 22.33 7.072 C 23.382 7.072 24.118 7.985 24.118 9.29 C 24.118 10.595 23.382 11.534 22.33 11.534 C 21.251 11.534 20.515 10.595 20.515 9.29 Z M 26.143 9.29 C 26.143 7.985 26.88 7.072 27.958 7.072 C 29.01 7.072 29.746 7.985 29.746 9.29 C 29.746 10.595 29.01 11.534 27.958 11.534 C 26.88 11.534 26.143 10.595 26.143 9.29 Z" fill="rgb(171,159,242)"></path><path d="M 39.267 25.156 L 43.212 25.156 L 43.212 21.32 C 43.212 19.519 43.054 18.841 42.133 17.014 L 42.633 16.753 C 43.974 19.858 45.868 20.98 47.814 20.98 C 50.944 20.98 53.443 18.267 53.443 14.065 C 53.443 10.047 51.155 7.098 47.867 7.098 C 45.921 7.098 43.974 8.194 42.633 11.325 L 42.133 11.064 C 42.765 9.812 43.212 8.638 43.212 7.515 L 39.267 7.515 Z M 43.212 14.039 C 43.212 12.317 44.527 10.412 46.473 10.412 C 48.051 10.412 49.34 11.691 49.34 14.013 C 49.34 16.309 48.104 17.666 46.447 17.666 C 44.606 17.666 43.212 15.814 43.212 14.039 Z" fill="rgb(171,159,242)"></path><path d="M 54.883 20.563 L 58.828 20.563 L 58.828 15.97 C 58.828 12.734 59.985 10.438 62.142 10.438 C 63.51 10.438 63.93 11.351 63.93 13.622 L 63.93 20.563 L 67.876 20.563 L 67.876 12.995 C 67.876 8.872 66.376 7.098 63.51 7.098 C 60.564 7.098 59.591 9.055 58.46 11.43 L 57.96 11.169 C 58.644 9.707 58.828 8.82 58.828 7.515 L 58.828 3.001 L 54.883 3.001 Z" fill="rgb(171,159,242)"></path><path d="M 73.641 20.98 C 76.192 20.98 77.692 19.31 78.823 17.171 L 79.296 17.405 C 78.796 18.423 78.323 19.597 78.323 20.563 L 82.189 20.563 L 82.189 13.465 C 82.189 9.238 80.401 7.098 76.219 7.098 C 72.116 7.098 70.091 9.133 69.696 11.273 L 73.484 11.925 C 73.615 10.803 74.536 10.047 76.008 10.047 C 77.481 10.047 78.323 10.777 78.323 11.664 C 78.323 12.552 77.455 12.969 75.14 12.995 C 71.721 13.048 69.196 14.274 69.196 16.883 C 69.196 19.023 70.906 20.98 73.641 20.98 Z M 73.115 16.623 C 73.115 14.561 76.429 15.996 78.244 14.405 L 78.244 14.874 C 78.244 16.727 76.587 18.084 74.93 18.084 C 74.062 18.084 73.115 17.719 73.115 16.623 Z" fill="rgb(171,159,242)"></path><path d="M 83.752 20.563 L 87.697 20.563 L 87.697 15.97 C 87.697 12.734 88.855 10.438 91.011 10.438 C 92.379 10.438 92.8 11.351 92.8 13.622 L 92.8 20.563 L 96.745 20.563 L 96.745 12.995 C 96.745 8.872 95.246 7.098 92.379 7.098 C 89.433 7.098 88.46 9.055 87.329 11.43 L 86.83 11.169 C 87.513 9.707 87.697 8.82 87.697 7.515 L 83.752 7.515 Z" fill="rgb(171,159,242)"></path><path d="M 107.253 20.615 L 107.253 17.379 C 106.411 17.666 104.07 18.162 104.07 16.257 L 104.07 10.647 L 107.226 10.647 L 107.226 7.515 L 104.07 7.515 L 104.07 4.019 L 100.099 5.193 L 100.099 7.515 L 97.732 7.515 L 97.732 10.647 L 100.099 10.647 L 100.125 16.57 C 100.125 20.928 104.044 21.554 107.253 20.615 Z" fill="rgb(171,159,242)"></path><path d="M 115.266 20.98 C 119.264 20.98 122.315 17.953 122.315 14.013 C 122.315 10.099 119.264 7.098 115.266 7.098 C 111.269 7.098 108.192 10.099 108.192 14.013 C 108.192 17.953 111.269 20.98 115.266 20.98 Z M 112.268 14.039 C 112.268 11.873 113.504 10.36 115.266 10.36 C 117.029 10.36 118.239 11.873 118.239 14.039 C 118.239 16.205 117.029 17.719 115.266 17.719 C 113.504 17.719 112.268 16.205 112.268 14.039 Z" fill="rgb(171,159,242)"></path><path d="M 123.538 20.563 L 127.482 20.563 L 127.482 15.97 C 127.482 12.604 128.561 10.438 130.296 10.438 C 131.428 10.438 131.796 11.325 131.796 13.622 L 131.796 20.563 L 135.742 20.563 L 135.742 15.97 C 135.742 12.813 136.898 10.438 138.556 10.438 C 139.66 10.438 140.054 11.456 140.054 13.622 L 140.054 20.563 L 144 20.563 L 144 12.995 C 144 8.846 142.632 7.098 139.949 7.098 C 137.161 7.098 136.163 9.055 135.189 11.456 L 134.715 11.221 C 135.637 8.481 133.637 7.098 131.664 7.098 C 129.061 7.098 128.114 9.055 127.062 11.43 L 126.588 11.169 C 127.246 9.707 127.482 8.82 127.482 7.515 L 123.538 7.515 Z" fill="rgb(171,159,242)"></path></g></svg>',
                    svgContentId: 2532792928,
                    withExternalLayout: !0,
                    ...$(
                      {
                        oHUY5lEtV: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 145 28"><g transform="translate(0.667 0)" id="ss2860130785_1"><path d="M 0 28.667 L 0 0.667 L 144 0.667 L 144 28.667 Z" fill="transparent"></path><path d="M 4.024 28 C 8.364 28 11.625 24.268 13.571 21.32 C 13.335 21.972 13.203 22.624 13.203 23.251 C 13.203 24.973 14.203 26.199 16.175 26.199 C 18.884 26.199 21.777 23.851 23.276 21.32 C 23.171 21.685 23.119 22.024 23.119 22.337 C 23.119 23.538 23.802 24.294 25.196 24.294 C 29.589 24.294 34.007 16.596 34.007 9.864 C 34.007 4.619 31.324 -0 24.592 -0 C 12.756 -0 0 14.3 0 23.538 C 0 27.165 1.973 28 4.024 28 Z M 20.515 9.29 C 20.515 7.985 21.251 7.072 22.33 7.072 C 23.382 7.072 24.118 7.985 24.118 9.29 C 24.118 10.595 23.382 11.534 22.33 11.534 C 21.251 11.534 20.515 10.595 20.515 9.29 Z M 26.143 9.29 C 26.143 7.985 26.88 7.072 27.958 7.072 C 29.01 7.072 29.746 7.985 29.746 9.29 C 29.746 10.595 29.01 11.534 27.958 11.534 C 26.88 11.534 26.143 10.595 26.143 9.29 Z" fill="rgb(171,159,242)"></path><path d="M 39.267 25.156 L 43.212 25.156 L 43.212 21.32 C 43.212 19.519 43.054 18.841 42.133 17.014 L 42.633 16.753 C 43.974 19.858 45.868 20.98 47.814 20.98 C 50.944 20.98 53.443 18.267 53.443 14.065 C 53.443 10.047 51.155 7.098 47.867 7.098 C 45.921 7.098 43.974 8.194 42.633 11.325 L 42.133 11.064 C 42.765 9.812 43.212 8.638 43.212 7.515 L 39.267 7.515 Z M 43.212 14.039 C 43.212 12.317 44.527 10.412 46.473 10.412 C 48.051 10.412 49.34 11.691 49.34 14.013 C 49.34 16.309 48.104 17.666 46.447 17.666 C 44.606 17.666 43.212 15.814 43.212 14.039 Z" fill="rgb(171,159,242)"></path><path d="M 54.883 20.563 L 58.828 20.563 L 58.828 15.97 C 58.828 12.734 59.985 10.438 62.142 10.438 C 63.51 10.438 63.93 11.351 63.93 13.622 L 63.93 20.563 L 67.876 20.563 L 67.876 12.995 C 67.876 8.872 66.376 7.098 63.51 7.098 C 60.564 7.098 59.591 9.055 58.46 11.43 L 57.96 11.169 C 58.644 9.707 58.828 8.82 58.828 7.515 L 58.828 3.001 L 54.883 3.001 Z" fill="rgb(171,159,242)"></path><path d="M 73.641 20.98 C 76.192 20.98 77.692 19.31 78.823 17.171 L 79.296 17.405 C 78.796 18.423 78.323 19.597 78.323 20.563 L 82.189 20.563 L 82.189 13.465 C 82.189 9.238 80.401 7.098 76.219 7.098 C 72.116 7.098 70.091 9.133 69.696 11.273 L 73.484 11.925 C 73.615 10.803 74.536 10.047 76.008 10.047 C 77.481 10.047 78.323 10.777 78.323 11.664 C 78.323 12.552 77.455 12.969 75.14 12.995 C 71.721 13.048 69.196 14.274 69.196 16.883 C 69.196 19.023 70.906 20.98 73.641 20.98 Z M 73.115 16.623 C 73.115 14.561 76.429 15.996 78.244 14.405 L 78.244 14.874 C 78.244 16.727 76.587 18.084 74.93 18.084 C 74.062 18.084 73.115 17.719 73.115 16.623 Z" fill="rgb(171,159,242)"></path><path d="M 83.752 20.563 L 87.697 20.563 L 87.697 15.97 C 87.697 12.734 88.855 10.438 91.011 10.438 C 92.379 10.438 92.8 11.351 92.8 13.622 L 92.8 20.563 L 96.745 20.563 L 96.745 12.995 C 96.745 8.872 95.246 7.098 92.379 7.098 C 89.433 7.098 88.46 9.055 87.329 11.43 L 86.83 11.169 C 87.513 9.707 87.697 8.82 87.697 7.515 L 83.752 7.515 Z" fill="rgb(171,159,242)"></path><path d="M 107.253 20.615 L 107.253 17.379 C 106.411 17.666 104.07 18.162 104.07 16.257 L 104.07 10.647 L 107.226 10.647 L 107.226 7.515 L 104.07 7.515 L 104.07 4.019 L 100.099 5.193 L 100.099 7.515 L 97.732 7.515 L 97.732 10.647 L 100.099 10.647 L 100.125 16.57 C 100.125 20.928 104.044 21.554 107.253 20.615 Z" fill="rgb(171,159,242)"></path><path d="M 115.266 20.98 C 119.264 20.98 122.315 17.953 122.315 14.013 C 122.315 10.099 119.264 7.098 115.266 7.098 C 111.269 7.098 108.192 10.099 108.192 14.013 C 108.192 17.953 111.269 20.98 115.266 20.98 Z M 112.268 14.039 C 112.268 11.873 113.504 10.36 115.266 10.36 C 117.029 10.36 118.239 11.873 118.239 14.039 C 118.239 16.205 117.029 17.719 115.266 17.719 C 113.504 17.719 112.268 16.205 112.268 14.039 Z" fill="rgb(171,159,242)"></path><path d="M 123.538 20.563 L 127.482 20.563 L 127.482 15.97 C 127.482 12.604 128.561 10.438 130.296 10.438 C 131.428 10.438 131.796 11.325 131.796 13.622 L 131.796 20.563 L 135.742 20.563 L 135.742 15.97 C 135.742 12.813 136.898 10.438 138.556 10.438 C 139.66 10.438 140.054 11.456 140.054 13.622 L 140.054 20.563 L 144 20.563 L 144 12.995 C 144 8.846 142.632 7.098 139.949 7.098 C 137.161 7.098 136.163 9.055 135.189 11.456 L 134.715 11.221 C 135.637 8.481 133.637 7.098 131.664 7.098 C 129.061 7.098 128.114 9.055 127.062 11.43 L 126.588 11.169 C 127.246 9.707 127.482 8.82 127.482 7.515 L 123.538 7.515 Z" fill="rgb(171,159,242)"></path></g></svg>',
                          svgContentId: 2860130785,
                        },
                      },
                      n,
                      b
                    ),
                  }),
              ],
            }),
          ],
        }),
      }),
    });
  }),
  Rr = [
    '.framer-gAEBf[data-border="true"]::after, .framer-gAEBf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gAEBf.framer-1vr6qsr, .framer-gAEBf .framer-1vr6qsr { display: block; }",
    ".framer-gAEBf.framer-93opud { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 523px; justify-content: flex-start; overflow: visible; padding: 40px 40px 40px 40px; position: relative; width: min-content; }",
    ".framer-gAEBf .framer-x7ydtx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 8px 12px 8px 12px; position: absolute; right: 14px; top: 15px; width: min-content; z-index: 1; }",
    ".framer-gAEBf .framer-1fc0ouu, .framer-gAEBf .framer-1075oij, .framer-gAEBf .framer-1n2fxg3, .framer-gAEBf .framer-snqev0, .framer-gAEBf .framer-1evncl5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-gAEBf .framer-13sbc92 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-gAEBf .framer-n85ptp, .framer-gAEBf .framer-qerfxs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-gAEBf .framer-ofro4v, .framer-gAEBf .framer-4xac44 { align-self: stretch; flex: none; height: 3px; position: relative; width: auto; }",
    ".framer-gAEBf .framer-1o3bt0u { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-gAEBf .framer-1u3s3lr { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-gAEBf .framer-e6ej4e { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-gAEBf .framer-wlxojp, .framer-gAEBf .framer-1fg4x9u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-gAEBf .framer-4km7e0, .framer-gAEBf .framer-1vynwi9 { flex: none; height: 16px; position: relative; width: 17px; }",
    ".framer-gAEBf .framer-1ibc5uc, .framer-gAEBf .framer-6mzscw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 307px; word-break: break-word; word-wrap: break-word; }",
    ".framer-gAEBf .framer-7yn2zm-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }",
    ".framer-gAEBf .framer-13ia1ni { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-gAEBf .framer-89g5hb { flex: none; height: 22px; position: relative; width: 78px; }",
    ".framer-gAEBf .framer-1ra1uyo { flex: none; height: 32px; position: relative; width: 105px; }",
    ".framer-gAEBf .framer-1vtyg0u { flex: none; height: 28px; position: relative; width: 145px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gAEBf.framer-93opud, .framer-gAEBf .framer-x7ydtx, .framer-gAEBf .framer-13sbc92, .framer-gAEBf .framer-1o3bt0u, .framer-gAEBf .framer-1u3s3lr, .framer-gAEBf .framer-e6ej4e, .framer-gAEBf .framer-wlxojp, .framer-gAEBf .framer-1fg4x9u, .framer-gAEBf .framer-13ia1ni { gap: 0px; } .framer-gAEBf.framer-93opud > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-gAEBf.framer-93opud > :first-child, .framer-gAEBf .framer-13sbc92 > :first-child, .framer-gAEBf .framer-1u3s3lr > :first-child, .framer-gAEBf .framer-e6ej4e > :first-child, .framer-gAEBf .framer-13ia1ni > :first-child { margin-top: 0px; } .framer-gAEBf.framer-93opud > :last-child, .framer-gAEBf .framer-13sbc92 > :last-child, .framer-gAEBf .framer-1u3s3lr > :last-child, .framer-gAEBf .framer-e6ej4e > :last-child, .framer-gAEBf .framer-13ia1ni > :last-child { margin-bottom: 0px; } .framer-gAEBf .framer-x7ydtx > *, .framer-gAEBf .framer-1o3bt0u > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-gAEBf .framer-x7ydtx > :first-child, .framer-gAEBf .framer-1o3bt0u > :first-child, .framer-gAEBf .framer-wlxojp > :first-child, .framer-gAEBf .framer-1fg4x9u > :first-child { margin-left: 0px; } .framer-gAEBf .framer-x7ydtx > :last-child, .framer-gAEBf .framer-1o3bt0u > :last-child, .framer-gAEBf .framer-wlxojp > :last-child, .framer-gAEBf .framer-1fg4x9u > :last-child { margin-right: 0px; } .framer-gAEBf .framer-13sbc92 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-gAEBf .framer-1u3s3lr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-gAEBf .framer-e6ej4e > *, .framer-gAEBf .framer-13ia1ni > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-gAEBf .framer-wlxojp > *, .framer-gAEBf .framer-1fg4x9u > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }",
    ".framer-gAEBf.framer-v-1mcigsl .framer-1ibc5uc { flex: 1 0 0px; width: 1px; }",
  ],
  p1 = P(Br, Rr, "framer-gAEBf"),
  U = p1;
p1.displayName = "PricingBtn";
p1.defaultProps = { height: 523, width: 411.5 };
g1(p1, {
  variant: {
    options: ["qMc_epy1P", "oHUY5lEtV", "QOltFhqTI"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: s1.Enum,
  },
});
G(p1, [
  {
    family: "DM Sans",
    style: "normal",
    url: "https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2",
    weight: "700",
  },
  {
    family: "DM Sans",
    style: "normal",
    url: "https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
    weight: "400",
  },
  {
    family: "DM Sans",
    style: "normal",
    url: "https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2",
    weight: "500",
  },
  ...Nr,
]);
K1.loadFonts([
  "CUSTOM;GT Planar Regular",
  "Inter-Bold",
  "Inter-BoldItalic",
  "Inter-Italic",
]);
var ve = [
    {
      family: "GT Planar Regular",
      url: "https://framerusercontent.com/assets/NW5VBHmrRlALVX6hereKE89VgTE.ttf",
    },
  ],
  Ce = [
    '.framer-fkmTU .framer-styles-preset-cn7gzy:not(.rich-text-wrapper), .framer-fkmTU .framer-styles-preset-cn7gzy.rich-text-wrapper p { --framer-font-family: "GT Planar Regular", "GT Planar Regular Placeholder", sans-serif; --framer-font-family-bold: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter-BoldItalic", "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter-Italic", "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  Ne = "framer-fkmTU";
var zr = C(V1),
  Tr = C(K),
  Vr = C(J),
  Er = C(D),
  qr = C(S1),
  _r = C(z1),
  Ar = C(E1),
  Hr = C(N1),
  Pr = C(y1),
  Gr = C(x1),
  Dr = C(l1),
  Ur = C(f1),
  Or = C(c1),
  Yr = C(m1),
  Xr = C(U),
  Qr = C(V),
  Le = U1(a.div),
  Kr = C(T),
  Jr = C(T1);
var $r = {
    kwVNjqrRS: "(min-width: 630px) and (max-width: 797px)",
    MITuyLXdw: "(max-width: 629px)",
    TCRVy9I_Z: "(min-width: 798px) and (max-width: 1299px)",
    WQLkyLRf1: "(min-width: 1300px)",
  },
  E = () => typeof document < "u",
  Ie = "framer-yNuWI",
  ea = {
    kwVNjqrRS: "framer-v-1dkgatv",
    MITuyLXdw: "framer-v-1d7sfhj",
    TCRVy9I_Z: "framer-v-9i6d03",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  ra = { default: { duration: 0 } },
  je = { damping: 40, delay: 0, mass: 1.5, stiffness: 300, type: "spring" },
  aa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    transition: je,
    x: 0,
    y: 0,
  },
  y = (m, l) => `perspective(1200px) ${l}`,
  I1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: je,
    x: 0,
    y: 0,
  },
  W1 = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    x: 0,
    y: 0,
  },
  Ze = { damping: 25, delay: 0, mass: 1.2, stiffness: 320, type: "spring" },
  We = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Ze,
    x: 0,
    y: 50,
  },
  O = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Ze,
    x: 0,
    y: 0,
  },
  I = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    x: 0,
    y: 50,
  },
  Fe = { damping: 25, delay: 0.2, mass: 1.2, stiffness: 320, type: "spring" },
  ta = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Fe,
    x: 0,
    y: 50,
  },
  b1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Fe,
    x: 0,
    y: 0,
  },
  Be = { damping: 25, delay: 0.4, mass: 1.2, stiffness: 320, type: "spring" },
  ia = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Be,
    x: 0,
    y: 50,
  },
  k1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Be,
    x: 0,
    y: 0,
  },
  h1 = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  be = { opacity: 1, rotate: 0, scale: 1.02, transition: h1 },
  na = (m, l) => `translateY(-50%) ${l}`,
  n1 = { opacity: 1, rotate: 0, scale: 1.05, transition: h1 },
  oa = (m, l) => `${l} rotate(-120deg)`,
  ke = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    x: 0,
    y: 150,
  },
  Me = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: h1,
    x: 0,
    y: 150,
  },
  sa = (m, l) => `${l} rotate(-135deg)`,
  la = (m, l) => `perspective(1200px) translateY(-50%) ${l}`,
  M1 = q1(),
  ma = {
    "Big Tablet": "TCRVy9I_Z",
    "Small Tablet": "kwVNjqrRS",
    Desktop: "WQLkyLRf1",
    Phone: "MITuyLXdw",
  },
  fa = ({ height: m, id: l, width: g, ...u }) => {
    var x, N;
    return {
      ...u,
      variant:
        (N = (x = ma[u.variant]) !== null && x !== void 0 ? x : u.variant) !==
          null && N !== void 0
          ? N
          : "WQLkyLRf1",
    };
  },
  ca = q(function (m, l) {
    let { activeLocale: g, setLocale: u } = H(),
      { style: x, className: N, layoutId: L, variant: W, ...Y } = fa(m);
    G1(() => {
      let r1 = q1(void 0, g);
      if (((document.title = r1.title || ""), r1.viewport)) {
        var B1;
        (B1 = document.querySelector('meta[name="viewport"]')) === null ||
          B1 === void 0 ||
          B1.setAttribute("content", r1.viewport);
      }
      if (r1.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((R1) => R1.startsWith("framer-body-"))
            .map((R1) => document.body.classList.remove(R1)),
          document.body.classList.add(`${r1.bodyClassName}-framer-yNuWI`),
          () => {
            document.body.classList.remove(`${r1.bodyClassName}-framer-yNuWI`);
          }
        );
    }, [void 0, g]);
    let [n, X] = X1(W, $r, !1),
      b = void 0,
      k = ra.default,
      F = w(null),
      e1 = () => (n === "TCRVy9I_Z" ? !0 : !E()),
      j = () => (n === "MITuyLXdw" ? !0 : !E()),
      p = M("vXmwgbaJS"),
      B = w(null),
      Z = () => (n === "kwVNjqrRS" ? !0 : !E()),
      R = () =>
        ["TCRVy9I_Z", "kwVNjqrRS", "MITuyLXdw"].includes(n) ? !E() : !0,
      Q = M("s_PfZpew6"),
      o1 = w(null),
      Z1 = () =>
        ["TCRVy9I_Z", "kwVNjqrRS", "MITuyLXdw"].includes(n) ? !0 : !E(),
      F1 = M("wlBuh8kxf"),
      Re = w(null),
      Se = M("S5xmmEwBc"),
      ze = w(null),
      Te = M("JqtPF7U4B"),
      Ve = w(null),
      Ee = M("qb4aTyN3W"),
      qe = w(null),
      _e = M("QfIebWxOC"),
      Ae = w(null),
      He = M("opU0wxWwF"),
      Pe = w(null),
      Ge = M("QVAtEIlNe"),
      De = w(null),
      Ue = M("P1TWpfba5"),
      Oe = w(null),
      Ye = M("GOX79zuAF"),
      Xe = w(null),
      Qe = M("A9zElcCLX"),
      Ke = w(null),
      A1 = () => (n === "kwVNjqrRS" ? !E() : !0),
      u1 = () => (n === "MITuyLXdw" ? !E() : !0),
      Je = M("OeId1cRHO"),
      $e = w(null),
      er = () => (["TCRVy9I_Z", "kwVNjqrRS"].includes(n) ? !E() : !0),
      H1 = () => (["TCRVy9I_Z", "kwVNjqrRS"].includes(n) ? !0 : !E()),
      rr = _(),
      P1 = [ue, me, ee, de, Ne, ye, oe, te];
    return (
      O1({}),
      e(Y1.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: ea },
        children: t(A, {
          id: L ?? rr,
          children: [
            t(a.div, {
              ...Y,
              className: z(Ie, ...P1, "framer-72rtr7", N),
              ref: l ?? F,
              style: { ...x },
              children: [
                e(o, {
                  className: "framer-yri3j9-container",
                  "data-framer-name": "Navbar",
                  name: "Navbar",
                  children: e(c, {
                    breakpoint: n,
                    overrides: {
                      kwVNjqrRS: { variant: "MhklNSFN6" },
                      MITuyLXdw: { variant: "MhklNSFN6" },
                      TCRVy9I_Z: {
                        style: { maxWidth: "100%", width: "100%" },
                        variant: "vRz6iFx98",
                      },
                    },
                    children: e(V1, {
                      height: "100%",
                      id: "TcOo_Zk5d",
                      layoutId: "TcOo_Zk5d",
                      name: "Navbar",
                      style: { width: "100%" },
                      variant: "eoTXJYY6N",
                      width: "100%",
                    }),
                  }),
                }),
                e1() &&
                  e(o, {
                    className:
                      "framer-14u3y19-container hidden-72rtr7 hidden-1dkgatv hidden-1d7sfhj",
                    "data-framer-name": "Brands",
                    name: "Brands",
                    children: e(D, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 40,
                      height: "100%",
                      hoverFactor: 1,
                      id: "TVTWkeoWO",
                      layoutId: "TVTWkeoWO",
                      name: "Brands",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        e(h, {
                          href: "https://www.exodus.com/",
                          children: e(a.a, {
                            className: "framer-anbrd9 framer-lux5qc",
                            "data-framer-name": "Exodus Logo",
                            name: "Exodus Logo",
                            children: e(s, {
                              className: "framer-iokwtq",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 32,
                              intrinsicWidth: 156,
                              name: "graphic",
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="156" height="32" fill="none"><path fill="url(#a)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#b)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/><mask id="e" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="url(#c)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#d)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/></mask><g mask="url(#e)"><path fill="url(#f)" d="M.4 0h31.2v32H.4z"/></g><path fill="#000" d="M58.92 8.8v2.797H46.029v2.863h10.955v2.798H46.028v3.144h12.893V23.2h-16.2V8.8h16.2Zm1.83 14.4 7.407-7.287L60.96 8.8h4.553l5.078 5.14L75.46 8.8h4.26l-7.177 7.113L79.95 23.2h-4.595l-4.764-5.292-5.434 5.292H60.75Z"/><path fill="#000" d="M88.832 8.8c6.001 0 9.61 3.005 9.61 7.2s-3.609 7.2-9.61 7.2c-6.001 0-9.59-3.005-9.59-7.2s3.589-7.2 9.59-7.2Zm0 2.692c-3.61 0-6.27 1.816-6.27 4.508s2.66 4.508 6.27 4.508c3.63 0 6.29-1.816 6.29-4.508s-2.66-4.508-6.29-4.508ZM110.404 8.8c4.807 0 7.703 2.667 7.703 7.178 0 4.554-2.875 7.222-7.661 7.222h-9.739V8.8h9.697Zm4.303 7.178c0-2.82-1.679-4.38-4.723-4.38h-5.982v8.804h5.982c3.044 0 4.723-1.583 4.723-4.424Zm14.298 7.222c-5.061 0-8.9-2.297-8.9-6.53V8.8h3.312v7.55c0 2.617 2.72 3.83 5.588 3.83 2.89 0 5.61-1.192 5.61-3.83V8.8h3.29v7.87c0 4.233-3.817 6.53-8.9 6.53Zm18.169 0c-2.719 0-5.651-.501-7.733-1.44l1.084-2.672c1.869.856 4.44 1.399 6.755 1.399 2.656 0 5.141-.564 5.141-1.565 0-.73-.786-1.044-2.422-1.294l-4.631-.501c-3.569-.48-5.311-1.711-5.311-3.882 0-2.796 2.953-4.445 7.287-4.445 2.613 0 6.203.48 8.051 1.315l-1.083 2.546c-1.827-.752-4.929-1.127-7.117-1.127-2.252 0-3.739.521-3.739 1.481 0 .668.744 1.002 2.656 1.274l4.503.5c3.442.48 5.226 1.65 5.226 3.924 0 2.88-3.781 4.487-8.667 4.487Z"/><defs><linearGradient id="a" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="b" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="c" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="d" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="f" x1="2.4" x2="18.2" y1="7.2" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".12" stop-color="#8952FF" stop-opacity=".87"/><stop offset="1" stop-color="#DABDFF" stop-opacity="0"/></linearGradient></defs></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://phantom.app/",
                          children: e(a.a, {
                            className: "framer-1m206e1 framer-lux5qc",
                            "data-framer-name": "Phantom Logo",
                            name: "Phantom Logo",
                            children: e(s, {
                              className: "framer-37b9ki",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 224,
                              intrinsicWidth: 1139,
                              name: "graphic",
                              svg: '<svg width="1139" height="224" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.83 224c34.325 0 60.121-29.853 75.515-53.443-1.872 5.219-2.912 10.438-2.912 15.449 0 13.778 7.905 23.59 23.508 23.59 21.427 0 44.311-18.789 56.169-39.039-.832 2.923-1.248 5.637-1.248 8.142 0 9.603 5.409 15.657 16.434 15.657 34.742 0 69.692-61.584 69.692-115.444C268.988 36.95 247.768 0 194.512 0 100.896 0 0 114.401 0 188.302 0 217.32 15.602 224 31.83 224ZM162.265 74.319c0-10.438 5.825-17.745 14.355-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.53 0-14.355-7.515-14.355-17.953Zm44.52 0c0-10.438 5.825-17.745 14.354-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.529 0-14.354-7.515-14.354-17.953Zm103.803 126.926h31.205v-30.688c0-14.404-1.248-19.832-8.529-34.445l3.952-2.088c10.61 24.843 25.589 33.819 40.983 33.819 24.756 0 44.519-21.711 44.519-55.321 0-32.15-18.099-55.74-44.103-55.74-15.394 0-30.789 8.769-41.399 33.82l-3.952-2.088c4.993-10.02 8.529-19.414 8.529-28.391h-31.205v141.122Zm31.205-88.932c0-13.778 10.402-29.018 25.796-29.018 12.482 0 22.676 10.23 22.676 28.809 0 18.371-9.778 29.227-22.884 29.227-14.562 0-25.588-14.822-25.588-29.018Zm92.315 52.19h31.205v-36.742c0-25.886 9.154-44.257 26.212-44.257 10.818 0 14.147 7.307 14.147 25.469v55.53h31.205v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.942 34.654l-3.953-2.087c5.409-11.691 6.865-18.789 6.865-29.227V24.008h-31.205v140.495Zm148.374 3.34c20.179 0 32.037-13.36 40.982-30.479l3.745 1.879c-3.953 8.142-7.697 17.536-7.697 25.26h30.581V107.72c0-33.819-14.147-50.937-47.224-50.937-32.453 0-48.472 16.283-51.592 33.401l29.957 5.22c1.04-8.977 8.321-15.031 19.971-15.031s18.307 5.845 18.307 12.943-6.865 10.438-25.172 10.647c-27.045.417-47.016 10.229-47.016 31.105 0 17.118 13.522 32.775 35.158 32.775Zm-4.161-34.863c0-16.492 26.212-5.01 40.567-17.744v3.757c0 14.822-13.106 25.678-26.213 25.678-6.865 0-14.354-2.923-14.354-11.691Zm84.137 31.523h31.205v-36.742c0-25.886 9.153-44.257 26.212-44.257 10.818 0 14.146 7.307 14.146 25.469v55.53h31.206v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.943 34.654l-3.952-2.087c5.409-11.691 6.865-18.789 6.865-29.227h-31.205v104.38Zm185.883.418v-25.887c-6.657 2.297-25.172 6.263-25.172-8.976V85.174h24.964V60.123h-24.964V32.149l-31.413 9.394v18.58h-18.723v25.051h18.723l.208 47.389c0 34.863 30.997 39.873 56.377 32.358Zm63.387 2.922c31.621 0 55.753-24.216 55.753-55.739 0-31.314-24.132-55.321-55.753-55.321s-55.961 24.007-55.961 55.321c0 31.523 24.34 55.739 55.961 55.739Zm-23.716-55.53c0-17.327 9.778-29.435 23.716-29.435s23.508 12.108 23.508 29.435c0 17.327-9.57 29.435-23.508 29.435-13.938 0-23.716-12.108-23.716-29.435Zm89.138 52.19h31.2v-36.742c0-26.93 8.53-44.257 22.26-44.257 8.95 0 11.86 7.098 11.86 25.469v55.53h31.21v-36.742c0-25.26 9.15-44.257 22.26-44.257 8.73 0 11.85 8.142 11.85 25.469v55.53H1139v-60.54c0-33.193-10.82-47.18-32.04-47.18-22.05 0-29.95 15.657-37.65 34.863l-3.75-1.879c7.29-21.92-8.53-32.984-24.13-32.984-20.59 0-28.08 15.657-36.4 34.654l-3.75-2.087c5.2-11.691 7.07-18.789 7.07-29.227h-31.2v104.38Z" fill="#AB9FF2"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(a.div, {
                          className: "framer-ei98th",
                          "data-framer-name": "WalletConnect logo",
                          name: "WalletConnect logo",
                          children: e(s, {
                            className: "framer-ouukhz",
                            "data-framer-name": "graphic",
                            layout: "position",
                            name: "graphic",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 163 25.695"><g id="ss33272303_1"><path d="M 0 0 L 162.68 0 L 162.68 25.695 L 0 25.695 Z" fill="transparent"></path><path d="M 9.803 7.274 C 14.652 2.529 22.513 2.529 27.362 7.274 L 27.945 7.845 C 28.062 7.958 28.127 8.113 28.127 8.274 C 28.127 8.436 28.062 8.591 27.945 8.704 L 25.949 10.658 C 25.827 10.776 25.632 10.776 25.51 10.658 L 24.707 9.872 C 21.325 6.562 15.841 6.562 12.458 9.872 L 11.598 10.713 C 11.476 10.832 11.281 10.832 11.159 10.713 L 9.163 8.759 C 9.046 8.647 8.981 8.492 8.981 8.33 C 8.981 8.168 9.046 8.013 9.163 7.9 Z M 31.49 11.314 L 33.266 13.053 C 33.383 13.166 33.448 13.321 33.448 13.482 C 33.448 13.644 33.383 13.799 33.266 13.912 L 25.256 21.752 C 25.012 21.99 24.622 21.99 24.378 21.752 L 18.693 16.188 C 18.632 16.128 18.534 16.128 18.473 16.188 L 12.788 21.752 C 12.543 21.99 12.154 21.99 11.909 21.752 L 3.898 13.912 C 3.782 13.799 3.716 13.644 3.716 13.482 C 3.716 13.321 3.782 13.166 3.898 13.053 L 5.675 11.314 C 5.92 11.077 6.308 11.077 6.553 11.314 L 12.238 16.878 C 12.299 16.938 12.397 16.938 12.458 16.878 L 18.143 11.314 C 18.387 11.076 18.777 11.076 19.021 11.314 L 24.707 16.878 C 24.768 16.938 24.866 16.938 24.927 16.878 L 30.612 11.314 C 30.856 11.076 31.246 11.076 31.49 11.314 Z M 44.133 19.223 L 46.279 10.639 C 46.406 10.165 46.515 9.656 46.661 8.857 C 46.77 9.656 46.897 10.165 46.988 10.639 L 48.843 19.223 L 52.681 19.223 L 55.918 6.492 L 52.971 6.492 L 51.189 14.313 C 51.012 15.057 50.873 15.809 50.772 16.567 C 50.626 15.713 50.48 15.076 50.316 14.33 L 48.588 6.492 L 44.733 6.492 L 42.859 14.33 C 42.692 15.071 42.546 15.817 42.423 16.567 C 42.3 15.817 42.155 15.071 41.987 14.33 L 40.241 6.492 L 37.167 6.492 L 40.386 19.223 Z M 58.115 19.55 C 59.57 19.55 60.497 18.95 60.97 18.077 C 60.915 18.35 60.898 18.623 60.898 18.896 L 60.898 19.223 L 63.335 19.223 L 63.335 13.967 C 63.335 11.457 62.189 10.002 59.388 10.002 C 56.969 10.002 55.387 11.348 55.242 13.203 L 57.916 13.203 C 58.006 12.384 58.588 11.894 59.479 11.894 C 60.316 11.894 60.77 12.366 60.77 12.912 C 60.77 13.312 60.534 13.548 59.824 13.639 L 58.552 13.785 C 56.66 14.021 55.042 14.713 55.042 16.713 C 55.042 18.531 56.551 19.55 58.115 19.55 Z M 58.934 17.677 C 58.224 17.677 57.697 17.277 57.697 16.585 C 57.697 15.913 58.297 15.585 59.207 15.422 L 59.825 15.312 C 60.352 15.203 60.643 15.112 60.825 14.949 L 60.825 15.785 C 60.825 16.913 60.006 17.677 58.933 17.677 Z M 64.602 6.492 L 64.602 19.223 L 67.239 19.223 L 67.239 6.492 Z M 68.764 6.492 L 68.764 19.223 L 71.401 19.223 L 71.401 6.492 Z M 77.158 19.55 C 79.668 19.55 81.286 18.132 81.468 16.277 L 78.813 16.277 C 78.685 17.095 77.993 17.549 77.158 17.549 C 76.03 17.549 75.211 16.64 75.194 15.385 L 81.522 15.385 L 81.522 14.876 C 81.522 11.93 79.904 10.002 77.103 10.002 C 74.412 10.002 72.52 11.893 72.52 14.749 C 72.52 17.84 74.466 19.55 77.158 19.55 Z M 75.174 13.657 C 75.284 12.639 76.03 11.893 77.085 11.893 C 78.104 11.893 78.812 12.602 78.831 13.657 L 75.175 13.657 Z M 87.104 19.404 C 87.686 19.404 88.25 19.313 88.504 19.241 L 88.504 17.239 C 88.294 17.276 88.081 17.294 87.867 17.294 C 86.904 17.294 86.559 16.748 86.559 15.857 L 86.559 12.366 L 88.704 12.366 L 88.704 10.31 L 86.559 10.31 L 86.559 7.146 L 83.939 7.146 L 83.939 10.31 L 82.011 10.31 L 82.011 12.366 L 83.939 12.366 L 83.939 16.221 C 83.939 18.331 84.994 19.403 87.104 19.403 Z M 96.005 19.55 C 99.607 19.55 101.789 17.44 102.062 14.403 L 99.207 14.403 C 98.988 16.058 97.824 17.186 96.115 17.186 C 94.096 17.186 92.677 15.549 92.677 12.785 C 92.677 10.075 94.151 8.529 96.169 8.529 C 97.897 8.529 98.879 9.584 99.079 11.13 L 102.007 11.13 C 101.716 7.965 99.388 6.164 96.188 6.164 C 92.532 6.164 89.731 8.637 89.731 12.785 C 89.731 17.076 92.187 19.55 96.005 19.55 Z M 107.779 19.55 C 110.525 19.55 112.472 17.822 112.472 14.803 C 112.472 11.839 110.525 10.002 107.779 10.002 C 105.051 10.002 103.105 11.839 103.105 14.803 C 103.105 17.822 105.033 19.55 107.779 19.55 Z M 107.779 17.513 C 106.56 17.513 105.778 16.513 105.778 14.803 C 105.778 13.058 106.597 12.076 107.779 12.076 C 108.98 12.076 109.798 13.058 109.798 14.803 C 109.798 16.514 108.997 17.513 107.779 17.513 Z M 116.148 19.223 L 116.148 14.004 C 116.148 12.894 116.839 12.076 117.821 12.076 C 118.748 12.076 119.294 12.785 119.294 13.967 L 119.294 19.223 L 121.931 19.223 L 121.931 13.585 C 121.931 11.439 120.804 10.002 118.784 10.002 C 117.384 10.002 116.53 10.674 116.075 11.475 C 116.122 11.205 116.146 10.931 116.148 10.656 L 116.148 10.311 L 113.511 10.311 L 113.511 19.223 Z M 126.146 19.223 L 126.146 14.004 C 126.146 12.894 126.836 12.076 127.818 12.076 C 128.747 12.076 129.292 12.785 129.292 13.967 L 129.292 19.223 L 131.929 19.223 L 131.929 13.585 C 131.929 11.439 130.801 10.002 128.783 10.002 C 127.382 10.002 126.527 10.674 126.073 11.475 C 126.127 11.147 126.146 10.893 126.146 10.656 L 126.146 10.311 L 123.508 10.311 L 123.508 19.223 Z M 137.603 19.55 C 140.113 19.55 141.731 18.132 141.914 16.277 L 139.258 16.277 C 139.131 17.095 138.44 17.549 137.603 17.549 C 136.475 17.549 135.657 16.64 135.639 15.385 L 141.968 15.385 L 141.968 14.876 C 141.968 11.93 140.349 10.002 137.549 10.002 C 134.857 10.002 132.965 11.893 132.965 14.749 C 132.965 17.84 134.912 19.55 137.603 19.55 Z M 135.621 13.657 C 135.73 12.639 136.475 11.893 137.53 11.893 C 138.548 11.893 139.258 12.602 139.276 13.657 Z M 147.631 19.55 C 150.395 19.55 151.905 18.041 152.195 15.695 L 149.559 15.695 C 149.467 16.677 148.903 17.513 147.721 17.513 C 146.521 17.513 145.703 16.404 145.703 14.767 C 145.703 12.985 146.649 12.076 147.776 12.076 C 148.886 12.076 149.431 12.875 149.504 13.803 L 152.141 13.803 C 151.941 11.639 150.467 10.002 147.757 10.002 C 145.121 10.002 143.029 11.748 143.029 14.767 C 143.029 17.749 144.793 19.55 147.631 19.55 Z M 157.9 19.404 C 158.482 19.404 159.045 19.313 159.3 19.241 L 159.3 17.239 C 159.09 17.276 158.877 17.294 158.663 17.294 C 157.7 17.294 157.354 16.748 157.354 15.857 L 157.354 12.366 L 159.5 12.366 L 159.5 10.31 L 157.354 10.31 L 157.354 7.146 L 154.735 7.146 L 154.735 10.31 L 152.807 10.31 L 152.807 12.366 L 154.735 12.366 L 154.735 16.221 C 154.735 18.331 155.789 19.403 157.9 19.403 Z" fill="rgb(0,0,0)"></path></g></svg>',
                            svgContentId: 33272303,
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          href: "https://brave.com/wallet/",
                          children: e(a.a, {
                            className: "framer-150hodz framer-lux5qc",
                            "data-framer-name": "Brave Logo",
                            name: "Brave Logo",
                            children: e(s, {
                              className: "framer-1tvcox4",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 59,
                              intrinsicWidth: 188,
                              name: "graphic",
                              svg: '<svg width="188" height="59" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="50.706%" x2="100%" y2="50.706%" id="a"><stop stop-color="#F50" offset="0%"/><stop stop-color="#F50" offset="40.988%"/><stop stop-color="#FF2000" offset="58.198%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><linearGradient x1="2.148%" y1="50.706%" x2="100%" y2="50.706%" id="b"><stop stop-color="#FF452A" offset="0%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><path d="M38.184 5.781 33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87c0 0 5.856-.538 7.868 2.797 0 0 5.43 1.056 6.161 1.056.732 0 2.318-.621 3.782-1.118 1.464-.497 2.44-.501 2.44-.501s.976.004 2.44.5c1.464.498 3.05 1.12 3.782 1.12.732 0 6.16-1.057 6.16-1.057C38.794 6.113 44.65 6.65 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87" id="c"/></defs><g fill="none" fill-rule="evenodd"><path d="M62.66 31.624V11.585h1.886c1.536 0 2.782 1.266 2.782 2.828v8.91c3.022-2.741 5.592-3.838 9.017-3.909 6.57-.136 12.272 4.824 12.814 11.481.647 7.954-5.043 13.94-12.455 13.94-8.138 0-14.044-5.13-14.044-13.211Zm4.59 1.573c.46 4.14 4.35 7.56 8.452 7.626 5.343.083 8.985-3.457 8.985-8.694 0-5.237-3.56-8.695-8.753-8.695-5.552-.012-9.315 4.087-8.684 9.763Zm29.696-13.282v3.57c2.937-3.313 4.676-4.203 8.113-4.203 1 0 1.999.083 2.986.244v4.74a11.888 11.888 0 0 0-3.234-.438c-2.489 0-4.578.828-6.11 2.393-1.344 1.37-1.743 2.443-1.743 4.596v13.199H92.12v-24.1h4.826Zm12.247 7.97c.249-2.347.697-3.618 1.69-4.84 1.992-2.484 5.577-3.763 10.651-3.763 4.033 0 6.97.637 9.01 2.004 1.694 1.122 2.39 2.786 2.39 5.717v10.703c0 2.347.6 3.175 2.24 3.13a9.809 9.809 0 0 0 1.096-.1v3.226a7.078 7.078 0 0 1-2.537.389c-3.034 0-4.427-.927-5.372-3.619-2.986 2.787-6.073 3.958-10.5 3.958-5.922 0-9.556-2.736-9.556-7.187-.025-2.538 1.443-4.846 3.731-5.863 1.792-.782 2.888-1.026 8.012-1.565 4.378-.438 5.128-.538 6.37-.931 1.344-.439 1.943-1.172 1.943-2.393 0-2.592-2.139-3.764-6.619-3.764-4.236 0-6.419.853-7.295 3.031a2.889 2.889 0 0 1-2.667 1.855l-2.587.012Zm19.143 4.107a46.702 46.702 0 0 1-9.408 1.76c-4.33.439-5.674 1.271-5.674 3.47 0 2.442 1.992 3.726 5.922 3.726 3.234 0 5.674-.828 7.417-2.443 1.393-1.32 1.743-2.248 1.743-4.554v-1.959Zm19.615 12.02h-1.246a2.847 2.847 0 0 1-2.582-1.632l-10.439-22.465h2.9a4.26 4.26 0 0 1 3.922 2.555l6.965 16.147 7.197-16.21a4.26 4.26 0 0 1 3.902-2.508h2.635L150.52 42.405a2.847 2.847 0 0 1-2.57 1.607Zm16.524-10.653c.497 4.645 4.073 7.527 9.405 7.527 3.026 0 5.295-.915 6.7-2.741a4.292 4.292 0 0 1 3.38-1.656h2.807c-2.444 5.473-6.819 8.164-13.34 8.164-8.145 0-13.636-5.034-13.636-12.561s5.625-12.806 13.739-12.806c5.869 0 10.59 2.687 12.491 7.187.847 2.07 1.194 3.909 1.194 6.89l-22.74-.004Zm17.815-3.727c-1.095-4.252-4.33-6.649-8.81-6.649s-7.714 2.397-8.858 6.65h17.668Z" fill="#3B3E4F"/><g transform="translate(.6)"><path d="m47.09 13.985 1.342-3.356S46.724 8.764 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87L33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87S.366 10.63.366 10.63l1.342 3.356L0 18.956s5.023 19.384 5.612 21.75c1.159 4.662 1.952 6.464 5.246 8.825 3.293 2.362 9.271 6.464 10.247 7.085.976.621 2.196 1.68 3.294 1.68 1.098 0 2.318-1.059 3.294-1.68s6.953-4.723 10.247-7.085c3.294-2.361 4.087-4.163 5.246-8.824.589-2.367 5.612-21.75 5.612-21.75l-1.708-4.972Z" fill="url(#a)"/><path d="M24.399 36.279c.334 0 2.477.77 4.196 1.677 1.72.906 2.965 1.547 3.363 1.8.399.255.156.734-.207.995s-5.238 4.107-5.71 4.532c-.474.426-1.17 1.128-1.642 1.128-.473 0-1.168-.702-1.641-1.128-.474-.425-5.348-4.27-5.711-4.532-.363-.261-.606-.74-.208-.994.399-.254 1.645-.895 3.364-1.801 1.719-.907 3.861-1.677 4.196-1.677Zm.026-27.393c.164.004 1.09.05 2.414.5 1.464.497 3.05 1.118 3.782 1.118.732 0 6.16-1.056 6.16-1.056s6.434 7.923 6.434 9.617c0 1.693-.81 2.14-1.623 3.02l-4.824 5.22c-.456.493-1.407 1.242-.848 2.59.56 1.347 1.384 3.061.467 4.8-.917 1.74-2.488 2.9-3.494 2.708-1.007-.192-3.37-1.45-4.24-2.025-.869-.575-3.624-2.89-3.624-3.775 0-.886 2.848-2.476 3.374-2.837.526-.362 2.926-1.76 2.975-2.309.05-.549.03-.71-.678-2.066-.708-1.356-1.983-3.166-1.77-4.37.211-1.205 2.268-1.83 3.736-2.396 1.468-.564 4.294-1.63 4.647-1.797.353-.166.262-.324-.808-.427-1.07-.103-4.104-.514-5.472-.125-1.368.389-3.706.98-3.895 1.293-.19.314-.356.324-.162 1.405.194 1.082 1.195 6.27 1.293 7.192.097.922.287 1.53-.688 1.758-.976.227-2.618.622-3.182.622-.564 0-2.206-.395-3.182-.622-.975-.227-.785-.836-.688-1.758.097-.922 1.098-6.11 1.293-7.192.194-1.08.027-1.091-.162-1.405-.19-.313-2.527-.904-3.895-1.293-1.368-.389-4.403.022-5.472.125-1.07.103-1.161.261-.808.427.353.166 3.18 1.233 4.647 1.797 1.467.565 3.524 1.191 3.737 2.395.212 1.205-1.064 3.015-1.772 4.37-.708 1.357-.727 1.518-.677 2.067.049.549 2.448 1.947 2.975 2.309.526.36 3.373 1.951 3.373 2.837 0 .885-2.754 3.2-3.624 3.775-.869.575-3.233 1.833-4.239 2.025-1.006.192-2.577-.969-3.494-2.708-.917-1.739-.092-3.453.466-4.8.56-1.348-.39-2.097-.847-2.59l-4.824-5.22c-.814-.88-1.623-1.327-1.623-3.02 0-1.694 6.433-9.617 6.433-9.617s5.43 1.056 6.161 1.056c.732 0 2.318-.621 3.782-1.118 1.325-.45 2.25-.496 2.414-.5Z" fill="#FFF"/><use fill="url(#b)" xlink:href="#c"/></g></g></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://www.bitski.com/",
                          children: e(a.a, {
                            className: "framer-mslmhc framer-lux5qc",
                            "data-framer-name": "Bitski Logo",
                            name: "Bitski Logo",
                            children: e(s, {
                              className: "framer-qrfjc6",
                              "data-framer-name": "graphic",
                              layout: "position",
                              name: "graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 27"><path d="M 0.796 0 L 8.505 0 C 13.608 0 16.322 3.27 16.322 8.062 C 16.322 8.67 16.178 9.583 16.069 10.153 C 16.033 10.381 15.997 10.534 15.997 10.686 C 15.997 10.99 16.105 11.18 16.503 11.408 C 18.928 12.853 20.014 15.211 20.014 18.557 C 20.014 23.235 17.263 26.619 11.617 26.619 L 0.796 26.619 C 0.217 26.619 0 26.353 0 25.745 L 0 0.875 C 0 0.266 0.217 0 0.796 0 Z M 6.659 10.457 L 8.505 10.457 C 9.446 10.457 10.17 9.849 10.17 8.67 C 10.17 7.529 9.446 6.883 8.505 6.883 L 6.659 6.883 C 6.08 6.883 5.863 7.149 5.863 7.757 L 5.863 9.583 C 5.863 10.191 6.08 10.458 6.659 10.458 Z M 6.659 19.736 L 11.509 19.736 C 12.92 19.736 13.716 19.204 13.716 17.949 C 13.716 16.732 12.92 16.162 11.509 16.162 L 6.659 16.162 C 6.08 16.162 5.863 16.428 5.863 17.036 L 5.863 18.862 C 5.863 19.47 6.08 19.736 6.659 19.736 Z M 22.258 25.745 L 22.258 8.48 C 22.258 7.872 22.475 7.606 23.054 7.606 L 27.506 7.606 C 28.085 7.606 28.302 7.872 28.302 8.48 L 28.302 25.745 C 28.302 26.353 28.085 26.62 27.506 26.62 L 23.054 26.62 C 22.475 26.62 22.258 26.353 22.258 25.745 Z M 22.258 4.677 L 22.258 0.875 C 22.258 0.266 22.475 0 23.054 0 L 27.506 0 C 28.085 0 28.302 0.266 28.302 0.875 L 28.302 4.677 C 28.302 5.286 28.085 5.552 27.506 5.552 L 23.054 5.552 C 22.475 5.552 22.258 5.286 22.258 4.677 Z M 33.188 13.88 L 31.125 13.88 C 30.546 13.88 30.292 13.652 30.292 13.043 L 30.292 8.442 C 30.292 7.834 30.509 7.606 31.125 7.606 L 33.188 7.606 C 33.767 7.606 33.984 7.339 33.984 6.731 L 33.984 0.875 C 33.984 0.266 34.201 0 34.78 0 L 39.232 0 C 39.811 0 40.028 0.266 40.028 0.875 L 40.028 6.731 C 40.028 7.339 40.245 7.606 40.824 7.606 L 44.95 7.606 C 45.529 7.606 45.782 7.834 45.782 8.442 L 45.782 13.043 C 45.782 13.652 45.529 13.88 44.95 13.88 L 40.824 13.88 C 40.245 13.88 40.028 14.146 40.028 14.755 L 40.028 25.745 C 40.028 26.353 39.811 26.619 39.232 26.619 L 34.78 26.619 C 34.201 26.619 33.984 26.353 33.984 25.745 L 33.984 14.755 C 33.984 14.146 33.767 13.88 33.188 13.88 Z M 54.939 27 C 52.116 27 49.221 26.087 47.158 24.756 C 46.796 24.528 46.723 24.11 46.94 23.654 L 48.569 20.421 C 48.859 19.851 49.293 19.889 49.8 20.193 C 51.32 21.144 53.346 21.828 54.903 21.828 C 55.88 21.828 56.604 21.524 56.604 20.84 C 56.604 20.193 55.952 19.965 54.975 19.965 L 54.179 19.965 C 49.908 19.965 46.977 17.721 46.977 13.842 C 46.977 9.507 50.668 7.226 54.722 7.226 C 57.4 7.226 59.39 7.72 61.526 8.937 C 61.924 9.165 62.068 9.583 61.815 10.04 L 59.969 13.424 C 59.716 13.918 59.173 13.957 58.703 13.652 C 57.255 12.702 55.952 12.435 54.758 12.435 C 53.672 12.435 53.129 12.816 53.129 13.348 C 53.129 13.995 53.672 14.261 55.228 14.261 L 56.133 14.261 C 60.223 14.261 62.865 16.352 62.865 20.003 C 62.865 24.528 59.571 27 54.939 27 Z M 76.336 16.314 L 82.199 25.517 C 82.561 26.087 82.344 26.619 81.692 26.619 L 76.445 26.619 C 75.829 26.619 75.359 26.543 74.852 25.745 L 72.029 21.448 C 71.704 20.953 71.378 20.953 70.98 21.372 L 70.69 21.676 C 70.22 22.17 70.183 22.436 70.183 23.121 L 70.183 25.783 C 70.183 26.353 69.966 26.619 69.387 26.619 L 64.9 26.619 C 64.357 26.619 64.14 26.353 64.14 25.783 L 64.14 0.837 C 64.14 0.266 64.357 0 64.9 0 L 69.387 0 C 69.966 0 70.183 0.266 70.183 0.837 L 70.183 11.903 C 70.183 12.511 70.726 12.663 71.124 12.169 L 74.201 8.518 C 74.707 7.91 75.214 7.605 75.866 7.605 L 81.511 7.605 C 82.199 7.605 82.38 8.252 81.91 8.746 L 76.445 14.869 C 76.01 15.363 75.902 15.667 76.336 16.314 Z M 83.936 25.745 L 83.936 8.48 C 83.936 7.872 84.153 7.606 84.732 7.606 L 89.184 7.606 C 89.763 7.606 89.98 7.872 89.98 8.48 L 89.98 25.745 C 89.98 26.353 89.763 26.62 89.184 26.62 L 84.732 26.62 C 84.153 26.62 83.936 26.353 83.936 25.745 Z M 83.936 4.677 L 83.936 0.875 C 83.936 0.266 84.153 0 84.732 0 L 89.184 0 C 89.763 0 89.98 0.266 89.98 0.875 L 89.98 4.677 C 89.98 5.286 89.763 5.552 89.184 5.552 L 84.732 5.552 C 84.153 5.552 83.936 5.286 83.936 4.677 Z" fill="rgb(255,53,103)"></path></svg>',
                              svgContentId: 387479123,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://www.frontier.xyz/",
                          children: e(a.a, {
                            className: "framer-bcel84 framer-lux5qc",
                            "data-framer-name": "Frontier Logo",
                            name: "Frontier Logo",
                            children: e(s, {
                              className: "framer-po6gjh",
                              "data-framer-name": "graphic",
                              layout: "position",
                              name: "graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 19"><g id="ss1508076913_1"><path d="M 0 0 L 110 0 L 110 18.75 L 0 18.75 Z" fill="transparent"></path><path d="M 12.609 0.165 L 12.511 0.435 L 12.188 1.299 L 11.974 1.856 C 10.346 6.033 9.079 8.015 7.732 8.015 C 7.044 8.033 6.38 7.751 5.902 7.238 L 5.73 7.077 C 5.303 6.668 5.122 6.567 4.71 6.567 C 4.496 6.567 4.112 6.851 3.627 7.516 C 2.977 8.47 2.424 9.491 1.977 10.564 L 1.923 10.69 L 7.7 10.69 L 6.981 12.24 L 1.586 12.24 L 1.586 18.587 L 0 18.587 L 0 0.164 L 12.609 0.164 Z M 10.362 1.712 L 1.586 1.712 L 1.586 7.85 C 2.638 5.96 3.637 5.012 4.713 5.012 C 5.443 4.987 6.151 5.282 6.662 5.823 L 6.84 5.99 C 7.238 6.372 7.392 6.459 7.734 6.459 C 8.109 6.46 9.108 4.817 10.362 1.712 Z M 19.251 0.165 L 20.515 0.165 C 23.065 0.165 26.498 1.382 26.498 6.285 C 26.498 9.195 25.045 11.048 23.222 11.874 L 23.065 11.943 L 26.499 18.587 L 24.602 18.587 L 21.399 12.369 C 21.268 12.392 21.136 12.402 21.003 12.401 L 17.245 12.401 L 17.245 18.587 L 15.579 18.587 L 15.579 0.197 L 16.672 0.18 C 17.56 0.17 18.382 0.166 19.251 0.165 Z M 20.418 1.744 L 17.245 1.744 L 17.245 10.855 L 20.613 10.855 C 22.77 10.855 24.863 9.375 24.863 6.217 C 24.863 3.03 23.015 1.798 20.576 1.745 Z M 102.16 0.165 L 104.019 0.165 C 106.57 0.165 110.003 1.382 110.003 6.285 C 110.003 9.195 108.55 11.048 106.727 11.875 L 106.57 11.943 L 110 18.586 L 108.104 18.586 L 104.899 12.368 C 104.769 12.391 104.637 12.401 104.504 12.401 L 100.748 12.401 L 100.748 18.586 L 99.08 18.586 L 99.08 0.197 L 100.02 0.182 C 100.772 0.173 101.46 0.17 102.16 0.166 Z M 103.919 1.742 L 100.746 1.742 L 100.746 10.855 L 104.114 10.855 C 106.272 10.855 108.364 9.374 108.364 6.216 C 108.364 3.028 106.517 1.796 104.077 1.744 Z M 37.386 0 C 41.055 0 44.726 2.87 44.837 8.799 L 44.837 9.671 C 44.837 15.791 41.11 18.75 37.383 18.75 C 33.681 18.75 30.043 15.88 29.932 9.951 L 29.932 9.079 C 29.932 2.961 33.626 0 37.386 0 Z M 37.386 1.546 C 34.588 1.546 31.666 3.677 31.569 8.815 L 31.569 9.671 C 31.569 14.967 34.544 17.171 37.356 17.171 C 40.184 17.171 43.108 15.041 43.205 9.938 L 43.205 9.079 C 43.205 3.75 40.23 1.546 37.386 1.546 Z M 72.108 18.587 L 72.108 1.744 L 76.096 1.744 L 76.815 0.164 L 65.764 0.164 L 65.764 1.744 L 70.472 1.744 L 70.472 18.587 L 72.107 18.587 Z M 81.72 18.585 L 81.72 0.067 L 80.085 0.067 L 80.085 18.585 Z M 95.091 18.587 L 95.811 17.04 L 87.016 17.04 L 87.016 10.625 L 92.869 10.625 L 93.588 9.079 L 87.016 9.079 L 87.016 1.712 L 95.091 1.712 L 95.81 0.164 L 85.416 0.164 L 85.416 18.587 Z M 62.578 18.611 L 62.578 0.23 L 60.878 0.23 L 60.878 14.361 C 60.878 14.361 60.177 13.589 59.669 12.972 L 48.836 0.154 L 48.517 0.154 L 48.517 18.599 L 50.171 18.61 L 50.171 4.344 C 50.171 4.344 50.918 5.282 51.425 5.899 L 62.259 18.611 L 62.579 18.611 Z" fill="rgb(0,0,0)"></path></g></svg>',
                              svgContentId: 1508076913,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(o, {
                          className: "framer-ymmltx-container",
                          children: e(K, {
                            height: "100%",
                            id: "S77MirgwH",
                            layoutId: "S77MirgwH",
                            width: "100%",
                          }),
                        }),
                        e(h, {
                          href: "https://ultimate.app/",
                          children: e(a.a, {
                            className: "framer-1epvy10 framer-lux5qc",
                            "data-framer-name": "Ultimate Logo",
                            name: "Ultimate Logo",
                            children: e(s, {
                              className: "framer-ah5tf9",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 18,
                              intrinsicWidth: 130,
                              name: "graphic",
                              svg: '<svg width="130" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.615V.012h5.544v10.603c0 1.208 1.164 1.965 2.767 1.965 1.604 0 2.767-.757 2.767-1.965V.012h5.544v10.603c0 4.562-3.625 7.385-8.311 7.385C3.625 17.989 0 15.177 0 10.615ZM18.26 0h5.544v12.342h8.063v5.296H18.259V0Z" fill="#000"/><path d="M33.504 5.296h-5.16V0H44.22v5.296h-5.16v12.342h-5.545l-.011-12.342Zm12.354 7.058h3.274V5.296h-3.274V0h12.094v5.296h-3.275v7.058h3.275v5.296H45.858v-5.296ZM59.589 0h6.3l3.05 7.204h1.004L72.993 0h6.3v17.638H73.75v-7.08h-1.005l-1.762 4.28h-3.071l-1.762-4.28h-1.005v7.08H59.6L59.589 0ZM99.8 17.266v.372h-5.69l-1.028-3.749h-5.545l-1.028 3.75h-5.69v-.373L85.921 0h8.797L99.8 17.266Zm-7.882-7.668-1.106-4.054h-1.005L88.7 9.598h3.218Zm11.36-4.302h-5.16V0h15.876v5.296h-5.16v12.342h-5.545l-.011-12.342ZM115.62 0h13.856v5.217h-8.311v1.762h7.159v3.68h-7.159v1.762h8.311v5.217H115.62V0Z" fill="#000"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(o, {
                          className: "framer-17u7b1w-container",
                          children: e(J, {
                            height: "100%",
                            id: "OK6Ggr2Mg",
                            layoutId: "OK6Ggr2Mg",
                            width: "100%",
                          }),
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                j() &&
                  e(o, {
                    className:
                      "framer-pmklgh-container hidden-72rtr7 hidden-9i6d03 hidden-1dkgatv",
                    id: p,
                    ref: B,
                    children: e(D, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0.2,
                        fadeContent: !0,
                        fadeInset: 13,
                        fadeWidth: 40,
                        overflow: !1,
                      },
                      gap: 40,
                      height: "100%",
                      hoverFactor: 1,
                      id: "vXmwgbaJS",
                      layoutId: "vXmwgbaJS",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        e(h, {
                          href: "https://www.exodus.com/",
                          children: e(a.a, {
                            className: "framer-anbrd9 framer-lux5qc",
                            "data-framer-name": "Exodus Logo",
                            name: "Exodus Logo",
                            children: e(s, {
                              className: "framer-iokwtq",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 32,
                              intrinsicWidth: 156,
                              name: "graphic",
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="156" height="32" fill="none"><path fill="url(#a)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#b)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/><mask id="e" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="url(#c)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#d)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/></mask><g mask="url(#e)"><path fill="url(#f)" d="M.4 0h31.2v32H.4z"/></g><path fill="#000" d="M58.92 8.8v2.797H46.029v2.863h10.955v2.798H46.028v3.144h12.893V23.2h-16.2V8.8h16.2Zm1.83 14.4 7.407-7.287L60.96 8.8h4.553l5.078 5.14L75.46 8.8h4.26l-7.177 7.113L79.95 23.2h-4.595l-4.764-5.292-5.434 5.292H60.75Z"/><path fill="#000" d="M88.832 8.8c6.001 0 9.61 3.005 9.61 7.2s-3.609 7.2-9.61 7.2c-6.001 0-9.59-3.005-9.59-7.2s3.589-7.2 9.59-7.2Zm0 2.692c-3.61 0-6.27 1.816-6.27 4.508s2.66 4.508 6.27 4.508c3.63 0 6.29-1.816 6.29-4.508s-2.66-4.508-6.29-4.508ZM110.404 8.8c4.807 0 7.703 2.667 7.703 7.178 0 4.554-2.875 7.222-7.661 7.222h-9.739V8.8h9.697Zm4.303 7.178c0-2.82-1.679-4.38-4.723-4.38h-5.982v8.804h5.982c3.044 0 4.723-1.583 4.723-4.424Zm14.298 7.222c-5.061 0-8.9-2.297-8.9-6.53V8.8h3.312v7.55c0 2.617 2.72 3.83 5.588 3.83 2.89 0 5.61-1.192 5.61-3.83V8.8h3.29v7.87c0 4.233-3.817 6.53-8.9 6.53Zm18.169 0c-2.719 0-5.651-.501-7.733-1.44l1.084-2.672c1.869.856 4.44 1.399 6.755 1.399 2.656 0 5.141-.564 5.141-1.565 0-.73-.786-1.044-2.422-1.294l-4.631-.501c-3.569-.48-5.311-1.711-5.311-3.882 0-2.796 2.953-4.445 7.287-4.445 2.613 0 6.203.48 8.051 1.315l-1.083 2.546c-1.827-.752-4.929-1.127-7.117-1.127-2.252 0-3.739.521-3.739 1.481 0 .668.744 1.002 2.656 1.274l4.503.5c3.442.48 5.226 1.65 5.226 3.924 0 2.88-3.781 4.487-8.667 4.487Z"/><defs><linearGradient id="a" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="b" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="c" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="d" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="f" x1="2.4" x2="18.2" y1="7.2" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".12" stop-color="#8952FF" stop-opacity=".87"/><stop offset="1" stop-color="#DABDFF" stop-opacity="0"/></linearGradient></defs></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(o, {
                          className: "framer-17u7b1w-container",
                          children: e(J, {
                            height: "100%",
                            id: "OK6Ggr2Mg",
                            layoutId: "OK6Ggr2Mg",
                            width: "100%",
                          }),
                        }),
                        e(h, {
                          href: "https://phantom.app/",
                          children: e(a.a, {
                            className: "framer-1m206e1 framer-lux5qc",
                            "data-framer-name": "Phantom Logo",
                            name: "Phantom Logo",
                            children: e(s, {
                              className: "framer-37b9ki",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 224,
                              intrinsicWidth: 1139,
                              name: "graphic",
                              svg: '<svg width="1139" height="224" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.83 224c34.325 0 60.121-29.853 75.515-53.443-1.872 5.219-2.912 10.438-2.912 15.449 0 13.778 7.905 23.59 23.508 23.59 21.427 0 44.311-18.789 56.169-39.039-.832 2.923-1.248 5.637-1.248 8.142 0 9.603 5.409 15.657 16.434 15.657 34.742 0 69.692-61.584 69.692-115.444C268.988 36.95 247.768 0 194.512 0 100.896 0 0 114.401 0 188.302 0 217.32 15.602 224 31.83 224ZM162.265 74.319c0-10.438 5.825-17.745 14.355-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.53 0-14.355-7.515-14.355-17.953Zm44.52 0c0-10.438 5.825-17.745 14.354-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.529 0-14.354-7.515-14.354-17.953Zm103.803 126.926h31.205v-30.688c0-14.404-1.248-19.832-8.529-34.445l3.952-2.088c10.61 24.843 25.589 33.819 40.983 33.819 24.756 0 44.519-21.711 44.519-55.321 0-32.15-18.099-55.74-44.103-55.74-15.394 0-30.789 8.769-41.399 33.82l-3.952-2.088c4.993-10.02 8.529-19.414 8.529-28.391h-31.205v141.122Zm31.205-88.932c0-13.778 10.402-29.018 25.796-29.018 12.482 0 22.676 10.23 22.676 28.809 0 18.371-9.778 29.227-22.884 29.227-14.562 0-25.588-14.822-25.588-29.018Zm92.315 52.19h31.205v-36.742c0-25.886 9.154-44.257 26.212-44.257 10.818 0 14.147 7.307 14.147 25.469v55.53h31.205v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.942 34.654l-3.953-2.087c5.409-11.691 6.865-18.789 6.865-29.227V24.008h-31.205v140.495Zm148.374 3.34c20.179 0 32.037-13.36 40.982-30.479l3.745 1.879c-3.953 8.142-7.697 17.536-7.697 25.26h30.581V107.72c0-33.819-14.147-50.937-47.224-50.937-32.453 0-48.472 16.283-51.592 33.401l29.957 5.22c1.04-8.977 8.321-15.031 19.971-15.031s18.307 5.845 18.307 12.943-6.865 10.438-25.172 10.647c-27.045.417-47.016 10.229-47.016 31.105 0 17.118 13.522 32.775 35.158 32.775Zm-4.161-34.863c0-16.492 26.212-5.01 40.567-17.744v3.757c0 14.822-13.106 25.678-26.213 25.678-6.865 0-14.354-2.923-14.354-11.691Zm84.137 31.523h31.205v-36.742c0-25.886 9.153-44.257 26.212-44.257 10.818 0 14.146 7.307 14.146 25.469v55.53h31.206v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.943 34.654l-3.952-2.087c5.409-11.691 6.865-18.789 6.865-29.227h-31.205v104.38Zm185.883.418v-25.887c-6.657 2.297-25.172 6.263-25.172-8.976V85.174h24.964V60.123h-24.964V32.149l-31.413 9.394v18.58h-18.723v25.051h18.723l.208 47.389c0 34.863 30.997 39.873 56.377 32.358Zm63.387 2.922c31.621 0 55.753-24.216 55.753-55.739 0-31.314-24.132-55.321-55.753-55.321s-55.961 24.007-55.961 55.321c0 31.523 24.34 55.739 55.961 55.739Zm-23.716-55.53c0-17.327 9.778-29.435 23.716-29.435s23.508 12.108 23.508 29.435c0 17.327-9.57 29.435-23.508 29.435-13.938 0-23.716-12.108-23.716-29.435Zm89.138 52.19h31.2v-36.742c0-26.93 8.53-44.257 22.26-44.257 8.95 0 11.86 7.098 11.86 25.469v55.53h31.21v-36.742c0-25.26 9.15-44.257 22.26-44.257 8.73 0 11.85 8.142 11.85 25.469v55.53H1139v-60.54c0-33.193-10.82-47.18-32.04-47.18-22.05 0-29.95 15.657-37.65 34.863l-3.75-1.879c7.29-21.92-8.53-32.984-24.13-32.984-20.59 0-28.08 15.657-36.4 34.654l-3.75-2.087c5.2-11.691 7.07-18.789 7.07-29.227h-31.2v104.38Z" fill="#AB9FF2"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(a.div, {
                          className: "framer-ei98th",
                          "data-framer-name": "WalletConnect logo",
                          name: "WalletConnect logo",
                          children: e(s, {
                            className: "framer-ouukhz",
                            "data-framer-name": "graphic",
                            layout: "position",
                            name: "graphic",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 163 25.695"><g id="ss33272303_1"><path d="M 0 0 L 162.68 0 L 162.68 25.695 L 0 25.695 Z" fill="transparent"></path><path d="M 9.803 7.274 C 14.652 2.529 22.513 2.529 27.362 7.274 L 27.945 7.845 C 28.062 7.958 28.127 8.113 28.127 8.274 C 28.127 8.436 28.062 8.591 27.945 8.704 L 25.949 10.658 C 25.827 10.776 25.632 10.776 25.51 10.658 L 24.707 9.872 C 21.325 6.562 15.841 6.562 12.458 9.872 L 11.598 10.713 C 11.476 10.832 11.281 10.832 11.159 10.713 L 9.163 8.759 C 9.046 8.647 8.981 8.492 8.981 8.33 C 8.981 8.168 9.046 8.013 9.163 7.9 Z M 31.49 11.314 L 33.266 13.053 C 33.383 13.166 33.448 13.321 33.448 13.482 C 33.448 13.644 33.383 13.799 33.266 13.912 L 25.256 21.752 C 25.012 21.99 24.622 21.99 24.378 21.752 L 18.693 16.188 C 18.632 16.128 18.534 16.128 18.473 16.188 L 12.788 21.752 C 12.543 21.99 12.154 21.99 11.909 21.752 L 3.898 13.912 C 3.782 13.799 3.716 13.644 3.716 13.482 C 3.716 13.321 3.782 13.166 3.898 13.053 L 5.675 11.314 C 5.92 11.077 6.308 11.077 6.553 11.314 L 12.238 16.878 C 12.299 16.938 12.397 16.938 12.458 16.878 L 18.143 11.314 C 18.387 11.076 18.777 11.076 19.021 11.314 L 24.707 16.878 C 24.768 16.938 24.866 16.938 24.927 16.878 L 30.612 11.314 C 30.856 11.076 31.246 11.076 31.49 11.314 Z M 44.133 19.223 L 46.279 10.639 C 46.406 10.165 46.515 9.656 46.661 8.857 C 46.77 9.656 46.897 10.165 46.988 10.639 L 48.843 19.223 L 52.681 19.223 L 55.918 6.492 L 52.971 6.492 L 51.189 14.313 C 51.012 15.057 50.873 15.809 50.772 16.567 C 50.626 15.713 50.48 15.076 50.316 14.33 L 48.588 6.492 L 44.733 6.492 L 42.859 14.33 C 42.692 15.071 42.546 15.817 42.423 16.567 C 42.3 15.817 42.155 15.071 41.987 14.33 L 40.241 6.492 L 37.167 6.492 L 40.386 19.223 Z M 58.115 19.55 C 59.57 19.55 60.497 18.95 60.97 18.077 C 60.915 18.35 60.898 18.623 60.898 18.896 L 60.898 19.223 L 63.335 19.223 L 63.335 13.967 C 63.335 11.457 62.189 10.002 59.388 10.002 C 56.969 10.002 55.387 11.348 55.242 13.203 L 57.916 13.203 C 58.006 12.384 58.588 11.894 59.479 11.894 C 60.316 11.894 60.77 12.366 60.77 12.912 C 60.77 13.312 60.534 13.548 59.824 13.639 L 58.552 13.785 C 56.66 14.021 55.042 14.713 55.042 16.713 C 55.042 18.531 56.551 19.55 58.115 19.55 Z M 58.934 17.677 C 58.224 17.677 57.697 17.277 57.697 16.585 C 57.697 15.913 58.297 15.585 59.207 15.422 L 59.825 15.312 C 60.352 15.203 60.643 15.112 60.825 14.949 L 60.825 15.785 C 60.825 16.913 60.006 17.677 58.933 17.677 Z M 64.602 6.492 L 64.602 19.223 L 67.239 19.223 L 67.239 6.492 Z M 68.764 6.492 L 68.764 19.223 L 71.401 19.223 L 71.401 6.492 Z M 77.158 19.55 C 79.668 19.55 81.286 18.132 81.468 16.277 L 78.813 16.277 C 78.685 17.095 77.993 17.549 77.158 17.549 C 76.03 17.549 75.211 16.64 75.194 15.385 L 81.522 15.385 L 81.522 14.876 C 81.522 11.93 79.904 10.002 77.103 10.002 C 74.412 10.002 72.52 11.893 72.52 14.749 C 72.52 17.84 74.466 19.55 77.158 19.55 Z M 75.174 13.657 C 75.284 12.639 76.03 11.893 77.085 11.893 C 78.104 11.893 78.812 12.602 78.831 13.657 L 75.175 13.657 Z M 87.104 19.404 C 87.686 19.404 88.25 19.313 88.504 19.241 L 88.504 17.239 C 88.294 17.276 88.081 17.294 87.867 17.294 C 86.904 17.294 86.559 16.748 86.559 15.857 L 86.559 12.366 L 88.704 12.366 L 88.704 10.31 L 86.559 10.31 L 86.559 7.146 L 83.939 7.146 L 83.939 10.31 L 82.011 10.31 L 82.011 12.366 L 83.939 12.366 L 83.939 16.221 C 83.939 18.331 84.994 19.403 87.104 19.403 Z M 96.005 19.55 C 99.607 19.55 101.789 17.44 102.062 14.403 L 99.207 14.403 C 98.988 16.058 97.824 17.186 96.115 17.186 C 94.096 17.186 92.677 15.549 92.677 12.785 C 92.677 10.075 94.151 8.529 96.169 8.529 C 97.897 8.529 98.879 9.584 99.079 11.13 L 102.007 11.13 C 101.716 7.965 99.388 6.164 96.188 6.164 C 92.532 6.164 89.731 8.637 89.731 12.785 C 89.731 17.076 92.187 19.55 96.005 19.55 Z M 107.779 19.55 C 110.525 19.55 112.472 17.822 112.472 14.803 C 112.472 11.839 110.525 10.002 107.779 10.002 C 105.051 10.002 103.105 11.839 103.105 14.803 C 103.105 17.822 105.033 19.55 107.779 19.55 Z M 107.779 17.513 C 106.56 17.513 105.778 16.513 105.778 14.803 C 105.778 13.058 106.597 12.076 107.779 12.076 C 108.98 12.076 109.798 13.058 109.798 14.803 C 109.798 16.514 108.997 17.513 107.779 17.513 Z M 116.148 19.223 L 116.148 14.004 C 116.148 12.894 116.839 12.076 117.821 12.076 C 118.748 12.076 119.294 12.785 119.294 13.967 L 119.294 19.223 L 121.931 19.223 L 121.931 13.585 C 121.931 11.439 120.804 10.002 118.784 10.002 C 117.384 10.002 116.53 10.674 116.075 11.475 C 116.122 11.205 116.146 10.931 116.148 10.656 L 116.148 10.311 L 113.511 10.311 L 113.511 19.223 Z M 126.146 19.223 L 126.146 14.004 C 126.146 12.894 126.836 12.076 127.818 12.076 C 128.747 12.076 129.292 12.785 129.292 13.967 L 129.292 19.223 L 131.929 19.223 L 131.929 13.585 C 131.929 11.439 130.801 10.002 128.783 10.002 C 127.382 10.002 126.527 10.674 126.073 11.475 C 126.127 11.147 126.146 10.893 126.146 10.656 L 126.146 10.311 L 123.508 10.311 L 123.508 19.223 Z M 137.603 19.55 C 140.113 19.55 141.731 18.132 141.914 16.277 L 139.258 16.277 C 139.131 17.095 138.44 17.549 137.603 17.549 C 136.475 17.549 135.657 16.64 135.639 15.385 L 141.968 15.385 L 141.968 14.876 C 141.968 11.93 140.349 10.002 137.549 10.002 C 134.857 10.002 132.965 11.893 132.965 14.749 C 132.965 17.84 134.912 19.55 137.603 19.55 Z M 135.621 13.657 C 135.73 12.639 136.475 11.893 137.53 11.893 C 138.548 11.893 139.258 12.602 139.276 13.657 Z M 147.631 19.55 C 150.395 19.55 151.905 18.041 152.195 15.695 L 149.559 15.695 C 149.467 16.677 148.903 17.513 147.721 17.513 C 146.521 17.513 145.703 16.404 145.703 14.767 C 145.703 12.985 146.649 12.076 147.776 12.076 C 148.886 12.076 149.431 12.875 149.504 13.803 L 152.141 13.803 C 151.941 11.639 150.467 10.002 147.757 10.002 C 145.121 10.002 143.029 11.748 143.029 14.767 C 143.029 17.749 144.793 19.55 147.631 19.55 Z M 157.9 19.404 C 158.482 19.404 159.045 19.313 159.3 19.241 L 159.3 17.239 C 159.09 17.276 158.877 17.294 158.663 17.294 C 157.7 17.294 157.354 16.748 157.354 15.857 L 157.354 12.366 L 159.5 12.366 L 159.5 10.31 L 157.354 10.31 L 157.354 7.146 L 154.735 7.146 L 154.735 10.31 L 152.807 10.31 L 152.807 12.366 L 154.735 12.366 L 154.735 16.221 C 154.735 18.331 155.789 19.403 157.9 19.403 Z" fill="rgb(0,0,0)"></path></g></svg>',
                            svgContentId: 33272303,
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          href: "https://brave.com/wallet/",
                          children: e(a.a, {
                            className: "framer-150hodz framer-lux5qc",
                            "data-framer-name": "Brave Logo",
                            name: "Brave Logo",
                            children: e(s, {
                              className: "framer-1tvcox4",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 59,
                              intrinsicWidth: 188,
                              name: "graphic",
                              svg: '<svg width="188" height="59" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="50.706%" x2="100%" y2="50.706%" id="a"><stop stop-color="#F50" offset="0%"/><stop stop-color="#F50" offset="40.988%"/><stop stop-color="#FF2000" offset="58.198%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><linearGradient x1="2.148%" y1="50.706%" x2="100%" y2="50.706%" id="b"><stop stop-color="#FF452A" offset="0%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><path d="M38.184 5.781 33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87c0 0 5.856-.538 7.868 2.797 0 0 5.43 1.056 6.161 1.056.732 0 2.318-.621 3.782-1.118 1.464-.497 2.44-.501 2.44-.501s.976.004 2.44.5c1.464.498 3.05 1.12 3.782 1.12.732 0 6.16-1.057 6.16-1.057C38.794 6.113 44.65 6.65 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87" id="c"/></defs><g fill="none" fill-rule="evenodd"><path d="M62.66 31.624V11.585h1.886c1.536 0 2.782 1.266 2.782 2.828v8.91c3.022-2.741 5.592-3.838 9.017-3.909 6.57-.136 12.272 4.824 12.814 11.481.647 7.954-5.043 13.94-12.455 13.94-8.138 0-14.044-5.13-14.044-13.211Zm4.59 1.573c.46 4.14 4.35 7.56 8.452 7.626 5.343.083 8.985-3.457 8.985-8.694 0-5.237-3.56-8.695-8.753-8.695-5.552-.012-9.315 4.087-8.684 9.763Zm29.696-13.282v3.57c2.937-3.313 4.676-4.203 8.113-4.203 1 0 1.999.083 2.986.244v4.74a11.888 11.888 0 0 0-3.234-.438c-2.489 0-4.578.828-6.11 2.393-1.344 1.37-1.743 2.443-1.743 4.596v13.199H92.12v-24.1h4.826Zm12.247 7.97c.249-2.347.697-3.618 1.69-4.84 1.992-2.484 5.577-3.763 10.651-3.763 4.033 0 6.97.637 9.01 2.004 1.694 1.122 2.39 2.786 2.39 5.717v10.703c0 2.347.6 3.175 2.24 3.13a9.809 9.809 0 0 0 1.096-.1v3.226a7.078 7.078 0 0 1-2.537.389c-3.034 0-4.427-.927-5.372-3.619-2.986 2.787-6.073 3.958-10.5 3.958-5.922 0-9.556-2.736-9.556-7.187-.025-2.538 1.443-4.846 3.731-5.863 1.792-.782 2.888-1.026 8.012-1.565 4.378-.438 5.128-.538 6.37-.931 1.344-.439 1.943-1.172 1.943-2.393 0-2.592-2.139-3.764-6.619-3.764-4.236 0-6.419.853-7.295 3.031a2.889 2.889 0 0 1-2.667 1.855l-2.587.012Zm19.143 4.107a46.702 46.702 0 0 1-9.408 1.76c-4.33.439-5.674 1.271-5.674 3.47 0 2.442 1.992 3.726 5.922 3.726 3.234 0 5.674-.828 7.417-2.443 1.393-1.32 1.743-2.248 1.743-4.554v-1.959Zm19.615 12.02h-1.246a2.847 2.847 0 0 1-2.582-1.632l-10.439-22.465h2.9a4.26 4.26 0 0 1 3.922 2.555l6.965 16.147 7.197-16.21a4.26 4.26 0 0 1 3.902-2.508h2.635L150.52 42.405a2.847 2.847 0 0 1-2.57 1.607Zm16.524-10.653c.497 4.645 4.073 7.527 9.405 7.527 3.026 0 5.295-.915 6.7-2.741a4.292 4.292 0 0 1 3.38-1.656h2.807c-2.444 5.473-6.819 8.164-13.34 8.164-8.145 0-13.636-5.034-13.636-12.561s5.625-12.806 13.739-12.806c5.869 0 10.59 2.687 12.491 7.187.847 2.07 1.194 3.909 1.194 6.89l-22.74-.004Zm17.815-3.727c-1.095-4.252-4.33-6.649-8.81-6.649s-7.714 2.397-8.858 6.65h17.668Z" fill="#3B3E4F"/><g transform="translate(.6)"><path d="m47.09 13.985 1.342-3.356S46.724 8.764 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87L33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87S.366 10.63.366 10.63l1.342 3.356L0 18.956s5.023 19.384 5.612 21.75c1.159 4.662 1.952 6.464 5.246 8.825 3.293 2.362 9.271 6.464 10.247 7.085.976.621 2.196 1.68 3.294 1.68 1.098 0 2.318-1.059 3.294-1.68s6.953-4.723 10.247-7.085c3.294-2.361 4.087-4.163 5.246-8.824.589-2.367 5.612-21.75 5.612-21.75l-1.708-4.972Z" fill="url(#a)"/><path d="M24.399 36.279c.334 0 2.477.77 4.196 1.677 1.72.906 2.965 1.547 3.363 1.8.399.255.156.734-.207.995s-5.238 4.107-5.71 4.532c-.474.426-1.17 1.128-1.642 1.128-.473 0-1.168-.702-1.641-1.128-.474-.425-5.348-4.27-5.711-4.532-.363-.261-.606-.74-.208-.994.399-.254 1.645-.895 3.364-1.801 1.719-.907 3.861-1.677 4.196-1.677Zm.026-27.393c.164.004 1.09.05 2.414.5 1.464.497 3.05 1.118 3.782 1.118.732 0 6.16-1.056 6.16-1.056s6.434 7.923 6.434 9.617c0 1.693-.81 2.14-1.623 3.02l-4.824 5.22c-.456.493-1.407 1.242-.848 2.59.56 1.347 1.384 3.061.467 4.8-.917 1.74-2.488 2.9-3.494 2.708-1.007-.192-3.37-1.45-4.24-2.025-.869-.575-3.624-2.89-3.624-3.775 0-.886 2.848-2.476 3.374-2.837.526-.362 2.926-1.76 2.975-2.309.05-.549.03-.71-.678-2.066-.708-1.356-1.983-3.166-1.77-4.37.211-1.205 2.268-1.83 3.736-2.396 1.468-.564 4.294-1.63 4.647-1.797.353-.166.262-.324-.808-.427-1.07-.103-4.104-.514-5.472-.125-1.368.389-3.706.98-3.895 1.293-.19.314-.356.324-.162 1.405.194 1.082 1.195 6.27 1.293 7.192.097.922.287 1.53-.688 1.758-.976.227-2.618.622-3.182.622-.564 0-2.206-.395-3.182-.622-.975-.227-.785-.836-.688-1.758.097-.922 1.098-6.11 1.293-7.192.194-1.08.027-1.091-.162-1.405-.19-.313-2.527-.904-3.895-1.293-1.368-.389-4.403.022-5.472.125-1.07.103-1.161.261-.808.427.353.166 3.18 1.233 4.647 1.797 1.467.565 3.524 1.191 3.737 2.395.212 1.205-1.064 3.015-1.772 4.37-.708 1.357-.727 1.518-.677 2.067.049.549 2.448 1.947 2.975 2.309.526.36 3.373 1.951 3.373 2.837 0 .885-2.754 3.2-3.624 3.775-.869.575-3.233 1.833-4.239 2.025-1.006.192-2.577-.969-3.494-2.708-.917-1.739-.092-3.453.466-4.8.56-1.348-.39-2.097-.847-2.59l-4.824-5.22c-.814-.88-1.623-1.327-1.623-3.02 0-1.694 6.433-9.617 6.433-9.617s5.43 1.056 6.161 1.056c.732 0 2.318-.621 3.782-1.118 1.325-.45 2.25-.496 2.414-.5Z" fill="#FFF"/><use fill="url(#b)" xlink:href="#c"/></g></g></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://www.bitski.com/",
                          children: e(a.a, {
                            className: "framer-mslmhc framer-lux5qc",
                            "data-framer-name": "Bitski Logo",
                            name: "Bitski Logo",
                            children: e(s, {
                              className: "framer-qrfjc6",
                              "data-framer-name": "graphic",
                              layout: "position",
                              name: "graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 27"><path d="M 0.796 0 L 8.505 0 C 13.608 0 16.322 3.27 16.322 8.062 C 16.322 8.67 16.178 9.583 16.069 10.153 C 16.033 10.381 15.997 10.534 15.997 10.686 C 15.997 10.99 16.105 11.18 16.503 11.408 C 18.928 12.853 20.014 15.211 20.014 18.557 C 20.014 23.235 17.263 26.619 11.617 26.619 L 0.796 26.619 C 0.217 26.619 0 26.353 0 25.745 L 0 0.875 C 0 0.266 0.217 0 0.796 0 Z M 6.659 10.457 L 8.505 10.457 C 9.446 10.457 10.17 9.849 10.17 8.67 C 10.17 7.529 9.446 6.883 8.505 6.883 L 6.659 6.883 C 6.08 6.883 5.863 7.149 5.863 7.757 L 5.863 9.583 C 5.863 10.191 6.08 10.458 6.659 10.458 Z M 6.659 19.736 L 11.509 19.736 C 12.92 19.736 13.716 19.204 13.716 17.949 C 13.716 16.732 12.92 16.162 11.509 16.162 L 6.659 16.162 C 6.08 16.162 5.863 16.428 5.863 17.036 L 5.863 18.862 C 5.863 19.47 6.08 19.736 6.659 19.736 Z M 22.258 25.745 L 22.258 8.48 C 22.258 7.872 22.475 7.606 23.054 7.606 L 27.506 7.606 C 28.085 7.606 28.302 7.872 28.302 8.48 L 28.302 25.745 C 28.302 26.353 28.085 26.62 27.506 26.62 L 23.054 26.62 C 22.475 26.62 22.258 26.353 22.258 25.745 Z M 22.258 4.677 L 22.258 0.875 C 22.258 0.266 22.475 0 23.054 0 L 27.506 0 C 28.085 0 28.302 0.266 28.302 0.875 L 28.302 4.677 C 28.302 5.286 28.085 5.552 27.506 5.552 L 23.054 5.552 C 22.475 5.552 22.258 5.286 22.258 4.677 Z M 33.188 13.88 L 31.125 13.88 C 30.546 13.88 30.292 13.652 30.292 13.043 L 30.292 8.442 C 30.292 7.834 30.509 7.606 31.125 7.606 L 33.188 7.606 C 33.767 7.606 33.984 7.339 33.984 6.731 L 33.984 0.875 C 33.984 0.266 34.201 0 34.78 0 L 39.232 0 C 39.811 0 40.028 0.266 40.028 0.875 L 40.028 6.731 C 40.028 7.339 40.245 7.606 40.824 7.606 L 44.95 7.606 C 45.529 7.606 45.782 7.834 45.782 8.442 L 45.782 13.043 C 45.782 13.652 45.529 13.88 44.95 13.88 L 40.824 13.88 C 40.245 13.88 40.028 14.146 40.028 14.755 L 40.028 25.745 C 40.028 26.353 39.811 26.619 39.232 26.619 L 34.78 26.619 C 34.201 26.619 33.984 26.353 33.984 25.745 L 33.984 14.755 C 33.984 14.146 33.767 13.88 33.188 13.88 Z M 54.939 27 C 52.116 27 49.221 26.087 47.158 24.756 C 46.796 24.528 46.723 24.11 46.94 23.654 L 48.569 20.421 C 48.859 19.851 49.293 19.889 49.8 20.193 C 51.32 21.144 53.346 21.828 54.903 21.828 C 55.88 21.828 56.604 21.524 56.604 20.84 C 56.604 20.193 55.952 19.965 54.975 19.965 L 54.179 19.965 C 49.908 19.965 46.977 17.721 46.977 13.842 C 46.977 9.507 50.668 7.226 54.722 7.226 C 57.4 7.226 59.39 7.72 61.526 8.937 C 61.924 9.165 62.068 9.583 61.815 10.04 L 59.969 13.424 C 59.716 13.918 59.173 13.957 58.703 13.652 C 57.255 12.702 55.952 12.435 54.758 12.435 C 53.672 12.435 53.129 12.816 53.129 13.348 C 53.129 13.995 53.672 14.261 55.228 14.261 L 56.133 14.261 C 60.223 14.261 62.865 16.352 62.865 20.003 C 62.865 24.528 59.571 27 54.939 27 Z M 76.336 16.314 L 82.199 25.517 C 82.561 26.087 82.344 26.619 81.692 26.619 L 76.445 26.619 C 75.829 26.619 75.359 26.543 74.852 25.745 L 72.029 21.448 C 71.704 20.953 71.378 20.953 70.98 21.372 L 70.69 21.676 C 70.22 22.17 70.183 22.436 70.183 23.121 L 70.183 25.783 C 70.183 26.353 69.966 26.619 69.387 26.619 L 64.9 26.619 C 64.357 26.619 64.14 26.353 64.14 25.783 L 64.14 0.837 C 64.14 0.266 64.357 0 64.9 0 L 69.387 0 C 69.966 0 70.183 0.266 70.183 0.837 L 70.183 11.903 C 70.183 12.511 70.726 12.663 71.124 12.169 L 74.201 8.518 C 74.707 7.91 75.214 7.605 75.866 7.605 L 81.511 7.605 C 82.199 7.605 82.38 8.252 81.91 8.746 L 76.445 14.869 C 76.01 15.363 75.902 15.667 76.336 16.314 Z M 83.936 25.745 L 83.936 8.48 C 83.936 7.872 84.153 7.606 84.732 7.606 L 89.184 7.606 C 89.763 7.606 89.98 7.872 89.98 8.48 L 89.98 25.745 C 89.98 26.353 89.763 26.62 89.184 26.62 L 84.732 26.62 C 84.153 26.62 83.936 26.353 83.936 25.745 Z M 83.936 4.677 L 83.936 0.875 C 83.936 0.266 84.153 0 84.732 0 L 89.184 0 C 89.763 0 89.98 0.266 89.98 0.875 L 89.98 4.677 C 89.98 5.286 89.763 5.552 89.184 5.552 L 84.732 5.552 C 84.153 5.552 83.936 5.286 83.936 4.677 Z" fill="rgb(255,53,103)"></path></svg>',
                              svgContentId: 387479123,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://www.frontier.xyz/",
                          children: e(a.a, {
                            className: "framer-bcel84 framer-lux5qc",
                            "data-framer-name": "Frontier Logo",
                            name: "Frontier Logo",
                            children: e(s, {
                              className: "framer-po6gjh",
                              "data-framer-name": "graphic",
                              layout: "position",
                              name: "graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 19"><g id="ss1508076913_1"><path d="M 0 0 L 110 0 L 110 18.75 L 0 18.75 Z" fill="transparent"></path><path d="M 12.609 0.165 L 12.511 0.435 L 12.188 1.299 L 11.974 1.856 C 10.346 6.033 9.079 8.015 7.732 8.015 C 7.044 8.033 6.38 7.751 5.902 7.238 L 5.73 7.077 C 5.303 6.668 5.122 6.567 4.71 6.567 C 4.496 6.567 4.112 6.851 3.627 7.516 C 2.977 8.47 2.424 9.491 1.977 10.564 L 1.923 10.69 L 7.7 10.69 L 6.981 12.24 L 1.586 12.24 L 1.586 18.587 L 0 18.587 L 0 0.164 L 12.609 0.164 Z M 10.362 1.712 L 1.586 1.712 L 1.586 7.85 C 2.638 5.96 3.637 5.012 4.713 5.012 C 5.443 4.987 6.151 5.282 6.662 5.823 L 6.84 5.99 C 7.238 6.372 7.392 6.459 7.734 6.459 C 8.109 6.46 9.108 4.817 10.362 1.712 Z M 19.251 0.165 L 20.515 0.165 C 23.065 0.165 26.498 1.382 26.498 6.285 C 26.498 9.195 25.045 11.048 23.222 11.874 L 23.065 11.943 L 26.499 18.587 L 24.602 18.587 L 21.399 12.369 C 21.268 12.392 21.136 12.402 21.003 12.401 L 17.245 12.401 L 17.245 18.587 L 15.579 18.587 L 15.579 0.197 L 16.672 0.18 C 17.56 0.17 18.382 0.166 19.251 0.165 Z M 20.418 1.744 L 17.245 1.744 L 17.245 10.855 L 20.613 10.855 C 22.77 10.855 24.863 9.375 24.863 6.217 C 24.863 3.03 23.015 1.798 20.576 1.745 Z M 102.16 0.165 L 104.019 0.165 C 106.57 0.165 110.003 1.382 110.003 6.285 C 110.003 9.195 108.55 11.048 106.727 11.875 L 106.57 11.943 L 110 18.586 L 108.104 18.586 L 104.899 12.368 C 104.769 12.391 104.637 12.401 104.504 12.401 L 100.748 12.401 L 100.748 18.586 L 99.08 18.586 L 99.08 0.197 L 100.02 0.182 C 100.772 0.173 101.46 0.17 102.16 0.166 Z M 103.919 1.742 L 100.746 1.742 L 100.746 10.855 L 104.114 10.855 C 106.272 10.855 108.364 9.374 108.364 6.216 C 108.364 3.028 106.517 1.796 104.077 1.744 Z M 37.386 0 C 41.055 0 44.726 2.87 44.837 8.799 L 44.837 9.671 C 44.837 15.791 41.11 18.75 37.383 18.75 C 33.681 18.75 30.043 15.88 29.932 9.951 L 29.932 9.079 C 29.932 2.961 33.626 0 37.386 0 Z M 37.386 1.546 C 34.588 1.546 31.666 3.677 31.569 8.815 L 31.569 9.671 C 31.569 14.967 34.544 17.171 37.356 17.171 C 40.184 17.171 43.108 15.041 43.205 9.938 L 43.205 9.079 C 43.205 3.75 40.23 1.546 37.386 1.546 Z M 72.108 18.587 L 72.108 1.744 L 76.096 1.744 L 76.815 0.164 L 65.764 0.164 L 65.764 1.744 L 70.472 1.744 L 70.472 18.587 L 72.107 18.587 Z M 81.72 18.585 L 81.72 0.067 L 80.085 0.067 L 80.085 18.585 Z M 95.091 18.587 L 95.811 17.04 L 87.016 17.04 L 87.016 10.625 L 92.869 10.625 L 93.588 9.079 L 87.016 9.079 L 87.016 1.712 L 95.091 1.712 L 95.81 0.164 L 85.416 0.164 L 85.416 18.587 Z M 62.578 18.611 L 62.578 0.23 L 60.878 0.23 L 60.878 14.361 C 60.878 14.361 60.177 13.589 59.669 12.972 L 48.836 0.154 L 48.517 0.154 L 48.517 18.599 L 50.171 18.61 L 50.171 4.344 C 50.171 4.344 50.918 5.282 51.425 5.899 L 62.259 18.611 L 62.579 18.611 Z" fill="rgb(0,0,0)"></path></g></svg>',
                              svgContentId: 1508076913,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(o, {
                          className: "framer-ymmltx-container",
                          children: e(K, {
                            height: "100%",
                            id: "S77MirgwH",
                            layoutId: "S77MirgwH",
                            width: "100%",
                          }),
                        }),
                        e(h, {
                          href: "https://ultimate.app/",
                          children: e(a.a, {
                            className: "framer-1epvy10 framer-lux5qc",
                            "data-framer-name": "Ultimate Logo",
                            name: "Ultimate Logo",
                            children: e(s, {
                              className: "framer-ah5tf9",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 18,
                              intrinsicWidth: 130,
                              name: "graphic",
                              svg: '<svg width="130" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.615V.012h5.544v10.603c0 1.208 1.164 1.965 2.767 1.965 1.604 0 2.767-.757 2.767-1.965V.012h5.544v10.603c0 4.562-3.625 7.385-8.311 7.385C3.625 17.989 0 15.177 0 10.615ZM18.26 0h5.544v12.342h8.063v5.296H18.259V0Z" fill="#000"/><path d="M33.504 5.296h-5.16V0H44.22v5.296h-5.16v12.342h-5.545l-.011-12.342Zm12.354 7.058h3.274V5.296h-3.274V0h12.094v5.296h-3.275v7.058h3.275v5.296H45.858v-5.296ZM59.589 0h6.3l3.05 7.204h1.004L72.993 0h6.3v17.638H73.75v-7.08h-1.005l-1.762 4.28h-3.071l-1.762-4.28h-1.005v7.08H59.6L59.589 0ZM99.8 17.266v.372h-5.69l-1.028-3.749h-5.545l-1.028 3.75h-5.69v-.373L85.921 0h8.797L99.8 17.266Zm-7.882-7.668-1.106-4.054h-1.005L88.7 9.598h3.218Zm11.36-4.302h-5.16V0h15.876v5.296h-5.16v12.342h-5.545l-.011-12.342ZM115.62 0h13.856v5.217h-8.311v1.762h7.159v3.68h-7.159v1.762h8.311v5.217H115.62V0Z" fill="#000"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                t("div", {
                  className: "framer-1p18m6d",
                  "data-framer-name": "Hero",
                  name: "Hero",
                  children: [
                    t("div", {
                      className: "framer-12w76a3",
                      "data-framer-name": "Hero-Image",
                      name: "Hero-Image",
                      children: [
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              "data-framer-appear-id": "67iyqc",
                              animate: f("animate", "67iyqc", I1, "1dkgatv"),
                              initial: f("initial", "67iyqc", W1, "1dkgatv"),
                              transformTemplate: v("67iyqc", y),
                            },
                            MITuyLXdw: {
                              "data-framer-appear-id": "16vk5ip",
                              animate: f("animate", "16vk5ip", I1, "1d7sfhj"),
                              initial: f("initial", "16vk5ip", W1, "1d7sfhj"),
                              transformTemplate: v("16vk5ip", y),
                            },
                            TCRVy9I_Z: {
                              "data-framer-appear-id": "w4twzm",
                              animate: f("animate", "w4twzm", I1, "9i6d03"),
                              initial: f("initial", "w4twzm", W1, "9i6d03"),
                              transformTemplate: v("w4twzm", y),
                            },
                          },
                          children: e(o, {
                            animate: f("animate", "vyw2iw", I1, "72rtr7"),
                            className: "framer-vyw2iw-container",
                            "data-framer-appear-id": "vyw2iw",
                            exit: aa,
                            initial: f("initial", "vyw2iw", W1, "72rtr7"),
                            transformTemplate: v("vyw2iw", y),
                            children: e(S1, {
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              borderRadius: 0,
                              bottomLeftRadius: 0,
                              bottomRightRadius: 0,
                              canvasPlay: !0,
                              controls: !1,
                              height: "100%",
                              id: "mklPH3Sgn",
                              isMixedBorderRadius: !1,
                              layoutId: "mklPH3Sgn",
                              loop: !0,
                              muted: !0,
                              objectFit: "cover",
                              playing: !0,
                              poster:
                                "./Blowfish - Proactive defense for web3 wallets_files/dNjZjzGV0l5v5MmxKjiaDdedK6I.png",
                              posterEnabled: !0,
                              srcFile:
                                "./Blowfish - Proactive defense for web3 wallets_files/ABKGG2mazmK87jGsN6CbRkaoYP0.mp4",
                              srcType: "Upload",
                              srcUrl:
                                "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                              startTime: 0,
                              style: { height: "100%", width: "100%" },
                              topLeftRadius: 0,
                              topRightRadius: 0,
                              volume: 25,
                              width: "100%",
                            }),
                          }),
                        }),
                        e("div", {
                          className: "framer-1jfybez",
                          children: e(c, {
                            breakpoint: n,
                            overrides: {
                              kwVNjqrRS: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 570,
                                  intrinsicWidth: 570,
                                  pixelHeight: 1140,
                                  pixelWidth: 1140,
                                  sizes: "440px",
                                  src: "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024",
                                  srcSet:
                                    "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png 1140w",
                                },
                              },
                              MITuyLXdw: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 570,
                                  intrinsicWidth: 570,
                                  pixelHeight: 1140,
                                  pixelWidth: 1140,
                                  sizes: "320px",
                                  src: "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024",
                                  srcSet:
                                    "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png 1140w",
                                },
                              },
                              TCRVy9I_Z: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 570,
                                  intrinsicWidth: 570,
                                  pixelHeight: 1140,
                                  pixelWidth: 1140,
                                  sizes: "440px",
                                  src: "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024",
                                  srcSet:
                                    "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png 1140w",
                                },
                              },
                            },
                            children: e(d, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 570,
                                intrinsicWidth: 570,
                                pixelHeight: 1140,
                                pixelWidth: 1140,
                                sizes: "570px",
                                src: "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024",
                                srcSet:
                                  "./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/ojafsRoNyyju9miarWGwUEqI.png 1140w",
                              },
                              className: "framer-yddtiz",
                              "data-framer-name": "mask",
                              name: "mask",
                            }),
                          }),
                        }),
                      ],
                    }),
                    t("div", {
                      className: "framer-ihjkg",
                      "data-framer-name": "Hero-Content",
                      name: "Hero-Content",
                      children: [
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              "data-framer-appear-id": "1jb8ume",
                              animate: f("animate", "1jb8ume", O, "1dkgatv"),
                              children: t(r, {
                                children: [
                                  e("h1", {
                                    className: "framer-styles-preset-3nqyhf",
                                    "data-styles-preset": "YAP816Y5n",
                                    style: {
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "Proactive defense",
                                  }),
                                  e("h1", {
                                    className: "framer-styles-preset-3nqyhf",
                                    "data-styles-preset": "YAP816Y5n",
                                    style: {
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "for web3 wallets",
                                  }),
                                ],
                              }),
                              initial: f("initial", "1jb8ume", I, "1dkgatv"),
                              transformTemplate: v("1jb8ume", y),
                            },
                            MITuyLXdw: {
                              "data-framer-appear-id": "1l62lko",
                              animate: f("animate", "1l62lko", O, "1d7sfhj"),
                              children: e(r, {
                                children: e("h3", {
                                  className: "framer-styles-preset-n1pvnt",
                                  "data-styles-preset": "TeBLYHcWA",
                                  children:
                                    "Proactive defense for web3 wallets",
                                }),
                              }),
                              initial: f("initial", "1l62lko", I, "1d7sfhj"),
                              transformTemplate: v("1l62lko", y),
                            },
                            TCRVy9I_Z: {
                              "data-framer-appear-id": "1br0djl",
                              animate: f("animate", "1br0djl", O, "9i6d03"),
                              children: t(r, {
                                children: [
                                  e("h1", {
                                    className: "framer-styles-preset-3nqyhf",
                                    "data-styles-preset": "YAP816Y5n",
                                    style: {
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "Proactive defense",
                                  }),
                                  e("h1", {
                                    className: "framer-styles-preset-3nqyhf",
                                    "data-styles-preset": "YAP816Y5n",
                                    style: {
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "for web3 wallets",
                                  }),
                                ],
                              }),
                              initial: f("initial", "1br0djl", I, "9i6d03"),
                              transformTemplate: v("1br0djl", y),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            animate: f("animate", "dwdjhz", O, "72rtr7"),
                            children: t(r, {
                              children: [
                                e("h1", {
                                  className: "framer-styles-preset-3nqyhf",
                                  "data-styles-preset": "YAP816Y5n",
                                  children: "Proactive defense",
                                }),
                                e("h1", {
                                  className: "framer-styles-preset-3nqyhf",
                                  "data-styles-preset": "YAP816Y5n",
                                  children: "for web3 wallets",
                                }),
                              ],
                            }),
                            className: "framer-dwdjhz",
                            "data-framer-appear-id": "dwdjhz",
                            "data-framer-name":
                              "Proactive defense for web3 wallets",
                            exit: We,
                            initial: f("initial", "dwdjhz", I, "72rtr7"),
                            name: "Proactive defense for web3 wallets",
                            transformTemplate: v("dwdjhz", y),
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              "data-framer-appear-id": "1rjqtbj",
                              animate: f("animate", "1rjqtbj", b1, "1dkgatv"),
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1yvc2t",
                                  "data-styles-preset": "MUgjgp0nh",
                                  style: {
                                    "--framer-text-alignment": "center",
                                  },
                                  children:
                                    "Blowfish makes it easy to identify & stop fraud before it happens. 10+ chains supported. Join the leading wallets protecting their users funds with the blowfish security engine.",
                                }),
                              }),
                              initial: f("initial", "1rjqtbj", I, "1dkgatv"),
                              transformTemplate: v("1rjqtbj", y),
                            },
                            MITuyLXdw: {
                              "data-framer-appear-id": "184jbqk",
                              animate: f("animate", "184jbqk", b1, "1d7sfhj"),
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1yvc2t",
                                  "data-styles-preset": "MUgjgp0nh",
                                  style: {
                                    "--framer-text-alignment": "center",
                                  },
                                  children:
                                    "Blowfish makes it easy to identify & stop fraud before it happens. 10+ chains supported. Join the leading wallets protecting their users funds with the blowfish security engine.",
                                }),
                              }),
                              initial: f("initial", "184jbqk", I, "1d7sfhj"),
                              transformTemplate: v("184jbqk", y),
                            },
                            TCRVy9I_Z: {
                              "data-framer-appear-id": "110adgs",
                              animate: f("animate", "110adgs", b1, "9i6d03"),
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1yvc2t",
                                  "data-styles-preset": "MUgjgp0nh",
                                  style: {
                                    "--framer-text-alignment": "center",
                                  },
                                  children:
                                    "Blowfish makes it easy to identify & stop fraud before it happens. 10+ chains supported. Join the leading wallets protecting their users funds with the blowfish security engine.",
                                }),
                              }),
                              initial: f("initial", "110adgs", I, "9i6d03"),
                              transformTemplate: v("110adgs", y),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            animate: f("animate", "j028t0", b1, "72rtr7"),
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1yvc2t",
                                "data-styles-preset": "MUgjgp0nh",
                                children:
                                  "Blowfish makes it easy to identify & stop fraud before it happens. 10+ chains supported. Join the leading wallets protecting their users funds with the blowfish security engine.",
                              }),
                            }),
                            className: "framer-j028t0",
                            "data-framer-appear-id": "j028t0",
                            "data-framer-name":
                              "Blowfish makes it easy to identify & stop fraud before it happens. Join the leading wallets protecting their users funds with the blowfish security engine",
                            exit: ta,
                            initial: f("initial", "j028t0", I, "72rtr7"),
                            name: "Blowfish makes it easy to identify & stop fraud before it happens. Join the leading wallets protecting their users funds with the blowfish security engine",
                            transformTemplate: v("j028t0", y),
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              "data-framer-appear-id": "j4uh3e",
                              animate: f("animate", "j4uh3e", k1, "1dkgatv"),
                              initial: f("initial", "j4uh3e", I, "1dkgatv"),
                              transformTemplate: v("j4uh3e", y),
                            },
                            MITuyLXdw: {
                              "data-framer-appear-id": "s43tiw",
                              animate: f("animate", "s43tiw", k1, "1d7sfhj"),
                              initial: f("initial", "s43tiw", I, "1d7sfhj"),
                              transformTemplate: v("s43tiw", y),
                            },
                            TCRVy9I_Z: {
                              "data-framer-appear-id": "qu5scs",
                              animate: f("animate", "qu5scs", k1, "9i6d03"),
                              initial: f("initial", "qu5scs", I, "9i6d03"),
                              transformTemplate: v("qu5scs", y),
                            },
                          },
                          children: t(a.div, {
                            animate: f("animate", "wrhe2s", k1, "72rtr7"),
                            className: "framer-wrhe2s",
                            "data-framer-appear-id": "wrhe2s",
                            "data-framer-name": "Hero-Buttons",
                            exit: ia,
                            initial: f("initial", "wrhe2s", I, "72rtr7"),
                            name: "Hero-Buttons",
                            transformTemplate: v("wrhe2s", y),
                            children: [
                              e(o, {
                                className: "framer-177nco1-container",
                                children: e(c, {
                                  breakpoint: n,
                                  overrides: {
                                    MITuyLXdw: { variant: "T2tCGn2IG" },
                                  },
                                  children: e(z1, {
                                    height: "100%",
                                    id: "qFCdAVKXP",
                                    JnKZBiGPH: "Start for Free",
                                    layoutId: "qFCdAVKXP",
                                    style: { width: "100%" },
                                    variant: "rbRsu7JsL",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(o, {
                                className: "framer-1ah1mbh-container",
                                children: e(c, {
                                  breakpoint: n,
                                  overrides: {
                                    MITuyLXdw: { variant: "ilTEmfHow" },
                                  },
                                  children: e(E1, {
                                    height: "100%",
                                    id: "MnIyhlS6M",
                                    layoutId: "MnIyhlS6M",
                                    rtyPgW_sI: "Read the Docs",
                                    style: { width: "100%" },
                                    variant: "mDofWtp0m",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Z() &&
                      e(o, {
                        className:
                          "framer-1lx3dru-container hidden-72rtr7 hidden-9i6d03 hidden-1d7sfhj",
                        "data-framer-name": "Brands",
                        name: "Brands",
                        children: e(D, {
                          alignment: "center",
                          direction: "left",
                          fadeOptions: {
                            fadeAlpha: 0.2,
                            fadeContent: !0,
                            fadeInset: 13,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 40,
                          height: "100%",
                          hoverFactor: 1,
                          id: "OqFEgeqrw",
                          layoutId: "OqFEgeqrw",
                          name: "Brands",
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: !1,
                          paddingRight: 10,
                          paddingTop: 10,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            e(h, {
                              href: "https://www.exodus.com/",
                              children: e(a.a, {
                                className: "framer-anbrd9 framer-lux5qc",
                                "data-framer-name": "Exodus Logo",
                                name: "Exodus Logo",
                                children: e(s, {
                                  className: "framer-iokwtq",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 32,
                                  intrinsicWidth: 156,
                                  name: "graphic",
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="156" height="32" fill="none"><path fill="url(#a)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#b)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/><mask id="e" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="url(#c)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#d)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/></mask><g mask="url(#e)"><path fill="url(#f)" d="M.4 0h31.2v32H.4z"/></g><path fill="#000" d="M58.92 8.8v2.797H46.029v2.863h10.955v2.798H46.028v3.144h12.893V23.2h-16.2V8.8h16.2Zm1.83 14.4 7.407-7.287L60.96 8.8h4.553l5.078 5.14L75.46 8.8h4.26l-7.177 7.113L79.95 23.2h-4.595l-4.764-5.292-5.434 5.292H60.75Z"/><path fill="#000" d="M88.832 8.8c6.001 0 9.61 3.005 9.61 7.2s-3.609 7.2-9.61 7.2c-6.001 0-9.59-3.005-9.59-7.2s3.589-7.2 9.59-7.2Zm0 2.692c-3.61 0-6.27 1.816-6.27 4.508s2.66 4.508 6.27 4.508c3.63 0 6.29-1.816 6.29-4.508s-2.66-4.508-6.29-4.508ZM110.404 8.8c4.807 0 7.703 2.667 7.703 7.178 0 4.554-2.875 7.222-7.661 7.222h-9.739V8.8h9.697Zm4.303 7.178c0-2.82-1.679-4.38-4.723-4.38h-5.982v8.804h5.982c3.044 0 4.723-1.583 4.723-4.424Zm14.298 7.222c-5.061 0-8.9-2.297-8.9-6.53V8.8h3.312v7.55c0 2.617 2.72 3.83 5.588 3.83 2.89 0 5.61-1.192 5.61-3.83V8.8h3.29v7.87c0 4.233-3.817 6.53-8.9 6.53Zm18.169 0c-2.719 0-5.651-.501-7.733-1.44l1.084-2.672c1.869.856 4.44 1.399 6.755 1.399 2.656 0 5.141-.564 5.141-1.565 0-.73-.786-1.044-2.422-1.294l-4.631-.501c-3.569-.48-5.311-1.711-5.311-3.882 0-2.796 2.953-4.445 7.287-4.445 2.613 0 6.203.48 8.051 1.315l-1.083 2.546c-1.827-.752-4.929-1.127-7.117-1.127-2.252 0-3.739.521-3.739 1.481 0 .668.744 1.002 2.656 1.274l4.503.5c3.442.48 5.226 1.65 5.226 3.924 0 2.88-3.781 4.487-8.667 4.487Z"/><defs><linearGradient id="a" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="b" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="c" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="d" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="f" x1="2.4" x2="18.2" y1="7.2" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".12" stop-color="#8952FF" stop-opacity=".87"/><stop offset="1" stop-color="#DABDFF" stop-opacity="0"/></linearGradient></defs></svg>',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(o, {
                              className: "framer-17u7b1w-container",
                              children: e(J, {
                                height: "100%",
                                id: "OK6Ggr2Mg",
                                layoutId: "OK6Ggr2Mg",
                                width: "100%",
                              }),
                            }),
                            e(h, {
                              href: "https://phantom.app/",
                              children: e(a.a, {
                                className: "framer-1m206e1 framer-lux5qc",
                                "data-framer-name": "Phantom Logo",
                                name: "Phantom Logo",
                                children: e(s, {
                                  className: "framer-37b9ki",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 224,
                                  intrinsicWidth: 1139,
                                  name: "graphic",
                                  svg: '<svg width="1139" height="224" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.83 224c34.325 0 60.121-29.853 75.515-53.443-1.872 5.219-2.912 10.438-2.912 15.449 0 13.778 7.905 23.59 23.508 23.59 21.427 0 44.311-18.789 56.169-39.039-.832 2.923-1.248 5.637-1.248 8.142 0 9.603 5.409 15.657 16.434 15.657 34.742 0 69.692-61.584 69.692-115.444C268.988 36.95 247.768 0 194.512 0 100.896 0 0 114.401 0 188.302 0 217.32 15.602 224 31.83 224ZM162.265 74.319c0-10.438 5.825-17.745 14.355-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.53 0-14.355-7.515-14.355-17.953Zm44.52 0c0-10.438 5.825-17.745 14.354-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.529 0-14.354-7.515-14.354-17.953Zm103.803 126.926h31.205v-30.688c0-14.404-1.248-19.832-8.529-34.445l3.952-2.088c10.61 24.843 25.589 33.819 40.983 33.819 24.756 0 44.519-21.711 44.519-55.321 0-32.15-18.099-55.74-44.103-55.74-15.394 0-30.789 8.769-41.399 33.82l-3.952-2.088c4.993-10.02 8.529-19.414 8.529-28.391h-31.205v141.122Zm31.205-88.932c0-13.778 10.402-29.018 25.796-29.018 12.482 0 22.676 10.23 22.676 28.809 0 18.371-9.778 29.227-22.884 29.227-14.562 0-25.588-14.822-25.588-29.018Zm92.315 52.19h31.205v-36.742c0-25.886 9.154-44.257 26.212-44.257 10.818 0 14.147 7.307 14.147 25.469v55.53h31.205v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.942 34.654l-3.953-2.087c5.409-11.691 6.865-18.789 6.865-29.227V24.008h-31.205v140.495Zm148.374 3.34c20.179 0 32.037-13.36 40.982-30.479l3.745 1.879c-3.953 8.142-7.697 17.536-7.697 25.26h30.581V107.72c0-33.819-14.147-50.937-47.224-50.937-32.453 0-48.472 16.283-51.592 33.401l29.957 5.22c1.04-8.977 8.321-15.031 19.971-15.031s18.307 5.845 18.307 12.943-6.865 10.438-25.172 10.647c-27.045.417-47.016 10.229-47.016 31.105 0 17.118 13.522 32.775 35.158 32.775Zm-4.161-34.863c0-16.492 26.212-5.01 40.567-17.744v3.757c0 14.822-13.106 25.678-26.213 25.678-6.865 0-14.354-2.923-14.354-11.691Zm84.137 31.523h31.205v-36.742c0-25.886 9.153-44.257 26.212-44.257 10.818 0 14.146 7.307 14.146 25.469v55.53h31.206v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.943 34.654l-3.952-2.087c5.409-11.691 6.865-18.789 6.865-29.227h-31.205v104.38Zm185.883.418v-25.887c-6.657 2.297-25.172 6.263-25.172-8.976V85.174h24.964V60.123h-24.964V32.149l-31.413 9.394v18.58h-18.723v25.051h18.723l.208 47.389c0 34.863 30.997 39.873 56.377 32.358Zm63.387 2.922c31.621 0 55.753-24.216 55.753-55.739 0-31.314-24.132-55.321-55.753-55.321s-55.961 24.007-55.961 55.321c0 31.523 24.34 55.739 55.961 55.739Zm-23.716-55.53c0-17.327 9.778-29.435 23.716-29.435s23.508 12.108 23.508 29.435c0 17.327-9.57 29.435-23.508 29.435-13.938 0-23.716-12.108-23.716-29.435Zm89.138 52.19h31.2v-36.742c0-26.93 8.53-44.257 22.26-44.257 8.95 0 11.86 7.098 11.86 25.469v55.53h31.21v-36.742c0-25.26 9.15-44.257 22.26-44.257 8.73 0 11.85 8.142 11.85 25.469v55.53H1139v-60.54c0-33.193-10.82-47.18-32.04-47.18-22.05 0-29.95 15.657-37.65 34.863l-3.75-1.879c7.29-21.92-8.53-32.984-24.13-32.984-20.59 0-28.08 15.657-36.4 34.654l-3.75-2.087c5.2-11.691 7.07-18.789 7.07-29.227h-31.2v104.38Z" fill="#AB9FF2"/></svg>',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(a.div, {
                              className: "framer-ei98th",
                              "data-framer-name": "WalletConnect logo",
                              name: "WalletConnect logo",
                              children: e(s, {
                                className: "framer-ouukhz",
                                "data-framer-name": "graphic",
                                layout: "position",
                                name: "graphic",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 163 25.695"><g id="ss33272303_1"><path d="M 0 0 L 162.68 0 L 162.68 25.695 L 0 25.695 Z" fill="transparent"></path><path d="M 9.803 7.274 C 14.652 2.529 22.513 2.529 27.362 7.274 L 27.945 7.845 C 28.062 7.958 28.127 8.113 28.127 8.274 C 28.127 8.436 28.062 8.591 27.945 8.704 L 25.949 10.658 C 25.827 10.776 25.632 10.776 25.51 10.658 L 24.707 9.872 C 21.325 6.562 15.841 6.562 12.458 9.872 L 11.598 10.713 C 11.476 10.832 11.281 10.832 11.159 10.713 L 9.163 8.759 C 9.046 8.647 8.981 8.492 8.981 8.33 C 8.981 8.168 9.046 8.013 9.163 7.9 Z M 31.49 11.314 L 33.266 13.053 C 33.383 13.166 33.448 13.321 33.448 13.482 C 33.448 13.644 33.383 13.799 33.266 13.912 L 25.256 21.752 C 25.012 21.99 24.622 21.99 24.378 21.752 L 18.693 16.188 C 18.632 16.128 18.534 16.128 18.473 16.188 L 12.788 21.752 C 12.543 21.99 12.154 21.99 11.909 21.752 L 3.898 13.912 C 3.782 13.799 3.716 13.644 3.716 13.482 C 3.716 13.321 3.782 13.166 3.898 13.053 L 5.675 11.314 C 5.92 11.077 6.308 11.077 6.553 11.314 L 12.238 16.878 C 12.299 16.938 12.397 16.938 12.458 16.878 L 18.143 11.314 C 18.387 11.076 18.777 11.076 19.021 11.314 L 24.707 16.878 C 24.768 16.938 24.866 16.938 24.927 16.878 L 30.612 11.314 C 30.856 11.076 31.246 11.076 31.49 11.314 Z M 44.133 19.223 L 46.279 10.639 C 46.406 10.165 46.515 9.656 46.661 8.857 C 46.77 9.656 46.897 10.165 46.988 10.639 L 48.843 19.223 L 52.681 19.223 L 55.918 6.492 L 52.971 6.492 L 51.189 14.313 C 51.012 15.057 50.873 15.809 50.772 16.567 C 50.626 15.713 50.48 15.076 50.316 14.33 L 48.588 6.492 L 44.733 6.492 L 42.859 14.33 C 42.692 15.071 42.546 15.817 42.423 16.567 C 42.3 15.817 42.155 15.071 41.987 14.33 L 40.241 6.492 L 37.167 6.492 L 40.386 19.223 Z M 58.115 19.55 C 59.57 19.55 60.497 18.95 60.97 18.077 C 60.915 18.35 60.898 18.623 60.898 18.896 L 60.898 19.223 L 63.335 19.223 L 63.335 13.967 C 63.335 11.457 62.189 10.002 59.388 10.002 C 56.969 10.002 55.387 11.348 55.242 13.203 L 57.916 13.203 C 58.006 12.384 58.588 11.894 59.479 11.894 C 60.316 11.894 60.77 12.366 60.77 12.912 C 60.77 13.312 60.534 13.548 59.824 13.639 L 58.552 13.785 C 56.66 14.021 55.042 14.713 55.042 16.713 C 55.042 18.531 56.551 19.55 58.115 19.55 Z M 58.934 17.677 C 58.224 17.677 57.697 17.277 57.697 16.585 C 57.697 15.913 58.297 15.585 59.207 15.422 L 59.825 15.312 C 60.352 15.203 60.643 15.112 60.825 14.949 L 60.825 15.785 C 60.825 16.913 60.006 17.677 58.933 17.677 Z M 64.602 6.492 L 64.602 19.223 L 67.239 19.223 L 67.239 6.492 Z M 68.764 6.492 L 68.764 19.223 L 71.401 19.223 L 71.401 6.492 Z M 77.158 19.55 C 79.668 19.55 81.286 18.132 81.468 16.277 L 78.813 16.277 C 78.685 17.095 77.993 17.549 77.158 17.549 C 76.03 17.549 75.211 16.64 75.194 15.385 L 81.522 15.385 L 81.522 14.876 C 81.522 11.93 79.904 10.002 77.103 10.002 C 74.412 10.002 72.52 11.893 72.52 14.749 C 72.52 17.84 74.466 19.55 77.158 19.55 Z M 75.174 13.657 C 75.284 12.639 76.03 11.893 77.085 11.893 C 78.104 11.893 78.812 12.602 78.831 13.657 L 75.175 13.657 Z M 87.104 19.404 C 87.686 19.404 88.25 19.313 88.504 19.241 L 88.504 17.239 C 88.294 17.276 88.081 17.294 87.867 17.294 C 86.904 17.294 86.559 16.748 86.559 15.857 L 86.559 12.366 L 88.704 12.366 L 88.704 10.31 L 86.559 10.31 L 86.559 7.146 L 83.939 7.146 L 83.939 10.31 L 82.011 10.31 L 82.011 12.366 L 83.939 12.366 L 83.939 16.221 C 83.939 18.331 84.994 19.403 87.104 19.403 Z M 96.005 19.55 C 99.607 19.55 101.789 17.44 102.062 14.403 L 99.207 14.403 C 98.988 16.058 97.824 17.186 96.115 17.186 C 94.096 17.186 92.677 15.549 92.677 12.785 C 92.677 10.075 94.151 8.529 96.169 8.529 C 97.897 8.529 98.879 9.584 99.079 11.13 L 102.007 11.13 C 101.716 7.965 99.388 6.164 96.188 6.164 C 92.532 6.164 89.731 8.637 89.731 12.785 C 89.731 17.076 92.187 19.55 96.005 19.55 Z M 107.779 19.55 C 110.525 19.55 112.472 17.822 112.472 14.803 C 112.472 11.839 110.525 10.002 107.779 10.002 C 105.051 10.002 103.105 11.839 103.105 14.803 C 103.105 17.822 105.033 19.55 107.779 19.55 Z M 107.779 17.513 C 106.56 17.513 105.778 16.513 105.778 14.803 C 105.778 13.058 106.597 12.076 107.779 12.076 C 108.98 12.076 109.798 13.058 109.798 14.803 C 109.798 16.514 108.997 17.513 107.779 17.513 Z M 116.148 19.223 L 116.148 14.004 C 116.148 12.894 116.839 12.076 117.821 12.076 C 118.748 12.076 119.294 12.785 119.294 13.967 L 119.294 19.223 L 121.931 19.223 L 121.931 13.585 C 121.931 11.439 120.804 10.002 118.784 10.002 C 117.384 10.002 116.53 10.674 116.075 11.475 C 116.122 11.205 116.146 10.931 116.148 10.656 L 116.148 10.311 L 113.511 10.311 L 113.511 19.223 Z M 126.146 19.223 L 126.146 14.004 C 126.146 12.894 126.836 12.076 127.818 12.076 C 128.747 12.076 129.292 12.785 129.292 13.967 L 129.292 19.223 L 131.929 19.223 L 131.929 13.585 C 131.929 11.439 130.801 10.002 128.783 10.002 C 127.382 10.002 126.527 10.674 126.073 11.475 C 126.127 11.147 126.146 10.893 126.146 10.656 L 126.146 10.311 L 123.508 10.311 L 123.508 19.223 Z M 137.603 19.55 C 140.113 19.55 141.731 18.132 141.914 16.277 L 139.258 16.277 C 139.131 17.095 138.44 17.549 137.603 17.549 C 136.475 17.549 135.657 16.64 135.639 15.385 L 141.968 15.385 L 141.968 14.876 C 141.968 11.93 140.349 10.002 137.549 10.002 C 134.857 10.002 132.965 11.893 132.965 14.749 C 132.965 17.84 134.912 19.55 137.603 19.55 Z M 135.621 13.657 C 135.73 12.639 136.475 11.893 137.53 11.893 C 138.548 11.893 139.258 12.602 139.276 13.657 Z M 147.631 19.55 C 150.395 19.55 151.905 18.041 152.195 15.695 L 149.559 15.695 C 149.467 16.677 148.903 17.513 147.721 17.513 C 146.521 17.513 145.703 16.404 145.703 14.767 C 145.703 12.985 146.649 12.076 147.776 12.076 C 148.886 12.076 149.431 12.875 149.504 13.803 L 152.141 13.803 C 151.941 11.639 150.467 10.002 147.757 10.002 C 145.121 10.002 143.029 11.748 143.029 14.767 C 143.029 17.749 144.793 19.55 147.631 19.55 Z M 157.9 19.404 C 158.482 19.404 159.045 19.313 159.3 19.241 L 159.3 17.239 C 159.09 17.276 158.877 17.294 158.663 17.294 C 157.7 17.294 157.354 16.748 157.354 15.857 L 157.354 12.366 L 159.5 12.366 L 159.5 10.31 L 157.354 10.31 L 157.354 7.146 L 154.735 7.146 L 154.735 10.31 L 152.807 10.31 L 152.807 12.366 L 154.735 12.366 L 154.735 16.221 C 154.735 18.331 155.789 19.403 157.9 19.403 Z" fill="rgb(0,0,0)"></path></g></svg>',
                                svgContentId: 33272303,
                                withExternalLayout: !0,
                              }),
                            }),
                            e(h, {
                              href: "https://brave.com/wallet/",
                              children: e(a.a, {
                                className: "framer-150hodz framer-lux5qc",
                                "data-framer-name": "Brave Logo",
                                name: "Brave Logo",
                                children: e(s, {
                                  className: "framer-1tvcox4",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 59,
                                  intrinsicWidth: 188,
                                  name: "graphic",
                                  svg: '<svg width="188" height="59" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="50.706%" x2="100%" y2="50.706%" id="a"><stop stop-color="#F50" offset="0%"/><stop stop-color="#F50" offset="40.988%"/><stop stop-color="#FF2000" offset="58.198%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><linearGradient x1="2.148%" y1="50.706%" x2="100%" y2="50.706%" id="b"><stop stop-color="#FF452A" offset="0%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><path d="M38.184 5.781 33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87c0 0 5.856-.538 7.868 2.797 0 0 5.43 1.056 6.161 1.056.732 0 2.318-.621 3.782-1.118 1.464-.497 2.44-.501 2.44-.501s.976.004 2.44.5c1.464.498 3.05 1.12 3.782 1.12.732 0 6.16-1.057 6.16-1.057C38.794 6.113 44.65 6.65 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87" id="c"/></defs><g fill="none" fill-rule="evenodd"><path d="M62.66 31.624V11.585h1.886c1.536 0 2.782 1.266 2.782 2.828v8.91c3.022-2.741 5.592-3.838 9.017-3.909 6.57-.136 12.272 4.824 12.814 11.481.647 7.954-5.043 13.94-12.455 13.94-8.138 0-14.044-5.13-14.044-13.211Zm4.59 1.573c.46 4.14 4.35 7.56 8.452 7.626 5.343.083 8.985-3.457 8.985-8.694 0-5.237-3.56-8.695-8.753-8.695-5.552-.012-9.315 4.087-8.684 9.763Zm29.696-13.282v3.57c2.937-3.313 4.676-4.203 8.113-4.203 1 0 1.999.083 2.986.244v4.74a11.888 11.888 0 0 0-3.234-.438c-2.489 0-4.578.828-6.11 2.393-1.344 1.37-1.743 2.443-1.743 4.596v13.199H92.12v-24.1h4.826Zm12.247 7.97c.249-2.347.697-3.618 1.69-4.84 1.992-2.484 5.577-3.763 10.651-3.763 4.033 0 6.97.637 9.01 2.004 1.694 1.122 2.39 2.786 2.39 5.717v10.703c0 2.347.6 3.175 2.24 3.13a9.809 9.809 0 0 0 1.096-.1v3.226a7.078 7.078 0 0 1-2.537.389c-3.034 0-4.427-.927-5.372-3.619-2.986 2.787-6.073 3.958-10.5 3.958-5.922 0-9.556-2.736-9.556-7.187-.025-2.538 1.443-4.846 3.731-5.863 1.792-.782 2.888-1.026 8.012-1.565 4.378-.438 5.128-.538 6.37-.931 1.344-.439 1.943-1.172 1.943-2.393 0-2.592-2.139-3.764-6.619-3.764-4.236 0-6.419.853-7.295 3.031a2.889 2.889 0 0 1-2.667 1.855l-2.587.012Zm19.143 4.107a46.702 46.702 0 0 1-9.408 1.76c-4.33.439-5.674 1.271-5.674 3.47 0 2.442 1.992 3.726 5.922 3.726 3.234 0 5.674-.828 7.417-2.443 1.393-1.32 1.743-2.248 1.743-4.554v-1.959Zm19.615 12.02h-1.246a2.847 2.847 0 0 1-2.582-1.632l-10.439-22.465h2.9a4.26 4.26 0 0 1 3.922 2.555l6.965 16.147 7.197-16.21a4.26 4.26 0 0 1 3.902-2.508h2.635L150.52 42.405a2.847 2.847 0 0 1-2.57 1.607Zm16.524-10.653c.497 4.645 4.073 7.527 9.405 7.527 3.026 0 5.295-.915 6.7-2.741a4.292 4.292 0 0 1 3.38-1.656h2.807c-2.444 5.473-6.819 8.164-13.34 8.164-8.145 0-13.636-5.034-13.636-12.561s5.625-12.806 13.739-12.806c5.869 0 10.59 2.687 12.491 7.187.847 2.07 1.194 3.909 1.194 6.89l-22.74-.004Zm17.815-3.727c-1.095-4.252-4.33-6.649-8.81-6.649s-7.714 2.397-8.858 6.65h17.668Z" fill="#3B3E4F"/><g transform="translate(.6)"><path d="m47.09 13.985 1.342-3.356S46.724 8.764 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87L33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87S.366 10.63.366 10.63l1.342 3.356L0 18.956s5.023 19.384 5.612 21.75c1.159 4.662 1.952 6.464 5.246 8.825 3.293 2.362 9.271 6.464 10.247 7.085.976.621 2.196 1.68 3.294 1.68 1.098 0 2.318-1.059 3.294-1.68s6.953-4.723 10.247-7.085c3.294-2.361 4.087-4.163 5.246-8.824.589-2.367 5.612-21.75 5.612-21.75l-1.708-4.972Z" fill="url(#a)"/><path d="M24.399 36.279c.334 0 2.477.77 4.196 1.677 1.72.906 2.965 1.547 3.363 1.8.399.255.156.734-.207.995s-5.238 4.107-5.71 4.532c-.474.426-1.17 1.128-1.642 1.128-.473 0-1.168-.702-1.641-1.128-.474-.425-5.348-4.27-5.711-4.532-.363-.261-.606-.74-.208-.994.399-.254 1.645-.895 3.364-1.801 1.719-.907 3.861-1.677 4.196-1.677Zm.026-27.393c.164.004 1.09.05 2.414.5 1.464.497 3.05 1.118 3.782 1.118.732 0 6.16-1.056 6.16-1.056s6.434 7.923 6.434 9.617c0 1.693-.81 2.14-1.623 3.02l-4.824 5.22c-.456.493-1.407 1.242-.848 2.59.56 1.347 1.384 3.061.467 4.8-.917 1.74-2.488 2.9-3.494 2.708-1.007-.192-3.37-1.45-4.24-2.025-.869-.575-3.624-2.89-3.624-3.775 0-.886 2.848-2.476 3.374-2.837.526-.362 2.926-1.76 2.975-2.309.05-.549.03-.71-.678-2.066-.708-1.356-1.983-3.166-1.77-4.37.211-1.205 2.268-1.83 3.736-2.396 1.468-.564 4.294-1.63 4.647-1.797.353-.166.262-.324-.808-.427-1.07-.103-4.104-.514-5.472-.125-1.368.389-3.706.98-3.895 1.293-.19.314-.356.324-.162 1.405.194 1.082 1.195 6.27 1.293 7.192.097.922.287 1.53-.688 1.758-.976.227-2.618.622-3.182.622-.564 0-2.206-.395-3.182-.622-.975-.227-.785-.836-.688-1.758.097-.922 1.098-6.11 1.293-7.192.194-1.08.027-1.091-.162-1.405-.19-.313-2.527-.904-3.895-1.293-1.368-.389-4.403.022-5.472.125-1.07.103-1.161.261-.808.427.353.166 3.18 1.233 4.647 1.797 1.467.565 3.524 1.191 3.737 2.395.212 1.205-1.064 3.015-1.772 4.37-.708 1.357-.727 1.518-.677 2.067.049.549 2.448 1.947 2.975 2.309.526.36 3.373 1.951 3.373 2.837 0 .885-2.754 3.2-3.624 3.775-.869.575-3.233 1.833-4.239 2.025-1.006.192-2.577-.969-3.494-2.708-.917-1.739-.092-3.453.466-4.8.56-1.348-.39-2.097-.847-2.59l-4.824-5.22c-.814-.88-1.623-1.327-1.623-3.02 0-1.694 6.433-9.617 6.433-9.617s5.43 1.056 6.161 1.056c.732 0 2.318-.621 3.782-1.118 1.325-.45 2.25-.496 2.414-.5Z" fill="#FFF"/><use fill="url(#b)" xlink:href="#c"/></g></g></svg>',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(h, {
                              href: "https://www.bitski.com/",
                              children: e(a.a, {
                                className: "framer-mslmhc framer-lux5qc",
                                "data-framer-name": "Bitski Logo",
                                name: "Bitski Logo",
                                children: e(s, {
                                  className: "framer-qrfjc6",
                                  "data-framer-name": "graphic",
                                  layout: "position",
                                  name: "graphic",
                                  opacity: 1,
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 27"><path d="M 0.796 0 L 8.505 0 C 13.608 0 16.322 3.27 16.322 8.062 C 16.322 8.67 16.178 9.583 16.069 10.153 C 16.033 10.381 15.997 10.534 15.997 10.686 C 15.997 10.99 16.105 11.18 16.503 11.408 C 18.928 12.853 20.014 15.211 20.014 18.557 C 20.014 23.235 17.263 26.619 11.617 26.619 L 0.796 26.619 C 0.217 26.619 0 26.353 0 25.745 L 0 0.875 C 0 0.266 0.217 0 0.796 0 Z M 6.659 10.457 L 8.505 10.457 C 9.446 10.457 10.17 9.849 10.17 8.67 C 10.17 7.529 9.446 6.883 8.505 6.883 L 6.659 6.883 C 6.08 6.883 5.863 7.149 5.863 7.757 L 5.863 9.583 C 5.863 10.191 6.08 10.458 6.659 10.458 Z M 6.659 19.736 L 11.509 19.736 C 12.92 19.736 13.716 19.204 13.716 17.949 C 13.716 16.732 12.92 16.162 11.509 16.162 L 6.659 16.162 C 6.08 16.162 5.863 16.428 5.863 17.036 L 5.863 18.862 C 5.863 19.47 6.08 19.736 6.659 19.736 Z M 22.258 25.745 L 22.258 8.48 C 22.258 7.872 22.475 7.606 23.054 7.606 L 27.506 7.606 C 28.085 7.606 28.302 7.872 28.302 8.48 L 28.302 25.745 C 28.302 26.353 28.085 26.62 27.506 26.62 L 23.054 26.62 C 22.475 26.62 22.258 26.353 22.258 25.745 Z M 22.258 4.677 L 22.258 0.875 C 22.258 0.266 22.475 0 23.054 0 L 27.506 0 C 28.085 0 28.302 0.266 28.302 0.875 L 28.302 4.677 C 28.302 5.286 28.085 5.552 27.506 5.552 L 23.054 5.552 C 22.475 5.552 22.258 5.286 22.258 4.677 Z M 33.188 13.88 L 31.125 13.88 C 30.546 13.88 30.292 13.652 30.292 13.043 L 30.292 8.442 C 30.292 7.834 30.509 7.606 31.125 7.606 L 33.188 7.606 C 33.767 7.606 33.984 7.339 33.984 6.731 L 33.984 0.875 C 33.984 0.266 34.201 0 34.78 0 L 39.232 0 C 39.811 0 40.028 0.266 40.028 0.875 L 40.028 6.731 C 40.028 7.339 40.245 7.606 40.824 7.606 L 44.95 7.606 C 45.529 7.606 45.782 7.834 45.782 8.442 L 45.782 13.043 C 45.782 13.652 45.529 13.88 44.95 13.88 L 40.824 13.88 C 40.245 13.88 40.028 14.146 40.028 14.755 L 40.028 25.745 C 40.028 26.353 39.811 26.619 39.232 26.619 L 34.78 26.619 C 34.201 26.619 33.984 26.353 33.984 25.745 L 33.984 14.755 C 33.984 14.146 33.767 13.88 33.188 13.88 Z M 54.939 27 C 52.116 27 49.221 26.087 47.158 24.756 C 46.796 24.528 46.723 24.11 46.94 23.654 L 48.569 20.421 C 48.859 19.851 49.293 19.889 49.8 20.193 C 51.32 21.144 53.346 21.828 54.903 21.828 C 55.88 21.828 56.604 21.524 56.604 20.84 C 56.604 20.193 55.952 19.965 54.975 19.965 L 54.179 19.965 C 49.908 19.965 46.977 17.721 46.977 13.842 C 46.977 9.507 50.668 7.226 54.722 7.226 C 57.4 7.226 59.39 7.72 61.526 8.937 C 61.924 9.165 62.068 9.583 61.815 10.04 L 59.969 13.424 C 59.716 13.918 59.173 13.957 58.703 13.652 C 57.255 12.702 55.952 12.435 54.758 12.435 C 53.672 12.435 53.129 12.816 53.129 13.348 C 53.129 13.995 53.672 14.261 55.228 14.261 L 56.133 14.261 C 60.223 14.261 62.865 16.352 62.865 20.003 C 62.865 24.528 59.571 27 54.939 27 Z M 76.336 16.314 L 82.199 25.517 C 82.561 26.087 82.344 26.619 81.692 26.619 L 76.445 26.619 C 75.829 26.619 75.359 26.543 74.852 25.745 L 72.029 21.448 C 71.704 20.953 71.378 20.953 70.98 21.372 L 70.69 21.676 C 70.22 22.17 70.183 22.436 70.183 23.121 L 70.183 25.783 C 70.183 26.353 69.966 26.619 69.387 26.619 L 64.9 26.619 C 64.357 26.619 64.14 26.353 64.14 25.783 L 64.14 0.837 C 64.14 0.266 64.357 0 64.9 0 L 69.387 0 C 69.966 0 70.183 0.266 70.183 0.837 L 70.183 11.903 C 70.183 12.511 70.726 12.663 71.124 12.169 L 74.201 8.518 C 74.707 7.91 75.214 7.605 75.866 7.605 L 81.511 7.605 C 82.199 7.605 82.38 8.252 81.91 8.746 L 76.445 14.869 C 76.01 15.363 75.902 15.667 76.336 16.314 Z M 83.936 25.745 L 83.936 8.48 C 83.936 7.872 84.153 7.606 84.732 7.606 L 89.184 7.606 C 89.763 7.606 89.98 7.872 89.98 8.48 L 89.98 25.745 C 89.98 26.353 89.763 26.62 89.184 26.62 L 84.732 26.62 C 84.153 26.62 83.936 26.353 83.936 25.745 Z M 83.936 4.677 L 83.936 0.875 C 83.936 0.266 84.153 0 84.732 0 L 89.184 0 C 89.763 0 89.98 0.266 89.98 0.875 L 89.98 4.677 C 89.98 5.286 89.763 5.552 89.184 5.552 L 84.732 5.552 C 84.153 5.552 83.936 5.286 83.936 4.677 Z" fill="rgb(255,53,103)"></path></svg>',
                                  svgContentId: 387479123,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(h, {
                              href: "https://www.frontier.xyz/",
                              children: e(a.a, {
                                className: "framer-bcel84 framer-lux5qc",
                                "data-framer-name": "Frontier Logo",
                                name: "Frontier Logo",
                                children: e(s, {
                                  className: "framer-po6gjh",
                                  "data-framer-name": "graphic",
                                  layout: "position",
                                  name: "graphic",
                                  opacity: 1,
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 19"><g id="ss1508076913_1"><path d="M 0 0 L 110 0 L 110 18.75 L 0 18.75 Z" fill="transparent"></path><path d="M 12.609 0.165 L 12.511 0.435 L 12.188 1.299 L 11.974 1.856 C 10.346 6.033 9.079 8.015 7.732 8.015 C 7.044 8.033 6.38 7.751 5.902 7.238 L 5.73 7.077 C 5.303 6.668 5.122 6.567 4.71 6.567 C 4.496 6.567 4.112 6.851 3.627 7.516 C 2.977 8.47 2.424 9.491 1.977 10.564 L 1.923 10.69 L 7.7 10.69 L 6.981 12.24 L 1.586 12.24 L 1.586 18.587 L 0 18.587 L 0 0.164 L 12.609 0.164 Z M 10.362 1.712 L 1.586 1.712 L 1.586 7.85 C 2.638 5.96 3.637 5.012 4.713 5.012 C 5.443 4.987 6.151 5.282 6.662 5.823 L 6.84 5.99 C 7.238 6.372 7.392 6.459 7.734 6.459 C 8.109 6.46 9.108 4.817 10.362 1.712 Z M 19.251 0.165 L 20.515 0.165 C 23.065 0.165 26.498 1.382 26.498 6.285 C 26.498 9.195 25.045 11.048 23.222 11.874 L 23.065 11.943 L 26.499 18.587 L 24.602 18.587 L 21.399 12.369 C 21.268 12.392 21.136 12.402 21.003 12.401 L 17.245 12.401 L 17.245 18.587 L 15.579 18.587 L 15.579 0.197 L 16.672 0.18 C 17.56 0.17 18.382 0.166 19.251 0.165 Z M 20.418 1.744 L 17.245 1.744 L 17.245 10.855 L 20.613 10.855 C 22.77 10.855 24.863 9.375 24.863 6.217 C 24.863 3.03 23.015 1.798 20.576 1.745 Z M 102.16 0.165 L 104.019 0.165 C 106.57 0.165 110.003 1.382 110.003 6.285 C 110.003 9.195 108.55 11.048 106.727 11.875 L 106.57 11.943 L 110 18.586 L 108.104 18.586 L 104.899 12.368 C 104.769 12.391 104.637 12.401 104.504 12.401 L 100.748 12.401 L 100.748 18.586 L 99.08 18.586 L 99.08 0.197 L 100.02 0.182 C 100.772 0.173 101.46 0.17 102.16 0.166 Z M 103.919 1.742 L 100.746 1.742 L 100.746 10.855 L 104.114 10.855 C 106.272 10.855 108.364 9.374 108.364 6.216 C 108.364 3.028 106.517 1.796 104.077 1.744 Z M 37.386 0 C 41.055 0 44.726 2.87 44.837 8.799 L 44.837 9.671 C 44.837 15.791 41.11 18.75 37.383 18.75 C 33.681 18.75 30.043 15.88 29.932 9.951 L 29.932 9.079 C 29.932 2.961 33.626 0 37.386 0 Z M 37.386 1.546 C 34.588 1.546 31.666 3.677 31.569 8.815 L 31.569 9.671 C 31.569 14.967 34.544 17.171 37.356 17.171 C 40.184 17.171 43.108 15.041 43.205 9.938 L 43.205 9.079 C 43.205 3.75 40.23 1.546 37.386 1.546 Z M 72.108 18.587 L 72.108 1.744 L 76.096 1.744 L 76.815 0.164 L 65.764 0.164 L 65.764 1.744 L 70.472 1.744 L 70.472 18.587 L 72.107 18.587 Z M 81.72 18.585 L 81.72 0.067 L 80.085 0.067 L 80.085 18.585 Z M 95.091 18.587 L 95.811 17.04 L 87.016 17.04 L 87.016 10.625 L 92.869 10.625 L 93.588 9.079 L 87.016 9.079 L 87.016 1.712 L 95.091 1.712 L 95.81 0.164 L 85.416 0.164 L 85.416 18.587 Z M 62.578 18.611 L 62.578 0.23 L 60.878 0.23 L 60.878 14.361 C 60.878 14.361 60.177 13.589 59.669 12.972 L 48.836 0.154 L 48.517 0.154 L 48.517 18.599 L 50.171 18.61 L 50.171 4.344 C 50.171 4.344 50.918 5.282 51.425 5.899 L 62.259 18.611 L 62.579 18.611 Z" fill="rgb(0,0,0)"></path></g></svg>',
                                  svgContentId: 1508076913,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(o, {
                              className: "framer-ymmltx-container",
                              children: e(K, {
                                height: "100%",
                                id: "S77MirgwH",
                                layoutId: "S77MirgwH",
                                width: "100%",
                              }),
                            }),
                            e(h, {
                              href: "https://ultimate.app/",
                              children: e(a.a, {
                                className: "framer-1epvy10 framer-lux5qc",
                                "data-framer-name": "Ultimate Logo",
                                name: "Ultimate Logo",
                                children: e(s, {
                                  className: "framer-ah5tf9",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 18,
                                  intrinsicWidth: 130,
                                  name: "graphic",
                                  svg: '<svg width="130" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.615V.012h5.544v10.603c0 1.208 1.164 1.965 2.767 1.965 1.604 0 2.767-.757 2.767-1.965V.012h5.544v10.603c0 4.562-3.625 7.385-8.311 7.385C3.625 17.989 0 15.177 0 10.615ZM18.26 0h5.544v12.342h8.063v5.296H18.259V0Z" fill="#000"/><path d="M33.504 5.296h-5.16V0H44.22v5.296h-5.16v12.342h-5.545l-.011-12.342Zm12.354 7.058h3.274V5.296h-3.274V0h12.094v5.296h-3.275v7.058h3.275v5.296H45.858v-5.296ZM59.589 0h6.3l3.05 7.204h1.004L72.993 0h6.3v17.638H73.75v-7.08h-1.005l-1.762 4.28h-3.071l-1.762-4.28h-1.005v7.08H59.6L59.589 0ZM99.8 17.266v.372h-5.69l-1.028-3.749h-5.545l-1.028 3.75h-5.69v-.373L85.921 0h8.797L99.8 17.266Zm-7.882-7.668-1.106-4.054h-1.005L88.7 9.598h3.218Zm11.36-4.302h-5.16V0h15.876v5.296h-5.16v12.342h-5.545l-.011-12.342ZM115.62 0h13.856v5.217h-8.311v1.762h7.159v3.68h-7.159v1.762h8.311v5.217H115.62V0Z" fill="#000"/></svg>',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          ],
                          speed: 100,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                  ],
                }),
                R() &&
                  e(o, {
                    className:
                      "framer-u20rp9-container hidden-9i6d03 hidden-1dkgatv hidden-1d7sfhj",
                    "data-framer-name": "Brands",
                    name: "Brands",
                    children: e(D, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0.1,
                        fadeContent: !0,
                        fadeInset: 5,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 50,
                      height: "100%",
                      hoverFactor: 1,
                      id: "KToBZ8_mn",
                      layoutId: "KToBZ8_mn",
                      name: "Brands",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !0,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        e(o, {
                          className: "framer-17u7b1w-container",
                          children: e(J, {
                            height: "100%",
                            id: "OK6Ggr2Mg",
                            layoutId: "OK6Ggr2Mg",
                            width: "100%",
                          }),
                        }),
                        e(h, {
                          href: "https://phantom.app/",
                          children: e(a.a, {
                            className: "framer-1m206e1 framer-lux5qc",
                            "data-framer-name": "Phantom Logo",
                            name: "Phantom Logo",
                            children: e(s, {
                              className: "framer-37b9ki",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 224,
                              intrinsicWidth: 1139,
                              name: "graphic",
                              svg: '<svg width="1139" height="224" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.83 224c34.325 0 60.121-29.853 75.515-53.443-1.872 5.219-2.912 10.438-2.912 15.449 0 13.778 7.905 23.59 23.508 23.59 21.427 0 44.311-18.789 56.169-39.039-.832 2.923-1.248 5.637-1.248 8.142 0 9.603 5.409 15.657 16.434 15.657 34.742 0 69.692-61.584 69.692-115.444C268.988 36.95 247.768 0 194.512 0 100.896 0 0 114.401 0 188.302 0 217.32 15.602 224 31.83 224ZM162.265 74.319c0-10.438 5.825-17.745 14.355-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.53 0-14.355-7.515-14.355-17.953Zm44.52 0c0-10.438 5.825-17.745 14.354-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.529 0-14.354-7.515-14.354-17.953Zm103.803 126.926h31.205v-30.688c0-14.404-1.248-19.832-8.529-34.445l3.952-2.088c10.61 24.843 25.589 33.819 40.983 33.819 24.756 0 44.519-21.711 44.519-55.321 0-32.15-18.099-55.74-44.103-55.74-15.394 0-30.789 8.769-41.399 33.82l-3.952-2.088c4.993-10.02 8.529-19.414 8.529-28.391h-31.205v141.122Zm31.205-88.932c0-13.778 10.402-29.018 25.796-29.018 12.482 0 22.676 10.23 22.676 28.809 0 18.371-9.778 29.227-22.884 29.227-14.562 0-25.588-14.822-25.588-29.018Zm92.315 52.19h31.205v-36.742c0-25.886 9.154-44.257 26.212-44.257 10.818 0 14.147 7.307 14.147 25.469v55.53h31.205v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.942 34.654l-3.953-2.087c5.409-11.691 6.865-18.789 6.865-29.227V24.008h-31.205v140.495Zm148.374 3.34c20.179 0 32.037-13.36 40.982-30.479l3.745 1.879c-3.953 8.142-7.697 17.536-7.697 25.26h30.581V107.72c0-33.819-14.147-50.937-47.224-50.937-32.453 0-48.472 16.283-51.592 33.401l29.957 5.22c1.04-8.977 8.321-15.031 19.971-15.031s18.307 5.845 18.307 12.943-6.865 10.438-25.172 10.647c-27.045.417-47.016 10.229-47.016 31.105 0 17.118 13.522 32.775 35.158 32.775Zm-4.161-34.863c0-16.492 26.212-5.01 40.567-17.744v3.757c0 14.822-13.106 25.678-26.213 25.678-6.865 0-14.354-2.923-14.354-11.691Zm84.137 31.523h31.205v-36.742c0-25.886 9.153-44.257 26.212-44.257 10.818 0 14.146 7.307 14.146 25.469v55.53h31.206v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.943 34.654l-3.952-2.087c5.409-11.691 6.865-18.789 6.865-29.227h-31.205v104.38Zm185.883.418v-25.887c-6.657 2.297-25.172 6.263-25.172-8.976V85.174h24.964V60.123h-24.964V32.149l-31.413 9.394v18.58h-18.723v25.051h18.723l.208 47.389c0 34.863 30.997 39.873 56.377 32.358Zm63.387 2.922c31.621 0 55.753-24.216 55.753-55.739 0-31.314-24.132-55.321-55.753-55.321s-55.961 24.007-55.961 55.321c0 31.523 24.34 55.739 55.961 55.739Zm-23.716-55.53c0-17.327 9.778-29.435 23.716-29.435s23.508 12.108 23.508 29.435c0 17.327-9.57 29.435-23.508 29.435-13.938 0-23.716-12.108-23.716-29.435Zm89.138 52.19h31.2v-36.742c0-26.93 8.53-44.257 22.26-44.257 8.95 0 11.86 7.098 11.86 25.469v55.53h31.21v-36.742c0-25.26 9.15-44.257 22.26-44.257 8.73 0 11.85 8.142 11.85 25.469v55.53H1139v-60.54c0-33.193-10.82-47.18-32.04-47.18-22.05 0-29.95 15.657-37.65 34.863l-3.75-1.879c7.29-21.92-8.53-32.984-24.13-32.984-20.59 0-28.08 15.657-36.4 34.654l-3.75-2.087c5.2-11.691 7.07-18.789 7.07-29.227h-31.2v104.38Z" fill="#AB9FF2"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(a.div, {
                          className: "framer-ei98th",
                          "data-framer-name": "WalletConnect logo",
                          name: "WalletConnect logo",
                          children: e(s, {
                            className: "framer-ouukhz",
                            "data-framer-name": "graphic",
                            layout: "position",
                            name: "graphic",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 163 25.695"><g id="ss33272303_1"><path d="M 0 0 L 162.68 0 L 162.68 25.695 L 0 25.695 Z" fill="transparent"></path><path d="M 9.803 7.274 C 14.652 2.529 22.513 2.529 27.362 7.274 L 27.945 7.845 C 28.062 7.958 28.127 8.113 28.127 8.274 C 28.127 8.436 28.062 8.591 27.945 8.704 L 25.949 10.658 C 25.827 10.776 25.632 10.776 25.51 10.658 L 24.707 9.872 C 21.325 6.562 15.841 6.562 12.458 9.872 L 11.598 10.713 C 11.476 10.832 11.281 10.832 11.159 10.713 L 9.163 8.759 C 9.046 8.647 8.981 8.492 8.981 8.33 C 8.981 8.168 9.046 8.013 9.163 7.9 Z M 31.49 11.314 L 33.266 13.053 C 33.383 13.166 33.448 13.321 33.448 13.482 C 33.448 13.644 33.383 13.799 33.266 13.912 L 25.256 21.752 C 25.012 21.99 24.622 21.99 24.378 21.752 L 18.693 16.188 C 18.632 16.128 18.534 16.128 18.473 16.188 L 12.788 21.752 C 12.543 21.99 12.154 21.99 11.909 21.752 L 3.898 13.912 C 3.782 13.799 3.716 13.644 3.716 13.482 C 3.716 13.321 3.782 13.166 3.898 13.053 L 5.675 11.314 C 5.92 11.077 6.308 11.077 6.553 11.314 L 12.238 16.878 C 12.299 16.938 12.397 16.938 12.458 16.878 L 18.143 11.314 C 18.387 11.076 18.777 11.076 19.021 11.314 L 24.707 16.878 C 24.768 16.938 24.866 16.938 24.927 16.878 L 30.612 11.314 C 30.856 11.076 31.246 11.076 31.49 11.314 Z M 44.133 19.223 L 46.279 10.639 C 46.406 10.165 46.515 9.656 46.661 8.857 C 46.77 9.656 46.897 10.165 46.988 10.639 L 48.843 19.223 L 52.681 19.223 L 55.918 6.492 L 52.971 6.492 L 51.189 14.313 C 51.012 15.057 50.873 15.809 50.772 16.567 C 50.626 15.713 50.48 15.076 50.316 14.33 L 48.588 6.492 L 44.733 6.492 L 42.859 14.33 C 42.692 15.071 42.546 15.817 42.423 16.567 C 42.3 15.817 42.155 15.071 41.987 14.33 L 40.241 6.492 L 37.167 6.492 L 40.386 19.223 Z M 58.115 19.55 C 59.57 19.55 60.497 18.95 60.97 18.077 C 60.915 18.35 60.898 18.623 60.898 18.896 L 60.898 19.223 L 63.335 19.223 L 63.335 13.967 C 63.335 11.457 62.189 10.002 59.388 10.002 C 56.969 10.002 55.387 11.348 55.242 13.203 L 57.916 13.203 C 58.006 12.384 58.588 11.894 59.479 11.894 C 60.316 11.894 60.77 12.366 60.77 12.912 C 60.77 13.312 60.534 13.548 59.824 13.639 L 58.552 13.785 C 56.66 14.021 55.042 14.713 55.042 16.713 C 55.042 18.531 56.551 19.55 58.115 19.55 Z M 58.934 17.677 C 58.224 17.677 57.697 17.277 57.697 16.585 C 57.697 15.913 58.297 15.585 59.207 15.422 L 59.825 15.312 C 60.352 15.203 60.643 15.112 60.825 14.949 L 60.825 15.785 C 60.825 16.913 60.006 17.677 58.933 17.677 Z M 64.602 6.492 L 64.602 19.223 L 67.239 19.223 L 67.239 6.492 Z M 68.764 6.492 L 68.764 19.223 L 71.401 19.223 L 71.401 6.492 Z M 77.158 19.55 C 79.668 19.55 81.286 18.132 81.468 16.277 L 78.813 16.277 C 78.685 17.095 77.993 17.549 77.158 17.549 C 76.03 17.549 75.211 16.64 75.194 15.385 L 81.522 15.385 L 81.522 14.876 C 81.522 11.93 79.904 10.002 77.103 10.002 C 74.412 10.002 72.52 11.893 72.52 14.749 C 72.52 17.84 74.466 19.55 77.158 19.55 Z M 75.174 13.657 C 75.284 12.639 76.03 11.893 77.085 11.893 C 78.104 11.893 78.812 12.602 78.831 13.657 L 75.175 13.657 Z M 87.104 19.404 C 87.686 19.404 88.25 19.313 88.504 19.241 L 88.504 17.239 C 88.294 17.276 88.081 17.294 87.867 17.294 C 86.904 17.294 86.559 16.748 86.559 15.857 L 86.559 12.366 L 88.704 12.366 L 88.704 10.31 L 86.559 10.31 L 86.559 7.146 L 83.939 7.146 L 83.939 10.31 L 82.011 10.31 L 82.011 12.366 L 83.939 12.366 L 83.939 16.221 C 83.939 18.331 84.994 19.403 87.104 19.403 Z M 96.005 19.55 C 99.607 19.55 101.789 17.44 102.062 14.403 L 99.207 14.403 C 98.988 16.058 97.824 17.186 96.115 17.186 C 94.096 17.186 92.677 15.549 92.677 12.785 C 92.677 10.075 94.151 8.529 96.169 8.529 C 97.897 8.529 98.879 9.584 99.079 11.13 L 102.007 11.13 C 101.716 7.965 99.388 6.164 96.188 6.164 C 92.532 6.164 89.731 8.637 89.731 12.785 C 89.731 17.076 92.187 19.55 96.005 19.55 Z M 107.779 19.55 C 110.525 19.55 112.472 17.822 112.472 14.803 C 112.472 11.839 110.525 10.002 107.779 10.002 C 105.051 10.002 103.105 11.839 103.105 14.803 C 103.105 17.822 105.033 19.55 107.779 19.55 Z M 107.779 17.513 C 106.56 17.513 105.778 16.513 105.778 14.803 C 105.778 13.058 106.597 12.076 107.779 12.076 C 108.98 12.076 109.798 13.058 109.798 14.803 C 109.798 16.514 108.997 17.513 107.779 17.513 Z M 116.148 19.223 L 116.148 14.004 C 116.148 12.894 116.839 12.076 117.821 12.076 C 118.748 12.076 119.294 12.785 119.294 13.967 L 119.294 19.223 L 121.931 19.223 L 121.931 13.585 C 121.931 11.439 120.804 10.002 118.784 10.002 C 117.384 10.002 116.53 10.674 116.075 11.475 C 116.122 11.205 116.146 10.931 116.148 10.656 L 116.148 10.311 L 113.511 10.311 L 113.511 19.223 Z M 126.146 19.223 L 126.146 14.004 C 126.146 12.894 126.836 12.076 127.818 12.076 C 128.747 12.076 129.292 12.785 129.292 13.967 L 129.292 19.223 L 131.929 19.223 L 131.929 13.585 C 131.929 11.439 130.801 10.002 128.783 10.002 C 127.382 10.002 126.527 10.674 126.073 11.475 C 126.127 11.147 126.146 10.893 126.146 10.656 L 126.146 10.311 L 123.508 10.311 L 123.508 19.223 Z M 137.603 19.55 C 140.113 19.55 141.731 18.132 141.914 16.277 L 139.258 16.277 C 139.131 17.095 138.44 17.549 137.603 17.549 C 136.475 17.549 135.657 16.64 135.639 15.385 L 141.968 15.385 L 141.968 14.876 C 141.968 11.93 140.349 10.002 137.549 10.002 C 134.857 10.002 132.965 11.893 132.965 14.749 C 132.965 17.84 134.912 19.55 137.603 19.55 Z M 135.621 13.657 C 135.73 12.639 136.475 11.893 137.53 11.893 C 138.548 11.893 139.258 12.602 139.276 13.657 Z M 147.631 19.55 C 150.395 19.55 151.905 18.041 152.195 15.695 L 149.559 15.695 C 149.467 16.677 148.903 17.513 147.721 17.513 C 146.521 17.513 145.703 16.404 145.703 14.767 C 145.703 12.985 146.649 12.076 147.776 12.076 C 148.886 12.076 149.431 12.875 149.504 13.803 L 152.141 13.803 C 151.941 11.639 150.467 10.002 147.757 10.002 C 145.121 10.002 143.029 11.748 143.029 14.767 C 143.029 17.749 144.793 19.55 147.631 19.55 Z M 157.9 19.404 C 158.482 19.404 159.045 19.313 159.3 19.241 L 159.3 17.239 C 159.09 17.276 158.877 17.294 158.663 17.294 C 157.7 17.294 157.354 16.748 157.354 15.857 L 157.354 12.366 L 159.5 12.366 L 159.5 10.31 L 157.354 10.31 L 157.354 7.146 L 154.735 7.146 L 154.735 10.31 L 152.807 10.31 L 152.807 12.366 L 154.735 12.366 L 154.735 16.221 C 154.735 18.331 155.789 19.403 157.9 19.403 Z" fill="rgb(0,0,0)"></path></g></svg>',
                            svgContentId: 33272303,
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          href: "https://brave.com/wallet/",
                          children: e(a.a, {
                            className: "framer-150hodz framer-lux5qc",
                            "data-framer-name": "Brave Logo",
                            name: "Brave Logo",
                            children: e(s, {
                              className: "framer-1tvcox4",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 59,
                              intrinsicWidth: 188,
                              name: "graphic",
                              svg: '<svg width="188" height="59" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="50.706%" x2="100%" y2="50.706%" id="a"><stop stop-color="#F50" offset="0%"/><stop stop-color="#F50" offset="40.988%"/><stop stop-color="#FF2000" offset="58.198%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><linearGradient x1="2.148%" y1="50.706%" x2="100%" y2="50.706%" id="b"><stop stop-color="#FF452A" offset="0%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><path d="M38.184 5.781 33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87c0 0 5.856-.538 7.868 2.797 0 0 5.43 1.056 6.161 1.056.732 0 2.318-.621 3.782-1.118 1.464-.497 2.44-.501 2.44-.501s.976.004 2.44.5c1.464.498 3.05 1.12 3.782 1.12.732 0 6.16-1.057 6.16-1.057C38.794 6.113 44.65 6.65 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87" id="c"/></defs><g fill="none" fill-rule="evenodd"><path d="M62.66 31.624V11.585h1.886c1.536 0 2.782 1.266 2.782 2.828v8.91c3.022-2.741 5.592-3.838 9.017-3.909 6.57-.136 12.272 4.824 12.814 11.481.647 7.954-5.043 13.94-12.455 13.94-8.138 0-14.044-5.13-14.044-13.211Zm4.59 1.573c.46 4.14 4.35 7.56 8.452 7.626 5.343.083 8.985-3.457 8.985-8.694 0-5.237-3.56-8.695-8.753-8.695-5.552-.012-9.315 4.087-8.684 9.763Zm29.696-13.282v3.57c2.937-3.313 4.676-4.203 8.113-4.203 1 0 1.999.083 2.986.244v4.74a11.888 11.888 0 0 0-3.234-.438c-2.489 0-4.578.828-6.11 2.393-1.344 1.37-1.743 2.443-1.743 4.596v13.199H92.12v-24.1h4.826Zm12.247 7.97c.249-2.347.697-3.618 1.69-4.84 1.992-2.484 5.577-3.763 10.651-3.763 4.033 0 6.97.637 9.01 2.004 1.694 1.122 2.39 2.786 2.39 5.717v10.703c0 2.347.6 3.175 2.24 3.13a9.809 9.809 0 0 0 1.096-.1v3.226a7.078 7.078 0 0 1-2.537.389c-3.034 0-4.427-.927-5.372-3.619-2.986 2.787-6.073 3.958-10.5 3.958-5.922 0-9.556-2.736-9.556-7.187-.025-2.538 1.443-4.846 3.731-5.863 1.792-.782 2.888-1.026 8.012-1.565 4.378-.438 5.128-.538 6.37-.931 1.344-.439 1.943-1.172 1.943-2.393 0-2.592-2.139-3.764-6.619-3.764-4.236 0-6.419.853-7.295 3.031a2.889 2.889 0 0 1-2.667 1.855l-2.587.012Zm19.143 4.107a46.702 46.702 0 0 1-9.408 1.76c-4.33.439-5.674 1.271-5.674 3.47 0 2.442 1.992 3.726 5.922 3.726 3.234 0 5.674-.828 7.417-2.443 1.393-1.32 1.743-2.248 1.743-4.554v-1.959Zm19.615 12.02h-1.246a2.847 2.847 0 0 1-2.582-1.632l-10.439-22.465h2.9a4.26 4.26 0 0 1 3.922 2.555l6.965 16.147 7.197-16.21a4.26 4.26 0 0 1 3.902-2.508h2.635L150.52 42.405a2.847 2.847 0 0 1-2.57 1.607Zm16.524-10.653c.497 4.645 4.073 7.527 9.405 7.527 3.026 0 5.295-.915 6.7-2.741a4.292 4.292 0 0 1 3.38-1.656h2.807c-2.444 5.473-6.819 8.164-13.34 8.164-8.145 0-13.636-5.034-13.636-12.561s5.625-12.806 13.739-12.806c5.869 0 10.59 2.687 12.491 7.187.847 2.07 1.194 3.909 1.194 6.89l-22.74-.004Zm17.815-3.727c-1.095-4.252-4.33-6.649-8.81-6.649s-7.714 2.397-8.858 6.65h17.668Z" fill="#3B3E4F"/><g transform="translate(.6)"><path d="m47.09 13.985 1.342-3.356S46.724 8.764 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87L33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87S.366 10.63.366 10.63l1.342 3.356L0 18.956s5.023 19.384 5.612 21.75c1.159 4.662 1.952 6.464 5.246 8.825 3.293 2.362 9.271 6.464 10.247 7.085.976.621 2.196 1.68 3.294 1.68 1.098 0 2.318-1.059 3.294-1.68s6.953-4.723 10.247-7.085c3.294-2.361 4.087-4.163 5.246-8.824.589-2.367 5.612-21.75 5.612-21.75l-1.708-4.972Z" fill="url(#a)"/><path d="M24.399 36.279c.334 0 2.477.77 4.196 1.677 1.72.906 2.965 1.547 3.363 1.8.399.255.156.734-.207.995s-5.238 4.107-5.71 4.532c-.474.426-1.17 1.128-1.642 1.128-.473 0-1.168-.702-1.641-1.128-.474-.425-5.348-4.27-5.711-4.532-.363-.261-.606-.74-.208-.994.399-.254 1.645-.895 3.364-1.801 1.719-.907 3.861-1.677 4.196-1.677Zm.026-27.393c.164.004 1.09.05 2.414.5 1.464.497 3.05 1.118 3.782 1.118.732 0 6.16-1.056 6.16-1.056s6.434 7.923 6.434 9.617c0 1.693-.81 2.14-1.623 3.02l-4.824 5.22c-.456.493-1.407 1.242-.848 2.59.56 1.347 1.384 3.061.467 4.8-.917 1.74-2.488 2.9-3.494 2.708-1.007-.192-3.37-1.45-4.24-2.025-.869-.575-3.624-2.89-3.624-3.775 0-.886 2.848-2.476 3.374-2.837.526-.362 2.926-1.76 2.975-2.309.05-.549.03-.71-.678-2.066-.708-1.356-1.983-3.166-1.77-4.37.211-1.205 2.268-1.83 3.736-2.396 1.468-.564 4.294-1.63 4.647-1.797.353-.166.262-.324-.808-.427-1.07-.103-4.104-.514-5.472-.125-1.368.389-3.706.98-3.895 1.293-.19.314-.356.324-.162 1.405.194 1.082 1.195 6.27 1.293 7.192.097.922.287 1.53-.688 1.758-.976.227-2.618.622-3.182.622-.564 0-2.206-.395-3.182-.622-.975-.227-.785-.836-.688-1.758.097-.922 1.098-6.11 1.293-7.192.194-1.08.027-1.091-.162-1.405-.19-.313-2.527-.904-3.895-1.293-1.368-.389-4.403.022-5.472.125-1.07.103-1.161.261-.808.427.353.166 3.18 1.233 4.647 1.797 1.467.565 3.524 1.191 3.737 2.395.212 1.205-1.064 3.015-1.772 4.37-.708 1.357-.727 1.518-.677 2.067.049.549 2.448 1.947 2.975 2.309.526.36 3.373 1.951 3.373 2.837 0 .885-2.754 3.2-3.624 3.775-.869.575-3.233 1.833-4.239 2.025-1.006.192-2.577-.969-3.494-2.708-.917-1.739-.092-3.453.466-4.8.56-1.348-.39-2.097-.847-2.59l-4.824-5.22c-.814-.88-1.623-1.327-1.623-3.02 0-1.694 6.433-9.617 6.433-9.617s5.43 1.056 6.161 1.056c.732 0 2.318-.621 3.782-1.118 1.325-.45 2.25-.496 2.414-.5Z" fill="#FFF"/><use fill="url(#b)" xlink:href="#c"/></g></g></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://www.bitski.com/",
                          children: e(a.a, {
                            className: "framer-mslmhc framer-lux5qc",
                            "data-framer-name": "Bitski Logo",
                            name: "Bitski Logo",
                            children: e(s, {
                              className: "framer-qrfjc6",
                              "data-framer-name": "graphic",
                              layout: "position",
                              name: "graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 27"><path d="M 0.796 0 L 8.505 0 C 13.608 0 16.322 3.27 16.322 8.062 C 16.322 8.67 16.178 9.583 16.069 10.153 C 16.033 10.381 15.997 10.534 15.997 10.686 C 15.997 10.99 16.105 11.18 16.503 11.408 C 18.928 12.853 20.014 15.211 20.014 18.557 C 20.014 23.235 17.263 26.619 11.617 26.619 L 0.796 26.619 C 0.217 26.619 0 26.353 0 25.745 L 0 0.875 C 0 0.266 0.217 0 0.796 0 Z M 6.659 10.457 L 8.505 10.457 C 9.446 10.457 10.17 9.849 10.17 8.67 C 10.17 7.529 9.446 6.883 8.505 6.883 L 6.659 6.883 C 6.08 6.883 5.863 7.149 5.863 7.757 L 5.863 9.583 C 5.863 10.191 6.08 10.458 6.659 10.458 Z M 6.659 19.736 L 11.509 19.736 C 12.92 19.736 13.716 19.204 13.716 17.949 C 13.716 16.732 12.92 16.162 11.509 16.162 L 6.659 16.162 C 6.08 16.162 5.863 16.428 5.863 17.036 L 5.863 18.862 C 5.863 19.47 6.08 19.736 6.659 19.736 Z M 22.258 25.745 L 22.258 8.48 C 22.258 7.872 22.475 7.606 23.054 7.606 L 27.506 7.606 C 28.085 7.606 28.302 7.872 28.302 8.48 L 28.302 25.745 C 28.302 26.353 28.085 26.62 27.506 26.62 L 23.054 26.62 C 22.475 26.62 22.258 26.353 22.258 25.745 Z M 22.258 4.677 L 22.258 0.875 C 22.258 0.266 22.475 0 23.054 0 L 27.506 0 C 28.085 0 28.302 0.266 28.302 0.875 L 28.302 4.677 C 28.302 5.286 28.085 5.552 27.506 5.552 L 23.054 5.552 C 22.475 5.552 22.258 5.286 22.258 4.677 Z M 33.188 13.88 L 31.125 13.88 C 30.546 13.88 30.292 13.652 30.292 13.043 L 30.292 8.442 C 30.292 7.834 30.509 7.606 31.125 7.606 L 33.188 7.606 C 33.767 7.606 33.984 7.339 33.984 6.731 L 33.984 0.875 C 33.984 0.266 34.201 0 34.78 0 L 39.232 0 C 39.811 0 40.028 0.266 40.028 0.875 L 40.028 6.731 C 40.028 7.339 40.245 7.606 40.824 7.606 L 44.95 7.606 C 45.529 7.606 45.782 7.834 45.782 8.442 L 45.782 13.043 C 45.782 13.652 45.529 13.88 44.95 13.88 L 40.824 13.88 C 40.245 13.88 40.028 14.146 40.028 14.755 L 40.028 25.745 C 40.028 26.353 39.811 26.619 39.232 26.619 L 34.78 26.619 C 34.201 26.619 33.984 26.353 33.984 25.745 L 33.984 14.755 C 33.984 14.146 33.767 13.88 33.188 13.88 Z M 54.939 27 C 52.116 27 49.221 26.087 47.158 24.756 C 46.796 24.528 46.723 24.11 46.94 23.654 L 48.569 20.421 C 48.859 19.851 49.293 19.889 49.8 20.193 C 51.32 21.144 53.346 21.828 54.903 21.828 C 55.88 21.828 56.604 21.524 56.604 20.84 C 56.604 20.193 55.952 19.965 54.975 19.965 L 54.179 19.965 C 49.908 19.965 46.977 17.721 46.977 13.842 C 46.977 9.507 50.668 7.226 54.722 7.226 C 57.4 7.226 59.39 7.72 61.526 8.937 C 61.924 9.165 62.068 9.583 61.815 10.04 L 59.969 13.424 C 59.716 13.918 59.173 13.957 58.703 13.652 C 57.255 12.702 55.952 12.435 54.758 12.435 C 53.672 12.435 53.129 12.816 53.129 13.348 C 53.129 13.995 53.672 14.261 55.228 14.261 L 56.133 14.261 C 60.223 14.261 62.865 16.352 62.865 20.003 C 62.865 24.528 59.571 27 54.939 27 Z M 76.336 16.314 L 82.199 25.517 C 82.561 26.087 82.344 26.619 81.692 26.619 L 76.445 26.619 C 75.829 26.619 75.359 26.543 74.852 25.745 L 72.029 21.448 C 71.704 20.953 71.378 20.953 70.98 21.372 L 70.69 21.676 C 70.22 22.17 70.183 22.436 70.183 23.121 L 70.183 25.783 C 70.183 26.353 69.966 26.619 69.387 26.619 L 64.9 26.619 C 64.357 26.619 64.14 26.353 64.14 25.783 L 64.14 0.837 C 64.14 0.266 64.357 0 64.9 0 L 69.387 0 C 69.966 0 70.183 0.266 70.183 0.837 L 70.183 11.903 C 70.183 12.511 70.726 12.663 71.124 12.169 L 74.201 8.518 C 74.707 7.91 75.214 7.605 75.866 7.605 L 81.511 7.605 C 82.199 7.605 82.38 8.252 81.91 8.746 L 76.445 14.869 C 76.01 15.363 75.902 15.667 76.336 16.314 Z M 83.936 25.745 L 83.936 8.48 C 83.936 7.872 84.153 7.606 84.732 7.606 L 89.184 7.606 C 89.763 7.606 89.98 7.872 89.98 8.48 L 89.98 25.745 C 89.98 26.353 89.763 26.62 89.184 26.62 L 84.732 26.62 C 84.153 26.62 83.936 26.353 83.936 25.745 Z M 83.936 4.677 L 83.936 0.875 C 83.936 0.266 84.153 0 84.732 0 L 89.184 0 C 89.763 0 89.98 0.266 89.98 0.875 L 89.98 4.677 C 89.98 5.286 89.763 5.552 89.184 5.552 L 84.732 5.552 C 84.153 5.552 83.936 5.286 83.936 4.677 Z" fill="rgb(255,53,103)"></path></svg>',
                              svgContentId: 387479123,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://www.frontier.xyz/",
                          children: e(a.a, {
                            className: "framer-bcel84 framer-lux5qc",
                            "data-framer-name": "Frontier Logo",
                            name: "Frontier Logo",
                            children: e(s, {
                              className: "framer-po6gjh",
                              "data-framer-name": "graphic",
                              layout: "position",
                              name: "graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 19"><g id="ss1508076913_1"><path d="M 0 0 L 110 0 L 110 18.75 L 0 18.75 Z" fill="transparent"></path><path d="M 12.609 0.165 L 12.511 0.435 L 12.188 1.299 L 11.974 1.856 C 10.346 6.033 9.079 8.015 7.732 8.015 C 7.044 8.033 6.38 7.751 5.902 7.238 L 5.73 7.077 C 5.303 6.668 5.122 6.567 4.71 6.567 C 4.496 6.567 4.112 6.851 3.627 7.516 C 2.977 8.47 2.424 9.491 1.977 10.564 L 1.923 10.69 L 7.7 10.69 L 6.981 12.24 L 1.586 12.24 L 1.586 18.587 L 0 18.587 L 0 0.164 L 12.609 0.164 Z M 10.362 1.712 L 1.586 1.712 L 1.586 7.85 C 2.638 5.96 3.637 5.012 4.713 5.012 C 5.443 4.987 6.151 5.282 6.662 5.823 L 6.84 5.99 C 7.238 6.372 7.392 6.459 7.734 6.459 C 8.109 6.46 9.108 4.817 10.362 1.712 Z M 19.251 0.165 L 20.515 0.165 C 23.065 0.165 26.498 1.382 26.498 6.285 C 26.498 9.195 25.045 11.048 23.222 11.874 L 23.065 11.943 L 26.499 18.587 L 24.602 18.587 L 21.399 12.369 C 21.268 12.392 21.136 12.402 21.003 12.401 L 17.245 12.401 L 17.245 18.587 L 15.579 18.587 L 15.579 0.197 L 16.672 0.18 C 17.56 0.17 18.382 0.166 19.251 0.165 Z M 20.418 1.744 L 17.245 1.744 L 17.245 10.855 L 20.613 10.855 C 22.77 10.855 24.863 9.375 24.863 6.217 C 24.863 3.03 23.015 1.798 20.576 1.745 Z M 102.16 0.165 L 104.019 0.165 C 106.57 0.165 110.003 1.382 110.003 6.285 C 110.003 9.195 108.55 11.048 106.727 11.875 L 106.57 11.943 L 110 18.586 L 108.104 18.586 L 104.899 12.368 C 104.769 12.391 104.637 12.401 104.504 12.401 L 100.748 12.401 L 100.748 18.586 L 99.08 18.586 L 99.08 0.197 L 100.02 0.182 C 100.772 0.173 101.46 0.17 102.16 0.166 Z M 103.919 1.742 L 100.746 1.742 L 100.746 10.855 L 104.114 10.855 C 106.272 10.855 108.364 9.374 108.364 6.216 C 108.364 3.028 106.517 1.796 104.077 1.744 Z M 37.386 0 C 41.055 0 44.726 2.87 44.837 8.799 L 44.837 9.671 C 44.837 15.791 41.11 18.75 37.383 18.75 C 33.681 18.75 30.043 15.88 29.932 9.951 L 29.932 9.079 C 29.932 2.961 33.626 0 37.386 0 Z M 37.386 1.546 C 34.588 1.546 31.666 3.677 31.569 8.815 L 31.569 9.671 C 31.569 14.967 34.544 17.171 37.356 17.171 C 40.184 17.171 43.108 15.041 43.205 9.938 L 43.205 9.079 C 43.205 3.75 40.23 1.546 37.386 1.546 Z M 72.108 18.587 L 72.108 1.744 L 76.096 1.744 L 76.815 0.164 L 65.764 0.164 L 65.764 1.744 L 70.472 1.744 L 70.472 18.587 L 72.107 18.587 Z M 81.72 18.585 L 81.72 0.067 L 80.085 0.067 L 80.085 18.585 Z M 95.091 18.587 L 95.811 17.04 L 87.016 17.04 L 87.016 10.625 L 92.869 10.625 L 93.588 9.079 L 87.016 9.079 L 87.016 1.712 L 95.091 1.712 L 95.81 0.164 L 85.416 0.164 L 85.416 18.587 Z M 62.578 18.611 L 62.578 0.23 L 60.878 0.23 L 60.878 14.361 C 60.878 14.361 60.177 13.589 59.669 12.972 L 48.836 0.154 L 48.517 0.154 L 48.517 18.599 L 50.171 18.61 L 50.171 4.344 C 50.171 4.344 50.918 5.282 51.425 5.899 L 62.259 18.611 L 62.579 18.611 Z" fill="rgb(0,0,0)"></path></g></svg>',
                              svgContentId: 1508076913,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(o, {
                          className: "framer-ymmltx-container",
                          children: e(K, {
                            height: "100%",
                            id: "S77MirgwH",
                            layoutId: "S77MirgwH",
                            width: "100%",
                          }),
                        }),
                        e(h, {
                          href: "https://ultimate.app/",
                          children: e(a.a, {
                            className: "framer-1epvy10 framer-lux5qc",
                            "data-framer-name": "Ultimate Logo",
                            name: "Ultimate Logo",
                            children: e(s, {
                              className: "framer-ah5tf9",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 18,
                              intrinsicWidth: 130,
                              name: "graphic",
                              svg: '<svg width="130" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.615V.012h5.544v10.603c0 1.208 1.164 1.965 2.767 1.965 1.604 0 2.767-.757 2.767-1.965V.012h5.544v10.603c0 4.562-3.625 7.385-8.311 7.385C3.625 17.989 0 15.177 0 10.615ZM18.26 0h5.544v12.342h8.063v5.296H18.259V0Z" fill="#000"/><path d="M33.504 5.296h-5.16V0H44.22v5.296h-5.16v12.342h-5.545l-.011-12.342Zm12.354 7.058h3.274V5.296h-3.274V0h12.094v5.296h-3.275v7.058h3.275v5.296H45.858v-5.296ZM59.589 0h6.3l3.05 7.204h1.004L72.993 0h6.3v17.638H73.75v-7.08h-1.005l-1.762 4.28h-3.071l-1.762-4.28h-1.005v7.08H59.6L59.589 0ZM99.8 17.266v.372h-5.69l-1.028-3.749h-5.545l-1.028 3.75h-5.69v-.373L85.921 0h8.797L99.8 17.266Zm-7.882-7.668-1.106-4.054h-1.005L88.7 9.598h3.218Zm11.36-4.302h-5.16V0h15.876v5.296h-5.16v12.342h-5.545l-.011-12.342ZM115.62 0h13.856v5.217h-8.311v1.762h7.159v3.68h-7.159v1.762h8.311v5.217H115.62V0Z" fill="#000"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://www.exodus.com/",
                          children: e(a.a, {
                            className: "framer-anbrd9 framer-lux5qc",
                            "data-framer-name": "Exodus Logo",
                            name: "Exodus Logo",
                            children: e(s, {
                              className: "framer-iokwtq",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 32,
                              intrinsicWidth: 156,
                              name: "graphic",
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="156" height="32" fill="none"><path fill="url(#a)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#b)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/><mask id="e" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="url(#c)" d="M31.808 8.935 18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08Z"/><path fill="url(#d)" d="M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254Z"/></mask><g mask="url(#e)"><path fill="url(#f)" d="M.4 0h31.2v32H.4z"/></g><path fill="#000" d="M58.92 8.8v2.797H46.029v2.863h10.955v2.798H46.028v3.144h12.893V23.2h-16.2V8.8h16.2Zm1.83 14.4 7.407-7.287L60.96 8.8h4.553l5.078 5.14L75.46 8.8h4.26l-7.177 7.113L79.95 23.2h-4.595l-4.764-5.292-5.434 5.292H60.75Z"/><path fill="#000" d="M88.832 8.8c6.001 0 9.61 3.005 9.61 7.2s-3.609 7.2-9.61 7.2c-6.001 0-9.59-3.005-9.59-7.2s3.589-7.2 9.59-7.2Zm0 2.692c-3.61 0-6.27 1.816-6.27 4.508s2.66 4.508 6.27 4.508c3.63 0 6.29-1.816 6.29-4.508s-2.66-4.508-6.29-4.508ZM110.404 8.8c4.807 0 7.703 2.667 7.703 7.178 0 4.554-2.875 7.222-7.661 7.222h-9.739V8.8h9.697Zm4.303 7.178c0-2.82-1.679-4.38-4.723-4.38h-5.982v8.804h5.982c3.044 0 4.723-1.583 4.723-4.424Zm14.298 7.222c-5.061 0-8.9-2.297-8.9-6.53V8.8h3.312v7.55c0 2.617 2.72 3.83 5.588 3.83 2.89 0 5.61-1.192 5.61-3.83V8.8h3.29v7.87c0 4.233-3.817 6.53-8.9 6.53Zm18.169 0c-2.719 0-5.651-.501-7.733-1.44l1.084-2.672c1.869.856 4.44 1.399 6.755 1.399 2.656 0 5.141-.564 5.141-1.565 0-.73-.786-1.044-2.422-1.294l-4.631-.501c-3.569-.48-5.311-1.711-5.311-3.882 0-2.796 2.953-4.445 7.287-4.445 2.613 0 6.203.48 8.051 1.315l-1.083 2.546c-1.827-.752-4.929-1.127-7.117-1.127-2.252 0-3.739.521-3.739 1.481 0 .668.744 1.002 2.656 1.274l4.503.5c3.442.48 5.226 1.65 5.226 3.924 0 2.88-3.781 4.487-8.667 4.487Z"/><defs><linearGradient id="a" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="b" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="c" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="d" x1="27.4" x2="18.272" y1="34.2" y2="-3.514" gradientUnits="userSpaceOnUse"><stop stop-color="#0B46F9"/><stop offset="1" stop-color="#BBFBE0"/></linearGradient><linearGradient id="f" x1="2.4" x2="18.2" y1="7.2" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".12" stop-color="#8952FF" stop-opacity=".87"/><stop offset="1" stop-color="#DABDFF" stop-opacity="0"/></linearGradient></defs></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(o, {
                          className: "framer-17u7b1w-container",
                          children: e(J, {
                            height: "100%",
                            id: "OK6Ggr2Mg",
                            layoutId: "OK6Ggr2Mg",
                            width: "100%",
                          }),
                        }),
                        e(h, {
                          href: "https://phantom.app/",
                          children: e(a.a, {
                            className: "framer-1m206e1 framer-lux5qc",
                            "data-framer-name": "Phantom Logo",
                            name: "Phantom Logo",
                            children: e(s, {
                              className: "framer-37b9ki",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 224,
                              intrinsicWidth: 1139,
                              name: "graphic",
                              svg: '<svg width="1139" height="224" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.83 224c34.325 0 60.121-29.853 75.515-53.443-1.872 5.219-2.912 10.438-2.912 15.449 0 13.778 7.905 23.59 23.508 23.59 21.427 0 44.311-18.789 56.169-39.039-.832 2.923-1.248 5.637-1.248 8.142 0 9.603 5.409 15.657 16.434 15.657 34.742 0 69.692-61.584 69.692-115.444C268.988 36.95 247.768 0 194.512 0 100.896 0 0 114.401 0 188.302 0 217.32 15.602 224 31.83 224ZM162.265 74.319c0-10.438 5.825-17.745 14.355-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.53 0-14.355-7.515-14.355-17.953Zm44.52 0c0-10.438 5.825-17.745 14.354-17.745 8.321 0 14.146 7.307 14.146 17.745s-5.825 17.953-14.146 17.953c-8.529 0-14.354-7.515-14.354-17.953Zm103.803 126.926h31.205v-30.688c0-14.404-1.248-19.832-8.529-34.445l3.952-2.088c10.61 24.843 25.589 33.819 40.983 33.819 24.756 0 44.519-21.711 44.519-55.321 0-32.15-18.099-55.74-44.103-55.74-15.394 0-30.789 8.769-41.399 33.82l-3.952-2.088c4.993-10.02 8.529-19.414 8.529-28.391h-31.205v141.122Zm31.205-88.932c0-13.778 10.402-29.018 25.796-29.018 12.482 0 22.676 10.23 22.676 28.809 0 18.371-9.778 29.227-22.884 29.227-14.562 0-25.588-14.822-25.588-29.018Zm92.315 52.19h31.205v-36.742c0-25.886 9.154-44.257 26.212-44.257 10.818 0 14.147 7.307 14.147 25.469v55.53h31.205v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.942 34.654l-3.953-2.087c5.409-11.691 6.865-18.789 6.865-29.227V24.008h-31.205v140.495Zm148.374 3.34c20.179 0 32.037-13.36 40.982-30.479l3.745 1.879c-3.953 8.142-7.697 17.536-7.697 25.26h30.581V107.72c0-33.819-14.147-50.937-47.224-50.937-32.453 0-48.472 16.283-51.592 33.401l29.957 5.22c1.04-8.977 8.321-15.031 19.971-15.031s18.307 5.845 18.307 12.943-6.865 10.438-25.172 10.647c-27.045.417-47.016 10.229-47.016 31.105 0 17.118 13.522 32.775 35.158 32.775Zm-4.161-34.863c0-16.492 26.212-5.01 40.567-17.744v3.757c0 14.822-13.106 25.678-26.213 25.678-6.865 0-14.354-2.923-14.354-11.691Zm84.137 31.523h31.205v-36.742c0-25.886 9.153-44.257 26.212-44.257 10.818 0 14.146 7.307 14.146 25.469v55.53h31.206v-60.54c0-32.984-11.858-47.18-34.534-47.18-23.3 0-30.997 15.657-39.943 34.654l-3.952-2.087c5.409-11.691 6.865-18.789 6.865-29.227h-31.205v104.38Zm185.883.418v-25.887c-6.657 2.297-25.172 6.263-25.172-8.976V85.174h24.964V60.123h-24.964V32.149l-31.413 9.394v18.58h-18.723v25.051h18.723l.208 47.389c0 34.863 30.997 39.873 56.377 32.358Zm63.387 2.922c31.621 0 55.753-24.216 55.753-55.739 0-31.314-24.132-55.321-55.753-55.321s-55.961 24.007-55.961 55.321c0 31.523 24.34 55.739 55.961 55.739Zm-23.716-55.53c0-17.327 9.778-29.435 23.716-29.435s23.508 12.108 23.508 29.435c0 17.327-9.57 29.435-23.508 29.435-13.938 0-23.716-12.108-23.716-29.435Zm89.138 52.19h31.2v-36.742c0-26.93 8.53-44.257 22.26-44.257 8.95 0 11.86 7.098 11.86 25.469v55.53h31.21v-36.742c0-25.26 9.15-44.257 22.26-44.257 8.73 0 11.85 8.142 11.85 25.469v55.53H1139v-60.54c0-33.193-10.82-47.18-32.04-47.18-22.05 0-29.95 15.657-37.65 34.863l-3.75-1.879c7.29-21.92-8.53-32.984-24.13-32.984-20.59 0-28.08 15.657-36.4 34.654l-3.75-2.087c5.2-11.691 7.07-18.789 7.07-29.227h-31.2v104.38Z" fill="#AB9FF2"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(a.div, {
                          className: "framer-ei98th",
                          "data-framer-name": "WalletConnect logo",
                          name: "WalletConnect logo",
                          children: e(s, {
                            className: "framer-ouukhz",
                            "data-framer-name": "graphic",
                            layout: "position",
                            name: "graphic",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 163 25.695"><g id="ss33272303_1"><path d="M 0 0 L 162.68 0 L 162.68 25.695 L 0 25.695 Z" fill="transparent"></path><path d="M 9.803 7.274 C 14.652 2.529 22.513 2.529 27.362 7.274 L 27.945 7.845 C 28.062 7.958 28.127 8.113 28.127 8.274 C 28.127 8.436 28.062 8.591 27.945 8.704 L 25.949 10.658 C 25.827 10.776 25.632 10.776 25.51 10.658 L 24.707 9.872 C 21.325 6.562 15.841 6.562 12.458 9.872 L 11.598 10.713 C 11.476 10.832 11.281 10.832 11.159 10.713 L 9.163 8.759 C 9.046 8.647 8.981 8.492 8.981 8.33 C 8.981 8.168 9.046 8.013 9.163 7.9 Z M 31.49 11.314 L 33.266 13.053 C 33.383 13.166 33.448 13.321 33.448 13.482 C 33.448 13.644 33.383 13.799 33.266 13.912 L 25.256 21.752 C 25.012 21.99 24.622 21.99 24.378 21.752 L 18.693 16.188 C 18.632 16.128 18.534 16.128 18.473 16.188 L 12.788 21.752 C 12.543 21.99 12.154 21.99 11.909 21.752 L 3.898 13.912 C 3.782 13.799 3.716 13.644 3.716 13.482 C 3.716 13.321 3.782 13.166 3.898 13.053 L 5.675 11.314 C 5.92 11.077 6.308 11.077 6.553 11.314 L 12.238 16.878 C 12.299 16.938 12.397 16.938 12.458 16.878 L 18.143 11.314 C 18.387 11.076 18.777 11.076 19.021 11.314 L 24.707 16.878 C 24.768 16.938 24.866 16.938 24.927 16.878 L 30.612 11.314 C 30.856 11.076 31.246 11.076 31.49 11.314 Z M 44.133 19.223 L 46.279 10.639 C 46.406 10.165 46.515 9.656 46.661 8.857 C 46.77 9.656 46.897 10.165 46.988 10.639 L 48.843 19.223 L 52.681 19.223 L 55.918 6.492 L 52.971 6.492 L 51.189 14.313 C 51.012 15.057 50.873 15.809 50.772 16.567 C 50.626 15.713 50.48 15.076 50.316 14.33 L 48.588 6.492 L 44.733 6.492 L 42.859 14.33 C 42.692 15.071 42.546 15.817 42.423 16.567 C 42.3 15.817 42.155 15.071 41.987 14.33 L 40.241 6.492 L 37.167 6.492 L 40.386 19.223 Z M 58.115 19.55 C 59.57 19.55 60.497 18.95 60.97 18.077 C 60.915 18.35 60.898 18.623 60.898 18.896 L 60.898 19.223 L 63.335 19.223 L 63.335 13.967 C 63.335 11.457 62.189 10.002 59.388 10.002 C 56.969 10.002 55.387 11.348 55.242 13.203 L 57.916 13.203 C 58.006 12.384 58.588 11.894 59.479 11.894 C 60.316 11.894 60.77 12.366 60.77 12.912 C 60.77 13.312 60.534 13.548 59.824 13.639 L 58.552 13.785 C 56.66 14.021 55.042 14.713 55.042 16.713 C 55.042 18.531 56.551 19.55 58.115 19.55 Z M 58.934 17.677 C 58.224 17.677 57.697 17.277 57.697 16.585 C 57.697 15.913 58.297 15.585 59.207 15.422 L 59.825 15.312 C 60.352 15.203 60.643 15.112 60.825 14.949 L 60.825 15.785 C 60.825 16.913 60.006 17.677 58.933 17.677 Z M 64.602 6.492 L 64.602 19.223 L 67.239 19.223 L 67.239 6.492 Z M 68.764 6.492 L 68.764 19.223 L 71.401 19.223 L 71.401 6.492 Z M 77.158 19.55 C 79.668 19.55 81.286 18.132 81.468 16.277 L 78.813 16.277 C 78.685 17.095 77.993 17.549 77.158 17.549 C 76.03 17.549 75.211 16.64 75.194 15.385 L 81.522 15.385 L 81.522 14.876 C 81.522 11.93 79.904 10.002 77.103 10.002 C 74.412 10.002 72.52 11.893 72.52 14.749 C 72.52 17.84 74.466 19.55 77.158 19.55 Z M 75.174 13.657 C 75.284 12.639 76.03 11.893 77.085 11.893 C 78.104 11.893 78.812 12.602 78.831 13.657 L 75.175 13.657 Z M 87.104 19.404 C 87.686 19.404 88.25 19.313 88.504 19.241 L 88.504 17.239 C 88.294 17.276 88.081 17.294 87.867 17.294 C 86.904 17.294 86.559 16.748 86.559 15.857 L 86.559 12.366 L 88.704 12.366 L 88.704 10.31 L 86.559 10.31 L 86.559 7.146 L 83.939 7.146 L 83.939 10.31 L 82.011 10.31 L 82.011 12.366 L 83.939 12.366 L 83.939 16.221 C 83.939 18.331 84.994 19.403 87.104 19.403 Z M 96.005 19.55 C 99.607 19.55 101.789 17.44 102.062 14.403 L 99.207 14.403 C 98.988 16.058 97.824 17.186 96.115 17.186 C 94.096 17.186 92.677 15.549 92.677 12.785 C 92.677 10.075 94.151 8.529 96.169 8.529 C 97.897 8.529 98.879 9.584 99.079 11.13 L 102.007 11.13 C 101.716 7.965 99.388 6.164 96.188 6.164 C 92.532 6.164 89.731 8.637 89.731 12.785 C 89.731 17.076 92.187 19.55 96.005 19.55 Z M 107.779 19.55 C 110.525 19.55 112.472 17.822 112.472 14.803 C 112.472 11.839 110.525 10.002 107.779 10.002 C 105.051 10.002 103.105 11.839 103.105 14.803 C 103.105 17.822 105.033 19.55 107.779 19.55 Z M 107.779 17.513 C 106.56 17.513 105.778 16.513 105.778 14.803 C 105.778 13.058 106.597 12.076 107.779 12.076 C 108.98 12.076 109.798 13.058 109.798 14.803 C 109.798 16.514 108.997 17.513 107.779 17.513 Z M 116.148 19.223 L 116.148 14.004 C 116.148 12.894 116.839 12.076 117.821 12.076 C 118.748 12.076 119.294 12.785 119.294 13.967 L 119.294 19.223 L 121.931 19.223 L 121.931 13.585 C 121.931 11.439 120.804 10.002 118.784 10.002 C 117.384 10.002 116.53 10.674 116.075 11.475 C 116.122 11.205 116.146 10.931 116.148 10.656 L 116.148 10.311 L 113.511 10.311 L 113.511 19.223 Z M 126.146 19.223 L 126.146 14.004 C 126.146 12.894 126.836 12.076 127.818 12.076 C 128.747 12.076 129.292 12.785 129.292 13.967 L 129.292 19.223 L 131.929 19.223 L 131.929 13.585 C 131.929 11.439 130.801 10.002 128.783 10.002 C 127.382 10.002 126.527 10.674 126.073 11.475 C 126.127 11.147 126.146 10.893 126.146 10.656 L 126.146 10.311 L 123.508 10.311 L 123.508 19.223 Z M 137.603 19.55 C 140.113 19.55 141.731 18.132 141.914 16.277 L 139.258 16.277 C 139.131 17.095 138.44 17.549 137.603 17.549 C 136.475 17.549 135.657 16.64 135.639 15.385 L 141.968 15.385 L 141.968 14.876 C 141.968 11.93 140.349 10.002 137.549 10.002 C 134.857 10.002 132.965 11.893 132.965 14.749 C 132.965 17.84 134.912 19.55 137.603 19.55 Z M 135.621 13.657 C 135.73 12.639 136.475 11.893 137.53 11.893 C 138.548 11.893 139.258 12.602 139.276 13.657 Z M 147.631 19.55 C 150.395 19.55 151.905 18.041 152.195 15.695 L 149.559 15.695 C 149.467 16.677 148.903 17.513 147.721 17.513 C 146.521 17.513 145.703 16.404 145.703 14.767 C 145.703 12.985 146.649 12.076 147.776 12.076 C 148.886 12.076 149.431 12.875 149.504 13.803 L 152.141 13.803 C 151.941 11.639 150.467 10.002 147.757 10.002 C 145.121 10.002 143.029 11.748 143.029 14.767 C 143.029 17.749 144.793 19.55 147.631 19.55 Z M 157.9 19.404 C 158.482 19.404 159.045 19.313 159.3 19.241 L 159.3 17.239 C 159.09 17.276 158.877 17.294 158.663 17.294 C 157.7 17.294 157.354 16.748 157.354 15.857 L 157.354 12.366 L 159.5 12.366 L 159.5 10.31 L 157.354 10.31 L 157.354 7.146 L 154.735 7.146 L 154.735 10.31 L 152.807 10.31 L 152.807 12.366 L 154.735 12.366 L 154.735 16.221 C 154.735 18.331 155.789 19.403 157.9 19.403 Z" fill="rgb(0,0,0)"></path></g></svg>',
                            svgContentId: 33272303,
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          href: "https://brave.com/wallet/",
                          children: e(a.a, {
                            className: "framer-150hodz framer-lux5qc",
                            "data-framer-name": "Brave Logo",
                            name: "Brave Logo",
                            children: e(s, {
                              className: "framer-1tvcox4",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 59,
                              intrinsicWidth: 188,
                              name: "graphic",
                              svg: '<svg width="188" height="59" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="50.706%" x2="100%" y2="50.706%" id="a"><stop stop-color="#F50" offset="0%"/><stop stop-color="#F50" offset="40.988%"/><stop stop-color="#FF2000" offset="58.198%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><linearGradient x1="2.148%" y1="50.706%" x2="100%" y2="50.706%" id="b"><stop stop-color="#FF452A" offset="0%"/><stop stop-color="#FF2000" offset="100%"/></linearGradient><path d="M38.184 5.781 33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87c0 0 5.856-.538 7.868 2.797 0 0 5.43 1.056 6.161 1.056.732 0 2.318-.621 3.782-1.118 1.464-.497 2.44-.501 2.44-.501s.976.004 2.44.5c1.464.498 3.05 1.12 3.782 1.12.732 0 6.16-1.057 6.16-1.057C38.794 6.113 44.65 6.65 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87" id="c"/></defs><g fill="none" fill-rule="evenodd"><path d="M62.66 31.624V11.585h1.886c1.536 0 2.782 1.266 2.782 2.828v8.91c3.022-2.741 5.592-3.838 9.017-3.909 6.57-.136 12.272 4.824 12.814 11.481.647 7.954-5.043 13.94-12.455 13.94-8.138 0-14.044-5.13-14.044-13.211Zm4.59 1.573c.46 4.14 4.35 7.56 8.452 7.626 5.343.083 8.985-3.457 8.985-8.694 0-5.237-3.56-8.695-8.753-8.695-5.552-.012-9.315 4.087-8.684 9.763Zm29.696-13.282v3.57c2.937-3.313 4.676-4.203 8.113-4.203 1 0 1.999.083 2.986.244v4.74a11.888 11.888 0 0 0-3.234-.438c-2.489 0-4.578.828-6.11 2.393-1.344 1.37-1.743 2.443-1.743 4.596v13.199H92.12v-24.1h4.826Zm12.247 7.97c.249-2.347.697-3.618 1.69-4.84 1.992-2.484 5.577-3.763 10.651-3.763 4.033 0 6.97.637 9.01 2.004 1.694 1.122 2.39 2.786 2.39 5.717v10.703c0 2.347.6 3.175 2.24 3.13a9.809 9.809 0 0 0 1.096-.1v3.226a7.078 7.078 0 0 1-2.537.389c-3.034 0-4.427-.927-5.372-3.619-2.986 2.787-6.073 3.958-10.5 3.958-5.922 0-9.556-2.736-9.556-7.187-.025-2.538 1.443-4.846 3.731-5.863 1.792-.782 2.888-1.026 8.012-1.565 4.378-.438 5.128-.538 6.37-.931 1.344-.439 1.943-1.172 1.943-2.393 0-2.592-2.139-3.764-6.619-3.764-4.236 0-6.419.853-7.295 3.031a2.889 2.889 0 0 1-2.667 1.855l-2.587.012Zm19.143 4.107a46.702 46.702 0 0 1-9.408 1.76c-4.33.439-5.674 1.271-5.674 3.47 0 2.442 1.992 3.726 5.922 3.726 3.234 0 5.674-.828 7.417-2.443 1.393-1.32 1.743-2.248 1.743-4.554v-1.959Zm19.615 12.02h-1.246a2.847 2.847 0 0 1-2.582-1.632l-10.439-22.465h2.9a4.26 4.26 0 0 1 3.922 2.555l6.965 16.147 7.197-16.21a4.26 4.26 0 0 1 3.902-2.508h2.635L150.52 42.405a2.847 2.847 0 0 1-2.57 1.607Zm16.524-10.653c.497 4.645 4.073 7.527 9.405 7.527 3.026 0 5.295-.915 6.7-2.741a4.292 4.292 0 0 1 3.38-1.656h2.807c-2.444 5.473-6.819 8.164-13.34 8.164-8.145 0-13.636-5.034-13.636-12.561s5.625-12.806 13.739-12.806c5.869 0 10.59 2.687 12.491 7.187.847 2.07 1.194 3.909 1.194 6.89l-22.74-.004Zm17.815-3.727c-1.095-4.252-4.33-6.649-8.81-6.649s-7.714 2.397-8.858 6.65h17.668Z" fill="#3B3E4F"/><g transform="translate(.6)"><path d="m47.09 13.985 1.342-3.356S46.724 8.764 44.65 6.65c-2.074-2.113-6.466-.87-6.466-.87L33.183 0H15.615l-5.001 5.781s-4.392-1.243-6.466.87S.366 10.63.366 10.63l1.342 3.356L0 18.956s5.023 19.384 5.612 21.75c1.159 4.662 1.952 6.464 5.246 8.825 3.293 2.362 9.271 6.464 10.247 7.085.976.621 2.196 1.68 3.294 1.68 1.098 0 2.318-1.059 3.294-1.68s6.953-4.723 10.247-7.085c3.294-2.361 4.087-4.163 5.246-8.824.589-2.367 5.612-21.75 5.612-21.75l-1.708-4.972Z" fill="url(#a)"/><path d="M24.399 36.279c.334 0 2.477.77 4.196 1.677 1.72.906 2.965 1.547 3.363 1.8.399.255.156.734-.207.995s-5.238 4.107-5.71 4.532c-.474.426-1.17 1.128-1.642 1.128-.473 0-1.168-.702-1.641-1.128-.474-.425-5.348-4.27-5.711-4.532-.363-.261-.606-.74-.208-.994.399-.254 1.645-.895 3.364-1.801 1.719-.907 3.861-1.677 4.196-1.677Zm.026-27.393c.164.004 1.09.05 2.414.5 1.464.497 3.05 1.118 3.782 1.118.732 0 6.16-1.056 6.16-1.056s6.434 7.923 6.434 9.617c0 1.693-.81 2.14-1.623 3.02l-4.824 5.22c-.456.493-1.407 1.242-.848 2.59.56 1.347 1.384 3.061.467 4.8-.917 1.74-2.488 2.9-3.494 2.708-1.007-.192-3.37-1.45-4.24-2.025-.869-.575-3.624-2.89-3.624-3.775 0-.886 2.848-2.476 3.374-2.837.526-.362 2.926-1.76 2.975-2.309.05-.549.03-.71-.678-2.066-.708-1.356-1.983-3.166-1.77-4.37.211-1.205 2.268-1.83 3.736-2.396 1.468-.564 4.294-1.63 4.647-1.797.353-.166.262-.324-.808-.427-1.07-.103-4.104-.514-5.472-.125-1.368.389-3.706.98-3.895 1.293-.19.314-.356.324-.162 1.405.194 1.082 1.195 6.27 1.293 7.192.097.922.287 1.53-.688 1.758-.976.227-2.618.622-3.182.622-.564 0-2.206-.395-3.182-.622-.975-.227-.785-.836-.688-1.758.097-.922 1.098-6.11 1.293-7.192.194-1.08.027-1.091-.162-1.405-.19-.313-2.527-.904-3.895-1.293-1.368-.389-4.403.022-5.472.125-1.07.103-1.161.261-.808.427.353.166 3.18 1.233 4.647 1.797 1.467.565 3.524 1.191 3.737 2.395.212 1.205-1.064 3.015-1.772 4.37-.708 1.357-.727 1.518-.677 2.067.049.549 2.448 1.947 2.975 2.309.526.36 3.373 1.951 3.373 2.837 0 .885-2.754 3.2-3.624 3.775-.869.575-3.233 1.833-4.239 2.025-1.006.192-2.577-.969-3.494-2.708-.917-1.739-.092-3.453.466-4.8.56-1.348-.39-2.097-.847-2.59l-4.824-5.22c-.814-.88-1.623-1.327-1.623-3.02 0-1.694 6.433-9.617 6.433-9.617s5.43 1.056 6.161 1.056c.732 0 2.318-.621 3.782-1.118 1.325-.45 2.25-.496 2.414-.5Z" fill="#FFF"/><use fill="url(#b)" xlink:href="#c"/></g></g></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(o, {
                          className: "framer-ymmltx-container",
                          children: e(K, {
                            height: "100%",
                            id: "S77MirgwH",
                            layoutId: "S77MirgwH",
                            width: "100%",
                          }),
                        }),
                        e(h, {
                          href: "https://www.frontier.xyz/",
                          children: e(a.a, {
                            className: "framer-bcel84 framer-lux5qc",
                            "data-framer-name": "Frontier Logo",
                            name: "Frontier Logo",
                            children: e(s, {
                              className: "framer-po6gjh",
                              "data-framer-name": "graphic",
                              layout: "position",
                              name: "graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 19"><g id="ss1508076913_1"><path d="M 0 0 L 110 0 L 110 18.75 L 0 18.75 Z" fill="transparent"></path><path d="M 12.609 0.165 L 12.511 0.435 L 12.188 1.299 L 11.974 1.856 C 10.346 6.033 9.079 8.015 7.732 8.015 C 7.044 8.033 6.38 7.751 5.902 7.238 L 5.73 7.077 C 5.303 6.668 5.122 6.567 4.71 6.567 C 4.496 6.567 4.112 6.851 3.627 7.516 C 2.977 8.47 2.424 9.491 1.977 10.564 L 1.923 10.69 L 7.7 10.69 L 6.981 12.24 L 1.586 12.24 L 1.586 18.587 L 0 18.587 L 0 0.164 L 12.609 0.164 Z M 10.362 1.712 L 1.586 1.712 L 1.586 7.85 C 2.638 5.96 3.637 5.012 4.713 5.012 C 5.443 4.987 6.151 5.282 6.662 5.823 L 6.84 5.99 C 7.238 6.372 7.392 6.459 7.734 6.459 C 8.109 6.46 9.108 4.817 10.362 1.712 Z M 19.251 0.165 L 20.515 0.165 C 23.065 0.165 26.498 1.382 26.498 6.285 C 26.498 9.195 25.045 11.048 23.222 11.874 L 23.065 11.943 L 26.499 18.587 L 24.602 18.587 L 21.399 12.369 C 21.268 12.392 21.136 12.402 21.003 12.401 L 17.245 12.401 L 17.245 18.587 L 15.579 18.587 L 15.579 0.197 L 16.672 0.18 C 17.56 0.17 18.382 0.166 19.251 0.165 Z M 20.418 1.744 L 17.245 1.744 L 17.245 10.855 L 20.613 10.855 C 22.77 10.855 24.863 9.375 24.863 6.217 C 24.863 3.03 23.015 1.798 20.576 1.745 Z M 102.16 0.165 L 104.019 0.165 C 106.57 0.165 110.003 1.382 110.003 6.285 C 110.003 9.195 108.55 11.048 106.727 11.875 L 106.57 11.943 L 110 18.586 L 108.104 18.586 L 104.899 12.368 C 104.769 12.391 104.637 12.401 104.504 12.401 L 100.748 12.401 L 100.748 18.586 L 99.08 18.586 L 99.08 0.197 L 100.02 0.182 C 100.772 0.173 101.46 0.17 102.16 0.166 Z M 103.919 1.742 L 100.746 1.742 L 100.746 10.855 L 104.114 10.855 C 106.272 10.855 108.364 9.374 108.364 6.216 C 108.364 3.028 106.517 1.796 104.077 1.744 Z M 37.386 0 C 41.055 0 44.726 2.87 44.837 8.799 L 44.837 9.671 C 44.837 15.791 41.11 18.75 37.383 18.75 C 33.681 18.75 30.043 15.88 29.932 9.951 L 29.932 9.079 C 29.932 2.961 33.626 0 37.386 0 Z M 37.386 1.546 C 34.588 1.546 31.666 3.677 31.569 8.815 L 31.569 9.671 C 31.569 14.967 34.544 17.171 37.356 17.171 C 40.184 17.171 43.108 15.041 43.205 9.938 L 43.205 9.079 C 43.205 3.75 40.23 1.546 37.386 1.546 Z M 72.108 18.587 L 72.108 1.744 L 76.096 1.744 L 76.815 0.164 L 65.764 0.164 L 65.764 1.744 L 70.472 1.744 L 70.472 18.587 L 72.107 18.587 Z M 81.72 18.585 L 81.72 0.067 L 80.085 0.067 L 80.085 18.585 Z M 95.091 18.587 L 95.811 17.04 L 87.016 17.04 L 87.016 10.625 L 92.869 10.625 L 93.588 9.079 L 87.016 9.079 L 87.016 1.712 L 95.091 1.712 L 95.81 0.164 L 85.416 0.164 L 85.416 18.587 Z M 62.578 18.611 L 62.578 0.23 L 60.878 0.23 L 60.878 14.361 C 60.878 14.361 60.177 13.589 59.669 12.972 L 48.836 0.154 L 48.517 0.154 L 48.517 18.599 L 50.171 18.61 L 50.171 4.344 C 50.171 4.344 50.918 5.282 51.425 5.899 L 62.259 18.611 L 62.579 18.611 Z" fill="rgb(0,0,0)"></path></g></svg>',
                              svgContentId: 1508076913,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e(h, {
                          href: "https://ultimate.app/",
                          children: e(a.a, {
                            className: "framer-1epvy10 framer-lux5qc",
                            "data-framer-name": "Ultimate Logo",
                            name: "Ultimate Logo",
                            children: e(s, {
                              className: "framer-ah5tf9",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 18,
                              intrinsicWidth: 130,
                              name: "graphic",
                              svg: '<svg width="130" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.615V.012h5.544v10.603c0 1.208 1.164 1.965 2.767 1.965 1.604 0 2.767-.757 2.767-1.965V.012h5.544v10.603c0 4.562-3.625 7.385-8.311 7.385C3.625 17.989 0 15.177 0 10.615ZM18.26 0h5.544v12.342h8.063v5.296H18.259V0Z" fill="#000"/><path d="M33.504 5.296h-5.16V0H44.22v5.296h-5.16v12.342h-5.545l-.011-12.342Zm12.354 7.058h3.274V5.296h-3.274V0h12.094v5.296h-3.275v7.058h3.275v5.296H45.858v-5.296ZM59.589 0h6.3l3.05 7.204h1.004L72.993 0h6.3v17.638H73.75v-7.08h-1.005l-1.762 4.28h-3.071l-1.762-4.28h-1.005v7.08H59.6L59.589 0ZM99.8 17.266v.372h-5.69l-1.028-3.749h-5.545l-1.028 3.75h-5.69v-.373L85.921 0h8.797L99.8 17.266Zm-7.882-7.668-1.106-4.054h-1.005L88.7 9.598h3.218Zm11.36-4.302h-5.16V0h15.876v5.296h-5.16v12.342h-5.545l-.011-12.342ZM115.62 0h13.856v5.217h-8.311v1.762h7.159v3.68h-7.159v1.762h8.311v5.217H115.62V0Z" fill="#000"/></svg>',
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                      speed: 100,
                      style: {
                        height: "100%",
                        maxWidth: "100%",
                        width: "100%",
                      },
                      width: "100%",
                    }),
                  }),
                R() &&
                  e("div", {
                    className:
                      "framer-7a50qs hidden-9i6d03 hidden-1dkgatv hidden-1d7sfhj",
                    "data-framer-name": "Empty Space",
                    name: "Empty Space",
                  }),
                t("div", {
                  className: "framer-1kxybj9",
                  "data-border": !0,
                  "data-framer-name": "Stats",
                  name: "Stats",
                  children: [
                    t("div", {
                      className: "framer-3gt785",
                      "data-framer-name": "Scams",
                      name: "Scams",
                      children: [
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1jj4zzi",
                                  "data-styles-preset": "Tgqb9W1vn",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(0, 0, 0)",
                                  },
                                  children: "2.8 million",
                                }),
                              }),
                            },
                            TCRVy9I_Z: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1jj4zzi",
                                  "data-styles-preset": "Tgqb9W1vn",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(0, 0, 0)",
                                  },
                                  children: "2.8 million",
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1jj4zzi",
                                "data-styles-preset": "Tgqb9W1vn",
                                style: {
                                  "--framer-text-color": "rgb(0, 0, 0)",
                                },
                                children: "2.8 million",
                              }),
                            }),
                            className: "framer-ognkec",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-cn7gzy",
                                  "data-styles-preset": "jZXz_8deL",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(99, 99, 99)",
                                  },
                                  children: "Scams prevented",
                                }),
                              }),
                            },
                            TCRVy9I_Z: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-cn7gzy",
                                  "data-styles-preset": "jZXz_8deL",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(99, 99, 99)",
                                  },
                                  children: "Scams prevented",
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1yvc2t",
                                "data-styles-preset": "MUgjgp0nh",
                                style: {
                                  "--framer-text-color": "rgb(99, 99, 99)",
                                },
                                children: "Scams prevented",
                              }),
                            }),
                            className: "framer-bqo4cc",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    t("div", {
                      className: "framer-1j5fl6s",
                      "data-framer-name": "Transactions",
                      name: "Transactions",
                      children: [
                        t("div", {
                          className: "framer-1mhcq7o",
                          children: [
                            e(c, {
                              breakpoint: n,
                              overrides: {
                                MITuyLXdw: {
                                  children: e(r, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1jj4zzi",
                                      "data-styles-preset": "Tgqb9W1vn",
                                      style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color": "rgb(0, 0, 0)",
                                      },
                                      children: "1.3",
                                    }),
                                  }),
                                },
                              },
                              children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    className: "framer-styles-preset-1jj4zzi",
                                    "data-styles-preset": "Tgqb9W1vn",
                                    style: {
                                      "--framer-text-color": "rgb(0, 0, 0)",
                                    },
                                    children: "1.3",
                                  }),
                                }),
                                className: "framer-1pxif2p",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(c, {
                              breakpoint: n,
                              overrides: {
                                MITuyLXdw: {
                                  children: e(r, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1jj4zzi",
                                      "data-styles-preset": "Tgqb9W1vn",
                                      style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color": "rgb(0, 0, 0)",
                                      },
                                      children: "billion",
                                    }),
                                  }),
                                },
                              },
                              children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    className: "framer-styles-preset-1jj4zzi",
                                    "data-styles-preset": "Tgqb9W1vn",
                                    style: {
                                      "--framer-text-color": "rgb(0, 0, 0)",
                                    },
                                    children: "billion",
                                  }),
                                }),
                                className: "framer-1d0iq16",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-cn7gzy",
                                  "data-styles-preset": "jZXz_8deL",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(99, 99, 99)",
                                  },
                                  children: "Transactions Scanned",
                                }),
                              }),
                            },
                            TCRVy9I_Z: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-cn7gzy",
                                  "data-styles-preset": "jZXz_8deL",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(99, 99, 99)",
                                  },
                                  children: "Transactions Scanned",
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1yvc2t",
                                "data-styles-preset": "MUgjgp0nh",
                                style: {
                                  "--framer-text-color": "rgb(99, 99, 99)",
                                },
                                children: "Transactions Scanned",
                              }),
                            }),
                            className: "framer-1nu97tu",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    t("div", {
                      className: "framer-u5n5hq",
                      "data-framer-name": "Assets",
                      id: Q,
                      name: "Assets",
                      ref: o1,
                      children: [
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1jj4zzi",
                                  "data-styles-preset": "Tgqb9W1vn",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(0, 0, 0)",
                                  },
                                  children: "Over $10 billion",
                                }),
                              }),
                            },
                            TCRVy9I_Z: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1jj4zzi",
                                  "data-styles-preset": "Tgqb9W1vn",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(0, 0, 0)",
                                  },
                                  children: "Over $10 billion",
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1jj4zzi",
                                "data-styles-preset": "Tgqb9W1vn",
                                style: {
                                  "--framer-text-color": "rgb(0, 0, 0)",
                                },
                                children: "Over $10 billion",
                              }),
                            }),
                            className: "framer-1aj2jun",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-cn7gzy",
                                  "data-styles-preset": "jZXz_8deL",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(99, 99, 99)",
                                  },
                                  children: "Assets protected",
                                }),
                              }),
                            },
                            TCRVy9I_Z: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-cn7gzy",
                                  "data-styles-preset": "jZXz_8deL",
                                  style: {
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(99, 99, 99)",
                                  },
                                  children: "Assets protected",
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1yvc2t",
                                "data-styles-preset": "MUgjgp0nh",
                                style: {
                                  "--framer-text-color": "rgb(99, 99, 99)",
                                },
                                children: "Assets protected",
                              }),
                            }),
                            className: "framer-1ajjm7t",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                t("div", {
                  className: "framer-1rzlosx",
                  "data-framer-name": "Features",
                  name: "Features",
                  children: [
                    t("div", {
                      className: "framer-1nbjzt0",
                      "data-framer-name": "Heading",
                      name: "Heading",
                      children: [
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: t("h3", {
                                  className: "framer-styles-preset-n1pvnt",
                                  "data-styles-preset": "TeBLYHcWA",
                                  children: [
                                    "The Complete Trust",
                                    e("br", {}),
                                    "& Safety Platform",
                                  ],
                                }),
                              }),
                              fonts: void 0,
                            },
                            MITuyLXdw: {
                              children: e(r, {
                                children: t("h3", {
                                  className: "framer-styles-preset-12lj5ox",
                                  "data-styles-preset": "YckFIlg3V",
                                  children: [
                                    "The Complete Trust",
                                    e("br", {}),
                                    "& Safety Platform",
                                  ],
                                }),
                              }),
                              fonts: void 0,
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: t("p", {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "44px",
                                  "--framer-font-weight": "700",
                                  "--framer-letter-spacing": "-0.5px",
                                  "--framer-line-height": "54px",
                                  "--framer-text-alignment": "center",
                                },
                                children: [
                                  "The Complete Trust",
                                  e("br", {}),
                                  "& Safety Platform",
                                ],
                              }),
                            }),
                            className: "framer-159w6j7",
                            "data-framer-name":
                              "The Complete Trust\u2028& Safety Platform",
                            fonts: ["GF;DM Sans-700"],
                            name: "The Complete Trust\u2028& Safety Platform",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            MITuyLXdw: {
                              children: t(r, {
                                children: [
                                  e("p", {
                                    style: {
                                      "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                      "--framer-font-family":
                                        '"DM Sans", "DM Sans Placeholder", sans-serif',
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "140%",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "Blowfish helps protect every",
                                  }),
                                  e("p", {
                                    style: {
                                      "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                      "--framer-font-family":
                                        '"DM Sans", "DM Sans Placeholder", sans-serif',
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "140%",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "interface in your wallet",
                                  }),
                                ],
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "700",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "140%",
                                  "--framer-text-alignment": "center",
                                },
                                children:
                                  "Blowfish helps protect every interface in your wallet",
                              }),
                            }),
                            className: "framer-12b3bul",
                            "data-framer-name":
                              "Blowfish helps protect every interface in your wallet",
                            fonts: ["GF;DM Sans-700"],
                            name: "Blowfish helps protect every interface in your wallet",
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    t("div", {
                      className: "framer-avgl0x",
                      "data-framer-name": "Products",
                      name: "Products",
                      children: [
                        t("div", {
                          className: "framer-n341ni",
                          "data-framer-name": "Product",
                          name: "Product",
                          children: [
                            e(c, {
                              breakpoint: n,
                              overrides: {
                                kwVNjqrRS: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 1376,
                                    intrinsicWidth: 1770,
                                    pixelHeight: 800,
                                    pixelWidth: 1029,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/XJf61rgAxKJbkrgJeHKHGv7R0s.png",
                                  },
                                },
                                MITuyLXdw: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 800,
                                    intrinsicWidth: 1029,
                                    pixelHeight: 800,
                                    pixelWidth: 1029,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/XJf61rgAxKJbkrgJeHKHGv7R0s.png",
                                  },
                                },
                                TCRVy9I_Z: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 1376,
                                    intrinsicWidth: 1770,
                                    loading: "lazy",
                                    pixelHeight: 800,
                                    pixelWidth: 1029,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/XJf61rgAxKJbkrgJeHKHGv7R0s.png",
                                  },
                                },
                              },
                              children: e(d, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1376,
                                  intrinsicWidth: 1770,
                                  loading: "lazy",
                                  pixelHeight: 1376,
                                  pixelWidth: 1770,
                                  src: "./Blowfish - Proactive defense for web3 wallets_files/54H7bFbS5jNFgWB7lV3ADIY2b0w.png",
                                },
                                className: "framer-sf23mx",
                                "data-framer-name": "dapp-connections",
                                name: "dapp-connections",
                              }),
                            }),
                            t("div", {
                              className: "framer-mnlz2",
                              "data-framer-name": "Description",
                              name: "Description",
                              children: [
                                e(s, {
                                  className: "framer-8dyl26",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 113,
                                  intrinsicWidth: 112,
                                  name: "graphic",
                                  svg: '<svg width="112" height="113" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><g clip-path="url(#b)"><rect x="8" y="8.5" width="80" height="80" rx="16" fill="#fff" fill-opacity=".24" shape-rendering="crispEdges"/><g filter="url(#c)"><rect x="4" y="4.5" width="48" height="48" rx="24" fill="#ADE3A8" fill-opacity=".24"/></g><g filter="url(#d)"><rect x="44" y="44.5" width="48" height="48" rx="24" fill="#F19978" fill-opacity=".24"/></g><g filter="url(#e)"><path fill-rule="evenodd" clip-rule="evenodd" d="M43.06 29.56c-.9 2.64-1.54 5.38-2.04 8.12 4.64-.52 9.32-.52 13.96 0-.5-2.74-1.14-5.46-2.04-8.12-.028-.11-.036-.202-.045-.3a4.263 4.263 0 0 0-.015-.14c-1.56-.38-3.2-.62-4.88-.62-1.7 0-3.32.24-4.9.62a1.6 1.6 0 0 0-.011.177c-.003.085-.005.167-.029.263ZM58.4 38.1c2.58.44 5.12 1.06 7.64 1.82a20.104 20.104 0 0 0-9.46-9.46c.78 2.5 1.4 5.06 1.82 7.64ZM39.1 66.36c.03 0 .065-.01.1-.02s.07-.02.1-.02c-.72-2.44-1.24-4.94-1.68-7.46-2.5-.42-5.02-.96-7.46-1.68 0 .03-.01.065-.02.1a.393.393 0 0 0-.02.1c1.94 3.88 5.1 7.06 8.98 8.98Zm-1.46-28.24c.42-2.52.94-5 1.66-7.44a.282.282 0 0 1-.1-.03c-.035-.015-.07-.03-.1-.03-3.98 1.98-7.2 5.28-9.14 9.3 2.54-.76 5.1-1.4 7.68-1.8Zm-.46 17.36c-2.76-.5-5.48-1.14-8.12-2.04-.096-.024-.178-.026-.263-.029a1.614 1.614 0 0 1-.177-.011c-.38-1.58-.62-3.2-.62-4.9 0-1.68.24-3.32.62-4.88l.14-.015c.098-.009.19-.017.3-.045 2.66-.88 5.36-1.54 8.12-2.04-.5 4.64-.5 9.32 0 13.96Zm22.01-8.555a8.139 8.139 0 0 1 4.217.518l1.4.56 3.176 1.273c.011-.257.017-.515.017-.776 0-1.68-.24-3.3-.62-4.88-.16 0-.28-.02-.44-.06-2.64-.9-5.38-1.54-8.12-2.04.201 1.797.325 3.6.37 5.405Zm-3.192 1.033a60.151 60.151 0 0 0-.471-6.985 60.08 60.08 0 0 0-15.054 0 60.08 60.08 0 0 0 0 15.054c2.65.334 5.312.491 7.974.471v-1.915c0-2.06 1.32-4.04 3.22-4.84l4.33-1.785Zm-7.526 11.8L48 59.76c-2.34 0-4.66-.18-6.98-.44.5 2.76 1.16 5.46 2.04 8.12.024.096.026.178.029.263.001.056.003.113.011.177 1.58.38 3.2.62 4.9.62 1.283 0 2.543-.14 3.762-.376l-1.435-2.281c-1.084-1.884-1.726-3.973-1.855-6.086Z" fill="#ADE3A8"/></g><g filter="url(#f)"><path d="M70 55.24v4.38c0 4.88-3.56 9.48-8.4 10.82-.34.08-.7.08-1.02 0-2.36-.64-4.44-2.08-5.9-3.94-1.58-1.96-2.5-4.38-2.5-6.88v-4.38c0-.84.62-1.76 1.38-2.08l5.56-2.28c1.26-.5 2.66-.5 3.92 0l2 .82 3.58 1.46c.76.32 1.38 1.24 1.38 2.08Z" fill="#FFCAB6"/></g><g filter="url(#g)"><path d="m61.225 63.328 4.26-3.926a1.5 1.5 0 0 0 .08-2.112 1.514 1.514 0 0 0-2.12-.08l-3.2 2.95-.96-.957a1.513 1.513 0 0 0-2.12 0 1.5 1.5 0 0 0 0 2.112l1.98 1.973c.3.299.68.438 1.06.438.36 0 .74-.14 1.02-.398Z" fill="#fff"/></g></g><rect x="8.5" y="9" width="79" height="79" rx="15.5" stroke="#fff" stroke-opacity=".56" shape-rendering="crispEdges"/></g><defs><filter id="a" x="-8" y="-7.5" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_671_1087"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="8" dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.543909 0 0 0 0 0.543909 0 0 0 0 0.543909 0 0 0 0.16 0"/><feBlend in2="effect1_backgroundBlur_671_1087" result="effect2_dropShadow_671_1087"/><feBlend in="SourceGraphic" in2="effect2_dropShadow_671_1087" result="shape"/></filter><filter id="c" x="-20" y="-19.5" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_671_1087"/></filter><filter id="d" x="20" y="20.5" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_671_1087"/></filter><filter id="e" x="24" y="24.5" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.384314 0 0 0 0 0.643137 0 0 0 0 0.360784 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_671_1087"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_671_1087" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-2" dy="-2"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.38475 0 0 0 0 0.645085 0 0 0 0 0.360645 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow_671_1087"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.937255 0 0 0 0 0.94902 0 0 0 0 0.941176 0 0 0 0.16 0"/><feBlend in2="effect2_innerShadow_671_1087" result="effect3_innerShadow_671_1087"/></filter><filter id="f" x="48.18" y="46.505" width="33.82" height="35.995" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 0.358135 0 0 0 0 0.126351 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_671_1087"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_671_1087" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-2" dy="-2"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.967253 0 0 0 0 0.441228 0 0 0 0 0.251275 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow_671_1087"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.937255 0 0 0 0 0.94902 0 0 0 0 0.941176 0 0 0 0.16 0"/><feBlend in2="effect2_innerShadow_671_1087" result="effect3_innerShadow_671_1087"/></filter><filter id="g" x="52.73" y="52.815" width="25.231" height="22.911" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.384314 0 0 0 0 0.643137 0 0 0 0 0.360784 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_671_1087"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_671_1087" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-1" dy="-1"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.968627 0 0 0 0 0.443137 0 0 0 0 0.25098 0 0 0 0.4 0"/><feBlend in2="shape" result="effect2_innerShadow_671_1087"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.937255 0 0 0 0 0.94902 0 0 0 0 0.941176 0 0 0 0.4 0"/><feBlend in2="effect2_innerShadow_671_1087" result="effect3_innerShadow_671_1087"/></filter><clipPath id="b"><rect x="8" y="8.5" width="80" height="80" rx="16" fill="#fff"/></clipPath></defs></svg>',
                                  withExternalLayout: !0,
                                }),
                                t("div", {
                                  className: "framer-wgscim",
                                  "data-framer-name": "Text-Content",
                                  name: "Text-Content",
                                  children: [
                                    t("div", {
                                      className: "framer-1hzpjje",
                                      "data-framer-name": "Content",
                                      name: "Content",
                                      children: [
                                        e(c, {
                                          breakpoint: n,
                                          overrides: {
                                            kwVNjqrRS: {
                                              children: e(r, {
                                                children: e("h3", {
                                                  className:
                                                    "framer-styles-preset-i3vyu2",
                                                  "data-styles-preset":
                                                    "sBwuW77e9",
                                                  children:
                                                    "Secure your Dapp Connections",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            MITuyLXdw: {
                                              children: e(r, {
                                                children: e("h3", {
                                                  className:
                                                    "framer-styles-preset-i3vyu2",
                                                  "data-styles-preset":
                                                    "sBwuW77e9",
                                                  children:
                                                    "Secure your Dapp Connections",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            TCRVy9I_Z: {
                                              children: e(r, {
                                                children: e("h3", {
                                                  className:
                                                    "framer-styles-preset-i3vyu2",
                                                  "data-styles-preset":
                                                    "sBwuW77e9",
                                                  children:
                                                    "Secure your Dapp Connections",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                          },
                                          children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7RE0gU2Fucy03MDA=",
                                                  "--framer-font-family":
                                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                                  "--framer-font-size": "44px",
                                                  "--framer-font-weight": "700",
                                                  "--framer-letter-spacing":
                                                    "-0.5px",
                                                  "--framer-line-height":
                                                    "54px",
                                                },
                                                children:
                                                  "Secure your Dapp Connections",
                                              }),
                                            }),
                                            className: "framer-1j0m8mm",
                                            "data-framer-name":
                                              "Secure your Dapp Connections",
                                            fonts: ["GF;DM Sans-700"],
                                            name: "Secure your Dapp Connections",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        e(c, {
                                          breakpoint: n,
                                          overrides: {
                                            kwVNjqrRS: {
                                              children: e(r, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-16ztncq",
                                                  "data-styles-preset":
                                                    "GWUyvY36O",
                                                  style: {
                                                    "--framer-text-alignment":
                                                      "left",
                                                  },
                                                  children:
                                                    "Alert users before they engage with harmful dapps with Dapp Security ",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            MITuyLXdw: {
                                              children: e(r, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-16ztncq",
                                                  "data-styles-preset":
                                                    "GWUyvY36O",
                                                  style: {
                                                    "--framer-text-alignment":
                                                      "left",
                                                  },
                                                  children:
                                                    "Alert users before they engage with harmful dapps with Dapp Security ",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            TCRVy9I_Z: {
                                              children: e(r, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-16ztncq",
                                                  "data-styles-preset":
                                                    "GWUyvY36O",
                                                  style: {
                                                    "--framer-text-alignment":
                                                      "left",
                                                  },
                                                  children:
                                                    "Alert users before they engage with harmful dapps with Dapp Security ",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                          },
                                          children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                                  "--framer-font-size": "20px",
                                                  "--framer-letter-spacing":
                                                    "-0.02em",
                                                  "--framer-line-height":
                                                    "140%",
                                                },
                                                children:
                                                  "Alert users before they engage with harmful dapps with Dapp Security ",
                                              }),
                                            }),
                                            className: "framer-1hscbq8",
                                            "data-framer-name":
                                              "Alert users before they engage with harmful dapps with Dapp Security",
                                            fonts: ["GF;DM Sans-regular"],
                                            name: "Alert users before they engage with harmful dapps with Dapp Security",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    e(o, {
                                      className: "framer-wehjly-container",
                                      whileHover: be,
                                      children: e(N1, {
                                        frDEA3RBK: "Learn More",
                                        height: "100%",
                                        id: "ZQDEjFhi_",
                                        layoutId: "ZQDEjFhi_",
                                        variant: "QIWiriWE8",
                                        width: "100%",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        t("div", {
                          className: "framer-eai1xf",
                          "data-framer-name": "Product",
                          name: "Product",
                          children: [
                            t("div", {
                              className: "framer-pljmza",
                              "data-framer-name": "Description",
                              name: "Description",
                              children: [
                                e(s, {
                                  className: "framer-ofc7wj",
                                  "data-framer-name": "graphic",
                                  fill: "black",
                                  intrinsicHeight: 112,
                                  intrinsicWidth: 112,
                                  name: "graphic",
                                  svg: '<svg width="112" height="112" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><g clip-path="url(#b)"><rect x="8" y="8" width="80" height="80" rx="16" fill="#fff" fill-opacity=".24" shape-rendering="crispEdges"/><g filter="url(#c)"><rect x="4" y="4" width="48" height="48" rx="24" fill="#ADE3A8" fill-opacity=".24"/></g><g filter="url(#d)"><rect x="44" y="44" width="48" height="48" rx="24" fill="#F19978" fill-opacity=".24"/></g><g filter="url(#e)"><path d="M35 51.059c-4.42 0-8 3.567-8 7.97 0 1.495.42 2.91 1.16 4.105A7.945 7.945 0 0 0 35 67c2.92 0 5.46-1.554 6.84-3.866A7.792 7.792 0 0 0 43 59.03c0-4.403-3.58-7.97-8-7.97Z" fill="#FFCAB6"/></g><g filter="url(#f)"><path d="m34.68 62.297 4.26-3.925a1.5 1.5 0 0 0 .08-2.112 1.514 1.514 0 0 0-2.12-.08l-3.2 2.949-.96-.956a1.513 1.513 0 0 0-2.12 0 1.5 1.5 0 0 0 0 2.112l1.98 1.973c.3.298.68.438 1.06.438.36 0 .74-.14 1.02-.399Z" fill="#fff"/></g><g filter="url(#g)"><path d="M59.5 29h-19c-5.7 0-9.5 3.786-9.5 9.465v8.887c0 .698.72 1.196 1.4 1.017.84-.2 1.7-.3 2.6-.3 5.72 0 10.44 4.624 10.96 10.223.04.558.5.996 1.04.996h1.1l8.46 5.62c1.24.837 2.94-.08 2.94-1.594v-4.026c2.84 0 5.22-.956 6.88-2.59 1.66-1.674 2.62-4.045 2.62-6.875V38.465C69 32.786 65.2 29 59.5 29Z" fill="#ADE3A8"/></g></g><rect x="8.5" y="8.5" width="79" height="79" rx="15.5" stroke="#fff" stroke-opacity=".56" shape-rendering="crispEdges"/></g><defs><filter id="a" x="-8" y="-8" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_671_1142"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="8" dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.543909 0 0 0 0 0.543909 0 0 0 0 0.543909 0 0 0 0.16 0"/><feBlend in2="effect1_backgroundBlur_671_1142" result="effect2_dropShadow_671_1142"/><feBlend in="SourceGraphic" in2="effect2_dropShadow_671_1142" result="shape"/></filter><filter id="c" x="-20" y="-20" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_671_1142"/></filter><filter id="d" x="20" y="20" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_671_1142"/></filter><filter id="e" x="23" y="47.059" width="32" height="31.941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 0.358135 0 0 0 0 0.126351 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_671_1142"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_671_1142" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-2" dy="-2"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.967253 0 0 0 0 0.441228 0 0 0 0 0.251275 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow_671_1142"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.937255 0 0 0 0 0.94902 0 0 0 0 0.941176 0 0 0 0.16 0"/><feBlend in2="effect2_innerShadow_671_1142" result="effect3_innerShadow_671_1142"/></filter><filter id="f" x="26.185" y="51.785" width="25.231" height="22.911" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.384314 0 0 0 0 0.643137 0 0 0 0 0.360784 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_671_1142"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_671_1142" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-1" dy="-1"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.968627 0 0 0 0 0.443137 0 0 0 0 0.25098 0 0 0 0.4 0"/><feBlend in2="shape" result="effect2_innerShadow_671_1142"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.937255 0 0 0 0 0.94902 0 0 0 0 0.941176 0 0 0 0.4 0"/><feBlend in2="effect2_innerShadow_671_1142" result="effect3_innerShadow_671_1142"/></filter><filter id="g" x="27" y="25" width="54" height="52.225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.384314 0 0 0 0 0.643137 0 0 0 0 0.360784 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_671_1142"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_671_1142" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-2" dy="-2"/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.38475 0 0 0 0 0.645085 0 0 0 0 0.360645 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow_671_1142"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.937255 0 0 0 0 0.94902 0 0 0 0 0.941176 0 0 0 0.16 0"/><feBlend in2="effect2_innerShadow_671_1142" result="effect3_innerShadow_671_1142"/></filter><clipPath id="b"><rect x="8" y="8" width="80" height="80" rx="16" fill="#fff"/></clipPath></defs></svg>',
                                  withExternalLayout: !0,
                                }),
                                t("div", {
                                  className: "framer-19xfc8p",
                                  "data-framer-name": "Text-Content",
                                  name: "Text-Content",
                                  children: [
                                    t("div", {
                                      className: "framer-9oxoxy",
                                      "data-framer-name": "Content",
                                      name: "Content",
                                      children: [
                                        e(c, {
                                          breakpoint: n,
                                          overrides: {
                                            kwVNjqrRS: {
                                              children: e(r, {
                                                children: e("h3", {
                                                  className:
                                                    "framer-styles-preset-i3vyu2",
                                                  "data-styles-preset":
                                                    "sBwuW77e9",
                                                  children:
                                                    "Upgrade Transaction & Message Signing",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            MITuyLXdw: {
                                              children: e(r, {
                                                children: e("h3", {
                                                  className:
                                                    "framer-styles-preset-i3vyu2",
                                                  "data-styles-preset":
                                                    "sBwuW77e9",
                                                  children:
                                                    "Upgrade Transaction & Message Signing",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            TCRVy9I_Z: {
                                              children: e(r, {
                                                children: e("h3", {
                                                  className:
                                                    "framer-styles-preset-i3vyu2",
                                                  "data-styles-preset":
                                                    "sBwuW77e9",
                                                  children:
                                                    "Upgrade Transaction & Message Signing",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                          },
                                          children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7RE0gU2Fucy03MDA=",
                                                  "--framer-font-family":
                                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                                  "--framer-font-size": "44px",
                                                  "--framer-font-weight": "700",
                                                  "--framer-letter-spacing":
                                                    "-0.5px",
                                                  "--framer-line-height":
                                                    "54px",
                                                },
                                                children:
                                                  "Upgrade Transaction & Message Signing",
                                              }),
                                            }),
                                            className: "framer-2l7h0c",
                                            "data-framer-name":
                                              "Upgrade Transaction & Message Signing",
                                            fonts: ["GF;DM Sans-700"],
                                            name: "Upgrade Transaction & Message Signing",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        e(c, {
                                          breakpoint: n,
                                          overrides: {
                                            kwVNjqrRS: {
                                              children: e(r, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-16ztncq",
                                                  "data-styles-preset":
                                                    "GWUyvY36O",
                                                  style: {
                                                    "--framer-text-alignment":
                                                      "left",
                                                  },
                                                  children:
                                                    "Simplify transactions & messages with previews. Automatically warn users about risks before they sign with Transaction Security.",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            MITuyLXdw: {
                                              children: e(r, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-16ztncq",
                                                  "data-styles-preset":
                                                    "GWUyvY36O",
                                                  style: {
                                                    "--framer-text-alignment":
                                                      "left",
                                                  },
                                                  children:
                                                    "Simplify transactions & messages with previews. Automatically warn users about risks before they sign with Transaction Security.",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                            TCRVy9I_Z: {
                                              children: e(r, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-16ztncq",
                                                  "data-styles-preset":
                                                    "GWUyvY36O",
                                                  style: {
                                                    "--framer-text-alignment":
                                                      "left",
                                                  },
                                                  children:
                                                    "Simplify transactions & messages with previews. Automatically warn users about risks before they sign with Transaction Security.",
                                                }),
                                              }),
                                              fonts: void 0,
                                            },
                                          },
                                          children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7RE0gU2Fucy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                                  "--framer-font-size": "20px",
                                                  "--framer-letter-spacing":
                                                    "-0.02em",
                                                  "--framer-line-height":
                                                    "140%",
                                                },
                                                children:
                                                  "Simplify transactions & messages with previews. Automatically warn users about risks before they sign with Transaction Security.",
                                              }),
                                            }),
                                            className: "framer-ve2fql",
                                            "data-framer-name":
                                              "Simplify transactions & messages with previews. Automatically warn users about risks before they sign with Transaction Security.",
                                            fonts: ["GF;DM Sans-regular"],
                                            name: "Simplify transactions & messages with previews. Automatically warn users about risks before they sign with Transaction Security.",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    e(o, {
                                      className: "framer-u5kpu8-container",
                                      whileHover: be,
                                      children: e(N1, {
                                        frDEA3RBK: "Learn More",
                                        height: "100%",
                                        id: "LOe_6uRf4",
                                        layoutId: "LOe_6uRf4",
                                        variant: "dJXajMr0F",
                                        width: "100%",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e(c, {
                              breakpoint: n,
                              overrides: {
                                kwVNjqrRS: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1356,
                                    intrinsicWidth: 1770,
                                    pixelHeight: 1356,
                                    pixelWidth: 1770,
                                    sizes: "277px",
                                    src: "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png",
                                    srcSet:
                                      "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png 1770w",
                                  },
                                },
                                MITuyLXdw: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 1356,
                                    intrinsicWidth: 1770,
                                    pixelHeight: 1356,
                                    pixelWidth: 1770,
                                    positionX: "center",
                                    positionY: "center",
                                    sizes: "1240px",
                                    src: "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png",
                                    srcSet:
                                      "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png 1770w",
                                  },
                                },
                                TCRVy9I_Z: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1356,
                                    intrinsicWidth: 1770,
                                    loading: "lazy",
                                    pixelHeight: 1356,
                                    pixelWidth: 1770,
                                    sizes: "332px",
                                    src: "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png",
                                    srcSet:
                                      "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png 1770w",
                                  },
                                },
                              },
                              children: e(d, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1356,
                                  intrinsicWidth: 1770,
                                  loading: "lazy",
                                  pixelHeight: 1356,
                                  pixelWidth: 1770,
                                  sizes: "590px",
                                  src: "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png",
                                  srcSet:
                                    "./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/SneFJhK0Ncmfpf0ke5b8Lal2dw.png 1770w",
                                },
                                className: "framer-bt6hvw",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t("div", {
                  className: "framer-dgq5k3",
                  "data-border": !0,
                  "data-framer-name": "Testimonials",
                  name: "Testimonials",
                  children: [
                    e("div", {
                      className: "framer-32vezk",
                      "data-framer-name": "Heading",
                      name: "Heading",
                      children: e(c, {
                        breakpoint: n,
                        overrides: {
                          kwVNjqrRS: {
                            "data-framer-appear-id": "zkegp",
                            animate: f("animate", "zkegp", O, "1dkgatv"),
                            children: e(r, {
                              children: e("h3", {
                                className: "framer-styles-preset-12lj5ox",
                                "data-styles-preset": "YckFIlg3V",
                                style: { "--framer-text-alignment": "left" },
                                children: "From our integrators",
                              }),
                            }),
                            fonts: void 0,
                            initial: f("initial", "zkegp", I, "1dkgatv"),
                            transformTemplate: v("zkegp", y),
                          },
                          MITuyLXdw: {
                            "data-framer-appear-id": "jgpduc",
                            animate: f("animate", "jgpduc", O, "1d7sfhj"),
                            children: e(r, {
                              children: t("h3", {
                                className: "framer-styles-preset-12lj5ox",
                                "data-styles-preset": "YckFIlg3V",
                                style: { "--framer-text-alignment": "left" },
                                children: [
                                  "From our ",
                                  e("br", {}),
                                  "integrators.",
                                ],
                              }),
                            }),
                            fonts: void 0,
                            initial: f("initial", "jgpduc", I, "1d7sfhj"),
                            transformTemplate: v("jgpduc", y),
                          },
                          TCRVy9I_Z: {
                            "data-framer-appear-id": "2m8d0i",
                            animate: f("animate", "2m8d0i", O, "9i6d03"),
                            children: e(r, {
                              children: e("h3", {
                                className: "framer-styles-preset-12lj5ox",
                                "data-styles-preset": "YckFIlg3V",
                                style: { "--framer-text-alignment": "left" },
                                children: "From our integrators",
                              }),
                            }),
                            fonts: void 0,
                            initial: f("initial", "2m8d0i", I, "9i6d03"),
                            transformTemplate: v("2m8d0i", y),
                          },
                        },
                        children: e(i, {
                          __fromCanvasComponent: !0,
                          animate: f("animate", "8q91zl", O, "72rtr7"),
                          children: e(r, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                "--framer-font-family":
                                  '"DM Sans", "DM Sans Placeholder", sans-serif',
                                "--framer-font-size": "44px",
                                "--framer-font-weight": "700",
                                "--framer-letter-spacing": "-0.5px",
                                "--framer-line-height": "54px",
                              },
                              children: "From our integrators",
                            }),
                          }),
                          className: "framer-8q91zl",
                          "data-framer-appear-id": "8q91zl",
                          "data-framer-name": "From our integrators.",
                          exit: We,
                          fonts: ["GF;DM Sans-700"],
                          initial: f("initial", "8q91zl", I, "72rtr7"),
                          name: "From our integrators.",
                          transformTemplate: v("8q91zl", y),
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    t("div", {
                      className: "framer-1kq2cg8",
                      "data-framer-name": "Slider-Wrapper",
                      name: "Slider-Wrapper",
                      children: [
                        Z1() &&
                          e(o, {
                            className: "framer-10ckuwp-container hidden-72rtr7",
                            children: e(y1, {
                              alignment: "center",
                              arrowOptions: {
                                arrowFill: "rgba(0, 0, 0, 0.2)",
                                arrowGap: 10,
                                arrowPadding: -62,
                                arrowPaddingBottom: 0,
                                arrowPaddingLeft: 0,
                                arrowPaddingRight: 0,
                                arrowPaddingTop: 0,
                                arrowPosition: "auto",
                                arrowRadius: 40,
                                arrowShouldFadeIn: !1,
                                arrowShouldSpace: !0,
                                arrowSize: 40,
                                showMouseControls: !1,
                              },
                              autoPlayControl: !1,
                              borderRadius: 0,
                              direction: "left",
                              dragControl: !0,
                              effectsOptions: {
                                effectsHover: !0,
                                effectsOpacity: 1,
                                effectsPerspective: 1200,
                                effectsRotate: 0,
                                effectsScale: 1,
                              },
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !1,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !1,
                              },
                              gap: 10,
                              height: "100%",
                              id: "Zvu7e22H1",
                              intervalControl: 5,
                              itemAmount: 1,
                              layoutId: "Zvu7e22H1",
                              padding: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingPerSide: !1,
                              paddingRight: 0,
                              paddingTop: 0,
                              progressOptions: {
                                dotsActiveOpacity: 1,
                                dotsBackground: "rgba(255, 255, 255, 0.2)",
                                dotsBlur: 0,
                                dotsFill: "rgb(0, 0, 0)",
                                dotsGap: 10,
                                dotsInset: -50,
                                dotSize: 10,
                                dotsOpacity: 0.5,
                                dotsPadding: 10,
                                dotsRadius: 50,
                                showProgressDots: !1,
                              },
                              slots: [
                                t(a.div, {
                                  className: "framer-12m1px8",
                                  "data-framer-name": "Wallet-Connect-Tab",
                                  name: "Wallet-Connect-Tab",
                                  children: [
                                    e(d, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 150,
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                      },
                                      className: "framer-1g6wuw4",
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-16ztncq",
                                          "data-styles-preset": "GWUyvY36O",
                                          style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(98, 98, 98)",
                                          },
                                          children:
                                            "Improved security UX in web3 is an important part of providing end-users a stress-free crypto experience. Blowfish\u2019s scam list, which we use for Verify API, is a big step in that direction. Blowfish\u2019s message and transaction simulation APIs offer awesome ways for wallets to provide a good signing UX. I look forward to the day when all wallets use transaction and message simulation!",
                                        }),
                                      }),
                                      className: "framer-7ok4sa",
                                      "data-framer-name":
                                        '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      id: F1,
                                      name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      ref: Re,
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                    t(a.div, {
                                      className: "framer-18hz0oy",
                                      children: [
                                        t(a.div, {
                                          className: "framer-qg4x05",
                                          children: [
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 828,
                                                intrinsicWidth: 883,
                                                pixelHeight: 828,
                                                pixelWidth: 883,
                                                sizes: "50px",
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/1U2fVGW6lIiIAzkvxfd8XoTYZb0.png",
                                                srcSet:
                                                  "./Blowfish - Proactive defense for web3 wallets_files/1U2fVGW6lIiIAzkvxfd8XoTYZb0.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/1U2fVGW6lIiIAzkvxfd8XoTYZb0.png 883w",
                                              },
                                              className: "framer-1tp932h",
                                              "data-framer-name": "image 2",
                                              name: "image 2",
                                            }),
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 792,
                                                intrinsicWidth: 612,
                                                pixelHeight: 792,
                                                pixelWidth: 612,
                                                sizes: "20px",
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/u56Ec8113B2vbPj31UZ0Law8co.png",
                                                srcSet:
                                                  "./Blowfish - Proactive defense for web3 wallets_files/u56Ec8113B2vbPj31UZ0Law8co.png 612w",
                                              },
                                              className: "framer-e3ezx1",
                                              "data-border": !0,
                                            }),
                                          ],
                                        }),
                                        t(a.div, {
                                          className: "framer-mh4tsy",
                                          children: [
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: t(r, {
                                                children: [
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "24px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: e("br", {
                                                      className:
                                                        "trailing-break",
                                                    }),
                                                  }),
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "20px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: "Derek Rein",
                                                  }),
                                                ],
                                              }),
                                              className: "framer-1wqag9r",
                                              "data-framer-name":
                                                "Francesco Agosti",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Francesco Agosti",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: e(r, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                    "--framer-font-family":
                                                      '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "18px",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "rgb(98, 98, 98)",
                                                  },
                                                  children:
                                                    "CTO, WalletConnect",
                                                }),
                                              }),
                                              className: "framer-12r1rjp",
                                              "data-framer-name": "Phantom CTO",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Phantom CTO",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t(a.div, {
                                  className: "framer-1ou9g74",
                                  "data-framer-name": "Family-Tab",
                                  name: "Family-Tab",
                                  children: [
                                    e(d, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 150,
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                      },
                                      className: "framer-11ohmih",
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-16ztncq",
                                          "data-styles-preset": "GWUyvY36O",
                                          style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(98, 98, 98)",
                                          },
                                          children:
                                            "Blowfish\u2019s expertise has been invaluable in safeguarding our users and enhancing Family\u2019s commitment to security. Their API is dependable, reliable, and straightforward to implement. We\u2019ve chosen to collaborate with Blowfish because we trust their ability to stay ahead of emerging threats, ensuring a safe experience for our users.",
                                        }),
                                      }),
                                      className: "framer-1a9qbgl",
                                      "data-framer-name":
                                        '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      id: Se,
                                      name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      ref: ze,
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                    t(a.div, {
                                      className: "framer-ej0ri3",
                                      children: [
                                        t(a.div, {
                                          className: "framer-oyukes",
                                          children: [
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 150,
                                                intrinsicWidth: 150,
                                                pixelHeight: 150,
                                                pixelWidth: 150,
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/AO0sCOQGM0W8eK72L5wWNVRANPE.png",
                                              },
                                              className: "framer-cqf5a7",
                                              "data-framer-name": "image 2",
                                              name: "image 2",
                                              transformTemplate: na,
                                            }),
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 400,
                                                intrinsicWidth: 400,
                                                pixelHeight: 400,
                                                pixelWidth: 400,
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/pu0iLFXULq4e6ta5jFeuEa55Ic.jpeg",
                                              },
                                              className: "framer-in1m2i",
                                              "data-border": !0,
                                            }),
                                          ],
                                        }),
                                        t(a.div, {
                                          className: "framer-16wlmn9",
                                          children: [
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: t(r, {
                                                children: [
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", sans-serif',
                                                      "--framer-font-size":
                                                        "24px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: e("br", {
                                                      className:
                                                        "trailing-break",
                                                    }),
                                                  }),
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", sans-serif',
                                                      "--framer-font-size":
                                                        "20px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: "Benji Taylor",
                                                  }),
                                                ],
                                              }),
                                              className: "framer-lnwc94",
                                              "data-framer-name":
                                                "Benji Taylor",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Benji Taylor",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: e(r, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                    "--framer-font-family":
                                                      '"GT Planar Medium", sans-serif',
                                                    "--framer-font-size":
                                                      "14px",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "rgb(98, 98, 98)",
                                                  },
                                                  children: "Founder, Family",
                                                }),
                                              }),
                                              className: "framer-xbfom3",
                                              "data-framer-name":
                                                "Founder, Family",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Founder, Family",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t(a.div, {
                                  className: "framer-mahbgu",
                                  "data-framer-name": "Phantom-Tab",
                                  name: "Phantom-Tab",
                                  children: [
                                    e(d, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 150,
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                      },
                                      className: "framer-pib5yy",
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-16ztncq",
                                          "data-styles-preset": "GWUyvY36O",
                                          style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(98, 98, 98)",
                                          },
                                          children:
                                            "Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers.",
                                        }),
                                      }),
                                      className: "framer-usq27i",
                                      "data-framer-name":
                                        '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      id: Te,
                                      name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      ref: Ve,
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                    t(a.div, {
                                      className: "framer-g9q1y",
                                      children: [
                                        t(a.div, {
                                          className: "framer-17exi9d",
                                          children: [
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/1Fo93P69o6mUYKs65MtLIpLCTEI.png",
                                              },
                                              className: "framer-j2t9cg",
                                              "data-framer-name": "image 2",
                                              name: "image 2",
                                            }),
                                            e(a.div, {
                                              className: "framer-gpw06p",
                                              "data-border": !0,
                                              children: e(s, {
                                                className: "framer-1v9jqzf",
                                                "data-framer-name": "Vector",
                                                fill: "rgba(0,0,0,1)",
                                                intrinsicHeight: 25,
                                                intrinsicWidth: 30,
                                                name: "Vector",
                                                svg: `<svg width="30" height="25" viewBox="-2 -2 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9506 10.0766C22.4314 10.0766 21.2381 8.82158 20.8253 7.35954C19.6265 3.11414 15.6879 0 11.0138 0C5.45767 0 0.940477 4.40085 0.829922 9.87079C0.715546 15.5249 6.07787 20.4348 11.7942 20.4348H12.5132C17.5529 20.4348 24.3077 16.5322 25.363 11.777C25.5579 10.9005 24.858 10.0766 23.9506 10.0766ZM6.926 10.3245C6.926 11.0687 6.31071 11.6774 5.55839 11.6774C4.80607 11.6774 4.19079 11.0684 4.19079 10.3245V8.13578C4.19079 7.39155 4.80607 6.78288 5.55839 6.78288C6.31071 6.78288 6.926 7.39155 6.926 8.13578V10.3245ZM11.6749 10.3245C11.6749 11.0687 11.0597 11.6774 10.3073 11.6774C9.55502 11.6774 8.93973 11.0684 8.93973 10.3245V8.13578C8.93973 7.39155 9.55529 6.78288 10.3073 6.78288C11.0597 6.78288 11.6749 7.39155 11.6749 8.13578V10.3245Z" fill="white"/>
</svg>
`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        t(a.div, {
                                          className: "framer-15t3nkz",
                                          children: [
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: t(r, {
                                                children: [
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", sans-serif',
                                                      "--framer-font-size":
                                                        "24px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: e("br", {
                                                      className:
                                                        "trailing-break",
                                                    }),
                                                  }),
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", sans-serif',
                                                      "--framer-font-size":
                                                        "20px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children:
                                                      "Francesco Agosti",
                                                  }),
                                                ],
                                              }),
                                              className: "framer-w9xmmq",
                                              "data-framer-name":
                                                "Francesco Agosti",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Francesco Agosti",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: e(r, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                    "--framer-font-family":
                                                      '"GT Planar Medium", sans-serif',
                                                    "--framer-font-size":
                                                      "14px",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "rgb(98, 98, 98)",
                                                  },
                                                  children: "CTO, Phantom",
                                                }),
                                              }),
                                              className: "framer-4hy7cm",
                                              "data-framer-name": "Phantom CTO",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Phantom CTO",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t(a.div, {
                                  className: "framer-17ma8wy",
                                  "data-framer-name": "Bitski-Tab",
                                  name: "Bitski-Tab",
                                  children: [
                                    e(d, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 150,
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                      },
                                      className: "framer-xhsw0s",
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-16ztncq",
                                          "data-styles-preset": "GWUyvY36O",
                                          style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(98, 98, 98)",
                                          },
                                          children:
                                            "Blowfish simplifies transaction messages and provides a secure signature process, alerting our wallet users of malicious dApps!",
                                        }),
                                      }),
                                      className: "framer-h2x4wl",
                                      "data-framer-name":
                                        '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      id: Ee,
                                      name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      ref: qe,
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                    t(a.div, {
                                      className: "framer-1bunyp1",
                                      children: [
                                        t(a.div, {
                                          className: "framer-j8z4ii",
                                          children: [
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 800,
                                                intrinsicWidth: 800,
                                                pixelHeight: 800,
                                                pixelWidth: 800,
                                                sizes: "50px",
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/s2jbSKThW7DUuUYqEHUWtSUJ94.jpeg",
                                                srcSet:
                                                  "./Blowfish - Proactive defense for web3 wallets_files/s2jbSKThW7DUuUYqEHUWtSUJ94.jpeg?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/s2jbSKThW7DUuUYqEHUWtSUJ94.jpeg 800w",
                                              },
                                              className: "framer-xtfn87",
                                              "data-framer-name": "image 2",
                                              name: "image 2",
                                            }),
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 200,
                                                intrinsicWidth: 200,
                                                pixelHeight: 200,
                                                pixelWidth: 200,
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/FUAYF8camFKI14PSr2Ht6X0hW4.jpeg",
                                              },
                                              className: "framer-1f726r2",
                                              "data-border": !0,
                                            }),
                                          ],
                                        }),
                                        t(a.div, {
                                          className: "framer-1j5us4s",
                                          children: [
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: t(r, {
                                                children: [
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", sans-serif',
                                                      "--framer-font-size":
                                                        "24px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: e("br", {
                                                      className:
                                                        "trailing-break",
                                                    }),
                                                  }),
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", sans-serif',
                                                      "--framer-font-size":
                                                        "20px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: "Blake Menezes",
                                                  }),
                                                ],
                                              }),
                                              className: "framer-14wcenq",
                                              "data-framer-name":
                                                "Francesco Agosti",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Francesco Agosti",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: e(r, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                    "--framer-font-family":
                                                      '"GT Planar Medium", sans-serif',
                                                    "--framer-font-size":
                                                      "18px",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "rgb(98, 98, 98)",
                                                  },
                                                  children:
                                                    "VP of Marketing, Bitski",
                                                }),
                                              }),
                                              className: "framer-umoq7w",
                                              "data-framer-name": "Phantom CTO",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Phantom CTO",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t(a.div, {
                                  className: "framer-106m3if",
                                  "data-framer-name": "Backpack-Tab",
                                  name: "Backpack-Tab",
                                  children: [
                                    e(d, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 150,
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                      },
                                      className: "framer-110io2q",
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-16ztncq",
                                          "data-styles-preset": "GWUyvY36O",
                                          style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(98, 98, 98)",
                                          },
                                          children:
                                            "We\u2019re excited to be working with Blowfish to make it easy to identify & stop fraud before it happens.",
                                        }),
                                      }),
                                      className: "framer-1pzkjdh",
                                      "data-framer-name":
                                        '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      id: _e,
                                      name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                      ref: Ae,
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                    t(a.div, {
                                      className: "framer-1xmy2hg",
                                      children: [
                                        t(a.div, {
                                          className: "framer-yptqhd",
                                          children: [
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 400,
                                                intrinsicWidth: 400,
                                                pixelHeight: 400,
                                                pixelWidth: 400,
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/p0SWc9nv6bq0hAA1UoIEgi8ufhs.jpeg",
                                              },
                                              className: "framer-13wgs4b",
                                              "data-framer-name": "image 2",
                                              name: "image 2",
                                            }),
                                            e(d, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 400,
                                                intrinsicWidth: 400,
                                                pixelHeight: 400,
                                                pixelWidth: 400,
                                                src: "./Blowfish - Proactive defense for web3 wallets_files/HHaMxcDUkib8wCpyqGIpnmxuXYk.jpeg",
                                              },
                                              className: "framer-eyuoey",
                                              "data-border": !0,
                                            }),
                                          ],
                                        }),
                                        t(a.div, {
                                          className: "framer-6ycz11",
                                          children: [
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: t(r, {
                                                children: [
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "24px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: e("br", {
                                                      className:
                                                        "trailing-break",
                                                    }),
                                                  }),
                                                  e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                      "--framer-font-family":
                                                        '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "20px",
                                                      "--framer-letter-spacing":
                                                        "0px",
                                                      "--framer-line-height":
                                                        "0.6em",
                                                      "--framer-text-alignment":
                                                        "left",
                                                    },
                                                    children: "Tristan Yver",
                                                  }),
                                                ],
                                              }),
                                              className: "framer-vnae94",
                                              "data-framer-name":
                                                "Francesco Agosti",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Francesco Agosti",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(i, {
                                              __fromCanvasComponent: !0,
                                              children: e(r, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                    "--framer-font-family":
                                                      '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "18px",
                                                    "--framer-text-alignment":
                                                      "left",
                                                    "--framer-text-color":
                                                      "rgb(98, 98, 98)",
                                                  },
                                                  children:
                                                    "Co-founder, Backpack",
                                                }),
                                              }),
                                              className: "framer-q3exju",
                                              "data-framer-name": "Phantom CTO",
                                              fonts: [
                                                "CUSTOM;GT Planar Medium",
                                              ],
                                              name: "Phantom CTO",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                              startFrom: 0,
                              style: {
                                height: "100%",
                                maxWidth: "100%",
                                width: "100%",
                              },
                              transitionControl: {
                                damping: 40,
                                stiffness: 200,
                                type: "spring",
                              },
                              width: "100%",
                            }),
                          }),
                        R() &&
                          e("div", {
                            className:
                              "framer-1l0jgw9 hidden-9i6d03 hidden-1dkgatv hidden-1d7sfhj",
                            children: e(o, {
                              className: "framer-15y7d3x-container",
                              children: e(y1, {
                                alignment: "center",
                                arrowOptions: {
                                  arrowFill: "rgba(0, 0, 0, 0.2)",
                                  arrowGap: 10,
                                  arrowPadding: -62,
                                  arrowPaddingBottom: 0,
                                  arrowPaddingLeft: 0,
                                  arrowPaddingRight: 0,
                                  arrowPaddingTop: 0,
                                  arrowPosition: "auto",
                                  arrowRadius: 40,
                                  arrowShouldFadeIn: !1,
                                  arrowShouldSpace: !0,
                                  arrowSize: 40,
                                  showMouseControls: !0,
                                },
                                autoPlayControl: !1,
                                borderRadius: 0,
                                direction: "left",
                                dragControl: !0,
                                effectsOptions: {
                                  effectsHover: !0,
                                  effectsOpacity: 1,
                                  effectsPerspective: 1200,
                                  effectsRotate: 0,
                                  effectsScale: 1,
                                },
                                fadeOptions: {
                                  fadeAlpha: 0,
                                  fadeContent: !1,
                                  fadeInset: 0,
                                  fadeWidth: 25,
                                  overflow: !1,
                                },
                                gap: 10,
                                height: "100%",
                                id: "ZHobV1We8",
                                intervalControl: 5,
                                itemAmount: 1,
                                layoutId: "ZHobV1We8",
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                progressOptions: {
                                  dotsActiveOpacity: 1,
                                  dotsBackground: "rgba(255, 255, 255, 0.2)",
                                  dotsBlur: 0,
                                  dotsFill: "rgb(0, 0, 0)",
                                  dotsGap: 10,
                                  dotsInset: -50,
                                  dotSize: 10,
                                  dotsOpacity: 0.5,
                                  dotsPadding: 10,
                                  dotsRadius: 50,
                                  showProgressDots: !0,
                                },
                                slots: [
                                  t(a.div, {
                                    className: "framer-10te9fp",
                                    children: [
                                      t(a.div, {
                                        className: "framer-14ob0xl",
                                        children: [
                                          e(d, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 150,
                                              intrinsicWidth: 150,
                                              pixelHeight: 150,
                                              pixelWidth: 150,
                                              src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                            },
                                            className: "framer-j4v7vl",
                                          }),
                                          e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                className:
                                                  "framer-styles-preset-16ztncq",
                                                "data-styles-preset":
                                                  "GWUyvY36O",
                                                style: {
                                                  "--framer-text-alignment":
                                                    "left",
                                                },
                                                children:
                                                  "Improved security UX in web3 is an important part of providing end-users a stress-free crypto experience. Blowfish\u2019s scam list, which we use for Verify API, is a big step in that direction. Blowfish\u2019s message and transaction simulation APIs offer awesome ways for wallets to provide a good signing UX. I look forward to the day when all wallets use transaction and message simulation!",
                                              }),
                                            }),
                                            className: "framer-503s2u",
                                            "data-framer-name":
                                              '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            id: He,
                                            name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            ref: Pe,
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          t(a.div, {
                                            className: "framer-drt13l",
                                            children: [
                                              t(a.div, {
                                                className: "framer-swtuoo",
                                                children: [
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 828,
                                                      intrinsicWidth: 883,
                                                      pixelHeight: 828,
                                                      pixelWidth: 883,
                                                      sizes: "80px",
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/1U2fVGW6lIiIAzkvxfd8XoTYZb0.png",
                                                      srcSet:
                                                        "./Blowfish - Proactive defense for web3 wallets_files/1U2fVGW6lIiIAzkvxfd8XoTYZb0.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/1U2fVGW6lIiIAzkvxfd8XoTYZb0.png 883w",
                                                    },
                                                    className: "framer-sbqsv3",
                                                    "data-framer-name":
                                                      "image 2",
                                                    name: "image 2",
                                                  }),
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 792,
                                                      intrinsicWidth: 612,
                                                      pixelHeight: 792,
                                                      pixelWidth: 612,
                                                      sizes: "40px",
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/u56Ec8113B2vbPj31UZ0Law8co.png",
                                                      srcSet:
                                                        "./Blowfish - Proactive defense for web3 wallets_files/u56Ec8113B2vbPj31UZ0Law8co.png 612w",
                                                    },
                                                    className: "framer-1wh5so5",
                                                    "data-border": !0,
                                                  }),
                                                ],
                                              }),
                                              t(a.div, {
                                                className: "framer-rz9spm",
                                                children: [
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                          "--framer-font-size":
                                                            "24px",
                                                          "--framer-letter-spacing":
                                                            "0px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                        },
                                                        children: "Derek Rein",
                                                      }),
                                                    }),
                                                    className: "framer-1a4cihk",
                                                    "data-framer-name":
                                                      "Benji Taylor",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Benji Taylor",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                          "--framer-font-size":
                                                            "18px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                          "--framer-text-color":
                                                            "rgb(98, 98, 98)",
                                                        },
                                                        children:
                                                          "CTO, WalletConnect",
                                                      }),
                                                    }),
                                                    className: "framer-1lphu2",
                                                    "data-framer-name":
                                                      "Founder, Family",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Founder, Family",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e(d, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          intrinsicHeight: 976,
                                          intrinsicWidth: 444,
                                          pixelHeight: 976,
                                          pixelWidth: 444,
                                          positionX: "center",
                                          positionY: "center",
                                          src: "./Blowfish - Proactive defense for web3 wallets_files/Ho6gB0FLZMjm4L4ludnnnKTrzY.png",
                                        },
                                        className: "framer-1qa43ml",
                                      }),
                                    ],
                                  }),
                                  t(a.div, {
                                    className: "framer-hcbdc1",
                                    children: [
                                      t(a.div, {
                                        className: "framer-pj7b2f",
                                        children: [
                                          e(d, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 150,
                                              intrinsicWidth: 150,
                                              pixelHeight: 150,
                                              pixelWidth: 150,
                                              src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                            },
                                            className: "framer-1kdksf7",
                                          }),
                                          e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                className:
                                                  "framer-styles-preset-16ztncq",
                                                "data-styles-preset":
                                                  "GWUyvY36O",
                                                style: {
                                                  "--framer-text-alignment":
                                                    "left",
                                                },
                                                children:
                                                  "Blowfish\u2019s expertise has been invaluable in safeguarding our users and enhancing Family\u2019s commitment to security. Their API is dependable, reliable, and straightforward to implement. We\u2019ve chosen to collaborate with Blowfish because we trust their ability to stay ahead of emerging threats, ensuring a safe experience for our users.",
                                              }),
                                            }),
                                            className: "framer-19s56tv",
                                            "data-framer-name":
                                              '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            id: Ge,
                                            name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            ref: De,
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          t(a.div, {
                                            className: "framer-1p4ab6q",
                                            children: [
                                              t(a.div, {
                                                className: "framer-1usa53p",
                                                children: [
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 150,
                                                      intrinsicWidth: 150,
                                                      pixelHeight: 150,
                                                      pixelWidth: 150,
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/AO0sCOQGM0W8eK72L5wWNVRANPE.png",
                                                    },
                                                    className: "framer-1vdwoxb",
                                                    "data-framer-name":
                                                      "image 2",
                                                    name: "image 2",
                                                  }),
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 400,
                                                      intrinsicWidth: 400,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/pu0iLFXULq4e6ta5jFeuEa55Ic.jpeg",
                                                    },
                                                    className: "framer-51ex9s",
                                                    "data-border": !0,
                                                  }),
                                                ],
                                              }),
                                              t(a.div, {
                                                className: "framer-1q4zezo",
                                                children: [
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: t(r, {
                                                      children: [
                                                        e("p", {
                                                          style: {
                                                            "--font-selector":
                                                              "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                            "--framer-font-family":
                                                              '"GT Planar Medium", sans-serif',
                                                            "--framer-font-size":
                                                              "24px",
                                                            "--framer-letter-spacing":
                                                              "0px",
                                                            "--framer-text-alignment":
                                                              "left",
                                                          },
                                                          children: e("br", {
                                                            className:
                                                              "trailing-break",
                                                          }),
                                                        }),
                                                        e("p", {
                                                          style: {
                                                            "--font-selector":
                                                              "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                            "--framer-font-family":
                                                              '"GT Planar Medium", sans-serif',
                                                            "--framer-font-size":
                                                              "24px",
                                                            "--framer-letter-spacing":
                                                              "0px",
                                                            "--framer-text-alignment":
                                                              "left",
                                                          },
                                                          children:
                                                            "Benji Taylor",
                                                        }),
                                                      ],
                                                    }),
                                                    className: "framer-1l3k8za",
                                                    "data-framer-name":
                                                      "Benji Taylor",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Benji Taylor",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", sans-serif',
                                                          "--framer-font-size":
                                                            "18px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                          "--framer-text-color":
                                                            "rgb(98, 98, 98)",
                                                        },
                                                        children:
                                                          "Founder, Family",
                                                      }),
                                                    }),
                                                    className: "framer-1jad2n",
                                                    "data-framer-name":
                                                      "Founder, Family",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Founder, Family",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e(o, {
                                        className: "framer-qw1g7l-container",
                                        children: e(x1, {
                                          backgroundColor: "rgba(0, 0, 0, 0)",
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: "100%",
                                          id: "rfeV1wH0C",
                                          isMixedBorderRadius: !1,
                                          layoutId: "rfeV1wH0C",
                                          loop: !0,
                                          muted: !0,
                                          objectFit: "contain",
                                          playing: !0,
                                          posterEnabled: !1,
                                          srcFile:
                                            "./Blowfish - Proactive defense for web3 wallets_files/neqkNdFKIZ7gLbipmS6EtuH2mZU.mp4",
                                          srcType: "Upload",
                                          srcUrl:
                                            "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                          startTime: 0,
                                          style: { width: "100%" },
                                          topLeftRadius: 0,
                                          topRightRadius: 0,
                                          volume: 25,
                                          width: "100%",
                                        }),
                                      }),
                                    ],
                                  }),
                                  t(a.div, {
                                    className: "framer-qfwv3j",
                                    children: [
                                      t(a.div, {
                                        className: "framer-1r93k3f",
                                        children: [
                                          e(d, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 150,
                                              intrinsicWidth: 150,
                                              pixelHeight: 150,
                                              pixelWidth: 150,
                                              src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                            },
                                            className: "framer-1hx46lw",
                                          }),
                                          e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                className:
                                                  "framer-styles-preset-16ztncq",
                                                "data-styles-preset":
                                                  "GWUyvY36O",
                                                style: {
                                                  "--framer-text-alignment":
                                                    "left",
                                                },
                                                children:
                                                  "Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers.",
                                              }),
                                            }),
                                            className: "framer-664d6x",
                                            "data-framer-name":
                                              '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            id: Ue,
                                            name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            ref: Oe,
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          t(a.div, {
                                            className: "framer-n8c8go",
                                            children: [
                                              t(a.div, {
                                                className: "framer-1rvxo07",
                                                children: [
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/1Fo93P69o6mUYKs65MtLIpLCTEI.png",
                                                    },
                                                    className: "framer-rn23xl",
                                                    "data-framer-name":
                                                      "image 2",
                                                    name: "image 2",
                                                  }),
                                                  e(a.div, {
                                                    className: "framer-15ys4zv",
                                                    "data-border": !0,
                                                    children: e(s, {
                                                      className:
                                                        "framer-ij24qw",
                                                      "data-framer-name":
                                                        "Vector",
                                                      fill: "rgba(0,0,0,1)",
                                                      intrinsicHeight: 25,
                                                      intrinsicWidth: 30,
                                                      name: "Vector",
                                                      svg: `<svg width="30" height="25" viewBox="-2 -2 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9506 10.0766C22.4314 10.0766 21.2381 8.82158 20.8253 7.35954C19.6265 3.11414 15.6879 0 11.0138 0C5.45767 0 0.940477 4.40085 0.829922 9.87079C0.715546 15.5249 6.07787 20.4348 11.7942 20.4348H12.5132C17.5529 20.4348 24.3077 16.5322 25.363 11.777C25.5579 10.9005 24.858 10.0766 23.9506 10.0766ZM6.926 10.3245C6.926 11.0687 6.31071 11.6774 5.55839 11.6774C4.80607 11.6774 4.19079 11.0684 4.19079 10.3245V8.13578C4.19079 7.39155 4.80607 6.78288 5.55839 6.78288C6.31071 6.78288 6.926 7.39155 6.926 8.13578V10.3245ZM11.6749 10.3245C11.6749 11.0687 11.0597 11.6774 10.3073 11.6774C9.55502 11.6774 8.93973 11.0684 8.93973 10.3245V8.13578C8.93973 7.39155 9.55529 6.78288 10.3073 6.78288C11.0597 6.78288 11.6749 7.39155 11.6749 8.13578V10.3245Z" fill="white"/>
</svg>
`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              t(a.div, {
                                                className: "framer-152fsx8",
                                                children: [
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", sans-serif',
                                                          "--framer-font-size":
                                                            "24px",
                                                          "--framer-letter-spacing":
                                                            "0px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                        },
                                                        children:
                                                          "Francesco Agosti",
                                                      }),
                                                    }),
                                                    className: "framer-1qpc1iv",
                                                    "data-framer-name":
                                                      "Francesco Agosti",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Francesco Agosti",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", sans-serif',
                                                          "--framer-font-size":
                                                            "18px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                          "--framer-text-color":
                                                            "rgb(98, 98, 98)",
                                                        },
                                                        children:
                                                          "CTO, Phantom",
                                                      }),
                                                    }),
                                                    className: "framer-1pfzttl",
                                                    "data-framer-name":
                                                      "Phantom CTO",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Phantom CTO",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e(d, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          intrinsicHeight: 1080,
                                          intrinsicWidth: 1080,
                                          pixelHeight: 1080,
                                          pixelWidth: 1080,
                                          positionX: "center",
                                          positionY: "center",
                                          sizes: "357.5px",
                                          src: "./Blowfish - Proactive defense for web3 wallets_files/MQNLbKObbzY9wFj3bDbMCquHYJc.jpeg",
                                          srcSet:
                                            "./Blowfish - Proactive defense for web3 wallets_files/MQNLbKObbzY9wFj3bDbMCquHYJc.jpeg?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/MQNLbKObbzY9wFj3bDbMCquHYJc.jpeg?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/MQNLbKObbzY9wFj3bDbMCquHYJc.jpeg 1080w",
                                        },
                                        className: "framer-1mipdci",
                                      }),
                                    ],
                                  }),
                                  t(a.div, {
                                    className: "framer-vnydox",
                                    children: [
                                      t(a.div, {
                                        className: "framer-vbaa9l",
                                        children: [
                                          e(d, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 150,
                                              intrinsicWidth: 150,
                                              pixelHeight: 150,
                                              pixelWidth: 150,
                                              src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                            },
                                            className: "framer-g96p70",
                                          }),
                                          e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                className:
                                                  "framer-styles-preset-16ztncq",
                                                "data-styles-preset":
                                                  "GWUyvY36O",
                                                style: {
                                                  "--framer-text-alignment":
                                                    "left",
                                                },
                                                children:
                                                  "Blowfish simplifies transaction messages and provides a secure signature process, alerting our wallet users of malicious dApps!",
                                              }),
                                            }),
                                            className: "framer-dwp2xs",
                                            "data-framer-name":
                                              '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            id: Ye,
                                            name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            ref: Xe,
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          t(a.div, {
                                            className: "framer-1k58hpm",
                                            children: [
                                              t(a.div, {
                                                className: "framer-hgmxnp",
                                                children: [
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 800,
                                                      intrinsicWidth: 800,
                                                      pixelHeight: 800,
                                                      pixelWidth: 800,
                                                      sizes: "80px",
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/s2jbSKThW7DUuUYqEHUWtSUJ94.jpeg",
                                                      srcSet:
                                                        "./Blowfish - Proactive defense for web3 wallets_files/s2jbSKThW7DUuUYqEHUWtSUJ94.jpeg?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/s2jbSKThW7DUuUYqEHUWtSUJ94.jpeg 800w",
                                                    },
                                                    className: "framer-qn9x4",
                                                    "data-framer-name":
                                                      "image 2",
                                                    name: "image 2",
                                                  }),
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 200,
                                                      intrinsicWidth: 200,
                                                      pixelHeight: 200,
                                                      pixelWidth: 200,
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/FUAYF8camFKI14PSr2Ht6X0hW4.jpeg",
                                                    },
                                                    className: "framer-j97krc",
                                                    "data-border": !0,
                                                  }),
                                                ],
                                              }),
                                              t(a.div, {
                                                className: "framer-7p98z",
                                                children: [
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", sans-serif',
                                                          "--framer-font-size":
                                                            "24px",
                                                          "--framer-letter-spacing":
                                                            "0px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                        },
                                                        children:
                                                          "Blake Menezes",
                                                      }),
                                                    }),
                                                    className: "framer-14yv2h9",
                                                    "data-framer-name":
                                                      "Francesco Agosti",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Francesco Agosti",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", sans-serif',
                                                          "--framer-font-size":
                                                            "18px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                          "--framer-text-color":
                                                            "rgb(98, 98, 98)",
                                                        },
                                                        children:
                                                          "VP of Marketing, Bitski",
                                                      }),
                                                    }),
                                                    className: "framer-p6qxkb",
                                                    "data-framer-name":
                                                      "Phantom CTO",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Phantom CTO",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e(d, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          intrinsicHeight: 718,
                                          intrinsicWidth: 1200,
                                          pixelHeight: 718,
                                          pixelWidth: 1200,
                                          positionX: "center",
                                          positionY: "center",
                                          sizes: "357.5px",
                                          src: "./Blowfish - Proactive defense for web3 wallets_files/zsp8NIPmNXkTwqMGkNySX0DU5A.jpeg",
                                          srcSet:
                                            "./Blowfish - Proactive defense for web3 wallets_files/zsp8NIPmNXkTwqMGkNySX0DU5A.jpeg?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/zsp8NIPmNXkTwqMGkNySX0DU5A.jpeg?scale-down-to=1024 1024w, ./Blowfish - Proactive defense for web3 wallets_files/zsp8NIPmNXkTwqMGkNySX0DU5A.jpeg 1200w",
                                        },
                                        className: "framer-1fqxv6x",
                                      }),
                                    ],
                                  }),
                                  t(a.div, {
                                    className: "framer-1xummpl",
                                    children: [
                                      t(a.div, {
                                        className: "framer-1mvzzk3",
                                        children: [
                                          e(d, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 150,
                                              intrinsicWidth: 150,
                                              pixelHeight: 150,
                                              pixelWidth: 150,
                                              src: "./Blowfish - Proactive defense for web3 wallets_files/0lYfqNEY8Za3EjKlloQV7G43I.svg",
                                            },
                                            className: "framer-1v56wdw",
                                          }),
                                          e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("p", {
                                                className:
                                                  "framer-styles-preset-16ztncq",
                                                "data-styles-preset":
                                                  "GWUyvY36O",
                                                style: {
                                                  "--framer-text-alignment":
                                                    "left",
                                                },
                                                children:
                                                  "We\u2019re excited to be working with Blowfish to make it easy to identify & stop fraud before it happens.",
                                              }),
                                            }),
                                            className: "framer-1t7khm1",
                                            "data-framer-name":
                                              '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            id: Qe,
                                            name: '"Blowfish has helped us protect thousands of our users from malicious scams & fraud. Their API is easy to use & reliable. We\u2019ve partnered with them because we trust their ability to continue building a great product that stays one step ahead of scammers."',
                                            ref: Ke,
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          t(a.div, {
                                            className: "framer-dr2pef",
                                            children: [
                                              t(a.div, {
                                                className: "framer-hhszaq",
                                                children: [
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 400,
                                                      intrinsicWidth: 400,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/p0SWc9nv6bq0hAA1UoIEgi8ufhs.jpeg",
                                                    },
                                                    className: "framer-f0f1v1",
                                                    "data-framer-name":
                                                      "image 2",
                                                    name: "image 2",
                                                  }),
                                                  e(d, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 400,
                                                      intrinsicWidth: 400,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      src: "./Blowfish - Proactive defense for web3 wallets_files/HHaMxcDUkib8wCpyqGIpnmxuXYk.jpeg",
                                                    },
                                                    className: "framer-13s99p2",
                                                    "data-border": !0,
                                                  }),
                                                ],
                                              }),
                                              t(a.div, {
                                                className: "framer-1lj3am",
                                                children: [
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                          "--framer-font-size":
                                                            "24px",
                                                          "--framer-letter-spacing":
                                                            "0px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                        },
                                                        children:
                                                          "Tristan Yver",
                                                      }),
                                                    }),
                                                    className: "framer-1jee28o",
                                                    "data-framer-name":
                                                      "Francesco Agosti",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Francesco Agosti",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                  e(i, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(r, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                                          "--framer-font-family":
                                                            '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                                          "--framer-font-size":
                                                            "18px",
                                                          "--framer-text-alignment":
                                                            "left",
                                                          "--framer-text-color":
                                                            "rgb(98, 98, 98)",
                                                        },
                                                        children:
                                                          "Co-founder, Backpack",
                                                      }),
                                                    }),
                                                    className: "framer-jhi8ej",
                                                    "data-framer-name":
                                                      "Phantom CTO",
                                                    fonts: [
                                                      "CUSTOM;GT Planar Medium",
                                                    ],
                                                    name: "Phantom CTO",
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e(o, {
                                        className: "framer-c3gc8y-container",
                                        children: e(x1, {
                                          backgroundColor: "rgba(0, 0, 0, 0)",
                                          borderRadius: 0,
                                          bottomLeftRadius: 0,
                                          bottomRightRadius: 0,
                                          controls: !1,
                                          height: "100%",
                                          id: "DWCH4rNmk",
                                          isMixedBorderRadius: !1,
                                          layoutId: "DWCH4rNmk",
                                          loop: !0,
                                          muted: !0,
                                          objectFit: "cover",
                                          playing: !0,
                                          posterEnabled: !1,
                                          srcFile:
                                            "./Blowfish - Proactive defense for web3 wallets_files/M2VguMfrgalyMrmVDCi7MjoSk.mp4",
                                          srcType: "Upload",
                                          srcUrl:
                                            "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                          startTime: 0,
                                          style: { width: "100%" },
                                          topLeftRadius: 0,
                                          topRightRadius: 0,
                                          volume: 25,
                                          width: "100%",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                                startFrom: 0,
                                style: {
                                  height: "100%",
                                  maxWidth: "100%",
                                  width: "100%",
                                },
                                transitionControl: {
                                  damping: 40,
                                  stiffness: 200,
                                  type: "spring",
                                },
                                width: "100%",
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                t("div", {
                  className: "framer-1nxv3iq",
                  "data-framer-name": "Infographic",
                  name: "Infographic",
                  children: [
                    t("div", {
                      className: "framer-1enw1a6",
                      "data-framer-name": "Heading",
                      name: "Heading",
                      children: [
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: t("h3", {
                                  className: "framer-styles-preset-n1pvnt",
                                  "data-styles-preset": "TeBLYHcWA",
                                  children: [
                                    "One Integration. ",
                                    e("br", {}),
                                    "All Web3 risk signal.",
                                  ],
                                }),
                              }),
                              fonts: void 0,
                            },
                            MITuyLXdw: {
                              children: e(r, {
                                children: t("h3", {
                                  className: "framer-styles-preset-12lj5ox",
                                  "data-styles-preset": "YckFIlg3V",
                                  style: {
                                    "--framer-text-alignment": "center",
                                  },
                                  children: [
                                    "One Integration. ",
                                    e("br", {}),
                                    "All Web3 risk signal.",
                                  ],
                                }),
                              }),
                              fonts: void 0,
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: t(r, {
                              children: [
                                e("p", {
                                  style: {
                                    "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                    "--framer-font-family":
                                      '"DM Sans", "DM Sans Placeholder", sans-serif',
                                    "--framer-font-size": "44px",
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-0.5px",
                                    "--framer-line-height": "54px",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "One Integration. ",
                                }),
                                e("p", {
                                  style: {
                                    "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                    "--framer-font-family":
                                      '"DM Sans", "DM Sans Placeholder", sans-serif',
                                    "--framer-font-size": "44px",
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-0.5px",
                                    "--framer-line-height": "54px",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "All Web3 risk signal.",
                                }),
                              ],
                            }),
                            className: "framer-1wayt4q",
                            "data-framer-name":
                              "One Integration. All Web3 risk signal.",
                            fonts: ["GF;DM Sans-700"],
                            name: "One Integration. All Web3 risk signal.",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            MITuyLXdw: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-16ztncq",
                                  "data-styles-preset": "GWUyvY36O",
                                  style: {
                                    "--framer-text-color": "rgb(0, 0, 0)",
                                  },
                                  children:
                                    "Besides its own internal intelligence, Blowfish aggregates & verifies risk signals from 10+ sources so you don\u2019t have to.",
                                }),
                              }),
                              fonts: void 0,
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: t(r, {
                              children: [
                                e("p", {
                                  style: {
                                    "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                    "--framer-font-family":
                                      '"DM Sans", "DM Sans Placeholder", sans-serif',
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "140%",
                                    "--framer-text-alignment": "center",
                                  },
                                  children:
                                    "Besides its own internal intelligence, Blowfish aggregates & verifies risk signals",
                                }),
                                e("p", {
                                  style: {
                                    "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                    "--framer-font-family":
                                      '"DM Sans", "DM Sans Placeholder", sans-serif',
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "140%",
                                    "--framer-text-alignment": "center",
                                  },
                                  children:
                                    "from 10+ sources so you don\u2019t have to.",
                                }),
                              ],
                            }),
                            className: "framer-1w8pxou",
                            "data-framer-name":
                              "Blowfish aggregates & verifies risk signal from 10+ sources so you don\u2019t have to",
                            fonts: ["GF;DM Sans-700"],
                            name: "Blowfish aggregates & verifies risk signal from 10+ sources so you don\u2019t have to",
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    e(c, {
                      breakpoint: n,
                      overrides: {
                        kwVNjqrRS: {
                          background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 1085,
                            intrinsicWidth: 1094,
                            pixelHeight: 1085,
                            pixelWidth: 1094,
                            positionX: "center",
                            positionY: "center",
                            src: "https://framerusercontent.com/images/M7tSfUaQEvRtfmmt7tSOwElU3Cg.png",
                          },
                        },
                        MITuyLXdw: {
                          background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 1085,
                            intrinsicWidth: 1094,
                            pixelHeight: 1085,
                            pixelWidth: 1094,
                            positionX: "center",
                            positionY: "center",
                            src: "https://framerusercontent.com/images/M7tSfUaQEvRtfmmt7tSOwElU3Cg.png",
                          },
                        },
                        TCRVy9I_Z: {
                          background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 1085,
                            intrinsicWidth: 1094,
                            loading: "lazy",
                            pixelHeight: 1085,
                            pixelWidth: 1094,
                            positionX: "center",
                            positionY: "center",
                            src: "https://framerusercontent.com/images/M7tSfUaQEvRtfmmt7tSOwElU3Cg.png",
                          },
                        },
                      },
                      children: e(d, {
                        background: {
                          alt: "",
                          fit: "fit",
                          intrinsicHeight: 2130,
                          intrinsicWidth: 4080,
                          loading: "lazy",
                          pixelHeight: 2130,
                          pixelWidth: 4080,
                          positionX: "center",
                          positionY: "center",
                          src: "./Blowfish - Proactive defense for web3 wallets_files/EklYdzFfjOczT0wpGRSK1cdJvg.png",
                        },
                        className: "framer-13rk37h",
                        "data-framer-name": "Infographic-Image",
                        name: "Infographic-Image",
                      }),
                    }),
                  ],
                }),
                t("div", {
                  className: "framer-jtrsre",
                  "data-framer-name": "Partners",
                  name: "Partners",
                  children: [
                    e(i, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e("p", {
                          className: "framer-styles-preset-1yvc2t",
                          "data-styles-preset": "MUgjgp0nh",
                          style: { "--framer-text-alignment": "center" },
                          children: "Backed by",
                        }),
                      }),
                      className: "framer-1j555ax",
                      "data-framer-name": "Give your users peace-of-mind",
                      name: "Give your users peace-of-mind",
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    Z() &&
                      e(o, {
                        className:
                          "framer-1cpa2o5-container hidden-72rtr7 hidden-9i6d03 hidden-1d7sfhj",
                        children: e(D, {
                          alignment: "center",
                          direction: "left",
                          fadeOptions: {
                            fadeAlpha: 0.1,
                            fadeContent: !0,
                            fadeInset: 5,
                            fadeWidth: 30,
                            overflow: !1,
                          },
                          gap: 50,
                          height: "100%",
                          hoverFactor: 1,
                          id: "SZPWYvRFz",
                          layoutId: "SZPWYvRFz",
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: !1,
                          paddingRight: 10,
                          paddingTop: 10,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            e(o, {
                              className: "framer-1hof5c-container",
                              children: e(l1, {
                                height: "100%",
                                id: "VWY5cugfM",
                                layoutId: "VWY5cugfM",
                                variant: "yYzcqmeNK",
                                width: "100%",
                              }),
                            }),
                            e(o, {
                              className: "framer-1827xkr-container",
                              children: e(f1, {
                                height: "100%",
                                id: "kTRYp7xG2",
                                layoutId: "kTRYp7xG2",
                                title: "DRAGONFLY",
                                variant: "f4uT6WiDU",
                                width: "100%",
                              }),
                            }),
                            e(o, {
                              className: "framer-1mh2ffx-container",
                              children: e(c1, {
                                height: "100%",
                                id: "gmzh3bkAT",
                                layoutId: "gmzh3bkAT",
                                variant: "nn6ikUsA3",
                                width: "100%",
                              }),
                            }),
                            e(o, {
                              className: "framer-o0kciw-container",
                              children: e(m1, {
                                height: "100%",
                                id: "X48psVKVN",
                                layoutId: "X48psVKVN",
                                title: "HYPERSPHERE",
                                variant: "FCi1kOgEx",
                                width: "100%",
                              }),
                            }),
                          ],
                          speed: 100,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    A1() &&
                      t("div", {
                        className: "framer-18qaru7 hidden-1dkgatv",
                        "data-border": !0,
                        "data-framer-name": "Partners-Logos",
                        name: "Partners-Logos",
                        children: [
                          u1() &&
                            e(o, {
                              className:
                                "framer-1ukcys8-container hidden-1d7sfhj",
                              children: e(l1, {
                                height: "100%",
                                id: "g4P3xYpK5",
                                layoutId: "g4P3xYpK5",
                                style: { width: "100%" },
                                variant: "MoLgzbyzg",
                                width: "100%",
                              }),
                            }),
                          u1() &&
                            e(o, {
                              className:
                                "framer-1rsb8b8-container hidden-1d7sfhj",
                              children: e(c1, {
                                height: "100%",
                                id: "j4tUJWIbQ",
                                layoutId: "j4tUJWIbQ",
                                style: { width: "100%" },
                                variant: "S9lT9OgKP",
                                width: "100%",
                              }),
                            }),
                          j() &&
                            e(o, {
                              className:
                                "framer-ic3ijg-container hidden-72rtr7 hidden-9i6d03",
                              children: e(D, {
                                alignment: "center",
                                direction: "left",
                                fadeOptions: {
                                  fadeAlpha: 0.1,
                                  fadeContent: !0,
                                  fadeInset: 5,
                                  fadeWidth: 30,
                                  overflow: !1,
                                },
                                gap: 50,
                                height: "100%",
                                hoverFactor: 1,
                                id: "X6Zunk62C",
                                layoutId: "X6Zunk62C",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {
                                  heightType: !0,
                                  widthType: !0,
                                },
                                slots: [
                                  e(o, {
                                    className: "framer-1hof5c-container",
                                    children: e(l1, {
                                      height: "100%",
                                      id: "VWY5cugfM",
                                      layoutId: "VWY5cugfM",
                                      variant: "yYzcqmeNK",
                                      width: "100%",
                                    }),
                                  }),
                                  e(o, {
                                    className: "framer-1827xkr-container",
                                    children: e(f1, {
                                      height: "100%",
                                      id: "kTRYp7xG2",
                                      layoutId: "kTRYp7xG2",
                                      title: "DRAGONFLY",
                                      variant: "f4uT6WiDU",
                                      width: "100%",
                                    }),
                                  }),
                                  e(o, {
                                    className: "framer-1mh2ffx-container",
                                    children: e(c1, {
                                      height: "100%",
                                      id: "gmzh3bkAT",
                                      layoutId: "gmzh3bkAT",
                                      variant: "nn6ikUsA3",
                                      width: "100%",
                                    }),
                                  }),
                                  e(o, {
                                    className: "framer-o0kciw-container",
                                    children: e(m1, {
                                      height: "100%",
                                      id: "X48psVKVN",
                                      layoutId: "X48psVKVN",
                                      title: "HYPERSPHERE",
                                      variant: "FCi1kOgEx",
                                      width: "100%",
                                    }),
                                  }),
                                ],
                                speed: 100,
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          u1() &&
                            e(o, {
                              className:
                                "framer-7ttnqa-container hidden-1d7sfhj",
                              children: e(f1, {
                                height: "100%",
                                id: "P50LJE0qv",
                                layoutId: "P50LJE0qv",
                                style: { width: "100%" },
                                title: "DRAGONFLY",
                                variant: "HelcxH_9T",
                                width: "100%",
                              }),
                            }),
                          u1() &&
                            e(o, {
                              className:
                                "framer-kfe3yw-container hidden-1d7sfhj",
                              children: e(m1, {
                                height: "100%",
                                id: "elki2XaTU",
                                layoutId: "elki2XaTU",
                                style: { width: "100%" },
                                title: "HYPERSPHERE",
                                variant: "ChvBBefrj",
                                width: "100%",
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
                t("header", {
                  className: "framer-x59u0z",
                  "data-framer-name": "Pricing",
                  id: Je,
                  name: "Pricing",
                  ref: $e,
                  children: [
                    t("div", {
                      className: "framer-1i5fk18",
                      "data-framer-name": "Heading",
                      name: "Heading",
                      children: [
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            kwVNjqrRS: {
                              children: e(r, {
                                children: e("h3", {
                                  className: "framer-styles-preset-n1pvnt",
                                  "data-styles-preset": "TeBLYHcWA",
                                  children: "Our Pricing",
                                }),
                              }),
                              fonts: void 0,
                            },
                            MITuyLXdw: {
                              children: e(r, {
                                children: e("h3", {
                                  className: "framer-styles-preset-12lj5ox",
                                  "data-styles-preset": "YckFIlg3V",
                                  children: "Our Pricing",
                                }),
                              }),
                              fonts: void 0,
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-size": "44px",
                                  "--framer-font-weight": "700",
                                  "--framer-letter-spacing": "-0.5px",
                                  "--framer-line-height": "54px",
                                  "--framer-text-alignment": "center",
                                },
                                children: "Our Pricing",
                              }),
                            }),
                            className: "framer-er2gvc",
                            "data-framer-name": "Our Pricing",
                            fonts: ["GF;DM Sans-700"],
                            name: "Our Pricing",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          breakpoint: n,
                          overrides: {
                            MITuyLXdw: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-16ztncq",
                                  "data-styles-preset": "GWUyvY36O",
                                  children:
                                    "Transparent, predictable plans for teams of all sizes",
                                }),
                              }),
                              fonts: void 0,
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7RE0gU2Fucy03MDA=",
                                  "--framer-font-family":
                                    '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  "--framer-font-weight": "700",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "140%",
                                  "--framer-text-alignment": "center",
                                },
                                children:
                                  "Transparent, predictable plans for teams of all sizes",
                              }),
                            }),
                            className: "framer-124daum",
                            "data-framer-name":
                              "Blowfish helps protect every interface in your wallet",
                            fonts: ["GF;DM Sans-700"],
                            name: "Blowfish helps protect every interface in your wallet",
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    er() &&
                      t("div", {
                        className:
                          "framer-19mmp1z hidden-9i6d03 hidden-1dkgatv",
                        "data-framer-name": "Pricing-List",
                        name: "Pricing-List",
                        children: [
                          e(o, {
                            className: "framer-79iqsl-container",
                            "data-framer-name": "Free",
                            name: "Free",
                            whileHover: n1,
                            children: e(c, {
                              breakpoint: n,
                              overrides: {
                                MITuyLXdw: {
                                  style: { maxWidth: "100%", width: "100%" },
                                },
                              },
                              children: e(U, {
                                height: "100%",
                                id: "s6BwUDNUQ",
                                layoutId: "s6BwUDNUQ",
                                name: "Free",
                                style: {
                                  height: "100%",
                                  maxWidth: "100%",
                                  width: "100%",
                                },
                                variant: "QOltFhqTI",
                                width: "100%",
                              }),
                            }),
                          }),
                          e(o, {
                            className: "framer-1jcquhb-container",
                            "data-framer-name": "Growth",
                            name: "Growth",
                            whileHover: n1,
                            children: e(c, {
                              breakpoint: n,
                              overrides: {
                                MITuyLXdw: {
                                  style: { maxWidth: "100%", width: "100%" },
                                },
                              },
                              children: e(U, {
                                height: "100%",
                                id: "fmdkVr0XN",
                                layoutId: "fmdkVr0XN",
                                name: "Growth",
                                style: {
                                  height: "100%",
                                  maxWidth: "100%",
                                  width: "100%",
                                },
                                variant: "qMc_epy1P",
                                width: "100%",
                              }),
                            }),
                          }),
                          e(o, {
                            className: "framer-1uqa2f8-container",
                            "data-framer-name": "Enterprise",
                            name: "Enterprise",
                            whileHover: n1,
                            children: e(c, {
                              breakpoint: n,
                              overrides: {
                                MITuyLXdw: {
                                  style: { maxWidth: "100%", width: "100%" },
                                },
                              },
                              children: e(U, {
                                height: "100%",
                                id: "Ia2d8_rEm",
                                layoutId: "Ia2d8_rEm",
                                name: "Enterprise",
                                style: {
                                  height: "100%",
                                  maxWidth: "100%",
                                  width: "100%",
                                },
                                variant: "oHUY5lEtV",
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                    H1() &&
                      t("div", {
                        className:
                          "framer-1f9mjqo hidden-72rtr7 hidden-1d7sfhj",
                        "data-framer-name": "Pricing-List",
                        name: "Pricing-List",
                        children: [
                          e(o, {
                            className: "framer-12ao1ya-container",
                            "data-framer-name": "Free",
                            name: "Free",
                            whileHover: n1,
                            children: e(U, {
                              height: "100%",
                              id: "PbywDveUC",
                              layoutId: "PbywDveUC",
                              name: "Free",
                              style: { maxWidth: "100%", width: "100%" },
                              variant: "QOltFhqTI",
                              width: "100%",
                            }),
                          }),
                          e(o, {
                            className: "framer-hfeghn-container",
                            "data-framer-name": "Growth",
                            name: "Growth",
                            whileHover: n1,
                            children: e(U, {
                              height: "100%",
                              id: "TRHyBeEZv",
                              layoutId: "TRHyBeEZv",
                              name: "Growth",
                              style: { maxWidth: "100%", width: "100%" },
                              variant: "qMc_epy1P",
                              width: "100%",
                            }),
                          }),
                        ],
                      }),
                    H1() &&
                      e(o, {
                        className:
                          "framer-ws0tdp-container hidden-72rtr7 hidden-1d7sfhj",
                        "data-framer-name": "Enterprise",
                        name: "Enterprise",
                        whileHover: n1,
                        children: e(U, {
                          height: "100%",
                          id: "HD6mJzKej",
                          layoutId: "HD6mJzKej",
                          name: "Enterprise",
                          style: { maxWidth: "100%", width: "100%" },
                          variant: "oHUY5lEtV",
                          width: "100%",
                        }),
                      }),
                  ],
                }),
                Z() &&
                  t("div", {
                    className:
                      "framer-bw5xpc hidden-72rtr7 hidden-9i6d03 hidden-1d7sfhj",
                    "data-framer-name": "CTA",
                    name: "CTA",
                    children: [
                      e(c, {
                        breakpoint: n,
                        overrides: {
                          kwVNjqrRS: {
                            background: {
                              alt: "",
                              fit: "stretch",
                              intrinsicHeight: 1498,
                              intrinsicWidth: 1500,
                              pixelHeight: 1498,
                              pixelWidth: 1500,
                              positionX: "center",
                              positionY: "center",
                              sizes: "calc(min(100vw, 600px) - 115px)",
                              src: "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png",
                              srcSet:
                                "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png 1500w",
                            },
                          },
                        },
                        children: e(d, {
                          background: {
                            alt: "",
                            fit: "stretch",
                            intrinsicHeight: 1498,
                            intrinsicWidth: 1500,
                            pixelHeight: 1498,
                            pixelWidth: 1500,
                            positionX: "center",
                            positionY: "center",
                            src: "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png",
                            srcSet:
                              "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png 1500w",
                          },
                          className: "framer-phlw56",
                          "data-framer-name": "Bubble-Image",
                          name: "Bubble-Image",
                          transformTemplate: oa,
                        }),
                      }),
                      t(Le, {
                        __framer__animate: { transition: h1 },
                        __framer__animateOnce: !0,
                        __framer__enter: ke,
                        __framer__exit: Me,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-100g8ry",
                        "data-framer-name": "Content",
                        name: "Content",
                        transformTemplate: y,
                        children: [
                          e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("h3", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                  "--framer-font-family":
                                    '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-alignment": "left",
                                },
                                children: "QUICK AND SIMPLE INTEGRATION",
                              }),
                            }),
                            className: "framer-qxg7yu",
                            "data-framer-name": "Give your users peace-of-mind",
                            fonts: ["CUSTOM;GT Planar Medium"],
                            name: "Give your users peace-of-mind",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: t("h3", {
                                className: "framer-styles-preset-12lj5ox",
                                "data-styles-preset": "YckFIlg3V",
                                style: { "--framer-text-alignment": "left" },
                                children: [
                                  "Protect your users",
                                  e("br", {}),
                                  "with Blowfish",
                                ],
                              }),
                            }),
                            className: "framer-1ckk3xd",
                            "data-framer-name": "Give your users peace-of-mind",
                            name: "Give your users peace-of-mind",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          t("div", {
                            className: "framer-1g04e9c",
                            "data-framer-name": "Cta-Buttons",
                            name: "Cta-Buttons",
                            children: [
                              e(o, {
                                className: "framer-p93yls-container",
                                children: e(V, {
                                  height: "100%",
                                  id: "a2dRdXjBt",
                                  layoutId: "a2dRdXjBt",
                                  OgGB2UA1X: "Start for Free",
                                  style: { width: "100%" },
                                  variant: "CyRBy15mh",
                                  width: "100%",
                                }),
                              }),
                              e(o, {
                                className: "framer-hx2wxk-container",
                                children: e(V, {
                                  height: "100%",
                                  id: "KvK0ikgYh",
                                  layoutId: "KvK0ikgYh",
                                  OgGB2UA1X: "Read the docs",
                                  style: { width: "100%" },
                                  variant: "GzkxZOjRZ",
                                  width: "100%",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                A1() &&
                  t("div", {
                    className: "framer-c2ocjj hidden-1dkgatv",
                    "data-framer-name": "CTA",
                    name: "CTA",
                    children: [
                      e(c, {
                        breakpoint: n,
                        overrides: {
                          MITuyLXdw: {
                            background: {
                              alt: "",
                              fit: "stretch",
                              intrinsicHeight: 1498,
                              intrinsicWidth: 1500,
                              pixelHeight: 1498,
                              pixelWidth: 1500,
                              positionX: "center",
                              positionY: "center",
                              sizes: "617.5px",
                              src: "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png",
                              srcSet:
                                "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png 1500w",
                            },
                            transformTemplate: sa,
                          },
                          TCRVy9I_Z: {
                            background: {
                              alt: "",
                              fit: "stretch",
                              intrinsicHeight: 1498,
                              intrinsicWidth: 1500,
                              loading: "lazy",
                              pixelHeight: 1498,
                              pixelWidth: 1500,
                              positionX: "center",
                              positionY: "center",
                              sizes: "403px",
                              src: "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png",
                              srcSet:
                                "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png 1500w",
                            },
                          },
                        },
                        children: e(d, {
                          background: {
                            alt: "",
                            fit: "stretch",
                            intrinsicHeight: 1498,
                            intrinsicWidth: 1500,
                            loading: "lazy",
                            pixelHeight: 1498,
                            pixelWidth: 1500,
                            positionX: "center",
                            positionY: "center",
                            sizes: "920px",
                            src: "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png",
                            srcSet:
                              "https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=512 512w, ./Blowfish - Proactive defense for web3 wallets_files/XRA4cDnj7ZXczqNRYpoP9sSIpo.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/XRA4cDnj7ZXczqNRYpoP9sSIpo.png 1500w",
                          },
                          className: "framer-byzn87",
                          "data-framer-name": "Bubble-Image",
                          name: "Bubble-Image",
                        }),
                      }),
                      e(c, {
                        breakpoint: n,
                        overrides: {
                          MITuyLXdw: { transformTemplate: y },
                          TCRVy9I_Z: { transformTemplate: y },
                        },
                        children: t(Le, {
                          __framer__animate: { transition: h1 },
                          __framer__animateOnce: !0,
                          __framer__enter: ke,
                          __framer__exit: Me,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1rmghkq",
                          "data-framer-name": "Content",
                          name: "Content",
                          transformTemplate: la,
                          children: [
                            e(c, {
                              breakpoint: n,
                              overrides: {
                                MITuyLXdw: {
                                  children: e(r, {
                                    children: e("h3", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                        "--framer-font-family":
                                          '"GT Planar Medium", "GT Planar Medium Placeholder", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-line-height": "1.4em",
                                        "--framer-text-alignment": "left",
                                      },
                                      children: "QUICK AND SIMPLE INTEGRATION",
                                    }),
                                  }),
                                },
                              },
                              children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("h3", {
                                    style: { "--framer-line-height": "1.4em" },
                                    children: e("span", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0dUIFBsYW5hciBNZWRpdW0=",
                                        "--framer-font-family":
                                          '"GT Planar Medium", serif',
                                        "--framer-font-style": "normal",
                                        "--framer-font-weight": "400",
                                      },
                                      children: "QUICK AND SIMPLE INTEGRATION",
                                    }),
                                  }),
                                }),
                                className: "framer-8s5gw0",
                                "data-framer-name":
                                  "Give your users peace-of-mind",
                                fonts: ["CUSTOM;GT Planar Medium"],
                                name: "Give your users peace-of-mind",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(i, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("h3", {
                                  className: "framer-styles-preset-12lj5ox",
                                  "data-styles-preset": "YckFIlg3V",
                                  style: { "--framer-text-alignment": "left" },
                                  children: "Protect your users with Blowfish",
                                }),
                              }),
                              className: "framer-82xhxt",
                              "data-framer-name":
                                "Give your users peace-of-mind",
                              name: "Give your users peace-of-mind",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            t("div", {
                              className: "framer-dpjnoi",
                              "data-framer-name": "Cta-Buttons",
                              name: "Cta-Buttons",
                              children: [
                                e(o, {
                                  className: "framer-b3l03b-container",
                                  children: e(c, {
                                    breakpoint: n,
                                    overrides: {
                                      MITuyLXdw: { style: { width: "100%" } },
                                    },
                                    children: e(V, {
                                      height: "100%",
                                      id: "TDwjG8AoJ",
                                      layoutId: "TDwjG8AoJ",
                                      OgGB2UA1X: "Start for Free",
                                      variant: "CyRBy15mh",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(o, {
                                  className: "framer-1jsbd1i-container",
                                  children: e(c, {
                                    breakpoint: n,
                                    overrides: {
                                      MITuyLXdw: { style: { width: "100%" } },
                                    },
                                    children: e(V, {
                                      height: "100%",
                                      id: "gohD9jsdX",
                                      layoutId: "gohD9jsdX",
                                      OgGB2UA1X: "Read the docs",
                                      variant: "GzkxZOjRZ",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                t("div", {
                  className: "framer-2fyunu",
                  "data-framer-name": "Footer",
                  name: "Footer",
                  children: [
                    e("div", {
                      className: "framer-1ovr08u",
                      "data-framer-name": "Blowfish-Logo",
                      name: "Blowfish-Logo",
                      children: e(h, {
                        href: { webPageId: "augiA20Il" },
                        openInNewTab: !1,
                        children: e(s, {
                          as: "a",
                          className: "framer-4zhldu framer-lux5qc",
                          "data-framer-name": "Blowfish_Logo_Black",
                          fill: "black",
                          intrinsicHeight: 504,
                          intrinsicWidth: 1949,
                          name: "Blowfish_Logo_Black",
                          svg: '<svg width="1949" height="504" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m251.656 0 59.499 80.145-30.448 22.604-28.728-38.697-27.004 37.151L194.3 78.907 251.656 0Zm179.079 74.225-15.24 96.352-37.455-5.924 7.175-45.365-47.677 7.049-5.547-37.514 98.744-14.598Zm-357.104.366 98.743 14.598-5.546 37.514-47.677-7.049 7.175 45.364-37.456 5.925-15.24-96.352Zm-9.579 177.796 38.697-28.728-22.604-30.448L0 252.71l78.907 57.355 22.296-30.674-37.15-27.004Zm359.803-59.176L504 252.71l-78.907 57.355-22.296-30.674 37.151-27.004-38.697-28.728 22.604-30.448ZM119.471 385.215l7.049-47.677-37.514-5.547-14.598 98.744 96.352-15.24-5.924-37.455-45.365 7.175Zm296.071-53.041 14.599 98.744-96.352-15.24 5.924-37.456 45.364 7.175-7.048-47.676 37.513-5.547Zm-104.387 91.681L251.656 504 194.3 425.093l30.675-22.296 27.004 37.151 28.728-38.697 30.448 22.604Z" fill="#000"/><path d="M614 366.965h106.488c45.206 0 72.666-28.196 72.666-68.475 0-27.525-15.404-47.329-37.505-56.056 18.082-9.735 30.807-28.868 30.807-51.693 0-35.916-27.124-58.741-69.987-58.741H614v234.965Zm41.189-37.93v-67.469h59.606c23.44 0 36.5 11.749 36.5 33.231 0 21.483-13.394 34.238-36.5 34.238h-59.606Zm0-103.049V169.93h55.587c20.762 0 33.822 9.399 33.822 27.86 0 17.79-12.39 28.196-33.822 28.196h-55.587Zm214.542 140.979h34.826V331.72H885.47c-8.037 0-11.05-3.356-11.05-11.077V132h-39.85v202.406c0 23.496 10.716 32.559 35.161 32.559ZM1006.7 372c50.56 0 85.39-34.909 85.39-86.937s-34.83-86.937-85.39-86.937c-50.233 0-85.059 34.909-85.059 86.937S956.467 372 1006.7 372Zm-43.87-86.937c0-30.21 17.413-50.685 43.87-50.685 26.45 0 44.2 20.475 44.2 50.685s-17.75 50.685-44.2 50.685c-26.457 0-43.87-20.475-43.87-50.685Zm193.87 81.902h47.21l32.15-118.825 31.81 118.825h47.22l48.89-163.804h-41.52l-31.82 119.161-31.81-119.161h-45.87l-31.82 119.161-31.81-119.161h-41.52l48.89 163.804Zm260.07-188.308v24.504h-41.86v35.245h41.86v128.559h39.85V238.406h52.57v-35.245h-52.57v-20.14c0-11.077 6.36-15.776 16.74-15.776h45.88V132h-54.92c-29.8 0-47.55 16.448-47.55 46.657Zm123.47 188.308h39.85V203.161h-39.85v163.804Zm-1.34-192.336h42.86v-40.951h-42.86v40.951ZM1685.79 372c43.53 0 70.65-21.147 70.65-54.042 0-27.189-17.74-45.315-48.55-49.007l-26.46-3.021c-16.4-2.014-24.11-7.385-24.11-17.119 0-11.412 10.72-18.126 27.8-18.126 18.08 0 29.47 6.042 30.14 19.133h39.85c-2.01-34.238-28.13-51.692-69.32-51.692-41.53 0-67.65 20.14-67.65 52.699 0 27.86 19.09 45.986 49.57 49.343l26.11 2.685c14.4 1.343 22.44 6.713 22.44 17.119 0 12.084-11.05 19.804-29.13 19.804-20.09 0-31.81-6.713-33.15-20.475h-41.19c1.67 34.573 28.46 52.699 73 52.699Zm103.19-5.035h39.85v-93.65c0-23.497 14.4-38.937 36.17-38.937 21.1 0 33.15 12.084 33.15 37.594v94.993H1938v-99.021c0-44.308-24.78-69.818-64.96-69.818-18.09 0-33.83 6.042-44.21 17.79V132h-39.85v234.965Z" fill="#000"/></svg>',
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    t("div", {
                      className: "framer-1pbvw7z",
                      "data-framer-name": "Footer-Content-1",
                      name: "Footer-Content-1",
                      children: [
                        e(o, {
                          className: "framer-1hrxch3-container",
                          children: e(T, {
                            height: "100%",
                            id: "s4DkNNXuy",
                            layoutId: "s4DkNNXuy",
                            style: { width: "100%" },
                            variant: "VTiEmJqab",
                            width: "100%",
                          }),
                        }),
                        e(o, {
                          className: "framer-jri73v-container",
                          children: e(T, {
                            height: "100%",
                            id: "k1gDosDNM",
                            layoutId: "k1gDosDNM",
                            style: { width: "100%" },
                            variant: "lKL8mF5vF",
                            width: "100%",
                          }),
                        }),
                        e(o, {
                          className: "framer-p5z55f-container",
                          children: e(T, {
                            height: "100%",
                            id: "ey0SfFCYi",
                            layoutId: "ey0SfFCYi",
                            style: { width: "100%" },
                            variant: "OsWYhsm0z",
                            width: "100%",
                          }),
                        }),
                        e(o, {
                          className: "framer-13boop4-container",
                          children: e(T1, {
                            height: "100%",
                            id: "DAkiLlQsm",
                            layoutId: "DAkiLlQsm",
                            style: { width: "100%" },
                            width: "100%",
                          }),
                        }),
                      ],
                    }),
                    t("div", {
                      className: "framer-1bcdjfx",
                      "data-framer-name": "Footer-Content-2",
                      name: "Footer-Content-2",
                      children: [
                        e(o, {
                          className: "framer-19cu2k6-container",
                          children: e(T, {
                            height: "100%",
                            id: "HpAo4fj2l",
                            layoutId: "HpAo4fj2l",
                            style: { width: "100%" },
                            variant: "tSvGJoGcG",
                            width: "100%",
                          }),
                        }),
                        e(o, {
                          className: "framer-1v1e70h-container",
                          children: e(T, {
                            height: "100%",
                            id: "D5kdBL5ce",
                            layoutId: "D5kdBL5ce",
                            style: { width: "100%" },
                            variant: "UliBsAgsy",
                            width: "100%",
                          }),
                        }),
                        e(o, {
                          className: "framer-17xicnh-container",
                          children: e(T, {
                            height: "100%",
                            id: "sIvpGSdpn",
                            layoutId: "sIvpGSdpn",
                            style: { width: "100%" },
                            variant: "ig3Cc09Wt",
                            width: "100%",
                          }),
                        }),
                        e(o, {
                          className: "framer-55662p-container",
                          children: e(T, {
                            height: "100%",
                            id: "HNxtVxmAf",
                            layoutId: "HNxtVxmAf",
                            style: { width: "100%" },
                            variant: "lRwSbIIjT",
                            width: "100%",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e("div", { className: z(Ie, ...P1), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  da = [
    '.framer-yNuWI[data-border="true"]::after, .framer-yNuWI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${M1.bodyClassName}-framer-yNuWI { background: rgb(242, 244, 241); }`,
    ".framer-yNuWI.framer-lux5qc, .framer-yNuWI .framer-lux5qc { display: block; }",
    ".framer-yNuWI.framer-72rtr7 { align-content: center; align-items: center; background-color: #f2f4f1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1300px; }",
    ".framer-yNuWI .framer-yri3j9-container, .framer-yNuWI .framer-19cu2k6-container, .framer-yNuWI .framer-1v1e70h-container, .framer-yNuWI .framer-17xicnh-container, .framer-yNuWI .framer-55662p-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-14u3y19-container { flex: none; height: 70px; position: relative; width: 810px; }",
    ".framer-yNuWI .framer-anbrd9, .framer-yNuWI .framer-1m206e1, .framer-yNuWI .framer-mslmhc, .framer-yNuWI .framer-bcel84, .framer-yNuWI .framer-1epvy10 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-yNuWI .framer-iokwtq { aspect-ratio: 3.789473684210526 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 29px); position: relative; width: 110px; }",
    ".framer-yNuWI .framer-37b9ki { aspect-ratio: 5 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); position: relative; width: 110px; }",
    ".framer-yNuWI .framer-ei98th { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-yNuWI .framer-ouukhz { flex: none; height: 26px; position: relative; width: 163px; }",
    ".framer-yNuWI .framer-150hodz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-yNuWI .framer-1tvcox4 { aspect-ratio: 3.9473684210526314 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 110px; }",
    ".framer-yNuWI .framer-qrfjc6 { flex: none; height: 27px; position: relative; width: 90px; }",
    ".framer-yNuWI .framer-po6gjh { flex: none; height: 19px; position: relative; width: 110px; }",
    ".framer-yNuWI .framer-ymmltx-container, .framer-yNuWI .framer-17u7b1w-container, .framer-yNuWI .framer-1hof5c-container, .framer-yNuWI .framer-1827xkr-container, .framer-yNuWI .framer-1mh2ffx-container, .framer-yNuWI .framer-o0kciw-container { height: auto; position: relative; width: auto; }",
    ".framer-yNuWI .framer-ah5tf9 { aspect-ratio: 7.222222222222222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 110px; }",
    ".framer-yNuWI .framer-pmklgh-container { flex: none; height: 90px; position: relative; width: 390px; }",
    ".framer-yNuWI .framer-1p18m6d { align-content: center; align-items: center; background-color: #f2f4f1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: auto; justify-content: center; max-width: 1280px; overflow: hidden; padding: 40px 40px 40px 40px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-12w76a3 { flex: none; height: 570px; overflow: hidden; position: relative; width: 570px; }",
    ".framer-yNuWI .framer-vyw2iw-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; transform: perspective(1200px); width: 100%; }",
    ".framer-yNuWI .framer-1jfybez { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 100%; }",
    ".framer-yNuWI .framer-yddtiz { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; }",
    ".framer-yNuWI .framer-ihjkg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-dwdjhz, .framer-yNuWI .framer-8q91zl { flex: none; height: auto; overflow: visible; position: relative; transform: perspective(1200px); white-space: pre; width: auto; }",
    ".framer-yNuWI .framer-j028t0 { flex: none; height: auto; overflow: hidden; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-wrhe2s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-yNuWI .framer-177nco1-container, .framer-yNuWI .framer-1ah1mbh-container, .framer-yNuWI .framer-qw1g7l-container, .framer-yNuWI .framer-1ukcys8-container, .framer-yNuWI .framer-1rsb8b8-container, .framer-yNuWI .framer-7ttnqa-container, .framer-yNuWI .framer-kfe3yw-container, .framer-yNuWI .framer-p93yls-container, .framer-yNuWI .framer-hx2wxk-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-1lx3dru-container { flex: none; height: 70px; position: relative; width: 630px; }",
    ".framer-yNuWI .framer-u20rp9-container { flex: none; height: 70px; max-width: 1280px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-7a50qs { flex: none; height: 52px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1kxybj9 { --border-bottom-width: 1px; --border-color: rgba(213, 219, 215, 0.3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: auto; justify-content: center; max-width: 1280px; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-3gt785, .framer-yNuWI .framer-1j5fl6s, .framer-yNuWI .framer-u5n5hq { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-ognkec, .framer-yNuWI .framer-bqo4cc, .framer-yNuWI .framer-1pxif2p, .framer-yNuWI .framer-1d0iq16, .framer-yNuWI .framer-1nu97tu, .framer-yNuWI .framer-1aj2jun, .framer-yNuWI .framer-1ajjm7t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-yNuWI .framer-1mhcq7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-yNuWI .framer-1rzlosx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 52px 0px 52px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1nbjzt0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-159w6j7, .framer-yNuWI .framer-12b3bul { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 734px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-avgl0x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 84px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-n341ni { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 110px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-sf23mx, .framer-yNuWI .framer-bt6hvw { flex: none; height: 452px; position: relative; width: 590px; }",
    ".framer-yNuWI .framer-mnlz2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-8dyl26 { aspect-ratio: 0.9911504424778761 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 113px); position: relative; width: 112px; }",
    ".framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-19xfc8p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1hzpjje { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-yNuWI .framer-1j0m8mm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 472px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-1hscbq8 { flex: none; height: 61px; position: relative; white-space: pre-wrap; width: 390px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-wehjly-container, .framer-yNuWI .framer-u5kpu8-container, .framer-yNuWI .framer-b3l03b-container, .framer-yNuWI .framer-1jsbd1i-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-yNuWI .framer-eai1xf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 110px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1280px; }",
    ".framer-yNuWI .framer-pljmza { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-yNuWI .framer-ofc7wj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 112px); position: relative; width: 112px; }",
    ".framer-yNuWI .framer-9oxoxy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 204px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 472px; }",
    ".framer-yNuWI .framer-2l7h0c, .framer-yNuWI .framer-ve2fql, .framer-yNuWI .framer-1wayt4q, .framer-yNuWI .framer-er2gvc, .framer-yNuWI .framer-124daum { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-dgq5k3 { --border-bottom-width: 1px; --border-color: rgba(213, 219, 215, 0.3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 50px 80px 82px 80px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-32vezk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: auto; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1kq2cg8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: auto; justify-content: space-between; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-10ckuwp-container { flex: 1 0 0px; height: 271px; max-width: 1280px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-12m1px8, .framer-yNuWI .framer-1ou9g74, .framer-yNuWI .framer-mahbgu, .framer-yNuWI .framer-17ma8wy, .framer-yNuWI .framer-106m3if { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 798px; }",
    ".framer-yNuWI .framer-1g6wuw4, .framer-yNuWI .framer-11ohmih, .framer-yNuWI .framer-pib5yy, .framer-yNuWI .framer-xhsw0s, .framer-yNuWI .framer-110io2q { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 32px); justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 32px; z-index: 1; }",
    ".framer-yNuWI .framer-7ok4sa, .framer-yNuWI .framer-1a9qbgl, .framer-yNuWI .framer-usq27i, .framer-yNuWI .framer-h2x4wl, .framer-yNuWI .framer-1pzkjdh, .framer-yNuWI .framer-503s2u, .framer-yNuWI .framer-19s56tv { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 90%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-18hz0oy, .framer-yNuWI .framer-ej0ri3, .framer-yNuWI .framer-g9q1y, .framer-yNuWI .framer-1bunyp1, .framer-yNuWI .framer-1xmy2hg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: flex-start; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-yNuWI .framer-qg4x05, .framer-yNuWI .framer-oyukes, .framer-yNuWI .framer-17exi9d, .framer-yNuWI .framer-j8z4ii, .framer-yNuWI .framer-yptqhd { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 58px); overflow: hidden; position: relative; width: 58px; }",
    ".framer-yNuWI .framer-1tp932h, .framer-yNuWI .framer-j2t9cg, .framer-yNuWI .framer-xtfn87, .framer-yNuWI .framer-13wgs4b { aspect-ratio: 1 / 1; border-bottom-left-radius: 160px; border-bottom-right-radius: 160px; border-top-left-radius: 160px; border-top-right-radius: 160px; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 50px); left: 0px; overflow: hidden; position: absolute; width: 50px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-e3ezx1, .framer-yNuWI .framer-1f726r2, .framer-yNuWI .framer-eyuoey { --border-bottom-width: 2px; --border-color: #f2f4f1; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: absolute; right: 0px; width: 20px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-mh4tsy, .framer-yNuWI .framer-16wlmn9, .framer-yNuWI .framer-15t3nkz, .framer-yNuWI .framer-1j5us4s, .framer-yNuWI .framer-6ycz11, .framer-yNuWI .framer-rz9spm, .framer-yNuWI .framer-1q4zezo, .framer-yNuWI .framer-152fsx8, .framer-yNuWI .framer-7p98z, .framer-yNuWI .framer-1lj3am { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-yNuWI .framer-1wqag9r, .framer-yNuWI .framer-12r1rjp, .framer-yNuWI .framer-lnwc94, .framer-yNuWI .framer-xbfom3, .framer-yNuWI .framer-w9xmmq, .framer-yNuWI .framer-4hy7cm, .framer-yNuWI .framer-14wcenq, .framer-yNuWI .framer-umoq7w, .framer-yNuWI .framer-vnae94, .framer-yNuWI .framer-q3exju, .framer-yNuWI .framer-1a4cihk, .framer-yNuWI .framer-1lphu2, .framer-yNuWI .framer-1l3k8za, .framer-yNuWI .framer-1jad2n, .framer-yNuWI .framer-1qpc1iv, .framer-yNuWI .framer-1pfzttl, .framer-yNuWI .framer-14yv2h9, .framer-yNuWI .framer-p6qxkb, .framer-yNuWI .framer-1jee28o, .framer-yNuWI .framer-jhi8ej { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    ".framer-yNuWI .framer-cqf5a7 { aspect-ratio: 1 / 1; border-bottom-left-radius: 160px; border-bottom-right-radius: 160px; border-top-left-radius: 160px; border-top-right-radius: 160px; flex: none; height: var(--framer-aspect-ratio-supported, 45px); left: 0px; overflow: hidden; position: absolute; top: 47%; transform: translateY(-50%); width: 45px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-in1m2i { --border-bottom-width: 2px; --border-color: #f2f4f1; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: hidden; position: absolute; right: 0px; width: 25px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-gpw06p { --border-bottom-width: 2px; --border-color: #f2f4f1; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: #4c44c6; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 35px; overflow: hidden; position: absolute; width: 20px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-1v9jqzf { flex: none; height: 10px; left: calc(50.00000000000002% - 12px / 2); position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 12px; }",
    ".framer-yNuWI .framer-1l0jgw9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: auto; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-15y7d3x-container { flex: none; height: 387px; max-width: 1280px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-10te9fp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 440px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 715px; }",
    ".framer-yNuWI .framer-14ob0xl, .framer-yNuWI .framer-pj7b2f { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 100%; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-j4v7vl, .framer-yNuWI .framer-1kdksf7 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 58px); justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 58px; z-index: 1; }",
    ".framer-yNuWI .framer-drt13l, .framer-yNuWI .framer-1p4ab6q, .framer-yNuWI .framer-n8c8go, .framer-yNuWI .framer-1k58hpm, .framer-yNuWI .framer-dr2pef { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-yNuWI .framer-swtuoo, .framer-yNuWI .framer-1usa53p, .framer-yNuWI .framer-1rvxo07, .framer-yNuWI .framer-hgmxnp, .framer-yNuWI .framer-hhszaq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 92px); overflow: hidden; position: relative; width: 92px; }",
    ".framer-yNuWI .framer-sbqsv3, .framer-yNuWI .framer-1vdwoxb, .framer-yNuWI .framer-rn23xl, .framer-yNuWI .framer-qn9x4, .framer-yNuWI .framer-f0f1v1 { aspect-ratio: 1 / 1; border-bottom-left-radius: 160px; border-bottom-right-radius: 160px; border-top-left-radius: 160px; border-top-right-radius: 160px; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 80px); left: 0px; overflow: hidden; position: absolute; width: 80px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-1wh5so5, .framer-yNuWI .framer-51ex9s, .framer-yNuWI .framer-j97krc, .framer-yNuWI .framer-13s99p2 { --border-bottom-width: 2px; --border-color: #f2f4f1; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: absolute; right: 0px; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-1qa43ml { flex: none; height: 438px; position: relative; width: 408px; }",
    ".framer-yNuWI .framer-hcbdc1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 421px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 715px; }",
    ".framer-yNuWI .framer-qfwv3j, .framer-yNuWI .framer-vnydox, .framer-yNuWI .framer-1xummpl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 359px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 715px; }",
    ".framer-yNuWI .framer-1r93k3f, .framer-yNuWI .framer-vbaa9l, .framer-yNuWI .framer-1mvzzk3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 100%; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-1hx46lw, .framer-yNuWI .framer-g96p70, .framer-yNuWI .framer-1v56wdw { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 58px); overflow: hidden; position: relative; width: 58px; z-index: 1; }",
    ".framer-yNuWI .framer-664d6x, .framer-yNuWI .framer-dwp2xs, .framer-yNuWI .framer-1j555ax { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-15ys4zv { --border-bottom-width: 2px; --border-color: #f2f4f1; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; background-color: #4c44c6; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: absolute; right: 0px; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-ij24qw { flex: none; height: 25px; left: calc(50.00000000000002% - 30px / 2); position: absolute; top: calc(50.00000000000002% - 25px / 2); width: 30px; }",
    ".framer-yNuWI .framer-1mipdci, .framer-yNuWI .framer-1fqxv6x { flex: 1 0 0px; height: 100%; overflow: hidden; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-1t7khm1 { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 65%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-c3gc8y-container { flex: none; height: auto; position: relative; width: 347px; }",
    ".framer-yNuWI .framer-1nxv3iq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 1083px; justify-content: center; max-width: 1280px; overflow: hidden; padding: 52px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1enw1a6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1w8pxou { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 589px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-13rk37h { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-jtrsre { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: flex-start; max-width: 1280px; overflow: hidden; padding: 0px 0px 52px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1cpa2o5-container { flex: none; height: 60px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-18qaru7 { --border-bottom-width: 1px; --border-color: #d5dbd7; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: auto; justify-content: space-between; max-width: 1280px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-ic3ijg-container { flex: none; height: 60px; position: relative; width: 390px; }",
    ".framer-yNuWI .framer-x59u0z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1280px; overflow: hidden; padding: 0px 40px 52px 40px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1i5fk18 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-19mmp1z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-79iqsl-container, .framer-yNuWI .framer-1jcquhb-container, .framer-yNuWI .framer-1uqa2f8-container { flex: 1 0 0px; height: 523px; max-width: 410px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-1f9mjqo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 768px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-12ao1ya-container, .framer-yNuWI .framer-hfeghn-container { flex: none; height: auto; max-width: 410px; position: relative; width: 352px; }",
    ".framer-yNuWI .framer-ws0tdp-container { flex: none; height: auto; max-width: 410px; position: relative; width: 372px; }",
    ".framer-yNuWI .framer-bw5xpc { align-content: flex-start; align-items: flex-start; background-color: #fcd8cb; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 600px; overflow: hidden; padding: 120px 24px 16px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-phlw56 { -webkit-filter: blur(2px); aspect-ratio: 1.0075085324232083 / 1; filter: blur(2px); flex: none; height: var(--framer-aspect-ratio-supported, 481px); left: 318px; opacity: 0.61; overflow: hidden; position: absolute; right: -203px; top: -314px; transform: rotate(-120deg); z-index: 1; }",
    ".framer-yNuWI .framer-100g8ry { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-yNuWI .framer-qxg7yu, .framer-yNuWI .framer-1ckk3xd { flex: none; height: auto; max-width: 600px; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-1g04e9c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-c2ocjj { background-color: #fcd8cb; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: 338px; max-width: 1280px; overflow: hidden; position: relative; width: 95%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yNuWI .framer-byzn87 { -webkit-filter: blur(2px); aspect-ratio: 1.0075085324232083 / 1; filter: blur(2px); flex: none; height: var(--framer-aspect-ratio-supported, 913px); opacity: 0.61; overflow: hidden; position: absolute; right: -384px; top: -683px; width: 920px; }",
    ".framer-yNuWI .framer-1rmghkq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: flex-start; left: 60px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 50%; transform: perspective(1200px) translateY(-50%); width: auto; }",
    ".framer-yNuWI .framer-8s5gw0 { flex: none; height: auto; max-width: 770px; overflow: hidden; position: relative; white-space: pre-wrap; width: 770px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-82xhxt { flex: none; height: auto; max-width: 670px; overflow: hidden; position: relative; white-space: pre-wrap; width: 670px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yNuWI .framer-dpjnoi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-yNuWI .framer-2fyunu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: flex-start; max-width: 1280px; overflow: hidden; padding: 60px 20px 60px 20px; position: relative; width: 100%; }",
    ".framer-yNuWI .framer-1ovr08u { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-4zhldu { aspect-ratio: 3.867063492063492 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 62px); position: relative; text-decoration: none; width: 231px; }",
    ".framer-yNuWI .framer-1pbvw7z { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-end; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-yNuWI .framer-1hrxch3-container, .framer-yNuWI .framer-jri73v-container, .framer-yNuWI .framer-p5z55f-container, .framer-yNuWI .framer-13boop4-container { flex: none; height: auto; position: relative; width: 99%; z-index: 1; }",
    ".framer-yNuWI .framer-1bcdjfx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yNuWI.framer-72rtr7, .framer-yNuWI .framer-anbrd9, .framer-yNuWI .framer-1m206e1, .framer-yNuWI .framer-ei98th, .framer-yNuWI .framer-150hodz, .framer-yNuWI .framer-mslmhc, .framer-yNuWI .framer-bcel84, .framer-yNuWI .framer-1epvy10, .framer-yNuWI .framer-1p18m6d, .framer-yNuWI .framer-ihjkg, .framer-yNuWI .framer-wrhe2s, .framer-yNuWI .framer-3gt785, .framer-yNuWI .framer-1j5fl6s, .framer-yNuWI .framer-1mhcq7o, .framer-yNuWI .framer-u5n5hq, .framer-yNuWI .framer-1rzlosx, .framer-yNuWI .framer-1nbjzt0, .framer-yNuWI .framer-avgl0x, .framer-yNuWI .framer-n341ni, .framer-yNuWI .framer-mnlz2, .framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-1hzpjje, .framer-yNuWI .framer-eai1xf, .framer-yNuWI .framer-pljmza, .framer-yNuWI .framer-19xfc8p, .framer-yNuWI .framer-9oxoxy, .framer-yNuWI .framer-dgq5k3, .framer-yNuWI .framer-32vezk, .framer-yNuWI .framer-12m1px8, .framer-yNuWI .framer-1g6wuw4, .framer-yNuWI .framer-18hz0oy, .framer-yNuWI .framer-mh4tsy, .framer-yNuWI .framer-1ou9g74, .framer-yNuWI .framer-11ohmih, .framer-yNuWI .framer-ej0ri3, .framer-yNuWI .framer-16wlmn9, .framer-yNuWI .framer-mahbgu, .framer-yNuWI .framer-pib5yy, .framer-yNuWI .framer-g9q1y, .framer-yNuWI .framer-15t3nkz, .framer-yNuWI .framer-17ma8wy, .framer-yNuWI .framer-xhsw0s, .framer-yNuWI .framer-1bunyp1, .framer-yNuWI .framer-1j5us4s, .framer-yNuWI .framer-106m3if, .framer-yNuWI .framer-110io2q, .framer-yNuWI .framer-1xmy2hg, .framer-yNuWI .framer-6ycz11, .framer-yNuWI .framer-1l0jgw9, .framer-yNuWI .framer-14ob0xl, .framer-yNuWI .framer-j4v7vl, .framer-yNuWI .framer-drt13l, .framer-yNuWI .framer-rz9spm, .framer-yNuWI .framer-pj7b2f, .framer-yNuWI .framer-1kdksf7, .framer-yNuWI .framer-1p4ab6q, .framer-yNuWI .framer-1q4zezo, .framer-yNuWI .framer-1r93k3f, .framer-yNuWI .framer-n8c8go, .framer-yNuWI .framer-152fsx8, .framer-yNuWI .framer-vbaa9l, .framer-yNuWI .framer-1k58hpm, .framer-yNuWI .framer-7p98z, .framer-yNuWI .framer-1mvzzk3, .framer-yNuWI .framer-dr2pef, .framer-yNuWI .framer-1lj3am, .framer-yNuWI .framer-1nxv3iq, .framer-yNuWI .framer-1enw1a6, .framer-yNuWI .framer-jtrsre, .framer-yNuWI .framer-x59u0z, .framer-yNuWI .framer-1i5fk18, .framer-yNuWI .framer-19mmp1z, .framer-yNuWI .framer-1f9mjqo, .framer-yNuWI .framer-bw5xpc, .framer-yNuWI .framer-100g8ry, .framer-yNuWI .framer-1g04e9c, .framer-yNuWI .framer-1rmghkq, .framer-yNuWI .framer-dpjnoi, .framer-yNuWI .framer-2fyunu, .framer-yNuWI .framer-1ovr08u, .framer-yNuWI .framer-1pbvw7z, .framer-yNuWI .framer-1bcdjfx { gap: 0px; } .framer-yNuWI.framer-72rtr7 > *, .framer-yNuWI .framer-1pbvw7z > *, .framer-yNuWI .framer-1bcdjfx > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yNuWI.framer-72rtr7 > :first-child, .framer-yNuWI .framer-150hodz > :first-child, .framer-yNuWI .framer-ihjkg > :first-child, .framer-yNuWI .framer-3gt785 > :first-child, .framer-yNuWI .framer-1j5fl6s > :first-child, .framer-yNuWI .framer-u5n5hq > :first-child, .framer-yNuWI .framer-1rzlosx > :first-child, .framer-yNuWI .framer-1nbjzt0 > :first-child, .framer-yNuWI .framer-avgl0x > :first-child, .framer-yNuWI .framer-mnlz2 > :first-child, .framer-yNuWI .framer-wgscim > :first-child, .framer-yNuWI .framer-1hzpjje > :first-child, .framer-yNuWI .framer-pljmza > :first-child, .framer-yNuWI .framer-19xfc8p > :first-child, .framer-yNuWI .framer-9oxoxy > :first-child, .framer-yNuWI .framer-dgq5k3 > :first-child, .framer-yNuWI .framer-32vezk > :first-child, .framer-yNuWI .framer-12m1px8 > :first-child, .framer-yNuWI .framer-mh4tsy > :first-child, .framer-yNuWI .framer-1ou9g74 > :first-child, .framer-yNuWI .framer-16wlmn9 > :first-child, .framer-yNuWI .framer-mahbgu > :first-child, .framer-yNuWI .framer-15t3nkz > :first-child, .framer-yNuWI .framer-17ma8wy > :first-child, .framer-yNuWI .framer-1j5us4s > :first-child, .framer-yNuWI .framer-106m3if > :first-child, .framer-yNuWI .framer-6ycz11 > :first-child, .framer-yNuWI .framer-1l0jgw9 > :first-child, .framer-yNuWI .framer-14ob0xl > :first-child, .framer-yNuWI .framer-rz9spm > :first-child, .framer-yNuWI .framer-pj7b2f > :first-child, .framer-yNuWI .framer-1q4zezo > :first-child, .framer-yNuWI .framer-1r93k3f > :first-child, .framer-yNuWI .framer-152fsx8 > :first-child, .framer-yNuWI .framer-vbaa9l > :first-child, .framer-yNuWI .framer-7p98z > :first-child, .framer-yNuWI .framer-1mvzzk3 > :first-child, .framer-yNuWI .framer-1lj3am > :first-child, .framer-yNuWI .framer-1nxv3iq > :first-child, .framer-yNuWI .framer-1enw1a6 > :first-child, .framer-yNuWI .framer-jtrsre > :first-child, .framer-yNuWI .framer-x59u0z > :first-child, .framer-yNuWI .framer-1i5fk18 > :first-child, .framer-yNuWI .framer-bw5xpc > :first-child, .framer-yNuWI .framer-100g8ry > :first-child, .framer-yNuWI .framer-1rmghkq > :first-child, .framer-yNuWI .framer-1pbvw7z > :first-child, .framer-yNuWI .framer-1bcdjfx > :first-child { margin-top: 0px; } .framer-yNuWI.framer-72rtr7 > :last-child, .framer-yNuWI .framer-150hodz > :last-child, .framer-yNuWI .framer-ihjkg > :last-child, .framer-yNuWI .framer-3gt785 > :last-child, .framer-yNuWI .framer-1j5fl6s > :last-child, .framer-yNuWI .framer-u5n5hq > :last-child, .framer-yNuWI .framer-1rzlosx > :last-child, .framer-yNuWI .framer-1nbjzt0 > :last-child, .framer-yNuWI .framer-avgl0x > :last-child, .framer-yNuWI .framer-mnlz2 > :last-child, .framer-yNuWI .framer-wgscim > :last-child, .framer-yNuWI .framer-1hzpjje > :last-child, .framer-yNuWI .framer-pljmza > :last-child, .framer-yNuWI .framer-19xfc8p > :last-child, .framer-yNuWI .framer-9oxoxy > :last-child, .framer-yNuWI .framer-dgq5k3 > :last-child, .framer-yNuWI .framer-32vezk > :last-child, .framer-yNuWI .framer-12m1px8 > :last-child, .framer-yNuWI .framer-mh4tsy > :last-child, .framer-yNuWI .framer-1ou9g74 > :last-child, .framer-yNuWI .framer-16wlmn9 > :last-child, .framer-yNuWI .framer-mahbgu > :last-child, .framer-yNuWI .framer-15t3nkz > :last-child, .framer-yNuWI .framer-17ma8wy > :last-child, .framer-yNuWI .framer-1j5us4s > :last-child, .framer-yNuWI .framer-106m3if > :last-child, .framer-yNuWI .framer-6ycz11 > :last-child, .framer-yNuWI .framer-1l0jgw9 > :last-child, .framer-yNuWI .framer-14ob0xl > :last-child, .framer-yNuWI .framer-rz9spm > :last-child, .framer-yNuWI .framer-pj7b2f > :last-child, .framer-yNuWI .framer-1q4zezo > :last-child, .framer-yNuWI .framer-1r93k3f > :last-child, .framer-yNuWI .framer-152fsx8 > :last-child, .framer-yNuWI .framer-vbaa9l > :last-child, .framer-yNuWI .framer-7p98z > :last-child, .framer-yNuWI .framer-1mvzzk3 > :last-child, .framer-yNuWI .framer-1lj3am > :last-child, .framer-yNuWI .framer-1nxv3iq > :last-child, .framer-yNuWI .framer-1enw1a6 > :last-child, .framer-yNuWI .framer-jtrsre > :last-child, .framer-yNuWI .framer-x59u0z > :last-child, .framer-yNuWI .framer-1i5fk18 > :last-child, .framer-yNuWI .framer-bw5xpc > :last-child, .framer-yNuWI .framer-100g8ry > :last-child, .framer-yNuWI .framer-1rmghkq > :last-child, .framer-yNuWI .framer-1pbvw7z > :last-child, .framer-yNuWI .framer-1bcdjfx > :last-child { margin-bottom: 0px; } .framer-yNuWI .framer-anbrd9 > *, .framer-yNuWI .framer-1m206e1 > *, .framer-yNuWI .framer-ei98th > *, .framer-yNuWI .framer-mslmhc > *, .framer-yNuWI .framer-bcel84 > *, .framer-yNuWI .framer-1epvy10 > *, .framer-yNuWI .framer-1g6wuw4 > *, .framer-yNuWI .framer-11ohmih > *, .framer-yNuWI .framer-pib5yy > *, .framer-yNuWI .framer-xhsw0s > *, .framer-yNuWI .framer-110io2q > *, .framer-yNuWI .framer-j4v7vl > *, .framer-yNuWI .framer-1kdksf7 > *, .framer-yNuWI .framer-1ovr08u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yNuWI .framer-anbrd9 > :first-child, .framer-yNuWI .framer-1m206e1 > :first-child, .framer-yNuWI .framer-ei98th > :first-child, .framer-yNuWI .framer-mslmhc > :first-child, .framer-yNuWI .framer-bcel84 > :first-child, .framer-yNuWI .framer-1epvy10 > :first-child, .framer-yNuWI .framer-1p18m6d > :first-child, .framer-yNuWI .framer-wrhe2s > :first-child, .framer-yNuWI .framer-1mhcq7o > :first-child, .framer-yNuWI .framer-n341ni > :first-child, .framer-yNuWI .framer-eai1xf > :first-child, .framer-yNuWI .framer-1g6wuw4 > :first-child, .framer-yNuWI .framer-18hz0oy > :first-child, .framer-yNuWI .framer-11ohmih > :first-child, .framer-yNuWI .framer-ej0ri3 > :first-child, .framer-yNuWI .framer-pib5yy > :first-child, .framer-yNuWI .framer-g9q1y > :first-child, .framer-yNuWI .framer-xhsw0s > :first-child, .framer-yNuWI .framer-1bunyp1 > :first-child, .framer-yNuWI .framer-110io2q > :first-child, .framer-yNuWI .framer-1xmy2hg > :first-child, .framer-yNuWI .framer-j4v7vl > :first-child, .framer-yNuWI .framer-drt13l > :first-child, .framer-yNuWI .framer-1kdksf7 > :first-child, .framer-yNuWI .framer-1p4ab6q > :first-child, .framer-yNuWI .framer-n8c8go > :first-child, .framer-yNuWI .framer-1k58hpm > :first-child, .framer-yNuWI .framer-dr2pef > :first-child, .framer-yNuWI .framer-19mmp1z > :first-child, .framer-yNuWI .framer-1f9mjqo > :first-child, .framer-yNuWI .framer-1g04e9c > :first-child, .framer-yNuWI .framer-dpjnoi > :first-child, .framer-yNuWI .framer-2fyunu > :first-child, .framer-yNuWI .framer-1ovr08u > :first-child { margin-left: 0px; } .framer-yNuWI .framer-anbrd9 > :last-child, .framer-yNuWI .framer-1m206e1 > :last-child, .framer-yNuWI .framer-ei98th > :last-child, .framer-yNuWI .framer-mslmhc > :last-child, .framer-yNuWI .framer-bcel84 > :last-child, .framer-yNuWI .framer-1epvy10 > :last-child, .framer-yNuWI .framer-1p18m6d > :last-child, .framer-yNuWI .framer-wrhe2s > :last-child, .framer-yNuWI .framer-1mhcq7o > :last-child, .framer-yNuWI .framer-n341ni > :last-child, .framer-yNuWI .framer-eai1xf > :last-child, .framer-yNuWI .framer-1g6wuw4 > :last-child, .framer-yNuWI .framer-18hz0oy > :last-child, .framer-yNuWI .framer-11ohmih > :last-child, .framer-yNuWI .framer-ej0ri3 > :last-child, .framer-yNuWI .framer-pib5yy > :last-child, .framer-yNuWI .framer-g9q1y > :last-child, .framer-yNuWI .framer-xhsw0s > :last-child, .framer-yNuWI .framer-1bunyp1 > :last-child, .framer-yNuWI .framer-110io2q > :last-child, .framer-yNuWI .framer-1xmy2hg > :last-child, .framer-yNuWI .framer-j4v7vl > :last-child, .framer-yNuWI .framer-drt13l > :last-child, .framer-yNuWI .framer-1kdksf7 > :last-child, .framer-yNuWI .framer-1p4ab6q > :last-child, .framer-yNuWI .framer-n8c8go > :last-child, .framer-yNuWI .framer-1k58hpm > :last-child, .framer-yNuWI .framer-dr2pef > :last-child, .framer-yNuWI .framer-19mmp1z > :last-child, .framer-yNuWI .framer-1f9mjqo > :last-child, .framer-yNuWI .framer-1g04e9c > :last-child, .framer-yNuWI .framer-dpjnoi > :last-child, .framer-yNuWI .framer-2fyunu > :last-child, .framer-yNuWI .framer-1ovr08u > :last-child { margin-right: 0px; } .framer-yNuWI .framer-150hodz > *, .framer-yNuWI .framer-9oxoxy > *, .framer-yNuWI .framer-12m1px8 > *, .framer-yNuWI .framer-1ou9g74 > *, .framer-yNuWI .framer-mahbgu > *, .framer-yNuWI .framer-17ma8wy > *, .framer-yNuWI .framer-106m3if > *, .framer-yNuWI .framer-1i5fk18 > *, .framer-yNuWI .framer-bw5xpc > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yNuWI .framer-1p18m6d > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-yNuWI .framer-ihjkg > *, .framer-yNuWI .framer-14ob0xl > *, .framer-yNuWI .framer-pj7b2f > *, .framer-yNuWI .framer-100g8ry > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-yNuWI .framer-wrhe2s > *, .framer-yNuWI .framer-2fyunu > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-yNuWI .framer-3gt785 > *, .framer-yNuWI .framer-1j5fl6s > *, .framer-yNuWI .framer-u5n5hq > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-yNuWI .framer-1mhcq7o > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-yNuWI .framer-1rzlosx > * { margin: 0px; margin-bottom: calc(44px / 2); margin-top: calc(44px / 2); } .framer-yNuWI .framer-1nbjzt0 > *, .framer-yNuWI .framer-1hzpjje > *, .framer-yNuWI .framer-dgq5k3 > *, .framer-yNuWI .framer-1r93k3f > *, .framer-yNuWI .framer-vbaa9l > *, .framer-yNuWI .framer-1mvzzk3 > *, .framer-yNuWI .framer-1enw1a6 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-yNuWI .framer-avgl0x > * { margin: 0px; margin-bottom: calc(84px / 2); margin-top: calc(84px / 2); } .framer-yNuWI .framer-n341ni > *, .framer-yNuWI .framer-eai1xf > * { margin: 0px; margin-left: calc(110px / 2); margin-right: calc(110px / 2); } .framer-yNuWI .framer-mnlz2 > *, .framer-yNuWI .framer-pljmza > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-yNuWI .framer-wgscim > *, .framer-yNuWI .framer-19xfc8p > *, .framer-yNuWI .framer-32vezk > *, .framer-yNuWI .framer-1l0jgw9 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-yNuWI .framer-18hz0oy > *, .framer-yNuWI .framer-ej0ri3 > *, .framer-yNuWI .framer-g9q1y > *, .framer-yNuWI .framer-1bunyp1 > *, .framer-yNuWI .framer-1xmy2hg > *, .framer-yNuWI .framer-drt13l > *, .framer-yNuWI .framer-1p4ab6q > *, .framer-yNuWI .framer-n8c8go > *, .framer-yNuWI .framer-1k58hpm > *, .framer-yNuWI .framer-dr2pef > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-yNuWI .framer-mh4tsy > *, .framer-yNuWI .framer-16wlmn9 > *, .framer-yNuWI .framer-15t3nkz > *, .framer-yNuWI .framer-1j5us4s > *, .framer-yNuWI .framer-6ycz11 > *, .framer-yNuWI .framer-rz9spm > *, .framer-yNuWI .framer-1q4zezo > *, .framer-yNuWI .framer-152fsx8 > *, .framer-yNuWI .framer-7p98z > *, .framer-yNuWI .framer-1lj3am > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-yNuWI .framer-1nxv3iq > *, .framer-yNuWI .framer-x59u0z > *, .framer-yNuWI .framer-1rmghkq > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-yNuWI .framer-jtrsre > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-yNuWI .framer-19mmp1z > *, .framer-yNuWI .framer-1f9mjqo > *, .framer-yNuWI .framer-dpjnoi > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-yNuWI .framer-1g04e9c > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } }",
    "@media (min-width: 1300px) { .framer-yNuWI .hidden-72rtr7 { display: none !important; } }",
    `@media (min-width: 798px) and (max-width: 1299px) { .framer-yNuWI .hidden-9i6d03 { display: none !important; } .${M1.bodyClassName}-framer-yNuWI { background: rgb(242, 244, 241); } .framer-yNuWI.framer-72rtr7 { width: 798px; } .framer-yNuWI .framer-yri3j9-container, .framer-yNuWI .framer-1i5fk18 { max-width: 768px; order: 0; } .framer-yNuWI .framer-14u3y19-container, .framer-yNuWI .framer-ws0tdp-container { order: 3; } .framer-yNuWI .framer-1p18m6d { flex-direction: column; max-width: 768px; order: 1; padding: 0px 64px 30px 64px; } .framer-yNuWI .framer-12w76a3 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 440px); order: 0; width: 440px; } .framer-yNuWI .framer-vyw2iw-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 484px); left: -22px; order: 1; top: -22px; width: 484px; } .framer-yNuWI .framer-1jfybez { left: calc(50.00000000000002% - 100% / 2); order: 0; top: calc(50.00000000000002% - 100% / 2); } .framer-yNuWI .framer-ihjkg { align-content: center; align-items: center; flex: none; gap: 32px; max-width: 768px; order: 1; width: 100%; } .framer-yNuWI .framer-dwdjhz { overflow: hidden; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-yNuWI .framer-1kxybj9 { gap: 40px; grid-auto-rows: min-content; grid-template-rows: repeat(1, min-content); justify-content: start; max-width: 768px; order: 4; padding: 30px 0px 24px 0px; } .framer-yNuWI .framer-3gt785, .framer-yNuWI .framer-1j5fl6s, .framer-yNuWI .framer-u5n5hq { height: auto; } .framer-yNuWI .framer-ognkec, .framer-yNuWI .framer-bqo4cc, .framer-yNuWI .framer-1nu97tu, .framer-yNuWI .framer-1aj2jun, .framer-yNuWI .framer-1ajjm7t, .framer-yNuWI .framer-8q91zl { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-yNuWI .framer-1mhcq7o, .framer-yNuWI .framer-159w6j7, .framer-yNuWI .framer-12b3bul, .framer-yNuWI .framer-1j0m8mm, .framer-yNuWI .framer-1hscbq8, .framer-yNuWI .framer-1w8pxou { width: 100%; } .framer-yNuWI .framer-1rzlosx { max-width: 768px; order: 5; padding: 52px 20px 52px 20px; } .framer-yNuWI .framer-1nbjzt0, .framer-yNuWI .framer-32vezk { max-width: 768px; } .framer-yNuWI .framer-avgl0x { max-width: 768px; padding: 0px 0px 0px 0px; } .framer-yNuWI .framer-n341ni { gap: 70px; max-width: 768px; } .framer-yNuWI .framer-sf23mx, .framer-yNuWI .framer-bt6hvw { height: 254px; width: 332px; } .framer-yNuWI .framer-mnlz2 { gap: 0px; } .framer-yNuWI .framer-8dyl26 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 82px); width: 82px; } .framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-19xfc8p { gap: 25px; } .framer-yNuWI .framer-1hzpjje { gap: 10px; width: 100%; } .framer-yNuWI .framer-eai1xf { gap: 70px; max-width: 768px; width: 100%; } .framer-yNuWI .framer-pljmza { flex: 1 0 0px; gap: 0px; width: 1px; } .framer-yNuWI .framer-ofc7wj { height: var(--framer-aspect-ratio-supported, 82px); width: 82px; } .framer-yNuWI .framer-9oxoxy { height: min-content; width: 100%; } .framer-yNuWI .framer-dgq5k3 { max-width: 768px; order: 6; padding: 52px 20px 20px 20px; } .framer-yNuWI .framer-1kq2cg8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; justify-content: center; max-width: 768px; } .framer-yNuWI .framer-10ckuwp-container { flex: none; order: 0; width: 100%; } .framer-yNuWI .framer-1nxv3iq { height: min-content; max-width: 768px; order: 7; } .framer-yNuWI .framer-1enw1a6, .framer-yNuWI .framer-12ao1ya-container { order: 0; } .framer-yNuWI .framer-13rk37h { flex: none; height: 680px; order: 1; } .framer-yNuWI .framer-jtrsre { max-width: 768px; order: 8; padding: 52px 0px 52px 0px; } .framer-yNuWI .framer-18qaru7 { align-content: unset; align-items: unset; display: grid; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); justify-content: center; max-width: 768px; padding: 12px 12px 12px 12px; } .framer-yNuWI .framer-1ukcys8-container, .framer-yNuWI .framer-1rsb8b8-container, .framer-yNuWI .framer-7ttnqa-container, .framer-yNuWI .framer-kfe3yw-container { align-self: start; flex: none; height: 100%; justify-self: start; width: 100%; } .framer-yNuWI .framer-x59u0z { max-width: 768px; order: 9; } .framer-yNuWI .framer-1f9mjqo { order: 2; } .framer-yNuWI .framer-hfeghn-container { order: 1; } .framer-yNuWI .framer-c2ocjj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 768px; order: 10; padding: 0px 0px 0px 0px; width: 100%; } .framer-yNuWI .framer-byzn87 { height: var(--framer-aspect-ratio-supported, 400px); opacity: unset; right: -125px; top: -278px; width: 403px; z-index: 1; } .framer-yNuWI .framer-1rmghkq { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: 1 0 0px; gap: 14px; left: unset; max-width: 768px; padding: 84px 40px 44px 64px; position: relative; top: unset; transform: perspective(1200px); width: 1px; } .framer-yNuWI .framer-8s5gw0 { max-width: 768px; order: 0; width: 100%; } .framer-yNuWI .framer-82xhxt { max-width: 768px; order: 1; width: 100%; } .framer-yNuWI .framer-dpjnoi { gap: 15px; justify-content: flex-start; order: 2; } .framer-yNuWI .framer-2fyunu { flex-direction: column; max-width: 768px; order: 11; padding: 60px 0px 30px 0px; } .framer-yNuWI .framer-1ovr08u { align-self: unset; flex: none; gap: 0px; width: 100%; } .framer-yNuWI .framer-1pbvw7z, .framer-yNuWI .framer-1bcdjfx { flex: none; width: 100%; } .framer-yNuWI .framer-1hrxch3-container, .framer-yNuWI .framer-jri73v-container { width: 765px; } .framer-yNuWI .framer-p5z55f-container, .framer-yNuWI .framer-13boop4-container { width: 764px; } .framer-yNuWI .framer-19cu2k6-container, .framer-yNuWI .framer-1v1e70h-container, .framer-yNuWI .framer-17xicnh-container, .framer-yNuWI .framer-55662p-container { width: 768px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yNuWI .framer-1p18m6d, .framer-yNuWI .framer-ihjkg, .framer-yNuWI .framer-1kxybj9, .framer-yNuWI .framer-n341ni, .framer-yNuWI .framer-mnlz2, .framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-1hzpjje, .framer-yNuWI .framer-eai1xf, .framer-yNuWI .framer-pljmza, .framer-yNuWI .framer-19xfc8p, .framer-yNuWI .framer-1kq2cg8, .framer-yNuWI .framer-18qaru7, .framer-yNuWI .framer-c2ocjj, .framer-yNuWI .framer-1rmghkq, .framer-yNuWI .framer-dpjnoi, .framer-yNuWI .framer-2fyunu, .framer-yNuWI .framer-1ovr08u { gap: 0px; } .framer-yNuWI .framer-1p18m6d > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yNuWI .framer-1p18m6d > :first-child, .framer-yNuWI .framer-ihjkg > :first-child, .framer-yNuWI .framer-mnlz2 > :first-child, .framer-yNuWI .framer-wgscim > :first-child, .framer-yNuWI .framer-1hzpjje > :first-child, .framer-yNuWI .framer-pljmza > :first-child, .framer-yNuWI .framer-19xfc8p > :first-child, .framer-yNuWI .framer-1kq2cg8 > :first-child, .framer-yNuWI .framer-1rmghkq > :first-child, .framer-yNuWI .framer-2fyunu > :first-child { margin-top: 0px; } .framer-yNuWI .framer-1p18m6d > :last-child, .framer-yNuWI .framer-ihjkg > :last-child, .framer-yNuWI .framer-mnlz2 > :last-child, .framer-yNuWI .framer-wgscim > :last-child, .framer-yNuWI .framer-1hzpjje > :last-child, .framer-yNuWI .framer-pljmza > :last-child, .framer-yNuWI .framer-19xfc8p > :last-child, .framer-yNuWI .framer-1kq2cg8 > :last-child, .framer-yNuWI .framer-1rmghkq > :last-child, .framer-yNuWI .framer-2fyunu > :last-child { margin-bottom: 0px; } .framer-yNuWI .framer-ihjkg > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-yNuWI .framer-1kxybj9 > *, .framer-yNuWI .framer-1kxybj9 > :first-child, .framer-yNuWI .framer-1kxybj9 > :last-child, .framer-yNuWI .framer-18qaru7 > *, .framer-yNuWI .framer-18qaru7 > :first-child, .framer-yNuWI .framer-18qaru7 > :last-child { margin: 0px; } .framer-yNuWI .framer-n341ni > *, .framer-yNuWI .framer-eai1xf > * { margin: 0px; margin-left: calc(70px / 2); margin-right: calc(70px / 2); } .framer-yNuWI .framer-n341ni > :first-child, .framer-yNuWI .framer-eai1xf > :first-child, .framer-yNuWI .framer-c2ocjj > :first-child, .framer-yNuWI .framer-dpjnoi > :first-child, .framer-yNuWI .framer-1ovr08u > :first-child { margin-left: 0px; } .framer-yNuWI .framer-n341ni > :last-child, .framer-yNuWI .framer-eai1xf > :last-child, .framer-yNuWI .framer-c2ocjj > :last-child, .framer-yNuWI .framer-dpjnoi > :last-child, .framer-yNuWI .framer-1ovr08u > :last-child { margin-right: 0px; } .framer-yNuWI .framer-mnlz2 > *, .framer-yNuWI .framer-pljmza > *, .framer-yNuWI .framer-1kq2cg8 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yNuWI .framer-wgscim > *, .framer-yNuWI .framer-19xfc8p > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-yNuWI .framer-1hzpjje > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yNuWI .framer-c2ocjj > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yNuWI .framer-1rmghkq > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-yNuWI .framer-dpjnoi > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-yNuWI .framer-2fyunu > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-yNuWI .framer-1ovr08u > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }}`,
    `@media (min-width: 630px) and (max-width: 797px) { .framer-yNuWI .hidden-1dkgatv { display: none !important; } .${M1.bodyClassName}-framer-yNuWI { background: rgb(242, 244, 241); } .framer-yNuWI.framer-72rtr7 { width: 630px; } .framer-yNuWI .framer-yri3j9-container, .framer-yNuWI .framer-1enw1a6 { order: 0; } .framer-yNuWI .framer-1p18m6d { flex-direction: column; max-width: 600px; order: 1; padding: 0px 0px 30px 0px; } .framer-yNuWI .framer-12w76a3 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 440px); order: 0; width: 440px; } .framer-yNuWI .framer-vyw2iw-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 1px); left: -22px; order: 1; top: -22px; width: 484px; } .framer-yNuWI .framer-1jfybez { left: calc(50.00000000000002% - 100% / 2); order: 0; top: calc(50.00000000000002% - 100% / 2); } .framer-yNuWI .framer-ihjkg { align-content: center; align-items: center; flex: none; gap: 32px; max-width: 600px; order: 1; width: 100%; } .framer-yNuWI .framer-dwdjhz { overflow: hidden; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-yNuWI .framer-1lx3dru-container { order: 2; } .framer-yNuWI .framer-1kxybj9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 60px; max-width: 600px; order: 5; padding: 52px 0px 52px 0px; } .framer-yNuWI .framer-3gt785, .framer-yNuWI .framer-u5n5hq { align-self: unset; height: auto; width: 200px; } .framer-yNuWI .framer-ognkec, .framer-yNuWI .framer-bqo4cc, .framer-yNuWI .framer-1nu97tu, .framer-yNuWI .framer-1aj2jun, .framer-yNuWI .framer-1ajjm7t, .framer-yNuWI .framer-8q91zl { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-yNuWI .framer-1j5fl6s { align-self: unset; height: auto; width: 229px; } .framer-yNuWI .framer-1mhcq7o, .framer-yNuWI .framer-159w6j7, .framer-yNuWI .framer-12b3bul, .framer-yNuWI .framer-1j0m8mm, .framer-yNuWI .framer-1hscbq8, .framer-yNuWI .framer-1w8pxou, .framer-yNuWI .framer-1hrxch3-container, .framer-yNuWI .framer-jri73v-container { width: 100%; } .framer-yNuWI .framer-1rzlosx { max-width: 600px; order: 6; } .framer-yNuWI .framer-1nbjzt0, .framer-yNuWI .framer-32vezk { max-width: 600px; } .framer-yNuWI .framer-avgl0x { gap: 52px; max-width: 600px; padding: 0px 0px 0px 0px; } .framer-yNuWI .framer-n341ni { gap: 30px; max-width: 600px; } .framer-yNuWI .framer-sf23mx { height: 254px; width: 332px; } .framer-yNuWI .framer-mnlz2 { gap: 0px; } .framer-yNuWI .framer-8dyl26 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 82px); width: 82px; } .framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-19xfc8p { gap: 25px; } .framer-yNuWI .framer-1hzpjje { gap: 10px; width: 100%; } .framer-yNuWI .framer-eai1xf { gap: 30px; max-width: 600px; width: 100%; } .framer-yNuWI .framer-pljmza { flex: 1 0 0px; gap: 0px; width: 1px; } .framer-yNuWI .framer-ofc7wj { height: var(--framer-aspect-ratio-supported, 82px); width: 82px; } .framer-yNuWI .framer-9oxoxy { height: min-content; width: 100%; } .framer-yNuWI .framer-bt6hvw { height: 212px; width: 277px; } .framer-yNuWI .framer-dgq5k3 { max-width: 600px; order: 7; padding: 52px 0px 20px 0px; } .framer-yNuWI .framer-1kq2cg8 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; justify-content: center; max-width: 600px; } .framer-yNuWI .framer-10ckuwp-container { flex: none; max-width: 600px; order: 0; width: 100%; } .framer-yNuWI .framer-1nxv3iq { height: min-content; max-width: 600px; order: 8; } .framer-yNuWI .framer-13rk37h { flex: none; height: 680px; order: 1; } .framer-yNuWI .framer-jtrsre { max-width: 600px; order: 9; padding: 52px 0px 52px 0px; } .framer-yNuWI .framer-x59u0z { max-width: 600px; order: 10; padding: 52px 40px 52px 40px; } .framer-yNuWI .framer-1i5fk18 { max-width: 768px; order: 0; } .framer-yNuWI .framer-1f9mjqo { flex-direction: column; max-width: 600px; order: 2; } .framer-yNuWI .framer-12ao1ya-container { max-width: 430px; order: 0; } .framer-yNuWI .framer-hfeghn-container { order: 1; } .framer-yNuWI .framer-ws0tdp-container { order: 3; } .framer-yNuWI .framer-bw5xpc { order: 11; } .framer-yNuWI .framer-2fyunu { flex-direction: column; max-width: 600px; order: 15; padding: 60px 0px 30px 0px; } .framer-yNuWI .framer-1ovr08u { align-self: unset; flex: none; gap: 0px; padding: 0px 0px 44px 0px; width: 600px; } .framer-yNuWI .framer-1pbvw7z { flex: none; width: 100%; } .framer-yNuWI .framer-1bcdjfx { align-content: flex-start; align-items: flex-start; flex: none; justify-content: flex-end; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yNuWI .framer-1p18m6d, .framer-yNuWI .framer-ihjkg, .framer-yNuWI .framer-1kxybj9, .framer-yNuWI .framer-avgl0x, .framer-yNuWI .framer-n341ni, .framer-yNuWI .framer-mnlz2, .framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-1hzpjje, .framer-yNuWI .framer-eai1xf, .framer-yNuWI .framer-pljmza, .framer-yNuWI .framer-19xfc8p, .framer-yNuWI .framer-1kq2cg8, .framer-yNuWI .framer-1f9mjqo, .framer-yNuWI .framer-2fyunu, .framer-yNuWI .framer-1ovr08u { gap: 0px; } .framer-yNuWI .framer-1p18m6d > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yNuWI .framer-1p18m6d > :first-child, .framer-yNuWI .framer-ihjkg > :first-child, .framer-yNuWI .framer-1kxybj9 > :first-child, .framer-yNuWI .framer-avgl0x > :first-child, .framer-yNuWI .framer-mnlz2 > :first-child, .framer-yNuWI .framer-wgscim > :first-child, .framer-yNuWI .framer-1hzpjje > :first-child, .framer-yNuWI .framer-pljmza > :first-child, .framer-yNuWI .framer-19xfc8p > :first-child, .framer-yNuWI .framer-1kq2cg8 > :first-child, .framer-yNuWI .framer-1f9mjqo > :first-child, .framer-yNuWI .framer-2fyunu > :first-child { margin-top: 0px; } .framer-yNuWI .framer-1p18m6d > :last-child, .framer-yNuWI .framer-ihjkg > :last-child, .framer-yNuWI .framer-1kxybj9 > :last-child, .framer-yNuWI .framer-avgl0x > :last-child, .framer-yNuWI .framer-mnlz2 > :last-child, .framer-yNuWI .framer-wgscim > :last-child, .framer-yNuWI .framer-1hzpjje > :last-child, .framer-yNuWI .framer-pljmza > :last-child, .framer-yNuWI .framer-19xfc8p > :last-child, .framer-yNuWI .framer-1kq2cg8 > :last-child, .framer-yNuWI .framer-1f9mjqo > :last-child, .framer-yNuWI .framer-2fyunu > :last-child { margin-bottom: 0px; } .framer-yNuWI .framer-ihjkg > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-yNuWI .framer-1kxybj9 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-yNuWI .framer-avgl0x > * { margin: 0px; margin-bottom: calc(52px / 2); margin-top: calc(52px / 2); } .framer-yNuWI .framer-n341ni > *, .framer-yNuWI .framer-eai1xf > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-yNuWI .framer-n341ni > :first-child, .framer-yNuWI .framer-eai1xf > :first-child, .framer-yNuWI .framer-1ovr08u > :first-child { margin-left: 0px; } .framer-yNuWI .framer-n341ni > :last-child, .framer-yNuWI .framer-eai1xf > :last-child, .framer-yNuWI .framer-1ovr08u > :last-child { margin-right: 0px; } .framer-yNuWI .framer-mnlz2 > *, .framer-yNuWI .framer-pljmza > *, .framer-yNuWI .framer-1kq2cg8 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yNuWI .framer-wgscim > *, .framer-yNuWI .framer-19xfc8p > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-yNuWI .framer-1hzpjje > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yNuWI .framer-1f9mjqo > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-yNuWI .framer-2fyunu > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-yNuWI .framer-1ovr08u > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }}`,
    `@media (max-width: 629px) { .framer-yNuWI .hidden-1d7sfhj { display: none !important; } .${M1.bodyClassName}-framer-yNuWI { background: rgb(242, 244, 241); } .framer-yNuWI.framer-72rtr7 { width: 390px; } .framer-yNuWI .framer-yri3j9-container, .framer-yNuWI .framer-1j555ax { order: 0; } .framer-yNuWI .framer-pmklgh-container { order: 2; } .framer-yNuWI .framer-1p18m6d { flex-direction: column; gap: 0px; max-width: 100%; order: 1; padding: 0px 24px 25px 24px; } .framer-yNuWI .framer-12w76a3 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 320px); width: 320px; } .framer-yNuWI .framer-vyw2iw-container { height: 105%; left: -8px; order: 0; top: calc(50.00000000000002% - 105% / 2); width: 105%; } .framer-yNuWI .framer-1jfybez, .framer-yNuWI .framer-j028t0 { order: 1; } .framer-yNuWI .framer-yddtiz { left: calc(50.00000000000002% - 100% / 2); top: calc(50.00000000000002% - 100% / 2); } .framer-yNuWI .framer-ihjkg { flex: none; gap: 20px; width: 100%; } .framer-yNuWI .framer-dwdjhz { order: 0; overflow: hidden; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-yNuWI .framer-wrhe2s { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 2; } .framer-yNuWI .framer-177nco1-container, .framer-yNuWI .framer-1ah1mbh-container { flex: none; width: 100%; } .framer-yNuWI .framer-1kxybj9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; max-width: 100%; order: 5; padding: 50px 22px 50px 22px; } .framer-yNuWI .framer-3gt785 { align-self: unset; height: auto; order: 1; width: auto; } .framer-yNuWI .framer-1j5fl6s { align-self: unset; height: auto; max-width: 200px; order: 0; width: auto; } .framer-yNuWI .framer-u5n5hq { align-self: unset; height: auto; order: 2; width: auto; } .framer-yNuWI .framer-1rzlosx { gap: 22px; max-width: 100%; order: 6; padding: 50px 30px 50px 30px; } .framer-yNuWI .framer-159w6j7, .framer-yNuWI .framer-12b3bul, .framer-yNuWI .framer-1hzpjje, .framer-yNuWI .framer-1j0m8mm, .framer-yNuWI .framer-1w8pxou, .framer-yNuWI .framer-8s5gw0, .framer-yNuWI .framer-82xhxt, .framer-yNuWI .framer-1hrxch3-container, .framer-yNuWI .framer-jri73v-container { width: 100%; } .framer-yNuWI .framer-avgl0x { gap: 20px; width: min-content; } .framer-yNuWI .framer-n341ni, .framer-yNuWI .framer-eai1xf { align-self: stretch; flex-direction: column; gap: 0px; max-width: 100%; padding: 0px 0px 15px 0px; width: auto; } .framer-yNuWI .framer-sf23mx { height: 270px; order: 1; width: 100%; } .framer-yNuWI .framer-mnlz2 { flex: none; gap: 0px; height: 243px; order: 0; width: min-content; } .framer-yNuWI .framer-8dyl26 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 80px); width: 80px; } .framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-19xfc8p { gap: 20px; width: 330px; } .framer-yNuWI .framer-1hscbq8 { height: auto; width: 100%; } .framer-yNuWI .framer-pljmza { gap: 0px; } .framer-yNuWI .framer-ofc7wj { height: var(--framer-aspect-ratio-supported, 90px); width: 90px; } .framer-yNuWI .framer-9oxoxy { height: min-content; width: 100%; } .framer-yNuWI .framer-bt6hvw { height: 270px; width: 100%; } .framer-yNuWI .framer-dgq5k3 { gap: 0px; max-width: 100%; order: 7; padding: 50px 24px 50px 24px; width: 390px; } .framer-yNuWI .framer-32vezk { gap: 10px; justify-content: flex-start; max-width: 100%; order: 0; } .framer-yNuWI .framer-8q91zl { height: 84px; order: 0; overflow: hidden; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-yNuWI .framer-1kq2cg8 { flex-direction: column; max-width: 100%; order: 1; } .framer-yNuWI .framer-10ckuwp-container { flex: none; height: 371px; max-width: 100%; order: 0; width: 100%; } .framer-yNuWI .framer-1nxv3iq { height: min-content; max-width: 100%; order: 8; padding: 40px 0px 50px 0px; } .framer-yNuWI .framer-1enw1a6 { order: 0; padding: 0px 25px 0px 25px; } .framer-yNuWI .framer-13rk37h { flex: none; height: 373px; order: 1; } .framer-yNuWI .framer-jtrsre { gap: 14px; order: 9; padding: 40px 0px 40px 0px; } .framer-yNuWI .framer-18qaru7 { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; flex-direction: column; max-width: 100%; order: 2; width: auto; } .framer-yNuWI .framer-x59u0z { height: 1826px; max-width: 100%; order: 11; padding: 50px 20px 50px 20px; } .framer-yNuWI .framer-1i5fk18 { gap: 3px; max-width: 100%; order: 0; } .framer-yNuWI .framer-124daum { width: 270px; } .framer-yNuWI .framer-19mmp1z { flex-direction: column; justify-content: center; max-width: 100%; order: 1; padding: 0px 0px 18px 0px; } .framer-yNuWI .framer-79iqsl-container { flex: none; height: auto; order: 0; width: 350px; } .framer-yNuWI .framer-1jcquhb-container { flex: none; height: auto; order: 1; width: 350px; } .framer-yNuWI .framer-1uqa2f8-container { flex: none; height: auto; order: 2; width: 350px; } .framer-yNuWI .framer-c2ocjj { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1440px; order: 13; padding: 180px 24px 16px 24px; width: 90%; } .framer-yNuWI .framer-byzn87 { height: var(--framer-aspect-ratio-supported, 613px); right: -326px; top: -464px; transform: rotate(-135deg); width: 618px; z-index: 1; } .framer-yNuWI .framer-1rmghkq { align-content: center; align-items: center; gap: 30px; left: unset; overflow: hidden; position: relative; top: unset; transform: perspective(1200px); width: 100%; } .framer-yNuWI .framer-dpjnoi { flex-direction: column; gap: 14px; width: 100%; } .framer-yNuWI .framer-b3l03b-container { order: 0; width: 100%; } .framer-yNuWI .framer-1jsbd1i-container { order: 1; width: 100%; } .framer-yNuWI .framer-2fyunu { flex-direction: column; order: 14; padding: 40px 24px 40px 24px; } .framer-yNuWI .framer-1ovr08u { align-self: unset; flex: none; width: 100%; } .framer-yNuWI .framer-1pbvw7z, .framer-yNuWI .framer-1bcdjfx { flex: none; width: 351px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yNuWI .framer-1p18m6d, .framer-yNuWI .framer-ihjkg, .framer-yNuWI .framer-wrhe2s, .framer-yNuWI .framer-1kxybj9, .framer-yNuWI .framer-1rzlosx, .framer-yNuWI .framer-avgl0x, .framer-yNuWI .framer-n341ni, .framer-yNuWI .framer-mnlz2, .framer-yNuWI .framer-wgscim, .framer-yNuWI .framer-eai1xf, .framer-yNuWI .framer-pljmza, .framer-yNuWI .framer-19xfc8p, .framer-yNuWI .framer-dgq5k3, .framer-yNuWI .framer-32vezk, .framer-yNuWI .framer-1kq2cg8, .framer-yNuWI .framer-jtrsre, .framer-yNuWI .framer-18qaru7, .framer-yNuWI .framer-1i5fk18, .framer-yNuWI .framer-19mmp1z, .framer-yNuWI .framer-c2ocjj, .framer-yNuWI .framer-1rmghkq, .framer-yNuWI .framer-dpjnoi, .framer-yNuWI .framer-2fyunu { gap: 0px; } .framer-yNuWI .framer-1p18m6d > *, .framer-yNuWI .framer-n341ni > *, .framer-yNuWI .framer-mnlz2 > *, .framer-yNuWI .framer-eai1xf > *, .framer-yNuWI .framer-pljmza > *, .framer-yNuWI .framer-dgq5k3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yNuWI .framer-1p18m6d > :first-child, .framer-yNuWI .framer-ihjkg > :first-child, .framer-yNuWI .framer-wrhe2s > :first-child, .framer-yNuWI .framer-1kxybj9 > :first-child, .framer-yNuWI .framer-1rzlosx > :first-child, .framer-yNuWI .framer-avgl0x > :first-child, .framer-yNuWI .framer-n341ni > :first-child, .framer-yNuWI .framer-mnlz2 > :first-child, .framer-yNuWI .framer-wgscim > :first-child, .framer-yNuWI .framer-eai1xf > :first-child, .framer-yNuWI .framer-pljmza > :first-child, .framer-yNuWI .framer-19xfc8p > :first-child, .framer-yNuWI .framer-dgq5k3 > :first-child, .framer-yNuWI .framer-32vezk > :first-child, .framer-yNuWI .framer-jtrsre > :first-child, .framer-yNuWI .framer-1i5fk18 > :first-child, .framer-yNuWI .framer-19mmp1z > :first-child, .framer-yNuWI .framer-c2ocjj > :first-child, .framer-yNuWI .framer-1rmghkq > :first-child, .framer-yNuWI .framer-dpjnoi > :first-child, .framer-yNuWI .framer-2fyunu > :first-child { margin-top: 0px; } .framer-yNuWI .framer-1p18m6d > :last-child, .framer-yNuWI .framer-ihjkg > :last-child, .framer-yNuWI .framer-wrhe2s > :last-child, .framer-yNuWI .framer-1kxybj9 > :last-child, .framer-yNuWI .framer-1rzlosx > :last-child, .framer-yNuWI .framer-avgl0x > :last-child, .framer-yNuWI .framer-n341ni > :last-child, .framer-yNuWI .framer-mnlz2 > :last-child, .framer-yNuWI .framer-wgscim > :last-child, .framer-yNuWI .framer-eai1xf > :last-child, .framer-yNuWI .framer-pljmza > :last-child, .framer-yNuWI .framer-19xfc8p > :last-child, .framer-yNuWI .framer-dgq5k3 > :last-child, .framer-yNuWI .framer-32vezk > :last-child, .framer-yNuWI .framer-jtrsre > :last-child, .framer-yNuWI .framer-1i5fk18 > :last-child, .framer-yNuWI .framer-19mmp1z > :last-child, .framer-yNuWI .framer-c2ocjj > :last-child, .framer-yNuWI .framer-1rmghkq > :last-child, .framer-yNuWI .framer-dpjnoi > :last-child, .framer-yNuWI .framer-2fyunu > :last-child { margin-bottom: 0px; } .framer-yNuWI .framer-ihjkg > *, .framer-yNuWI .framer-wrhe2s > *, .framer-yNuWI .framer-avgl0x > *, .framer-yNuWI .framer-wgscim > *, .framer-yNuWI .framer-19xfc8p > *, .framer-yNuWI .framer-2fyunu > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-yNuWI .framer-1kxybj9 > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-yNuWI .framer-1rzlosx > * { margin: 0px; margin-bottom: calc(22px / 2); margin-top: calc(22px / 2); } .framer-yNuWI .framer-32vezk > *, .framer-yNuWI .framer-c2ocjj > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yNuWI .framer-1kq2cg8 > *, .framer-yNuWI .framer-1kq2cg8 > :first-child, .framer-yNuWI .framer-1kq2cg8 > :last-child, .framer-yNuWI .framer-18qaru7 > *, .framer-yNuWI .framer-18qaru7 > :first-child, .framer-yNuWI .framer-18qaru7 > :last-child { margin: 0px; } .framer-yNuWI .framer-jtrsre > *, .framer-yNuWI .framer-dpjnoi > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-yNuWI .framer-1i5fk18 > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-yNuWI .framer-19mmp1z > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-yNuWI .framer-1rmghkq > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } }}`,
    ...he,
    ...le,
    ...$1,
    ...ce,
    ...Ce,
    ...xe,
    ...ne,
    ...ae,
  ],
  j1 = P(ca, da, "framer-yNuWI"),
  ot = j1;
j1.displayName = "Home";
j1.defaultProps = { height: 5621, width: 1300 };
G(j1, [
  {
    family: "DM Sans",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2",
    weight: "700",
  },
  {
    family: "DM Sans",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2",
    weight: "400",
  },
  {
    family: "GT Planar Medium",
    source: "custom",
    url: "https://framerusercontent.com/assets/4Welnf17piVF0GW1Rp6mfq47pJ4.ttf",
  },
  ...zr,
  ...Tr,
  ...Vr,
  ...Er,
  ...qr,
  ..._r,
  ...Ar,
  ...Hr,
  ...Pr,
  ...Gr,
  ...Dr,
  ...Ur,
  ...Or,
  ...Yr,
  ...Xr,
  ...Qr,
  ...Kr,
  ...Jr,
  ...pe,
  ...se,
  ...J1,
  ...fe,
  ...ve,
  ...ge,
  ...ie,
  ...re,
]);
var st = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "5621",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"TCRVy9I_Z":{"layout":["fixed","auto"]},"kwVNjqrRS":{"layout":["fixed","auto"]},"MITuyLXdw":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1300",
        framerResponsiveScreen: "",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { st as __FramerMetadata__, ot as default };
//# sourceMappingURL=z_RUx5bfurbBKaBnSKZJa6CvYj8kMKUZ61p0I-LrZQU.HALAEZLQ.mjs.map
