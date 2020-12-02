function auto_height(elem) {
    elem.style.height = "2px";
    elem.style.height = (elem.scrollHeight) + "px";
}

(function () {
    var username = $('#name');
    var email = $('#email');
    var school = $('#school');
    var  question = $('#question');
    $('.btn').on('click', function () {
        if ( question.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else if (email.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else if (email.val().includes("@") == false) {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else if (username.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else if (school.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else {
            $(".alert").css("display", "none");
            $(".success").css("display", "block");
        }
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('school').value = '';
        document.getElementById('question').value = '';
    });

}());