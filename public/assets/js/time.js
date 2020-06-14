"use strict"

const imageOne="images/winter.jpg"
const imageTwo="images/forset.jpg"
const imageThree="images/sand.jpg"
// const imageOne = "../../images/winter.jpg";


let x = 0;

function changeImage()
{
    console.log('here')
    let img = document.getElementById("snow");
    let images = [imageOne, imageTwo, imageThree]
    
    console.log(images)

    img.src = images[x] 

    x++

    if(x >= images.length){
        x = 0;
    } 

    console.log(img)
    fadeImg(img, 100, true);
    setTimeout("changeImage()", 30000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 20000);
    }
}




setTimeout(changeImage, 30000);