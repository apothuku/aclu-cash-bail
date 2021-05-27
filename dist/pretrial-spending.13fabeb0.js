!function(){const e=window.tippy;function t(e){return e instanceof Element||e instanceof HTMLDocument||e&&[1,3].includes(e.nodeType)}function a(e){return!!(e&&e.constructor&&e.call&&e.apply)}function s(e,s,r){const n=document.createElement("table");n.className="tooltip-table";const[l,i]=e?function(e,s){const r=document.createElement("thead"),n=document.createElement("tbody");return e.forEach((e=>{const l=document.createElement("tr"),i=document.createElement(e.isColumnHeader?"th":"td");i.className=e.isColumnHeader?"col-header":"row-header";const o=a(e.rowHeader)?e.rowHeader(s):e.rowHeader,d=t(o)?o:document.createTextNode(o||"");i.appendChild(d),l.appendChild(i),s.forEach(((s,r)=>{const n=document.createElement(e.isColumnHeader?"th":"td");n.className=e.isColumnHeader?"col-header":"";const i=s[e.dataKey],o=e.render?a(e.render)?e.render(i,s,r):e.render:i,d=t(o)?o:document.createTextNode(o);n.appendChild(d),l.appendChild(n)})),e.isColumnHeader?r.appendChild(l):n.appendChild(l)})),[r,n]}(e,r):function(e,s){const r=document.createElement("thead"),n=document.createElement("tbody"),l=document.createElement("tr");return e.forEach((({columnHeader:e})=>{const r=document.createElement("th");r.className="col-header";const n=a(e)?e(s):e,i=t(n)?n:document.createTextNode(n||"");r.appendChild(i),l.appendChild(r)})),r.appendChild(l),s.forEach(((s,r)=>{const l=document.createElement("tr");e.forEach((e=>{const n=document.createElement("td");e.isRowHeader&&(n.className="row-header");const i=s[e.dataKey],o=e.render?a(e.render)?e.render(i,s,r):e.render:i,d=t(o)?o:document.createTextNode(o);n.appendChild(d),l.appendChild(n)})),n.appendChild(l)})),[r,n]}(s,r);return n.appendChild(l),n.appendChild(i),n}function r(e,a,r,n){const l=document.createElement("div");if(l.className="tooltip-content",e){const a=document.createElement("div"),s=t(e)?e:document.createElement("h4").appendChild(document.createTextNode(e));a.className="tooltip-title",a.appendChild(s),l.appendChild(a)}if((a||r)&&n){const e=s(a,r,n);l.appendChild(e)}return()=>l.cloneNode(!0)}e.setDefaultProps({arrow:!1,placement:"right",delay:0,duration:0,flip:!1,popperOptions:{modifiers:{preventOverflow:{enabled:!0,padding:4}}}});const n="VIEW ALL",l="VIEW LESS",i='<svg class="caret" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 0.999999L4 4L1 1" stroke="white" stroke-miterlimit="10"/>\n</svg>';class o{constructor(e){this.className=e}render(){this.element=document.createElement("td"),this.setElementClass(this.className)}getClassName(){return this.className}setElementClass(e){this.element.className=e}addElementClass(e){this.element.classList.add(e)}}class d extends o{constructor(e,t){super(t),this.content=e,this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class c extends o{constructor(e,t){super(t),this.content=document.createElement("a"),this.content.className="retention-fee-link",this.content.href=e.href,this.content.target="_blank",this.content.innerHTML=`${e.text} <svg class="link-arrow" width="11" height="11" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>\n</svg>`,this.render()}render(){super.render(),this.element.appendChild(this.content)}}class h extends o{constructor(e,t){super(t),this.content=document.createElement("span"),this.content.innerText=e.text;const a=document.createElement("sup");a.innerText=e.number,this.content.appendChild(a),this.render()}render(){super.render(),this.element.appendChild(this.content)}}class u extends o{constructor(e,t,a){super(t);const s="percent"===a.unit;this.content=s?e.toFixed(1):e.toLocaleString(),this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class m extends o{constructor(e,t,a){super(t),this.content=e.values[0],this.average=a.averages[0].value,this.range=a,this.render()}render(){super.render();const e=document.createElement("div");e.className="viz-bar",e.style.width=this.content/this.range.end*100+"%";const t=document.createElement("div"),a=this.content-this.average;a>0&&(t.textContent=`+${a.toFixed(1)}`),a<0&&(t.textContent=`${a.toFixed(1)}`),t.className="bar-label",e.appendChild(t),this.element.appendChild(e);const s=document.createElement("div");s.className="bar-average-line green",s.style.left=this.average/this.range.end*100+"%",this.element.appendChild(s)}}class p extends o{constructor(t,a){super(a),this.values=t.values.filter((e=>0!==e.value)),this.tooltipValues=[this.values.reduce(((e,{value:t,className:a})=>(e[a]=t,e)),{})];const s=(e,t)=>{const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center";const s=document.createElement("div");s.classList.add("color-box"),s.classList.add(t),s.style.marginRight="10px";const r=document.createElement("div");return r.innerText=e,a.appendChild(s),a.appendChild(r),a},n=e=>`${e.toFixed(1)}%`;this.renderTooltip=function(t){const{rows:a,columns:s,...n}=t;return function(t,l,i,o={}){const d={...n,...o,content:o.content||n.content||r(i,a,s,l)};return e(t,d)}}({rows:this.values.map((e=>({rowHeader:s(e.name,e.className),dataKey:e.className,render:n}))),placement:"top",followCursor:!0}),this.tooltipName=t.name,this.render()}render(){super.render();const e=document.createElement("div");e.className="dist-bar-container",this.values.forEach((t=>{const a=document.createElement("div");a.className=`viz-bar ${t.className}`,e.appendChild(a)}));const t=this.values.map((e=>`${e.value}%`));e.style.gridTemplateColumns=t.join(" "),this.renderTooltip(e,this.tooltipValues,this.tooltipName),this.element.appendChild(e)}}class v extends o{constructor(e,t,a){super(t),this.content=e.values,this.averages=a.averages,this.range=a,this.vizColors=["green","purple"],this.render()}render(){super.render();const e=document.createElement("div");e.className="viz-number-line",this.element.appendChild(e),this.content.forEach(((e,t)=>{const a=document.createElement("div");a.className=`viz-number-line-point ${this.vizColors[t]}`,a.style.left=`calc(${(e-this.range.start)/this.range.end*100}% - 2px)`,this.element.appendChild(a)})),this.averages.forEach(((e,t)=>{const a=document.createElement("div");a.className=`bar-average-line ${this.vizColors[t]}`,a.style.left=(e.value-this.range.start)/this.range.end*100+"%",this.element.appendChild(a)}))}}class M extends o{constructor(e,t,a,s,r,n,l){super(t),this.content=e,this.sortCol=a,this.sortDir=s,this.initSort=r,this.table=n,this.id=l,this.render(),this.sortCol&&this.element.addEventListener("click",(()=>{this.table.sortCol!==this.id&&(this.sortDir=-1);const e=this.getClassName();this.table.setSortColumn(this.id),this.table.setSortDirection(this.sortDir),this.table.sort(!1),this.setElementClass(e,!0),this.sortDir*=-1})),this.initSort&&(this.sortDir*=-1)}render(){const e=document.createElement("th");if(e.className=this.className,this.element=e,this.sortCol){const t=this.getClassName();this.setElementClass(t,this.initSort);const a=document.createElement("div");a.className="th-wrapper";const s=document.createElement("div");s.appendChild(document.createTextNode(this.content)),0===this.id?(a.appendChild(s),a.innerHTML=a.innerHTML+i):(a.innerHTML=i,a.appendChild(s)),e.appendChild(a)}else e.appendChild(document.createTextNode(this.content))}getClassName(){const e=this.sortDir>0?"sort-asc":this.sortDir<0?"sort-desc":"";return`${this.className} ${e}`}setElementClass(e,t){const a=t?"sorted":"";super.setElementClass(`${e} ${a}`)}}class $ extends M{constructor(e,t,a,s,r,n,l){super(e,t,a,s,r,n,l)}render(){const e=this.content.start,t=this.content.end,a=this.content.unit,s=document.createElement("th");s.className=this.className;const r="dollars"===a?`$${Math.round(e/1e3)}K`:e,n="dollars"===a?`$${Math.round(t/1e3)}K`:t;[this.createTickElement(r,"start-num"),this.createTickElement(n,"end-num")].forEach((e=>{s.appendChild(e)})),this.element=s}createTickElement(e,t,a){const s=document.createElement("div");s.className=t;const r=document.createElement("div");r.innerHTML=e,t.includes("average")&&(r.className="average-text"),s.appendChild(r),"start-num"===t&&1===e.toString().length?s.style.paddingLeft="10px":"end-num"===t&&(s.style.paddingRight=13-3*e.toString().length+"px",s.style.marginRight="-13px");const n=document.createElement("div");return n.className=""+(t.includes("average")?"average-line":"viz-line"),a&&(n.className+=` ${a}`),s.appendChild(n),s}}class b{constructor(e){this.cells=e,this.render()}render(){const e=document.createElement("tr");this.cells.forEach((t=>{e.appendChild(t.element)})),this.element=e}clearedSortedCells(){this.cells.forEach((e=>{const t=e.getClassName();e.setElementClass(t,!1)}))}}class C{constructor(e,t,a,s=""){this.cells=e,this.outlier=t,this.isHidden=a,this.className=s}setIsHidden(e){this.isHidden=e}render(e){const t=document.createElement("tr");return this.element=t,this.isHidden?[]:(t.className=this.className,this.cells.forEach(((a,s)=>{a.setElementClass(a.className),s===e&&a.addElementClass("sorted"),t.appendChild(a.element)})),[this.element])}}class y extends C{constructor(e,t,a,s,r){super(e,t,s),this.isCollapsed=r,this.collapseRows=a}render(e){const t=super.render(e);if(this.element.className="collapsible "+(this.isCollapsed?"collapsed":"expanded"),t.length>0){const e=t[0].firstChild;e.innerHTML=i,this.isCollapsed?e.classList.add("caret-rotated"):e.classList.remove("caret-rotated")}const a=this.collapseRows.flatMap((t=>t.render(e)));return[...t,...a]}}class g{constructor(e,t,a,s,r=[],n=!0){this.classNames=t.map((e=>e.class)),this.headers=t.map((e=>e.header)),this.data=e,this.container=s,this.element=s.getElementsByTagName("table")[0],this.showOutliers=!0,this.summaryRowData=r,this.validate(),this.searchCols=t.map((e=>e.searchable)),this.searchTerms=[],this.isTruncated=!0,this.sortCols=t.map((e=>e.sortable)),this.sortCol=a.col,this.sortDir=a.dir,this.isVisible=n,this.header=this.getHeaderRow(),this.init(),this.sort(!0)}validate(){if(this.classNames.length!==this.headers.length)throw new Error("Number of class names does not match number of headers");if(this.data.some((e=>e.data.length!=this.headers.length)))throw new Error(`${this.headers.length} columns of data required`)}init(){this.element.getElementsByTagName("thead")[0].appendChild(this.header.element);const e=this.container.getElementsByClassName("menu")[0];let t=this.data.flatMap((e=>{const t=e.data.flatMap(((e,t)=>this.searchCols[t]?[e]:[])),a=e.collapseData?e.collapseData.map((e=>e.data[1])):[];return t.concat(a)}));t.sort(),e.textContent="",t.forEach((t=>{const a=document.createElement("div");a.className="item",a.innerText=t,e.appendChild(a)}));this.container.getElementsByTagName("input")[0].addEventListener("change",(e=>{const t=e.target.value;this.searchTerms=t.split(";").filter((e=>""!==e)),this.rows=this.getRows(),this.render()}));const a=this.container.getElementsByClassName("view-all-btn")[0];a.innerText=this.isTruncated?n:l,a.addEventListener("click",(()=>{this.isTruncated=!this.isTruncated,a.innerText=this.isTruncated?n:l,this.rows=this.getRows(),this.render()}));const s=this.container.getElementsByClassName("outliers-btn");if(s.length>0){s[0].addEventListener("click",(e=>{this.toggleOutliers()?e.target.classList.add("showing"):e.target.classList.remove("showing")}))}}getHeaderRow(){const e=this.headers.map(((e,t)=>{const a="text"in e?M:$;return new a(a===M?e.text:e,this.classNames[t],this.sortCols[t],this.sortCols[t]?this.sortDir:0,t===this.sortCol,this,t)}));return new b(e)}getCells(e,t){return e.map(((e,a)=>{let s=d;return"number"==typeof e?s=u:"object"==typeof e&&("bar"===e.type?s=m:"line"===e.type?s=v:"dist"===e.type?s=p:"link"===e.type?s=c:"footnote"===e.type&&(s=h)),"string"==typeof e&&e.length>0&&a<=1&&t&&(e+="*"),new s(e,this.classNames[a],this.headers[a])}))}getRows(){let e=0;const t=this.data.map((t=>{const a=this.getCells(t.data,t.outlier),s=this.searchTerms.some((e=>t.data.some(((t,a)=>this.searchCols[a]&&t.toLowerCase()===e.toLowerCase())))),r=this.isTruncated&&e>=10,n=t.outlier&&!this.showOutliers,l=s||!r&&!n&&0===this.searchTerms.length;if(void 0!==t.collapseData){const s=t.collapseData.map((e=>{const a=this.searchTerms.some((t=>e.data[1].toLowerCase()===t.toLowerCase())),s=e.outlier&&!this.showOutliers,r=a||!t.isCollapsed&&!s;return new C(this.getCells(e.data,e.outlier),e.outlier,!r)})),r=s.some((e=>!e.isHidden)),n=l||r;return n&&(e+=s.reduce(((e,t)=>t.isHidden?e:e+1),1)),new y(a,t.outlier,s,!n,!r&&t.isCollapsed)}return l&&e++,new C(a,t.outlier,!l)}));if(this.summaryRowData.length>0){const e=this.getCells(this.summaryRowData);t.unshift(new C(e,!1,!1,"summary-row"))}return t}setSortColumn(e){this.sortCol=e}setSortDirection(e){this.sortDir=e}getSortable(e){if("object"==typeof e||/\d/.test(e)){const t="object"==typeof e?e.value:e;return Number(t.replace?t.replace(/[^\d.-]/g,""):t)}return e}sort(e){e||this.header.clearedSortedCells(),this.data.sort(((e,t)=>{const a=e.data[this.sortCol],s=t.data[this.sortCol],r=this.getSortable(a),n=this.getSortable(s);return r<n?-1*this.sortDir:r>n?this.sortDir:0})),this.rows=this.getRows(),this.render()}toggleOutliers(){return this.showOutliers=!this.showOutliers,this.rows=this.getRows(),this.render(),this.showOutliers}hide(){this.isVisible=!1,this.render()}show(){this.isVisible=!0,this.render()}render(){if(this.isVisible){this.container.classList.remove("hidden");const e=this.element.getElementsByTagName("tbody")[0];e.textContent="",this.rows.forEach(((t,a)=>{t.render(this.sortCol).forEach((t=>e.appendChild(t))),t instanceof y&&t.element.addEventListener("click",(()=>{this.data[a].isCollapsed=!t.isCollapsed,this.rows=this.getRows(),this.render()}))}))}else this.container.classList.add("hidden")}}const N=[{data:["Adams","$3.6M","$11.1M",32.43914185,{type:"bar",values:[32.43914185]}],outlier:!1},{data:["Allegheny","$57.6M","$86.0M",67.01743239,{type:"bar",values:[67.01743239]}],outlier:!1},{data:["Armstrong","$2.9M","$4.6M",63.23898622,{type:"bar",values:[63.23898622]}],outlier:!1},{data:["Beaver","$4.7M","$9.3M",49.91935539,{type:"bar",values:[49.91935539]}],outlier:!1},{data:["Bedford","$2.2M","$3.1M",70.14284972,{type:"bar",values:[70.14284972]}],outlier:!1},{data:["Berks","$27.4M","$35.7M",76.92692634,{type:"bar",values:[76.92692634]}],outlier:!1},{data:["Blair","N/R","$8.6M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Bradford","$0.7M","$4.1M",16.17296357,{type:"bar",values:[16.17296357]}],outlier:!1},{data:["Bucks","$16.0M","$27.6M",57.90105653,{type:"bar",values:[57.90105653]}],outlier:!1},{data:["Butler","$10.0M","$11.6M",86.19403059,{type:"bar",values:[86.19403059]}],outlier:!1},{data:["Cambria","$4.9M","$10.6M",46.00591555,{type:"bar",values:[46.00591555]}],outlier:!1},{data:["Cameron","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Carbon","$2.7M","$5.0M",55.20362881,{type:"bar",values:[55.20362881]}],outlier:!1},{data:["Centre","$3.0M","$8.9M",33.49236863,{type:"bar",values:[33.49236863]}],outlier:!1},{data:["Chester","$16.3M","$30.0M",54.39229774,{type:"bar",values:[54.39229774]}],outlier:!1},{data:["Clarion","$0.8M","$2.4M",32.47664265,{type:"bar",values:[32.47664265]}],outlier:!1},{data:["Clearfield","$1.6M","$3.4M",47.56945001,{type:"bar",values:[47.56945001]}],outlier:!1},{data:["Clinton","$1.7M","$6.5M",26.20482058,{type:"bar",values:[26.20482058]}],outlier:!1},{data:["Columbia","$2.8M","$6.0M",45.91836515,{type:"bar",values:[45.91836515]}],outlier:!1},{data:["Crawford","$3.3M","$6.0M",54.53667276,{type:"bar",values:[54.53667276]}],outlier:!1},{data:["Cumberland","$8.5M","$11.3M",75.28473396,{type:"bar",values:[75.28473396]}],outlier:!1},{data:["Dauphin","$0.3M","N/R","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Delaware","$0.4M","N/R","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Elk","$1.9M","$2.7M",70.16631838,{type:"bar",values:[70.16631838]}],outlier:!1},{data:["Erie","$6.7M","$17.0M",39.4405589,{type:"bar",values:[39.4405589]}],outlier:!1},{data:["Fayette","$9.3M","$7.6M",100,{type:"bar",values:[100]}],outlier:!1},{data:["Forest","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Franklin","$6.2M","$13.3M",46.55092852,{type:"bar",values:[46.55092852]}],outlier:!1},{data:["Fulton","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Greene","$1.3M","$2.7M",47.56944381,{type:"bar",values:[47.56944381]}],outlier:!1},{data:["Huntingdon","$1.3M","$1.7M",77.32557584,{type:"bar",values:[77.32557584]}],outlier:!1},{data:["Indiana","$3.6M","$7.1M",51.53061275,{type:"bar",values:[51.53061275]}],outlier:!1},{data:["Jefferson","$1.5M","$3.3M",46.1397167,{type:"bar",values:[46.1397167]}],outlier:!1},{data:["Juniata","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Lackawanna","$16.9M","$25.4M",66.42315908,{type:"bar",values:[66.42315908]}],outlier:!1},{data:["Lancaster","$15.5M","$27.6M",56.0542793,{type:"bar",values:[56.0542793]}],outlier:!1},{data:["Lawrence","N/R","$6.2M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Lebanon","$4.7M","$9.3M",50.50411042,{type:"bar",values:[50.50411042]}],outlier:!1},{data:["Lehigh","$9.0M","$30.0M",30.0079569,{type:"bar",values:[30.0079569]}],outlier:!1},{data:["Luzerne","N/R","$26.3M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Lycoming","$9.0M","$10.3M",87.12023555,{type:"bar",values:[87.12023555]}],outlier:!1},{data:["McKean","$2.1M","$2.6M",80.62499691,{type:"bar",values:[80.62499691]}],outlier:!1},{data:["Mercer","$3.5M","$7.8M",45.21396757,{type:"bar",values:[45.21396757]}],outlier:!1},{data:["Mifflin","$2.1M","$3.6M",58.29183635,{type:"bar",values:[58.29183635]}],outlier:!1},{data:["Monroe","$6.3M","$12.7M",49.18033199,{type:"bar",values:[49.18033199]}],outlier:!1},{data:["Montgomery","$29.6M","$38.8M",76.43072401,{type:"bar",values:[76.43072401]}],outlier:!1},{data:["Montour","$0.7M","$0.9M",76.64233742,{type:"bar",values:[76.64233742]}],outlier:!1},{data:["Northampton","$12.6M","$26.6M",47.6338724,{type:"bar",values:[47.6338724]}],outlier:!1},{data:["Northumberland","$1.5M","$2.4M",64.0957536,{type:"bar",values:[64.0957536]}],outlier:!1},{data:["Perry","$3.1M","$4.8M",64.92248608,{type:"bar",values:[64.92248608]}],outlier:!1},{data:["Philadelphia","$205.1M","$260.9M",78.60564543,{type:"bar",values:[78.60564543]}],outlier:!1},{data:["Pike","$8.1M","$10.2M",79.57516231,{type:"bar",values:[79.57516231]}],outlier:!1},{data:["Potter","$0.3M","$0.7M",38.28125105,{type:"bar",values:[38.28125105]}],outlier:!1},{data:["Schuylkill","$4.9M","$7.3M",67.50973321,{type:"bar",values:[67.50973321]}],outlier:!1},{data:["Snyder","$1.1M","$3.4M",33.18584058,{type:"bar",values:[33.18584058]}],outlier:!1},{data:["Somerset","$3.8M","$2.9M",100,{type:"bar",values:[100]}],outlier:!1},{data:["Sullivan","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Susquehanna","$2.7M","$3.1M",87.27389024,{type:"bar",values:[87.27389024]}],outlier:!1},{data:["Tioga","$1.2M","$2.6M",44.75309491,{type:"bar",values:[44.75309491]}],outlier:!1},{data:["Union","$0.4M","$0.9M",41.91170231,{type:"bar",values:[41.91170231]}],outlier:!1},{data:["Venango","$1.8M","$2.7M",65.28663594,{type:"bar",values:[65.28663594]}],outlier:!1},{data:["Warren","N/R","$3.1M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Washington","$4.0M","$7.7M",51.11357976,{type:"bar",values:[51.11357976]}],outlier:!1},{data:["Wayne","$2.8M","$4.4M",63.54167183,{type:"bar",values:[63.54167183]}],outlier:!1},{data:["Westmoreland","$8.4M","$16.5M",51.29716715,{type:"bar",values:[51.29716715]}],outlier:!1},{data:["Wyoming","$1.9M","$2.2M",85.99998119,{type:"bar",values:[85.99998119]}],outlier:!1},{data:["York","$16.7M","$54.6M",30.66932716,{type:"bar",values:[30.66932716]}],outlier:!1}];(()=>{const e=document.getElementById("pretrial-spending-container");new g(N,[{class:"county-name-cell",header:{text:"",unit:""},sortable:!1,searchable:!0},{class:"spending-cell number-cell",header:{text:"Cost",unit:"dollars"},sortable:!0,searchable:!1},{class:"total-budget-cell number-cell",header:{text:"Budget",unit:"dollars"},sortable:!0,searchable:!1},{class:"fraction-budget-cell number-cell",header:{text:"Pct. Budget",unit:"percent"},sortable:!0,searchable:!1},{class:"viz-cell",header:{start:0,end:100,averages:[{name:"",value:62.4}],unit:"percent"},sortable:!1,searchable:!1}],{col:1,dir:-1},e,["Pennsylvania","$10.1M","$16.1M",62.4,{type:"bar",values:[62.4]}])})()}();
//# sourceMappingURL=pretrial-spending.13fabeb0.js.map
