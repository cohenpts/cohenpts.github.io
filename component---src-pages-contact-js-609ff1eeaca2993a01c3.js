(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),o=a(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Contact"}),r.a.createElement("h1",null,"There should be a Contact form here"))}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Erik Cohen",subtitle:"JavaScript Developer from Medellin, Colombia"}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(159),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Erik Cohen",description:"Erik Cohen is a Javascript Web Developer located in Medellin, Colombia. Helping companies create amazing web experiences using the latest web technologies",author:"@cohenpts"}}}}},155:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(32),c=a.n(l),u=(a(150),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(156),a(33);var m=a(157),p=a.n(m),f=function(e){var t=e.siteTitle,a=e.siteSubtitle;return i.a.createElement("header",{className:p.a.header},i.a.createElement("h1",null,i.a.createElement(c.a,{to:"/",style:Object.assign({},p.a.link)},i.a.createElement("span",{className:p.a.title},t),i.a.createElement("span",{className:p.a.subtitle},a))),i.a.createElement("div",{className:p.a.rightPanel},i.a.createElement(c.a,{to:"/"},"HOME"),i.a.createElement(c.a,{to:"/portfolio"},"MY WORK"),i.a.createElement(c.a,{to:"/about"},"ABOUT ME"),i.a.createElement(c.a,{to:"/blog"},"BLOG"),i.a.createElement(c.a,{to:"/contact"},"CONTACT")))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var g=f,h=function(){return i.a.createElement("footer",{className:h.footer},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},E=a(158),y=a.n(E),b=function(e){var t=e.children;return i.a.createElement(d,{query:"565778879",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,siteSubtitle:e.site.siteMetadata.subtitle}),i.a.createElement("main",{className:y.a.main},t),i.a.createElement(h,null))},data:n})};b.propTypes={children:s.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-contact-js-609ff1eeaca2993a01c3.js.map