const videos = document.querySelectorAll('video');

let count = 0;

const sun = () => {

    let video = videos[count];
    video.style.zIndex = '1';

    count++;

    if (count === videos.length) {
        count = 0;
        videos.forEach(video => {
            video.style.zIndex = '0';
        })
    }
    
    
}

setInterval(sun, 15000);