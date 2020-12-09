
function scrollFunction() {
    if (window.pageYOffset > 20) {
        $(".navbar").addClass('scrolled');
    } else {
        $(".navbar").removeClass('scrolled');
    }
}

function auto_height(elem) {
    elem.style.height = "2px";
    elem.style.height = (elem.scrollHeight) + "px";
}

(function () {
    var username = $('#name');
    var date = $('#date');
    var phone_number = $('#phone_number');
    var  address = $('#address');
    $('.btn').on('click', function () {
        if ( address.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else if (date.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else if (username.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else if (phone_number.val() == "") {
            $(".alert").css("display", "block");
            $(".success").css("display", "none");
             
        } else {
            $(".alert").css("display", "none");
            $(".success").css("display", "block");
        }
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('phone_number').value = '';
        document.getElementById('address').value = '';
    });

}());
