import QRCodeStyling from "qr-code-styling";
import Image from './logo.png';

export async function getQrCodeObject(value, callback) {
    const qrCode = new QRCodeStyling({
        width: 1024,
        height: 1024,
        data: value,
        image: Image,
        dotsOptions: {
            color: "#4267b2",
            type: "dots"
        },
        backgroundOptions: {
            color: "#0000",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 10,
            imageSize: 0.2,
        },
        cornersSquareOptions: {
            type: "extra-rounded",
            color: "#000000"
        },
        cornersDotOptions: {
            type: "dot",
            color: "#000000"
        },
    });
    callback && callback(qrCode);
    return qrCode;
}