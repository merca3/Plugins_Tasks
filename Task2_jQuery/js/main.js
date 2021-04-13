$('.row-img img').hover(function() {
    const newImgLink = $(this).attr('src');
    $('#main-img').attr('src', newImgLink);
})