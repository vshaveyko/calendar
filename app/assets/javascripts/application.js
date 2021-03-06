// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require jquery-ui/datepicker
//= require jquery-ui/effect-drop
//= require_tree .
$(function(){  
	$("#setdate").datepicker( {
		dateFormat: "yy-mm-dd",

		showOtherMonths: true,
      	selectOtherMonths: true,

		showAnim: 'drop',
		showOn: "button",
		buttonText: "<i class='fi-calendar'></i>"
	});

	$("#setdate").change(function() {
		year = $(this).val().slice(0,4);
		month = $(this).val().slice(5,7);
		day = $(this).val().slice(8);
		window.location.href = '/calendar?month='+month+'&year='+year+'&day='+day;
	})
});

