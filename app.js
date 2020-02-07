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
// Event listener for button to display alert when clicked
$('#btnSubmit').click(function() {
    let data = $('#input').val();
    alert(data);
    $('.container').append($('<div><h2></h2></div>'));
    $('h2').append(data);
});
