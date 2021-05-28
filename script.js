<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCG_VPuIJ65yTXRC2PdL2EA-TsiqpRNWtM",
    authDomain: "yomeleladatabase.firebaseapp.com",
    projectId: "yomeleladatabase",
    storageBucket: "yomeleladatabase.appspot.com",
    messagingSenderId: "524096250123",
    appId: "1:524096250123:web:6960295f183f6a040f020e"
  };
  firebase.initializeApp(firebaseConfig);


  function writeData() {
    firebase.database().ref("Grade6").set({
        name: document.getElementById("nameField").value,
        surname: document.getElementById("surnameField").value,
        MathsMark: document.getElementById("mathsField").value,
        TechnologyMark: document.getElementById("technologyField").value,
        NaturalScienceMark: document.getElementById("naturalscienceField").value,
        EMSMark : document.getElementById("emsField").value,
        EnglishMark: document.getElementById("englishField").value,
        XhosaMark: document.getElementById("xhosaField").value,
        AverageMark: document.getElementById("averageField").value,
        Grade: document.getElementById("gradeField").value,
    })
}
function writeData() {
    firebase.database().ref("Grade7").set({
        name: document.getElementById("nameField7").value,
        surname: document.getElementById("surnameField7").value,
        MathsMark: document.getElementById("mathsField7").value,
        TechnologyMark: document.getElementById("technologyField7").value,
        NaturalScienceMark: document.getElementById("naturalscienceField7").value,
        EMSMark : document.getElementById("emsField7").value,
        EnglishMark: document.getElementById("englishField7").value,
        XhosaMark: document.getElementById("xhosaField7").value,
        AverageMark: document.getElementById("averageField7").value,
        Grade: document.getElementById("gradeField").value,
    })
}

</script>