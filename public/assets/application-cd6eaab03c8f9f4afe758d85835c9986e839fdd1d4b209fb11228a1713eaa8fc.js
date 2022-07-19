// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// $('form-select').select2();
$('.select2').select2({
    placeholder: $(this).data('placeholder')
});

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


require("packs/select2setup");
