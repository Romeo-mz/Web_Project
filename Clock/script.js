const secondHand = document.querySelector('.sec');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hours');
function getDate(){
    const date = new Date();
    const seconds = date.getSeconds();
    
    if(seconds === 59){ //To stop the glitchy effect but didnt work
        var hand = document.querySelector('.hand')
        hand.style.transition = "none";
    }
    else{document.querySelector('.hand').style.transition = 'all 0.05s cubic-bezier(.8,.15,.58,2.67)';}

    const secondsDegree = ((seconds / 60) * 360 + 90 );
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = date.getMinutes();
    const minutesDegree = ((minutes / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = date.getHours();
    const hoursDegree = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(getDate,1000);