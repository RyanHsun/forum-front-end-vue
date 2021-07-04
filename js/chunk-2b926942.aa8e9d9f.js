(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b926942"],{"3aed":function(e,t,a){},5652:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:e.newCategoryName},on:{input:function(t){t.target.composing||(e.newCategoryName=t.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.createCategory.apply(null,arguments)}}},[e._v(" 新增 ")])])])]),e.isLoading?a("Spinner"):e._e(),a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.categories,(function(t){return a("tr",{key:t.id},[a("th",{attrs:{scope:"row"}},[e._v(" "+e._s(t.id)+" ")]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[e._v(" "+e._s(t.name)+" ")]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:t.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return e.handleCancel(t.id)}}},[e._v(" ✕ ")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.toggleIsEditing(t.id)}}},[e._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.updateCategory({categoryId:t.id,name:t.name})}}},[e._v(" Save ")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.deleteCategory(t.id)}}},[e._v(" Delete ")])])])})),0)])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[e._v(" # ")]),a("th",{attrs:{scope:"col"}},[e._v(" Category Name ")]),a("th",{attrs:{scope:"col",width:"210"}},[e._v(" Action ")])])])}],i=a("5530"),s=a("1da1"),o=(a("96cf"),a("d81d"),a("4de4"),a("b0c0"),a("e04c")),c=a("be6c"),u=a("2fa3"),d=a("2375"),l={components:{AdminNav:o["a"],Spinner:d["a"]},data:function(){return{newCategoryName:"",categories:[],isProcessing:!1,isLoading:!0}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].categories.get();case 3:if(a=t.sent,r=a.data,"error"!==r.status){t.next=7;break}throw new Error(r.message);case 7:e.categories=r.categories.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{isEditing:!1,nameCached:""})})),e.isLoading=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),e.isLoading=!1,console.error(t.t0.message),u["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},createCategory:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isProcessing=!0,t.next=4,c["a"].categories.create({name:e.newCategoryName});case 4:if(a=t.sent,r=a.data,"error"!==r.status){t.next=8;break}throw new Error(r.message);case 8:e.categories.push({id:r.categoryId,name:e.newCategoryName,isEditing:!1}),u["a"].fire({icon:"success",title:"成功新增餐廳類別"}),e.isProcessing=!1,e.newCategoryName="",t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](0),console.error(t.t0.message),e.isProcessing=!1,u["a"].fire({icon:"error",title:"無法新增餐廳類別，請稍後再試"});case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))()},deleteCategory:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].categories.delete({categoryId:e});case 3:if(r=a.sent,n=r.data,"error"!==n.status){a.next=7;break}throw new Error(n.message);case 7:t.categories=t.categories.filter((function(t){return t.id!==e})),u["a"].fire({icon:"success",title:"成功刪除該餐廳類別"}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),console.error(a.t0.message),u["a"].fire({icon:"error",title:"無法刪除該餐廳類別，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},toggleIsEditing:function(e){this.categories=this.categories.map((function(t){return t.id===e?Object(i["a"])(Object(i["a"])({},t),{},{isEditing:!t.isEditing,nameCached:t.name}):t}))},updateCategory:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.categoryId,n=e.name,a.prev=1,a.next=4,c["a"].categories.update({categoryId:r,name:n});case 4:if(i=a.sent,s=i.data,"error"!==s.status){a.next=8;break}throw new Error(s.message);case 8:t.toggleIsEditing(r),u["a"].fire({icon:"success",title:"成功更新該餐廳類別"}),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](1),console.error(a.t0.message),u["a"].fire({icon:"error",title:"無法刪除該餐廳類別，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[1,12]])})))()},handleCancel:function(e){this.categories=this.categories.map((function(t){return t.id===e?Object(i["a"])(Object(i["a"])({},t),{},{name:t.nameCached}):t})),this.toggleIsEditing(e)}}},g=l,m=(a("8927"),a("2877")),p=Object(m["a"])(g,r,n,!1,null,"0d4c3087",null);t["default"]=p.exports},8927:function(e,t,a){"use strict";a("3aed")},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("2fa3"),n=function(){return localStorage.getItem("token")};t["a"]={users:{get:function(){return r["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.userId,a=e.isAdmin;return r["b"].put("/admin/users/".concat(t),{isAdmin:a},{headers:{Authorization:"Bearer ".concat(n())}})}},categories:{get:function(){return r["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){var t=e.categoryId;return r["b"].delete("/admin/categories/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.categoryId,a=e.name;return r["b"].put("/admin/categories/".concat(t),{name:a},{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},get:function(){return r["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t,{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){var t=e.restaurantId;return r["b"].delete("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.restaurantId,a=e.formData;return r["b"].put("/admin/restaurants/".concat(t),a,{headers:{Authorization:"Bearer ".concat(n())}})}}}},d81d:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").map,i=a("1dde"),s=i("map");r({target:"Array",proto:!0,forced:!s},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e04c:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3"},[a("h1",[e._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[e._v(" Restaurants ")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[e._v("Categories")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[e._v("Users")])],1)},n=[],i=a("2877"),s={},o=Object(i["a"])(s,r,n,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-2b926942.aa8e9d9f.js.map