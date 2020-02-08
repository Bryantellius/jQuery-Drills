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
    // Creates item element and appends input text to it
    let item = $('<li>');
    $(item).text(data);
    $('ul').append($(item));
    // $('h2').text(data);
    // $('h2').hover(
    //     function() {
    //         $( this ).addClass( "hover" );
    //         $('.hover').css({'background-color': 'orange', 'border-radius': '5px'});
    //     },
    //         function() {
    //             $( this ).removeClass( "hover" );
    //             $(this).css({'background-color': 'white'})
    //           }
    //     );
    
    //Sets variables, and functions to generate random numbers for colors                  
    let r, g, b;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    // Changes the color of item when clicked
    $('li').click(function(){
        r = getRandomInt(255);
        g = getRandomInt(255);
        b = getRandomInt(255);
        $(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b +')');
        // console.log('rgb(' + r + ' ' +g+ ' ' + b + ')');
    });

    // Removes item when double clicked
    $('li').dblclick(function(){
        $(this).remove();
    });

    event.preventDefault();
    
});

// Attaches new div, h2 and input to div.container
// $('.container').append($('<div class="list"><h2>' + $('#input').val() + '</h2></div>'));

$('.container').append($('<ul class="col my-3"></ul>'));
