function menuSelected(event,menuID) {
    event.stopPropagation();
    var menuSelectorClass="menuOptionTextSelected";
    $('.' + menuSelectorClass).removeClass(menuSelectorClass);
    $('.menuOptionText#' + menuID).addClass(menuSelectorClass);
    var mainContentSelectorClass="mainContentSelected";
    $('.' + mainContentSelectorClass).removeClass(mainContentSelectorClass);
    $('#mainContent' + menuID).addClass(mainContentSelectorClass);
    $('.header').removeClass('headerRemove');
    var portfolioSelectorClass="portfolioDetailImageHolderSelected";
    $('.' + portfolioSelectorClass).removeClass(portfolioSelectorClass);
    $('#buttonHamburgerClose').click();
}

function portfolioSelected(event,portfolioDetailName,displayValue) {
    var menuID = portfolioDetailName.split("_")[0];
    var portfolioName = portfolioDetailName.split("_")[1];
    menuSelected(event,menuID);
    var portfolioSelectorClass="portfolioDetailImageHolderSelected";
    $('.' + portfolioSelectorClass).removeClass(portfolioSelectorClass);
    $('#portfolioDetail' + portfolioName).addClass(portfolioSelectorClass);
    $('.header').addClass('headerRemove');
    $('#portfolioDetailDisplayValue').text(displayValue);
    window.scrollTo(0,0);
}