// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
    let solarTop = $('.solar').offset().top;
    let solarLeft = $('.solar').offset().left;

    let earth = $('<div></div>').addClass('earth');
    $('.pb-3').append(earth);
    $(earth).offset({ top: solarTop - 70 });
    $(earth).offset({ left: solarLeft + 70 });

});