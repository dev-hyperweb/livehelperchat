(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[4],{135:function(t,e,a){"use strict";a.r(e);var i,n=a(9),s=a.n(n),r=a(3),o=a.n(r),p=a(4),h=a.n(p),c=a(6),d=a.n(c),l=a(7),g=a.n(l),f=a(2),u=a.n(f),m=a(8),w=a.n(m),_=a(0),b=a.n(_),v=a(12),I=a(31),y=(a(49),a(13)),C=a(5),E=a(1),D=a(45);function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}var S=Object(v.b)((function(t){return{chatwidget:t.chatwidget}}))(i=function(t){function e(t){var a;return o()(this,e),(a=d()(this,g()(e).call(this,t))).state={},a.initOfflineFormCall(),a.handleSubmit=a.handleSubmit.bind(u()(a)),a.handleContentChange=a.handleContentChange.bind(u()(a)),a.handleContentChangeCustom=a.handleContentChangeCustom.bind(u()(a)),a.goToChat=a.goToChat.bind(u()(a)),a}return w()(e,t),h()(e,[{key:"initOfflineFormCall",value:function(t){this.props.dispatch(Object(C.h)({department:this.props.chatwidget.get("department"),theme:this.props.chatwidget.get("theme"),mode:this.props.chatwidget.get("mode"),bot_id:this.props.chatwidget.get("bot_id"),trigger_id:this.props.chatwidget.get("trigger_id"),online:0,dep_default:t||this.props.chatwidget.get("departmentDefault")||0}))}},{key:"handleSubmit",value:function(t){var e=this.state,a=!1,i=new FormData;void 0!==e.File&&(a=!0,i.append("File",e.File,e.File.name)),e.jsvar=this.props.chatwidget.get("jsVars"),e["captcha_"+this.props.chatwidget.getIn(["captcha","hash"])]=this.props.chatwidget.getIn(["captcha","ts"]),e.tscaptcha=this.props.chatwidget.getIn(["captcha","ts"]),e.user_timezone=E.a.getTimeZone(),e.URLRefer=window.location.href.substring(window.location.protocol.length),e.r=this.props.chatwidget.get("ses_ref"),""!=this.props.chatwidget.get("operator")&&(e.operator=this.props.chatwidget.get("operator")),null!==this.props.chatwidget.get("priority")&&(e.priority=this.props.chatwidget.get("priority"));var n=E.a.getCustomFieldsSubmit(this.props.chatwidget.getIn(["customData","fields"]));null!==n&&(e=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(Object(a),!0).forEach((function(e){s()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},e,{},n));var r={department:this.props.chatwidget.get("department"),theme:this.props.chatwidget.get("theme"),mode:this.props.chatwidget.get("mode"),vid:this.props.chatwidget.get("vid"),fields:e};a&&i.append("document",JSON.stringify(r)),this.props.dispatch(Object(C.o)(a?i:r)),t.preventDefault()}},{key:"handleContentChange",value:function(t){var e=this,a=this.state;a[t.id]=t.value,this.setState(a),"DepartamentID"==t.id&&this.props.chatwidget.getIn(["offlineData","department","departments"]).size>0&&this.props.chatwidget.getIn(["offlineData","department","departments"]).map((function(a){a.get("value")==t.value&&(1==a.get("online")&&(e.props.dispatch({type:"dep_default",data:t.value}),e.props.dispatch({type:"onlineStatus",data:!0})),e.props.chatwidget.getIn(["onlineData","dep_forms"])!=t.value&&e.initOfflineFormCall(t.value))}))}},{key:"componentDidMount",value:function(){E.a.prefillFields(this)}},{key:"handleContentChangeCustom",value:function(t){this.props.dispatch({type:"CUSTOM_FIELDS_ITEM",data:{id:t.field.get("index"),value:t.value}})}},{key:"goToChat",value:function(){this.props.dispatch({type:"attr_set",attr:["isOfflineMode"],data:!1})}},{key:"componentDidUpdate",value:function(t,e,a){if(document.getElementById("id-container-fluid")){var i=0;document.getElementById("widget-header-content")&&(i=document.getElementById("widget-header-content").offsetHeight),E.a.sendMessageParent("widgetHeight",[{height:document.getElementById("id-container-fluid").offsetHeight+i+10}])}}},{key:"render",value:function(){var t=this,e=this.props.t;if(!0===this.props.chatwidget.getIn(["offlineData","fetched"])&&!0===this.props.chatwidget.getIn(["offlineData","disabled"]))return b.a.createElement("div",{className:"alert alert-danger m-2",role:"alert"},e("start_chat.cant_start_a_chat"));if(!1===this.props.chatwidget.getIn(["offlineData","fetched"]))return null;if(this.props.chatwidget.getIn(["offlineData","fields"]).size>0)var a=this.props.chatwidget.getIn(["offlineData","fields"]).map((function(e){return b.a.createElement(I.a,{chatUI:t.props.chatwidget.get("chat_ui"),isInvalid:t.props.chatwidget.hasIn(["validationErrors",e.get("identifier")]),attrPrefill:{attr_prefill_admin:t.props.chatwidget.get("attr_prefill_admin"),attr_prefill:t.props.chatwidget.get("attr_prefill")},defaultValueField:t.state[e.get("name")]||e.get("value"),onChangeContent:t.handleContentChange,field:e})}));else a="";if(this.props.chatwidget.getIn(["customData","fields"]).size>0)var i=this.props.chatwidget.getIn(["customData","fields"]).map((function(e){return b.a.createElement(I.a,{chatUI:t.props.chatwidget.get("chat_ui"),key:e.get("identifier"),isInvalid:t.props.chatwidget.hasIn(["validationErrors",e.get("identifier")]),defaultValueField:e.get("value"),onChangeContent:t.handleContentChangeCustom,field:e})}));else i="";return 0==this.props.chatwidget.get("processStatus")||1==this.props.chatwidget.get("processStatus")?b.a.createElement("div",{id:"id-container-fluid"},this.props.chatwidget.get("leave_message")&&this.props.chatwidget.hasIn(["chat_ui","operator_profile"])&&""!=this.props.chatwidget.getIn(["chat_ui","operator_profile"])&&b.a.createElement("div",{className:"py-2 px-3 offline-intro-operator",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","operator_profile"])}}),this.props.chatwidget.get("leave_message")&&this.props.chatwidget.hasIn(["chat_ui","offline_intro"])&&""!=this.props.chatwidget.getIn(["chat_ui","offline_intro"])&&b.a.createElement("p",{className:"pb-1 mb-0 pt-2 px-3 font-weight-bold offline-intro",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","offline_intro"])}}),!this.props.chatwidget.get("leave_message")&&b.a.createElement("p",{className:"pb-1 mb-0 pt-2 px-3 font-weight-bold offline-intro"},this.props.chatwidget.getIn(["chat_ui","chat_unavailable"])),this.props.chatwidget.get("leave_message")&&b.a.createElement("div",{className:"container-fluid"},b.a.createElement("form",{onSubmit:this.handleSubmit,className:"offline-form"},b.a.createElement("div",{className:"row pt-2"},a,i,this.props.chatwidget.hasIn(["offlineData","department"])&&b.a.createElement(D.a,{defaultValueField:this.state.DepartamentID,setDefaultValue:this.props.chatwidget.get("departmentDefault"),onChangeContent:this.handleContentChange,isInvalid:this.props.chatwidget.hasIn(["validationErrors","department"]),departments:this.props.chatwidget.getIn(["offlineData","department"])})),(!this.props.chatwidget.hasIn(["chat_ui","hstr_btn"])||""!==i||""!==a)&&b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-12 pb-2"},b.a.createElement("button",{type:"submit",disabled:1==this.props.chatwidget.get("processStatus"),className:"btn btn-secondary btn-sm"},1==this.props.chatwidget.get("processStatus")&&b.a.createElement("i",{className:"material-icons"},""),this.props.chatwidget.getIn(["chat_ui","custom_start_button"])||e("start_chat.leave_a_message")),!0===this.props.chatwidget.get("isOnline")&&!0===this.props.chatwidget.get("isOfflineMode")&&b.a.createElement("button",{type:"button",onClick:this.goToChat,className:"float-right btn btn-sm btn-link text-muted"},"« ",e("button.back_to_chat"))))))):2==this.props.chatwidget.get("processStatus")?b.a.createElement("div",{id:"id-container-fluid"},this.props.chatwidget.hasIn(["chat_ui","operator_profile"])&&""!=this.props.chatwidget.getIn(["chat_ui","operator_profile"])&&b.a.createElement("div",{className:"py-2 px-3 offline-intro-operator",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","operator_profile"])}}),this.props.chatwidget.hasIn(["chat_ui","offline_intro"])&&""!=this.props.chatwidget.getIn(["chat_ui","offline_intro"])&&b.a.createElement("p",{className:"pb-1 mb-0 pt-2 px-3 font-weight-bold offline-intro",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","offline_intro"])}}),b.a.createElement("div",{className:"container-fluid"},b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-12"},b.a.createElement("p",{className:"pt-2"},this.props.chatwidget.getIn(["chat_ui","thank_feedback"])||e("start_chat.thank_you_for_feedback")))))):void 0}}]),e}(_.Component))||i;e.default=Object(y.b)()(S)}}]);
//# sourceMappingURL=4.7fa5ecf604af79005559.js.map