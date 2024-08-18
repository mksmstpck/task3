$(document).ready(function() {
    loadReviewsFromLocalStorage();

    $('#buy').on('click', function() {
        alert($(this).data('info'));
    });

    $('#addReviewButton').on('click', function() {
        var newObjectName = $('#newReviewName').val();
        if (newObjectName) {
            addReviewToShowcase(newObjectName);

            saveReviewToLocalStorage(newObjectName);

            $('#newReviewName').val('');
        }
    });

    function addReviewToShowcase(review) {
        $('.custom-showcase').append('<div class="custom-item">' + review + '</div>');
    }

    function saveReviewToLocalStorage(review) {
        var reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        reviews.push(review);

        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviewsFromLocalStorage() {
        var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(function(review) {
            addReviewToShowcase(review);
        });
    }
});