module.exports = {
  /*
   *  $main is the required default mining function that will be called
   *  via a miners default endpoint, and node.js mine() function.
   *  The core of your supply logic should go here.
   */
  $main: function($, data, config, callback){
    /*
     *  $:        an internal stateless storage object and holds any miners and
     *            injected attributes from the $inject() function
     *
     *  data:     the incoming data as a JSON object
     *
     *  config:   object containing connected input names and parameter values
     *
     *  callback: function for completing the processing of this data point.
     *            Use the first parameter for errors and the second as an object
     *            for output data - callback(err, outputs);
     */

    return callback(null, data);
  }
};
