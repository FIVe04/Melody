$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var floorPath = $('.home-image path');
    var modalCloseButton = $('.modal-close-button');
    var modal = $('.modal');
    var viewFlatsButton = $('.view-flats');
    var flats = $('.flats path');
    var flatLink = $('.flat-link');
    flats.on('click', function () {
        
        currentLink = $(this).attr("data-flat");
        console.log(currentLink);
        $('.current-flat').removeClass('current-flat');
        $('.current-link').removeClass('current-link');
        $(this).toggleClass('current-flat');
        $(`[data-flatA=${currentLink}]`).toggleClass('current-link');
        
    });
    
    flats.on('mouseover', function () {
        currentLink = $(this).attr("data-flat");
        console.log(currentLink);
        $('.current-flat').removeClass('current-flat');
        $('.current-link').removeClass('current-link');
        $(this).toggleClass('current-flat');
        $(`[data-flatA=${currentLink}]`).toggleClass('current-link');
        
    });
    
    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr("data-floor");
        $('.counter').text(currentFloor);
    });

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false })
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
        
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false })
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
        
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    }

});