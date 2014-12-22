module.exports = function(method) {
  var memoized = function() {
    var cache = this['__cache' + memoized.cacheId] ||
      (this['__cache' + memoized.cacheId] = {});
    var key = [].join.call(arguments, '|');
    if (cache.hasOwnProperty(key))
      return cache[key];
    return (cache[key] = method.apply(this, arguments));
  }
  memoized.cacheId = '' + Date.now() + Math.random();

  return memoized;
}
