@@
-const ASSET_BASE = window.ASSET_BASE || (location.pathname.startsWith('/smartzen-site') ? '/smartzen-site/' : './');
+// Use getAsset() for robust asset path resolution across GitHub Pages subpaths or root
+const ASSET_BASE = window.ASSET_BASE || './';
+
+function getAssetPath(p) {
+  try { return window.getAsset ? window.getAsset(p) : (ASSET_BASE + p); } catch(e) { return ASSET_BASE + p; }
+}
@@
-          <img src="${ASSET_BASE + product.image}" alt="${product.name}" loading="lazy">
+          <img src="${getAssetPath(product.image)}" alt="${product.name}" loading="lazy">
@@
-    document.getElementById('qvProductImg').src = ASSET_BASE + product.image;
+    document.getElementById('qvProductImg').src = getAssetPath(product.image);
@@
-    document.getElementById('qvProductImg').src = ASSET_BASE + product.image;
+    document.getElementById('qvProductImg').src = getAssetPath(product.image);
