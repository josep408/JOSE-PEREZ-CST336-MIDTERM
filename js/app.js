 $(document).ready(function(){
  alert("connected");
    $("#query").on("click", function() {

       //ajax call            
       $.ajax({
          method: "GET",
            url: "https://openlibrary.org/api/books",
            dataType: "json",
            data: 'q'{'bibkeys': $("#bibkeys").val()},
              success: function(result){

                    $(".cover").html( );
                     $(".info").html();
                  },    
            error: function(err){
            console.log(err);
            }

        });
    });
   