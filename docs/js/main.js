(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * SSR Window 4.0.2
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: December 13, 2021
   */

  /* eslint-disable no-param-reassign */
  function isObject(obj) {
    return obj !== null && _typeof(obj) === 'object' && 'constructor' in obj && obj.constructor === Object;
  }

  function extend() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }

  var ssrDocument = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };

  function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }

  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }

      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }

      clearTimeout(id);
    }
  };

  function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  /* eslint-disable no-proto */

  function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
      get: function get() {
        return proto;
      },
      set: function set(value) {
        proto.__proto__ = value;
      }
    });
  }

  var Dom7 = /*#__PURE__*/function (_Array) {
    _inherits(Dom7, _Array);

    var _super = _createSuper(Dom7);

    function Dom7(items) {
      var _this;

      _classCallCheck(this, Dom7);

      if (typeof items === 'number') {
        _this = _super.call(this, items);
      } else {
        _this = _super.call.apply(_super, [this].concat(_toConsumableArray(items || [])));
        makeReactive(_assertThisInitialized(_this));
      }

      return _possibleConstructorReturn(_this);
    }

    return Dom7;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function arrayFlat() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var res = [];
    arr.forEach(function (el) {
      if (Array.isArray(el)) {
        res.push.apply(res, _toConsumableArray(arrayFlat(el)));
      } else {
        res.push(el);
      }
    });
    return res;
  }

  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }

  function arrayUnique(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }

    return uniqueArray;
  }

  function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, function (match, group) {
      return group.toUpperCase();
    });
  } // eslint-disable-next-line


  function qsa(selector, context) {
    if (typeof selector !== 'string') {
      return [selector];
    }

    var a = [];
    var res = context.querySelectorAll(selector);

    for (var i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }

    return a;
  }

  function $(selector, context) {
    var window = getWindow();
    var document = getDocument();
    var arr = [];

    if (!context && selector instanceof Dom7) {
      return selector;
    }

    if (!selector) {
      return new Dom7(arr);
    }

    if (typeof selector === 'string') {
      var _html = selector.trim();

      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        var tempParent = document.createElement(toCreate);
        tempParent.innerHTML = _html;

        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document);
      } // arr = qsa(selector, document);

    } else if (selector.nodeType || selector === window || selector === document) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7) return selector;
      arr = selector;
    }

    return new Dom7(arrayUnique(arr));
  }

  $.fn = Dom7.prototype; // eslint-disable-next-line

  function addClass() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
    });
    return this;
  }

  function removeClass() {
    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classes[_key2] = arguments[_key2];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classNames));
    });
    return this;
  }

  function toggleClass() {
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      classNames.forEach(function (className) {
        el.classList.toggle(className);
      });
    });
  }

  function hasClass() {
    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      classes[_key4] = arguments[_key4];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    return arrayFilter(this, function (el) {
      return classNames.filter(function (className) {
        return el.classList.contains(className);
      }).length > 0;
    }).length > 0;
  }

  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) return this[0].getAttribute(attrs);
      return undefined;
    } // Set attrs


    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }

    return this;
  }

  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }

    return this;
  }

  function prop(props, value) {
    if (arguments.length === 1 && typeof props === 'string') {
      // Get prop
      if (this[0]) return this[0][props];
    } else {
      // Set props
      for (var i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i][props] = value;
        } else {
          // Object
          for (var propName in props) {
            this[i][propName] = props[propName];
          }
        }
      }

      return this;
    }

    return this;
  }

  function data(key, value) {
    var el;

    if (typeof value === 'undefined') {
      el = this[0];
      if (!el) return undefined; // Get value

      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute("data-".concat(key));

      if (dataKey) {
        return dataKey;
      }

      return undefined;
    } // Set value


    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
      el.dom7ElementDataStorage[key] = value;
    }

    return this;
  }

  function removeData(key) {
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
        el.dom7ElementDataStorage[key] = null;
        delete el.dom7ElementDataStorage[key];
      }
    }
  }

  function dataset() {
    var el = this[0];
    if (!el) return undefined;
    var dataset = {}; // eslint-disable-line

    if (el.dataset) {
      for (var dataKey in el.dataset) {
        dataset[dataKey] = el.dataset[dataKey];
      }
    } else {
      for (var i = 0; i < el.attributes.length; i += 1) {
        var _attr = el.attributes[i];

        if (_attr.name.indexOf('data-') >= 0) {
          dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
        }
      }
    }

    for (var key in dataset) {
      if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
    }

    return dataset;
  }

  function val(value) {
    if (typeof value === 'undefined') {
      // get value
      var el = this[0];
      if (!el) return undefined;

      if (el.multiple && el.nodeName.toLowerCase() === 'select') {
        var values = [];

        for (var i = 0; i < el.selectedOptions.length; i += 1) {
          values.push(el.selectedOptions[i].value);
        }

        return values;
      }

      return el.value;
    } // set value


    for (var _i = 0; _i < this.length; _i += 1) {
      var _el = this[_i];

      if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
        for (var j = 0; j < _el.options.length; j += 1) {
          _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
        }
      } else {
        _el.value = value;
      }
    }

    return this;
  }

  function value(value) {
    return this.val(value);
  }

  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform;
    }

    return this;
  }

  function transition(duration) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration = typeof duration !== 'string' ? "".concat(duration, "ms") : duration;
    }

    return this;
  }

  function on() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) return;
      var eventData = e.target.dom7EventData || [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
        var _parents = $(target).parents(); // eslint-disable-line


        for (var k = 0; k < _parents.length; k += 1) {
          if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
        }
      }
    }

    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      listener.apply(this, eventData);
    }

    var events = eventType.split(' ');
    var j;

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var _event = events[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

          el.dom7LiveListeners[_event].push({
            listener: listener,
            proxyListener: handleLiveEvent
          });

          el.addEventListener(_event, handleLiveEvent, capture);
        }
      }
    }

    return this;
  }

  function off() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;
    var events = eventType.split(' ');

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;

        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }

        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];

            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }

    return this;
  }

  function once() {
    var dom = this;

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    var eventName = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventName = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    function onceHandler() {
      for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        eventArgs[_key8] = arguments[_key8];
      }

      listener.apply(this, eventArgs);
      dom.off(eventName, targetSelector, onceHandler, capture);

      if (onceHandler.dom7proxy) {
        delete onceHandler.dom7proxy;
      }
    }

    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
  }

  function trigger() {
    var window = getWindow();

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    var events = args[0].split(' ');
    var eventData = args[1];

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];

        if (window.CustomEvent) {
          var evt = new window.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter(function (data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }

    return this;
  }

  function transitionStart(callback) {
    var dom = this;

    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off('transitionstart', fireCallBack);
    }

    if (callback) {
      dom.on('transitionstart', fireCallBack);
    }

    return this;
  }

  function transitionEnd(callback) {
    var dom = this;

    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off('transitionend', fireCallBack);
    }

    if (callback) {
      dom.on('transitionend', fireCallBack);
    }

    return this;
  }

  function animationEnd(callback) {
    var dom = this;

    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off('animationend', fireCallBack);
    }

    if (callback) {
      dom.on('animationend', fireCallBack);
    }

    return this;
  }

  function width() {
    var window = getWindow();

    if (this[0] === window) {
      return window.innerWidth;
    }

    if (this.length > 0) {
      return parseFloat(this.css('width'));
    }

    return null;
  }

  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles = this.styles();

        return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
      }

      return this[0].offsetWidth;
    }

    return null;
  }

  function height() {
    var window = getWindow();

    if (this[0] === window) {
      return window.innerHeight;
    }

    if (this.length > 0) {
      return parseFloat(this.css('height'));
    }

    return null;
  }

  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles2 = this.styles();

        return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
      }

      return this[0].offsetHeight;
    }

    return null;
  }

  function offset() {
    if (this.length > 0) {
      var window = getWindow();
      var document = getDocument();
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = document.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;

      var _scrollTop = el === window ? window.scrollY : el.scrollTop;

      var _scrollLeft = el === window ? window.scrollX : el.scrollLeft;

      return {
        top: box.top + _scrollTop - clientTop,
        left: box.left + _scrollLeft - clientLeft
      };
    }

    return null;
  }

  function hide() {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.display = 'none';
    }

    return this;
  }

  function show() {
    var window = getWindow();

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (el.style.display === 'none') {
        el.style.display = '';
      }

      if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
        // Still not visible
        el.style.display = 'block';
      }
    }

    return this;
  }

  function styles() {
    var window = getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
  }

  function css(props, value) {
    var window = getWindow();
    var i;

    if (arguments.length === 1) {
      if (typeof props === 'string') {
        // .css('width')
        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        // .css({ width: '100px' })
        for (i = 0; i < this.length; i += 1) {
          for (var _prop in props) {
            this[i].style[_prop] = props[_prop];
          }
        }

        return this;
      }
    }

    if (arguments.length === 2 && typeof props === 'string') {
      // .css('width', '100px')
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }

      return this;
    }

    return this;
  }

  function each(callback) {
    if (!callback) return this;
    this.forEach(function (el, index) {
      callback.apply(el, [el, index]);
    });
    return this;
  }

  function filter(callback) {
    var result = arrayFilter(this, callback);
    return $(result);
  }

  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }

    return this;
  }

  function text(text) {
    if (typeof text === 'undefined') {
      return this[0] ? this[0].textContent.trim() : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }

    return this;
  }

  function is(selector) {
    var window = getWindow();
    var document = getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') return false;

    if (typeof selector === 'string') {
      if (el.matches) return el.matches(selector);
      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector) return el.msMatchesSelector(selector);
      compareWith = $(selector);

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    if (selector === document) {
      return el === document;
    }

    if (selector === window) {
      return el === window;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    return false;
  }

  function index() {
    var child = this[0];
    var i;

    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }

      return i;
    }

    return undefined;
  }

  function eq(index) {
    if (typeof index === 'undefined') return this;
    var length = this.length;

    if (index > length - 1) {
      return $([]);
    }

    if (index < 0) {
      var returnIndex = length + index;
      if (returnIndex < 0) return $([]);
      return $([this[returnIndex]]);
    }

    return $([this[index]]);
  }

  function append() {
    var newChild;
    var document = getDocument();

    for (var k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }

  function appendTo(parent) {
    $(parent).append(this);
    return this;
  }

  function prepend(newChild) {
    var document = getDocument();
    var i;
    var j;

    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }

    return this;
  }

  function prependTo(parent) {
    $(parent).prepend(this);
    return this;
  }

  function insertBefore(selector) {
    var before = $(selector);

    for (var i = 0; i < this.length; i += 1) {
      if (before.length === 1) {
        before[0].parentNode.insertBefore(this[i], before[0]);
      } else if (before.length > 1) {
        for (var j = 0; j < before.length; j += 1) {
          before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
        }
      }
    }
  }

  function insertAfter(selector) {
    var after = $(selector);

    for (var i = 0; i < this.length; i += 1) {
      if (after.length === 1) {
        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
      } else if (after.length > 1) {
        for (var j = 0; j < after.length; j += 1) {
          after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
        }
      }
    }
  }

  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }

        return $([]);
      }

      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.nextElementSibling) {
      var _next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_next).is(selector)) nextEls.push(_next);
      } else nextEls.push(_next);

      el = _next;
    }

    return $(nextEls);
  }

  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];

      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }

        return $([]);
      }

      if (el.previousElementSibling) return $([el.previousElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.previousElementSibling) {
      var _prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_prev).is(selector)) prevEls.push(_prev);
      } else prevEls.push(_prev);

      el = _prev;
    }

    return $(prevEls);
  }

  function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
  }

  function parent(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }

    return $(parents);
  }

  function parents(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var _parent = this[i].parentNode; // eslint-disable-line

      while (_parent) {
        if (selector) {
          if ($(_parent).is(selector)) parents.push(_parent);
        } else {
          parents.push(_parent);
        }

        _parent = _parent.parentNode;
      }
    }

    return $(parents);
  }

  function closest(selector) {
    var closest = this; // eslint-disable-line

    if (typeof selector === 'undefined') {
      return $([]);
    }

    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }

    return closest;
  }

  function find(selector) {
    var foundElements = [];

    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);

      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }

    return $(foundElements);
  }

  function children(selector) {
    var children = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].children;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }

    return $(children);
  }

  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }

    return this;
  }

  function detach() {
    return this.remove();
  }

  function add() {
    var dom = this;
    var i;
    var j;

    for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      els[_key10] = arguments[_key10];
    }

    for (i = 0; i < els.length; i += 1) {
      var toAdd = $(els[i]);

      for (j = 0; j < toAdd.length; j += 1) {
        dom.push(toAdd[j]);
      }
    }

    return dom;
  }

  function empty() {
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (el.nodeType === 1) {
        for (var j = 0; j < el.childNodes.length; j += 1) {
          if (el.childNodes[j].parentNode) {
            el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
          }
        }

        el.textContent = '';
      }
    }

    return this;
  } // eslint-disable-next-line


  function scrollTo() {
    var window = getWindow();

    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    var left = args[0],
        top = args[1],
        duration = args[2],
        easing = args[3],
        callback = args[4];

    if (args.length === 4 && typeof easing === 'function') {
      callback = easing;
      left = args[0];
      top = args[1];
      duration = args[2];
      callback = args[3];
      easing = args[4];
    }

    if (typeof easing === 'undefined') easing = 'swing';
    return this.each(function animate() {
      var el = this;
      var currentTop;
      var currentLeft;
      var maxTop;
      var maxLeft;
      var newTop;
      var newLeft;
      var scrollTop; // eslint-disable-line

      var scrollLeft; // eslint-disable-line

      var animateTop = top > 0 || top === 0;
      var animateLeft = left > 0 || left === 0;

      if (typeof easing === 'undefined') {
        easing = 'swing';
      }

      if (animateTop) {
        currentTop = el.scrollTop;

        if (!duration) {
          el.scrollTop = top;
        }
      }

      if (animateLeft) {
        currentLeft = el.scrollLeft;

        if (!duration) {
          el.scrollLeft = left;
        }
      }

      if (!duration) return;

      if (animateTop) {
        maxTop = el.scrollHeight - el.offsetHeight;
        newTop = Math.max(Math.min(top, maxTop), 0);
      }

      if (animateLeft) {
        maxLeft = el.scrollWidth - el.offsetWidth;
        newLeft = Math.max(Math.min(left, maxLeft), 0);
      }

      var startTime = null;
      if (animateTop && newTop === currentTop) animateTop = false;
      if (animateLeft && newLeft === currentLeft) animateLeft = false;

      function render() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

        if (startTime === null) {
          startTime = time;
        }

        var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
        var done;
        if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
        if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

        if (animateTop && newTop > currentTop && scrollTop >= newTop) {
          el.scrollTop = newTop;
          done = true;
        }

        if (animateTop && newTop < currentTop && scrollTop <= newTop) {
          el.scrollTop = newTop;
          done = true;
        }

        if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
          el.scrollLeft = newLeft;
          done = true;
        }

        if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
          el.scrollLeft = newLeft;
          done = true;
        }

        if (done) {
          if (callback) callback();
          return;
        }

        if (animateTop) el.scrollTop = scrollTop;
        if (animateLeft) el.scrollLeft = scrollLeft;
        window.requestAnimationFrame(render);
      }

      window.requestAnimationFrame(render);
    });
  } // scrollTop(top, duration, easing, callback) {


  function scrollTop() {
    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    var top = args[0],
        duration = args[1],
        easing = args[2],
        callback = args[3];

    if (args.length === 3 && typeof easing === 'function') {
      top = args[0];
      duration = args[1];
      callback = args[2];
      easing = args[3];
    }

    var dom = this;

    if (typeof top === 'undefined') {
      if (dom.length > 0) return dom[0].scrollTop;
      return null;
    }

    return dom.scrollTo(undefined, top, duration, easing, callback);
  }

  function scrollLeft() {
    for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      args[_key13] = arguments[_key13];
    }

    var left = args[0],
        duration = args[1],
        easing = args[2],
        callback = args[3];

    if (args.length === 3 && typeof easing === 'function') {
      left = args[0];
      duration = args[1];
      callback = args[2];
      easing = args[3];
    }

    var dom = this;

    if (typeof left === 'undefined') {
      if (dom.length > 0) return dom[0].scrollLeft;
      return null;
    }

    return dom.scrollTo(left, undefined, duration, easing, callback);
  } // eslint-disable-next-line


  function animate(initialProps, initialParams) {
    var window = getWindow();
    var els = this;
    var a = {
      props: Object.assign({}, initialProps),
      params: Object.assign({
        duration: 300,
        easing: 'swing' // or 'linear'

        /* Callbacks
        begin(elements)
        complete(elements)
        progress(elements, complete, remaining, start, tweenValue)
        */

      }, initialParams),
      elements: els,
      animating: false,
      que: [],
      easingProgress: function easingProgress(easing, progress) {
        if (easing === 'swing') {
          return 0.5 - Math.cos(progress * Math.PI) / 2;
        }

        if (typeof easing === 'function') {
          return easing(progress);
        }

        return progress;
      },
      stop: function stop() {
        if (a.frameId) {
          window.cancelAnimationFrame(a.frameId);
        }

        a.animating = false;
        a.elements.each(function (el) {
          var element = el;
          delete element.dom7AnimateInstance;
        });
        a.que = [];
      },
      done: function done(complete) {
        a.animating = false;
        a.elements.each(function (el) {
          var element = el;
          delete element.dom7AnimateInstance;
        });
        if (complete) complete(els);

        if (a.que.length > 0) {
          var que = a.que.shift();
          a.animate(que[0], que[1]);
        }
      },
      animate: function animate(props, params) {
        if (a.animating) {
          a.que.push([props, params]);
          return a;
        }

        var elements = []; // Define & Cache Initials & Units

        a.elements.each(function (el, index) {
          var initialFullValue;
          var initialValue;
          var unit;
          var finalValue;
          var finalFullValue;
          if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
          elements[index] = {
            container: el
          };
          Object.keys(props).forEach(function (prop) {
            initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
            initialValue = parseFloat(initialFullValue);
            unit = initialFullValue.replace(initialValue, '');
            finalValue = parseFloat(props[prop]);
            finalFullValue = props[prop] + unit;
            elements[index][prop] = {
              initialFullValue: initialFullValue,
              initialValue: initialValue,
              unit: unit,
              finalValue: finalValue,
              finalFullValue: finalFullValue,
              currentValue: initialValue
            };
          });
        });
        var startTime = null;
        var time;
        var elementsDone = 0;
        var propsDone = 0;
        var done;
        var began = false;
        a.animating = true;

        function render() {
          time = new Date().getTime();
          var progress;
          var easeProgress; // let el;

          if (!began) {
            began = true;
            if (params.begin) params.begin(els);
          }

          if (startTime === null) {
            startTime = time;
          }

          if (params.progress) {
            // eslint-disable-next-line
            params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
          }

          elements.forEach(function (element) {
            var el = element;
            if (done || el.done) return;
            Object.keys(props).forEach(function (prop) {
              if (done || el.done) return;
              progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
              easeProgress = a.easingProgress(params.easing, progress);
              var _el$prop = el[prop],
                  initialValue = _el$prop.initialValue,
                  finalValue = _el$prop.finalValue,
                  unit = _el$prop.unit;
              el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
              var currentValue = el[prop].currentValue;

              if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                el.container.style[prop] = finalValue + unit;
                propsDone += 1;

                if (propsDone === Object.keys(props).length) {
                  el.done = true;
                  elementsDone += 1;
                }

                if (elementsDone === elements.length) {
                  done = true;
                }
              }

              if (done) {
                a.done(params.complete);
                return;
              }

              el.container.style[prop] = currentValue + unit;
            });
          });
          if (done) return; // Then call

          a.frameId = window.requestAnimationFrame(render);
        }

        a.frameId = window.requestAnimationFrame(render);
        return a;
      }
    };

    if (a.elements.length === 0) {
      return els;
    }

    var animateInstance;

    for (var i = 0; i < a.elements.length; i += 1) {
      if (a.elements[i].dom7AnimateInstance) {
        animateInstance = a.elements[i].dom7AnimateInstance;
      } else a.elements[i].dom7AnimateInstance = a;
    }

    if (!animateInstance) {
      animateInstance = a;
    }

    if (initialProps === 'stop') {
      animateInstance.stop();
    } else {
      animateInstance.animate(a.props, a.params);
    }

    return els;
  }

  function stop() {
    var els = this;

    for (var i = 0; i < els.length; i += 1) {
      if (els[i].dom7AnimateInstance) {
        els[i].dom7AnimateInstance.stop();
      }
    }
  }

  var noTrigger = 'resize scroll'.split(' ');

  function shortcut(name) {
    function eventHandler() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      if (typeof args[0] === 'undefined') {
        for (var i = 0; i < this.length; i += 1) {
          if (noTrigger.indexOf(name) < 0) {
            if (name in this[i]) this[i][name]();else {
              $(this[i]).trigger(name);
            }
          }
        }

        return this;
      }

      return this.on.apply(this, [name].concat(args));
    }

    return eventHandler;
  }

  var click = shortcut('click');
  var blur = shortcut('blur');
  var focus = shortcut('focus');
  var focusin = shortcut('focusin');
  var focusout = shortcut('focusout');
  var keyup = shortcut('keyup');
  var keydown = shortcut('keydown');
  var keypress = shortcut('keypress');
  var submit = shortcut('submit');
  var change = shortcut('change');
  var mousedown = shortcut('mousedown');
  var mousemove = shortcut('mousemove');
  var mouseup = shortcut('mouseup');
  var mouseenter = shortcut('mouseenter');
  var mouseleave = shortcut('mouseleave');
  var mouseout = shortcut('mouseout');
  var mouseover = shortcut('mouseover');
  var touchstart = shortcut('touchstart');
  var touchend = shortcut('touchend');
  var touchmove = shortcut('touchmove');
  var resize = shortcut('resize');
  var scroll = shortcut('scroll');

  var methods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': $,
    $: $,
    add: add,
    addClass: addClass,
    animate: animate,
    animationEnd: animationEnd,
    append: append,
    appendTo: appendTo,
    attr: attr,
    blur: blur,
    change: change,
    children: children,
    click: click,
    closest: closest,
    css: css,
    data: data,
    dataset: dataset,
    detach: detach,
    each: each,
    empty: empty,
    eq: eq,
    filter: filter,
    find: find,
    focus: focus,
    focusin: focusin,
    focusout: focusout,
    hasClass: hasClass,
    height: height,
    hide: hide,
    html: html,
    index: index,
    insertAfter: insertAfter,
    insertBefore: insertBefore,
    is: is,
    keydown: keydown,
    keypress: keypress,
    keyup: keyup,
    mousedown: mousedown,
    mouseenter: mouseenter,
    mouseleave: mouseleave,
    mousemove: mousemove,
    mouseout: mouseout,
    mouseover: mouseover,
    mouseup: mouseup,
    next: next,
    nextAll: nextAll,
    off: off,
    offset: offset,
    on: on,
    once: once,
    outerHeight: outerHeight,
    outerWidth: outerWidth,
    parent: parent,
    parents: parents,
    prepend: prepend,
    prependTo: prependTo,
    prev: prev,
    prevAll: prevAll,
    prop: prop,
    remove: remove,
    removeAttr: removeAttr,
    removeClass: removeClass,
    removeData: removeData,
    resize: resize,
    scroll: scroll,
    scrollLeft: scrollLeft,
    scrollTo: scrollTo,
    scrollTop: scrollTop,
    show: show,
    siblings: siblings,
    stop: stop,
    styles: styles,
    submit: submit,
    text: text,
    toggleClass: toggleClass,
    touchend: touchend,
    touchmove: touchmove,
    touchstart: touchstart,
    transform: transform,
    transition: transition,
    transitionEnd: transitionEnd,
    transitionStart: transitionStart,
    trigger: trigger,
    val: val,
    value: value,
    width: width
  });

  function initDocsSearch() {
    var el = document.querySelector('.nav-searchbar');
    if (!el) return;
    window.docsearch({
      appId: 'YB5TAATZXA',
      apiKey: 'a9134905fd5c74ffaff32d328b22c5c9',
      indexName: 'framework7',
      container: '.nav-searchbar',
      debug: false // Set debug to true if you want to inspect the modal

    });
  }

  var demoDevicePreviewLink;

  function handleDeviceScroll() {
    var st = window.scrollY;
    var firstPreviewPosition = $('[data-device-preview]').eq(0).offset().top + st;
    var device = $('.docs-demo-device:not(.docs-inline-device)');
    device.addClass('visible');
    var deviceStartOffset = device.parent().offset().top + st;
    var devicePosition = deviceStartOffset;

    if (devicePosition < firstPreviewPosition - deviceStartOffset) {
      devicePosition = firstPreviewPosition - deviceStartOffset;
    }

    if (devicePosition + device.outerHeight() > device.parent().outerHeight()) {
      devicePosition = device.parent().outerHeight() - device.outerHeight();
    }

    var stopPosition;
    var stopPositionStopScrollDevice;
    var stopPositionPageNav;
    var stopPositionContent = $('.docs-content .with-device').offset().top + $('.docs-content .with-device').outerHeight() + st - deviceStartOffset;

    if ($('.stop-scroll-device').length > 0) {
      stopPositionStopScrollDevice = $('.stop-scroll-device').offset().top + st - deviceStartOffset;
    }

    if ($('.docs-page-nav').length > 0) {
      stopPositionPageNav = $('.docs-page-nav').offset().top - $('.docs-page-nav')[0].offsetHeight + st - deviceStartOffset;
    }

    stopPosition = Math.min.apply(Math, _toConsumableArray([stopPositionStopScrollDevice, stopPositionPageNav, stopPositionContent].filter(function (pos) {
      return !!pos;
    })));

    if (stopPosition) {
      stopPosition -= device.outerHeight();
    }

    if (stopPosition && devicePosition >= stopPosition) {
      devicePosition = stopPosition;
    }

    if (st + deviceStartOffset > devicePosition) devicePosition = st - deviceStartOffset;
    if (devicePosition > stopPosition) devicePosition = stopPosition;

    if (devicePosition < firstPreviewPosition - deviceStartOffset) {
      devicePosition = firstPreviewPosition - deviceStartOffset;
    }

    device.transform("translateY(".concat(devicePosition, "px)"));
    var newPreviewLink;
    $('[data-device-preview]').each(function forEach() {
      var link = $(this);

      if (link.offset().top < $(window).height() / 2) {
        newPreviewLink = link.attr('data-device-preview');
      }
    });
    if (!newPreviewLink) newPreviewLink = $('[data-device-preview]').eq(0).attr('data-device-preview');

    if (newPreviewLink !== demoDevicePreviewLink) {
      demoDevicePreviewLink = newPreviewLink;
      device.find('.fade-overlay').addClass('visible');
      var onLoadTriggerd;
      var iframeEl = device.find('iframe')[0];
      var theme = device.find('.docs-demo-device-theme-buttons a.active').attr('data-theme');
      var mode = device.find('.docs-demo-device-mode-buttons a.active').attr('data-mode');

      iframeEl.onload = function onload() {
        onLoadTriggerd = true;

        if (mode === 'dark') {
          iframeEl.contentDocument.documentElement.classList.add('dark');
        }

        setTimeout(function () {
          device.find('.fade-overlay').removeClass('visible');
        }, 300);
      };

      setTimeout(function () {
        if (!onLoadTriggerd) {
          device.find('.fade-overlay').removeClass('visible');
        }
      }, 1000);
      device.find('iframe').attr('src', "".concat(newPreviewLink).concat(theme ? "?theme=".concat(theme) : ''));
    }
  }

  function initDocsDevice() {
    if ($('.docs-content .with-device').length > 0) {
      $(window).on('resize', function () {
        handleDeviceScroll();
      });
      $(window).on('scroll', function () {
        handleDeviceScroll();
      });
      handleDeviceScroll();
    }

    if ($('.docs-demo-device').length > 0) {
      $('.docs-demo-device-theme-buttons a').on('click', function onClick(e) {
        e.preventDefault();
        var a = $(this);
        if (a.hasClass('active')) return;
        a.parent().find('.active').removeClass('active');
        a.addClass('active');
        var device = a.parents('.docs-demo-device');
        var theme = a.attr('data-theme');
        var $iframeEl = device.find('iframe');
        var src = $iframeEl.attr('src');
        var mode = device.find('.docs-demo-device-mode-buttons a.active').attr('data-mode');
        device.find('.fade-overlay').addClass('visible');
        $iframeEl.once('load', function () {
          if (mode === 'dark') {
            $iframeEl[0].contentDocument.documentElement.classList.add('dark');
          }

          setTimeout(function () {
            device.find('.fade-overlay').removeClass('visible');
          }, 300);
        });
        $iframeEl.attr('src', "".concat(src.split('?')[0], "?theme=").concat(theme));
      });
      $('.docs-demo-device-mode-buttons a').on('click', function onClick(e) {
        e.preventDefault();
        var a = $(this);
        if (a.hasClass('active')) return;
        a.parent().find('.active').removeClass('active');
        a.addClass('active');
        var device = a.parents('.docs-demo-device');
        var mode = a.attr('data-mode');
        var iframeEl = device.find('iframe')[0];

        if (mode === 'dark') {
          iframeEl.contentDocument.documentElement.classList.add('dark');
        } else {
          iframeEl.contentDocument.documentElement.classList.remove('dark');
        }
      });
    }
  }

  function findPrevLink(current) {
    var prev = current.prev('li');

    if (!prev.length) {
      prev = current.parents('li').prev('li').find('li:last-child');
    }

    if (prev && prev.length && prev.find('a').attr('href') && prev.find('a').attr('href').indexOf('#') >= 0) {
      prev = findPrevLink(prev);
    }

    return prev;
  }

  function findNextLink(current) {
    var next = current.next('li');

    if (!next.length) {
      next = current.parents('li').next('li').find('li:first-child');
    }

    if (next && next.length && next.find('a').attr('href') && next.find('a').attr('href').indexOf('#') >= 0) {
      next = findNextLink(next);
    }

    return next;
  }

  function initDocsNav() {
    if ($('.docs-nav').length > 0) {
      var loc = document.location.href;
      var originalLoc = loc;
      if (loc.indexOf('?') >= 0) loc = loc.split('?')[0];
      if (loc.indexOf('#') >= 0) loc = loc.split('#')[0];

      if (loc.indexOf('/') >= 0) {
        loc = loc.split('/');
        loc = loc[loc.length - 1];
      }

      if (!loc) {
        loc = document.location.href;
        loc = loc.split(document.location.host)[1];
      }

      if ($('.docs-nav-frameworks').length > 0) {
        if (originalLoc.includes('/docs/')) {
          $('.docs-nav-frameworks a[href="/docs/"]').addClass('active');
        } else if (originalLoc.includes('/react/')) {
          $('.docs-nav-frameworks a[href="/react/"]').addClass('active');
        } else if (originalLoc.includes('/vue/')) {
          $('.docs-nav-frameworks a[href="/vue/"]').addClass('active');
        } else if (originalLoc.includes('/svelte/')) {
          $('.docs-nav-frameworks a[href="/svelte/"]').addClass('active');
        }
      }

      var $activeListItem;
      $('.docs-nav a').each(function forEach() {
        var link = $(this).attr('href');

        if ((loc === link || loc === link.replace('.html', '')) && link !== '#') {
          $activeListItem = $(this).parent('li');
          $(this).addClass('active').parent('li').addClass('active');
        }
      });
      $('.docs-nav-toggle, .docs-nav-backdrop').click(function () {
        $('.docs-nav').toggleClass('docs-nav-visible');

        if ($('.docs-nav').hasClass('docs-nav-visible')) {
          $('nav').css('z-index', 10);
        } else {
          $('nav').css('z-index', '');
        }
      });

      if ($activeListItem && $activeListItem.length) {
        var $prevListItem = findPrevLink($activeListItem);
        var $nextListItem = findNextLink($activeListItem);

        if ($prevListItem.length || $nextListItem.length) {
          $('.docs-content').append("\n          <div class=\"docs-page-nav\">\n            <div class=\"docs-page-nav-prev\">\n              ".concat($prevListItem.length ? "\n                <a href=\"".concat($prevListItem.find('a').attr('href'), "\">\u2190 ").concat($prevListItem.text(), "</a>\n              ") : '', "\n            </div>\n            <div class=\"docs-page-nav-next\">\n              ").concat($nextListItem.length ? "\n                <a href=\"".concat($nextListItem.find('a').attr('href'), "\">").concat($nextListItem.text(), " \u2192</a>\n              ") : '', "</div>\n          </div>\n        "));
        }
      }
    }

    if ($('.docs-index-title').length > 0) {
      $('.docs-index-title').on('click', function () {
        $('.docs-right-block-index').toggleClass('docs-index-visible');
      });
      $('.docs-index a').on('click', function () {
        $('.docs-right-block-index').removeClass('docs-index-visible');
      });
      $(document).on('click', function (e) {
        if (!e.target.closest('.docs-right-block-index')) {
          $('.docs-right-block-index').removeClass('docs-index-visible');
        }
      });
    }
  }

  function initDocsTables() {
    $('.params-table tbody tr:not(.subparam-open-row):not(.subparam-close-row) > td:first-child').each(function (el) {
      var textContent = el.textContent;
      if (!textContent || $(el).find('a').length > 0) return;
      var linkEl = document.createElement('a');
      linkEl.id = "param-".concat(textContent);
      linkEl.href = "#param-".concat(textContent);

      for (var i = el.childNodes.length - 1; i >= 0; i -= 1) {
        linkEl.prepend(el.childNodes[i]);
      }

      el.appendChild(linkEl);
    });
    $('.methods-table tbody tr > td:first-child').each(function (el) {
      var textContent = el.textContent;
      if (!textContent || $(el).find('a').length > 0) return;
      var linkEl = document.createElement('a');
      linkEl.id = "method-".concat(textContent);
      linkEl.href = "#method-".concat(textContent);

      for (var i = el.childNodes.length - 1; i >= 0; i -= 1) {
        linkEl.prepend(el.childNodes[i]);
      }

      el.appendChild(linkEl);
    });
    $('.events-table tbody tr > td:first-child').each(function (el) {
      var textContent = el.textContent;
      if (!textContent || $(el).find('a').length > 0) return;
      var linkEl = document.createElement('a');
      linkEl.id = "event-".concat(textContent);
      linkEl.href = "#event-".concat(textContent);

      for (var i = el.childNodes.length - 1; i >= 0; i -= 1) {
        linkEl.prepend(el.childNodes[i]);
      }

      el.appendChild(linkEl);
    });
  }

  var Clipboard = {
    el: undefined,
    createEl: function createEl() {
      var el = document.createElement('textarea');
      el.style.display = 'none';
      el.style.position = 'absolute';
      el.style.visibility = 'hidden';
      el.style.right = '100%';
      el.style.bottom = '100%';
      el.style.userSelect = 'text';
      el.style.webkitUserSelect = 'text';
      el.style['-webkit-user-select'] = 'text';
      document.body.appendChild(el);
      Clipboard.el = el;
    },
    showEl: function showEl() {
      Clipboard.el.style.display = 'block';
      Clipboard.el.style.visibility = 'visible';
    },
    hideEl: function hideEl() {
      Clipboard.el.style.display = 'none';
      Clipboard.el.style.visibility = 'hidden';
    },
    copy: function copy(text) {
      if (!Clipboard.el) {
        Clipboard.createEl();
      }

      Clipboard.el.innerHTML = text;

      try {
        window.getSelection().removeAllRanges();
      } catch (err) {// no support
      }

      Clipboard.showEl();
      var range = document.createRange();
      range.selectNode(Clipboard.el);
      var success;

      try {
        window.getSelection().addRange(range); // Now that we've selected the anchor text, execute the copy command

        success = document.execCommand('copy');
      } catch (err) {
        success = false;
      }

      try {
        window.getSelection().removeAllRanges();
      } catch (err) {// no support
      }

      Clipboard.hideEl();
      return success;
    }
  };
  function copyToClipboard (text, callback) {
    var result = Clipboard.copy(text);
    if (result && callback) callback();
  }

  function initUiInitiativeTemplates() {
    var $container = $('.uiinitiative-templates');
    if ($container.length === 0) return;
    fetch('https://uiinitiative.com/api/list?type=template&tech=Framework7').then(function (res) {
      return res.json();
    }).then(function (items) {
      var content = '';
      items.forEach(function (item) {
        content += "\n        <div class=\"app\">\n          <a class=\"app-cover\" href=\"".concat(item.url, "\" target=\"_blank\" data-hover-text=\"Get\">\n            <img src=\"").concat(item.cover, "\"\">\n          </a>\n          <div class=\"app-info\">\n            <div class=\"app-title\">").concat(item.title, "</div>\n            <div class=\"app-subtitle\">").concat(item.subtitle, "</div>\n          </div>\n        </div>\n        ");
      });
      $container.append(content);
    });
  }

  function initUiInitiativePlugins() {
    var $container = $('.uiinitiative-plugins');
    if ($container.length === 0) return;
    fetch('https://uiinitiative.com/api/list?type=plugin&tech=Framework7').then(function (res) {
      return res.json();
    }).then(function (items) {
      var content = '';
      items.forEach(function (item) {
        content += "\n        <div class=\"app\">\n          <a class=\"app-cover\" href=\"".concat(item.url, "\" target=\"_blank\" data-hover-text=\"Get\">\n            <img src=\"").concat(item.cover, "\"\">\n          </a>\n          <div class=\"app-info\">\n            <div class=\"app-title\">").concat(item.title, "</div>\n            <div class=\"app-subtitle\">").concat(item.subtitle, "</div>\n          </div>\n        </div>\n        ");
      });
      $container.append(content);
    });
  }

  function initExamplePreview() {
    if ($('.example-preview').length > 0) {
      $('.example-preview-buttons button').on('click', function onClick(e) {
        e.preventDefault();
        var a = $(this);
        if (a.hasClass('example-preview-button-active')) return;
        a.parent().find('.example-preview-button-active').removeClass('example-preview-button-active');
        a.addClass('example-preview-button-active');
        var example = a.parents('.example-preview');
        var iframe = example.find('iframe');
        var url = iframe.attr('src');
        var theme = a.attr('data-theme');
        var mode = a.attr('data-mode');

        if (theme) {
          url = url.replace(/ios|md/, theme);
        }

        if (mode) {
          url = url.replace(/light|dark/, mode);
        }

        example.find('.example-preview-buttons-group a').attr('href', url);
        iframe.attr('src', url);
      });
    }
  }

  /* eslint-disable */
  var ShaderProgram = /*#__PURE__*/function () {
    function ShaderProgram(holder) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ShaderProgram);

      // eslint-disable-next-line
      options = Object.assign({
        antialias: false,
        depthTest: false,
        mousemove: false,
        autosize: true,
        side: 'front',
        vertex: "\n        precision highp float;\n\n        attribute vec4 a_position;\n        attribute vec4 a_color;\n\n        uniform float u_time;\n        uniform vec2 u_resolution;\n        uniform vec2 u_mousemove;\n        uniform mat4 u_projection;\n\n        varying vec4 v_color;\n\n        void main() {\n\n          gl_Position = u_projection * a_position;\n          gl_PointSize = (10.0 / gl_Position.w) * 100.0;\n\n          v_color = a_color;\n\n        }",
        fragment: "\n        precision highp float;\n\n        uniform sampler2D u_texture;\n        uniform int u_hasTexture;\n\n        varying vec4 v_color;\n\n        void main() {\n\n          if ( u_hasTexture == 1 ) {\n\n            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n\n          } else {\n\n            gl_FragColor = v_color;\n\n          }\n\n        }",
        uniforms: {},
        buffers: {},
        camera: {},
        texture: null,
        onUpdate: function onUpdate() {},
        onResize: function onResize() {}
      }, options);
      var uniforms = Object.assign({
        time: {
          type: 'float',
          value: 0
        },
        hasTexture: {
          type: 'int',
          value: 0
        },
        resolution: {
          type: 'vec2',
          value: [0, 0]
        },
        mousemove: {
          type: 'vec2',
          value: [0, 0]
        },
        projection: {
          type: 'mat4',
          value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
      }, options.uniforms);
      var buffers = Object.assign({
        position: {
          size: 3,
          data: []
        },
        color: {
          size: 4,
          data: []
        }
      }, options.buffers);
      var camera = Object.assign({
        fov: 60,
        near: 1,
        far: 10000,
        aspect: 1,
        z: 100,
        perspective: true
      }, options.camera);
      var canvas = document.createElement('canvas');
      var gl = canvas.getContext('webgl', {
        antialias: options.antialias
      });
      if (!gl) return false;
      this.count = 0;
      this.gl = gl;
      this.canvas = canvas;
      this.camera = camera;
      this.holder = holder;
      this.onUpdate = options.onUpdate;
      this.onResize = options.onResize;
      this.data = {};
      holder.appendChild(canvas);
      this.createProgram(options.vertex, options.fragment);
      this.createBuffers(buffers);
      this.createUniforms(uniforms);
      this.updateBuffers();
      this.updateUniforms();
      this.createTexture(options.texture);
      gl.enable(gl.BLEND);
      gl.enable(gl.CULL_FACE);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl[options.depthTest ? 'enable' : 'disable'](gl.DEPTH_TEST);
      if (options.autosize) window.addEventListener('resize', function (e) {
        return _this.resize(e);
      }, false);
      if (options.mousemove) window.addEventListener('mousemove', function (e) {
        return _this.mousemove(e);
      }, false);
      this.resize();
      this.update = this.update.bind(this);
      this.time = {
        start: performance.now(),
        old: performance.now()
      };
      this.update();
    }

    _createClass(ShaderProgram, [{
      key: "mousemove",
      value: function mousemove(e) {
        var x = e.pageX / this.width * 2 - 1;
        var y = e.pageY / this.height * 2 - 1;
        this.uniforms.mousemove = [x, y];
      }
    }, {
      key: "resize",
      value: function resize(e) {
        var holder = this.holder;
        var canvas = this.canvas;
        var gl = this.gl;
        var width = this.width = holder.offsetWidth;
        var height = this.height = holder.offsetHeight;
        var aspect = this.aspect = width / height;
        var dpi = devicePixelRatio;
        canvas.width = width * dpi;
        canvas.height = height * dpi;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        gl.viewport(0, 0, width * dpi, height * dpi);
        gl.clearColor(0, 0, 0, 0);
        this.uniforms.resolution = [width, height];
        this.uniforms.projection = this.setProjection(aspect);
        this.onResize(width, height, dpi);
      }
    }, {
      key: "setProjection",
      value: function setProjection(aspect) {
        var camera = this.camera;

        if (camera.perspective) {
          camera.aspect = aspect;
          var fovRad = camera.fov * (Math.PI / 180);
          var f = Math.tan(Math.PI * 0.5 - 0.5 * fovRad);
          var rangeInv = 1.0 / (camera.near - camera.far);
          var matrix = [f / camera.aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (camera.near + camera.far) * rangeInv, -1, 0, 0, camera.near * camera.far * rangeInv * 2, 0];
          matrix[14] += camera.z;
          matrix[15] += camera.z;
          return matrix;
        } else {
          return [2 / this.width, 0, 0, 0, 0, -2 / this.height, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1];
        }
      }
    }, {
      key: "createShader",
      value: function createShader(type, source) {
        var gl = this.gl;
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          return shader;
        } else {
          console.log(gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
        }
      }
    }, {
      key: "createProgram",
      value: function createProgram(vertex, fragment) {
        var gl = this.gl;
        var vertexShader = this.createShader(gl.VERTEX_SHADER, vertex);
        var fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragment);
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
          gl.useProgram(program);
          this.program = program;
        } else {
          console.log(gl.getProgramInfoLog(program));
          gl.deleteProgram(program);
        }
      }
    }, {
      key: "createUniforms",
      value: function createUniforms(data) {
        var _this2 = this;

        var gl = this.gl;
        var uniforms = this.data.uniforms = data;
        var values = this.uniforms = {};
        Object.keys(uniforms).forEach(function (name) {
          var uniform = uniforms[name];
          uniform.location = gl.getUniformLocation(_this2.program, 'u_' + name);
          Object.defineProperty(values, name, {
            set: function set(value) {
              uniforms[name].value = value;

              _this2.setUniform(name, value);
            },
            get: function get() {
              return uniforms[name].value;
            }
          });
        });
      }
    }, {
      key: "setUniform",
      value: function setUniform(name, value) {
        var gl = this.gl;
        var uniform = this.data.uniforms[name];
        uniform.value = value;

        switch (uniform.type) {
          case 'int':
            {
              gl.uniform1i(uniform.location, value);
              break;
            }

          case 'float':
            {
              gl.uniform1f(uniform.location, value);
              break;
            }

          case 'vec2':
            {
              gl.uniform2f.apply(gl, [uniform.location].concat(_toConsumableArray(value)));
              break;
            }

          case 'vec3':
            {
              gl.uniform3f.apply(gl, [uniform.location].concat(_toConsumableArray(value)));
              break;
            }

          case 'vec4':
            {
              gl.uniform4f.apply(gl, [uniform.location].concat(_toConsumableArray(value)));
              break;
            }

          case 'mat2':
            {
              gl.uniformMatrix2fv(uniform.location, false, value);
              break;
            }

          case 'mat3':
            {
              gl.uniformMatrix3fv(uniform.location, false, value);
              break;
            }

          case 'mat4':
            {
              gl.uniformMatrix4fv(uniform.location, false, value);
              break;
            }
        } // ivec2       : uniform2i,
        // ivec3       : uniform3i,
        // ivec4       : uniform4i,
        // sampler2D   : uniform1i,
        // samplerCube : uniform1i,
        // bool        : uniform1i,
        // bvec2       : uniform2i,
        // bvec3       : uniform3i,
        // bvec4       : uniform4i,

      }
    }, {
      key: "updateUniforms",
      value: function updateUniforms() {
        var _this3 = this;

        this.gl;
        var uniforms = this.data.uniforms;
        Object.keys(uniforms).forEach(function (name) {
          var uniform = uniforms[name];
          _this3.uniforms[name] = uniform.value;
        });
      }
    }, {
      key: "createBuffers",
      value: function createBuffers(data) {
        var _this4 = this;

        this.gl;
        var buffers = this.data.buffers = data;
        var values = this.buffers = {};
        Object.keys(buffers).forEach(function (name) {
          var buffer = buffers[name];
          buffer.buffer = _this4.createBuffer('a_' + name, buffer.size);
          Object.defineProperty(values, name, {
            set: function set(data) {
              buffers[name].data = data;

              _this4.setBuffer(name, data);

              if (name == 'position') _this4.count = buffers.position.data.length / 3;
            },
            get: function get() {
              return buffers[name].data;
            }
          });
        });
      }
    }, {
      key: "createBuffer",
      value: function createBuffer(name, size) {
        var gl = this.gl;
        var program = this.program;
        var index = gl.getAttribLocation(program, name);
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribPointer(index, size, gl.FLOAT, false, 0, 0);
        return buffer;
      }
    }, {
      key: "setBuffer",
      value: function setBuffer(name, data) {
        var gl = this.gl;
        var buffers = this.data.buffers;
        if (name == null && !gl.bindBuffer(gl.ARRAY_BUFFER, null)) return;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers[name].buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
      }
    }, {
      key: "updateBuffers",
      value: function updateBuffers() {
        this.gl;
        var buffers = this.buffers;
        Object.keys(buffers).forEach(function (name) {
          return buffers[name] = buffer.data;
        });
        this.setBuffer(null);
      }
    }, {
      key: "createTexture",
      value: function createTexture(src) {
        var gl = this.gl;
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
        this.texture = texture;

        if (src) {
          this.uniforms.hasTexture = 1;
          this.loadTexture(src);
        }
      }
    }, {
      key: "loadTexture",
      value: function loadTexture(src) {
        var gl = this.gl;
        var texture = this.texture;
        var textureImage = new Image();

        textureImage.onload = function () {
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        };

        textureImage.src = src;
      }
    }, {
      key: "update",
      value: function update() {
        var gl = this.gl;
        var now = performance.now();
        var elapsed = (now - this.time.start) / 5000;
        var delta = now - this.time.old;
        this.time.old = now;
        this.uniforms.time = elapsed;

        if (this.count > 0) {
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.POINTS, 0, this.count);
        }

        this.onUpdate(delta);
        requestAnimationFrame(this.update);
      }
    }]);

    return ShaderProgram;
  }();

  function initHomeCanvas() {
    var pointSize = 2.5;
    var el = document.querySelector('.home-header-canvas');
    if (!el) return; // eslint-disable-next-line

    new ShaderProgram(el, {
      texture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC',
      uniforms: {
        size: {
          type: 'float',
          value: pointSize
        },
        field: {
          type: 'vec3',
          value: [0, 0, 0]
        },
        speed: {
          type: 'float',
          value: 5
        }
      },
      vertex: "\n    #define M_PI 3.1415926535897932384626433832795\n\n    precision highp float;\n\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n\n    uniform float u_time;\n    uniform float u_size;\n    uniform float u_speed;\n    uniform vec3 u_field;\n    uniform mat4 u_projection;\n\n    varying vec4 v_color;\n\n    void main() {\n\n      vec3 pos = a_position.xyz;\n\n      pos.y += (\n        cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +\n        sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)\n      ) * u_field.y;\n\n      gl_Position = u_projection * vec4( pos.xyz, a_position.w );\n      gl_PointSize = ( u_size / gl_Position.w ) * 100.0;\n\n      v_color = a_color;\n\n    }",
      fragment: "\n    precision highp float;\n\n    uniform sampler2D u_texture;\n\n    varying vec4 v_color;\n\n    void main() {\n\n      gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n\n    }",
      onResize: function onResize(w, h, dpi) {
        var position = [],
            color = [];
        var width = 400 * (w / h);
        var depth = 400;
        var height = 3;
        var distance = 5;

        for (var x = 0; x < width; x += distance) {
          for (var z = 0; z < depth; z += distance) {
            position.push(-width / 2 + x, -30, -depth / 2 + z);
            color.push(1, 1 - x / width * 1, 0.5 + x / width * 0.5, z / depth);
          }
        }

        this.uniforms.field = [width, height, depth];
        this.buffers.position = position;
        this.buffers.color = color;
        this.uniforms.size = h / 400 * pointSize * dpi;
      }
    });
  }

  function initCopyCode() {
    $('pre').each(function (preElement) {
      var $button = $("<button class=\"f7-copy-btn\">\n        <i class=\"f7-icons f7-copy-icon\">square_on_square</i>\n        <i class=\"f7-icons f7-check-icon hidden\">checkmark_alt</i>\n      </button>");
      $(preElement).append($button);
      $button.on('click', function onClick() {
        var el = this;
        var text = $(el).prev().text();
        console.log(text);
        copyToClipboard(text);
        $button.find('.f7-copy-icon, .f7-check-icon').toggleClass('hidden');
        setTimeout(function () {
          $button.find('.f7-copy-icon, .f7-check-icon').toggleClass('hidden');
        }, 2000);
      });
    });
  }

  Object.keys(methods).forEach(function (key) {
    $.fn[key] = methods[key];
  });
  initHomeCanvas();
  initDocsTables();
  initDocsSearch();
  initCopyCode();
  initDocsDevice();
  initDocsNav();
  initUiInitiativeTemplates();
  initUiInitiativePlugins();
  initExamplePreview();

  if ($('.home-intro .constructor').length) {
    var content = $('.home-intro .constructor').html();
    $('.home-intro').on('animationend', function (e) {
      if (e.animationName === 'constructor-flip') {
        setTimeout(function () {
          $('.home-intro .constructor').remove();
          $('.home-intro .center').prepend("<div class=\"constructor constructor-no-in\">".concat(content, "</div>"));
        });
      }
    });
  }

  function trackOutboundClick(url) {
    if (!window.gtag || !url) return;
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url
    });
  }

  $('a').on('click', function onClick() {
    var url = this.href;
    if (!url) return;
    if (url.indexOf('http') !== 0 || url.indexOf(document.location.host) >= 0) return;
    trackOutboundClick(url);
  }); // Mobile nav

  $('.nav-toggle').on('click', function () {
    $('.nav-menu').addClass('nav-menu-visible');
  });
  $('.nav-menu-backdrop').on('click', function () {
    $('.nav-menu').removeClass('nav-menu-visible');
  }); // Shuffle footer sponsors

  function shuffleArray(array) {
    var inPlace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var arr = inPlace ? array : _toConsumableArray(array);
    var j;
    var x;
    var i;

    for (i = arr.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return arr;
  }

  if ($('footer .custom-sponsors a').length) {
    var sponsors = [];
    $('footer .custom-sponsors a').each(function (el) {
      sponsors.push(el);
    });
    sponsors = shuffleArray(sponsors);
    $('footer .custom-sponsors').append($(sponsors));
  } // Home device theme switch


  $('.home-header .theme-switch a').click(function onClick(e) {
    if ($(this).hasClass('active')) {
      return;
    }

    e.preventDefault();
    var url = $(this).attr('href');
    var theme = url.split('?theme=')[1];
    $('header .phone iframe').attr('src', "".concat(url, "&safe-areas=true"));
    $('header .phone').removeClass('ios md').addClass(theme);
    $('.home-header .theme-switch a').removeClass('active');
    $(this).addClass('active');
    $('header .phone .fullscreen').attr('href', url);
  });
  $('.home-header a[href="#get-started"]').click(function (e) {
    e.preventDefault();
    $('#get-started')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
  $('.f7-demo-icon i').on('click', function onClick() {
    var el = this;
    var text = $(el).parent().next().text();
    copyToClipboard(text, function () {
      var $toastEl = $("<div class=\"f7-demo-icons-toast\"><b>".concat(text, "</b> is copied to clipboard</div>"));
      $toastEl.once('animationend', function () {
        $toastEl.remove();
      });
      $(document.body).append($toastEl);
    });
  }); // Docs clickable titles

  $('.docs-content').find('h2, h3').on('click', function onClick() {
    var $h = $(this);
    if (!$h.attr('id')) return;
    document.location.hash = $h.attr('id');
  }); // Showcase

  $('.showcase-apps .app-icon').on('click', function onClick() {
    var appHtml = $(this).parents('.app').html();
    $('body').append('<div class="showcase-app-preview-backdrop"></div>');
    $('body').append("<div class=\"showcase-app-preview\"><span class=\"showcase-app-preview-close\"></span>".concat(appHtml.replace('<h4>', '<h3>').replace('</h4>', '</h3>'), "</div>"));
    $('body').css('overflow', 'hidden');
  });
  $(document).on('click', '.showcase-app-preview-close, .showcase-app-preview-backdrop', function () {
    $('.showcase-app-preview, .showcase-app-preview-backdrop').remove();
    $('body').css('overflow', '');
  });
  $(document).on('click', '.app-show-shots a', function onClick(e) {
    e.preventDefault();
    $(this).parent().hide().parents('.showcase-app-preview').find('.app-shots').show().find('img').each(function forEach() {
      $(this).attr('src', $(this).attr('data-src'));
    });
  }); // GH Stars/Forks

  function fetchGitStats(local) {
    if (local) {
      if (localStorage.getItem('f7-git-stats-stars')) {
        $('.gh-stars span').html(localStorage.getItem('f7-git-stats-stars'));
      }

      return;
    }

    if (window.fetch) {
      window.fetch('https://api.github.com/repos/framework7io/framework7').then(function (res) {
        return res.json();
      }).then(function (data) {
        if (!data) return;
        localStorage.setItem('f7-git-stats-date', new Date().getTime());

        if (data.stargazers_count) {
          var stars = data.stargazers_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          localStorage.setItem('f7-git-stats-stars', stars);
          $('.gh-stars span').html(stars);
        }
      });
    }
  }

  var gitStatsDate = localStorage.getItem('f7-git-stats-date');

  if (gitStatsDate && new Date().getTime() - gitStatsDate * 1 < 1000 * 60 * 60) {
    fetchGitStats(true);
  } else {
    fetchGitStats();
  }

}));
//# sourceMappingURL=main.js.map
