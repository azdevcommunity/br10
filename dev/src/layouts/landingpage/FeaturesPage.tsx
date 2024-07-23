import React, {useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './overview.built.css'
import Modal from '../../components/Modal';

const features = [
    {
        title: "Vaxta qənaət və rahatlıq",
        description: "Günün istənilən vaxtında, evdən çıxmadan və ya işdən ayrılmadan istədiyiniz xidməti rezervasiya edin.",
        icon: "🕒",
        additionalInfoTitle: "Təhlükəsiz və rahat",
        additionalInfoHeading: "Hər yerdən və hər zaman",
        additionalInfo: "Hər yerdən və hər zaman rezervasiya etmək imkanı ilə həyatınızı daha asan və rahat edin. Siz yalnız vaxtınıza qənaət etmirsiniz, həm də stressdən uzaqlaşırsınız."
    },
    {
        title: "Hər zaman əlçatanlıq",
        description: "Günün 24 saatı, həftənin 7 günü rezervasiya edə bilərsiniz. Artıq iş saatlarını gözləməyə ehtiyac yoxdur.",
        icon: "📅",
        additionalInfoTitle: "Daimi xidmət",
        additionalInfoHeading: "Çevik və rahat",
        additionalInfo: "Xidmətlərimiz hər zaman əlçatandır, belə ki, siz istədiyiniz zaman rezervasiya edə bilərsiniz. Bu sizə müstəsna çeviklik və rahatlıq verir."
    },
    {
        title: "Heç bir qarışıqlıq yoxdur",
        description: "Xatırlatmalar göndərilərək, artıq rezervasiyalar unudulmayacaq.",
        icon: "📌",
        additionalInfoTitle: "Dəqiq və asan izləmə",
        additionalInfoHeading: "Unutma qorxusu olmadan",
        additionalInfo: "Rezervasiyalarınız haqqında xatırlatmalar alaraq, heç bir rezervasiyanı unutmayacaqsınız. Bu sizin üçün hər şeyin asan və nizamlı qalmasını təmin edir."
    },
    {
        title: "Əlavə gəlirlər",
        description: "Əlavə xidmətlər və müxtəlif paketlərdən yararlanın.",
        icon: "💰",
        additionalInfoTitle: "Faydalı təkliflər",
        additionalInfoHeading: "Daha çox dəyər əldə edin",
        additionalInfo: "Xidmətlərimiz sizə yalnız əsas ehtiyacları qarşılamaqdan daha çoxunu təklif edir. Əlavə gəlirlər və xüsusi paketlərdən istifadə edərək, daha çox fayda əldə edə bilərsiniz."
    }
];

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


export const FeaturesPage: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: "", heading: "",
        description: ""
    });

    return (
        <section className="section section-incentive background-alt" data-anim-scroll-group="Incentive"
                 data-deep-link='section-incentive' data-analytics-section-engagement="name:why apple">
            <div className="section-content-responsive" data-component-list="StaggeredHeaderFadeIn">
                <header className="section-header row">
                    <h2 className="section-header-headline typography-section-headline" data-staggered-anchor
                        data-staggered-before-item>
                        Niyə br10<br/>ən yaxşısıdır.
                    </h2>
                    <div className="section-header-cta-container typography-section-headline-link column"
                         data-staggered-before-item>
                        <div className="section-header-cta-list-wrapper">
                            <ul className="section-header-cta-list column">
                                <li className="section-header-cta-item section-header-cta-item-shop">
                                    <a href="https://www.apple.com/us/shop/goto/buy_iphone"
                                       data-analytics-title="shop iphone"
                                       className="icon-wrapper section-header-cta-link">
                                        <span className="icon-copy">Shop iPhone</span>
                                        <span className="icon icon-after more"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            <div className="gallery-container v0" data-component-list="StaggeredFadeIn">
                <div id="scroll-gallery-icon-cards" data-scroll-gallery-icon-cards data-scroll-gallery
                     data-analytics-gallery-id="why apple gallery" aria-label="Why Apple gallery"
                     className="gallery gallery-align-start gallery-icon-cards " data-component-list="ScrollGallery">
                    <div className="scroll-container">
                        <div className="item-container">
                            <ul className="card-set" role="list">
                                <li role="listitem" className="gallery-item grid-item"
                                    data-analytics-gallery-item-id="trade in" data-ac-gallery-item data-staggered-item>
                                    <div id="icon-card-trade-in" className="icon-card card-container"
                                         data-component-list='Modal'>
                                        <div className="card" tabIndex={-1}>
                                            <div className="card-modifier card-padding has-trigger-button fixed-width">
                                                <div className="card-viewport-content">
                                                    <div className='icon-card-content'>
                                                        <div className="icon-container">
                                                            <picture id="overview-incentive-icon-trade-in-2024-iphone-1"
                                                                     className="overview-incentive-icon-trade-in-2024-iphone icon-card-image"
                                                                     data-lazy>
                                                                <source data-empty
                                                                        srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                                        media="(min-width:0px)"/>
                                                                <img
                                                                    src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                    alt=""/>
                                                            </picture>
                                                            <noscript>
                                                                <picture
                                                                    className="overview-incentive-icon-trade-in-2024-iphone icon-card-image">
                                                                    <source
                                                                        srcSet="/v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png, /v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large_2x.png 2x"
                                                                        media="(min-width:0px)"/>
                                                                    <img
                                                                        src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                        alt=""/>
                                                                </picture>
                                                            </noscript>
                                                        </div>
                                                        <div className="copy-container">
                                                            <h3 className="typography-card-headline">Save with
                                                                Apple&nbsp;Trade&nbsp;In.</h3>
                                                            <p className="typography-family-paragraph">
                                <span className="pricing-container">
                                  <span data-tradein-product="iphone11-tradein"
                                        data-product-template="Get ${credit.display.smart}–">Get credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher.</span>
                                  <span data-tradein-product="iphone14promax-tradein"
                                        data-product-template="${credit.display.smart} in credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher."
                                        data-tradein-hide-all="iphone11-tradein,iphone14promax-tradein"></span>
                                  <sup className="footnote footnote-number">
                                    <a href="#footnote-2" aria-label="Footnote 1" data-modal-close>1</a>
                                  </sup>
                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-content-wrapper variant-crossfade"
                                                         data-modal-content-wrapper data-modal-anim-lifecycle
                                                         data-analytics-activitymap-region-id="trade in modal"
                                                         data-modal-class="icon-card-modal trade-in"
                                                         data-modal-id="icon-card-modal-trade-in"
                                                         data-modal-scroll-group-name="icon-card-modal-trade-in">
                                                        <div id="modal-content-trade-in"
                                                             className="icon-card-modal-content modal-content">
                                                            <h3 className="typography-modal-topic-label modal-topic-label">Apple&nbsp;Trade&nbsp;In</h3>
                                                            <h4 className="typography-modal-headline modal-headline">Trade
                                                                in your eligible device for&nbsp;credit.</h4>
                                                            <p className="typography-icon-card-modal-body icon-card-modal-inline-headline">Select
                                                                a new product and add a trade&#x2011;in. Once it’s
                                                                received and verified, we’ll credit your payment method.
                                                                Or, choose Apple&nbsp;Card Monthly Installments and
                                                                we’ll apply the credit instantly. Terms&nbsp;apply.</p>
                                                            <div className="modal-ctas-container">
                                                                <p className="modal-link">
                                                                    <a href="https://www.apple.com/us/shop/goto/trade_in"
                                                                       data-analytics-title="learn more - apple trade in"
                                                                       className="icon-wrapper">
                                                                        <span className="icon-copy">Learn more<span
                                                                            className="visuallyhidden"> about Apple Trade In</span></span>
                                                                        <span className="icon icon-after more"></span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button data-modal-open data-analytics-intrapage-link
                                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                                data-analytics-title="open modal - trade in"
                                                data-analytics-click="prop3:open modal - trade in"
                                                aria-label="Learn more about Apple Trade in.">
                                            <div className="modal-trigger-container">
                        <span className="card-cta-modal-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               className="card-cta-modal-button-small-icon card-modal-button-small-icon">
                            <path
                                d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"/>
                          </svg>
                        </span>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                                <li role="listitem" className="gallery-item grid-item"
                                    data-analytics-gallery-item-id="trade in" data-ac-gallery-item data-staggered-item>
                                    <div id="icon-card-trade-in" className="icon-card card-container"
                                         data-component-list='Modal'>
                                        <div className="card" tabIndex={-1}>
                                            <div className="card-modifier card-padding has-trigger-button fixed-width">
                                                <div className="card-viewport-content">
                                                    <div className='icon-card-content'>
                                                        <div className="icon-container">
                                                            <picture id="overview-incentive-icon-trade-in-2024-iphone-1"
                                                                     className="overview-incentive-icon-trade-in-2024-iphone icon-card-image"
                                                                     data-lazy>
                                                                <source data-empty
                                                                        srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                                        media="(min-width:0px)"/>
                                                                <img
                                                                    src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                    alt=""/>
                                                            </picture>
                                                            <noscript>
                                                                <picture
                                                                    className="overview-incentive-icon-trade-in-2024-iphone icon-card-image">
                                                                    <source
                                                                        srcSet="/v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png, /v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large_2x.png 2x"
                                                                        media="(min-width:0px)"/>
                                                                    <img
                                                                        src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                        alt=""/>
                                                                </picture>
                                                            </noscript>
                                                        </div>
                                                        <div className="copy-container">
                                                            <h3 className="typography-card-headline">Save with
                                                                Apple&nbsp;Trade&nbsp;In.</h3>
                                                            <p className="typography-family-paragraph">
                                <span className="pricing-container">
                                  <span data-tradein-product="iphone11-tradein"
                                        data-product-template="Get ${credit.display.smart}–">Get credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher.</span>
                                  <span data-tradein-product="iphone14promax-tradein"
                                        data-product-template="${credit.display.smart} in credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher."
                                        data-tradein-hide-all="iphone11-tradein,iphone14promax-tradein"></span>
                                  <sup className="footnote footnote-number">
                                    <a href="#footnote-2" aria-label="Footnote 1" data-modal-close>1</a>
                                  </sup>
                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-content-wrapper variant-crossfade"
                                                         data-modal-content-wrapper data-modal-anim-lifecycle
                                                         data-analytics-activitymap-region-id="trade in modal"
                                                         data-modal-class="icon-card-modal trade-in"
                                                         data-modal-id="icon-card-modal-trade-in"
                                                         data-modal-scroll-group-name="icon-card-modal-trade-in">
                                                        <div id="modal-content-trade-in"
                                                             className="icon-card-modal-content modal-content">
                                                            <h3 className="typography-modal-topic-label modal-topic-label">Apple&nbsp;Trade&nbsp;In</h3>
                                                            <h4 className="typography-modal-headline modal-headline">Trade
                                                                in your eligible device for&nbsp;credit.</h4>
                                                            <p className="typography-icon-card-modal-body icon-card-modal-inline-headline">Select
                                                                a new product and add a trade&#x2011;in. Once it’s
                                                                received and verified, we’ll credit your payment method.
                                                                Or, choose Apple&nbsp;Card Monthly Installments and
                                                                we’ll apply the credit instantly. Terms&nbsp;apply.</p>
                                                            <div className="modal-ctas-container">
                                                                <p className="modal-link">
                                                                    <a href="https://www.apple.com/us/shop/goto/trade_in"
                                                                       data-analytics-title="learn more - apple trade in"
                                                                       className="icon-wrapper">
                                                                        <span className="icon-copy">Learn more<span
                                                                            className="visuallyhidden"> about Apple Trade In</span></span>
                                                                        <span className="icon icon-after more"></span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button data-modal-open data-analytics-intrapage-link
                                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                                data-analytics-title="open modal - trade in"
                                                data-analytics-click="prop3:open modal - trade in"
                                                aria-label="Learn more about Apple Trade in.">
                                            <div className="modal-trigger-container">
                        <span className="card-cta-modal-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               className="card-cta-modal-button-small-icon card-modal-button-small-icon">
                            <path
                                d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"/>
                          </svg>
                        </span>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                                <li role="listitem" className="gallery-item grid-item"
                                    data-analytics-gallery-item-id="trade in" data-ac-gallery-item data-staggered-item>
                                    <div id="icon-card-trade-in" className="icon-card card-container"
                                         data-component-list='Modal'>
                                        <div className="card" tabIndex={-1}>
                                            <div className="card-modifier card-padding has-trigger-button fixed-width">
                                                <div className="card-viewport-content">
                                                    <div className='icon-card-content'>
                                                        <div className="icon-container">
                                                            <picture id="overview-incentive-icon-trade-in-2024-iphone-1"
                                                                     className="overview-incentive-icon-trade-in-2024-iphone icon-card-image"
                                                                     data-lazy>
                                                                <source data-empty
                                                                        srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                                        media="(min-width:0px)"/>
                                                                <img
                                                                    src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                    alt=""/>
                                                            </picture>
                                                            <noscript>
                                                                <picture
                                                                    className="overview-incentive-icon-trade-in-2024-iphone icon-card-image">
                                                                    <source
                                                                        srcSet="/v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png, /v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large_2x.png 2x"
                                                                        media="(min-width:0px)"/>
                                                                    <img
                                                                        src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                        alt=""/>
                                                                </picture>
                                                            </noscript>
                                                        </div>
                                                        <div className="copy-container">
                                                            <h3 className="typography-card-headline">Save with
                                                                Apple&nbsp;Trade&nbsp;In.</h3>
                                                            <p className="typography-family-paragraph">
                                <span className="pricing-container">
                                  <span data-tradein-product="iphone11-tradein"
                                        data-product-template="Get ${credit.display.smart}–">Get credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher.</span>
                                  <span data-tradein-product="iphone14promax-tradein"
                                        data-product-template="${credit.display.smart} in credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher."
                                        data-tradein-hide-all="iphone11-tradein,iphone14promax-tradein"></span>
                                  <sup className="footnote footnote-number">
                                    <a href="#footnote-2" aria-label="Footnote 1" data-modal-close>1</a>
                                  </sup>
                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-content-wrapper variant-crossfade"
                                                         data-modal-content-wrapper data-modal-anim-lifecycle
                                                         data-analytics-activitymap-region-id="trade in modal"
                                                         data-modal-class="icon-card-modal trade-in"
                                                         data-modal-id="icon-card-modal-trade-in"
                                                         data-modal-scroll-group-name="icon-card-modal-trade-in">
                                                        <div id="modal-content-trade-in"
                                                             className="icon-card-modal-content modal-content">
                                                            <h3 className="typography-modal-topic-label modal-topic-label">Apple&nbsp;Trade&nbsp;In</h3>
                                                            <h4 className="typography-modal-headline modal-headline">Trade
                                                                in your eligible device for&nbsp;credit.</h4>
                                                            <p className="typography-icon-card-modal-body icon-card-modal-inline-headline">Select
                                                                a new product and add a trade&#x2011;in. Once it’s
                                                                received and verified, we’ll credit your payment method.
                                                                Or, choose Apple&nbsp;Card Monthly Installments and
                                                                we’ll apply the credit instantly. Terms&nbsp;apply.</p>
                                                            <div className="modal-ctas-container">
                                                                <p className="modal-link">
                                                                    <a href="https://www.apple.com/us/shop/goto/trade_in"
                                                                       data-analytics-title="learn more - apple trade in"
                                                                       className="icon-wrapper">
                                                                        <span className="icon-copy">Learn more<span
                                                                            className="visuallyhidden"> about Apple Trade In</span></span>
                                                                        <span className="icon icon-after more"></span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button data-modal-open data-analytics-intrapage-link
                                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                                data-analytics-title="open modal - trade in"
                                                data-analytics-click="prop3:open modal - trade in"
                                                aria-label="Learn more about Apple Trade in.">
                                            <div className="modal-trigger-container">
                        <span className="card-cta-modal-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               className="card-cta-modal-button-small-icon card-modal-button-small-icon">
                            <path
                                d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"/>
                          </svg>
                        </span>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                                <li role="listitem" className="gallery-item grid-item"
                                    data-analytics-gallery-item-id="trade in" data-ac-gallery-item data-staggered-item>
                                    <div id="icon-card-trade-in" className="icon-card card-container"
                                         data-component-list='Modal'>
                                        <div className="card" tabIndex={-1}>
                                            <div className="card-modifier card-padding has-trigger-button fixed-width">
                                                <div className="card-viewport-content">
                                                    <div className='icon-card-content'>
                                                        <div className="icon-container">
                                                            <picture id="overview-incentive-icon-trade-in-2024-iphone-1"
                                                                     className="overview-incentive-icon-trade-in-2024-iphone icon-card-image"
                                                                     data-lazy>
                                                                <source data-empty
                                                                        srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                                        media="(min-width:0px)"/>
                                                                <img
                                                                    src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                    alt=""/>
                                                            </picture>
                                                            <noscript>
                                                                <picture
                                                                    className="overview-incentive-icon-trade-in-2024-iphone icon-card-image">
                                                                    <source
                                                                        srcSet="/v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png, /v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large_2x.png 2x"
                                                                        media="(min-width:0px)"/>
                                                                    <img
                                                                        src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                        alt=""/>
                                                                </picture>
                                                            </noscript>
                                                        </div>
                                                        <div className="copy-container">
                                                            <h3 className="typography-card-headline">Save with
                                                                Apple&nbsp;Trade&nbsp;In.</h3>
                                                            <p className="typography-family-paragraph">
                                <span className="pricing-container">
                                  <span data-tradein-product="iphone11-tradein"
                                        data-product-template="Get ${credit.display.smart}–">Get credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher.</span>
                                  <span data-tradein-product="iphone14promax-tradein"
                                        data-product-template="${credit.display.smart} in credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher."
                                        data-tradein-hide-all="iphone11-tradein,iphone14promax-tradein"></span>
                                  <sup className="footnote footnote-number">
                                    <a href="#footnote-2" aria-label="Footnote 1" data-modal-close>1</a>
                                  </sup>
                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-content-wrapper variant-crossfade"
                                                         data-modal-content-wrapper data-modal-anim-lifecycle
                                                         data-analytics-activitymap-region-id="trade in modal"
                                                         data-modal-class="icon-card-modal trade-in"
                                                         data-modal-id="icon-card-modal-trade-in"
                                                         data-modal-scroll-group-name="icon-card-modal-trade-in">
                                                        <div id="modal-content-trade-in"
                                                             className="icon-card-modal-content modal-content">
                                                            <h3 className="typography-modal-topic-label modal-topic-label">Apple&nbsp;Trade&nbsp;In</h3>
                                                            <h4 className="typography-modal-headline modal-headline">Trade
                                                                in your eligible device for&nbsp;credit.</h4>
                                                            <p className="typography-icon-card-modal-body icon-card-modal-inline-headline">Select
                                                                a new product and add a trade&#x2011;in. Once it’s
                                                                received and verified, we’ll credit your payment method.
                                                                Or, choose Apple&nbsp;Card Monthly Installments and
                                                                we’ll apply the credit instantly. Terms&nbsp;apply.</p>
                                                            <div className="modal-ctas-container">
                                                                <p className="modal-link">
                                                                    <a href="https://www.apple.com/us/shop/goto/trade_in"
                                                                       data-analytics-title="learn more - apple trade in"
                                                                       className="icon-wrapper">
                                                                        <span className="icon-copy">Learn more<span
                                                                            className="visuallyhidden"> about Apple Trade In</span></span>
                                                                        <span className="icon icon-after more"></span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button data-modal-open data-analytics-intrapage-link
                                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                                data-analytics-title="open modal - trade in"
                                                data-analytics-click="prop3:open modal - trade in"
                                                aria-label="Learn more about Apple Trade in.">
                                            <div className="modal-trigger-container">
                        <span className="card-cta-modal-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               className="card-cta-modal-button-small-icon card-modal-button-small-icon">
                            <path
                                d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"/>
                          </svg>
                        </span>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                                <li role="listitem" className="gallery-item grid-item"
                                    data-analytics-gallery-item-id="trade in" data-ac-gallery-item data-staggered-item>
                                    <div id="icon-card-trade-in" className="icon-card card-container"
                                         data-component-list='Modal'>
                                        <div className="card" tabIndex={-1}>
                                            <div className="card-modifier card-padding has-trigger-button fixed-width">
                                                <div className="card-viewport-content">
                                                    <div className='icon-card-content'>
                                                        <div className="icon-container">
                                                            <picture id="overview-incentive-icon-trade-in-2024-iphone-1"
                                                                     className="overview-incentive-icon-trade-in-2024-iphone icon-card-image"
                                                                     data-lazy>
                                                                <source data-empty
                                                                        srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                                        media="(min-width:0px)"/>
                                                                <img
                                                                    src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                    alt=""/>
                                                            </picture>
                                                            <noscript>
                                                                <picture
                                                                    className="overview-incentive-icon-trade-in-2024-iphone icon-card-image">
                                                                    <source
                                                                        srcSet="/v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png, /v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large_2x.png 2x"
                                                                        media="(min-width:0px)"/>
                                                                    <img
                                                                        src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                        alt=""/>
                                                                </picture>
                                                            </noscript>
                                                        </div>
                                                        <div className="copy-container">
                                                            <h3 className="typography-card-headline">Save with
                                                                Apple&nbsp;Trade&nbsp;In.</h3>
                                                            <p className="typography-family-paragraph">
                                <span className="pricing-container">
                                  <span data-tradein-product="iphone11-tradein"
                                        data-product-template="Get ${credit.display.smart}–">Get credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher.</span>
                                  <span data-tradein-product="iphone14promax-tradein"
                                        data-product-template="${credit.display.smart} in credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher."
                                        data-tradein-hide-all="iphone11-tradein,iphone14promax-tradein"></span>
                                  <sup className="footnote footnote-number">
                                    <a href="#footnote-2" aria-label="Footnote 1" data-modal-close>1</a>
                                  </sup>
                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-content-wrapper variant-crossfade"
                                                         data-modal-content-wrapper data-modal-anim-lifecycle
                                                         data-analytics-activitymap-region-id="trade in modal"
                                                         data-modal-class="icon-card-modal trade-in"
                                                         data-modal-id="icon-card-modal-trade-in"
                                                         data-modal-scroll-group-name="icon-card-modal-trade-in">
                                                        <div id="modal-content-trade-in"
                                                             className="icon-card-modal-content modal-content">
                                                            <h3 className="typography-modal-topic-label modal-topic-label">Apple&nbsp;Trade&nbsp;In</h3>
                                                            <h4 className="typography-modal-headline modal-headline">Trade
                                                                in your eligible device for&nbsp;credit.</h4>
                                                            <p className="typography-icon-card-modal-body icon-card-modal-inline-headline">Select
                                                                a new product and add a trade&#x2011;in. Once it’s
                                                                received and verified, we’ll credit your payment method.
                                                                Or, choose Apple&nbsp;Card Monthly Installments and
                                                                we’ll apply the credit instantly. Terms&nbsp;apply.</p>
                                                            <div className="modal-ctas-container">
                                                                <p className="modal-link">
                                                                    <a href="https://www.apple.com/us/shop/goto/trade_in"
                                                                       data-analytics-title="learn more - apple trade in"
                                                                       className="icon-wrapper">
                                                                        <span className="icon-copy">Learn more<span
                                                                            className="visuallyhidden"> about Apple Trade In</span></span>
                                                                        <span className="icon icon-after more"></span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button data-modal-open data-analytics-intrapage-link
                                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                                data-analytics-title="open modal - trade in"
                                                data-analytics-click="prop3:open modal - trade in"
                                                aria-label="Learn more about Apple Trade in.">
                                            <div className="modal-trigger-container">
                        <span className="card-cta-modal-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               className="card-cta-modal-button-small-icon card-modal-button-small-icon">
                            <path
                                d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"/>
                          </svg>
                        </span>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                                <li role="listitem" className="gallery-item grid-item"
                                    data-analytics-gallery-item-id="trade in" data-ac-gallery-item data-staggered-item>
                                    <div id="icon-card-trade-in" className="icon-card card-container"
                                         data-component-list='Modal'>
                                        <div className="card" tabIndex={-1}>
                                            <div className="card-modifier card-padding has-trigger-button fixed-width">
                                                <div className="card-viewport-content">
                                                    <div className='icon-card-content'>
                                                        <div className="icon-container">
                                                            <picture id="overview-incentive-icon-trade-in-2024-iphone-1"
                                                                     className="overview-incentive-icon-trade-in-2024-iphone icon-card-image"
                                                                     data-lazy>
                                                                <source data-empty
                                                                        srcSet="data:image/gif;base64,R0lGODlhAQABAHAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                                        media="(min-width:0px)"/>
                                                                <img
                                                                    src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                    alt=""/>
                                                            </picture>
                                                            <noscript>
                                                                <picture
                                                                    className="overview-incentive-icon-trade-in-2024-iphone icon-card-image">
                                                                    <source
                                                                        srcSet="/v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png, /v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large_2x.png 2x"
                                                                        media="(min-width:0px)"/>
                                                                    <img
                                                                        src="../v/iphone/home/bv/images/overview/incentive/icon_trade_in_2024_iphone__bjiyfjv6t32a_large.png"
                                                                        alt=""/>
                                                                </picture>
                                                            </noscript>
                                                        </div>
                                                        <div className="copy-container">
                                                            <h3 className="typography-card-headline">Save with
                                                                Apple&nbsp;Trade&nbsp;In.</h3>
                                                            <p className="typography-family-paragraph">
                                <span className="pricing-container">
                                  <span data-tradein-product="iphone11-tradein"
                                        data-product-template="Get ${credit.display.smart}–">Get credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher.</span>
                                  <span data-tradein-product="iphone14promax-tradein"
                                        data-product-template="${credit.display.smart} in credit toward iPhone&nbsp;15 or iPhone&nbsp;15&nbsp;Pro when you trade in iPhone&nbsp;11 or&nbsp;higher."
                                        data-tradein-hide-all="iphone11-tradein,iphone14promax-tradein"></span>
                                  <sup className="footnote footnote-number">
                                    <a href="#footnote-2" aria-label="Footnote 1" data-modal-close>1</a>
                                  </sup>
                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-content-wrapper variant-crossfade"
                                                         data-modal-content-wrapper data-modal-anim-lifecycle
                                                         data-analytics-activitymap-region-id="trade in modal"
                                                         data-modal-class="icon-card-modal trade-in"
                                                         data-modal-id="icon-card-modal-trade-in"
                                                         data-modal-scroll-group-name="icon-card-modal-trade-in">
                                                        <div id="modal-content-trade-in"
                                                             className="icon-card-modal-content modal-content">
                                                            <h3 className="typography-modal-topic-label modal-topic-label">Apple&nbsp;Trade&nbsp;In</h3>
                                                            <h4 className="typography-modal-headline modal-headline">Trade
                                                                in your eligible device for&nbsp;credit.</h4>
                                                            <p className="typography-icon-card-modal-body icon-card-modal-inline-headline">Select
                                                                a new product and add a trade&#x2011;in. Once it’s
                                                                received and verified, we’ll credit your payment method.
                                                                Or, choose Apple&nbsp;Card Monthly Installments and
                                                                we’ll apply the credit instantly. Terms&nbsp;apply.</p>
                                                            <div className="modal-ctas-container">
                                                                <p className="modal-link">
                                                                    <a href="https://www.apple.com/us/shop/goto/trade_in"
                                                                       data-analytics-title="learn more - apple trade in"
                                                                       className="icon-wrapper">
                                                                        <span className="icon-copy">Learn more<span
                                                                            className="visuallyhidden"> about Apple Trade In</span></span>
                                                                        <span className="icon icon-after more"></span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button data-modal-open data-analytics-intrapage-link
                                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                                data-analytics-title="open modal - trade in"
                                                data-analytics-click="prop3:open modal - trade in"
                                                aria-label="Learn more about Apple Trade in.">
                                            <div className="modal-trigger-container">
                        <span className="card-cta-modal-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               className="card-cta-modal-button-small-icon card-modal-button-small-icon">
                            <path
                                d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"/>
                          </svg>
                        </span>
                                            </div>
                                        </button>
                                    </div>
                                </li>
                                {/* Repeat the <li> structure for other items as needed */}
                            </ul>
                        </div>
                    </div>
                    <div data-analytics-gallery-interaction-type="paddlenav" data-gallery-paddlenav
                         className="paddlenav paddlenav-alpha">
                        <ul className="sticky-element">
                            <li className="left-item">
                                <button aria-label="Previous" className="paddlenav-arrow paddlenav-arrow-previous">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                                        <path
                                            d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"/>
                                    </svg>
                                </button>
                            </li>
                            <li className="right-item">
                                <button aria-label="Next" className="paddlenav-arrow paddlenav-arrow-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                                        <path
                                            d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"/>
                                    </svg>
                                </button>
                            </li>
                            <div className="scrim"></div>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Repeat the gallery-container v1 structure for other galleries as needed */}
        </section>
    );


    // return (
    //     <div className="mt-32 bg-custom-gray-100 rounded-3xl mx-10">
    //         <div className="pt-10 pl-10">
    //             <h1 className="xl:text-6xl text-2xl font-medium mb-6">Niyə br10 ən yaxşısıdır.</h1>
    //             <div id="features"
    //                  className="flex flex-col items-start justify-start pt-10 w-full pb-10 overflow-x-scroll">
    //                 <div className="flex w-11/12">
    //                     {features.map((feature, index) => (
    //                         <div key={index}
    //                              className={`${index === 0 ? 'pt-4 pb-4' : index === features.length - 1 ? 'p-4' : 'pl-4 py-4'} h-96 flex-shrink-0 w-full md:w-1/3`}>
    //                             <div
    //                                 className="bg-white cursor-pointer p-6 rounded-3xl shadow-lg h-full flex flex-col justify-between items-end">
    //                                 <div>
    //                                     <div className="text-6xl mb-4">{feature.icon}</div>
    //                                     <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
    //                                     <p className="text-gray-600">{feature.description}</p>
    //                                 </div>
    //                                 <svg onClick={() => {
    //                                     setModalOpen(true);
    //                                     setModalData({title: feature.additionalInfoTitle, heading: feature.additionalInfoHeading, description: feature.additionalInfo});
    //                                 }} xmlns="http://www.w3.org/2000/svg"
    //                                      viewBox="0 0 24 24" fill="currentColor"
    //                                      className="size-10 flex-shrink-0">
    //                                     <path fillRule="evenodd"
    //                                           d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365
    //                                           9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0
    //                                           0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
    //                                           clipRule="evenodd"/>
    //                                 </svg>
    //
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
    //             <div className={"mx-8 my-10"}>
    //                 <h1 className="text-xl font-medium mb-2">{modalData.title}</h1>
    //                 <h2 className="xl:text-5xl text-4xl font-semibold mb-7">{modalData.heading}</h2>
    //                 <p className="text-gray-600 text-lg">{modalData.description}</p>
    //             </div>
    //         </Modal>
    //
    //     </div>
    // );
};