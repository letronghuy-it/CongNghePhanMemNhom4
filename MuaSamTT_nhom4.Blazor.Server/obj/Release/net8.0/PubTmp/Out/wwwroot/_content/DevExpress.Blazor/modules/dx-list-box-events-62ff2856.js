import{D as e}from"./keyboard-navigation-strategy-940ff3b3.js";import{T as t,B as s}from"./dx-virtual-scroll-viewer-1ee44a82.js";import{S as a}from"./scroll-viewer-css-classes-4d6797bc.js";import{C as l}from"./css-classes-cee8476c.js";import{V as r}from"./dx-scroll-viewer-d14c6cca.js";import{D as o}from"./layouthelper-0c7c89da.js";import{C as c}from"./custom-events-helper-e7f279d3.js";import{o as i}from"./constants-86572358.js";class m{}m.ClassName=l.Prefix+"-list-box",m.TableNoScrollClassName=m.ClassName+"-table-no-scroll",m.TableHeaderRowClassName=m.ClassName+"-table-header-row",m.TableSelectionCellClassName=m.ClassName+"-selection-cell",m.MultiSelectClassName=m.ClassName+"-multi-select",m.SelectedItemClassName=m.ClassName+"-item-selected",m.FocusedItemClassName=m.ClassName+"-item-focused",m.EmptyDataItemClassName=m.ClassName+"-empty-data-item",m.ItemDisplayTemplateContainer=m.ClassName+"-item-display-template-container",m.RenderContainer=l.Prefix+"-list-box-render-container";class n{}n.VisibleIndexAttributeName="data-visible-index",n.ItemIdAttributeName="id";class d{}d.TableSelector=`.${a.ContentContainerClassName} > table`,d.ListSelector=`.${a.ContentContainerClassName} > ul`,d.MultiSelectClassSelector=`.${m.MultiSelectClassName}`,d.TablePartsSelector=":scope > *:not(colgroup):not(thead)",d.TableBodySelector=":scope > tbody",d.KeyboardNavigatorSelector=`:scope > ${e}`,d.HeaderRowSelector=`.${m.TableHeaderRowClassName}`,d.RowSelector=`:scope > tr:not([${t}]):not([${s}])`,d.TableRowSelector=`tr[${n.VisibleIndexAttributeName}]`,d.ItemSelector=`:scope > li:not([${t}]):not([${s}])`,d.ListItemSelector=`li[${n.VisibleIndexAttributeName}]`,d.ListItemDisplayTemplateConrainerSelector=`.${m.ItemDisplayTemplateContainer}`,d.SelectedItemSelector=`.${m.SelectedItemClassName}`,d.FocusedItemSelector=`.${m.FocusedItemClassName}`,d.EmptyDataItemSelector=`.${m.EmptyDataItemClassName}`;class b{static getVerticalEdge(e){switch(e){case r.Top:return 0;case r.Bottom:return 1;default:return-1}}static getElementVisibleIndex(e){return o.getAttributeIntValue(e,n.VisibleIndexAttributeName,-1)}static findItemIndex(e,t){for(let s=0;s<t.length;s++){const a=t[s];if(a&&this.getElementVisibleIndex(a)===e)return s}return-1}static queryItemsBySelector(e,t){return Array.from(e.querySelectorAll(t))}}class u extends CustomEvent{constructor(e){super(u.eventName,{detail:new C(e),bubbles:!0,composed:!0,cancelable:!0})}}u.eventName=i+".focusedrowchanged";class C{constructor(e){this.VisibleIndex=e}}class N extends CustomEvent{constructor(e,t){super(N.eventName,{detail:new p(e,t),bubbles:!0,composed:!0,cancelable:!0})}}N.eventName=i+".makeelementvisible";class p{constructor(e,t){this.VisibleIndex=e,this.VerticalEdge=t}}c.register(u.eventName,(e=>e.detail)),c.register(N.eventName,(e=>e.detail));export{n as L,b as a,d as b,m as c,u as d,N as e};