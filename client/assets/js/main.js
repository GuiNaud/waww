
function displayInput() {
    $("#search .md-button").on('click', function(event) {
        event.preventDefault();
        if(!$("#search .md-input-has-placeholder").is(':visible')) {
            $("#search .md-input-has-placeholder").show();
        } else {
            $("#search .md-input-has-placeholder, .autocomplete").hide();
        }
    });
}

function goBack() {
    window.history.back();
}

function rotateBar() {
    if($(".navbar-toggle .icon-bar:nth-child(3)").is(':visible')) {
        $(".navbar-toggle").css('margin', '15px 15px 11px 10px');
        $(".navbar-toggle .icon-bar:nth-child(2)").css({
            transform : 'rotate(45deg)',
            webkit: 'rotate(45deg)',
            transition: 'transform 0.5s ease'
        });
        $(".navbar-toggle .icon-bar:last-child").css({
            transform : 'rotate(-45deg)',
            webkit: 'rotate(-45deg)',
            marginTop: '-2px',
            transition: 'all 0.5s ease'
        });
        $(".navbar-toggle .icon-bar:nth-child(3)").css({
            display: 'none',
            transition: 'all 0.5s ease'
        });
    } else {
        $(".icon-bar").css({
            display:'block',
            transform : 'rotate(0)',
            webkit: 'rotate(0)',
            transition: 'all 0.5s ease'
        });
        $(".navbar-toggle").css('margin', '10px 15px 4px 10px');
        $(".navbar-toggle .icon-bar:last-child").css('margin-top', '4px');
    }
}