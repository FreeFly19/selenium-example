setTimeout(() => {

    console.log("Timer 1500 has been triggered!");

    setTimeout(() => {

        console.log("Timer 1500 + 1000 has been triggered!");

        setTimeout(() => {
            console.log("Timer 1500 + 1000 + 2000 has been triggered!");
        }, 2000);

    }, 1000);

}, 1500);


/**
 * https://www.google.com.ua/search?q=javascript+callback+hell&source=lnms&tbm=isch&sa=X
 */
