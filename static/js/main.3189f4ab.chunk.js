(this.webpackJsonpshoppinglist_leaddesk=this.webpackJsonpshoppinglist_leaddesk||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),l=n.n(r),i=n(10),o=n.n(i),s=(n(16),n.p+"static/media/logo.56ce158f.png"),u=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:s,alt:"logo"}),Object(a.jsx)("label",{className:"header__label",children:"Shopping List"})]})},d=n(1),c=n(3),m=n(4),p=n(6),h=n(5),f=function(e){var t=e.title,n=e.name,r=e.className,l=e.type,i=e.disabled,o=e.buttonType,s=["button"];r&&s.push(r);return o&&s.push(o),Object(a.jsx)("button",{className:s.join(" "),onClick:function(t){var n=e.onClick;n&&"function"===typeof n&&n()},type:l,disabled:i,name:n,children:t})},j=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).renderLabel=function(){return Object(a.jsx)("label",{className:"input-field__label",children:e.props.label})},e._onChange=function(t){var n=e.props,a=n.onChange,r=n.item;a&&"function"===typeof a&&a(t,r)},e.handleBlurInput=function(t){e.setState({focusClass:""});var n=e.props,a=n.handleBlurInput,r=n.item;a&&"function"===typeof a&&a(t,r)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.errorObj,r=e.disabled,l=e.autoFocus,i=e.value,o=e.placeholder,s=e.name,u=e.className,c=e.reference,m=e.id,p=e.inputProps,h=["input-field"];return u&&h.push(u),r&&h.push("disabled"),Object(a.jsxs)("div",{className:h.join(" "),children:[Object(a.jsx)("input",Object(d.a)(Object(d.a)({type:t||"text",name:s,value:i||"",placeholder:o,onChange:this._onChange,disabled:r,ref:c,id:m},p),{},{onFocus:this.handleFocusInput,onBlur:this.handleBlurInput,autoFocus:l})),n?Object(a.jsx)("span",{className:"error",children:n.error}):null]})}}]),n}(l.a.Component),b=n(7),y=function(e){return e?/^\d+$/.test(e)?{name:"name",error:"Name must be string"}:void 0:{name:"name",error:"name cannot be empty"}},v=function(e){if(!/^\d+$/.test(e))return{name:"quantity",error:e||isNaN(e)?"Quantity must be number":"quantity cannot be empty"}},O=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFieldChange=function(e){var t=e.target,n=t.name,r=t.value;r&&a.setState({error:[]}),a.setState(Object(b.a)({},n,r))},a.formInvalid=function(){var e=a.state,t=e.name,n=e.quantity,r=e.error,l=y(t),i=v(parseInt(n));return l&&r.push(l),i&&r.push(i),a.setState({error:r}),0!==r.length},a.onValidate=function(){var e=a.state,t=e.name,n=e.quantity,r=e.error,l=y(t),i=v(parseInt(n));l?r.push(l):i&&r.push(i),a.setState({error:r})},a.onItemAdd=function(){if(!a.formInvalid()){var e=a.props.onItemAdd,t=a.state,n={name:t.name,quantity:t.quantity};a.setState({name:"",quantity:null,error:[],addedItem:n}),e(n)}},a.state={name:"",quantity:null,error:[],addedItem:null},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,r=t.quantity,l=t.error,i=[{name:"name",value:n,type:"text",placeholder:"Enter name"},{name:"quantity",value:r,type:"number",placeholder:"Enter quantity"}];return Object(a.jsxs)("div",{className:"addItem",children:[Object(a.jsx)("h2",{className:"addItem__header",children:"Add new Item"}),Object(a.jsxs)("div",{className:"addItem__fields",children:[i.map((function(t,n){var r=l.find((function(e){return e.name===t.name}));return Object(a.jsxs)("div",{className:"addItem__fields-item",children:[Object(a.jsx)(j,{name:t.name,value:t.value,type:t.type,onChange:e.onFieldChange,placeholder:t.placeholder},n),r?Object(a.jsx)("span",{className:"error",children:r.error}):null]},n)})),Object(a.jsx)(f,{title:"Add item",onClick:this.onItemAdd,id:"addItem"})]})]})}}]),n}(r.Component),g="name",q="quantity",x=n(8),I=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).onFieldChange=function(e,t){var n=r.state.listToDisplay,a=e.target,l=a.name,i=a.value,o=n.findIndex((function(e){return e.id===t.id}));i&&(r.runValidation(l,i,t),l===g?n[o].error=Object(d.a)(Object(d.a)({},n[o].error),{},{nameError:null}):i&&l===q&&(n[o].error=Object(d.a)(Object(d.a)({},n[o].error),{},{quantityError:null}))),n[o][l]=i,r.setState({listToDisplay:n})},r.runValidation=function(e,t,n){var a=r.state.listToDisplay,l=null,i=null,o=a.findIndex((function(e){return e.id===n.id}));e===g?(l=y(t),a[o].error=Object(d.a)(Object(d.a)({},a[o].error),{},{nameError:l})):e===q&&(i=v(parseInt(t)),a[o].error=Object(d.a)(Object(d.a)({},a[o].error),{},{quantityError:i})),r.setState({listToDisplay:a})},r.onFieldBlur=function(e,t){var n=e.target,a=n.name,l=n.value;r.runValidation(a,l,t)},r.onItemRemove=function(e){var t=r.state.listToDisplay.filter((function(t){return t.id!==e.id}));r.setState({listToDisplay:t}),alert("Item removed successfully....")},r.onItemAdd=function(e){var t=r.state.listToDisplay,n=t.length;r.setState({listToDisplay:t.concat(Object(d.a)(Object(d.a)({},e),{},{id:n+1}))}),alert("Item added successfully....")},r.renderAddContainer=function(){},r.getFields=function(e){return[{name:g,value:e.name,type:"text",error:e.error,placeholder:"Enter name"},{name:q,value:e.quantity,type:"number",error:e.error,placeholder:"Enter quantity"}]},r.renderItemFields=function(e,t){return e.map((function(e,n){var l=null;return e.error&&(e.name===g?l=e.error.nameError:e.name===q&&(l=e.error.quantityError)),Object(a.jsx)(j,{name:e.name,value:e.value,type:e.type,item:t,className:"field",onChange:r.onFieldChange,handleBlurInput:r.onFieldBlur,errorObj:l,placeholder:e.placeholder},n)}))},r.state={listToDisplay:[],error:[]},r}return Object(m.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=1;t<=7;t++){var n=Math.floor(Math.random()*x.length);e.push(x[n])}this.setState({listToDisplay:e})}},{key:"render",value:function(){var e=this,t=this.state.listToDisplay;return t&&0!==t.length?Object(a.jsxs)("div",{className:"shoppingList",children:[Object(a.jsx)("h2",{className:"shoppingList__header",children:"Things to buy"}),Object(a.jsx)("div",{className:"shoppingList__list",children:t.map((function(t,n){var r=e.getFields(t);return Object(a.jsxs)("div",{className:"shoppingList__list-item",children:[e.renderItemFields(r,t),Object(a.jsx)(f,{title:"Remove",onClick:function(){return e.onItemRemove(t)},id:n})]},n)}))}),Object(a.jsx)(O,{list:t,onItemAdd:this.onItemAdd})]}):null}}]),n}(r.Component);var N=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsx)(I,{})]})};o.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":0,"quantity":"7","name":"Eggs","done":false,"error":null},{"id":1,"quantity":"10","name":"Milk","done":false,"error":null},{"id":2,"quantity":"0","name":"Sugar","done":false,"error":null},{"id":3,"quantity":"9","name":"Salt","done":false,"error":null},{"id":4,"quantity":"4","name":"curd","done":false,"error":null},{"id":5,"quantity":"4","name":"yogurt","done":false,"error":null},{"id":6,"quantity":"2","name":"bottles","done":false,"error":null},{"id":7,"quantity":"10","name":"candy","done":false,"error":null},{"id":8,"quantity":"1","name":"pepper","done":false,"error":null},{"id":9,"quantity":"4","name":"corn","done":false,"error":null},{"id":10,"quantity":"5","name":"carrots","done":false,"error":null},{"id":11,"quantity":"8","name":"Mashrooms","done":false,"error":null},{"id":12,"quantity":"10","name":"Egg plant","done":false,"error":null},{"id":13,"quantity":"4","name":"pillows","done":false,"error":null},{"id":14,"quantity":"3","name":"mattress","done":false,"error":null},{"id":15,"quantity":"5","name":"batteries","done":false,"error":null},{"id":16,"quantity":"8","name":"jackets","done":false,"error":null},{"id":17,"quantity":"10","name":"gloves","done":false,"error":null},{"id":18,"quantity":"4","name":"shoes","done":false,"error":null},{"id":19,"quantity":"3","name":"tissues","done":false,"error":null}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.3189f4ab.chunk.js.map