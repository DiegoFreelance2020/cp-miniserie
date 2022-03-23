const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};


const countdown = (elem, finalMessage) => {
    const el = document.getElementById(elem);

    const textDays = el.dataset.textDays
    const textHours = el.dataset.textHours
    const textMinutes = el.dataset.textMinutes
    const textSeconds = el.dataset.textSeconds
    
    const dateDay = el.dataset.dateDay
    const dateMonth = el.dataset.dateMonth
    const dateYear = el.dataset.dateYear
    const dateHour = el.dataset.dateHour
    const dateMinute = el.dataset.dateMinute
    const dateSecond = el.dataset.dateSecond
    
    const deadline = new Date(dateYear,dateMonth,dateDay,dateHour,dateMinute,dateSecond);
    
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `
        
        <div class="box-number" id="days">
            <span class="number">${t.remainDays}</span>
            <span class="text">${textDays}</span>
        </div>
        <div class="box-number" id="hours">
            <span class="number">${t.remainHours}</span>
            <span class="text">${textHours}</span>
        </div>
        <div class="box-number" id="minutes">
            <span class="number">${t.remainMinutes}</span>
            <span class="text">${textMinutes}</span>
        </div>
        <div class="box-number" id="seconds">
            <span class="number">${t.remainSeconds}</span>
            <span class="text">${textSeconds}</span>
        </div>
        `;

        if(t.remainTime <= 1){
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage;
        }
    }, 1000)
};


countdown('clock' , 'Feliz Navidad 2020 :)')