(function($){
    $(function(){
  
      $(document).ready(function(){
        $('.materialboxed').materialbox();
      });

      $(document).ready(function(){
        $('.datepicker').datepicker();
      });
  
      $(document).ready(function(){
        $('input.autocomplete').autocomplete({
          data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
          },
        });
      });

      $(document).ready(function(){
        $('.timepicker').timepicker();
      });
      
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
