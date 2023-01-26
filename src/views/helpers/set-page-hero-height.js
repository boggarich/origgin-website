import $ from 'jquery';

export default function setPageHeroHeight () {

    var windowHeight = window.outerHeight;

    if(windowHeight <= 728) {

        $('.page-hero').addClass('page-728');
        $('.main-content').addClass('page-728');

    }

    if(windowHeight >= 900) {

        $('.page-hero').addClass('page-900');
        $('.main-content').addClass('page-900');

    }

}