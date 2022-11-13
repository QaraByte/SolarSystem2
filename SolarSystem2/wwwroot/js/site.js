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

    //let timerId = setInterval(() => ({
    //    $(earth).offset({ top: solarTop - 20 })
    //}), 2000);
    //setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

    //let timerId = setInterval(function tick() {
    //    let solarTop = $('.solar').offset().top;
    //    let solarLeft = $('.solar').offset().left;
    //    $(earth).offset({ top: solarTop - 50 });
    //    $(earth).offset({ left: solarLeft + 70 });
    //    console.log(solarTop);
    //    //console.log(timerId);
    //}, 1000);

    animation(null, earth);
});

function animation(args, elem) { // некоторые аргументы определим на будущее
    var o = {
        radius: 250, // радиус окружности 
        speed: 50 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
    }
    var f = 0;
    var s = 2 * Math.PI / 180; //Вычислим угол
    let timerId= setInterval(function () { // функция движения 
        f += s; // приращение аргумента
        //elem.style.left = 235 + $.radius * Math.sin(f) + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
        $(elem).offset({ left: 920 + o.radius * Math.sin(f) });
        //elem.style.top = 235 + $.radius * Math.cos(f) + 'px';
        $(elem).offset({ top: 400 + o.radius * Math.cos(f) });
        console.log($(elem).offset().left);
    }, o.speed)
    console.log(timerId);
}