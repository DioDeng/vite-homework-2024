import{r as u,c as n,a as t,F as h,b as k,o as i,d as b,e as v,t as a,w as y,v as w,n as x}from"./index-HtE06Ow6.js";const f={class:""},m={class:"table table-hover align-middle"},C=t("thead",{class:"bgColor table-dark"},[t("tr",null,[t("th",{scope:"col",style:{width:"40%"}},"品項"),t("th",{scope:"col",style:{width:"25%"}},"描述"),t("th",{scope:"col",style:{width:"15%"}},"價格"),t("th",{scope:"col",style:{width:"20%"}},"庫存")])],-1),g={class:"table-group-divider table-warning"},V={style:{width:"40%"}},$={class:"d-flex align-items-center flex-wrap"},B=["onClick"],D=t("i",{class:"bi bi-pencil-fill"},null,-1),N=[D],F={key:0,class:"input-group flex-wrap"},L=["disabled"],P={style:{width:"25%"}},Q={style:{width:"15%"}},T={style:{width:"20%"}},W={class:"d-flex align-items-center"},z=["disabled","onClick"],E={class:"mx-2"},M=["onClick"],U={__name:"Week1View",setup(R){const d=u([{title:"珍珠奶茶",describe:"香濃奶茶搭配QQ珍珠",price:50,stock:20},{title:"冬瓜檸檬",describe:"清新冬瓜配上新鮮檸檬",price:55,stock:34},{title:"翡翠檸檬",describe:"綠茶與檸檬的完美結合",price:50,stock:20},{title:"四季春茶",describe:"香醇四季春茶，回甘無比",price:45,stock:0},{title:"阿薩姆奶茶",describe:"阿薩姆紅茶搭配香醇鮮奶",price:50,stock:25},{title:"檸檬冰茶",describe:"檸檬與冰茶的清新組合",price:45,stock:20},{title:"芒果綠茶",describe:"芒果與綠茶的獨特風味",price:55,stock:18},{title:"抹茶拿鐵",describe:"抹茶與鮮奶的絕配",price:60,stock:20}]),e=u({}),p=(r,o)=>{e.value={...r},e.value.index=o},_=()=>{d.value[e.value.index].title=e.value.title,e.value={}};return(r,o)=>(i(),n("section",f,[t("table",m,[C,t("tbody",g,[(i(!0),n(h,null,k(d.value,(s,c)=>(i(),n("tr",{key:c},[t("td",V,[t("div",$,[t("span",null,[e.value.index!==c?(i(),n("button",{key:0,type:"button",class:"btn btn-outline-secondary me-2",onClick:l=>p(s,c)},N,8,B)):b("",!0),v(a(s.title),1)]),e.value.index===c?(i(),n("div",F,[y(t("input",{type:"text",class:"form-control rwdWidth",placeholder:"名稱必填","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":o[0]||(o[0]=l=>e.value.title=l)},null,512),[[w,e.value.title]]),t("button",{class:"btn btn-outline-secondary flex-shrink-1",type:"button",id:"button-addon2",onClick:o[1]||(o[1]=l=>e.value={})}," 取消 "),t("button",{class:"btn btn-outline-secondary flex-shrink-1",type:"button",id:"button-addon3",onClick:_,disabled:!e.value.title}," 確認 ",8,L)])):b("",!0)])]),t("td",P,[t("small",null,a(s.describe),1)]),t("td",Q,"$"+a(s.price),1),t("td",T,[t("div",W,[t("button",{type:"button",class:x(["btn",[s.stock===0?"btn-outline-danger":"btn-outline-secondary"]]),disabled:s.stock<1,onClick:l=>s.stock--}," -",10,z),t("span",E,a(s.stock),1),t("button",{type:"button",class:"btn btn-outline-secondary",onClick:l=>s.stock++}," + ",8,M)])])]))),128))])])]))}};export{U as default};
