

    <script >
    var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var thingsArray = [
{ id: 101, name: "🍊", bColor: "blue" },
{ id: 102, name: "🍏", bColor: "orange" },
{ id: 103, name: "🍉", bColor: "green" },
{ id: 104, name: "🎾", bColor: "brown" },
{ id: 105, name: "🍓", bColor: "black" },
{ id: 106, name: "🥕", bColor: "yellow" },
{ id: 107, name: "🥑", bColor: "pink" },
{ id: 108, name: "🥦", bColor: "burlywood" },
{ id: 109, name: "🍆", bColor: "navy" },
{ id: 110, name: "🥒", bColor: "red" }];var


Anim = function (_React$Component) {_inherits(Anim, _React$Component);
function Anim(props) {_classCallCheck(this, Anim);var _this = _possibleConstructorReturn(this, (Anim.__proto__ || Object.getPrototypeOf(Anim)).call(this,
  props));
  _this.state = {
    init: "" };

  _this.thingsDB = _this.props.thingsDB;
  _this.myThings = [];return _this;
}_createClass(Anim, [{ key: "componentDidMount", value: function componentDidMount()

  {var _this2 = this;
    var used = [];
    // console.log("thingsDB: ", thingsDB)
    // console.log("p>DM: this.things", this.thingsDB)

    var getOne = function getOne(arr) {
      var selected = Math.floor(Math.random() * arr.length);

      while (used.indexOf(selected) > -1) {
        selected = Math.floor(Math.random() * arr.length);
      }
      used.push(selected);
      return selected;
    };var

    thingsDB = this.thingsDB,myTween = this.myTween;
    this.myTween = new TimelineMax({ paused: false });
    thingsDB.forEach(function () {
      console.log(thingsDB[getOne(thingsDB)]);
      _this2.myTween.staggerTo(
      thingsDB[getOne(thingsDB)],
      0.5,
      { x: "100vw", autoAlpha: 1 },
      0.3);

    });
  } }, { key: "render", value: function render()

  {var
    thingsDB = this.thingsDB,myThings = this.myThings;
    return (
      React.createElement("section", null,
        React.createElement("ul", null,
          thingsDB.map(function (item, idx) {return (
              React.createElement("li", { key: item.id, ref: function ref(el) {return myThings[idx] = el;} },
                item.name));}))));





  } }]);return Anim;}(React.Component);


/************ PARENT APP ************/var

MyApp = function (_React$Component2) {_inherits(MyApp, _React$Component2);
function MyApp(props) {_classCallCheck(this, MyApp);var _this3 = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this,
  props));
  _this3.state = {
    things: thingsArray };return _this3;

}_createClass(MyApp, [{ key: "render", value: function render()

  {
    return (
      React.createElement("div", { className: "container" },
        React.createElement(Anim, { thingsDB: this.state.things })));


  } }]);return MyApp;}(React.Component);


ReactDOM.render(React.createElement(MyApp, null), document.getElementById("app"));
  </script>



