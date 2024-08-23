"use strict";if(void 0===woostifyEvent)var woostifyEvent={};var productMetaSku=document.querySelector(".elementor-widget-woostify-product-meta .sku");function productVariation(selector,form){var galleries=document.querySelectorAll(selector);if(galleries.length){var gallery,currProductID=galleries[0].getAttribute("data-pid"),variationsForm=form||'form.variations_form[data-product_id="'+currProductID+'"]';jQuery(document.body).on("found_variation",variationsForm,(function(event,variation){var galleries=document.querySelectorAll(selector);if(galleries.length&&document.querySelector(variationsForm)){var imgSrc=variation.image.src,fullSrc=variation.image.full_src,inStock=variation.is_in_stock,imgSrcheight=variation.image.src_h;imgSrc&&fullSrc&&galleries.forEach((function(gallery,index){var _thumbSlider=gallery.querySelector(woostify_product_images_slider_options.thumb.container);_thumbSlider&&_thumbSlider.children.length&&_thumbSlider.children[0].click();var imageWrapper=gallery.querySelector(".image-item.is-selected");if(null!=imageWrapper){var image=!!imageWrapper&&imageWrapper.querySelector("img"),imageSrc=image?image.getAttribute("src"):"",imageSrcset=image?image.getAttribute("srcset"):"",photoSwipe=imageWrapper.querySelector("a"),photoSwipeSrc=photoSwipe?photoSwipe.getAttribute("href"):"",thumb=gallery.querySelector(".thumbnail-item"),thumbImg=!!thumb&&thumb.querySelector("img"),thumbSrc=thumbImg?thumbImg.getAttribute("src"):"",buttons;variation.max_qty&&(woostify_woocommerce_general.qty_max_warning=woostify_woocommerce_general.qty_max_warning_variation.replace("%s",variation.max_qty)),document.querySelectorAll(".single_add_to_cart_button").forEach(elm=>elm.value=variation.variation_id);var productMetaSkus=document.querySelectorAll(".elementor-widget-woostify-product-meta .sku"),wpmGtinCodeWrappers=document.querySelectorAll(".wpm_gtin_code_wrapper .wpm_pgw_code");if(productMetaSkus&&productMetaSkus.forEach((function(productMetaSku){productMetaSku.innerHTML=variation.sku})),wpmGtinCodeWrappers&&(wpmGtinCodeWrappers.forEach((function(wpmGtinCodeWrapper){wpmGtinCodeWrapper.innerHTML=variation.sku})),variation.wpm_pgw_code&&(wpmGtinCodeWrapper.innerHTML=variation.wpm_pgw_code)),photoSwipe&&photoSwipe.setAttribute("href",fullSrc),image&&imgSrc){imageWrapper.classList.add("image-loading");var flickity_viewport=imageWrapper.closest(".flickity-viewport"),img=new Image;img.onload=function(){imageWrapper.classList.remove("image-loading"),setTimeout((function(){flickity_viewport.style.height=image.height+"px"}),50)},img.src=imgSrc,image.setAttribute("src",imgSrc),imageSrcset&&image.setAttribute("srcset",variation.image.srcset)}thumbImg&&thumbImg.setAttribute("src",variation.image.thumb_src),"function"==typeof easyZoomHandle&&easyZoomHandle();var jsSelector=gallery,productImages=!!gallery&&gallery.querySelector(".product-images"),outStockLabel=!!productImages&&productImages.querySelector(".woostify-out-of-stock-label"),onSaleLabel=!!productImages&&productImages.querySelector(".woostify-tag-on-sale");if(inStock)variation.max_qty&&"function"==typeof woostifyStockQuantityProgressBar&&setTimeout((function(){woostifyStockQuantityProgressBar()}),200),outStockLabel&&outStockLabel.remove(),onSaleLabel&&woostify_woocommerce_variable_product_data.sale_tag_percent&&variation.display_price!=variation.display_regular_price&&(onSaleLabel.innerHTML="-"+Math.round((variation.display_regular_price-variation.display_price)/variation.display_regular_price*100)+"%");else if("undefined"!=typeof woostify_woocommerce_variable_product_data){var outStockLabelHtml='<span class="woostify-out-of-stock-label position-'+woostify_woocommerce_variable_product_data.out_of_stock_display+" "+woostify_woocommerce_variable_product_data.out_of_stock_square+'">'+woostify_woocommerce_variable_product_data.out_of_stock_text+"</span>";outStockLabel||productImages.insertAdjacentHTML("beforeend",outStockLabelHtml)}}}))}})),jQuery(".reset_variations").on("click",(function(e){if(!woostifyEvent.productVariationReady){e.preventDefault(),woostify_woocommerce_general.qty_max_warning=woostify_woocommerce_general.qty_max_warning_default;var productMetaSkus=document.querySelectorAll(".elementor-widget-woostify-product-meta .sku"),wpmGtinCodeWrappers=document.querySelector(".wpm_gtin_code_wrapper .wpm_pgw_code");if(productMetaSkus&&productMetaSkus.forEach((function(productMetaSku){productMetaSku.innerHTML=woostifyEvent.productMetaSkuDefault})),wpmGtinCodeWrappers&&wpmGtinCodeWrappers.forEach((function(wpmGtinCodeWrapper){wpmGtinCodeWrapper.innerHTML=woostifyEvent.productMetaSkuDefault})),image){imageWrapper.classList.add("image-loading");var resetImg=new Image;resetImg.onload=function(){imageWrapper.classList.remove("image-loading")},resetImg.src=imageSrc,image.setAttribute("src",imageSrc),imageSrcset&&image.setAttribute("srcset",imageSrcset)}thumbSrc&&thumbImg.setAttribute("src",thumbSrc),photoSwipeSrc&&photoSwipe.setAttribute("href",photoSwipeSrc),"function"==typeof easyZoomHandle&&easyZoomHandle();var swatch_cont=document.querySelector(".woostify-variation-swatches");swatch_cont&&swatch_cont.querySelectorAll(".swatch").forEach((function(swatch,index){swatch.classList.remove("selected")}))}})),woostifyEvent.productVariationReady=1}}woostifyEvent.productMetaSkuDefault=productMetaSku?productMetaSku.innerHTML:"",document.addEventListener("DOMContentLoaded",(function(){woostifyEvent.productVariationReady||(productVariation(".product-gallery"),"function"==typeof onElementorLoaded&&onElementorLoaded((function(){woostifyEvent.productVariationReady||window.elementorFrontend.hooks.addAction("frontend/element_ready/global",(function(){productVariation(".product-gallery")}))})))}));