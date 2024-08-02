document.getElementById('thumbnailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const youtubeURL = document.getElementById('youtubeURL').value;
    const videoId = youtubeURL.split('v=')[1];
    if (videoId) {
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
        const thumbnailURL = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById('thumbnailImage').src = thumbnailURL;
        document.getElementById('downloadLink').href = thumbnailURL;
        document.getElementById('thumbnailResult').classList.remove('hidden');
    } else {
        alert("Veuillez entrer une URL YouTube valide.");
    }
});
