"use strict";function removePageInUrl(e){var t=new URL(e),o=new URLSearchParams(t.search);return o.has("product-page")&&(o.delete("product-page"),t.search=o.toString()),t.toString().replace("#","")}function woostifyInfiniteScroll(e,t){let o=document.querySelector(".site-main .products"),r=document.querySelector(".woostify-view-more"),n=document.querySelector(".woostify-view-prev"),i=document.querySelector(".w-view-prev-button"),c=document.querySelector(".woocommerce-pagination ul.page-numbers");if(null==o&&(o=document.querySelector(".site-content .products")),(null==r||void 0===r)&&(null==n||void 0===n))return!1;if(null==r||void 0===r){window.infScroll=new InfiniteScroll(o,{path:t||".prev.page-numbers",append:".product.type-product",history:"push",hideNav:".woocommerce-pagination",loadOnScroll:!1});var a=woostify_woocommerce_general.paged-1,s=woostify_woocommerce_general.paged,l={};return jQuery(".page-numbers").each(function(e,t){l[jQuery(t).text()]=jQuery(t).attr("href")}),n&&i&&i.addEventListener("click",function(){var e=infScroll.element.getBoundingClientRect().height,t=document.querySelector(".woostify-view-prev");if(s<=1)return;let o=new DOMParser,r,{responseBody:n,domParseResponse:c,fetchOptions:u}=infScroll.options;r=l[a],history.pushState(null,"",r),jQuery(".page-numbers"),"function"==typeof u&&(u=u()),i.classList.add("circle-loading"),fetch(r,u).then(s=>{if(!s.ok){let l=Error(s.statusText);return infScroll.onPageError(l,r,s),{response:s}}return i.classList.remove("circle-loading"),--a<=0&&(t.style.display="none"),s[n]().then(t=>{"text"==n&&c&&(t=o.parseFromString(t,"text/html"));let i=t.querySelectorAll(infScroll.options.append);if(!i||!i.length)return;let a=getItemsFragment(i);infScroll.element.insertBefore(a,infScroll.element.children[0]),infScroll.scrollPages;var l={top:0,path:r,title:s.title};infScroll.scrollPages.unshift(l);for(var u=1;u<infScroll.scrollPages.length;u++)infScroll.scrollPages[u].top=infScroll.scrollPages[u].top+e})}).catch(e=>{console.log(e)})}),!1}let u=r.querySelector(".woostify-loading-status"),d=woostify_woocommerce_general.loading_type,p=r.querySelector(".w-view-more-button"),f={path:t||".next.page-numbers",append:".product.type-product",history:"push",hideNav:".woocommerce-pagination",checkLastPage:".next.page-numbers",loadOnScroll:"button"!==d};if(null==c||void 0===c?"button"===d?r.style.display="none":f.loadOnScroll=!1:"button"===d?(r.style.display="block",p.style.display="inline-flex"):f.loadOnScroll=!0,c){InfiniteScroll.prototype.appendItems=function(e,t){if(!this.conditionBeforeAppend(this,{items:e,fragment:t})){console.warn("Url has change. No data apended.");let o=document.querySelector(".woostify-view-more");"button"===woostify_woocommerce_general.loading_type?o.querySelector(".w-view-more-button").classList.remove("circle-loading"):o.querySelector(".woostify-loading-status").style.display="none";return}e&&e.length&&(refreshScripts(t=t||getItemsFragment(e)),this.element.appendChild(t))},InfiniteScroll.prototype.conditionBeforeAppend=function(e,t){let o=removePageInUrl(woostify_woocommerce_general.currentUrl),r=removePageInUrl(window.location.href);return o==r},window.infScroll=new InfiniteScroll(o,f),infScroll.loadCount=0,infScroll.on("request",function(e,t){"button"===d?p.classList.add("circle-loading"):u.style.display="inline-block";let o=document.querySelector(f.path),r=o?o.href:"";woostify_woocommerce_general.currentUrl=r}),infScroll.on("load",function(e,t,o){let n=e.querySelectorAll(".woocommerce-pagination .page-numbers .page-numbers:not(.next):not(.prev):not(.dots)"),i=!e.querySelectorAll(".woocommerce-pagination .page-numbers .page-numbers.next").length;"button"===d?p.classList.remove("circle-loading"):r.querySelector(".woostify-loading-status").style.display="none",n.length?i?"button"===d?p.style.display="none":(u.style.display="none",infScroll.option({loadOnScroll:!1})):"button"!==d&&infScroll.option({loadOnScroll:!0}):"button"===d?p.style.display="inline-flex":u.style.display="inline-block"}),infScroll.on("append",function(e,t,o,n){"button"===d?p.classList.remove("circle-loading"):r.querySelector(".woostify-loading-status").style.display="none","function"==typeof woostifyQuickView&&woostifyQuickView(),"function"==typeof woostifyVariationSwatches&&woostifyVariationSwatches(),"function"==typeof woostifySwatchList&&woostifySwatchList(),"function"==typeof customQuantity&&customQuantity(),"function"==typeof woostifyCountdownUrgency&&woostifyCountdownUrgency(),"1"===woostify_woocommerce_general.is_active_wvs&&jQuery(".variations_form").each(function(){jQuery(this).wc_variation_form()})}),infScroll.on("last",function(e,t){"button"===d?p.style.display="none":u.style.display="none"});var a=woostify_woocommerce_general.paged-1,s=infScroll.pageIndex,l={};jQuery(".page-numbers").each(function(e,t){l[jQuery(t).text()]=jQuery(t).attr("href")}),n&&i&&i.addEventListener("click",function(){loadPreviewPage(infScroll,a,l),a--}),"button"===d&&e&&p.addEventListener("click",function(){infScroll.loadNextPage()})}}function loadPreviewPage(e,t,o){let r=document.querySelector(".w-view-prev-button");var n=e.element.getBoundingClientRect().height,i=document.querySelector(".woostify-view-prev"),c=e.pageIndex;if(c<=1)return;let a=new DOMParser,s,{responseBody:l,domParseResponse:u,fetchOptions:d}=e.options;c-1==t&&(s=jQuery(".prev.page-numbers").attr("href")),s=o[t],history.pushState(null,"",s),jQuery(".page-numbers"),"function"==typeof d&&(d=d()),r.classList.add("circle-loading"),fetch(s,d).then(o=>{if(!o.ok){let c=Error(o.statusText);return e.onPageError(c,s,o),{response:o}}return r.classList.remove("circle-loading"),--t<=0&&(i.style.display="none"),o[l]().then(t=>{"text"==l&&u&&(t=a.parseFromString(t,"text/html"));let r=t.querySelectorAll(e.options.append);if(!r||!r.length)return;let i=getItemsFragment(r);e.element.insertBefore(i,e.element.children[0]),e.scrollPages;var c={top:0,path:s,title:o.title};e.scrollPages.unshift(c);for(var d=1;d<e.scrollPages.length;d++)e.scrollPages[d].top=e.scrollPages[d].top+n})}).catch(e=>{console.log(e)})}function refreshScripts(e){let t=e.querySelectorAll("script");for(let o of t){let r=document.createElement("script"),n=o.attributes;for(let i of n)r.setAttribute(i.name,i.value);r.innerHTML=o.innerHTML,o.parentNode.replaceChild(r,o)}}function getItemsFragment(e){let t=document.createDocumentFragment();return e&&t.append(...e),t}function cartSidebarOpen(){!(document.body.classList.contains("no-cart-sidebar")||document.body.classList.contains("disabled-sidebar-cart"))&&document.documentElement.classList.add("cart-sidebar-open")}function eventCartSidebarOpen(){document.body.classList.add("updating-cart"),document.body.classList.remove("cart-updated")}function eventCartSidebarClose(){document.body.classList.add("cart-updated"),document.body.classList.remove("updating-cart")}function shoppingBag(){var e=document.getElementsByClassName("shopping-bag-button"),t=document.getElementById("shop-cart-sidebar");if(!(!e.length||!t||document.body.classList.contains("woocommerce-cart")||document.body.classList.contains("woocommerce-checkout")))for(var o=0,r=e.length;o<r;o++)e[o].addEventListener("click",function(e){e.preventDefault(),cartSidebarOpen(),closeAll()})}var woostifyConditionScrolling=function(){return!!(document.body.classList.contains("woocommerce-demo-store")&&-1===document.cookie.indexOf("store_notice")||(document.body.classList.contains("has-order-sticky-button")||document.body.classList.contains("has-proceed-sticky-button"))&&window.innerWidth<768)},woostifyStockQuantityProgressBar=function(){var e=document.querySelectorAll(".woostify-single-product-stock-progress-bar");e.length&&e.forEach(function(e,t){var o=e.getAttribute("data-number")||0;e.style.width=o+"%"})},progressBarConfetti=function(e,t){if(woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect){var o=document.querySelectorAll(".free-shipping-progress-bar"),r=0;if(o.length&&(r=parseInt(o[0].getAttribute("data-progress"))),!e.length&&r>=100||t<r&&r>=100){let n=document.createElement("canvas");n.className="confetti-canvas",document.querySelector("#shop-cart-sidebar").appendChild(n);let i=confetti.create(n,{resize:!0});confettiSnowEffect(i,5e3),setTimeout(function(){i.reset(),document.querySelector(".confetti-canvas").remove()},6e3)}t=r}},confettiSnowEffect=function(e,t){var o=Date.now()+t;function r(e,t){return Math.random()*(t-e)+e}!function n(){var i=o-Date.now(),c=Math.max(200,500*(i/t));e({particleCount:1,startVelocity:0,ticks:c,origin:{x:Math.random(),y:0},colors:["#EF2964"],shapes:["circle","square"],gravity:1,scalar:r(.4,1),drift:r(-.4,.4)}),e({particleCount:1,startVelocity:0,ticks:c,origin:{x:Math.random(),y:0},colors:["#2D87B0"],shapes:["circle","square"],gravity:1,scalar:r(.4,1),drift:r(-.4,.4)}),i>0&&requestAnimationFrame(n)}()},woostifyQuantityMiniCart=function(){var e=document.querySelector(".shopping-bag-button .shop-cart-count, .boostify-count-product"),t=document.querySelectorAll(".mini-cart-product-infor");if(!t.length||!e){e&&e.classList.add("hide");return}e.classList.remove("hide"),t.forEach(function(e,t){var o=e.querySelectorAll(".mini-cart-product-qty"),r=e.querySelector("input.qty"),n=r.value,i=Number(r.getAttribute("max")||-1),c=r.getAttribute("data-cart_item_key")||"",a=new Event("change"),s=new Event("quantity_updated");if(o.length&&r){for(var t=0,l=o.length;t<l;t++)o[t].onclick=function(){var e=Number(r.value||0),t=Number(r.getAttribute("step")||1),o=Number(r.getAttribute("min")||1),c=this.getAttribute("data-qty");if(e<o||isNaN(e)){alert(woostify_woocommerce_general.qty_warning);return}if("minus"===c){if(e<=o||e-t<o||e<=t)return;var s=Number((e-t).toFixed(t.countDecimals()));r.value=s,n=s}else if("plus"===c){if(i>0&&(e>=i||e+t>i))return;var s=Number((e+t).toFixed(t.countDecimals()));r.value=s,n=s}r.dispatchEvent(a)};r.addEventListener("change",function(){var e=Number(r.value||0);if(e<Number(r.getAttribute("min")||0)||isNaN(e)||i>0&&Number(e)>i){alert(woostify_woocommerce_general.qty_warning),r.value=n;return}var t=new Request(woostify_woocommerce_general.ajax_url,{method:"POST",body:"action=update_quantity_in_mini_cart&ajax_nonce="+woostify_woocommerce_general.ajax_nonce+"&key="+c+"&qty="+e,credentials:"same-origin",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"})});document.documentElement.classList.add("mini-cart-updating"),fetch(t).then(function(e){if(200!==e.status)throw alert(woostify_woocommerce_general.ajax_error),console.log("Status Code: "+e.status),e;return e.json()}).then(function(e){if(e.success){jQuery(document.body).trigger("updated_wc_div");var t=e.data,o=document.querySelector(".cart-sidebar-content .woocommerce-mini-cart__total .woocommerce-Price-amount.amount"),r=document.querySelectorAll(".woostify-header-total-price, .boostify-subtotal"),n=document.querySelectorAll(".shop-cart-count, .boostify-count-product"),i=document.querySelectorAll(".free-shipping-progress-bar");if(o&&(o.innerHTML=t.total_price,r.length))for(var c=0,a=r.length;c<a;c++)r[c].innerHTML=t.total_price;if(n.length)for(var s=0,l=n.length;s<l;s++)n[s].innerHTML=t.item;if(i.length&&t.hasOwnProperty("free_shipping_threshold")){let u=i[0].getAttribute("data-progress");for(var d=0,p=i.length;d<p;d++)i[d].setAttribute("data-progress",t.free_shipping_threshold.percent),i[d].querySelector(".progress-bar-message").innerHTML=t.free_shipping_threshold.message,i[d].querySelector(".progress-percent")&&(i[d].querySelector(".progress-percent").innerHTML=t.free_shipping_threshold.percent+"%"),i[d].querySelector(".progress-bar-status")&&(i[d].querySelector(".progress-bar-status").style.minWidth=t.free_shipping_threshold.percent+"%",i[d].querySelector(".progress-bar-status").style.transitionDuration=".6s",100<=parseInt(t.free_shipping_threshold.percent)?i[d].querySelector(".progress-bar-status").classList.add("success"):i[d].querySelector(".progress-bar-status").classList.remove("success"));if(woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect&&u<100&&t.free_shipping_threshold.percent>=100){var f=document.createElement("canvas");f.className="confetti-canvas",document.querySelector("#shop-cart-sidebar").appendChild(f);var h=confetti.create(f,{resize:!0});confettiSnowEffect(h,5e3),setTimeout(function(){h.reset(),document.querySelector(".confetti-canvas").remove()},6e3)}}}}).catch(function(e){console.log(e)}).finally(function(){document.documentElement.classList.remove("mini-cart-updating"),document.dispatchEvent(s)})})}})};function woostifyAjaxAddToCartButton(){var e=document.querySelectorAll(".add_to_cart_button");e.length&&e.forEach(function(e){e.onclick=function(t){var o=e.getAttribute("data-product_id"),r=e.getAttribute("data-product_id"),n=new Request(woostify_woocommerce_general.ajax_url,{method:"POST",body:"action=get_curr_percent_shipping_threshold_product&ajax_nonce="+woostify_woocommerce_general.ajax_nonce+"&product_id="+o+"&qty="+r,credentials:"same-origin",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"})});fetch(n).then(function(e){if(200!==e.status)throw alert(woostify_woocommerce_general.ajax_error),console.log("Status Code: "+e.status),e;return e.json()}).then(function(e){if(e.success){var t=e.data;if(t.free_shipping_threshold.active){var o=t.number_of_decimals,r=t.free_shipping_threshold.goal_amount,n=t.free_shipping_threshold.total_percent,i=t.free_shipping_threshold.percent,c=t.product.price;if(woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect){var a=document.querySelectorAll(".free-shipping-progress-bar"),s=0;if(a.length&&(s=parseInt(a[0].getAttribute("data-progress"))),0==a.length&&(c>=r&&(i=(n=c/r*100)>=100?100:n.toFixed(o)),!a.length&&i>=100||s<i&&i>=100)){let l=document.createElement("canvas");l.className="confetti-canvas",document.querySelector("#shop-cart-sidebar").appendChild(l);let u=confetti.create(l,{resize:!0});confettiSnowEffect(u,5e3),setTimeout(function(){u.reset(),document.querySelector(".confetti-canvas").remove()},6e3)}}}}}).catch(function(e){console.log(e)})}})}function shippingThresholdCurrPercent(){var e=new Request(woostify_woocommerce_general.ajax_url,{method:"POST",body:"action=get_curr_percent_shipping_threshold&ajax_nonce="+woostify_woocommerce_general.ajax_nonce,credentials:"same-origin",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"})});return fetch(e).then(function(e){if(200!==e.status)throw alert(woostify_woocommerce_general.ajax_error),console.log("Status Code: "+e.status),e;return e.json()}).then(function(e){if(e.success){var t=e.data;if(t.free_shipping_threshold.active){var o=t.free_shipping_threshold.total_percent,r=t.free_shipping_threshold.percent;if(r<100&&shippingThreshold(),100==r&&100==o){var n=document.createElement("canvas");n.className="confetti-canvas",document.querySelector("#shop-cart-sidebar").appendChild(n);var i=confetti.create(n,{resize:!0});confettiSnowEffect(i,5e3),setTimeout(function(){i.reset(),document.querySelector(".confetti-canvas").remove()},6e3)}}}}).catch(function(e){console.log(e)}).finally(function(){}),!1}function shippingThreshold(){var e=document.querySelectorAll(".mini-cart-product-infor"),t=document.querySelectorAll(".free-shipping-progress-bar");e.forEach(function(e,o){var r=e.querySelector("input.qty"),n=r.getAttribute("data-cart_item_key")||"",i=r.value;if(r){var c=new Request(woostify_woocommerce_general.ajax_url,{method:"POST",body:"action=update_quantity_in_mini_cart&ajax_nonce="+woostify_woocommerce_general.ajax_nonce+"&key="+n+"&qty="+i,credentials:"same-origin",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"})});fetch(c).then(function(e){if(200!==e.status)throw alert(woostify_woocommerce_general.ajax_error),console.log("Status Code: "+e.status),e;return e.json()}).then(function(e){if(e.success){jQuery(document.body).trigger("updated_wc_div");var o=e.data;if(t.length&&o.hasOwnProperty("free_shipping_threshold")){let r=t[0].getAttribute("data-progress");for(var n=0,i=t.length;n<i;n++)t[n].setAttribute("data-progress",o.free_shipping_threshold.percent),t[n].querySelector(".progress-bar-message").innerHTML=o.free_shipping_threshold.message,t[n].querySelector(".progress-percent")&&(t[n].querySelector(".progress-percent").innerHTML=o.free_shipping_threshold.percent+"%"),t[n].querySelector(".progress-bar-status")&&(t[n].querySelector(".progress-bar-status").style.minWidth=o.free_shipping_threshold.percent+"%",t[n].querySelector(".progress-bar-status").style.transitionDuration=".6s",100<=parseInt(o.free_shipping_threshold.percent)?t[n].querySelector(".progress-bar-status").classList.add("success"):t[n].querySelector(".progress-bar-status").classList.remove("success"));if(woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect){var c=document.querySelectorAll(".free-shipping-progress-bar"),a=0;if(c.length&&(a=parseInt(c[0].getAttribute("data-progress"))),r<100&&o.free_shipping_threshold.percent>=100||r<a&&a>=100){var s=document.createElement("canvas");s.className="confetti-canvas",document.querySelector("#shop-cart-sidebar").appendChild(s);var l=confetti.create(s,{resize:!0});confettiSnowEffect(l,5e3),setTimeout(function(){l.reset(),document.querySelector(".confetti-canvas").remove()},6e3)}}}}}).catch(function(e){console.log(e)}).finally(function(){})}})}var updateHeaderCartPrice=function(){var e=document.querySelector(".cart-sidebar-content .woocommerce-mini-cart__total .woocommerce-Price-amount.amount"),t="",o=document.querySelectorAll(".woostify-header-total-price");if(o.length){switch(woostify_woocommerce_general.currency_pos){case"left":t='<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span>0</bdi></span>";break;case"right":t='<span class="woocommerce-Price-amount amount"><bdi>0<span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span></bdi></span>";break;case"left_space":t='<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span>&nbsp;0</bdi></span>";break;case"right_space":t='<span class="woocommerce-Price-amount amount"><bdi>0&nbsp;<span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span></bdi></span>"}for(var r=0,n=o.length;r<n;r++)e?o[r].innerHTML='<span class="woocommerce-Price-amount amount">'+e.innerHTML+"</span>":o[r].innerHTML=t}},woostifyProductsCarousel=function(e){var t=document.querySelectorAll(e);t.length&&t.forEach(function(e){if(!e.classList.contains("tns-slider")&&woostify_woocommerce_general.related_carousel_opts.hasOwnProperty("loop")){var t=woostify_woocommerce_general.related_carousel_opts;t.container=e,tns(t)}})},woostiftToggleShow=function(e){var t,o=(e.style.display="block",t=e.scrollHeight+"px",e.style.display="",t);e.classList.add("is-visible"),e.style.height=o,window.setTimeout(function(){e.style.height=""},350)},woostiftToggleHide=function(e){e.style.height=e.scrollHeight+"px",window.setTimeout(function(){e.style.height="0"},1),window.setTimeout(function(){e.classList.remove("is-visible")},350)},woostifyToggleSlide=function(e,t){if(e.classList.contains("is-visible")){woostiftToggleHide(e);return}woostiftToggleShow(e)},productDataTabsAccordion=function(){var e=document.querySelectorAll(".woocommerce-tabs.layout-accordion");e.length&&e.forEach(function(e){var t=e.querySelectorAll(".woostify-accordion-title");if(t.length){var o=e.querySelectorAll(".woostify-tab-wrapper");t.forEach(function(e,t){e.onclick=function(){o.forEach(function(e,o){o!==t&&(e.classList.contains("active")&&woostifyToggleSlide(e.querySelector(".woocommerce-Tabs-panel")),e.classList.remove("active"))}),e.parentNode.classList.contains("active")?e.parentNode.classList.remove("active"):e.parentNode.classList.add("active");var r=nextSiblings(e);woostifyToggleSlide(r[0])}})}})},stickyOrderReview=function(){new WSYSticky("form.woocommerce-checkout .woostify-col .col-right-inner",{stickyContainer:"form.woocommerce-checkout",marginTop:96})},checkoutOrder=function(){var e=document.querySelector(".before-checkout");if(e){var t=e.offsetHeight,o=t,r=document.querySelector(".showlogin");document.querySelector("#coupons_list")?document.arrive(".sc-coupon",function(){document.getElementById("coupons_list").style.display="block",setTimeout(function(){n(),jQuery(document).unbindArrive(".sc-coupon")},1e3)}):n(),document.body.addEventListener("click",function(e){if(e.target===r){var i=setInterval(function(){n()},50);setTimeout(function(){t==o&&clearInterval(i)},2e3)}})}function n(){setTimeout(function(){var t=e.offsetHeight;document.querySelector("#checkout-spacer").style.minHeight=t+"px",e.classList.add("ready")},200)}},woostifyGetUrl=function(e){return wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%",e)},woostifyShowNotice=function(e,t){t||(t=jQuery(".woocommerce-notices-wrapper:first")||jQuery(".cart-empty").closest(".woocommerce")||jQuery(".woocommerce-cart-form")),t.prepend(e)},ajaxCouponForm=function(){var e=document.querySelector("form.checkout_coupon");e&&e.addEventListener("submit",function(e){e.preventDefault();var t=document.getElementById("coupon_code"),o=t.value,r={security:woostify_woocommerce_general.apply_coupon_nonce,coupon_code:o};jQuery.ajax({type:"POST",url:woostifyGetUrl("apply_coupon"),data:r,dataType:"html",success:function(e){jQuery(".woocommerce-error, .woocommerce-message, .woocommerce-NoticeGroup .woocommerce-info, .woocommerce-notices-wrapper .woocommerce-info").remove(),woostifyShowNotice(e,jQuery(".woostify-woocommerce-NoticeGroup")),jQuery(document.body).trigger("applied_coupon",[o])},complete:function(){t.value="",jQuery(document.body).trigger("update_checkout")}})})},woostifyMoveNoticesInCheckoutPage=function(){var e=document.querySelectorAll(".woocommerce-notices-wrapper"),t=document.querySelectorAll(".woocommerce > .woocommerce-info"),o=document.querySelector(".woostify-woocommerce-NoticeGroup");if(o){if(e.length){var r=e[0],n=document.createElement("div");n.innerHTML=r.innerHTML,o.appendChild(n),r.remove()}t.length&&t.forEach(function(e){var t=e.cloneNode(!0),r=e.getAttribute("class");t.setAttribute("class",r),o.appendChild(t),e.remove()})}},woostifyCheckoutFormFieldAnimation=function(){var e=document.querySelectorAll("form.checkout .input-text, form.checkout_coupon .input-text"),t=document.querySelectorAll("form.checkout .form-row");e.length&&e.forEach(function(e){var t=e.closest(".form-row");t&&(""!==e.value&&t.classList.add("w-anim-wrap"),e.addEventListener("focus",function(e){e.target.closest(".form-row").classList.add("w-anim-wrap")}),e.addEventListener("blur",function(e){var t=e.target.closest(".form-row");""===e.target.value&&(t.classList.remove("w-anim-wrap"),t.classList.contains("validate-required")&&t.classList.add("woocommerce-invalid-required-field"))}))}),t.length&&t.forEach(function(e){var t=e.querySelector("label");if(null==t?e.classList.add("no-label"):t.classList.remove("screen-reader-text"),e.classList.contains("address-field")){var o=e.querySelectorAll("input"),r=e.querySelectorAll("span.select2");o.length&&o.length>0&&o.forEach(function(t){"hidden"===t.getAttribute("type")?e.classList.add("field-readonly"):e.classList.remove("field-readonly")}),r.length&&r.length>0&&(e.classList.add("w-anim-wrap"),e.classList.remove("field-readonly"))}})};document.addEventListener("DOMContentLoaded",function(){if(shoppingBag(),woostifyAjaxAddToCartButton(),woostifyQuantityMiniCart(),woostifyProductsCarousel(".related.products ul.products"),woostifyProductsCarousel(".upsells.products ul.products"),woostifyProductsCarousel(".woostify-product-recently-viewed-section ul.products"),productDataTabsAccordion(),window.addEventListener("load",function(){woostifyStockQuantityProgressBar()}),woostifyInfiniteScroll(!0),jQuery(document.body).on("adding_to_cart",function(){eventCartSidebarOpen(),shippingThresholdCurrPercent()}).on("added_to_cart",function(e,t,o,r){if(woostifyQuantityMiniCart(),setTimeout(()=>{shippingThresholdCurrPercent()},300),updateHeaderCartPrice(),eventCartSidebarClose(),closeAll(),r=void 0!==r&&r){if(r.removeClass("loading"),cartSidebarOpen(),t&&r.addClass("added"),t&&!wc_add_to_cart_params.is_cart&&0===r.parent().find(".added_to_cart").length){var n=get_svg_icon("shopping-cart-full");r.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+n+wc_add_to_cart_params.i18n_view_cart+"</a>")}jQuery(document.body).trigger("wc_cart_button_updated",[r])}}).on("removed_from_cart",function(){woostifyQuantityMiniCart(),updateHeaderCartPrice()}).on("updated_cart_totals",function(){"function"==typeof customQuantity&&customQuantity(),woostifyQuantityMiniCart(),updateHeaderCartPrice()}).on("wc_fragments_loaded wc_fragments_refreshed",function(){if(woostifyQuantityMiniCart(),updateHeaderCartPrice(),woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect){var e=document.querySelectorAll(".free-shipping-progress-bar"),t=0;e.length&&(t=parseInt(e[0].getAttribute("data-progress"))),progressBarConfetti(e,t)}}).on("wc_cart_emptied",function(){location.reload()}),jQuery(document.body).on("init_checkout updated_checkout payment_method_selected",function(){"function"==typeof customQuantity&&customQuantity()}),document.body.classList.contains("checkout-layout-3")){var e=!1;woostifyCheckoutFormFieldAnimation(),woostifyMoveNoticesInCheckoutPage(),jQuery(document.body).on("updated_checkout",function(e,t){setTimeout(function(){woostifyCheckoutFormFieldAnimation()},100)}).on("init_checkout updated_checkout payment_method_selected",function(e,t){jQuery(".woostify-woocommerce-NoticeGroup").html(""),jQuery("form.checkout").arrive("form.checkout_coupon",function(e){ajaxCouponForm(),jQuery("form.checkout").unbindArrive("form.checkout_coupon")}),jQuery("form.checkout").arrive(".ajax-coupon-form",function(e){jQuery(e).removeClass("loading"),jQuery(e).addClass("ready")}),jQuery("form.checkout").arrive(".woocommerce-NoticeGroup",function(){jQuery(".woostify-woocommerce-NoticeGroup").append(jQuery(".woocommerce-NoticeGroup").html()),jQuery(".woocommerce-NoticeGroup").remove()}),jQuery(document).arrive(".woocommerce > .woocommerce-message",function(e){var t=jQuery(e).clone();jQuery(".woostify-woocommerce-NoticeGroup").append(t),jQuery(e).remove()}),jQuery(document).arrive(".woocommerce > .woocommerce-info",function(e){var t=jQuery(e).clone();jQuery(".woostify-woocommerce-NoticeGroup").append(t),jQuery(e).remove()})}).on("applied_coupon",function(){jQuery("form.checkout").arrive("form.checkout_coupon",function(e){ajaxCouponForm(),jQuery("form.checkout").unbindArrive("form.checkout_coupon")})}),jQuery("form.checkout").arrive("form.checkout_coupon",function(e){ajaxCouponForm(),jQuery("form.checkout").unbindArrive("form.checkout_coupon")}),checkoutOrder(),stickyOrderReview(),window.onscroll=function(){e||(window.dispatchEvent(new Event("resize")),e=!0)}}"function"==typeof onElementorLoaded&&onElementorLoaded(function(){window.elementorFrontend.hooks.addAction("frontend/element_ready/global",function(){productDataTabsAccordion()})})});