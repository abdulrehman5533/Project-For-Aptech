"use strict";function woostifyAjaxSingleHandleError(button){"function"==typeof eventCartSidebarClose&&eventCartSidebarClose(),button&&button.classList&&button.classList.remove("loading"),document.documentElement.classList.remove("quick-view-open")}function woostifyAjaxSingleUpdateFragments(button){if(woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect){var progress_bar=document.querySelectorAll(".free-shipping-progress-bar"),percent=0;progress_bar.length&&(percent=parseInt(progress_bar[0].getAttribute("data-progress")))}fetch(wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),{method:"POST"}).then((function(response){return response.json()})).then((function(fr){void 0!==fr.fragments&&Object.entries(fr.fragments).forEach((function([key,value]){let newEl=document.querySelectorAll(key);newEl.length&&newEl.forEach((function(el){el.insertAdjacentHTML("afterend",value),el.remove()}))}))})).finally((function(){woostifyAjaxSingleHandleError(button),jQuery(document.body).trigger("added_to_cart"),progressBarConfetti(progress_bar,percent)}))}function woostifyAjaxSingleAddToCartButton(){var buttons=document.querySelectorAll(".single_add_to_cart_button");buttons.length&&buttons.forEach((function(ele){ele.onclick=function(e){var form=ele.closest("form.cart");if(!form||"POST"!==form.method.toUpperCase()||ele.classList.contains("disabled"))return;e.preventDefault();let input=form.querySelector("input.qty");null==input&&(input=form.querySelector('input[name="quantity"]'));let inputValue=!!input&&Number(input.value.trim());if(!inputValue||isNaN(inputValue)||inputValue<=0)alert(woostify_woocommerce_general.qty_warning);else{var product_id=ele.value;try{var cart_content=document.querySelector("div.cart-sidebar-content"),cart_item_count=0;cart_content.querySelectorAll(".woocommerce-mini-cart-item").forEach((function(item,index){let remove_button,cart_product_id;if((item.querySelector("a.remove_from_cart_button").getAttribute("data-product_id")||0)==product_id){let cart_qty_input=item.querySelector("input.qty");null==cart_qty_input&&(cart_qty_input=item.querySelector('input[name="quantity"]')),cart_item_count=!!cart_qty_input&&Number(cart_qty_input.value.trim())}}));var product_max_quantity=parseInt(input.getAttribute("max")),total_count;if(product_max_quantity&&(cart_item_count>=product_max_quantity||cart_item_count+inputValue>product_max_quantity))return void alert(woostify_woocommerce_general.qty_max_warning)}catch(err){console.warn(err)}var form_data=new FormData(form);form_data.append("add-to-cart",form.querySelector("[name=add-to-cart]").value),form_data.append("ajax_nonce",woostify_woocommerce_general.ajax_nonce),ele.classList.add("loading"),"function"==typeof eventCartSidebarOpen&&eventCartSidebarOpen(),"function"==typeof closeAll&&closeAll(),jQuery(document.body).on("added_to_cart",(function(){"function"==typeof cartSidebarOpen&&cartSidebarOpen()})),document.documentElement.classList.add("mini-cart-updating"),fetch(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","woostify_single_add_to_cart"),{method:"POST",body:form_data}).then((function(res){if(console.log(res),res){var res_json=res.json();if(res_json.error&&res_json.product_url)window.location=res_json.product_url;else if(res_json.error&&res_json.product_url)window.location=res_json.product_url;else{if("yes"!==wc_add_to_cart_params.cart_redirect_after_add)return res_json;window.location=wc_add_to_cart_params.cart_url}}})).then((function(result){console.log(result),document.documentElement.classList.remove("mini-cart-updating"),woostifyAjaxSingleUpdateFragments(ele),ele.getAttribute("data-checkout_url")&&(window.location=ele.getAttribute("data-checkout_url"))})).catch((function(){document.documentElement.classList.remove("mini-cart-updating"),woostifyAjaxSingleHandleError(ele)}))}}}))}function fixElementProErrorAddtoCart(){"undefined"!=typeof elementorFrontend&&"3.9.2"==(elementorFrontend.config.version||0)&&elementorFrontend.elements.$body.off("added_to_cart.elementor-woocommerce-product-add-to-cart")}document.addEventListener("DOMContentLoaded",(function(){woostifyAjaxSingleAddToCartButton(),setTimeout((function(){fixElementProErrorAddtoCart()}),200)}));