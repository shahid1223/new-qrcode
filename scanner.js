const video = document.getElementById('video');

// Use navigator.mediaDevices.getUserMedia to get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    // Set the video source to the camera stream
    video.srcObject = stream;
  })
  .catch((error) => {
    alert('Error accessing camera', error);
  });
