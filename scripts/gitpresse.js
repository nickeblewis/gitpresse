/*
  Gitpresse' 0.9 alpha
*/

//Load the extendify library
load('extendify.js', function() {

  if (typeof window.jQuery === 'undefined') { 
    console.log('Gitpresse\' requires jQuery 1.9.0 or newer');
    return;
  }
  
  //Extend the window namespace with the default Extendify methods 
  extend(window);

  //Modify the dom with the editing tools
  $(document).ready(function() {
    
    $(window).load(function() {
  
      //Inject the stylesheet into the head
      
      //Define the toolbar
      var toolbar = {div: {'class': 'gitpresse-toolbar'}};
      
      //Add the toolbar (hidden)
      
      //Measure the toolbar, add margin for the toolbar and prepend to the body
    
      
      //Boot the current branch (gh-pages)
  
    });
  });
  
  namespace('gitpresse.editing', function() {
   
    
   
  });
});

