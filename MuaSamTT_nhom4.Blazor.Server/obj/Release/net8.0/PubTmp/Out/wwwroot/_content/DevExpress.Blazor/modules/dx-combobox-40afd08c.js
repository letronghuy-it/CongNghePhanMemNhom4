import{_ as e}from"./_tslib-6e8ca86b.js";import{b as t}from"./browser-d96520d8.js";import o from"./adaptivedropdowncomponents-1d8f3085.js";import{D as s}from"./dx-dropdown-base3-2fdad707.js";import{ListBoxSelectedItemsChangedEvent as r}from"./dx-listbox-6e425633.js";import{C as n}from"./custom-events-helper-e7f279d3.js";import{c as i}from"./constants-86572358.js";import{k as p}from"./key-f9cbed1b.js";import{E as a}from"./eventhelper-8570b930.js";import{T as m}from"./text-editor-2c313fd3.js";import{n as d}from"./property-4ec0b52d.js";import"./dropdowncomponents-4ccadb32.js";import"./dropdown-c4908e0b.js";import"./popup-1339ec31.js";import"./layouthelper-0c7c89da.js";import"./point-e4ec110e.js";import"./constants-791d6f9b.js";import"./rafaction-bba7928b.js";import"./screenhelper-cc818363.js";import"./transformhelper-ebad0156.js";import"./positiontracker-896b964e.js";import"./branch-e081818f.js";import"./custom-element-267f9a21.js";import"./lit-element-462e7ad3.js";import"./capturemanager-43e041e5.js";import"./focushelper-cb993bae.js";import"./logicaltreehelper-7b19cc30.js";import"./portal-8366b474.js";import"./data-qa-utils-8be7c726.js";import"./constants-058ebb50.js";import"./const-90026e45.js";import"./dx-html-element-pointer-events-helper-b4d2ae7e.js";import"./dom-da46d023.js";import"./common-f853e871.js";import"./devices-afeafb19.js";import"./dx-ui-element-822e6c84.js";import"./lit-element-base-32a69cc0.js";import"./dx-license-dd341102.js";import"./nameof-factory-64d95f5b.js";import"./focustrap-8a58142c.js";import"./keyboard-navigation-strategy-940ff3b3.js";import"./focus-utils-405a64a8.js";import"./touch-4bff3f51.js";import"./disposable-d2c2d283.js";import"./dom-utils-c35907a1.js";import"./css-classes-cee8476c.js";import"./thumb-c80aa4fc.js";import"./query-44b9267f.js";import"./popupportal-87b21a6c.js";import"./events-interseptor-35e91aec.js";import"./modalcomponents-1148ec67.js";import"./masked-input-16225991.js";import"./input-158e4fdf.js";import"./constants-9c7feb92.js";import"./single-slot-element-base-9e7a4622.js";class l extends CustomEvent{constructor(e,t,o,s){super(l.eventName,{detail:new u(e,t,o,s),bubbles:!0,composed:!0,cancelable:!0})}}l.eventName=i+".keydown";class c extends CustomEvent{constructor(e){super(c.eventName,{detail:new b(e),bubbles:!0,composed:!0,cancelable:!0})}}c.eventName=i+".keyup";class u{constructor(e,t,o,s){this.Key=e,this.AltKey=t,this.CtrlKey=o,this.Text=s}}class b{constructor(e){this.Key=e}}n.register(l.eventName,(e=>e.detail)),n.register(c.eventName,(e=>e.detail));class y extends s{constructor(){super(),this.boundOnDropDownSelectedItemsChangedHandler=this.onDropDownSelectedItemsChanged.bind(this),this.tabKeyPressed=!1,this.filteringEnabled=!1}get useMobileFocusBehaviour(){return t.Browser.MobileUI||super.useMobileFocusBehaviour}processKeyDownServerCommand(e){if(!this.requireSendKeyCommandToServer(e))return this.isToggleDropDownVisibilityKeyCommand(e);return this.dispatchEvent(new l(e.key,e.altKey,e.ctrlKey||e.metaKey,this.fieldElement?this.fieldElementValue:this.fieldText)),!0}processCapturedKeyDownAsync(e,t){return this.processKeyDownServerCommand(e)?(e.preventDefault(),t.handled=!0,Promise.resolve()):super.processCapturedKeyDownAsync(e,t)}processKeyDown(e){e.keyCode===p.KeyCode.Tab&&(this.tabKeyPressed=!0);return this.isDropDownOpen||this.processKeyDownServerCommand(e),super.processKeyDown(e)}processKeyUp(e){return e.keyCode!==p.KeyCode.Up&&e.keyCode!==p.KeyCode.Down||this.dispatchEvent(new c(e.key)),this.tabKeyPressed=!1,!1}raiseFocusOut(e){super.raiseFocusOut(e,this.tabKeyPressed)}onTextInput(e){this.inputElement&&(!this.isDropDownOpen&&e.data&&e.data.length>0&&this.toggleDropDownVisibility(),this.filteringEnabled&&(e.stopPropagation(),this.raiseFieldText()))}onTextChange(e){}onDropDownSelectedItemsChanged(e){e.stopPropagation();const t=e.target;null==t||t.scrollToFocusedItem(!1)}ensurePopupElement(){var e;super.ensurePopupElement(),null===(e=this.popupElement)||void 0===e||e.addEventListener(r.eventName,this.boundOnDropDownSelectedItemsChangedHandler)}disposePopupElement(){var e;null===(e=this.popupElement)||void 0===e||e.removeEventListener(r.eventName,this.boundOnDropDownSelectedItemsChangedHandler),super.disposePopupElement()}requireSendKeyCommandToServer(e){switch(e.keyCode){case p.KeyCode.Enter:case p.KeyCode.Esc:case p.KeyCode.Up:case p.KeyCode.Down:case p.KeyCode.PageUp:case p.KeyCode.PageDown:return!0;case p.KeyCode.Home:case p.KeyCode.End:return e.ctrlKey||e.metaKey}return!1}isToggleDropDownVisibilityKeyCommand(e){return(e.altKey||e.metaKey)&&("ArrowUp"===e.key||"ArrowDown"===e.key)}applyTextPropertyCore(){this.fieldElement&&(super.applyTextPropertyCore(),""===this.fieldText||this.allowInput||this.fieldElement.setSelectionRange(0,0))}processPointerDown(e){return a.containsInComposedPath(e,this.isEditBoxElement.bind(this))&&!this.isDropDownOpen&&this.toggleDropDownVisibility(),super.processPointerDown(e)}getFieldElement(){return this.querySelector(`.${m.TextEditInput}`)}}e([d({type:Boolean,attribute:"filtering-enabled"})],y.prototype,"filteringEnabled",void 0),customElements.define("dxbl-combobox",y);const h={loadModule:function(){},adaptiveDropdownComponents:o};export{y as DxComboBox,h as default};