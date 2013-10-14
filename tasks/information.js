/*
 * information
 * https://github.com/Saturate/grunt-information
 *
 * Copyright (c) 2013 Allan Kimmer Jensen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('information', 'Display some project information at run time!', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pgk: './package.json',
      bower: './bower.json',
      showVersions: true
    });

    var projectInfo = require('./package.json'),
        width = 80,
        contacts = [];

    grunt.log.subhead(grunt.log.wraptext(width, projectInfo.description));
    
    // Project Contacts
    grunt.log.subhead(grunt.log.wraptext(width, 'Contacts: '));
    
    contacts.push( projectInfo.author );

    projectInfo.contributors.forEach(function (element, index, array)  {
       contacts.push(array[index].name  + ' <' + array[index].email + '>');
    });

    contacts.forEach(function (element, index, array)  {
      grunt.log.writeln([grunt.log.wraptext( width, ' - ' + array[index] )]);
    });

    if(options.showVersions) {
      // Project Infomation
      grunt.log.subhead(grunt.log.wraptext(width, 'Project Infomation: '));
      grunt.log.writeln([grunt.log.wraptext( width, ' - Node version: ' + process.versions.node )]);
      grunt.log.writeln([grunt.log.wraptext( width, ' - Grunt version: ' + grunt.version )]);
    }

    // Debugging
    grunt.verbose.writeln(JSON.stringify(projectInfo));

    // Iterate over all specified file groups.
    // this.files.forEach(function(f) {
    //   // Concat specified files.
    //   var src = f.src.filter(function(filepath) {
    //     // Warn on and remove invalid source files (if nonull was set).
    //     if (!grunt.file.exists(filepath)) {
    //       grunt.log.warn('Source file "' + filepath + '" not found.');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(function(filepath) {
    //     // Read file source.
    //     return grunt.file.read(filepath);
    //   }).join(grunt.util.normalizelf(options.separator));

    //   // Handle options.
    //   src += options.punctuation;

    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);

    //   // Print a success message.
    //   grunt.log.writeln('File "' + f.dest + '" created.');
    // });
  });

};
