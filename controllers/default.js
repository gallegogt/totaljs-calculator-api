exports.install = function() {
    F.route('/', view_calculator, ['post']);
};

function view_calculator() {
    var self = this;
    var data = null;
    try {
      data = JSON.parse(self.req.body.query);
    } catch (execption) {
      data = null;
    }

    if (data && data.op && data.ops) {
      var result = self.module('calc').make_operation(data.op, data.ops);
      self.plain(result);
    } else {
      self.plain('null');
    }
}
