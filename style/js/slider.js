// //user clicks on the left or right array 
// //and sees the next three books from the gallery
// //he can click on the gallery anywhere and it gets him 
// //on the page with the specific catalog page


// //gallery is organized by two slide pages of three books each
// //row of three pages has a class "slider-1" and "slider-2"
// //invisible row has a class "hide"
// //visible row has a class "show"

// $(document).ready(function(){
//     $('.slider').slick({
//       autoplay: true
//     });
// });


$(document).ready(function() {

    $('.slider').slick({
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }

        }, {
            breakpoint: 820,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });


});

// (function() {
  
// var counter = 0, // to keep track of current slide
//     $items = document.querySelectorAll('.catalog, .slider-1, .slider-2'), // a collection of all of the slides, caching for performance
//     numItems = $items.length; // total number of slides

// // this function is what cycles the slides, showing the next or previous slide and hiding all the others
// var showCurrent = function(){
//   var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
//   // remove .show from whichever element currently has it 
//   // http://stackoverflow.com/a/16053538/2006057
//   [].forEach.call( $items, function(el){
//     el.classList.remove('show');
//   });
  
//   // add .show to the one item that's supposed to have it
//   $items[itemToShow].classList.add('show');    
// };

// // add click events to prev & next buttons 
// document.querySelector('.catalog').addEventListener('click', function() {
//      counter++;
//      showCurrent();
//   }, false);

// document.querySelector('.catalog').addEventListener('click', function() {
//      counter--;
//      showCurrent();
//   }, false);
  
// })(); 