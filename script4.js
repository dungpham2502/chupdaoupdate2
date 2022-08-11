let imageArray = ["image/project4/background.jpeg", "image/project4/IMG_0626.jpeg", "image/project4/IMG_0629.jpeg", "image/project4/IMG_0797.jpeg", "image/project4/IMG_0799.jpeg", "image/project4/IMG_0800.jpeg", "image/project4/IMG_0801.jpeg", "image/project4/IMG_0803.jpeg", "image/project4/IMG_0807.jpeg", "image/project4/IMG_0815.jpeg", "image/project4/IMG_0819.jpeg", "image/project4/IMG_0826.jpeg", "image/project4/IMG_0833.jpeg", "image/project4/IMG_0857.jpeg", "image/project4/IMG_0880.jpeg", "image/project4/IMG_1073.jpeg", "image/project4/IMG_1079.jpeg", "image/project4/IMG_1091.jpeg", "image/project4/IMG_1115.jpeg", "image/project4/IMG_1124.jpeg", "image/project4/IMG_1335.jpeg", "image/project4/IMG_1339.jpeg", "image/project4/IMG_1375.jpeg", "image/project4/IMG_1394.jpeg", "image/project4/IMG_1453.jpeg", "image/project4/IMG_1456.jpeg", "image/project4/IMG_1493.jpeg", "image/project4/IMG_1510.jpeg", "image/project4/IMG_1588.jpeg", "image/project4/IMG_1618.jpeg", "image/project4/IMG_1661.jpeg", "image/project4/IMG_1698.jpeg", "image/project4/IMG_1719.jpeg", "image/project4/IMG_1736.jpeg", "image/project4/IMG_1772.jpeg"]
    // tìm độ dài của album-grid
let imageGridNumber = 2;
let imageGridWidth = null;
let imageWidth = null;
let imageMargin = null;
let imageHeight = null;
const albumGrid = document.getElementsByClassName("album-grid")[0];
let screenWidth = 0;

setInterval(function() {
    if (screenWidth != albumGrid.offsetWidth) {
        albumGrid.innerHTML = null;
        // tìm độ dài của album-grid
        screenWidth = albumGrid.offsetWidth;
        // tìm xem cần bao nhiêu thẻ smaller-album-grid
        let proposalNumber = Math.floor(screenWidth / 300);
        if (proposalNumber <= 2) {
            imageGridNumber = 2;
        } else if (proposalNumber == 3) {
            imageGridNumber = 3;
        } else {
            imageGridNumber = 4;
        }
        // tạo thẻ div, tạo class và nhét vào album-grid
        for (let i = 0; i < imageGridNumber; i++) {
            let imageGrid = document.createElement("div");
            imageGrid.setAttribute("class", "image-grid");
            albumGrid.appendChild(imageGrid);
        }
        // tính width của 1 thẻ và set style
        imageGridWidth = screenWidth / imageGridNumber;
        for (let i = 0; i < document.getElementsByClassName("image-grid").length; i++) {
            document.getElementsByClassName("image-grid")[i].style.width = `${imageGridWidth}px`
        }
        // tạo thẻ image và gắn vào từng thẻ thẻ image-grid theo thứ tự
        for (let i = 0; i < imageArray.length; i++) {
            let image = document.createElement("img");
            image.setAttribute("class", "album-grid-photo");
            image.setAttribute("src", imageArray[i]);
            document.getElementsByClassName("image-grid")[i % imageGridNumber].appendChild(image);
        }
        // tính margin, width của image
        if (imageGridNumber = 2) {
            imageMargin = imageGridWidth / 60;
            imageWidth = imageGridWidth * 29 / 30;
        } else {
            imageMargin = 2.5;
            imageWidth = imageGridWidth - 5;
        }
        // set style cho ảnh
        for (let i = 0; i < document.getElementsByClassName("album-grid-photo").length; i++) {
            document.getElementsByClassName("album-grid-photo")[i].style.width = `${imageWidth}px`;
            document.getElementsByClassName("album-grid-photo")[i].style.marginLeft = `${imageMargin}px`;
            document.getElementsByClassName("album-grid-photo")[i].style.marginTop = `${imageMargin}px`;
            document.getElementsByClassName("album-grid-photo")[i].style.boxShadow = "-3px 5px 15px black";
        }
    }
}, 100)

const backGroundHeight = document.getElementById('head').offsetHeight
const btnViewGallery = document.getElementById('view-gal');
btnViewGallery.addEventListener('click', () => {
    window.scrollTo({
        top: backGroundHeight,
        left: 0,
        behavior: "smooth"
    });
});

const btnScrollToTop = document.getElementById('back-to-top');
btnScrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

function backToHomepage() {
    window.location.href = "index.html"
}