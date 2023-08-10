class Pie extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML='<div class="f7-motion f7-motion-pie"><div class="f7-el-page"><div class="f7-el-pie"><div class="f7-el-pie-body"><svg width="230" height="231" viewBox="0 0 230 231" fill="none" class="f7-el-pie-chart"><path d="M114.977 1.1C133.026 1.09632 150.82 5.36335 166.904 13.5524C182.989 21.7414 196.907 33.62 207.523 48.2174C218.138 62.8149 225.149 79.7169 227.982 97.5423C230.815 115.368 229.39 133.61 223.824 150.78C218.258 167.949 208.708 183.558 195.956 196.33C183.203 209.103 167.609 218.677 150.448 224.269C133.287 229.862 115.047 231.315 97.217 228.509C79.3873 225.704 62.4744 218.719 47.8606 208.126L115 115.5L114.977 1.1Z" stroke-linejoin="round"/><path d="M47.7681 208.059C33.1688 197.455 21.2849 183.547 13.0873 167.473C4.88972 151.398 0.610812 133.612 0.600118 115.568C0.589424 97.5235 4.84724 79.7326 13.0258 63.6483C21.2043 47.5639 33.0717 33.6423 47.6584 23.0205L115 115.5L47.7681 208.059Z" stroke-linejoin="round"/><path d="M47.751 22.9532C67.2532 8.78186 90.7339 1.13359 114.841 1.10011L115 115.5L47.751 22.9532Z" stroke-linejoin="round"/></svg></div></div></div></div></div>';const r=document.createElement("style");r.textContent="*{box-sizing:border-box;font-family:-apple-system,system-ui,Helvetica Neue,Helvetica,Arial,sans-serif}:host{--color-primary-shade:#ff927b;--color-primary-tint:#ffd6cd;--color-primary-rgb:255,180,164;--color-primary:#ffb4a4;--color-on-primary:#640d00;--color-primary-container:#8d1600;--color-on-primary-container:#ffdad3;--color-secondary:#e7bdb4;--color-on-secondary:#442a24;--color-secondary-container:#5d3f39;--color-on-secondary-container:#ffdad3;--color-surface:#201a19;--color-on-surface:#ede0dd;--color-surface-variant:#534340;--color-on-surface-variant:#d8c2bd;--color-outline:#a08c88;--color-outline-variant:#534340;--color-inverse-surface:#ede0dd;--color-inverse-on-surface:#362f2d;--color-inverse-primary:#b82000;--color-surface-1:#2b2220;--color-surface-2:#322624;--color-surface-3:#392b28;--color-surface-4:#3b2c2a;--color-surface-5:#3f302c;--color-surface-variant-rgb:83,67,64;--color-on-surface-variant-rgb:216,194,189;--color-surface-1-rgb:43,34,32;--color-surface-2-rgb:50,38,36;--color-surface-3-rgb:57,43,40;--color-surface-4-rgb:59,44,42;--color-surface-5-rgb:63,48,44}.f7-motion{padding:0 24px;height:240px;position:relative;overflow:hidden;perspective:1200px;transform-style:preserve-3d;border:1px solid var(--color-outline-variant)}.f7-motion *{animation-timing-function:cubic-bezier(0,1,0.2,1)!important;transform-style:preserve-3d}.f7-el-page{border-radius:16px;background:var(--color-surface);width:320px;height:560px;position:relative;border:1px solid transparent}.f7-el-bar-icon{width:24px;height:24px;background:var(--color-on-surface);border-radius:4px}.f7-el-navbar{height:64px;background:var(--color-surface-2);border-radius:16px 16px 0 0;display:flex;align-items:center;justify-content:space-between;padding:0 16px;position:relative}.f7-el-navbar-title{position:absolute;left:50%;margin-left:-64px;top:50%;margin-top:-8px;height:16px;background:var(--color-on-surface);width:128px}.f7-el-navbar-left,.f7-el-navbar-right{position:relative}.f7-el-page-text{margin:16px;transform-origin:left}.f7-el-page-text>div::after,.f7-el-page-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-page-text>div::before{width:100%}.f7-el-page-text>div::after{margin-top:8px;width:80%}.f7-el-page-text>div+div{margin-top:8px}.f7-el-view{position:relative;list-style:none;padding:0;margin:32px 16px;border-radius:16px}.f7-el-view-item+.f7-el-view-item{margin-top:4px}.f7-el-view-item{background:var(--color-surface-1);min-height:48px;padding-left:16px;display:flex;align-items:center;position:relative}.f7-el-view-item:first-child{border-radius:16px 16px 0 0}.f7-el-view-item:last-child{border-radius:0 0 16px 16px}.f7-el-view-item-divider{background:var(--color-surface-1);height:4px;position:absolute;top:100%;width:100%;left:0;z-index:1;transform-origin:right}.f7-el-view-item-divider::after{content:'';height:1px;margin-left:16px;display:block;background:var(--color-outline)}.f7-el-view-item-media{width:24px;height:24px;min-width:24px;border-radius:24px;background:var(--color-on-surface);margin-right:16px}.f7-el-view-item-content{width:100%;min-width:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-right:16px;padding-top:8px;padding-bottom:8px}.f7-el-view-item-title{height:16px;background:var(--color-on-surface);width:100%;transform-origin:left}.f7-el-view-item-arrow{width:12px;height:12px;position:absolute;right:16px;top:18px;border-top:2px solid var(--color-on-surface-variant);border-right:2px solid var(--color-on-surface-variant);transform:rotate(45deg)}.f7-el-view-item-body{width:50%;min-width:0;display:flex;flex-direction:column;padding-top:5px}.f7-el-view-item-subtitle{height:12px;background:var(--color-on-surface);width:100%;transform-origin:top}.f7-el-view-item-text{margin-top:5px;transform-origin:left}.f7-el-view-item-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-view-item-text>div::before{width:200%}.f7-el-view-item-text>div+div{margin-top:5px}.f7-el-view-item-badge{padding-right:8px}.f7-el-view-item-badge .f7-el-badge{width:18px;height:18px;border-radius:18px}.f7-motion{border:none}:host{color:var(--color-on-surface);width:370px;display:block}\n.f7-el-pie{position:absolute;left:12px;right:12px;padding:0;border-radius:16px}.f7-el-pie-body{background:var(--color-surface-1);width:90%;height:180px;margin:48px auto;border-radius:16px;display:flex;justify-content:center;align-items:center}.f7-el-pie-chart{position:relative;width:150px;transform:rotate(110deg)}.f7-el-pie-chart path{stroke:var(--color-surface-1);stroke-width:8px;transform-origin:center}.f7-el-pie-chart path:first-of-type{fill:var(--color-inverse-primary)}.f7-el-pie-chart path:nth-of-type(2){fill:var(--color-on-primary-container)}.f7-el-pie-chart path:nth-of-type(3){fill:var(--color-primary-shade)}.f7-motion-pie .f7-el-page{top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;justify-content:center}.f7-motion-pie .f7-el-chart path,.f7-motion-pie .f7-el-pie-body{opacity:0}.f7-motion-pie .f7-el-chart path{transform:scale(0)}.f7-el-pie-body{animation:f7-motion-pie-body 10s infinite}.f7-el-pie-chart path{animation:f7-motion-pie-chart 10s infinite}.f7-el-pie-chart path:first-of-type{animation-delay:.3s}.f7-el-pie-chart path:nth-of-type(2){animation-delay:.6s}.f7-el-pie-chart path:nth-of-type(3){animation-delay:.9s}@keyframes f7-motion-pie-body{0%{opacity:0;transform:translate3d(0,0,200px)}10%{opacity:0;transform:translate3d(0,0,0)}15%{opacity:1;transform:translate3d(0,0,0)}90%{opacity:1;transform:translate3d(0,0,0)}100%{opacity:0;transform:translate3d(0,0,0)}}@keyframes f7-motion-pie-chart{0%{opacity:0;transform:scale(0)}15%{opacity:0;transform:scale(0)}20%{opacity:1;transform:scale(1)}90%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0)}}",e.appendChild(r)}}customElements.define("f7-motion-pie",Pie);