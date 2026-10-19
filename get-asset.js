/* helper for resolving assets across different GitHub Pages path bases */
(function(){
  // Detect ASSET_BASE set by server or manually in index.html
  if (!window.ASSET_BASE) {
    // if path includes known repo pages subpath, use it; otherwise use root-relative ./
    const path = location.pathname;
    if (path.startsWith('/smartzen-site') || path.startsWith('/Smartzen')) {
      window.ASSET_BASE = path.split('/').slice(0,2).join('/') + '/';
    } else if (path.startsWith('/tranganht18-lab.github.io/')) {
      window.ASSET_BASE = '/smartzen-site/';
    } else {
      window.ASSET_BASE = path.includes('/') ? './' : './';
    }
  }

  window.getAsset = function(p){
    if (!p) return p;
    // if p is already absolute or data URL, return as-is
    if (p.startsWith('http://') || p.startsWith('https://') || p.startsWith('data:') || p.startsWith('/')) return p;
    return (window.ASSET_BASE || './') + p;
  };
})();