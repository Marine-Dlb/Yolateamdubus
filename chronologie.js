function toggleMedia(mediaId, imageSrc, videoSrc) {
    const mediaElement = document.getElementById(mediaId);
    if (mediaElement.tagName === 'IMG') {
        const videoElement = document.createElement('video');
        videoElement.src = videoSrc;
        videoElement.controls = false;
        videoElement.autoplay = true;
        videoElement.id = mediaId;
        mediaElement.replaceWith(videoElement);
    } else if (mediaElement.tagName === 'VIDEO') {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = mediaElement.alt;
        imgElement.id = mediaId;
        mediaElement.replaceWith(imgElement);
    }

}
