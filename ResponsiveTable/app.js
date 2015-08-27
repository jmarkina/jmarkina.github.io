$(document).ready(function()  {
    moveProgressBar();
    //Finished funding animation
    $('.progress-bar-full').animate({"width":"3.75rem"}, 2500);
    
    //Change data-progress-percent value in HTML file to see different
    //funding proges percentage
    function moveProgressBar() {
        var getPercent = ($('.animate-bar-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.animate-bar-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        $('.animate-base').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    function fullProgressBar() {
        $('.progress-bar-full')
    }

});