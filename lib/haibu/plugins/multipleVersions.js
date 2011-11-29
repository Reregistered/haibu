
var path = require('path'),
    exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    haibu = require('../../haibu');

var multipleVersions = exports;

//
// Name this plugin so it can be accessed by name
//
multipleVersions.name = 'multipleVersions';

//
// ### function init (options, callback)
// #### @options {Object} Options to initialize this plugin with
// #### @callback {function} Continuation to respond to when complete
// Initalizes the `chroot` plugin in the current `haibu` environment.
//
multipleVersions.init = function (options, callback) {
  options = options || {};
  options.directories = options.directories || {};
  callback = callback || function () { };

  //
  // Add the configuration necessary for chroot plugin
  //
  haibu.config.set('multipleVersions', {
    enabled: true,
    root: root,
    source: source
  });

  haibu.config.set('directories:nodeInstallation', options.directories.node);
  haibu.config.set('directories:npmInstallation', options.directories.npm);

  haibu.utils.initDirectories({
    node: options.directories.node,
    npm: options.directories.npm
  }, callback);
};
