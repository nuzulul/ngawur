function takePicture() {
    if (!navigator.camera) {
        alert("Camera API not supported");
        return;
    }
    var options = {
        quality: 20,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: 1,
        encodingType: 0
    };

    navigator.camera.getPicture(
        function (imgData) {
            //var el : HTMLElement;
            var el = document.getElementsByClassName('media-object')[0];
            var srcAttr = document.createAttribute("src");
            srcAttr.value = "data:image/jpeg;base64," + imgData;
            el.attributes.setNamedItem(srcAttr);
        },
        function () {
            alert('Error taking picture');
        },
        options);

    return false;
}