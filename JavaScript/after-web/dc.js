window.onload = function() {
    clock();
};

function clock() {
    let today = new Date();
    let todayHour = today.getHours();
    let todayMin = today.getMinutes();
    let todaySec = today.getSeconds();
    let todayAmpm = apm(todayHour);
    const watchEl = document.getElementById('watch');
    if(todaySec < 10) {
        todaySec = '0' + todaySec;
    }
    
    watchEl.innerHTML = `<span style="font-size:30%;">${todayAmpm}</span> ${todayHour % 12}:${todayMin}:${todaySec}`;
    window.setInterval('clock()', 1000);
}

function apm(h) {
    let ampm = Math.floor(h / 12);
    if(ampm == 0) {
        return 'AM';
    } else {
        return 'PM';
    }
}