Package.describe({
  name: 'jonlachlan:quilljs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Quill.js version 0.20.0 for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jonlachlan/quilljs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  // api.use('jonlachlan:ottypes-rich-text')
  api.export('Quill');
  api.addFiles('quill/quill.js');
  api.addFiles('export.js');
  api.addFiles('quill/quill.base.css', 'client');
  api.addFiles('quill/quill.snow.css', 'client');
  api.export('Delta');
});
