import{O as m,S as i,X as b,l,o as d,p as C,ra as S,u as y}from"./chunk-4GKU57PD.mjs";import{b as n}from"./chunk-ELYU6EKT.mjs";var g='"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',x={position:"relative",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},R={...x,borderRadius:6,background:"rgba(136, 85, 255, 0.3)",color:"#85F",border:"1px dashed #85F",flexDirection:"column"},F={onClick:{type:i.EventHandler},onMouseEnter:{type:i.EventHandler},onMouseLeave:{type:i.EventHandler}},T={type:i.Number,title:"Font Size",min:2,max:200,step:1,displayStepper:!0},k={font:{type:i.Boolean,title:"Font",defaultValue:!1,disabledTitle:"Default",enabledTitle:"Custom"},fontFamily:{type:i.String,title:"Family",placeholder:"Inter",hidden:({font:e})=>!e},fontWeight:{type:i.Enum,title:"Weight",options:[100,200,300,400,500,600,700,800,900],optionTitles:["Thin","Extra-light","Light","Regular","Medium","Semi-bold","Bold","Extra-bold","Black"],hidden:({font:e})=>!e}};function A(e,t){return v(!0,e,t)}function E(e,t){return v(!1,e,t)}function v(e,t,s=!0){let r=b();l(()=>{s&&r===e&&t()},[r])}var I=()=>{if(typeof n<"u"){let e=n.userAgent.toLowerCase();return(e.indexOf("safari")>-1||e.indexOf("framermobile")>-1||e.indexOf("framerx")>-1)&&e.indexOf("chrome")<0}else return!1},w=()=>d(()=>I(),[]);var f=e=>e instanceof y;function B(e,t){l(()=>f(e)?e.onChange(t):void 0)}var O={100:"Thin",200:"Extra-light",300:"Light",400:"Regular",500:"Medium",600:"Semi-bold",700:"Bold",800:"Extra-bold",900:"Black"};function P(e){let{fontFamily:t="Inter",fontSize:s=16,fontWeight:r=400,font:c=!1}=e,u=O[r],p=`"${t} ${u}", "${t}", ${g}`,h=t?{fontSize:s,fontWeight:r,fontFamily:p}:{fontSize:s,fontWeight:r},M=async()=>{await S.loadWebFontsFromSelectors([`CUSTOM;${t}`,`CUSTOM;${t} ${u}`,`GF;${t}-${u.toLowerCase()}`]).catch(_=>console.error(_))};return l(()=>{c&&M()},[c,t,r]),h}function z(){return d(()=>m.current()===m.canvas,[])}function $(e){let{borderRadius:t,isMixedBorderRadius:s,topLeftRadius:r,topRightRadius:c,bottomRightRadius:u,bottomLeftRadius:p}=e;return d(()=>s?`${r}px ${c}px ${u}px ${p}px`:`${t}px`,[t,s,r,c,u,p])}var L={borderRadius:{title:"Radius",type:i.FusedNumber,toggleKey:"isMixedBorderRadius",toggleTitles:["Radius","Radius per corner"],valueKeys:["topLeftRadius","topRightRadius","bottomRightRadius","bottomLeftRadius"],valueLabels:["TL","TR","BR","BL"],min:0}};function N(e){let{padding:t,paddingPerSide:s,paddingTop:r,paddingRight:c,paddingBottom:u,paddingLeft:p}=e;return d(()=>s?`${r}px ${c}px ${u}px ${p}px`:t,[t,s,r,c,u,p])}var K={padding:{type:i.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0,title:"Padding"}};function V(e){let t=C(null);return t.current===null&&(t.current=e()),t.current}export{x as a,F as b,k as c,A as d,E as e,V as f,w as g,B as h,P as i,z as j,$ as k,L as l,N as m,K as n};
//# sourceMappingURL=chunk-O5WB36OF.mjs.map
