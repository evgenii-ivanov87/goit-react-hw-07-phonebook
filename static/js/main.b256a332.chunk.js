(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={section:"Section_section__1FgvG",title:"Section_title__23BaG"}},22:function(t,e,n){t.exports={filter:"Filter_filter__52zEN"}},27:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=(n(27),n(11)),i=n(12),u=n(14),l=n(13),b=n(17),j=n.n(b),m=n(1);var d=function(t){var e=t.title,n=t.children;return Object(m.jsxs)("div",{className:j.a.section,children:[Object(m.jsx)("h2",{className:j.a.title,children:e}),n]})},f=n(8),h=n(6),O=n(5),p=n.n(O),_=n(4),v=n(21),x=n.n(v),C=n(3),g={addContact:Object(C.b)("phonebook/add",(function(t,e){return{payload:{id:x.a.generate(),name:t,number:e}}})),deleteContacts:Object(C.b)("phonebook/delete"),filterContacts:Object(C.b)("phonebook/filter")},N=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.contactMatching=function(){var e=t.state,n=e.name,a=e.number,c=t.props.contacts,r=c.reduce((function(t,e){return[].concat(Object(f.a)(t),[e.name])}),[]),o=c.reduce((function(t,e){return[].concat(Object(f.a)(t),[e.number])}),[]);return r.includes(n)||o.includes(a)?(alert("".concat(n).concat(a," is already in contacts")),!0):""===n||""===a?(alert("Please enter all data"),!0):void 0},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.setState({name:"",number:""}),t.contactMatching()||t.props.onSubmit(a,c)},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(m.jsxs)("label",{className:p.a.label,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:this.state.name,placeholder:"Ivanov Ivan",onChange:this.handleChange,className:p.a.input})]}),Object(m.jsxs)("label",{className:p.a.label,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:this.state.number,placeholder:"123-12-45",onChange:this.handleChange,className:p.a.input})]}),Object(m.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})}}]),n}(a.Component),y=Object(_.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(g.addContact(e,n))}}}))(N),k=n(22),S=n.n(k);var F=Object(_.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(g.filterContacts(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:S.a.filter,children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})})),w=n(7),L=n.n(w);var D,A=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},B=Object(_.b)((function(t){return{contacts:A(t.contacts.items,t.contacts.filters)}}),(function(t){return{onDeleteContact:function(e){return t(g.deleteContacts(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:L.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:L.a.item,children:[Object(m.jsxs)("p",{className:L.a.text,children:[a,": ",c]}),Object(m.jsx)("span",{className:L.a.span}),Object(m.jsx)("button",{type:"button",onClick:function(){return n(e)},className:L.a.button,children:"Delete"})]},e)}))})})),I=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{title:"Phonebook",children:Object(m.jsx)(y,{})}),Object(m.jsxs)(d,{title:"Contacts",children:[Object(m.jsx)(F,{}),Object(m.jsx)(B,{})]})]})}}]),n}(a.Component),J=n(2),M=Object(C.c)([],(D={},Object(h.a)(D,g.addContact,(function(t,e){var n=e.payload;return[].concat(Object(f.a)(t),[n])})),Object(h.a)(D,g.deleteContacts,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),E=Object(C.c)("",Object(h.a)({},g.filterContacts,(function(t,e){return e.payload}))),G=Object(J.c)({items:M,filters:E}),P=Object(C.a)({reducer:{contacts:G}});o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_.a,{store:P,children:Object(m.jsx)(I,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"Form_form__2Z0cn",label:"Form_label__OBlDJ",input:"Form_input__3cnmQ",button:"Form_button__25mgu"}},7:function(t,e,n){t.exports={list:"ContactList_list__vK-_5",item:"ContactList_item__Voe8m",text:"ContactList_text__1a7qa",span:"ContactList_span__hWnfA",button:"ContactList_button__1NSRN"}}},[[43,1,2]]]);
//# sourceMappingURL=main.b256a332.chunk.js.map