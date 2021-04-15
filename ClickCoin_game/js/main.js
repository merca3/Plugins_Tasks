const totalCoins = $('#total-coins');
const availCoins = $('#available-coins');
const price1El = $('#price1');
const price2El = $('#price2');
const upg1xEl = $('#upgrade1x');
const upg10xEl = $('#upgrade10x');
const upg1xBtn = $('#up1x');
const upg10xBtn = $('#up10x');

let totalCoinsInt = parseInt($(totalCoins).html());
let availCoinsInt = parseInt($(availCoins).html());
let price1 = parseInt($(price1El).html());
let price2 = parseInt($(price2El).html());
let upg1xAmount = parseInt($(upg1xEl).html());
let upg10xAmount = parseInt($(upg10xEl).html());

function disableBtns() {
    if (availCoinsInt < price1) {
        $(upg1xBtn).prop('disabled', true);
    } else {
        $(upg1xBtn).prop('disabled', false);
    };
    if (availCoinsInt < price2) {
        $(upg10xBtn).prop('disabled', true)
    } else {
        $(upg10xBtn).prop('disabled', false);
    };
}

function changeCoinsInnerHTML() {
    $(totalCoins).html(totalCoinsInt);
    $(availCoins).html(availCoinsInt);
}

setInterval(function() {
    totalCoinsInt += upg1xAmount + upg10xAmount * 10;
    availCoinsInt += upg1xAmount + upg10xAmount * 10;
    changeCoinsInnerHTML()
    disableBtns();
}, 1000);


$('#click-me').click(function() {
    totalCoinsInt++;
    availCoinsInt++;
    changeCoinsInnerHTML();
    disableBtns();
});

$('#up1x').click(function() {
    if (availCoinsInt >= price1) {
        availCoinsInt = availCoinsInt - price1;
        price1 = Math.round(price1 * 1.1);
        upg1xAmount++;
        $(upg1xEl).html(upg1xAmount);
        $(price1El).html(price1);
        $(availCoins).html(availCoinsInt);
        disableBtns();
    };
});

$('#up10x').click(function() {
    if (availCoinsInt >= price2) {
        availCoinsInt = availCoinsInt - price2;
        price2 = Math.round(price2 * 1.1);
        upg10xAmount++;
        $(upg10xEl).html(upg10xAmount);
        $(price2El).html(price2);
        $(availCoins).html(availCoinsInt);
        disableBtns();
    }
});