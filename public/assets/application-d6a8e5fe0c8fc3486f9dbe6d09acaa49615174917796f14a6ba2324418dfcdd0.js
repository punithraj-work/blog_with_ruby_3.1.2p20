// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "./controllers"
import * as bootstrap from "bootstrap"  
import './add_jquery'
import 'bootstrap-table'

//= require select2
//= require select2-full
//= require jquery

$(function() {
    $('.select2').select2();
    $('.article_city').select2({
        allowClear: true,
        placehodler: "Select",
        closeOnSelect: false
    
    })
});

