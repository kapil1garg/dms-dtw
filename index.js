module.exports = {
  $main: function($, data, config, callback){
    function dtw(n, m) {
      // get lengths of n, m
      var nLength = n.length;
      var mLength = m.length;

      // create memoization table with initializers
      var memo = [];

      for (var i = 0; i <= nLength; i++) {
        memo[i] = [];

        for (var j = 0; j <= mLength; j++) {
          if (i === 0 && j === 0) {
            memo[i][j] = 0;
          } else if (j === 0 || i === 0) {
            memo[i][j] = 1e+100;
          } else {
            memo[i][j] = 0;
          }
        }
      }

      // fill in memoization table
      for (var k = 1; k <= nLength; k ++) {
        for (var l = 1; l <= mLength; l++) {
          var cost = Math.abs(n[k - 1] - m[l - 1]);

          memo[k][l] = cost + Math.min(memo[k - 1][l],
                                       memo[k][l - 1],
                                       memo[k - 1][l - 1]);
        }
      }

      // return signal dissimilarity
      return memo[nLength][mLength];
    }

    // compute and return dtw dissimilarity
    var output = {
      similarity: dtw(data.query, data.template)
    };

    return callback(null, output);
  }
};
