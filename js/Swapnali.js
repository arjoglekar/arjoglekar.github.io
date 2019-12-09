function menuSelected(event,menuID) {
    console.log("menuSelected::",menuID);
    console.log("event::",event);
    event.stopPropagation();
    var menuSelectorClass="menuOptionTextSelected";
    $('.' + menuSelectorClass).removeClass(menuSelectorClass);
    $('.menuOptionText#' + menuID).addClass(menuSelectorClass);
    //$('#' + menuID + "Hamburger").addClass(menuSelectorClass);
    var mainContentSelectorClass="mainContentSelected";
    $('.' + mainContentSelectorClass).removeClass(mainContentSelectorClass);
    $('#mainContent' + menuID).addClass(mainContentSelectorClass);
    $('#buttonHamburgerClose').click();
}