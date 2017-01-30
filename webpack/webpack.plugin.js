'use strict';

const Del = require('del');

function WebpackPlugin(options) {
    this.options = options;
}

WebpackPlugin.prototype.apply = function apply(compiler) {
    const {clean, dry} = this.options;

    compiler.plugin('run', function(compilation, callback) {
        Del(clean, {dryRun: dry}).then(() => {
            callback();
        });
    });

};

module.exports = WebpackPlugin;