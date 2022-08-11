 let imageArray = ["image/project2/IMG_9857.jpeg", "image/project2/IMG_9828.jpeg", "image/project2/IMG_9848.jpeg", "image/project2/IMG_9854.jpeg", "image/project2/IMG_9857.jpeg", "image/project2/IMG_9870.jpeg", "image/project2/IMG_9883.jpeg", "image/project2/IMG_9899.jpeg", "image/project2/IMG_9909.jpeg", "image/project2/IMG_9919.jpeg", "image/project2/IMG_9920.jpeg", "image/project2/IMG_9927.jpeg", "image/project2/IMG_9935.jpeg", "image/project2/IMG_9932.jpeg", "image/project2/IMG_9906.jpeg"]
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
             document.getElementsByClassName("album-grid-photo")[i].style.boxShadow = "-3px 5px 15px black";
             document.getElementsByClassName("album-grid-photo")[i].style.marginTop = `${imageMargin}px`;
         }
     }
 }, 100)

 // set function cho các nút bấm

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