$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).text( "Light Mode" );
    } else {
        $( "body" ).addClass( "dark" );
        $( ".change" ).text( "Dark Mode" );
    }
});