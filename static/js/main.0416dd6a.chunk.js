(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={btn:"Phonebook_btn__2gmOi",btn_del:"Phonebook_btn_del__3HrF0",label:"Phonebook_label__1X-My",filter_label:"Phonebook_filter_label__Qj3R3",input:"Phonebook_input__12Hzx",filter_input:"Phonebook_filter_input__S4dkk",title:"Phonebook_title__2MDsg",text:"Phonebook_text__2uxIE",list:"Phonebook_list__37LK_"}},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(8),s=n.n(o),r=n(10),i=n(3),l=n(4),u=n(6),b=n(5),d=n(19),h=n(9),m=n(1),j=n.n(m),f=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name",Object(f.jsx)("input",{id:Object(d.a)(),value:this.state.name,onChange:this.handleChange,type:"text",name:"name",placeholder:"name",className:j.a.input})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{id:Object(d.a)(),value:this.state.number,onChange:this.handleChange,type:"number",name:"number",placeholder:"number",className:j.a.input})]}),Object(f.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=function(t){var e=t.contacts,n=t.deleteContact;return Object(f.jsx)("ol",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:j.a.list,children:[Object(f.jsxs)("p",{className:j.a.text,children:[a,", "]}),Object(f.jsxs)("p",{className:j.a.text,children:["tlf.: ",c]}),Object(f.jsx)("button",{type:"button",className:j.a.btn_del,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},_=function(t){var e=t.filter,n=t.filteredContacts;return Object(f.jsxs)("label",{className:j.a.filter_label,children:["To make filter by Name",Object(f.jsx)("input",{className:j.a.filter_input,type:"text",value:e,onChange:n})]})},x=(n(17),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(d.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts!")):t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[c])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filteredContacts=function(e){t.setState({filter:e.target.value})},t.showFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.addContact,e=this.filteredContacts,n=this.showFilteredContacts,a=this.deleteContact;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(p,{addContact:t}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(_,{filter:this.state.filter,filteredContacts:e}),Object(f.jsx)(O,{contacts:n(),deleteContact:a})]})}}]),n}(a.Component));s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0416dd6a.chunk.js.map