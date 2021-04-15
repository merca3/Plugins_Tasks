let screened = $('#screen');
let counting = '';

$('#delete').click(function() {
    screened.text('');
    counting = '';
});

$('.operator').click(function() {
    if ($(this).text() === 'x') {
        screened.append('*');
        counting += '*';
    } else {
        screened.append($(this).text());
        counting += $(this).text();
    }
});

$('.num').click(function() {
    screened.append($(this).text());
    counting += $(this).text();
});

$('#eqn-bg').click(function() {
    const result = eval(counting);
    screened.text(result);
    counting = result;
});