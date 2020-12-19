const starttimer=function () {
    let time=10;
    const time1=setInterval(function () {
        const min=String(Math.abs(Math.trunc(time/60))).padStart(2,0);
        const  sec=String(Math.abs(time%60)).padStart(2,0);
        document.querySelector('span').textContent=`${min}:${sec}`;
      
        document.querySelector('.timeer').addEventListener('click',function () {
            document.querySelector('.login').style.opacity=0; 
            let time=0;
            time--;
        });
        time--;
        if(time === 0){
            document.querySelector('.login').style.opacity=1;
            // document.querySelector('.msg').textContent='LogIn Again';

        }
    },1000);
};
starttimer();
clearTimeout(time1);
document.querySelector('.timeer').addEventListener('click',function () {
    document.querySelector('.login').style.opacity=0; 
});