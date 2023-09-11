console.log('Hello!!!');

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
}

// let html5QrcodeScanner = new Html5QrcodeScanner(
//   'reader',
//   { fps: 10, qrbox: { width: 250, height: 250 } },
//   /* verbose= */ false
// );
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);

const html5QrCode = new Html5Qrcode(/* element id */ 'reader');
html5QrCode
    .start(
        { facingMode: 'environment' },
        {
            fps: 10, // Optional, frame per seconds for qr code scanning
            qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
        },
        (decodedText, decodedResult) => {
            // do something when code is read
        },
        (errorMessage) => {
            // parse error, ignore it.
        }
    )
    .catch((err) => {
        // Start failed, handle it.
    });
