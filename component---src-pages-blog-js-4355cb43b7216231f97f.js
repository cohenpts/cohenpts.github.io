(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),o=a(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Blog"}),r.a.createElement("h1",null,"There should be a list of articles here"))}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Erik Cohen",subtitle:"JavaScript Developer from Medellin, Colombia"}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(159),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Erik Cohen",description:"Erik Cohen is a Javascript Web Developer located in Medellin, Colombia. Helping companies create amazing web experiences using the latest web technologies",author:"@cohenpts"}}}}},155:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(32),c=a.n(s),u=(a(150),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};a(156),a(33);var m=a(157),p=a.n(m),f=function(e){var t=e.siteTitle,a=e.siteSubtitle;return i.a.createElement("header",{className:p.a.header},i.a.createElement("h1",null,i.a.createElement(c.a,{to:"/",style:Object.assign({},p.a.link)},i.a.createElement("span",{className:p.a.title},t),i.a.createElement("span",{className:p.a.subtitle},a))),i.a.createElement("div",{className:p.a.rightPanel},i.a.createElement(c.a,{to:"/"},"HOME"),i.a.createElement(c.a,{to:"/portfolio"},"MY WORK"),i.a.createElement(c.a,{to:"/about"},"ABOUT ME"),i.a.createElement(c.a,{to:"/blog"},"BLOG"),i.a.createElement(c.a,{to:"/contact"},"CONTACT")))};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var g=f,h=function(){return i.a.createElement("footer",{className:h.footer},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},E=a(158),y=a.n(E),b=function(e){var t=e.children;return i.a.createElement(d,{query:"565778879",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,siteSubtitle:e.site.siteMetadata.subtitle}),i.a.createElement("main",{className:y.a.main},t),i.a.createElement(h,null))},data:n})};b.propTypes={children:l.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-blog-js-4355cb43b7216231f97f.js.map