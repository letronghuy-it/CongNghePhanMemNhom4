import{k as e}from"./key-f9cbed1b.js";import{removeFocusHiddenAttribute as t,addFocusHiddenAttribute as s}from"./focus-utils-405a64a8.js";import{T as n,r as o,u as i,G as r}from"./popup-1339ec31.js";import{L as a,K as l}from"./keyboard-navigation-strategy-940ff3b3.js";import{C as u}from"./custom-events-helper-e7f279d3.js";import{b as d,e as h}from"./logicaltreehelper-7b19cc30.js";import{M as c}from"./constants-3937401e.js";class m{constructor(){this._objCaptured=new n,this._objReleased=new n,this._obj=null}get subject(){return this._obj}capture(e){if(null==e)throw new Error(`Value cannot be ${e}`);null!==this._obj&&this._objReleased.tryReject(`The object ${this._obj} was not released.`),this._objReleased=new n,this._obj=e,this._objCaptured.tryResolve(e)}release(){const e=this._obj;this._obj=null,e&&this._objReleased.tryResolve(e),this._objCaptured=new n}waitCapture(){return this._objCaptured.promise}waitRelease(){return this._objReleased.promise}}class b{constructor(){this._selectedItemIndices=[],this._initialSelectedItem=null,this._initNewState=!1,this._selectedItemIndex=0}get currentLevel(){return this._selectedItemIndices.length}get selectedItemIndex(){return this._selectedItemIndex}updateState(e,t){var s;this._initNewState?(this._selectedItemIndices.push(e),this._selectedItemIndex=this._initialSelectedItem===S.Last?t-1:0):this._selectedItemIndex=null!==(s=this._selectedItemIndices.pop())&&void 0!==s?s:e}moveToNextLevel(e){this._initNewState=!0,this._initialSelectedItem=e}moveToPrevLevel(){this._initNewState=!1}clearState(){this._selectedItemIndices=[],this._selectedItemIndex=0,this._initNewState=!1,this._initialSelectedItem=S.First}}class p{constructor(){this.allowCount=0}get Allowed(){return this.allowCount>0}allow(){this.allowCount++}disallow(){this.Allowed&&this.allowCount--}reset(){this.allowCount=0}doAllowedAction(e){this.allow();try{e()}finally{this.disallow()}}doAllowedFunc(e){this.allow();try{return e()}finally{this.disallow()}}doIfAllowed(e){this.Allowed&&e()}}function y(e){return e&&"hasPopup"in e.dataset}function w(e){return!!e&&"expanded"in e.dataset}function g(e,t){return e.classList.contains(t)}function C(e){return e.isConnected&&e.matches(":scope:focus-within")}var I,S;!function(e){e[e.Expand=0]="Expand",e[e.Collapse=1]="Collapse",e[e.Execute=2]="Execute"}(I||(I={}));class _ extends CustomEvent{constructor(e){super(_.eventName,{detail:{action:e},bubbles:!0,composed:!1,cancelable:!0})}}_.eventName="dxbl-dropdown.action-request",u.register(_.eventName,(e=>e.detail)),function(e){e[e.First=0]="First",e[e.Last=1]="Last"}(S||(S={}));class f extends o{canSwitchToNestedContentMode(){return!0}isImmediatelyClickEnabled(){return!1}updateSelectedItemByIndex(e){e<0&&(e=Math.min(this.selectedItemIndex,this.itemCount-1)),super.updateSelectedItemByIndex(e)}handleKeyDown(t){return!(e.KeyUtils.getEventKeyCode(t)===e.KeyCode.Tab&&!this.nestedContentSelected)&&(!!super.handleKeyDown(t)||!this.nestedContentSelected&&this.handleKeyDownCore(t))}focusFirstItem(){this.focusItem(0)}focusLastItem(){this.focusItem(this.itemCount-1)}focusItem(e){t(this.targetElement),this.updateSelectedItemByIndex(e),this.focusSelectedItem()}doClick(e,t){this.raiseClickEvent(e,t.ctrlKey,t.metaKey,t.shiftKey)}onPopupShown(){s(this.targetElement),super.onPopupShown()}}class v extends f{constructor(e,t){super(e,t),this._subMenuHolder=new m,this.boundOnPopupKeyboardStrategyCreating=this.onPopupKeyboardStrategyCreating.bind(this),this._shouldRestoreFocus=!1,this.subscribeToEvents()}get subMenuStrategy(){return this._subMenuHolder.subject}canSwitchToNestedContentMode(){return!this.subMenuStrategy}handleKeyDownCore(t){switch(e.KeyUtils.getEventKeyCode(t)){case e.KeyCode.Down:return!(t.ctrlKey||t.shiftKey||t.altKey)&&(this.moveToNextItem(!0),!0);case e.KeyCode.Up:return!(t.ctrlKey||t.shiftKey||t.altKey)&&(this.moveToPrevItem(!0),!0);case e.KeyCode.Home:return this.selectItem(0),!0;case e.KeyCode.End:return this.selectItem(this.itemCount-1),!0;case e.KeyCode.Enter:case e.KeyCode.Space:return this.selectedItemElement===this.targetElement&&this.switchToNestedContent()||this.doAction(t),!0;case e.KeyCode.Right:return this.handleRightKey(t);case e.KeyCode.Left:return this.handleLeftKey(t);default:return!1}}handleRightKey(e){return!(!y(this.selectedItemElement)||w(this.selectedItemElement))&&(this.openSubMenu(S.First),!0)}handleLeftKey(e){return this.closeSelf()}onSubMenuClosed(e){this._subMenuHolder.subject===e&&this._subMenuHolder.release(),this.navigator.leaveDirection===a.None&&this._shouldRestoreFocus&&this.restoreFocus(),this._shouldRestoreFocus=!1}restoreFocus(){this.focusSelectedItem()}onSubMenuShown(e){this._subMenuHolder.capture(e),this._shouldRestoreFocus=this._shouldRestoreFocus||C(this.targetElement)}waitSubMenuShown(){return this._subMenuHolder.waitCapture()}waitSubMenuClosed(){return this._subMenuHolder.waitRelease()}requestSubMenuOpen(){var e;null===(e=this.selectedItemElement)||void 0===e||e.dispatchEvent(new _(I.Expand))}requestSubMenuClose(){var e;null===(e=this.selectedItemElement)||void 0===e||e.dispatchEvent(new _(I.Collapse))}subscribeToEvents(){this.targetElement.addEventListener(i.eventName,this.boundOnPopupKeyboardStrategyCreating)}onPopupKeyboardStrategyCreating(e){e.detail.factory={createPopup:(e,t)=>this.createSubMenuStrategy(e,t)}}}const K=`.${c.menuItem} > .dxbl-btn, .${c.menuItem} > .dxbl-menu-item-tmpl`,E="data-keyboard-navigator-is-ready";class M extends l{initialize(){super.initialize(),r(this.targetElement,(e=>e.setAttribute(E,"")))}updateSelectedItemByIndex(e){e<0&&(e=Math.min(this.selectedItemIndex,this.itemCount-1)),super.updateSelectedItemByIndex(e)}isImmediatelyClickEnabled(){return!1}canSwitchToNestedContentMode(){return!0}handleKeyDown(e){return!!super.handleKeyDown(e)||!this.nestedContentSelected&&this.handleKeyDownCore(e)}}class j extends M{constructor(e,t){super(e,t),this.boundOnPopupKeyboardStrategyCreating=this.onPopupKeyboardStrategyCreating.bind(this),this._subMenuHolder=new m,this._shouldRestoreFocus=!1,this.subscribeToEvents()}get shouldRestoreFocus(){return this._shouldRestoreFocus}set shouldRestoreFocus(e){this._shouldRestoreFocus=e}subscribeToEvents(){this.targetElement.addEventListener(i.eventName,this.boundOnPopupKeyboardStrategyCreating)}onPopupKeyboardStrategyCreating(e){e.detail.factory={createPopup:(e,t)=>this.createPopupStrategy(e,t),createModal:(e,t)=>this.createModalStrategy(e,t)}}get subMenuStrategy(){return this._subMenuHolder.subject}canSwitchToNestedContentMode(){return!this.subMenuStrategy}onSubMenuShown(e){this.tryAddLogicalChild(e.targetElement),this._subMenuHolder.capture(e),this.shouldRestoreFocus=this.shouldRestoreFocus||C(this.targetElement)}onSubMenuClosed(e){this._subMenuHolder.subject===e&&this._subMenuHolder.release(),this.navigator.leaveDirection===a.None&&this.shouldRestoreFocus&&this.focusSelectedItem(),this.shouldRestoreFocus=!1,this.tryRemoveLogicalChild(e.targetElement)}tryAddLogicalChild(e){d(this.targetElement)&&h(e)&&(e.logicalParent||this.targetElement.addLogicalChild(e))}tryRemoveLogicalChild(e){d(this.targetElement)&&h(e)&&e.logicalParent===this.targetElement&&this.targetElement.removeLogicalChild(e)}waitSubMenuShown(){return this._subMenuHolder.waitCapture()}waitSubMenuClosed(){return this._subMenuHolder.waitRelease()}async focusSubMenuItemAsync(e){const t=await this.waitSubMenuShown();e===S.First?t.focusFirstItem():t.focusLastItem()}}export{j as D,E as K,b as M,v as P,p as S,y as a,S as b,C as c,_ as d,I as e,K as f,M as g,g as h,w as i,f as j};