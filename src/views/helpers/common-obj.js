import $ from 'jquery';

export const reactSliderSettings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
};

export let handleClose = (self) => {

    self.setState({ modalShow: false });

}

export let setupTabNavigation = () => {

    $('.tab-nav').on('click', function() {

        let tabContentId = $(this).data().tabId;
        let navTabsWrapper = $(this).closest('.page-sub-nav');
        let tabContentWrapper = navTabsWrapper.next('.tab-content-wrapper');

        navTabsWrapper.find('a.active').removeClass('active');
        $(this).addClass('active');

        tabContentWrapper.find('.tab-content.active').removeClass('active');

        $(`#${tabContentId}`).addClass('active');
        

    });

}