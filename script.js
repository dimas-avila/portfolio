document.querySelector('.dark').addEventListener('click', () => {
    let main = document.getElementById('main');
    main.style.backgroundColor = "var(--bg)";
    let body = document.querySelector('body');
    body.style.backgroundColor = "var(--bg)"
    body.style.color = "white";
    main.style.color = "white";
    document.getElementsByClassName('link')[0].style.color = "white";
    document.getElementsByClassName('link')[1].style.color = "white";
});

document.querySelector('.bright').addEventListener('click', () => {
    let main = document.getElementById('main');
    main.style.backgroundColor = "var(--primary)";
    let body = document.querySelector('body');
    body.style.backgroundColor = "var(--primary)"
    body.style.color = "black";
    main.style.color = "black";
    document.getElementsByClassName('link')[0].style.color = "black";
    document.getElementsByClassName('link')[1].style.color = "black";
});

document.querySelector('.dark').addEventListener('mouseover', () => {
    document.querySelector('.negro').style.visibility = "visible";
});

document.querySelector('.dark').addEventListener('mouseleave', () => {
    document.querySelector('.negro').style.visibility = "hidden";
});


document.querySelector('.bright').addEventListener('mouseover', () => {
    document.querySelector('.blanco').style.visibility = "visible";
});

document.querySelector('.bright').addEventListener('mouseleave', () => {
    document.querySelector('.blanco').style.visibility = "hidden";
});