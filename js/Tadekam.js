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