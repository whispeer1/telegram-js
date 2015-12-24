/* jshint node: true */
module.exports = function(config) {
    'use strict';

    config.set({
        reporters: ['dots'],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        preprocessors: {
            'src/**/*.js': ['babel'],
            'test/**/*.js': ['babel']
        }
    });
};