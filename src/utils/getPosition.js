export default function getPosition() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ lat: latitude, lon: longitude })
                }, function (error) {
                    reject(error)
                });
            } else {
                reject('Geolocalizacion no es compatible con el navegador')
            }
        }, 3000);
    })
}
