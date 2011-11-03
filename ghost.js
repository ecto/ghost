module.exports = {
  decompose: function(func){
    var t = {
      name: null,
      args: null,
      body: null
    }
    var raw = func.toString();
    t.name = func.name;
    t.args = raw
      .match(/\((.*)\)/)[1]
      .replace(/\s*/g,'')
      .split(',');
    t.body = raw
      .match(/\{([\s\S]*)\}/m)[1]
      .replace(/^\s*\/\/.*$/mg,'');
    return t;
  },
  compose: function(func){
    var t = new Function(func.args, func.body);
    // need to set function name
    return t;
  }
}
