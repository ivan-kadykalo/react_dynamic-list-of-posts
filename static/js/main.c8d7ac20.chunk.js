(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),s=n.n(c),a=n(3),r=n(1),o=(n(14),n(15),n(4)),i=n(2),l=n.n(i),u="https://mate.academy/students-api",j=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return j("".concat(u,"/comments?postId=").concat(e))},b=function(e){return fetch("".concat(u,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})},m=(n(17),n(0)),O=function(){return Object(m.jsx)("div",{className:"Loader",children:Object(m.jsx)("div",{className:"Loader__content"})})},p=(n(19),n(9)),h=n.n(p),f=function(e){var t=e.post,n=e.onSelectPostId,c=e.selectedPostId===t.id;return Object(m.jsxs)("li",{className:"PostItem",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),Object(m.jsx)("button",{type:"button",className:h()("PostItem__button","button",{"PostItem__user-button":c}),onClick:function(){n(t.id)},children:c?"Close":"Open"})]})},x=(n(20),function(e){var t=e.selectedUserId,n=e.onSelectPostId,c=e.selectedPostId,s=Object(r.useState)([]),i=Object(a.a)(s,2),d=i[0],b=i[1];Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("".concat(u,"/posts"));case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var p=Object(r.useMemo)((function(){return 0===t?d:d.filter((function(e){return e.userId===t}))}),[t,d]);return Object(m.jsxs)("div",{className:"PostsList",children:[Object(m.jsx)("h2",{children:"Posts:"}),Object(m.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:d.length>0?p.map((function(e){return Object(m.jsx)(f,{post:e,onSelectPostId:n,selectedPostId:c},e.id)})):Object(m.jsx)(O,{})})]})}),v=n(5),_=n(7),N=(n(21),function(e){var t=e.selectedPostId,n=e.handleAddComment,c={postId:t,name:"",email:"",body:""},s=Object(r.useState)(c),o=Object(a.a)(s,2),i=o[0],l=o[1],u=Object(r.useCallback)((function(e){var n=e.target,c=n.value,s=n.name;l((function(e){var n;return Object(_.a)(Object(_.a)({},e),{},(n={},Object(v.a)(n,s,c),Object(v.a)(n,"postId",t),n))}))}),[t,i]);return Object(m.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n(i),l(c)},children:[Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:u,value:i.name,required:!0})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:u,value:i.email,required:!0})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:u,value:i.body,required:!0})}),Object(m.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),P=(n(22),function(e){var t=e.comment,n=e.handleDeleteComment;return Object(m.jsxs)("li",{className:"PostDetails__list-item",children:[Object(m.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n(t.id)},children:"X"}),Object(m.jsx)("p",{children:t.body})]})}),C=(n(23),function(e){var t=e.selectedPostId,n=Object(r.useState)(null),c=Object(a.a)(n,2),s=c[0],i=c[1],p=Object(r.useState)(!0),h=Object(a.a)(p,2),f=h[0],x=h[1],v=Object(r.useState)(!1),_=Object(a.a)(v,2),C=_[0],y=_[1],I=Object(r.useCallback)(Object(o.a)(l.a.mark((function e(){var n,c,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([(o=t,j("".concat(u,"/posts/").concat(o))),d(t)]);case 2:return n=e.sent,c=Object(a.a)(n,2),s=c[0],r=c[1],e.next=8,i({details:s,comments:r});case 8:y(!1);case 9:case"end":return e.stop()}var o}),e)}))),[t]);Object(r.useEffect)((function(){i(null),I()}),[t]);var w=Object(r.useCallback)((function(){x((function(e){return!e}))}),[]),k=Object(r.useCallback)(function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,b(t);case 3:I();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[s]),S=Object(r.useCallback)(function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,n=t,fetch("".concat(u,"/comments/").concat(n),{method:"DELETE"});case 3:I();case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),[s]),D=Object(r.useMemo)((function(){return s?s.comments.length:0}),[s]);return Object(m.jsxs)("div",{className:"PostDetails",children:[Object(m.jsx)("h2",{children:"Post details:"}),s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{className:"PostDetails__post",children:Object(m.jsx)("p",{children:s.details.body})}),D>0&&Object(m.jsxs)("section",{"data-cy":"postDetails",className:"PostDetails__comments",children:[Object(m.jsx)("button",{onClick:w,type:"button",className:"button",children:"".concat(f?"Hide":"Show"," ").concat(D," comment").concat(D>1?"s":"")}),f&&Object(m.jsx)("ul",{className:"PostDetails__list",children:s.comments.map((function(e){return Object(m.jsx)(P,{comment:e,handleDeleteComment:S},e.id)}))})]}),C&&Object(m.jsx)(O,{}),Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(m.jsx)(N,{selectedPostId:t,handleAddComment:k})})})]}):Object(m.jsx)(O,{})]})}),y=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),o=Object(a.a)(s,2),i=o[0],l=o[1],u=Object(r.useCallback)((function(e){var t=e.target.value;c(+t)}),[]),j=Object(r.useCallback)((function(e){l(e===i?null:e)}),[i]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App__header",children:Object(m.jsxs)("label",{children:["Select a user: \xa0",Object(m.jsxs)("select",{className:"App__user-selector",value:String(n),onChange:u,children:[Object(m.jsx)("option",{value:"0",children:"All users"}),Object(m.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(m.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(m.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(m.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(m.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(m.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(m.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(m.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(m.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(m.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(m.jsxs)("main",{className:"App__main",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(x,{selectedUserId:n,onSelectPostId:j,selectedPostId:i})}),Object(m.jsx)("div",{className:"App__content",children:i&&Object(m.jsx)(C,{selectedPostId:i})})]})]})};s.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.c8d7ac20.chunk.js.map