webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var MyPageComponent_1 = __webpack_require__(3);
	var redux_1 = __webpack_require__(35);
	var store_1 = __webpack_require__(49);
	var Actions_1 = __webpack_require__(50);
	var Position_1 = __webpack_require__(7);
	var store = redux_1.createStore(store_1.dialog);
	// Initialize page.
	var render = function () {
	    return ReactDOM.render(React.createElement(MyPageComponent_1.MyPageComponent, {background: 'images/header_1.jpg'}), document.getElementById('container'));
	};
	render();
	var unsubscribe = store.subscribe(render);
	store.dispatch(Actions_1.updateHeader({ color: '#fff', font: 20, position: Position_1.Position.TOP_LEFT, value: 'Header' }));
	store.dispatch(Actions_1.updateTeaser({ color: '#fff', font: 20, position: Position_1.Position.TOP_LEFT, value: 'Teaser' }));
	store.dispatch(Actions_1.updateTeaser({ color: '#fff', font: 20, position: Position_1.Position.TOP_LEFT, value: 'Button' }));
	unsubscribe();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var MyCanvasComponent_1 = __webpack_require__(4);
	var ButtonComponent_1 = __webpack_require__(8);
	var DialogComponent_1 = __webpack_require__(9);
	var TextElement_1 = __webpack_require__(33);
	var Position_1 = __webpack_require__(7);
	var DialogResult_1 = __webpack_require__(32);
	var Constants_1 = __webpack_require__(34);
	var MyPageComponent = (function (_super) {
	    __extends(MyPageComponent, _super);
	    function MyPageComponent(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.addHeader = function () {
	            _this.state.headerClass = Constants_1.VisibleClass;
	            _this.setState(_this.state);
	        };
	        this.hideHeaderDialog = function (updates, result) {
	            _this.state.headerClass = Constants_1.HiddenClass;
	            if (DialogResult_1.DialogResult.OK === result) {
	                _this.updateElements(updates);
	            }
	            _this.setState(_this.state);
	        };
	        this.addTeaser = function () {
	            _this.state.teaserClass = Constants_1.VisibleClass;
	            _this.setState(_this.state);
	        };
	        this.hideTeaserDialog = function (updates, result) {
	            _this.state.teaserClass = Constants_1.HiddenClass;
	            if (DialogResult_1.DialogResult.OK === result) {
	                _this.updateElements(updates);
	            }
	            _this.setState(_this.state);
	        };
	        this.addButton = function () {
	            _this.state.buttonClass = Constants_1.VisibleClass;
	            _this.setState(_this.state);
	        };
	        this.hideButtonDialog = function (updates, result) {
	            _this.state.buttonClass = Constants_1.HiddenClass;
	            if (DialogResult_1.DialogResult.OK === result) {
	                _this.updateElements(updates);
	            }
	            _this.setState(_this.state);
	        };
	        this.onUndo = function () {
	            if (_this.state.elements.texts.length > 0) {
	                _this.state.elements.texts = _this.state.elements.texts.slice(0, _this.state.elements.texts.length - 1);
	                _this.setState(_this.state);
	            }
	        };
	        this.onClear = function () {
	            _this.state.elements.texts = [];
	            _this.setState(_this.state);
	        };
	        this.state = {
	            headerClass: Constants_1.HiddenClass,
	            teaserClass: Constants_1.HiddenClass,
	            buttonClass: Constants_1.HiddenClass,
	            elements: {
	                background: this.props.background,
	                texts: []
	            },
	            dialogs: {
	                headerDialog: { color: '#fff', fontSize: 10, position: Position_1.Position.TOP_CENTER, value: 'Header' },
	                teaserDialog: { color: '#fff', fontSize: 10, position: Position_1.Position.TOP_CENTER, value: 'Teaser' },
	                buttonDialog: { color: '#fff', fontSize: 10, position: Position_1.Position.TOP_CENTER, value: 'View' },
	            }
	        };
	    }
	    MyPageComponent.prototype.updateElements = function (updates) {
	        this.state.elements.texts.push(new TextElement_1.TextElement(updates.value + this.state.elements.texts.length, updates.fontSize + "pt " + Constants_1.FontName, updates.color, updates.position));
	    };
	    MyPageComponent.prototype.componentDidMount = function () {
	    };
	    MyPageComponent.prototype.render = function () {
	        return (React.createElement("div", {className: 'ms-Grid'}, React.createElement("div", {className: 'ms-Grid-row'}, React.createElement("div", {className: 'ms-Grid-col ms-u-md6 ms-u-hiddenSm'}, React.createElement("span", {className: 'ms-font-m-plus'}, React.createElement("i", {className: 'ms-Icon ms-Icon--editBox', "aria-hidden": 'true'}), "Draw"))), React.createElement("div", {className: 'ms-Grid-row cr-commands'}, React.createElement("div", {className: 'ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4'}, React.createElement(ButtonComponent_1.ButtonComponent, {value: 'Add Header', handleClick: this.addHeader})), React.createElement("div", {className: 'ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4'}, React.createElement(ButtonComponent_1.ButtonComponent, {value: 'Add Teaser', handleClick: this.addTeaser})), React.createElement("div", {className: 'ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4'}, React.createElement(ButtonComponent_1.ButtonComponent, {value: 'Add Button', handleClick: this.addButton}))), React.createElement("div", {className: 'ms-Grid-row'}, React.createElement("div", {className: 'ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12'}, React.createElement("div", {className: 'ms-CommandBar'}, React.createElement("div", {className: 'ms-CommandBarSearch'}, React.createElement("input", {className: 'ms-CommandBarSearch-input', type: 'text', placeholder: 'Search', tabIndex: '1'}), React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper'}, React.createElement("i", {className: 'ms-Icon ms-Icon--search'})), React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s'}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'}))), React.createElement("div", {className: 'ms-CommandBar-sideCommands'}, React.createElement("div", {className: 'ms-CommandBarItem'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '1', onClick: this.onUndo}, React.createElement("span", {className: 'ms-CommandBarItem-icon ms-Icon ms-Icon--reactivate'}), React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "Undo"), React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'}))))), React.createElement("div", {className: 'ms-CommandBar-mainArea'}, React.createElement("div", {className: 'ms-CommandBarItem'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '1'}, React.createElement("span", {className: 'ms-CommandBarItem-icon ms-Icon ms-Icon--star'}), React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "New"), React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'})))), React.createElement("div", {className: 'ms-CommandBarItem'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '1', onClick: this.onClear}, React.createElement("span", {className: 'ms-CommandBarItem-icon ms-Icon ms-Icon--save'}), React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "Delete")))), React.createElement("div", {className: 'ms-CommandBarItem'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '1'}, React.createElement("span", {className: 'ms-CommandBarItem-icon ms-Icon ms-Icon--flag'}), React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "Archive")))), React.createElement("div", {className: 'ms-CommandBarItem ms-CommandBarItem--hasTextOnly'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '1'}, React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "Junk")))), React.createElement("div", {className: 'ms-CommandBarItem ms-CommandBarItem--hasTextOnly'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '1'}, React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "Move To"), React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'})))), React.createElement("div", {className: 'ms-CommandBarItem ms-CommandBarItem--hasTextOnly'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '1'}, React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "Categories"), React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'})))), React.createElement("div", {className: 'ms-CommandBarItem ms-CommandBarItem--iconOnly ms-CommandBarItem-overflow'}, React.createElement("div", {className: 'ms-CommandBarItem-linkWrapper'}, React.createElement("a", {className: 'ms-CommandBarItem-link', tabIndex: '2'}, React.createElement("span", {className: 'ms-CommandBarItem-icon ms-Icon ms-Icon--ellipsis'}), React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'}, "Ellipsis"), React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'}))), React.createElement("ul", {className: 'ms-CommandBar-overflowMenu ms-ContextualMenu'})))))), React.createElement("div", {className: 'ms-Grid-row', id: 'drawing-container'}, React.createElement(MyCanvasComponent_1.MyCanvasComponent, {width: 100, height: 100, elements: this.state.elements})), React.createElement("div", {className: this.state.headerClass}, React.createElement(DialogComponent_1.DialogComponent, {heading: 'Hi', formProps: this.state.dialogs.headerDialog, onHide: this.hideHeaderDialog})), React.createElement("div", {className: this.state.teaserClass}, React.createElement(DialogComponent_1.DialogComponent, {heading: 'Hi', formProps: this.state.dialogs.teaserDialog, onHide: this.hideTeaserDialog})), React.createElement("div", {className: this.state.buttonClass}, React.createElement(DialogComponent_1.DialogComponent, {heading: 'Hi', formProps: this.state.dialogs.buttonDialog, onHide: this.hideButtonDialog}))));
	    };
	    return MyPageComponent;
	}(React.Component));
	exports.MyPageComponent = MyPageComponent;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Container_1 = __webpack_require__(5);
	var PositionUtils_1 = __webpack_require__(6);
	var MyCanvasComponent = (function (_super) {
	    __extends(MyCanvasComponent, _super);
	    function MyCanvasComponent(props) {
	        _super.call(this, props);
	        this.defaultWidth = 100;
	        this.defaultHeight = 200;
	        this.updateCanvas = this.updateCanvas.bind(this);
	        window.addEventListener('resize', this.updateCanvas, false);
	    }
	    /**
	     * Draw the base image.
	     *
	     * @param {string} imagePath
	     *
	     * @memberOf MyCanvas
	     */
	    MyCanvasComponent.prototype.draw = function () {
	        var _this = this;
	        this.clearCanvas();
	        var imageElement = new Image();
	        imageElement.onload = function () {
	            _this.resizeCanvas(imageElement.width, imageElement.height);
	            _this.graphics.drawImage(imageElement, 0, 0);
	            _this.addTexts();
	        };
	        imageElement.src = this.props.elements.background;
	    };
	    MyCanvasComponent.prototype.clearCanvas = function () {
	        this.graphics.clearRect(0, 0, this.surface.width, this.surface.height);
	    };
	    MyCanvasComponent.prototype.addTexts = function () {
	        var _this = this;
	        this.props.elements.texts.forEach(function (element) {
	            _this.addText(element);
	        });
	    };
	    /**
	     * Add Text elements to canvas.
	     *
	     * @param {TextElement} text
	     *
	     * @memberOf MyCanvas
	     */
	    MyCanvasComponent.prototype.addText = function (text) {
	        this.WrapText(text);
	    };
	    /**
	     * Resize the canvas.
	     *
	     * @private
	     * @param {number} width
	     * @param {number} height
	     *
	     * @memberOf MyCanvas
	     */
	    MyCanvasComponent.prototype.resizeCanvas = function (width, height) {
	        this.container.Width = width;
	        this.container.Height = height;
	        this.surface.width = this.container.Width;
	        this.surface.height = this.container.Height;
	    };
	    /**
	     * Wrap the text to canvas width.
	     *
	     * @private
	     * @param {TextElement} text
	     *
	     * @memberOf MyCanvas
	     */
	    MyCanvasComponent.prototype.WrapText = function (text) {
	        var words = text.value.split(' ');
	        var line = '';
	        var x = PositionUtils_1.default.getX(text.position, this.container);
	        var y = PositionUtils_1.default.getY(text.position, this.container);
	        var maxWidth = this.container.Width - x;
	        var lineHeight = parseInt((text.font).substr(0, 2), 10);
	        x = (this.container.Width - maxWidth) / 2;
	        y = y + lineHeight / 2;
	        this.graphics.font = text.font;
	        this.graphics.fillStyle = text.color;
	        // this.context.textBaseline = 'Top';
	        for (var n = 0; n < words.length; n++) {
	            var testLine = line + words[n] + ' ';
	            var metrics = this.graphics.measureText(testLine);
	            var testWidth = metrics.width;
	            if (testWidth > maxWidth && n > 0) {
	                this.graphics.fillText(line, x, y);
	                line = words[n] + ' ';
	                y += lineHeight;
	            }
	            else {
	                line = testLine;
	            }
	        }
	        this.graphics.fillText(line, x, y);
	    };
	    /**
	     * Canvas toString.
	     *
	     * @returns {string}
	     *
	     * @memberOf MyCanvas
	     */
	    MyCanvasComponent.prototype.toString = function () {
	        return "The canvas width :" + this.container.Width + ", The canvas height :" + this.container.Height;
	    };
	    MyCanvasComponent.prototype.componentDidMount = function () {
	        this.updateCanvas();
	    };
	    MyCanvasComponent.prototype.updateCanvas = function () {
	        this.container = new Container_1.Container();
	        this.surface = this.refs['canvas'];
	        this.graphics = this.refs['canvas'].getContext('2d');
	        this.resizeCanvas(window.innerWidth, window.innerHeight);
	        this.draw();
	    };
	    MyCanvasComponent.prototype.componentWillUpdate = function (nextProps, nextState) {
	        this.draw();
	    };
	    MyCanvasComponent.prototype.render = function () {
	        return (React.createElement("canvas", {ref: 'canvas', width: this.props.width, height: this.props.height, className: 'ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12'}));
	    };
	    return MyCanvasComponent;
	}(React.Component));
	exports.MyCanvasComponent = MyCanvasComponent;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Container for the canvas.
	 *
	 * @export
	 * @class Container
	 */
	var Container = (function () {
	    function Container() {
	    }
	    Object.defineProperty(Container.prototype, "Width", {
	        get: function () {
	            return this.width;
	        },
	        set: function (width) {
	            if (window.innerWidth >= width) {
	                this.width = width;
	            }
	            else {
	                this.width = window.innerWidth;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Container.prototype, "Height", {
	        get: function () {
	            return this.height;
	        },
	        set: function (height) {
	            if (window.innerHeight >= height) {
	                this.height = height;
	            }
	            else {
	                this.height = window.innerHeight;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Container;
	}());
	exports.Container = Container;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Position_1 = __webpack_require__(7);
	var PositionUtils = (function () {
	    function PositionUtils() {
	    }
	    /**
	     * Get the X value based on the Position.
	     *
	     * @static
	     * @param {Position} pos
	     * @param {Container} container
	     * @returns
	     *
	     * @memberOf PositionUtils
	     */
	    PositionUtils.getX = function (pos, container) {
	        switch (pos) {
	            case Position_1.Position.TOP_LEFT:
	            case Position_1.Position.MIDDLE_LEFT:
	            case Position_1.Position.BOTTOM_LEFT:
	                return 10;
	            case Position_1.Position.TOP_CENTER:
	            case Position_1.Position.MIDDLE_CENTER:
	            case Position_1.Position.BOTTOM_CENTER:
	                return container.Width / 2;
	            case Position_1.Position.TOP_RIGHT:
	            case Position_1.Position.MIDDLE_RIGHT:
	            case Position_1.Position.BOTTOM_RIGHT:
	                return container.Width;
	        }
	    };
	    /**
	     * Get the Y value based on the position.
	     *
	     * @static
	     * @param {Position} pos
	     * @param {Container} container
	     * @returns
	     *
	     * @memberOf PositionUtils
	     */
	    PositionUtils.getY = function (pos, container) {
	        switch (pos) {
	            case Position_1.Position.TOP_LEFT:
	            case Position_1.Position.TOP_CENTER:
	            case Position_1.Position.TOP_RIGHT:
	                return 10;
	            case Position_1.Position.MIDDLE_LEFT:
	            case Position_1.Position.MIDDLE_CENTER:
	            case Position_1.Position.MIDDLE_RIGHT:
	                return container.Height / 2;
	            case Position_1.Position.BOTTOM_LEFT:
	            case Position_1.Position.BOTTOM_CENTER:
	            case Position_1.Position.BOTTOM_RIGHT:
	                return container.Height;
	        }
	    };
	    return PositionUtils;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PositionUtils;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * The Position.
	 *
	 * @export
	 * @enum {number}
	 */
	(function (Position) {
	    Position[Position["TOP_LEFT"] = 0] = "TOP_LEFT";
	    Position[Position["TOP_CENTER"] = 1] = "TOP_CENTER";
	    Position[Position["TOP_RIGHT"] = 2] = "TOP_RIGHT";
	    Position[Position["MIDDLE_LEFT"] = 3] = "MIDDLE_LEFT";
	    Position[Position["MIDDLE_CENTER"] = 4] = "MIDDLE_CENTER";
	    Position[Position["MIDDLE_RIGHT"] = 5] = "MIDDLE_RIGHT";
	    Position[Position["BOTTOM_LEFT"] = 6] = "BOTTOM_LEFT";
	    Position[Position["BOTTOM_CENTER"] = 7] = "BOTTOM_CENTER";
	    Position[Position["BOTTOM_RIGHT"] = 8] = "BOTTOM_RIGHT";
	})(exports.Position || (exports.Position = {}));
	var Position = exports.Position;
	;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ButtonComponent = (function (_super) {
	    __extends(ButtonComponent, _super);
	    function ButtonComponent() {
	        _super.apply(this, arguments);
	    }
	    ButtonComponent.prototype.render = function () {
	        return React.createElement("button", {onClick: this.props.handleClick, className: 'ms-Button ms-Button--hero', id: 'add-teaser'}, React.createElement("span", {className: 'ms-Button-icon'}, React.createElement("i", {className: 'ms-Icon ms-Icon--plus'})), React.createElement("span", {className: 'ms-Button-label'}, " ", this.props.value, " "), React.createElement("span", {className: 'ms-Button-description'}, " ", this.props.desciption, " "));
	    };
	    return ButtonComponent;
	}(React.Component));
	exports.ButtonComponent = ButtonComponent;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FormContent_1 = __webpack_require__(10);
	var DialogResult_1 = __webpack_require__(32);
	var DialogComponent = (function (_super) {
	    __extends(DialogComponent, _super);
	    function DialogComponent(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.onUpdate = function (props) {
	            _this.state.formProps = props;
	            _this.setState(_this.state);
	        };
	        this.onConfirm = function (event) {
	            if (_this.props.onHide) {
	                _this.props.onHide(_this.state.formProps, DialogResult_1.DialogResult.OK);
	            }
	        };
	        this.onCancel = function (event) {
	            if (_this.props.onHide) {
	                _this.props.onHide(_this.state.formProps, DialogResult_1.DialogResult.Cancel);
	            }
	        };
	        this.state = {
	            formProps: this.props.formProps
	        };
	    }
	    /**
	     * Get HTML
	     */
	    DialogComponent.prototype.render = function () {
	        return React.createElement("div", {className: 'ms-Dialog'}, React.createElement("div", {className: 'ms-Overlay'}), React.createElement("div", {className: 'ms-Dialog-main'}, React.createElement("button", {className: 'ms-Dialog-button ms-Dialog-button--close'}, React.createElement("i", {className: 'ms-Icon ms-Icon--x'})), React.createElement("div", {className: 'ms-Dialog-header'}, React.createElement("p", {className: 'ms-Dialog-title'}, this.props.heading)), React.createElement("div", {className: 'ms-Dialog-inner'}, React.createElement("div", {className: 'ms-Dialog-content'}, React.createElement(FormContent_1.FormContent, {showButtonProps: false, value: this.state.formProps.value, color: this.state.formProps.color, fontSize: this.state.formProps.fontSize, position: this.state.formProps.position, onUpdate: this.onUpdate})), React.createElement("div", {className: 'ms-Dialog-actions'}, React.createElement("div", {className: 'ms-Dialog-actionsRight'}, React.createElement("button", {onClick: this.onConfirm, className: 'ms-Dialog-action ms-Button ms-Button--primary btn-action-positive'}, React.createElement("span", {className: 'ms-Button-label'}, "OK")), React.createElement("button", {onClick: this.onCancel, className: 'ms-Dialog-action ms-Button btn-action-negetive'}, React.createElement("span", {className: 'ms-Button-label'}, "Cancel")))))));
	    };
	    return DialogComponent;
	}(React.Component));
	exports.DialogComponent = DialogComponent;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Position_1 = __webpack_require__(7);
	var DropDown_1 = __webpack_require__(11);
	var TextComponent_1 = __webpack_require__(30);
	var EnumUtils_1 = __webpack_require__(31);
	var FormContent = (function (_super) {
	    __extends(FormContent, _super);
	    function FormContent(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.onPositionUpdate = function (selectedOption, index) {
	            _this.state.position = index;
	            var names = EnumUtils_1.default.getNames(Position_1.Position);
	            var options = names.map(function (name) {
	                return { key: name, text: name.replace('_', ' '), isSelected: false };
	            });
	            options.filter(function (option) { return option.key === selectedOption.key; })[0].isSelected = true;
	            _this.state.dropDownOptions = options;
	            _this.setState(_this.state);
	            if (_this.props.onUpdate) {
	                _this.props.onUpdate(_this.state);
	            }
	        };
	        this.onValueUpdate = function (newValue) {
	            _this.state.value = newValue;
	            _this.setState(_this.state);
	            if (_this.props.onUpdate) {
	                _this.props.onUpdate(_this.state);
	            }
	        };
	        this.onSizeUpdate = function (newValue) {
	            _this.state.fontSize = newValue;
	            _this.setState(_this.state);
	            if (_this.props.onUpdate) {
	                _this.props.onUpdate(_this.state);
	            }
	        };
	        var names = EnumUtils_1.default.getNames(Position_1.Position);
	        var options = names.map(function (name) {
	            return { key: name, text: name.replace('_', ' ') };
	        });
	        this.state = {
	            value: this.props.value,
	            color: this.props.color,
	            fontSize: this.props.fontSize,
	            position: this.props.position,
	            dropDownOptions: options
	        };
	    }
	    FormContent.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(TextComponent_1.TextComponent, {onUpdate: this.onValueUpdate, description: 'The text value.', type: 'text', label: 'Value', value: this.state.value}), React.createElement(DropDown_1.Dropdown, {options: this.state.dropDownOptions, label: 'Position', onChanged: this.onPositionUpdate}), React.createElement(TextComponent_1.TextComponent, {onUpdate: this.onSizeUpdate, description: 'The font size.', type: 'number', label: 'Value', value: this.state.fontSize}));
	    };
	    return FormContent;
	}(React.Component));
	exports.FormContent = FormContent;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(12));
	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(13));
	


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(14);
	__webpack_require__(28);
	var Dropdown = (function (_super) {
	    __extends(Dropdown, _super);
	    function Dropdown(props) {
	        _super.call(this, props, {
	            'isDisabled': 'disabled'
	        });
	        this.state = {
	            id: Utilities_1.getId('Dropdown'),
	            isOpen: false,
	            selectedIndex: this._getSelectedIndex(props.options, props.selectedKey),
	            isDisabled: this.props.isDisabled || this.props.disabled
	        };
	    }
	    Dropdown.prototype.componentWillReceiveProps = function (newProps) {
	        this.setState({
	            selectedIndex: this._getSelectedIndex(newProps.options, newProps.selectedKey),
	            isDisabled: newProps.isDisabled
	        });
	    };
	    Dropdown.prototype.componentWillUpdate = function (nextProps, nextState) {
	        if (this.state.isOpen !== nextState.isOpen) {
	            if (nextState.isOpen) {
	                this._events.on(window, 'focus', this._onFocusChange, true);
	            }
	            else {
	                this._events.off();
	            }
	        }
	    };
	    Dropdown.prototype.componentDidUpdate = function (prevProps, prevState) {
	        if (prevState.isOpen === false && this.state.isOpen === true) {
	            this._scrollOnOpen();
	        }
	        else if (prevState.selectedIndex !== this.state.selectedIndex) {
	            this._scrollSelectedItemIntoView();
	        }
	    };
	    Dropdown.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, label = _a.label, options = _a.options;
	        var _b = this.state, id = _b.id, isOpen = _b.isOpen, selectedIndex = _b.selectedIndex, isDisabled = _b.isDisabled;
	        var selectedOption = options[selectedIndex];
	        // Need to assign role application on containing div because JAWS doesnt call OnKeyDown without this role
	        return (React.createElement("div", {ref: 'root'}, React.createElement("label", {id: id + '-label', className: 'ms-Label'}, label), React.createElement("div", {"data-is-focusable": true, ref: function (c) { return _this._dropDown = c; }, id: id, className: Utilities_1.css('ms-Dropdown', {
	            'is-open': isOpen, 'is-disabled': isDisabled
	        }), tabIndex: isDisabled ? -1 : 0, onKeyDown: this._onDropdownKeyDown, onClick: this._onDropdownClick, "aria-expanded": isOpen ? 'true' : 'false', role: 'application', "aria-activedescendant": selectedIndex >= 0 ? (id + '-list' + selectedIndex) : (id + '-list'), "aria-controls": id + '-list'}, React.createElement("span", {className: 'ms-Dropdown-title'}, selectedOption ? selectedOption.text : ''), React.createElement("i", {className: 'ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown'}), React.createElement("ul", {ref: function (c) { return _this._optionList = c; }, id: id + '-list', className: 'ms-Dropdown-items', role: 'listbox', "aria-labelledby": id + '-label'}, options.map(function (option, index) { return (React.createElement("li", {id: id + '-list' + index.toString(), ref: Dropdown.Option + index.toString(), key: option.key, "data-index": index, className: Utilities_1.css('ms-Dropdown-item', { 'is-selected': selectedIndex === index }), onClick: _this.setSelectedIndex.bind(_this, index), role: 'option', "aria-selected": selectedIndex === index ? 'true' : 'false', "aria-label": option.text}, option.text)); })))));
	    };
	    Dropdown.prototype.focus = function () {
	        if (this._dropDown && this._dropDown.tabIndex !== -1) {
	            this._dropDown.focus();
	        }
	    };
	    Dropdown.prototype.setSelectedIndex = function (index) {
	        var _a = this.props, onChanged = _a.onChanged, options = _a.options;
	        var selectedIndex = this.state.selectedIndex;
	        index = Math.max(0, Math.min(options.length - 1, index));
	        if (index !== selectedIndex) {
	            // Set the selected option.
	            this.setState({
	                selectedIndex: index
	            });
	            if (onChanged) {
	                onChanged(options[index], index);
	            }
	        }
	    };
	    Dropdown.prototype._getSelectedIndex = function (options, selectedKey) {
	        return Utilities_1.findIndex(options, (function (option) { return (option.isSelected || selectedKey && option.key === selectedKey); }));
	    };
	    Dropdown.prototype._onDropdownKeyDown = function (ev) {
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.enter:
	                this.setState({
	                    isOpen: !this.state.isOpen
	                });
	                break;
	            case Utilities_1.KeyCodes.escape:
	                this.setState({
	                    isOpen: false
	                });
	                break;
	            case Utilities_1.KeyCodes.up:
	                this.setSelectedIndex(this.state.selectedIndex - 1);
	                break;
	            case Utilities_1.KeyCodes.down:
	                this.setSelectedIndex(this.state.selectedIndex + 1);
	                break;
	            case Utilities_1.KeyCodes.home:
	                this.setSelectedIndex(0);
	                break;
	            case Utilities_1.KeyCodes.end:
	                this.setSelectedIndex(this.props.options.length - 1);
	                break;
	            default:
	                return;
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    Dropdown.prototype._onDropdownClick = function () {
	        var _a = this.state, isDisabled = _a.isDisabled, isOpen = _a.isOpen;
	        if (!isDisabled) {
	            this.setState({
	                isOpen: !isOpen
	            });
	        }
	    };
	    Dropdown.prototype._onFocusChange = function (ev) {
	        if (this.state.isOpen && !Utilities_1.elementContains(this.refs.root, ev.target)) {
	            this.setState({
	                isOpen: false
	            });
	        }
	    };
	    Dropdown.prototype._scrollSelectedItemIntoView = function () {
	        var _a = this._getCurrentItemPositionDetails(), posTop = _a.posTop, posBottom = _a.posBottom;
	        // if the selected item is too far down
	        if (posBottom > this._optionList.offsetHeight + this._optionList.scrollTop) {
	            this._optionList.scrollTop = posBottom - this._optionList.offsetHeight;
	        }
	        else if (posTop < this._optionList.scrollTop) {
	            this._optionList.scrollTop = posTop;
	        }
	    };
	    Dropdown.prototype._scrollOnOpen = function () {
	        var _a = this._getCurrentItemPositionDetails(), currentItem = _a.currentItem, posBottom = _a.posBottom;
	        // the selected item should be in the center of the dropdown if possible
	        if (currentItem) {
	            this._optionList.scrollTop = posBottom - (currentItem.offsetHeight + this._optionList.offsetHeight) / 2;
	        }
	    };
	    Dropdown.prototype._getCurrentItemPositionDetails = function () {
	        var currentItem = this.refs[Dropdown.Option + this.state.selectedIndex];
	        var posTop = currentItem ? currentItem.offsetTop : 0;
	        var posBottom = currentItem ? posTop + currentItem.offsetHeight : 0;
	        return { currentItem: currentItem,
	            posTop: posTop,
	            posBottom: posBottom };
	    };
	    Dropdown.defaultProps = {
	        options: []
	    };
	    Dropdown.Option = 'option';
	    __decorate([
	        Utilities_1.autobind
	    ], Dropdown.prototype, "_onDropdownKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Dropdown.prototype, "_onDropdownClick", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Dropdown.prototype, "_onFocusChange", null);
	    return Dropdown;
	}(Utilities_1.BaseComponent));
	exports.Dropdown = Dropdown;
	


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(17));
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	__export(__webpack_require__(26));
	__export(__webpack_require__(27));
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Async_1 = __webpack_require__(16);
	var EventGroup_1 = __webpack_require__(17);
	var BaseComponent = (function (_super) {
	    __extends(BaseComponent, _super);
	    /**
	     * BaseComponent constructor
	     * @param {P} props The props for the component.
	     * @param {Object} deprecatedProps The map of deprecated prop names to new names, where the key is the old name and the
	     * value is the new name. If a prop is removed rather than renamed, leave the value undefined.
	     */
	    function BaseComponent(props, deprecatedProps) {
	        _super.call(this, props);
	        if (deprecatedProps) {
	            for (var propName in deprecatedProps) {
	                if (propName in props) {
	                    _warnDeprecation(this, propName, deprecatedProps[propName]);
	                }
	            }
	        }
	        _makeAllSafe(this, BaseComponent.prototype, [
	            'componentWillMount',
	            'componentDidMount',
	            'shouldComponentUpdate',
	            'componentWillUpdate',
	            'componentWillReceiveProps',
	            'render',
	            'componentDidUpdate',
	            'componentWillUnmount'
	        ]);
	    }
	    /** If we have disposables, dispose them automatically on unmount. */
	    BaseComponent.prototype.componentWillUnmount = function () {
	        if (this.__disposables) {
	            for (var i = 0, len = this._disposables.length; i < len; i++) {
	                this.__disposables[i].dispose();
	            }
	            this.__disposables = null;
	        }
	    };
	    Object.defineProperty(BaseComponent.prototype, "className", {
	        /** Gets the object's class name. */
	        get: function () {
	            var funcNameRegex = /function (.{1,})\(/;
	            var results = (funcNameRegex).exec((this).constructor.toString());
	            return (results && results.length > 1) ? results[1] : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_disposables", {
	        /** Allows subclasses to push things to this._disposables to be auto disposed. */
	        get: function () {
	            if (!this.__disposables) {
	                this.__disposables = [];
	            }
	            return this.__disposables;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_async", {
	        /**
	         * Gets the async instance associated with the component, created on demand. The async instance gives
	         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
	         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
	         * preserve the this pointer so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__async) {
	                this.__async = new Async_1.Async(this);
	                this._disposables.push(this.__async);
	            }
	            return this.__async;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_events", {
	        /**
	         * Gets the event group instance assocaited with the component, created on demand. The event instance
	         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
	         * will be automatically disconnected after unmounting. The helpers within the events object also
	         * preserve the this reference so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__events) {
	                this.__events = new EventGroup_1.EventGroup(this);
	                this._disposables.push(this.__events);
	            }
	            return this.__events;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Helper to return a memoized ref resolver function.
	     * @params refName Name of the member to assign the ref to.
	     *
	     * @examples
	     * class Foo extends BaseComponent<...> {
	     *   private _root: HTMLElement;
	     *
	     *   public render() {
	     *     return <div ref={ this._resolveRef('_root') } />
	     *   }
	     * }
	     */
	    BaseComponent.prototype._resolveRef = function (refName) {
	        var _this = this;
	        if (!this.__resolves) {
	            this.__resolves = {};
	        }
	        if (!this.__resolves[refName]) {
	            this.__resolves[refName] = function (ref) { return _this[refName] = ref; };
	        }
	        return this.__resolves[refName];
	    };
	    return BaseComponent;
	}(React.Component));
	exports.BaseComponent = BaseComponent;
	/**
	 * Helper to override a given method with a wrapper method that can try/catch the original, but also
	 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
	 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
	 */
	function _makeAllSafe(obj, prototype, methodNames) {
	    for (var i = 0, len = methodNames.length; i < len; i++) {
	        _makeSafe(obj, prototype, methodNames[i]);
	    }
	}
	function _makeSafe(obj, prototype, methodName) {
	    var classMethod = obj[methodName];
	    var prototypeMethod = prototype[methodName];
	    if (classMethod || prototypeMethod) {
	        obj[methodName] = function () {
	            var retVal;
	            try {
	                if (prototypeMethod) {
	                    retVal = prototypeMethod.apply(this, arguments);
	                }
	                if (classMethod) {
	                    retVal = classMethod.apply(this, arguments);
	                }
	            }
	            catch (e) {
	                var errorMessage = "Exception in " + obj.className + "." + methodName + "(): " + (typeof e === 'string' ? e : e.stack);
	                if (BaseComponent.onError) {
	                    BaseComponent.onError(errorMessage, e);
	                }
	            }
	            return retVal;
	        };
	    }
	}
	function _warnDeprecation(obj, propertyName, newPropertyName) {
	    if (console && console.warn) {
	        var deprecationMessage = obj.className + " property '" + propertyName + "' was used but has been deprecated.";
	        if (newPropertyName) {
	            deprecationMessage += " Use '" + newPropertyName + "' instead.";
	        }
	        console.warn(deprecationMessage);
	    }
	}
	BaseComponent.onError = function (errorMessage) { return console.error(errorMessage); };
	


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
	 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
	 *
	 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
	 * new instance of the class and remember to call dispose() during your code's dispose handler.
	 */
	"use strict";
	var Async = (function () {
	    function Async(parent, onError) {
	        this._timeoutIds = null;
	        this._immediateIds = null;
	        this._intervalIds = null;
	        this._animationFrameIds = null;
	        this._isDisposed = false;
	        this._parent = parent || null;
	        this._onErrorHandler = onError;
	        this._noop = function () { };
	    }
	    /**
	     * Dispose function, clears all async operations.
	     */
	    Async.prototype.dispose = function () {
	        var id;
	        this._isDisposed = true;
	        this._parent = null;
	        // Clear timeouts.
	        if (this._timeoutIds) {
	            for (id in this._timeoutIds) {
	                if (this._timeoutIds.hasOwnProperty(id)) {
	                    this.clearTimeout(id);
	                }
	            }
	            this._timeoutIds = null;
	        }
	        // Clear immediates.
	        if (this._immediateIds) {
	            for (id in this._immediateIds) {
	                if (this._immediateIds.hasOwnProperty(id)) {
	                    this.clearImmediate(id);
	                }
	            }
	            this._immediateIds = null;
	        }
	        // Clear intervals.
	        if (this._intervalIds) {
	            for (id in this._intervalIds) {
	                if (this._intervalIds.hasOwnProperty(id)) {
	                    this.clearInterval(id);
	                }
	            }
	            this._intervalIds = null;
	        }
	        // Clear animation frames.
	        if (this._animationFrameIds) {
	            for (id in this._animationFrameIds) {
	                if (this._animationFrameIds.hasOwnProperty(id)) {
	                    this.cancelAnimationFrame(id);
	                }
	            }
	            this._animationFrameIds = null;
	        }
	    };
	    /**
	     * SetTimeout override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setTimeout = function (callback, duration) {
	        var _this = this;
	        var timeoutId = 0;
	        if (!this._isDisposed) {
	            if (!this._timeoutIds) {
	                this._timeoutIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            timeoutId = setTimeout(function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._timeoutIds[timeoutId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    if (_this._onErrorHandler) {
	                        _this._onErrorHandler(e);
	                    }
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._timeoutIds[timeoutId] = true;
	        }
	        return timeoutId;
	    };
	    /**
	     * Clears the timeout.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearTimeout = function (id) {
	        if (this._timeoutIds && this._timeoutIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearTimeout(id);
	            delete this._timeoutIds[id];
	        }
	    };
	    /**
	     * SetImmediate override, which will auto cancel the immediate during dispose.
	     * @param callback Callback to execute.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setImmediate = function (callback) {
	        var _this = this;
	        var immediateId = 0;
	        if (!this._isDisposed) {
	            if (!this._immediateIds) {
	                this._immediateIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var setImmediateCallback = function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._immediateIds[immediateId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._immediateIds[immediateId] = true;
	        }
	        return immediateId;
	    };
	    /**
	     * Clears the immediate.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearImmediate = function (id) {
	        if (this._immediateIds && this._immediateIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
	            delete this._immediateIds[id];
	        }
	    };
	    /**
	     * SetInterval override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setInterval = function (callback, duration) {
	        var _this = this;
	        var intervalId = 0;
	        if (!this._isDisposed) {
	            if (!this._intervalIds) {
	                this._intervalIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            intervalId = setInterval(function () {
	                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
	                try {
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._intervalIds[intervalId] = true;
	        }
	        return intervalId;
	    };
	    /**
	     * Clears the interval.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearInterval = function (id) {
	        if (this._intervalIds && this._intervalIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearInterval(id);
	            delete this._intervalIds[id];
	        }
	    };
	    /**
	     * Creates a function that, when executed, will only call the func function at most once per
	     * every wait milliseconds. Provide an options object to indicate that func should be invoked
	     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
	     * function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
	     *
	     * @param func The function to throttle.
	     * @param wait The number of milliseconds to throttle executions to. Defaults to 0.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new throttled function.
	     */
	    Async.prototype.throttle = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = true;
	        var trailing = true;
	        var lastExecuteTime = 0;
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var delta = now - lastExecuteTime;
	            var waitLength = leading ? waitMS - delta : waitMS;
	            if (delta >= waitMS && (!userCall || leading)) {
	                lastExecuteTime = now;
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if (timeoutId === null && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    /**
	     * Creates a function that will delay the execution of func until after wait milliseconds have
	     * elapsed since the last time it was invoked. Provide an options object to indicate that func
	     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
	     * to the debounced function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the debounced function is invoked more than once during the wait
	     * timeout.
	     *
	     * @param func The function to debounce.
	     * @param wait The number of milliseconds to delay.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.maxWait The maximum time func is allowed to be delayed before it's called.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new debounced function.
	     */
	    Async.prototype.debounce = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = false;
	        var trailing = true;
	        var maxWait = null;
	        var lastCallTime = 0;
	        var lastExecuteTime = (new Date).getTime();
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
	            maxWait = options.maxWait;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var executeImmediately = false;
	            if (userCall) {
	                if (leading && now - lastCallTime >= waitMS) {
	                    executeImmediately = true;
	                }
	                lastCallTime = now;
	            }
	            var delta = now - lastCallTime;
	            var waitLength = waitMS - delta;
	            var maxWaitDelta = now - lastExecuteTime;
	            var maxWaitExpired = false;
	            if (maxWait !== null) {
	                // maxWait only matters when there is a pending callback
	                if (maxWaitDelta >= maxWait && timeoutId) {
	                    maxWaitExpired = true;
	                }
	                else {
	                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
	                }
	            }
	            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastExecuteTime = now;
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if ((timeoutId === null || !userCall) && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    Async.prototype.requestAnimationFrame = function (callback) {
	        var _this = this;
	        var animationFrameId = 0;
	        if (!this._isDisposed) {
	            if (!this._animationFrameIds) {
	                this._animationFrameIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var animationFrameCallback = function () {
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._animationFrameIds[animationFrameId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            animationFrameId = window.requestAnimationFrame ?
	                window.requestAnimationFrame(animationFrameCallback) :
	                window.setTimeout(animationFrameCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._animationFrameIds[animationFrameId] = true;
	        }
	        return animationFrameId;
	    };
	    Async.prototype.cancelAnimationFrame = function (id) {
	        if (this._animationFrameIds && this._animationFrameIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
	            /* tslint:enable:ban-native-functions */
	            delete this._animationFrameIds[id];
	        }
	    };
	    Async.prototype._logError = function (e) {
	        if (this._onErrorHandler) {
	            this._onErrorHandler(e);
	        }
	    };
	    return Async;
	}());
	exports.Async = Async;
	


/***/ },
/* 17 */
/***/ function(module, exports) {

	/* tslint:disable:no-string-literal */
	"use strict";
	/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
	 *  If the target is an HTMLElement, the event will be attached to the element and can be
	 *  triggered as usual (like clicking for onclick).
	 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
	 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
	 *  handled here in EventGroup, and the handler is called in the context of the parent
	 *  (which is passed in in the constructor).
	 */
	var EventGroup = (function () {
	    /** parent: the context in which events attached to non-HTMLElements are called */
	    function EventGroup(parent) {
	        this._id = EventGroup._uniqueId++;
	        this._parent = parent;
	        this._eventRecords = [];
	    }
	    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
	     *  Events raised here by default have bubbling set to false and cancelable set to true.
	     *  This applies also to built-in events being raised manually here on HTMLElements,
	     *  which may lead to unexpected behavior if it differs from the defaults.
	     */
	    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
	        var retVal;
	        if (EventGroup._isElement(target)) {
	            if (document.createEvent) {
	                var ev = document.createEvent('HTMLEvents');
	                ev.initEvent(eventName, bubbleEvent, true);
	                ev['args'] = eventArgs;
	                retVal = target.dispatchEvent(ev);
	            }
	            else if (document['createEventObject']) {
	                var evObj = document['createEventObject'](eventArgs);
	                // cannot set cancelBubble on evObj, fireEvent will overwrite it
	                target.fireEvent('on' + eventName, evObj);
	            }
	        }
	        else {
	            while (target && retVal !== false) {
	                var events = target.__events__;
	                var eventRecords = events ? events[eventName] : null;
	                for (var id in eventRecords) {
	                    if (eventRecords.hasOwnProperty(id)) {
	                        var eventRecordList = eventRecords[id];
	                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
	                            var record = eventRecordList[listIndex];
	                            if (record.objectCallback) {
	                                retVal = record.objectCallback.call(record.parent, eventArgs);
	                            }
	                        }
	                    }
	                }
	                // If the target has a parent, bubble the event up.
	                target = bubbleEvent ? target.parent : null;
	            }
	        }
	        return retVal;
	    };
	    EventGroup.isObserved = function (target, eventName) {
	        var events = target && target.__events__;
	        return !!events && !!events[eventName];
	    };
	    /** Check to see if the target has declared support of the given event. */
	    EventGroup.isDeclared = function (target, eventName) {
	        var declaredEvents = target && target.__declaredEvents;
	        return !!declaredEvents && !!declaredEvents[eventName];
	    };
	    EventGroup.stopPropagation = function (event) {
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        }
	        else {
	            event.cancelBubble = true;
	        }
	    };
	    EventGroup._isElement = function (target) {
	        return !!target && (target instanceof HTMLElement || target.addEventListener);
	    };
	    EventGroup.prototype.dispose = function () {
	        if (!this._isDisposed) {
	            this._isDisposed = true;
	            this.off();
	            this._parent = null;
	        }
	    };
	    /** On the target, attach a set of events, where the events object is a name to function mapping. */
	    EventGroup.prototype.onAll = function (target, events, useCapture) {
	        for (var eventName in events) {
	            if (events.hasOwnProperty(eventName)) {
	                this.on(target, eventName, events[eventName], useCapture);
	            }
	        }
	    };
	    /** On the target, attach an event whose handler will be called in the context of the parent
	     * of this instance of EventGroup.
	     */
	    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
	        var _this = this;
	        if (eventName.indexOf(',') > -1) {
	            var events = eventName.split(/[ ,]+/);
	            for (var i = 0; i < events.length; i++) {
	                this.on(target, events[i], callback, useCapture);
	            }
	        }
	        else {
	            var parent_1 = this._parent;
	            var eventRecord = {
	                target: target,
	                eventName: eventName,
	                parent: parent_1,
	                callback: callback,
	                objectCallback: null,
	                elementCallback: null,
	                useCapture: useCapture
	            };
	            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
	            var events = (target.__events__ = target.__events__ || {});
	            events[eventName] = events[eventName] || {
	                count: 0
	            };
	            events[eventName][this._id] = events[eventName][this._id] || [];
	            events[eventName][this._id].push(eventRecord);
	            events[eventName].count++;
	            if (EventGroup._isElement(target)) {
	                var processElementEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    var result;
	                    try {
	                        result = callback.apply(parent_1, args);
	                        if (result === false && args[0]) {
	                            var e = args[0];
	                            if (e.preventDefault) {
	                                e.preventDefault();
	                            }
	                            if (e.stopPropagation) {
	                                e.stopPropagation();
	                            }
	                            e.cancelBubble = true;
	                        }
	                    }
	                    catch (e) {
	                    }
	                    return result;
	                };
	                eventRecord.elementCallback = processElementEvent;
	                if (target.addEventListener) {
	                    /* tslint:disable:ban-native-functions */
	                    target.addEventListener(eventName, processElementEvent, useCapture);
	                }
	                else if (target.attachEvent) {
	                    target.attachEvent('on' + eventName, processElementEvent);
	                }
	            }
	            else {
	                var processObjectEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    return callback.apply(parent_1, args);
	                };
	                eventRecord.objectCallback = processObjectEvent;
	            }
	            // Remember the record locally, so that it can be removed.
	            this._eventRecords.push(eventRecord);
	        }
	    };
	    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
	        for (var i = 0; i < this._eventRecords.length; i++) {
	            var eventRecord = this._eventRecords[i];
	            if ((!target || target === eventRecord.target) &&
	                (!eventName || eventName === eventRecord.eventName) &&
	                (!callback || callback === eventRecord.callback) &&
	                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
	                var events = eventRecord.target.__events__;
	                var targetArrayLookup = events[eventRecord.eventName];
	                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
	                // We may have already target's entries, so check for null.
	                if (targetArray) {
	                    if (targetArray.length === 1 || !callback) {
	                        targetArrayLookup.count -= targetArray.length;
	                        delete events[eventRecord.eventName][this._id];
	                    }
	                    else {
	                        targetArrayLookup.count--;
	                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
	                    }
	                    if (!targetArrayLookup.count) {
	                        delete events[eventRecord.eventName];
	                    }
	                }
	                if (eventRecord.elementCallback) {
	                    if (eventRecord.target.removeEventListener) {
	                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
	                    }
	                    else if (eventRecord.target.detachEvent) {
	                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
	                    }
	                }
	                this._eventRecords.splice(i--, 1);
	            }
	        }
	    };
	    /** Trigger the given event in the context of this instance of EventGroup. */
	    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
	        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
	    };
	    /** Declare an event as being supported by this instance of EventGroup. */
	    EventGroup.prototype.declare = function (event) {
	        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
	        if (typeof event === 'string') {
	            declaredEvents[event] = true;
	        }
	        else {
	            for (var i = 0; i < event.length; i++) {
	                declaredEvents[event[i]] = true;
	            }
	        }
	    };
	    EventGroup._uniqueId = 0;
	    return EventGroup;
	}());
	exports.EventGroup = EventGroup;
	


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	(function (KeyCodes) {
	    KeyCodes[KeyCodes["a"] = 65] = "a";
	    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
	    KeyCodes[KeyCodes["comma"] = 188] = "comma";
	    KeyCodes[KeyCodes["del"] = 46] = "del";
	    KeyCodes[KeyCodes["down"] = 40] = "down";
	    KeyCodes[KeyCodes["end"] = 35] = "end";
	    KeyCodes[KeyCodes["enter"] = 13] = "enter";
	    KeyCodes[KeyCodes["escape"] = 27] = "escape";
	    KeyCodes[KeyCodes["home"] = 36] = "home";
	    KeyCodes[KeyCodes["left"] = 37] = "left";
	    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
	    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
	    KeyCodes[KeyCodes["right"] = 39] = "right";
	    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
	    KeyCodes[KeyCodes["space"] = 32] = "space";
	    KeyCodes[KeyCodes["tab"] = 9] = "tab";
	    KeyCodes[KeyCodes["up"] = 38] = "up";
	})(exports.KeyCodes || (exports.KeyCodes = {}));
	var KeyCodes = exports.KeyCodes;
	


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	function findIndex(array, cb) {
	    var index = -1;
	    for (var i = 0; array && i < array.length; i++) {
	        if (cb(array[i], i)) {
	            index = i;
	            break;
	        }
	    }
	    return index;
	}
	exports.findIndex = findIndex;
	function createArray(size, getItem) {
	    var array = [];
	    for (var i = 0; i < size; i++) {
	        array.push(getItem(i));
	    }
	    return array;
	}
	exports.createArray = createArray;
	


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
	 * so that they can be used in scenarios that simply require a function callback.
	 *
	 * @example
	 * import { autobind } from '../utilities/autobind';
	 *
	 * public class Foo {
	 *   @autobind
	 *   method() {
	 *   }
	 * }
	 */
	function autobind(target, key, descriptor) {
	    var fn = descriptor.value;
	    return {
	        configurable: true,
	        get: function () {
	            if (this === fn.prototype) {
	                return fn;
	            }
	            return fn.bind(this);
	        },
	        set: function (newValue) {
	            Object.defineProperty(this, key, {
	                configurable: true,
	                writable: true,
	                enumerable: true,
	                value: newValue
	            });
	        }
	    };
	}
	exports.autobind = autobind;
	


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	function css() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var classes = [];
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var arg = args_1[_a];
	        if (arg) {
	            if (typeof arg === 'string') {
	                classes.push(arg);
	            }
	            else {
	                for (var key in arg) {
	                    if (arg[key]) {
	                        classes.push(key);
	                    }
	                }
	            }
	        }
	    }
	    return classes.join(' ');
	}
	exports.css = css;
	


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Sets the virtual parent of an element.
	 * Pass `undefined` as the `parent` to clear the virtual parent.
	 *
	 * @export
	 * @param {HTMLElement} child
	 * @param {HTMLElement} parent
	 */
	function setVirtualParent(child, parent) {
	    var virtualChild = child;
	    var virtualParent = parent;
	    if (!virtualChild._virtual) {
	        virtualChild._virtual = {
	            children: []
	        };
	    }
	    var oldParent = virtualChild._virtual.parent;
	    if (oldParent && oldParent !== parent) {
	        // Remove the child from its old parent.
	        var index = oldParent._virtual.children.indexOf(virtualChild);
	        if (index > -1) {
	            oldParent._virtual.children.splice(index, 1);
	        }
	    }
	    virtualChild._virtual.parent = virtualParent || undefined;
	    if (virtualParent) {
	        if (!virtualParent._virtual) {
	            virtualParent._virtual = {
	                children: []
	            };
	        }
	        virtualParent._virtual.children.push(virtualChild);
	    }
	}
	exports.setVirtualParent = setVirtualParent;
	function getVirtualParent(child) {
	    var parent;
	    if (child && isVirtualElement(child)) {
	        parent = child._virtual.parent;
	    }
	    return parent;
	}
	exports.getVirtualParent = getVirtualParent;
	/**
	 * Gets the element which is the parent of a given element.
	 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
	 * real DOM parent when present.
	 *
	 * @export
	 * @param {HTMLElement} child
	 * @param {boolean} [allowVirtualParents=true]
	 * @returns {HTMLElement}
	 */
	function getParent(child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
	    return child && (allowVirtualParents && getVirtualParent(child) || child.parentElement);
	}
	exports.getParent = getParent;
	/**
	 * Determines whether or not a parent element contains a given child element.
	 * If `allowVirtualParents` is true, this method may return `true` if the child
	 * has the parent in its virtual element hierarchy.
	 *
	 * @export
	 * @param {HTMLElement} parent
	 * @param {HTMLElement} child
	 * @param {boolean} [allowVirtualParents=true]
	 * @returns {boolean}
	 */
	function elementContains(parent, child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
	    var isContained = false;
	    if (parent && child) {
	        if (allowVirtualParents) {
	            isContained = false;
	            while (child) {
	                var nextParent = getParent(child);
	                if (nextParent === parent) {
	                    isContained = true;
	                    break;
	                }
	                child = nextParent;
	            }
	        }
	        else if (parent.contains) {
	            isContained = parent.contains(child);
	        }
	    }
	    return isContained;
	}
	exports.elementContains = elementContains;
	/**
	 * Determines whether or not an element has the virtual hierarchy extension.
	 *
	 * @param {(HTMLElement | IVirtualElement)} element
	 * @returns {element is IVirtualElement}
	 */
	function isVirtualElement(element) {
	    return element && !!element._virtual;
	}
	


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	var REACT_LIFECYCLE_EXCLUSIONS = [
	    'setState',
	    'render',
	    'componentWillMount',
	    'componentDidMount',
	    'componentWillReceiveProps',
	    'shouldComponentUpdate',
	    'componentWillUpdate',
	    'componentDidUpdate',
	    'componentWillUnmount'
	];
	/**
	 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
	 * @returns {string[]} An array of names of methods that were hoisted.
	 */
	function hoistMethods(destination, source, exclusions) {
	    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
	    var hoisted = [];
	    var _loop_1 = function(methodName) {
	        if (typeof source[methodName] === 'function' &&
	            destination[methodName] === undefined &&
	            (!exclusions || exclusions.indexOf(methodName) === -1)) {
	            hoisted.push(methodName);
	            /* tslint:disable:no-function-expression */
	            destination[methodName] = function () { source[methodName].apply(source, arguments); };
	        }
	    };
	    for (var methodName in source) {
	        _loop_1(methodName);
	    }
	    return hoisted;
	}
	exports.hoistMethods = hoistMethods;
	/**
	 * Provides a method for convenience to unhoist hoisted methods.
	 * @param {Object} source The source object upon which methods were hoisted.
	 * @param {string[]} methodNames An array of method names to unhoist.
	 */
	function unhoistMethods(source, methodNames) {
	    methodNames
	        .forEach(function (methodName) { return delete source[methodName]; });
	}
	exports.unhoistMethods = unhoistMethods;
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	// Initialize global window id.
	var CURRENT_ID_PROPERTY = '__currentId__';
	var _global = window || process;
	if (_global[CURRENT_ID_PROPERTY] === undefined) {
	    _global[CURRENT_ID_PROPERTY] = 0;
	}
	function checkProperties(a, b) {
	    for (var propName in a) {
	        if (a.hasOwnProperty(propName)) {
	            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
	                return false;
	            }
	        }
	    }
	    return true;
	}
	// Compare a to b and b to a
	function shallowCompare(a, b) {
	    return checkProperties(a, b) && checkProperties(b, a);
	}
	exports.shallowCompare = shallowCompare;
	/**
	 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
	 * objects as arguments and they will be merged sequentially into the target. Note that this will
	 * shallow merge; it will not create new cloned values for target members.
	 *
	 * @params target {Object} Target object to merge following object arguments into.
	 * @params args {Object} One or more objects that will be mixed into the target in the order they are provided.
	 * @returns Resulting merged target.
	 */
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    return filteredAssign.apply(this, [null, target].concat(args));
	}
	exports.assign = assign;
	/**
	 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
	 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
	 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
	 * values for target members.
	 *
	 * @params filteredAssign {Function} A callback function that tests if the property should be assigned.
	 * @params target {Object} Target object to merge following object arguments into.
	 * @params args {Object} One or more objects that will be mixed into the target in the order they are provided.
	 * @returns Resulting merged target.
	 */
	function filteredAssign(isAllowed, target) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    target = target || {};
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var sourceObject = args_1[_a];
	        if (sourceObject) {
	            for (var propName in sourceObject) {
	                if (sourceObject.hasOwnProperty(propName) &&
	                    !isAllowed || isAllowed(propName)) {
	                    target[propName] = sourceObject[propName];
	                }
	            }
	        }
	    }
	    return target;
	}
	exports.filteredAssign = filteredAssign;
	/** Generates a unique id in the global scope (this spans across duplicate copies of the same library.) */
	function getId(prefix) {
	    var index = _global[CURRENT_ID_PROPERTY]++;
	    return (prefix || '') + index;
	}
	exports.getId = getId;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var KeyCodes_1 = __webpack_require__(18);
	var _isRTL;
	/**
	 * Gets the rtl state of the page (returns true if in rtl.)
	 */
	function getRTL() {
	    if (_isRTL === undefined) {
	        _isRTL = document.documentElement.getAttribute('dir') === 'rtl';
	    }
	    return _isRTL;
	}
	exports.getRTL = getRTL;
	/**
	 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
	 */
	function setRTL(isRTL) {
	    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
	    _isRTL = isRTL;
	}
	exports.setRTL = setRTL;
	/**
	 * Returns the given key, but flips right/left arrows if necessary.
	 */
	function getRTLSafeKeyCode(key) {
	    if (getRTL()) {
	        if (key === KeyCodes_1.KeyCodes.left) {
	            key = KeyCodes_1.KeyCodes.right;
	        }
	        else if (key === KeyCodes_1.KeyCodes.right) {
	            key = KeyCodes_1.KeyCodes.left;
	        }
	    }
	    return key;
	}
	exports.getRTLSafeKeyCode = getRTLSafeKeyCode;
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(24);
	exports.baseElementEvents = [
	    'onCopy',
	    'onCut',
	    'onPaste',
	    'onCompositionEnd',
	    'onCompositionStart',
	    'onCompositionUpdate',
	    'onFocus',
	    'onFocusCapture',
	    'onBlur',
	    'onBlurCapture',
	    'onChange',
	    'onInput',
	    'onSubmit',
	    'onLoad',
	    'onError',
	    'onKeyDown',
	    'onKeyDownCapture',
	    'onKeyPress',
	    'onKeyUp',
	    'onAbort',
	    'onCanPlay',
	    'onCanPlayThrough',
	    'onDurationChange',
	    'onEmptied',
	    'onEncrypted',
	    'onEnded',
	    'onLoadedData',
	    'onLoadedMetadata',
	    'onLoadStart',
	    'onPause',
	    'onPlay',
	    'onPlaying',
	    'onProgress',
	    'onRateChange',
	    'onSeeked',
	    'onSeeking',
	    'onStalled',
	    'onSuspend',
	    'onTimeUpdate',
	    'onVolumeChange',
	    'onWaiting',
	    'onClick',
	    'onClickCapture',
	    'onContextMenu',
	    'onDoubleClick',
	    'onDrag',
	    'onDragEnd',
	    'onDragEnter',
	    'onDragExit',
	    'onDragLeave',
	    'onDragOver',
	    'onDragStart',
	    'onDrop',
	    'onMouseDown',
	    'onMouseDownCapture',
	    'onMouseEnter',
	    'onMouseLeave',
	    'onMouseMove',
	    'onMouseOut',
	    'onMouseOver',
	    'onMouseUp',
	    'onMouseUpCapture',
	    'onSelect',
	    'onTouchCancel',
	    'onTouchEnd',
	    'onTouchMove',
	    'onTouchStart',
	    'onScroll',
	    'onWheel'
	];
	exports.baseElementProperties = [
	    'defaultChecked',
	    'defaultValue',
	    'accept',
	    'acceptCharset',
	    'accessKey',
	    'action',
	    'allowFullScreen',
	    'allowTransparency',
	    'alt',
	    'async',
	    'autoComplete',
	    'autoFocus',
	    'autoPlay',
	    'capture',
	    'cellPadding',
	    'cellSpacing',
	    'charSet',
	    'challenge',
	    'checked',
	    'children',
	    'classID',
	    'className',
	    'cols',
	    'colSpan',
	    'content',
	    'contentEditable',
	    'contextMenu',
	    'controls',
	    'coords',
	    'crossOrigin',
	    'data',
	    'dateTime',
	    'default',
	    'defer',
	    'dir',
	    'download',
	    'draggable',
	    'encType',
	    'form',
	    'formAction',
	    'formEncType',
	    'formMethod',
	    'formNoValidate',
	    'formTarget',
	    'frameBorder',
	    'headers',
	    'height',
	    'hidden',
	    'high',
	    'hrefLang',
	    'htmlFor',
	    'httpEquiv',
	    'icon',
	    'id',
	    'inputMode',
	    'integrity',
	    'is',
	    'keyParams',
	    'keyType',
	    'kind',
	    'label',
	    'lang',
	    'list',
	    'loop',
	    'low',
	    'manifest',
	    'marginHeight',
	    'marginWidth',
	    'max',
	    'maxLength',
	    'media',
	    'mediaGroup',
	    'method',
	    'min',
	    'minLength',
	    'multiple',
	    'muted',
	    'name',
	    'noValidate',
	    'open',
	    'optimum',
	    'pattern',
	    'placeholder',
	    'poster',
	    'preload',
	    'radioGroup',
	    'readOnly',
	    'rel',
	    'required',
	    'role',
	    'rows',
	    'rowSpan',
	    'sandbox',
	    'scope',
	    'scoped',
	    'scrolling',
	    'seamless',
	    'selected',
	    'shape',
	    'size',
	    'sizes',
	    'span',
	    'spellCheck',
	    'src',
	    'srcDoc',
	    'srcLang',
	    'srcSet',
	    'start',
	    'step',
	    'style',
	    'summary',
	    'tabIndex',
	    'title',
	    'type',
	    'useMap',
	    'value',
	    'width',
	    'wmode',
	    'wrap'
	];
	exports.anchorProperties = exports.baseElementProperties.concat(exports.baseElementEvents, [
	    'href',
	    'target'
	]);
	exports.buttonProperties = exports.baseElementProperties.concat(exports.baseElementEvents, [
	    'disabled'
	]);
	exports.divProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
	/**
	 * Gets native supported props for an html element provided the allowance set. Use one of the property
	 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
	 * props set. Note that all data- prefixed attributes will be allowed.
	 *
	 * @param props The unfiltered input props
	 * @param allowedPropsNames The array of allowed propnames.
	 * @returns The filtered props
	 */
	function getNativeProps(props, allowedPropNames) {
	    return object_1.filteredAssign(function (propName) {
	        return ((propName.indexOf('data-') === 0) ||
	            (allowedPropNames.indexOf(propName) >= 0));
	    }, {}, props);
	}
	exports.getNativeProps = getNativeProps;
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(29);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Dropdown{box-sizing:border-box;margin:0;padding:0;box-shadow:none;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";margin-bottom:10px;position:relative;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:#37006E}}.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:#37006E}}.ms-Dropdown:focus .ms-Dropdown-title{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown:focus .ms-Dropdown-title{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown:focus .ms-Dropdown-title{border-color:#37006E}}.ms-Dropdown .ms-Label{display:inline-block;margin-bottom:8px}.ms-Dropdown.is-disabled .ms-Dropdown-title{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";cursor:default}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#0f0;color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#600000;color:#600000}}.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#600000}}.ms-Dropdown.is-open .ms-Dropdown-items{display:block;position:absolute}.ms-Panel .ms-Dropdown-items{box-shadow:none;overflow-y:auto;padding-top:4px;max-height:100%}.ms-Panel .ms-Dropdown-items .ms-Dropdown-item{padding:7px 16px}.ms-Panel .ms-Dropdown-items::before{content:none;border:0}.ms-Dropdown-caretDown{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";font-size:12px;position:absolute;top:0;pointer-events:none;line-height:32px}html[dir=ltr] .ms-Dropdown-caretDown{right:12px}html[dir=rtl] .ms-Dropdown-caretDown{left:12px}.ms-Dropdown-title{box-sizing:border-box;margin:0;padding:0;box-shadow:none;background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";cursor:pointer;display:block;height:32px;line-height:30px;padding:0 32px 0 12px;position:relative;overflow:hidden}html[dir=rtl] .ms-Dropdown-title{padding:0 12px 0 32px}.ms-Dropdown-items{box-sizing:border-box;margin:0;padding:0;box-shadow:none;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";display:none;list-style-type:none;position:absolute;width:100%;max-height:200px;z-index:400;overflow-y:scroll;top:auto;right:auto;bottom:auto;left:auto;max-width:100%;box-shadow:0 0 15px -5px rgba(0,0,0,.4);border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Dropdown-items::before{content:'';position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;border:none}@media screen and (-ms-high-contrast:active){.ms-Dropdown-items{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-items{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Dropdown-item{box-sizing:border-box;cursor:pointer;display:block;height:36px;line-height:34px;padding:0 12px;position:relative;border:1px solid transparent;white-space:nowrap}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item{border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-Dropdown-item:hover{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item:hover{background-color:#1AEBFF;border-color:#1AEBFF;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item:hover:focus{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item:hover{background-color:#37006E;border-color:#37006E;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-Dropdown-item::-moz-focus-inner{border:0}.ms-Dropdown-item{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Dropdown-item:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Dropdown-item:focus{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Dropdown-item:active{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item.is-disabled{background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";cursor:default}.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item.is-selected:hover,.ms-Dropdown-item.ms-Dropdown-item--selected:hover{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-Dropdown-item.is-selected::-moz-focus-inner,.ms-Dropdown-item.ms-Dropdown-item--selected::-moz-focus-inner{border:0}.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Dropdown-item.is-selected:focus:after,.ms-Fabric.is-focusVisible .ms-Dropdown-item.ms-Dropdown-item--selected:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#1AEBFF;border-color:#1AEBFF;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item.is-selected:focus,.ms-Dropdown-item.ms-Dropdown-item--selected:focus{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#37006E;border-color:#37006E;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}" }]);
	/* tslint:enable */
	


/***/ },
/* 29 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
	 * to use if that slot is not specified by the theme.
	 */
	"use strict";
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
	var _themeState = _root.__themeState__ = _root.__themeState__ || {
	    theme: undefined,
	    lastStyleElement: undefined,
	    registeredStyles: []
	};
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	/* tslint:disable: max-line-length */
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/* tslint:enable: max-line-length */
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 */
	function loadStyles(styles) {
	    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	    if (_injectStylesWithCssText === undefined) {
	        _injectStylesWithCssText = shouldUseCssText();
	    }
	    applyThemableStyles(styleParts);
	}
	exports.loadStyles = loadStyles;
	/**
	 * Allows for customizable loadStyles logic. e.g. for server side rendering application
	 * @param {(styles: string) => void} a loadStyles callback that gets called when styles are loaded or reloaded
	 */
	function configureLoadStyles(callback) {
	    _themeState.loadStyles = callback;
	}
	exports.configureLoadStyles = configureLoadStyles;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(stylesArray, styleRecord) {
	    if (_themeState.loadStyles) {
	        var styles = resolveThemableArray(stylesArray);
	        _themeState.loadStyles(styles);
	    }
	    else {
	        _injectStylesWithCssText ?
	            registerStylesIE(stylesArray, styleRecord) :
	            registerStyles(stylesArray, styleRecord);
	    }
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {theme} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Reloads styles.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            applyThemableStyles(styleRecord.themableStyle, styleRecord);
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles));
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var resolvedCss;
	    if (splitStyleArray) {
	        // Resolve the array of theming instructions to an array of strings.
	        // Then join the array to produce the final CSS string.
	        var resolvedArray = splitStyleArray.map(function (currentValue) {
	            var themeSlot = currentValue.theme;
	            if (themeSlot) {
	                // A theming annotation. Resolve it.
	                var themedValue = theme ? theme[themeSlot] : undefined;
	                var defaultValue = currentValue.defaultValue;
	                // Warn to console if we hit an unthemed value even when themes are provided.
	                // Allow the themedValue to be undefined to explicitly request the default value.
	                if (theme && !themedValue && console && !(themeSlot in theme)) {
	                    /* tslint:disable: max-line-length */
	                    console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + (defaultValue || 'inherit') + "\".");
	                }
	                return themedValue || defaultValue || 'inherit';
	            }
	            else {
	                // A non-themable string. Preserve it.
	                return currentValue.rawString;
	            }
	        });
	        resolvedCss = resolvedArray.join('');
	    }
	    return resolvedCss;
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0;
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
	    if (styleRecord) {
	        head.replaceChild(styleElement, styleRecord.styleElement);
	        styleRecord.styleElement = styleElement;
	    }
	    else {
	        head.appendChild(styleElement);
	    }
	    if (!styleRecord) {
	        _themeState.registeredStyles.push({
	            styleElement: styleElement,
	            themableStyle: styleArray
	        });
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var lastStyleElement = _themeState.lastStyleElement, registeredStyles = _themeState.registeredStyles;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray);
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TextComponent = (function (_super) {
	    __extends(TextComponent, _super);
	    function TextComponent(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.onKeyUp = function (event) {
	            _this.state.value = event.target.value;
	            _this.setState(_this.state);
	            if (_this.props.onUpdate) {
	                _this.props.onUpdate(_this.state.value);
	            }
	        };
	        this.state = {
	            value: props.value
	        };
	    }
	    TextComponent.prototype.render = function () {
	        return React.createElement("div", {className: "ms-TextField"}, React.createElement("label", {className: "ms-Label"}, this.props.label), React.createElement("input", {className: "ms-TextField-field", type: this.props.type, value: this.state.value, onChange: this.onKeyUp}), React.createElement("span", {className: "ms-TextField-description"}, this.props.description));
	    };
	    return TextComponent;
	}(React.Component));
	exports.TextComponent = TextComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	var EnumEx = (function () {
	    function EnumEx() {
	    }
	    EnumEx.getNamesAndValues = function (e) {
	        return this.getNames(e).map(function (n) { return { name: n, value: e[n] }; });
	    };
	    EnumEx.getNames = function (e) {
	        return this.getObjValues(e).filter(function (v) { return typeof v === 'string'; });
	    };
	    EnumEx.getValues = function (e) {
	        return this.getObjValues(e).filter(function (v) { return typeof v === 'number'; });
	    };
	    EnumEx.getObjValues = function (e) {
	        return Object.keys(e).map(function (k) { return e[k]; });
	    };
	    return EnumEx;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EnumEx;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	(function (DialogResult) {
	    DialogResult[DialogResult["OK"] = 0] = "OK";
	    DialogResult[DialogResult["Cancel"] = 1] = "Cancel";
	})(exports.DialogResult || (exports.DialogResult = {}));
	var DialogResult = exports.DialogResult;


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * The Text Element.
	 *
	 * @export
	 * @class TextElement
	 */
	var TextElement = (function () {
	    /**
	     * Creates an instance of TextElement.
	     * @param {string} value
	     * @param {string} font
	     * @param {string} color
	     * @param {Position} position
	     *
	     * @memberOf TextElement
	     */
	    function TextElement(value, font, color, position) {
	        this.value = value;
	        this.font = font;
	        this.color = color;
	        this.position = position;
	    }
	    return TextElement;
	}());
	exports.TextElement = TextElement;


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	exports.VisibleClass = 'ms-Grid-row';
	exports.HiddenClass = 'ms-Grid-row hide';
	exports.FontName = 'Arial';


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(36);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(44);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(46);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(47);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(48);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(45);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(37);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(41);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(38),
	    isObjectLike = __webpack_require__(40);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(39);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ponyfill = __webpack_require__(43);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root = undefined; /* global window */
	
	if (typeof global !== 'undefined') {
		root = global;
	} else if (typeof window !== 'undefined') {
		root = window;
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(36);
	
	var _isPlainObject = __webpack_require__(37);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(45);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (true) {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(48);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Position_1 = __webpack_require__(7);
	var Actions_1 = __webpack_require__(50);
	var initialState = {
	    background: '',
	    header: { color: '#fff', font: 20, position: Position_1.Position.TOP_CENTER, value: '' },
	    teaser: { color: '#fff', font: 20, position: Position_1.Position.TOP_CENTER, value: '' },
	    button: { color: '#fff', font: 20, position: Position_1.Position.TOP_CENTER, value: '' },
	};
	/**
	 * This is a reducer, a pure function with (state, action) => state signature.
	 * It describes how an action transforms the state into the next state.
	 *
	 * The shape of the state is up to you: it can be a primitive, an array, an object,
	 * or even an Immutable.js data structure. The only important part is that you should
	 * not mutate the state object, but return a new object if the state changes.
	 *
	 * In this example, we use a `switch` statement and strings, but you can use a helper that
	 * follows a different convention (such as function maps) if it makes sense for your
	 * project.
	 */
	function counter(state, action) {
	    if (state === void 0) { state = 0; }
	    switch (action.type) {
	        case 'INCREMENT':
	            return state + 1;
	        case 'DECREMENT':
	            return state - 1;
	        default:
	            return state;
	    }
	}
	exports.counter = counter;
	function dialog(state, action) {
	    if (state === void 0) { state = initialState; }
	    action.payload && console.log(JSON.parse(action.payload));
	    console.log(state);
	    switch (action.type) {
	        case Actions_1.UPDATE_HEADER:
	            return Object.assign({}, state, { header: JSON.parse(action.payload) });
	        case Actions_1.UPDATE_TEASER:
	            return Object.assign({}, state, { teaser: JSON.parse(action.payload) });
	        case Actions_1.UPDATE_HEADER:
	            return Object.assign({}, state, { button: JSON.parse(action.payload) });
	        case Actions_1.UPDATE_BACKGROUND:
	            return Object.assign({}, state, { background: JSON.parse(action.payload) });
	        case Actions_1.CLEAR:
	            return Object.assign({}, state, { header: {}, teaser: {}, button: {} });
	        default:
	            return state;
	    }
	}
	exports.dialog = dialog;


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	exports.UPDATE_HEADER = 'UPDATE_HEADER';
	exports.UPDATE_TEASER = 'UPDATE_TEASER';
	exports.UPDATE_BUTTON = 'UPDATE_BUTTON';
	exports.UPDATE_BACKGROUND = 'UPDATE_BACKGROUND';
	exports.RESIZE = 'RESIZE';
	exports.CLEAR = 'CLEAR';
	exports.UNDO = 'UNDO';
	function updateHeader(text) {
	    return { type: exports.UPDATE_HEADER, payload: JSON.stringify(text) };
	}
	exports.updateHeader = updateHeader;
	function updateTeaser(text) {
	    return { type: exports.UPDATE_TEASER, payload: JSON.stringify(text) };
	}
	exports.updateTeaser = updateTeaser;
	function updateButton(text) {
	    return { type: exports.UPDATE_BUTTON, payload: JSON.stringify(text) };
	}
	exports.updateButton = updateButton;
	function updateBackground(url) {
	    return { type: exports.UPDATE_BACKGROUND, payload: JSON.stringify(url) };
	}
	exports.updateBackground = updateBackground;


/***/ }
]);
//# sourceMappingURL=app.js.map