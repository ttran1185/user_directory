(this.webpackJsonpuser=this.webpackJsonpuser||[]).push([[0],{17:function(e,t,n){e.exports=n(48)},22:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n.n(l),c=(n(22),n(12)),s=n(13),i=n(16),u=n(15),m=n(14),d=n.n(m),f=function(){return d.a.get("https://randomuser.me/api/")};n(40);var h=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};n(41);var E=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"language"}),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"search",list:"employees",type:"text",className:"form-control",placeholder:"Search any employee name",id:"search"})))};n(42);function p(e){var t=e.employees;e.handleSort;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Photo"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Date of Birth"))),r.a.createElement("tbody",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,n=e.picture,a=e.name,l=e.email,o=e.phone,c=e.dob;return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",null,r.a.createElement("img",{alt:"employee",src:n.thumbnail})),r.a.createElement("td",null,a.first," ",a.last),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:"+l},l)),r.a.createElement("td",null,o),r.a.createElement("td",null,c.date.substring(0,10)))})):r.a.createElement(r.a.Fragment,null)))}var v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={order:"descending",employees:[{}],filteredEmployees:[{}]},e.handleInputChange=function(t){var n=t.target.value,a=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({filteredEmployees:a})},e.handleSort=function(){if("descending"===e.state.order){e.setState({order:"ascending"});var t=e.state.filteredEmployees;t.sort((function(e,t){return e-t})),e.setState({filteredEmployees:t})}else{e.setState({order:"descending"});var n=e.state.filteredEmployees;n.sort((function(e,t){return t-e})).reverse(),e.setState({filteredEmployees:n})}console.log(e.state.order)},e.sortAscending=function(){var t=e.state.filteredEmployees;t.sort((function(e,t){return e-t})),e.setState({filteredEmployees:t})},e.sortDescending=function(){var t=e.state.filteredEmployees;t.sort((function(e,t){return e-t})).reverse(),e.setState({filteredEmployees:t})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{style:{minHeight:"100vh"}},r.a.createElement("h1",{className:"text-center",style:{margin:"20px"}},"Employee Directory"),r.a.createElement(E,{handleInputChange:this.handleInputChange}),r.a.createElement(p,{employees:this.state.filteredEmployees,handleSort:this.handleSort})))}}]),n}(a.Component);n(43),n(44);var y=function(){return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-dark bg-dark"})};n(45);var g=function(){return r.a.createElement("footer",{className:"footer navbar-dark bg-dark"},r.a.createElement("span",null,"Copyright \xa9 2020"))};n(46);var b=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};n(47);var S=function(){return document.title="Employee Directory",r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(b,null,r.a.createElement(v,null)),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c97af2e2.chunk.js.map