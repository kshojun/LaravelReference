$(function() {
    $('#word').keypress(function(e) {
        // enter key
        if (e.which == 13) {
            var word = $('#word').val()
            window.open('https://search.readouble.com/?query=' + word, '_blank');
        }
    })

    $('#search').on("click", function() {
        var word = $('#word').val()
        window.open('https://search.readouble.com/?query=' + word, '_blank');
    })
})