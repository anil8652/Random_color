const getcolor = () => {
    // hex code
    const randomNumber =Math.floor((Math.random()*16777215 ));
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode;
    //copy colorcode by clicking on button
    navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener(
    'click', getcolor)

    //on refresh color will change
getcolor();

