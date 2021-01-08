if($(window).width() <= 1199){
    $("#sidebar").hide();
}

$( function() {
    var icons = {
      header: "ui-icon-triangle-1-e",
      activeHeader: "ui-icon-triangle-1-s"
    };
    $( "#project-list" ).accordion({
      icons: icons
    });
    $( "#project-list" ).accordion( "option", "icons", icons );
  } );



