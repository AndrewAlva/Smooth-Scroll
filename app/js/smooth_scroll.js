var SmoothScroll = function(args){
	if (!args) args = {};

	var _self = this;
	
	this.ui = {
		el: document.querySelector('.js-scroll'),
		sections: document.querySelectorAll('.js-scroll-section'),
		heightEl: null      
	}
	
	this.state = {
		total: this.ui.sections.length,
		scroll: {
			target: 0,
			current: 0,
			ease: 0.125
		},
		bounds: {
			height: window.innerHeight,
			scrollHeight: 0,
			threshold: 100
		},
		isResizing: false
	}
   
	this.sections = null;

	this.init = function(){
		this.bindAll();
		this.setInitial();
		this.setFakeHeight();
		this.getSections();
		this.addListeners();
	}

	this.bindAll = function(){
		var _this = this; // "_this" could be replaced by _self, maybe
		['onScroll', 'onResize', 'render'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});
	}

	this.render = function(){ // "render" could be renamed to "render" to use with RAF
		var scroll = this.state.scroll;


		scroll.current += (scroll.target - scroll.current) * scroll.ease;
		if (scroll.current < .1) scroll.current = 0;

		this.transformSections();
	}

	this.transformSections = function(){
		var _state = this.state;
		var total = _state.total;
		var isResizing = _state.isResizing;
		var scroll = _state.scroll;

		var translate = "translate3d(0, " + -scroll.current + "px, 0)";

		for (var i = 0; i < total; i++) {
			var data = _self.sections[i];
			var el = data.el;
			var bounds = data.bounds;

			var isVisible = _self.isVisible(bounds);

			if (isVisible || isResizing) {
				Object.assign(data, { out: false });
				el.style.transform = translate;
			} else if (!data.out) {
				Object.assign(data, { out: true });
				el.style.transform = translate;
			}
		}
	}

	this.isVisible = function(bounds){
		var _state$bounds = this.state.bounds;
		var height = _state$bounds.height;
		var threshold = _state$bounds.threshold;

		var current = this.state.scroll.current;

		var top = bounds.top;
		var bottom = bounds.bottom;


		var start = top - current;
		var end = bottom - current;
		var isVisible = start < threshold + height && end > -threshold;

		return isVisible;
	}

	this.getSections = function(){
		var _this = this;

		if (!this.ui.sections) return;
		this.sections = [];

		this.ui.sections.forEach(function (el) {
			el.style.transform = 'translate3d(0, 0, 0)';

			var _el$getBoundingClient = el.getBoundingClientRect();

			var top = _el$getBoundingClient.top;
			var bottom = _el$getBoundingClient.bottom;

			var state = {
				el: el,
				bounds: {
					top: top,
					bottom: bottom
				},
				out: true
			};

			_this.sections.push(state);
		});
	}

	this.setInitial = function(){
		var el = this.ui.el;

		Object.assign(el.style, {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			overflow: 'hidden'
		});

		document.body.classList.add('is-smooth-scroll');
	}

	this.setFakeHeight = function(){
		var _state = this.state;
		var total = _state.total;
		var bounds = _state.bounds;


		if (!this.ui.heightEl) {
			this.ui.heightEl = document.createElement('div');
			this.ui.heightEl.classList.add('js-fake-scroll');
			document.body.appendChild(this.ui.heightEl);
		}
		var _ui$sections$getBound = this.ui.sections[total - 1].getBoundingClientRect();

		var bottom = _ui$sections$getBound.bottom;

		bounds.scrollHeight = bottom;

		this.ui.heightEl.style.height = bottom + 'px';
	}

	this.onScroll = function(){
		var scroll = this.state.scroll;
		scroll.target = window.scrollY;
	}

	this.onResize = function(){
		this.state.isResizing = true;

		if (this.sections) {
			this.sections.forEach(function (_ref) {
				var el = _ref.el;
				var bounds = _ref.bounds;

				el.style.transform = 'translate3d(0, 0, 0)';

				var _el$getBoundingClient = el.getBoundingClientRect();

				var top = _el$getBoundingClient.top;
				var bottom = _el$getBoundingClient.bottom;


				bounds.top = top;
				bounds.bottom = bottom;
			});

			// this.transformSections();
		}

		this.setFakeHeight();

		this.state.isResizing = false;
	}

	this.addListeners = function(){
		window.addEventListener('scroll', this.onScroll);
		window.addEventListener('resize', this.onResize);
	}

}















