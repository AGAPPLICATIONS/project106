//https://teachablemachine.withgoogle.com/models/8jWDM9tkW///
function detectsounds() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8jWDM9tkW/model.json", modelloaded);

    function modelloaded() {
        classifier.classify(gotResults);

        function gotResults(error, result) {
            if (result = error) {
                console.log(error);

            } else {
                console.log(result);
            }



        }
    }





















}