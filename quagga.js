// Load QuaggaJS
Quagga.init({
    inputStream: {
      // Use the camera stream as the input source
      constraints: {
        facingMode: 'environment' // use the back camera on mobile devices
      },
      area: { // defines rectangle of the detection area in relation to the canvas element
        top: "30%",    // top offset
        right: "15%",  // right offset
        left: "15%",   // left offset
        bottom: "30%"  // bottom offset
      }
    },
    decoder: {
      // Define which types of codes to scan
      readers: ['ean_reader']
    }
  }, function(err) {
    if (err) {
      console.error('Error initializing Quagga', err);
      return;
    }
    alert('Quagga initialized');
    
    // Start the scanner when the video stream is ready
    video.addEventListener('canplay', function() {
      Quagga.start();
    });
    
    // Listen for barcode scans
    Quagga.onDetected(function(result) {
      alert('Barcode detected', result.codeResult.code);
    });
  });
  