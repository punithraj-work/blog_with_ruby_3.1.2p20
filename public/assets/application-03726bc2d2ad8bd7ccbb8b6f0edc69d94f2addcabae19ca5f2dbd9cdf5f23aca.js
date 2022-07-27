// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "./controllers"
import './add_jquery'

//= require select2
//= require select2-full
//= require jquery

import '../assets/stylesheets/application.css'

import './controllers/select2_controller.js'

$(function() {
    // $('.select2').select2();
    $('#article_city').select2();
    $('#article_city').select2({
        allowClear: true,
        placehodler: "Select",
        closeOnSelect: true
    })

});