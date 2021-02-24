!function(t){function a(a){for(var n,s,i=a[0],c=a[1],l=a[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(d&&d(a);m.length;)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(n=!1)}n&&(r.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},o={0:0},r=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;r.push([34,1,2]),e()}({33:function(t,a,e){},34:function(t,a,e){"use strict";e.r(a);var n=e(0),o=e.n(n),r=e(1),s=e(14);const i=e.n(s).a.create({baseURL:"/",timeout:1e4});var c={namespaced:!0,state:{cart:[],statistics:[],loading:!0},getters:{cart:t=>t.cart,loading:t=>t.loading,statistics:t=>t.statistics,sum:t=>t.cart.reduce(((t,{price:a,quantity:e})=>t+a*e),0),quantity:t=>t.cart.reduce(((t,{quantity:a})=>t+a),0)},mutations:{getCart:(t,a)=>(t.cart=a)&&(t.loading=!1),addToCart:(t,a)=>t.cart.push({...a,quantity:1}),getStatistics:(t,a)=>t.statistics=a,incCart:(t,a)=>{let e=t.cart.findIndex((t=>t._id===a._id));o.a.set(t.cart[e],"quantity",++t.cart[e].quantity)},deleteFromCart:(t,a)=>{let e=t.cart.findIndex((t=>t._id===a._id));t.cart.splice(e,1)},decCart:(t,a)=>{let e=t.cart.findIndex((t=>t._id===a._id));+a.quantity>1&&o.a.set(t.cart[e],"quantity",--t.cart[e].quantity)},clearCart:t=>t.cart=[],setOnInProcess:(t,a)=>{let e=t.cart.findIndex((t=>t._id===a));-1!==e&&o.a.set(t.cart[e],"inProcess",!0)},setOffInProcess:(t,a)=>{let e=t.cart.findIndex((t=>t._id===a));-1!==e&&o.a.set(t.cart[e],"inProcess",!1)}},actions:{async getCart({commit:t,dispatch:a}){try{t("getCart",(await(async()=>{let{data:t}=await i.get("cartGoods");return t})()).map((t=>({...t,link:"http://placehold.it/100x100/",inProcess:!1}))))}catch{a("alerts/add",{text:"Error by getting goods or cart. Please, reload  page... ",place:"center"},{root:!0})}},async incCart({state:t,commit:a,dispatch:e},n){e("blockOn",n._id);try{t.cart.find((t=>t._id===n._id))?(await(async t=>{let{data:{result:a}}=await i.put("inc",{id:t});return a})(n._id),a("incCart",n)):(await(async t=>{let{data:{result:a}}=await i.post("add",{id:t});return a})(n._id),a("addToCart",n))}catch(t){e("alerts/add",{timeout:3e3,text:"Error by adding of good from cart... Try again  "},{root:!0})}e("blockOff",n._id),e("getStatistics")},async decCart({state:t,commit:a,dispatch:e},n){e("blockOn",n._id);try{let e=t.cart.find((t=>t._id===n._id));e&&e.quantity>1?(await(async t=>{let{data:{result:a}}=await i.put("dec",{id:t});return a})(n._id),a("decCart",e)):(await(async t=>{let{data:{result:a}}=await i.delete("remove/"+t);return a})(n._id),a("deleteFromCart",e))}catch(t){e("alerts/add",{timeout:3e3,text:"Error by delleting of good from cart... Try again  "},{root:!0})}e("blockOff",n._id),e("getStatistics")},async clearCart({commit:t,dispatch:a}){try{await(async()=>{let{data:{result:t}}=await i.delete("delAll");return t})(),t("clearCart")}catch(t){a("alerts/add",{timeout:3e3,text:"Error by clearing of cart... Try again  "},{root:!0})}a("getStatistics")},async getStatistics({commit:t,dispatch:a}){try{t("getStatistics",await(async()=>{let{data:t}=await i.get("statistics");return t})())}catch(t){console.log(t),a("alerts/add",{timeout:3e3,text:"Error by clearing of cart... Try again  "},{root:!0})}},blockOn({commit:t,dispatch:a},e){a("catalog/blockOn",e,{root:!0}),t("setOnInProcess",e)},blockOff({commit:t,dispatch:a},e){a("catalog/blockOff",e,{root:!0}),t("setOffInProcess",e)}}};var l=e(4),d=o.a.component("good",{template:'\n            <div class="card col-3 m-2">\n                    <img class="card-img-top mt-2" :src="prod.link" :key="prod._id" alt="Card image cap">\n                    <div class="card-body">\n                        <h5 class="card-title">{{prod.title}}</h5>\n                        <h5 class="card-title mb-1">{{prod.price}}₽ </h5>\n                        <router-link :to="{ name: \'good\', params: { id: prod._id }}"><a class="prod-link">Подробнее...</a></router-link>\n                        <transition enter-active-class="btn-enter" leave-active-class="btn-leave" mode="out-in">\n                            <button v-if = "!inCart(prod._id)"  \n                                class="btn btn-primary"\n                                :class = "prod.inProcess? \'btn-secondary block\': \'\' "\n                                @click="addToCart(prod)" \n                                :disabled="prod.inProcess" \n                                key="add"\n                            >   \n                                <span v-if="prod.inProcess" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n                                Add to cart\n                            </button>\n                            <button v-else  \n                                class="btn btn-danger" \n                                :class = "prod.inProcess? \'btn-secondary block\': \'\' "\n                                @click="delFromCart(prod)" \n                                :disabled="prod.inProcess"\n                                key="remove"\n                            >   \n                                <span v-if="prod.inProcess" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n                                Remove ({{quant(prod._id)}})\n                            </button>\n                     </transition>        \n                    </div>\n            </div>      \n    ',props:{prod:{type:Object,required:!0}},methods:{...Object(r.b)({addToCart:"cart/incCart",delFromCart:"cart/decCart"}),test(){console.log(this.addToCart)}},computed:{...Object(r.c)({inCart:["catalog/inCart"],cartLoading:["cart/loading"],quant:["catalog/quant"]})}}),u=o.a.component("products",{template:'\n    <div class="conteiner mt-1 mb-1 border border border-light rounded body">\n        <div class="row center ">\n            <good v-for="prod in catalog" :prod=\'prod\' :key="prod.name" />      \n        </div>  \n        <div class="ml-auto  mr-auto mt-5 col-4">\n             <h4 v-if = "catalog.length === 0 && !loading">Not found for "{{bodyRequest}} ..." </h4>\n        </div>\n\n        <div v-if = "loading" class="m-auto   col-1">\n            <div class="spinner-grow" style="width: 7rem; height: 7rem;" role="status">\n                 <span class="sr-only">Loading...</span>\n            </div>    \n        </div>\n\n    </div> \n    ',components:{good:d},computed:{...Object(r.c)({catalog:["catalog/catalog"],bodyRequest:["catalog/value"],loading:["catalog/loading"]})},mounted(){}}),m=o.a.component("myform",{template:'\n     <div >\n       <form class="mt-1 mb-1 body rounded" id="form">\n            <h1 class="col-11 ml-auto mr-auto mt-3"> Contacts us </h1>\n            <div v-for="field,i in fields" class="form-group col-11 ml-auto mr-auto  mt-2">\n                <label >{{field.name}}</label>\n                <input v-if = "field.tagName === \'input\'"\n                 :type="field.type" \n                 class="form-control" \n                 :name="field.name" \n                 v-model="field.value"\n                 v-on:input="valid(i)"\n                 :class="getClass(i)"                \n                 >\n                <textarea v-else  \n                :type="field.type" \n                 class="form-control" \n                 :name="field.name" \n                 v-model="field.value"\n                 v-on:input="valid(i)"\n                 :class="getClass(i)"     ></textarea>\n                <small v-if="getClass(i) === \'error\'" class="form-text text-danger fontSize">{{field.errorMessage}}</small>\n            </div>      \n            <div class="col-11 ml-auto mr-auto"> \n                  <button type="submit" \n                   class="btn btn-primary ml-auto mr-auto" \n                   :class="!validForm ?\'disabled\':\'\'" \n                   :disabled="!validForm"\n                   @click.prevent = "clearForm"\n                   >Sent</button>\n            </div>   \n        </form> \n    </div>\n    ',data:()=>({fields:[{name:"Name",errorMessage:"Minimum length name is 3",type:"text",tagName:"input",regExp:["^[а-яА-ЯёЁA-z]{3,}$","i"]},{name:"Phone",errorMessage:"Required format:+7(000)000-0000",type:"phone",tagName:"input",regExp:["^[+]\\d{1}[(]\\d{3}[)]\\d{3}-\\d{4}$"]},{name:"Email",errorMessage:"Required format : mymail@mail.ru or my.mail@mail.ru or my - mail@mail.ru.",type:"email",tagName:"input",regExp:["^\\S+@mail.ru$","i"]},{name:"Text",errorMessage:"Minimum length messege is 3",type:"text",tagName:"textarea",regExp:["^[?!,.а-яА-ЯёЁA-z ]{3,}$","i"]}]}),created(){this.fields.map((t=>({...t,valid:!1,value:"",active:!1})))},methods:{valid(t){o.a.set(this.fields[t],"active",!0),new RegExp(...this.fields[t].regExp).test(this.fields[t].value)?(o.a.set(this.fields[t],"valid",!0),console.log("dfd")):o.a.set(this.fields[t],"valid",!1),this.getClass(t)},getClass(t){let a=this.fields[t];return a.active&&a.valid?"valid":a.active&&!a.valid?"error":""},clearForm(){this.fields.forEach(((t,a)=>{o.a.set(this.fields[a],"valid",!1),o.a.set(this.fields[a],"active",!1),o.a.set(this.fields[a],"value","")}))}},computed:{validForm(){return this.fields.every((t=>t.active))}}}),p=o.a.component("myform",{template:'\n     <div class="container-fuild mt-1 mb-1 body rounded">\n        <h1 class="col-11 ml-auto mr-auto mt-3"> About shop </h1>\n        <p class="col-11 ml-auto mr-auto mt-3">\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repellat maiores quam odit. Harum esse velit vero sunt voluptatum expedita voluptatibus dolor a! Numquam laboriosam excepturi ad ratione veritatis dolore veniam ex porro temporibus repudiandae rerum, ea ullam quibusdam accusamus, enim, aut cumque debitis. Quasi, nulla doloremque? Architecto at numquam eum minus? Debitis aperiam sed nostrum voluptatum rerum necessitatibus neque accusantium quos doloribus, distinctio veniam quasi amet tempore sit quidem, magnam provident tenetur repudiandae dolor aut laborum id quisquam. Veritatis, veniam. Repellendus incidunt facere soluta nam fugit iusto cum atque sapiente asperiores deserunt. Voluptatibus harum culpa natus deserunt, laudantium eius maxime sed nihil? Sit nemo rem nihil delectus debitis eos, aperiam soluta, ducimus dolor molestias vero dignissimos recusandae quidem tenetur deleniti architecto dicta? Sed at culpa odit repudiandae alias hic in temporibus eos dolor voluptates eaque reprehenderit blanditiis pariatur dolorum, excepturi praesentium quas, reiciendis quaerat nobis neque error ut ratione quos. Quibusdam nesciunt voluptates quas, velit in molestias cum optio provident doloremque quidem, quae iste accusamus repellat amet sunt, nobis expedita omnis distinctio iusto adipisci porro quia! Maxime dicta harum natus incidunt voluptates saepe voluptatibus vitae, accusantium error ex, consequuntur reprehenderit illum cupiditate nemo. Dolores omnis minima impedit quae ipsa.\n        </p>\n    </div>\n    '}),g=o.a.component("cart",{template:'\n    <div class="conteiner mt-1 mb-1 border border border-light rounded body">\n            \n            <ul class="nav-cart">\n                <router-link :to="{name: \'cartBody\'}" class ="link "  exact active-class="link-active">Cart</router-link> \n                <router-link :to="{name: \'cartStatistics\'}" class ="link "  exact active-class="link-active">Statistics</router-link>              \n            </ul>\n\n            <router-view></router-view>\n\n    </div> \n    '}),v=o.a.component("prod",{template:'\n            <tr class="row ml-auto mr-auto mt-2 statistics-list" style="border-bottom:1px solid lightgray; ">\n                <td class="col-2 ml-auto mr-auto cent">\n                       <img class="card-img-top mt-2" :src="prod.link" :key="prod._id" style="width:100px; height:100px">\n                </td>\n                <td class="col-2 ml-auto mr-auto cent">{{prod.title}}</td>\n                <td class="col-2 ml-auto mr-auto cent">{{prod.price}} ₽</td>\n                <td class="col-2 ml-auto mr-auto cent">{{prod.price * prod.quantity}} ₽</td>\n                <td class="col-2 ml-auto mr-auto cent">  \n                    <button class="btn btn-info cartBtn"\n                        type="submit" \n                        @click="delFromCart(prod)" \n                        :class = "prod.inProcess? \' block\': \'\' "\n                        :disabled="prod.inProcess"\n                     >\n                        <span v-if="prod.inProcess" class="spinner-border spinner-border-sm"" role="status" aria-hidden="true"></span>\n                        <span class = "operation" v-else>-</span>\n                     </button>      \n                    <div class="ml-1 mr-1 cent"> <span>{{prod.quantity}}</span> </div>\n                    <button class="btn btn-info cartBtn"\n                        type="submit" \n                        @click="addToCart(prod)"\n                        :class = "prod.inProcess? \'block\': \'\' "\n                        :disabled="prod.inProcess"\n                    >\n                        <span v-if="prod.inProcess" class="spinner-border spinner-border-sm"" role="status" aria-hidden="true"></span>\n                        <span class = "operation" v-else>+</span>\n                    </button>\n                </td>\n            </tr>   \n    ',props:{prod:{type:Object,required:!0}},computed:{...Object(r.c)({catalog:["catalog/catalog"],catalogLoading:["catalog/loading"]})},methods:{...Object(r.b)({addToCart:"cart/incCart",delFromCart:"cart/decCart"})}}),b=o.a.component("cart",{template:'\n \n         <div class = "container-fluid"> \n            <table v-if = "!loading" class="table ">\n\n                <tbody>\n                    <tr class="row ml-auto mr-auto mt-2 statistics-header" style="border-bottom:1px solid lightgray; ">\n                        <td class="col-2 ml-auto mr-auto cent"><strong>Image</strong></td>\n                        <td class="col-2 ml-auto mr-auto cent"><strong>Title</strong></td>\n                        <td class="col-2 ml-auto mr-auto cent"><strong>Price</strong></td>\n                        <td class="col-2 ml-auto mr-auto cent"><strong>All price</strong></td>\n                        <td class="col-2 ml-auto mr-auto cent"><strong>Quantity</strong></td>     \n                    </tr>\n                    <prod v-for="prod in  goodsInCart" :prod=\'prod\' :key="prod.name" @addtocart="$emit(\'addtocart\', $event)" @removefromcart="$emit(\'removefromcart\', $event)"/>\n                    <tr class="row ml-auto mr-auto mt-2" style="border-bottom:1px solid lightgray; ">\n                        <td class="col-2 ml-auto mr-auto cent"></td>\n                        <td class="col-2 ml-auto mr-auto cent"></td>\n                        <td class="col-2 ml-auto mr-auto cent"><strong>Result:</strong></td>\n                        <td class="col-2 ml-auto mr-auto cent"><strong>{{sum}} ₽</strong></td>\n                        <td class="col-2 ml-auto mr-auto cent"><strong>{{quantity}}</strong></td>     \n                    </tr>\n            \n                    </tbody>\n                    <div class = "col-2 mt-3 mb-3 mr-1 ml-auto">\n                        <button class = "btn btn-info" @click = "clearCart" :disabled="goodsInCart.length === 0"> Clear Cart </button>\n                    </div>\n            </table>\n        \n            <div v-else class="m-auto   col-1">\n                <div class="spinner-grow mt-5" style="width: 7rem; height: 7rem;" role="status">\n                    <span class="sr-only">Loading...</span>\n                </div>    \n            </div>\n\n         </div>\n  \n    ',components:{prod:v},computed:{...Object(r.c)({goodsInCart:["cart/cart"],sum:["cart/sum"],quantity:["cart/quantity"],loading:["cart/loading"]})},methods:{...Object(r.b)({clearCart:"cart/clearCart"})}}),f=o.a.component("statistics",{template:'\n         <div class = "container-fluid">   \n            <div class = "statistics-body">\n                <div class = "statistics-header"> \n                    <div class = "time">Time operation</div>\n                    <div class = "event">Operation</div>\n                    <div class = "obj">Product\'s name</div>\n                </div>\n                <div class = "statistics-list"  v-for="obj of statistics" :key = "obj._id"> \n                    <div class = "time">{{obj.data}}</div>\n                    <div class = "event">{{obj.event}}</div>\n                    <div class = "obj"> \n                         <router-link v-if="obj.product" :to="{ name: \'good\', params: { id: obj.product._id }}"><a class="prod-link">{{obj.product.title}}</a></router-link>\n                    </div>\n                </div>           \n            </div> \n        </div>\n    ',computed:{...Object(r.c)({statistics:["cart/statistics"]})},methods:{...Object(r.b)({getStatistics:"cart/getStatistics"})}}),h=o.a.component("products",{template:'\n   <div class="conteiner mt-1 mb-1 border border border-light rounded body">\n    <div v-if="id && prod" class="spa-cont-good">\n      <img class="spa-img" :src="prod.img" alt />\n      <div class="spa-cont-buttons">\n         <transition enter-active-class="btn-enter" leave-active-class="btn-leave" mode="out-in">\n           <button v-if = "!inCart(prod._id)"  \n                class="btn btn-primary"\n                :class = "prod.inProcess? \'btn-secondary block\': \'\' "\n                @click="addToCart(prod)" \n                :disabled="prod.inProcess" \n                key="add"\n            >   \n                <span v-if="prod.inProcess" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n                Add to cart\n                </button>\n                <button v-else  \n                class="btn btn-danger" \n                :class = "prod.inProcess? \'btn-secondary block\': \'\' "\n                @click="delFromCart(prod)" \n                :disabled="prod.inProcess"\n                key="remove"\n            >   \n                <span v-if="prod.inProcess" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n                Remove ({{quant(prod._id)}})\n            </button>\n            </transition>     \n        </div>\n        <h3 class = "mt-3 ">{{prod.title}}</h3>\n        <p class = "pageGood-price">Price: {{prod.price}} ₽</p>\n        <router-link :to="{ name: \'catalog\'}"> <a class="pageGood-link">Back to catalog</a></router-link>\n        <p class="spa-description">{{prod.description}}</p>   \n            </div>\n            <div v-else class="spa-loading-cont ">\n            <div class="spinner-border" style="width: 10rem; height: 10rem;" role="status">\n                <span class="sr-only">Loading...</span>\n            </div>\n        </div>\n     </div>\n    ',components:{good:d},methods:{...Object(r.b)({addToCart:"cart/incCart",delFromCart:"cart/decCart"})},computed:{...Object(r.c)({inCart:["catalog/inCart"],cartLoading:["cart/loading"],quant:["catalog/quant"],good:"catalog/getGood"}),id(){return!/[A-Z-z0-9]{23}\d$/.test(this.$route.params.id)&&this.$route.params.id},prod(){return this.good(this.id)}},mounted(){}});o.a.use(l.a);const y=[{name:"main",path:"/",component:p},{name:"catalog",path:"/catalog",component:u},{name:"good",path:"/catalog/:id",component:h},{path:"/cart",component:g,children:[{name:"cartBody",path:"",component:b},{name:"cartStatistics",path:"/cart/cartStatistics",component:f}]},{name:"form",path:"/form",component:m}];var k=new l.a({mode:"history",routes:y}),C={namespaced:!0,state:{_catalog:[],catalog:[],value:"",loading:!0},getters:{catalog:t=>t.catalog,value:t=>t.value,loading:t=>t.loading,getGood:t=>a=>t._catalog.find((t=>t._id===a)),inCart:(t,a,e,n)=>t=>n["cart/cart"].find((a=>a._id===t)),quant:(t,a,e,n)=>t=>n["cart/cart"].find((a=>a._id===t)).quantity},mutations:{getCatalog:(t,a)=>(t.catalog=t._catalog=a)&&(t.loading=!1),filter:(t,a)=>{""!==a?(t.catalog=t._catalog.filter((t=>t&&t.title.toLowerCase().includes(a.toLowerCase()))),t.value=a):(t.catalog=t._catalog,t.value="")},setOnInProcess:(t,a)=>{let e=t.catalog.findIndex((t=>t._id===a));o.a.set(t.catalog[e],"inProcess",!0)},setOffInProcess:(t,a)=>{let e=t.catalog.findIndex((t=>t._id===a));o.a.set(t.catalog[e],"inProcess",!1)}},actions:{async getCatalog({commit:t,dispatch:a}){try{t("getCatalog",(await(async()=>{let{data:t}=await i.get("goods");return t})()).map((t=>({...t,link:"http://placehold.it/150x100/",inCart:!1,inProcess:!1}))))}catch{a("alerts/add",{text:"Error by getting goods or cart. Please, reload  page... ",place:"center"},{root:!0})}},filter({commit:t},a){/catalog$/.test(window.location.href)||k.push("/catalog"),t("filter",a)},blockOn({commit:t},a){t("setOnInProcess",a)},blockOff({commit:t},a){t("setOffInProcess",a)}}},q={namespaced:!0,state:{all:[],place:"corner"},getters:{all:t=>t.all,place:t=>t.place},mutations:{add(t,a){a.place&&"center"===a.place?t.all[0]=a:t.all.push(a),a.place&&(t.place=a.place)},dellByIndex(t,a){const e=t.all.findIndex((t=>t.id===a));t.all.splice(e,1)}},actions:{add({commit:t,state:a},e){const n=Date.now();t("add",{...e,id:n}),e.timeout&&setTimeout((()=>t("dellByIndex",n)),e.timeout)}}};o.a.use(r.a);var x=new r.a.Store({namespaced:!0,modules:{catalog:C,cart:c,alerts:q},strict:!1}),w=(e(33),o.a.component("search",{template:' \n        <form class="form-inline my-2 my-lg-0" id = "filter"  v-on:submit.prevent="filter(searchValue)">\n            <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" v-model = "searchValue">\n            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\n        </form> \n    ',data:()=>({searchValue:""}),methods:{...Object(r.b)({filter:"catalog/filter"})}})),P=o.a.component("top",{template:'\n    <nav class="navbar navbar-expand-lg navbar-light border rounded bg-light" >\n        \n        <router-link :to="{name: \'main\'}" class ="link  title"  exact >E-Shop</router-link> \n        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n            <ul class="navbar-nav mr-auto border rounded">\n\n                <router-link :to="{name: \'main\'}" class ="link"  exact active-class="link-active">Main</router-link> \n                <router-link :to="{name: \'catalog\'}" class ="link"  exact active-class="link-active">Products</router-link> \n                <router-link :to="{name: \'form\'}" class ="link"  exact active-class="link-active">Contacts us</router-link> \n                 \n            </ul>\n            <filt></filt>\n            \n            <router-link to="/cart" type="button" class="btn btn-secondary ml-3"  active-class="but-active">\n                   Cart<span class="badge badge-light ml-3">{{quantity}}</span>\n               \n            </router-link> \n       \n        </div>\n    </nav> \n    ',components:{filt:w},data:()=>({searchValue:"",fields:[{name:"Main",active:!0},{name:"Products",active:!1},{name:"Contacts us",active:!1},{name:"Cart",active:!1}]}),methods:{active(t){this.fields.forEach(((a,e)=>{t===a.name?o.a.set(this.fields[e],"active",!0)&&this.$emit("showpage",a.name):o.a.set(this.fields[e],"active",!1)}))},search(){this.active("Products"),this.$emit("search",this.searchValue)}},computed:{...Object(r.c)({quantity:["cart/quantity"]})}}),O=o.a.component("top",{template:'\n        <div class="card">\n            <div class="card-header">\n                Footer\n            </div>  \n        </div>\n    '}),_=o.a.component("alert",{template:'\n    <transition-group :class="place ===\'corner\'? \'cont-alert\': \'cont-alert-center\'" tag="div" leave-active-class="leave" enter-active-class="enter" mode="out-in">\n        <div :class="place ===\'corner\'? \'message\': \'message-center\'" v-for="(alert) in alerts" :key="alert.id">\n                <p>{{alert.text}}</p> \n                <button v-if="place ===\'center\'" class = "btn btn-secondary" @click="reload"> Reload page</button>\n        </div>\n    </transition-group>\n    ',methods:{reload(){window.location.reload()}},computed:{...Object(r.c)({alerts:"alerts/all",place:"alerts/place"})}});new o.a({el:"#el",store:x,router:k,components:{top:P,bot:O,alerts:_},created(){x.dispatch("cart/getCart"),x.dispatch("catalog/getCatalog"),x.dispatch("cart/getStatistics")}})}});