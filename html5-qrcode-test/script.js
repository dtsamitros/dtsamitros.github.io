
const html5QrCode = new Html5Qrcode(/* element id */ 'reader');
html5QrCode
    .start(
        { facingMode: 'environment' },
        {
            fps: 10, // Optional, frame per seconds for qr code scanning
            qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
        },
        (decodedText, decodedResult) => {
            document.getElementById("last-code-scanned").innerHTML = decodedText;
        },
        (errorMessage) => {
            // parse error, ignore it.
        }
    )
    .catch((err) => {
        // Start failed, handle it.
    });
