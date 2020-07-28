import React, { Component } from "react";
import "jquery/src/jquery"
import About from "../views/About";
import "../sassc/about.scss";

$(window).load(function(){

    $('.loader').fadeOut(300);

});
$('.object-label').on('click', function(){
    $('.object-label').not(this).find($('.object-info')).fadeOut(200);
    $(this).find('.object-info').fadeToggle(200);
});