const nextBtn = document.querySelector(".next");
const imgCon = document.querySelector(".img-container");
const noImg = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
// console.log(noImg.length);
let currImg = 1 ;
let timeOut;
nextBtn.addEventListener("click",()=>{
    currImg++
    clearTimeout(timeOut); //It is a MEthod!! Inbuilt
    updateImg();
});
prevBtn.addEventListener("click",()=>{
    currImg--
    clearTimeout(timeOut);
    updateImg();
});
function updateImg(){
    if(currImg > noImg.length){
        currImg = 1;
    }else if(currImg < 1){
        currImg = noImg.length;
    }
    imgCon.style.transform=`translate(-${(currImg-1)*(600)}px)`;
    timeOut = setTimeout(()=>{
        currImg++
        updateImg()
    },2000);
}
updateImg()