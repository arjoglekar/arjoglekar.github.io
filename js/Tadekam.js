function menuSelected(event,menuID,isScrollToTop) {
    event.stopPropagation();
    var menuSelectorClass="menuOptionTextSelected";
    var footerMenuSelectorClass="footerMenuSelected";
    var suffixHamburger = "Hamburger";
    var suffixFooter = "Footer";
    var selectedMenu = menuID.replace(suffixHamburger,"").replace(suffixFooter,"");
    $('.' + menuSelectorClass).removeClass(menuSelectorClass);
    $('.' + footerMenuSelectorClass).removeClass(footerMenuSelectorClass);
    $('#' + selectedMenu).addClass(menuSelectorClass);
    $('#' + selectedMenu + suffixHamburger).addClass(menuSelectorClass);
    $('#' + selectedMenu + suffixFooter + '.columnFooterMenu').addClass(footerMenuSelectorClass);
    var mainContentSelectorClass="mainContentSelected";
    $('.' + mainContentSelectorClass).removeClass(mainContentSelectorClass);
    $('#mainContent' + selectedMenu).addClass(mainContentSelectorClass);
    if(!(menuID.indexOf(suffixFooter) > -1)) {
        $('#buttonHamburgerClose').click();
    }
    if(isScrollToTop) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}

function hamburgerOpenClicked() {
    $('.hamburgerMenu').addClass("hideHamburgerButton");
}

function hamburgerCloseClicked() {
    $('.hamburgerMenu').removeClass("hideHamburgerButton");
}

function toggleCollapsibleContent(id) {
    // $('#' + id + ' .visibleRow').toggleClass('collapsedRow');
    $('#' + id + ' .collapsibleArrow').toggleClass('hideCollapsibleArrow');
}

function submitContact(event) {
    console.log("Submit clicked");
    var data = {};
    if($("#textboxName").val() == "" || $("#textboxEmail").val() == "") {
        $('#errorArea').html("Please fill all the mandatory fields");
        $('#errorArea').css('color','#d8323d');
    }
    else {
        data["name"] = $("#textboxName").val();
        data["email"] = $("#textboxEmail").val();
        data["phone"] = $("#textboxPhone").val();
        data["message"] = $("#textareaMessage").val();

        console.log("data::",data);
        $.ajax({
            type: "POST",
            url: "./php/mail.php",
            data: data,
            success:function() {
                $('#errorArea').html("Email has been sent. You will be contacted shortly.");
                $('#errorArea').css('color','green');
            },
            error:function() {
                $('#errorArea').html("Email has not been sent. Please contact the administrator on the given contact details!!!");
                $('#errorArea').css('color','#d8323d');
            }
        });
    }
}