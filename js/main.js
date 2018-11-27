;
(function () {
    "use strict";


    const editor = document.querySelector('.ba-html__editor'),
        div = document.querySelector(".ba-html__div");

    document.addEventListener('keydown', showEditor);
    document.addEventListener('keydown', hideEditor);
    document.addEventListener('keydown', showEditor);



    function showEditor(event) {

        if (event.ctrlKey && event.keyCode == 69) {
            event.preventDefault();
            editor.style.display = "block";

        }
    }

    function hideEditor(event) {
        if (event.ctrlKey && event.keyCode == 83) {
            event.preventDefault();

            div.innerHTML = editor.value;

            editor.style.display = "none";
        }
        if (event.keyCode == 27) {
            event.preventDefault;
            editor.style.display = "none";

        }
    }

})();