$(document).ready(function(){
    /*
    Were finding the nav element and hiding it here 
    */
    $('nav').hide();

    // Setup our click function 
     $('.menu-button').click(function(){
         $('nav').slideToggle();
     });   
    
});