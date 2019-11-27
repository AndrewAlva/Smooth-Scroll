var RAF = {
    els: [],
    add: function(object) {
    	this.els.push(object);
        object.init();
    },
    remove: function(object) {
    	var idx = this.els.indexOf(object);
    	this.els.splice(idx, 1);
    },
    init: function() {
        this.animate();
    },
    animate: function() {
        requestAnimationFrame(RAF.animate);
        RAF.render();
    },
    render: function() {
        for (var i = 0; i < RAF.els.length; i++) {
            RAF.els[i].render();
        }
    }
}