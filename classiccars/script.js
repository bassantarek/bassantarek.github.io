/* menu opened and the sections rotated once clicking the menu */
document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change');

    })
})


/* Close the menu once we click the sections */
document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () =>{
        document.querySelectorAll('.target').forEach((item)=>{
            item.classList.remove('change');
    
        })
    })
})


/* Play the videos at hover */
const videos = document.querySelectorAll('video');

videos.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    })

    video.addEventListener('mouseout', () => {
        video.pause();
    })

})