!function(){const e="VIEW ALL",t="VIEW LESS",o='<svg class="caret" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 0.999999L4 4L1 1" stroke="white" stroke-miterlimit="10"/>\n</svg>';class n{constructor(e){this.className=e}render(){this.element=document.createElement("td"),this.setElementClass(this.className)}getClassName(){return this.className}setElementClass(e){this.element.className=e}addElementClass(e){this.element.classList.add(e)}}class s extends n{constructor(e,t){super(t),this.content=e,this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class a extends n{constructor(e,t){super(`${t} ${e.className}`),this.content=e.value.replace("-","+"),this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class r extends n{constructor(e,t){super(t),this.content=document.createElement("a"),this.content.className="retention-fee-link",this.content.href=e.href,this.content.target="_blank",this.content.innerText=`${e.text} ➚`,this.render()}render(){super.render(),this.element.appendChild(this.content)}}class i extends n{constructor(e,t){super(t),this.content=document.createElement("span"),this.content.innerText=e.text;const o=document.createElement("sup");o.innerText=e.number,this.content.appendChild(o),this.render()}render(){super.render(),this.element.appendChild(this.content)}}class l extends n{constructor(e,t,o){super(t);const n="percent"===o.unit;this.content=n?e.toFixed(1):e.toLocaleString(),this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class d extends n{constructor(e,t,o){super(t),this.content=e.values[0],this.average=o.averages[0].value,this.range=o,this.render()}render(){super.render();const e=document.createElement("div");e.className="viz-bar",e.style.width=this.content/this.range.end*100+"%";const t=document.createElement("div"),o=this.content-this.average;o>0&&(t.textContent=`+${o.toFixed(1)}`),o<0&&(t.textContent=`${o.toFixed(1)}`),t.className="bar-label",e.appendChild(t),this.element.appendChild(e);const n=document.createElement("div");n.className="bar-average-line green",n.style.left=this.average/this.range.end*100+"%",this.element.appendChild(n)}}class h extends n{constructor(e,t){super(t),this.values=e.values.filter((e=>0!==e.value)),this.tooltipName=e.name,this.render()}createDistributionTable(){const e=document.createElement("div");return e.className="tooltip-table",this.values.forEach((t=>{const o=document.createElement("div");o.className="tooltip-row";const n=document.createElement("div");n.className="tooltip-cell",n.style.marginRight="10px";const s=document.createElement("div");s.className=t.className,s.classList.add("color-box"),n.appendChild(s);const a=document.createElement("div");a.className="tooltip-cell",a.style.flexGrow=2;const r=document.createElement("div");r.className="tooltip-cell",a.innerText=t.name,r.style.textAlign="right",r.innerText=Math.round(100*t.value)/100+"%",o.appendChild(n),o.appendChild(a),o.appendChild(r),e.appendChild(o)})),e}createTooltip(){const e=document.createElement("div");e.className="dist-tooltip";const t=document.createElement("h3");t.className="dist-tooltip-name",t.innerText=this.tooltipName;const o=this.createDistributionTable();return e.appendChild(t),e.appendChild(o),e}render(){super.render();const e=document.createElement("div");e.className="dist-bar-container",this.values.forEach((t=>{const o=document.createElement("div");o.className=`viz-bar ${t.className}`,e.appendChild(o)}));const t=this.values.map((e=>`${e.value}%`));e.style.gridTemplateColumns=t.join(" ");const o=this.createTooltip();e.appendChild(o),this.element.appendChild(e)}}class c extends n{constructor(e,t,o){super(t),this.content=e.values,this.averages=o.averages,this.range=o,this.vizColors=["green","purple"],this.render()}render(){super.render();const e=document.createElement("div");e.className="viz-number-line",this.element.appendChild(e),this.content.forEach(((e,t)=>{const o=document.createElement("div");o.className=`viz-number-line-point ${this.vizColors[t]}`,o.style.left=`calc(${(e-this.range.start)/this.range.end*100}% - 2px)`,this.element.appendChild(o)})),this.averages.forEach(((e,t)=>{const o=document.createElement("div");o.className=`bar-average-line ${this.vizColors[t]}`,o.style.left=(e.value-this.range.start)/this.range.end*100+"%",this.element.appendChild(o)}))}}class f extends n{constructor(e,t,o,n,s,a,r){super(t),this.content=e,this.sortCol=o,this.sortDir=n,this.initSort=s,this.table=a,this.id=r,this.render(),this.sortCol&&this.element.addEventListener("click",(()=>{this.table.sortCol!==this.id&&(this.sortDir=-1);const e=this.getClassName();this.table.setSortColumn(this.id),this.table.setSortDirection(this.sortDir),this.table.sort(!1),this.setElementClass(e,!0),this.sortDir*=-1})),this.initSort&&(this.sortDir*=-1)}render(){const e=document.createElement("th");if(e.className=this.className,this.element=e,this.sortCol){const t=this.getClassName();this.setElementClass(t,this.initSort);const n=document.createElement("div");n.className="th-wrapper";const s=document.createElement("div");s.appendChild(document.createTextNode(this.content)),0===this.id?(n.appendChild(s),n.innerHTML=n.innerHTML+o):(n.innerHTML=o,n.appendChild(s)),e.appendChild(n)}else e.appendChild(document.createTextNode(this.content))}getClassName(){const e=this.sortDir>0?"sort-asc":this.sortDir<0?"sort-desc":"";return`${this.className} ${e}`}setElementClass(e,t){const o=t?"sorted":"";super.setElementClass(`${e} ${o}`)}}class p extends f{constructor(e,t,o,n,s,a,r){super(e,t,o,n,s,a,r)}render(){const e=this.content.start,t=this.content.end,o=this.content.unit,n=document.createElement("th");n.className=this.className;const s="dollars"===o?`$${Math.round(e/1e3)}K`:e,a="dollars"===o?`$${Math.round(t/1e3)}K`:t;[this.createTickElement(s,"start-num"),this.createTickElement(a,"end-num")].forEach((e=>{n.appendChild(e)})),this.element=n}createTickElement(e,t,o){const n=document.createElement("div");n.className=t;const s=document.createElement("div");s.innerHTML=e,t.includes("average")&&(s.className="average-text"),n.appendChild(s),"start-num"===t&&1===e.toString().length?n.style.paddingLeft="10px":"end-num"===t&&(n.style.paddingRight=8-e.toString().length+"px",n.style.marginRight="-13px");const a=document.createElement("div");return a.className=""+(t.includes("average")?"average-line":"viz-line"),o&&(a.className+=` ${o}`),n.appendChild(a),n}}class u{constructor(e){this.cells=e,this.render()}render(){const e=document.createElement("tr");this.cells.forEach((t=>{e.appendChild(t.element)})),this.element=e}clearedSortedCells(){this.cells.forEach((e=>{const t=e.getClassName();e.setElementClass(t,!1)}))}}class m{constructor(e,t,o,n=""){this.cells=e,this.outlier=t,this.isHidden=o,this.className=n}setIsHidden(e){this.isHidden=e}render(e){const t=document.createElement("tr");return this.element=t,this.isHidden?[]:(t.className=this.className,this.cells.forEach(((o,n)=>{o.setElementClass(o.className),n===e&&o.addElementClass("sorted"),t.appendChild(o.element)})),[this.element])}}class C extends m{constructor(e,t,o,n,s){super(e,t,n),this.isCollapsed=s,this.collapseRows=o}render(e){const t=super.render(e);if(this.element.className="collapsible "+(this.isCollapsed?"collapsed":"expanded"),t.length>0){const e=t[0].firstChild;e.innerHTML=o,this.isCollapsed?e.classList.add("caret-rotated"):e.classList.remove("caret-rotated")}const n=this.collapseRows.flatMap((t=>t.render(e)));return[...t,...n]}}class w{constructor(e,t,o,n,s=[],a=!0){this.classNames=t.map((e=>e.class)),this.headers=t.map((e=>e.header)),this.data=e,this.container=n,this.element=n.getElementsByTagName("table")[0],this.showOutliers=!0,this.summaryRowData=s,this.validate(),this.searchCols=t.map((e=>e.searchable)),this.searchTerms=[],this.isTruncated=!0,this.sortCols=t.map((e=>e.sortable)),this.sortCol=o.col,this.sortDir=o.dir,this.isVisible=a,this.header=this.getHeaderRow(),this.init(),this.sort(!0)}validate(){if(this.classNames.length!==this.headers.length)throw new Error("Number of class names does not match number of headers");if(this.data.some((e=>e.data.length!=this.headers.length)))throw new Error(`${this.headers.length} columns of data required`)}init(){this.element.getElementsByTagName("thead")[0].appendChild(this.header.element);const o=this.container.getElementsByClassName("menu")[0];let n=this.data.flatMap((e=>{const t=e.data.flatMap(((e,t)=>this.searchCols[t]?[e]:[])),o=e.collapseData?e.collapseData.map((e=>e.data[1])):[];return t.concat(o)}));n.sort(),o.textContent="",n.forEach((e=>{const t=document.createElement("div");t.className="item",t.innerText=e,o.appendChild(t)}));this.container.getElementsByTagName("input")[0].addEventListener("change",(e=>{const t=e.target.value;this.searchTerms=t.split(";").filter((e=>""!==e)),this.rows=this.getRows(),this.render()}));const s=this.container.getElementsByClassName("view-all-btn")[0];s.innerText=this.isTruncated?e:t,s.addEventListener("click",(()=>{this.isTruncated=!this.isTruncated,s.innerText=this.isTruncated?e:t,this.rows=this.getRows(),this.render()}));const a=this.container.getElementsByClassName("outliers-btn");if(a.length>0){a[0].addEventListener("click",(e=>{this.toggleOutliers()?e.target.classList.add("showing"):e.target.classList.remove("showing")}))}}getHeaderRow(){const e=this.headers.map(((e,t)=>{const o="text"in e?f:p;return new o(o===f?e.text:e,this.classNames[t],this.sortCols[t],this.sortCols[t]?this.sortDir:0,t===this.sortCol,this,t)}));return new u(e)}getCells(e,t){return e.map(((e,o)=>{let n=s;return"number"==typeof e?n=l:"object"==typeof e&&("bar"===e.type?n=d:"line"===e.type?n=c:"styled"===e.type?n=a:"dist"===e.type?n=h:"link"===e.type?n=r:"footnote"===e.type&&(n=i)),"string"==typeof e&&e.length>0&&o<=1&&t&&(e+="*"),new n(e,this.classNames[o],this.headers[o])}))}getRows(){let e=0;const t=this.data.map((t=>{const o=this.getCells(t.data,t.outlier),n=this.searchTerms.some((e=>t.data.some(((t,o)=>this.searchCols[o]&&t.toLowerCase()===e.toLowerCase())))),s=this.isTruncated&&e>=10,a=t.outlier&&!this.showOutliers,r=n||!s&&!a&&0===this.searchTerms.length;if(void 0!==t.collapseData){const n=t.collapseData.map((e=>{const o=this.searchTerms.some((t=>e.data[1].toLowerCase()===t.toLowerCase())),n=e.outlier&&!this.showOutliers,s=o||!t.isCollapsed&&!n;return new m(this.getCells(e.data,e.outlier),e.outlier,!s)})),s=n.some((e=>!e.isHidden)),a=r||s;return a&&(e+=n.reduce(((e,t)=>t.isHidden?e:e+1),1)),new C(o,t.outlier,n,!a,!s&&t.isCollapsed)}return r&&e++,new m(o,t.outlier,!r)}));if(this.summaryRowData.length>0){const e=this.getCells(this.summaryRowData);t.unshift(new m(e,!1,!1,"summary-row"))}return t}setSortColumn(e){this.sortCol=e}setSortDirection(e){this.sortDir=e}getSortable(e){if("object"==typeof e||/\d/.test(e)){const t="object"==typeof e?e.value:e;return Number(t.replace?t.replace(/[^\d.-]/g,""):t)}return e}sort(e){e||this.header.clearedSortedCells(),this.data.sort(((e,t)=>{const o=e.data[this.sortCol],n=t.data[this.sortCol],s=this.getSortable(o),a=this.getSortable(n);return s<a?-1*this.sortDir:s>a?this.sortDir:0})),this.rows=this.getRows(),this.render()}toggleOutliers(){return this.showOutliers=!this.showOutliers,this.rows=this.getRows(),this.render(),this.showOutliers}hide(){this.isVisible=!1,this.render()}show(){this.isVisible=!0,this.render()}render(){if(this.isVisible){this.container.classList.remove("hidden");const e=this.element.getElementsByTagName("tbody")[0];e.textContent="",this.rows.forEach(((t,o)=>{t.render(this.sortCol).forEach((t=>e.appendChild(t))),t instanceof C&&t.element.addEventListener("click",(()=>{this.data[o].isCollapsed=!t.isCollapsed,this.rows=this.getRows(),this.render()}))}))}else this.container.classList.add("hidden")}}const y=[{data:["Adams",{type:"link",text:"4.5% of first $1,000 deposited, 1.5% of each additional dollar",href:"http://www.adamscounty.us/Dept/CourtofCommonPleas/Documents/Adams%20County%20Rules%20of%20Criminal%20Procedure.pdf"}]},{data:["Allegheny",{type:"link",text:"5% of first $1,000 deposited, 2% of each additional dollar",href:"https://www.alleghenycounty.us/court-records/criminal/cost-and-fee-schedule.aspx"}]},{data:["Armstrong",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://co.armstrong.pa.us/images/departments/prothonotary/prothfees.pdf"}]},{data:["Beaver",{type:"link",text:"30% of amount deposited, but no less than $10",href:"http://www.beavercountypa.gov/Depts/Courts/CCP/Documents/Local%20Rules%20Criminal%20Procedure.pdf"}]},{data:["Bedford",{type:"link",text:"5% of first $1,000 deposited, 2% of each additional dollar",href:"https://www.bedfordcountypa.org/document_center/Prothonotary/Amended%20Clerk%20of%20Courts%20%20Fee%20Schedule.pdf"}]},{data:["Berks",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"http://www.co.berks.pa.us/Dept/Prothy/Documents/FEE%20BILL%20update%201-1-2019%20-%20Act%20119%20Increase.pdf"}]},{data:["Blair",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of the Prothonotary on 5/1/2020",number:1}]},{data:["Bradford",{type:"link",text:"3% of first $1,000 deposited, 1% for each additional dollar",href:"http://bradfordcountypa.org/wp-content/uploads/2019/01/Prothonotary-Fee-Schedule.pdf"}]},{data:["Bucks","$100"]},{data:["Butler",{type:"link",text:"5.25% of first $1,000 deposited, 1.8% of each additional dollar ",href:"https://www.butlercountypa.gov/DocumentCenter/View/878/Fee-Schedule-PDF"}]},{data:["Cambria","$25"]},{data:["Cameron",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"http://www.cameroncountypa.com/Document_Center/Clerk_Court/2020%20Protho%20and%20Clerk%20of%20Courts%20Fee%20Schedules.pdf"}]},{data:["Carbon",{type:"link",text:"$75",href:"https://www.carboncourts.com/Crimrules.htm#l535d"}]},{data:["Centre",{type:"footnote",text:"None",footnote:"Conversation with Office of the Prothonotary on 5/1/2020",number:2}]},{data:["Chester",{type:"link",text:"For percentage bail, 40% of amount deposited, but no less than $50",href:"https://chesco.org/DocumentCenter/View/34793/CCCriminal-Rules?bidId="}]},{data:["Clarion",{type:"footnote",text:"None",footnote:"Conversation with Office of the Prothonotary on 5/1/2020",number:3}]},{data:["Clearfield",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/1/2020.",number:4}]},{data:["Clinton",{type:"link",text:"3% of first $1,000 deposited, 1% for each additional dollar",href:"https://www.clintoncountypa.com/home/showdocument?id=2151"}]},{data:["Columbia",{type:"link",text:"$25",href:"http://www.columbiamontourcourts.com/wp-content/uploads/2015/05/Criminal-Local-Rules.pdf"}]},{data:["Crawford",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 05/1/2020.",number:5}]},{data:["Cumberland",{type:"link",text:"5% of first $1,000 deposited, 1.5% for each additional dollar",href:"https://www.ccpa.net/1919/Current-Fee-Schedule"}]},{data:["Dauphin",{type:"link",text:"For percentage bail, 30% percent of amount deposited, but no less than $50; for nominal bail, $25",href:"https://cms3.revize.com/revize/dauphincounty/document_center/courtdepartments/Local%20Rules%20of%20Court/Criminal%20Rules/530-Duties%20and%20Powers%20of%20a%20Bail%20Agency.pdf"}]},{data:["Delaware",{type:"link",text:"For percentage bail, 40% percent of amount deposited, but no less than $100; for straight bail, 4% of first $1,000 deposited, 2% of each additional dollar",href:"https://www.delcopa.gov/courts/localrules/CriminalRules.pdf"}]},{data:["Elk",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://www.co.elk.pa.us/images/Prothonotary/CLERK-OF-COURTS-FEE-SCHEDULE-2019-2021.pdf"}]},{data:["Erie",{type:"link",text:"$16.50 filing fee on all bonds",href:"https://eriecountypa.gov/wp-content/uploads/2019/06/BOND-INFORMATION.revised-2019.pdf  "}]},{data:["Fayette",{type:"link",text:"For percentage bail, 30% percent of amount deposited, but no less than $10",href:"https://www.fayettecountypa.org/DocumentCenter/View/1737/Local-Rules-PDF?bidId="}]},{data:["Forest",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/26/2020",number:6}]},{data:["Franklin",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://franklincountypa.gov/ckeditorfiles/files/Clerk%20of%20Courts/03012019%20Fee%20Schedule.pdf"}]},{data:["Fulton",{type:"footnote",text:"None",footnote:"Conversation with Magisterial District Judge Wendy Richards Mellott on 5/8/2020",number:7}]},{data:["Greene",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/6/2020",number:8}]},{data:["Huntingdon",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://huntingdoncountycourt.net/wp-content/uploads/2019/01/2019_Prothonotary_Fee_Schedule.pdf"}]},{data:["Indiana",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/8/2020",number:9}]},{data:["Jefferson",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/8/2020",number:10}]},{data:["Juniata",{type:"footnote",text:"None",footnote:"Conversation with Office of Prothonotary on 5/8/2020",number:11}]},{data:["Lackawanna",{type:"link",text:"For percentage bail, 20% of amount deposited, but no less than $50 and no greater than $500",href:"https://www.lackawannacounty.org/wp-content/uploads/2017/11/Rules-of-Criminal-Procedure.pdf"}]},{data:["Lancaster",{type:"link",text:"4.9% of first $1,000 deposited, 1.6% of each additional dollar",href:"https://lancasterpaclerkofcourts.com/DocumentCenter/View/37/Fee-Schedule?bidId="}]},{data:["Lawrence",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://co.lawrence.pa.us/gov/prothonotary-lawrence_county/clerk-of-court-fees/"}]},{data:["Lebanon",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/21/2020 ",number:12}]},{data:["Lehigh",{type:"link",text:"For percentage bail, 30% of amount deposited, but no less than $10; for straight bail,  6.54% of first $1,000, 2.17% of each additional dollar",href:"https://www.lccpa.org/criminal/CriminalCourtRules.pdf"}]},{data:["Luzerne",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" https://www.luzernecounty.org/DocumentCenter/View/11672/Fee-Schedule"}]},{data:["Lycoming",{type:"link",text:"For straight bail, 3% of first $1,000 deposited, 1% of each additional dollar",href:"https://www.lyco.org/Portals/1/Prothonotary/Documents/Fee%20Schedule.pdf?ver=2019-02-08-084920-037 "}]},{data:["McKean",{type:"footnote",text:"None",footnote:"Conversation with Office of the Prothonotary on 5/22/2020",number:13}]},{data:["Mercer",{type:"footnote",text:"6% of first $1,000 deposited, 2% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/22/2020",number:14}]},{data:["Mifflin",{type:"footnote",text:"4.5% of first $1,000 deposited, 1.5% of each additional dollar",footnote:"Conversation with Office of the Prothonotary on 5/22/2020",number:15}]},{data:["Monroe","Unable to confirm fee"]},{data:["Montgomery",{type:"link",text:"Graduated percentages for straight and cash bail",href:"https://www.montcopa.org/DocumentCenter/View/533/Cash-Bail-Fees?bidId="}]},{data:["Montour",{type:"link",text:"$25",href:"http://www.columbiamontourcourts.com/wp-content/uploads/2015/05/Criminal-Local-Rules.pdf"}]},{data:["Northampton",{type:"link",text:"For percentage bail, 20% of amount deposited; for straight bail, 4.5% of first $1,000 deposited, 1.5% for each additional dollar",href:"https://www.northamptoncounty.org/CRTSRVCS/CRIMINAL/Documents/FEE%20SCHEDULE.pdf#search=criminal%20fees"}]},{data:["Northumberland",{type:"footnote",text:"$25",footnote:"Conversation with the Office of the Clerk of Courts on 7/24/2020",number:16}]},{data:["Perry",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/22/2020",number:17}]},{data:["Philadelphia",{type:"link",text:"None if the defendant appears at all court dates",href:"https://www.courts.phila.gov/pdf/rules/CP-Criminal-Division-Compiled-Rules.pdf"}]},{data:["Pike",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" https://www.pikepa.org/Prothfold/Prothonotaryfee.pdf "}]},{data:["Potter",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" https://pottercountypa.net/post/_docs/2018POCO_FEE_SCHEDULE.pdf  "}]},{data:["Schuylkill",{type:"link",text:"For percentage bail, 10% of the amount deposited, but no less than $10",href:"http://www.co.schuylkill.pa.us/Offices/LawLibrary/CriminalRulesRevNovember2018.pdf"}]},{data:["Snyder",{type:"footnote",text:"None",footnote:"Conversation with Office of Prothonotary on 5/15/2020",number:18}]},{data:["Somerset",{type:"footnote",text:"1% of all money deposited",footnote:"Conversation with the Office of the Clerk of Courts on 5/15 and 7/24/2020.",number:19}]},{data:["Sullivan",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of Prothonotary on 5/26/2020",number:20}]},{data:["Susquehanna",{type:"footnote",text:"4.5% of first $1,000 deposited, 1.5% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 7/24/2020.",number:21}]},{data:["Tioga",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" http://www.tiogacountypa.us/Departments/Prothonotary_Clerk_of_Courts/Documents/TIOGA%20COUNTY%20PROTHONOTARY%20FEE%20SCHEDULE%20EFFECTIVE%20DECEMBER%201.pdf"}]},{data:["Union",{type:"footnote",text:"None",footnote:"Conversation with Office of Prothonotary on 5/15/2020",number:22}]},{data:["Venango",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar  Additional $30 service fee",footnote:"Conversation with the Office of the Clerk of Courts on 5/26/2020",number:23}]},{data:["Warren",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of Prothonotary on 5/21/2020",number:24}]},{data:["Washington",{type:"footnote",text:"For percentage bail, $60; for straight bail, 5% of first $1,000 deposited, 1.8% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/21/2020",number:25}]},{data:["Wayne",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"http://www.waynecountypa.gov/DocumentCenter/View/901/Fee-Schedule-PDF?bidId="}]},{data:["Westmoreland",{type:"footnote",text:"6.6% of first $1,000 deposited, 2.5% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/18/2020",number:26}]},{data:["Wyoming",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of Prothonotary on 5/18/2020",number:27}]},{data:["York","Unable to confirm fee"]}];(()=>{const e=document.getElementById("bail-retention-fee-container");new w(y,[{class:"county-name-cell",header:{text:"County",unit:""},sortable:!0,searchable:!0},{class:"retention-fee-cell",header:{text:"Retention Fee",unit:""},sortable:!1,searchable:!1}],{col:0,dir:1},e)})(),(()=>{const e=document.getElementById("bail-retention-fee-footnotes");y.forEach((t=>{if("footnote"==t.data[1].type){const o=t.data[1].number,n=document.createElement("p");n.className="bail-retention-footnote",n.innerText=o;const s=document.createElement("span");s.className="footnote-text",s.innerText=t.data[1].footnote,n.appendChild(s),e.appendChild(n)}}))})()}();
//# sourceMappingURL=bail-retention.af7f356f.js.map