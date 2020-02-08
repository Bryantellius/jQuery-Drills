// Changes button from disabled to enabled if input value changes
$(function(){
    $('#input').keyup(function(){
        if($(this).val()==''){   
            $('#btnSubmit').prop('disabled', true);
        }else{
            $('#btnSubmit').prop('disabled', false);
        }
    })
});

let data;
// Event listener for button to display alert when clicked
$('#btnSubmit').click(function() {
    alert($('#input').val());

    data = $('#input').val();
    $('h2').text(data);
    $('h2').hover(
        function() {
            $( this ).addClass( "hover" );
            $('.hover').css({'background-color': 'orange', 'border-radius': '5px'});
        },
            function() {
                $( this ).removeClass( "hover" );
              }
        );
    event.preventDefault();
    
});

$('.container').append($('<div class="list"><h2>' + $('#input').val() + '</h2></div>'));


