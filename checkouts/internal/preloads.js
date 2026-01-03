
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DsOoIYnp.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.BVJZnGai.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-pt-BR-legacy.BRL-4Bm-.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.wQmmMVOq.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.BUQlgPXd.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.Dw3YZUQS.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.lRSEa3co.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.DwOQyrmV.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.BOoW52cJ.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup-legacy.Q1KLpWIR.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.C0WOUxd1.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.-Z2Dy0Yk.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.C5XPTFXD.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager-legacy.DFqzPzsq.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod-legacy.yYE4Yx9W.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.Cw2ctRvW.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.Bv4l_KW4.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.Bcx8n4I2.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.0MpnICNl.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.srtRjIjY.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.quSSoBPu.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.GA16-_zr.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  