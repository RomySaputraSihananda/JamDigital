let jam = document.getElementById('jam');
const week = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', "jum'at", 'sabtu'];

setInterval(() => {
    const h = new Date();
    let clock = `${week[h.getDay()]} ${add0(h.getHours())} : ${add0(h.getMinutes())} : ${add0(h.getSeconds())}`;
    jam.textContent = clock;
}, 1000);

const add0 = (num) => {
    if(num < 10){
        num = '0' + num;
        return num;
    }else{
        return num;
    }
}