(()=>{"use strict";var t={formClass:"popup__form",textInputClass:"popup__text-input",inputErrorClass:"popup__text-input_invalid",errorActiveClass:"popup__text-input-error_active",saveButtonClass:"popup__save-button",saveButtonInactiveClass:"popup__save-button_inactive"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,n);if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===e(i)?i:String(i)),r)}var i}var o=function(){function t(e,n,o,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardInfo=e,this._templateSelector=n,this._handleCardClick=o,this._deleteCardHandler=r,this._deletable=i}var e,o;return e=t,(o=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-gallery__element").cloneNode(!0)}},{key:"_likeBtnHandler",value:function(){this._buttonLike.classList.toggle("photo-gallery__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._deletable?this._buttonDelete.addEventListener("click",(function(){t._deleteCardHandler()})):this._buttonDelete.hidden=!0,this._buttonLike.addEventListener("click",(function(){t._likeBtnHandler()})),this._galleryPicture.addEventListener("click",(function(){t._handleCardClick()}))}},{key:"createCard",value:function(){return this._element=this._getCardTemplate(),this._buttonLike=this._element.querySelector(".photo-gallery__like-button"),this._galleryPicture=this._element.querySelector(".photo-gallery__picture"),this._buttonDelete=this._element.querySelector(".photo-gallery__delete"),this._likesCount=this._element.querySelector(".photo-gallery__like-count"),this._setEventListeners(),this._galleryPicture.src=this._cardInfo.link,this._galleryPicture.alt=this._cardInfo.name,this._element.querySelector(".photo-gallery__text").textContent=this._cardInfo.name,this._likesCount.textContent=this._cardInfo.likes.length,this._element}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===r(i)?i:String(i)),o)}var i}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._objValidate=e,this._form=document.querySelector(n),this._formButton=this._form.querySelector(".".concat(this._objValidate.saveButtonClass)),this._inputList=Array.from(this._form.querySelectorAll(".".concat(this._objValidate.textInputClass)))}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){t.classList.add(this._objValidate.inputErrorClass);var n=this._form.querySelector(".".concat(t.id,"-error"));n.classList.add(this._objValidate.errorActiveClass),n.textContent=e}},{key:"_hideError",value:function(t){t.classList.remove(this._objValidate.inputErrorClass);var e=this._form.querySelector(".".concat(t.id,"-error"));e.classList.remove(this._objValidate.errorActiveClass),e.textContent=""}},{key:"_toggleInputErrorState",value:function(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._formButton.classList.add(this._objValidate.saveButtonInactiveClass),this._formButton.setAttribute("disabled",!0)}},{key:"_enableButton",value:function(){this._formButton.classList.remove(this._objValidate.saveButtonInactiveClass),this._formButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"resetForm",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideError(e)}))}},{key:"enableValidation",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleInputErrorState(e),t._toggleButtonState()}))}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===a(r)?r:String(r)),o)}var r}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._escFunction=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escFunction)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escFunction)}},{key:"_handleEscClose",value:function(t){"Escape"==t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===s(r)?r:String(r)),o)}var r}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=y(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},p.apply(this,arguments)}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function m(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(o);if(r){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function u(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t))._submitFormHandler=e,o._popupForm=o._popup.querySelector(".popup__form"),o._inputsList=o._popup.querySelectorAll(".popup__text-input"),o._openPopupHandler=n,o}return e=u,(n=[{key:"getInputValues",value:function(){var t=this;return this._formData={},this._inputsList.forEach((function(e){t._formData[e.name]=e.value})),this._formData}},{key:"setEventListeners",value:function(){var t=this;p(v(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._submitFormHandler(),t.close()}))}},{key:"close",value:function(){p(v(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"open",value:function(){p(v(u.prototype),"open",this).call(this),this._openPopupHandler()}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===d(r)?r:String(r)),o)}var r}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=S(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},g.apply(this,arguments)}function S(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function j(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(o);if(r){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._openedPicture=e._popup.querySelector(".popup__image"),e._popupCaption=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){g(k(u.prototype),"open",this).call(this),this._openedPicture.src=t,this._openedPicture.alt=e,this._popupCaption.textContent=e}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==P(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===P(r)?r:String(r)),o)}var r}var O=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=o,this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this.items.forEach((function(e){t._renderer(e)}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===L(r)?r:String(r)),o)}var r}var T=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(e),this._statusElement=document.querySelector(n)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,status:this._statusElement.textContent}}},{key:"setUserInfo",value:function(t,e){this._nameElement.textContent=t,this._statusElement.textContent=e}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!==B(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===B(r)?r:String(r)),o)}var r}var x=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e}var e,n;return e=t,(n=[{key:"getUser",value:function(){return fetch("".concat(this._options.baseUrl,"/users/me"),{headers:{authorization:this._options.headers.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editUser",value:function(t){return fetch("".concat(this._options.baseUrl,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:this._options.headers.authorization},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._options.baseUrl,"/cards"),{headers:{authorization:this._options.headers.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"postCard",value:function(t){return fetch("".concat(this._options.baseUrl,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",authorization:this._options.headers.authorization},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._options.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._options.headers.authorization}})}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"53cfd87d-4664-4b5c-8360-0fdacb6bc4ed"}}),R=new T(".profile__name",".profile__status");x.getUser().then((function(t){R.setUserInfo(t.name,t.about)})).catch((function(t){console.log(t)}));var F=new u(t,".popup_edit .popup__form");F.enableValidation(),F.resetForm();var U=new b(".popup_edit",(function(){var t=U.getInputValues();x.editUser(t).then((function(t){R.setUserInfo(t.name,t.about)})).catch((function(t){console.log(t)}))}),(function(){var t=R.getUserInfo();U._popupForm.elements.name.value=t.name,U._popupForm.elements.about.value=t.status,F.resetForm()}));U.setEventListeners(),document.querySelector(".profile__edit-button").addEventListener("click",(function(){U.open()}));var V=new b(".popup_delete",(function(){x.deleteCard(V.cardId).then((function(t){if(!t.ok)return Promise.reject("Ошибка");V.cardElement.remove()})).catch((function(t){console.log(t)}))}),(function(){}));function D(t,e){var n=new o(t,"#photo-gallery__element",(function(){z.open(t.link,t.name)}),(function(){V.open(),V.cardId=n._cardInfo._id,V.cardElement=n._element}),e);return n.createCard()}var z=new E(".popup_picture");z.setEventListeners();var A=new O({items:[],renderer:function(t){A.addItem(D(t,!1))}},".photo-gallery");x.getInitialCards().then((function(t){A.items=t,A.renderItems()})).catch((function(t){console.log(t)}));var H=new u(t,".popup_add-card .popup__form");H.enableValidation(),H.resetForm();var N=new b(".popup_add-card",(function(){var t=N.getInputValues();x.postCard(t).then((function(t){A.addItem(D(t,!0))})).catch((function(t){console.log(t)}))}),(function(){H.resetForm()}));N.setEventListeners(),document.querySelector(".profile__add-button").addEventListener("click",(function(){N.open()}))})();