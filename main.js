//https://teachablemachine.withgoogle.com/models/8jWDM9tkW///
squawking = 0;
barking = 0;
meowing = 0;
screeching = 0;

function detectsounds() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8jWDM9tkW/model.json", modelloaded);

    function modelloaded() {
        classifier.classify(gotResults);

        function gotResults(error, results) {
            if (results = error) {
                console.log(error);

            } else
                console.log(results);
            r = ((Math.random() * 255)+1).toFixed(0);
            g = ((Math.random() * 255)+1).toFixed(0);
            b = ((Math.random() * 255)+1).toFixed(0);
            document.getElementById("animalsoundcount").innerHTML = "Amount of animal sounds detected: cat: " + meowing + "dog: " + barking + "parrot: " + squawking + "bat: " + screeching;
          document.getElementById("audioplayed").innerHTML="Audio played: "+results[0].label;
          img=document.getElementById("soundimage");
          document.getElementById("animalsoundcount").style.color= rgb(r,g,b)
          document.getElementById("audioplayed").style.color= rgb(r,g,b);
          if (results[0].label == "barking") {
            img.src = "doggo.jpg";
            barking=barking+1;

            
          } else if (results[0].label == "meowing") {
            img.src = "cat.jpg";
            meowing=meowing+1
          } else if (results[0].label == "squaking") {
            img.src = "parrot.jpg";
            squawking=squawking+1;
          } else if (results[0].label == "screeching") {
            img.src = "bat.jpg";
            screeching=screeching+1;
          } else  {
            img.src = "https://s3-whjr-curriculum-uploads.whjr.online/dd5ed82b-b105-4b93-806f-1f9e718b56ec.png";
          
        
        }



    }
}
}
