const Home = () => {
    return <>
        <div className="mkd-content">
            <div className="mkd-ps-image-holder">
                <div className="mkd-ps-image mkd-owl-slider">
                    <div className="mkd-ps-image">
                        <picture>
                            <source media="(min-width: 481px)" srcSet="test-optima1/assets/banner1.webp" />
                            <source media="(max-width: 480px)" srcSet="test-optima1/assets/banner1-mobile.webp" />
                            <img
                                className="d-block w-100"
                                src="test-optima1/assets/banner1-mobile.webp"
                                alt="Banner"
                            />
                        </picture>
                    </div>
                    <div className="mkd-ps-image">
                        <picture>
                            <source media="(min-width: 481px)" srcSet="test-optima1/assets/adora.jpg" />
                            <source media="(max-width: 480px)" srcSet="test-optima1/assets/adora-mobile.jpg" />
                            <img className="d-block w-100" src="test-optima1/assets/adora-mobile.jpg" alt="Banner" />
                        </picture>
                    </div>
                    <div className="mkd-ps-image">
                        <picture>
                            <source media="(min-width: 481px)" srcSet="test-optima1/assets/ongoing/clover.jpg" />
                            <source
                                media="(max-width: 480px)"
                                srcSet="test-optima1/assets/ongoing/clover-mobile.jpg"
                            />
                            <img
                                className="d-block w-100"
                                src="test-optima1/assets/ongoing/clover-mobile.jpg"
                                alt="Banner"
                            />
                        </picture>
                    </div>
                    <div className="mkd-ps-image">
                        <picture>
                            <source media="(min-width: 481px)" srcSet="test-optima1/assets/upcoming/banner-new.jpg" />
                            <source
                                media="(max-width: 480px)"
                                srcSet="test-optima1/assets/upcoming/banner-mobile.jpg"
                            />
                            <img
                                className="d-block w-100"
                                src="test-optima1/assets/upcoming/banner-mobile.jpg"
                                alt="Banner"
                            />
                        </picture>
                    </div>
                    <div className="mkd-ps-image">
                        <picture>
                            <source media="(min-width: 481px)" srcSet="test-optima1/assets/arista.jpg" />
                            <source media="(max-width: 480px)" srcSet="test-optima1/assets/arista-mobile.jpg" />
                            <img className="d-block w-100" src="test-optima1/assets/arista-mobile.jpg" alt="Banner" />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="mkd-full-width">
                <div className="mkd-full-width-inner">
                    <div className="mkd-grid-row">
                        <div
                            className="mkd-page-content-holder mkd-grid-col-12"
                            style={{
                                position: "relative",
                                top: "-30px",
                                background: "white",
                                borderRadius: 5,
                                boxShadow: "2px 2px 20px #0000003d",
                                width: "calc(100% - 60px)",
                                marginLeft: 30
                            }}
                        >
                            <section className="wpb-content-wrapper location-advantages awards">
                                <div className="mkd-row-grid-section-wrapper ">
                                    <div className="">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
                                                <div className="vc_column-inner padding-0">
                                                    <div className="wpb_wrapper">
                                                        <div className="mkd-iwt clearfix">
                                                            <div
                                                                className="mkd-iwt-content"
                                                                style={{
                                                                    display: "flex",
                                                                    gap: 20,
                                                                    justifyContent: "center",
                                                                    marginBottom: 20
                                                                }}
                                                            >
                                                                <img src="test-optima1/assets/home-icon1.png" />
                                                                <div className="only-mob-width">
                                                                    <h5 style={{ textAlign: "left" }}>COMPLETED</h5>
                                                                    <h3
                                                                        className="mkd-iwt-title"
                                                                        style={{
                                                                            color: "#464646",
                                                                            marginTop: 4,
                                                                            textAlign: "left"
                                                                        }}
                                                                    >
                                                                        <span className="mkd-iwt-title-text">
                                                                            60+ PROJECTS
                                                                        </span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
                                                <div className="vc_column-inner padding-0">
                                                    <div className="wpb_wrapper">
                                                        <div className="mkd-iwt clearfix">
                                                            <div
                                                                className="mkd-iwt-content"
                                                                style={{
                                                                    display: "flex",
                                                                    gap: 20,
                                                                    justifyContent: "center",
                                                                    marginBottom: 20
                                                                }}
                                                            >
                                                                <img src="test-optima1/assets/home-icon2.png" />
                                                                <div className="only-mob-width">
                                                                    <h5 style={{ textAlign: "left" }}>
                                                                        DEVELOPMENT OF
                                                                    </h5>
                                                                    <h3
                                                                        className="mkd-iwt-title"
                                                                        style={{
                                                                            color: "#464646",
                                                                            marginTop: 4,
                                                                            textAlign: "left"
                                                                        }}
                                                                    >
                                                                        <span className="mkd-iwt-title-text">
                                                                            25 LAKH SQ. FT.
                                                                        </span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12 vc_col-xs-12">
                                                <div className="vc_column-inner padding-0">
                                                    <div className="wpb_wrapper">
                                                        <div className="mkd-iwt clearfix">
                                                            <div
                                                                className="mkd-iwt-content"
                                                                style={{
                                                                    display: "flex",
                                                                    gap: 20,
                                                                    justifyContent: "center",
                                                                    marginBottom: 20
                                                                }}
                                                            >
                                                                <img src="test-optima1/assets/home-icon4.png" />
                                                                <div className="only-mob-width">
                                                                    <h5 style={{ textAlign: "left" }}>
                                                                        HAPPY CUSTOMERS
                                                                    </h5>
                                                                    <h3
                                                                        className="mkd-iwt-title"
                                                                        style={{
                                                                            color: "#464646",
                                                                            marginTop: 4,
                                                                            textAlign: "left"
                                                                        }}
                                                                    >
                                                                        <span className="mkd-iwt-title-text">
                                                                            2000+
                                                                        </span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mkd-content-inner">
                <div className="mkd-full-width">
                    <div className="mkd-full-width-inner">
                        <div className="mkd-grid-row">
                            <div className="mkd-page-content-holder mkd-grid-col-12">
                                <div className="mkd-row-grid-section-wrapper ">
                                    <div className="mkd-row-grid-section">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <p>
                                                            Welcome to Newry Properties Pvt. Ltd. With the aim to
                                                            revolutionize real estate in Chennai. We meticulously
                                                            craft residential spaces at strategic locations,
                                                            seamlessly blending urban living with nature's
                                                            tranquility. Our mission is to deliver sophisticated
                                                            homes that cater to individuals, families, and
                                                            communities, embodying uncompromising quality and
                                                            excellence.
                                                        </p>
                                                    </div>
                                                    <div className="vc_empty_space" style={{ height: 20 }}>
                                                        <span className="vc_empty_space_inner" />
                                                    </div>
                                                    <div className="wpb_wrapper">
                                                        <img src="test-optima1/assets/freepik/1.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vc_empty_space" style={{ height: 70 }}>
                                    <span className="vc_empty_space_inner" />
                                </div>
                                <section className="wpb-content-wrapper location-advantages">
                                    <div className="mkd-row-grid-section-wrapper ">
                                        <div className="mkd-row-grid-section">
                                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1516021087353">
                                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                                    <div className="vc_column-inner vc_custom_1516007647796">
                                                        <div className="wpb_wrapper">
                                                            <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                                <div className="mkd-eh-item    ">
                                                                    <div className="mkd-eh-item-inner">
                                                                        <div
                                                                            className="mkd-eh-item-content mkd-eh-custom-8773"
                                                                            style={{ padding: "0 0 20px 0" }}
                                                                        >
                                                                            <div className="mkd-section-title-holder  ">
                                                                                <div className="mkd-st-inner">
                                                                                    <h2 className="mkd-st-title">Projects</h2>
                                                                                    <h5
                                                                                        className="mkd-st-text"
                                                                                        style={{ color: "#464646" }}
                                                                                    >
                                                                                        {" "}
                                                                                        The perfect balance of community living
                                                                                    </h5>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="vc_empty_space" style={{ height: 32 }}>
                                    <span className="vc_empty_space_inner" />
                                </div>
                                <div className="mkd-full-width">
                                    <div className="mkd-full-width-inner">
                                        <div className="mkd-grid-row">
                                            <div className="mkd-page-content-holder mkd-grid-col-12">
                                                <section className="wpb-content-wrapper">
                                                    <div className="mkd-row-grid-section-wrapper ">
                                                        <div className="mkd-row-grid-section">
                                                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1517921277402">
                                                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                                                    <div className="vc_column-inner">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="mkd-portfolio-list-holder mkd-pl-gallery mkd-huge-space mkd-pl-one-column mkd-pl-floating-portfolio-item  mkd-pl-pag-no-pagination ">
                                                                                <div className="mkd-pl-inner mkd-outer-space  clearfix">
                                                                                    <article className="mkd-pl-item mkd-item-space  post-1337 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-about-project">
                                                                                        <div className="mkd-pl-item-inner">
                                                                                            <div className="mkd-pli-image-holder">
                                                                                                <div className="mkd-pli-image">
                                                                                                    <img
                                                                                                        src="test-optima1/assets/home/astor.jpg"
                                                                                                        className="attachment-full size-full wp-post-image"
                                                                                                        alt="a"
                                                                                                    />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="mkd-pli-image-drop-shadow"
                                                                                                    style={{
                                                                                                        backgroundColor: "#f2e9e9"
                                                                                                    }}
                                                                                                ></div>
                                                                                            </div>
                                                                                            <div className="mkd-pli-text-holder">
                                                                                                <div className="mkd-pli-text-wrapper">
                                                                                                    <div className="mkd-pli-text">
                                                                                                        <h3
                                                                                                            itemProp="name"
                                                                                                            className="mkd-pli-title entry-title"
                                                                                                        >
                                                                                                            NEWRY ASTOR
                                                                                                        </h3>
                                                                                                        <div className="mkd-pli-category-holder">
                                                                                                            <p>
                                                                                                                <a
                                                                                                                    itemProp="url"
                                                                                                                    className="mkd-pli-category"
                                                                                                                >
                                                                                                                    Avadi
                                                                                                                </a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <p
                                                                                                            itemProp="description"
                                                                                                            className="mkd-pli-excerpt"
                                                                                                        >
                                                                                                            Timeless elegance, modern
                                                                                                            comfort, and vibrant community
                                                                                                            living
                                                                                                        </p>
                                                                                                        <div
                                                                                                            className="vc_empty_space"
                                                                                                            style={{ height: 32 }}
                                                                                                        >
                                                                                                            <span className="vc_empty_space_inner" />
                                                                                                        </div>
                                                                                                        <a
                                                                                                            itemProp="url"
                                                                                                            href="https://optimaresponse.com/development/newry/version1/"
                                                                                                            target="_self"
                                                                                                            style={{
                                                                                                                margin: "0 0 0 4px",
                                                                                                                float: "left"
                                                                                                            }}
                                                                                                            className="mkd-btn mkd-btn-small mkd-btn-outline"
                                                                                                        >
                                                                                                            <span className="mkd-btn-text">
                                                                                                                Know more
                                                                                                            </span>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </article>
                                                                                    <article className="mkd-pl-item mkd-item-space  post-1337 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-about-project">
                                                                                        <div className="mkd-pl-item-inner">
                                                                                            <div className="mkd-pli-image-holder">
                                                                                                <div className="mkd-pli-image">
                                                                                                    <img
                                                                                                        src="test-optima1/assets/home/adora.jpg.jpg"
                                                                                                        className="attachment-full size-full wp-post-image"
                                                                                                        alt="a"
                                                                                                    />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="mkd-pli-image-drop-shadow"
                                                                                                    style={{
                                                                                                        backgroundColor: "#f2e9e9"
                                                                                                    }}
                                                                                                ></div>
                                                                                            </div>
                                                                                            <div className="mkd-pli-text-holder">
                                                                                                <div className="mkd-pli-text-wrapper">
                                                                                                    <div className="mkd-pli-text">
                                                                                                        <h3
                                                                                                            itemProp="name"
                                                                                                            className="mkd-pli-title entry-title"
                                                                                                        >
                                                                                                            NEWRY ADORA
                                                                                                        </h3>
                                                                                                        <div className="mkd-pli-category-holder">
                                                                                                            <p>
                                                                                                                <a
                                                                                                                    itemProp="url"
                                                                                                                    className="mkd-pli-category"
                                                                                                                >
                                                                                                                    Thirumullaivoyal
                                                                                                                </a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <p
                                                                                                            itemProp="description"
                                                                                                            className="mkd-pli-excerpt"
                                                                                                        >
                                                                                                            Elegance &amp; Simplicity, the
                                                                                                            aura that will always shine
                                                                                                            through.
                                                                                                        </p>
                                                                                                        <div
                                                                                                            className="vc_empty_space"
                                                                                                            style={{ height: 32 }}
                                                                                                        >
                                                                                                            <span className="vc_empty_space_inner" />
                                                                                                        </div>
                                                                                                        <a
                                                                                                            itemProp="url"
                                                                                                            href="https://optimaresponse.com/development/newry/version1/"
                                                                                                            target="_self"
                                                                                                            style={{
                                                                                                                margin: "0 0 0 4px",
                                                                                                                float: "left"
                                                                                                            }}
                                                                                                            className="mkd-btn mkd-btn-small mkd-btn-outline"
                                                                                                        >
                                                                                                            <span className="mkd-btn-text">
                                                                                                                Know more
                                                                                                            </span>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </article>
                                                                                    <article className="mkd-pl-item mkd-item-space  post-1337 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-about-project">
                                                                                        <div className="mkd-pl-item-inner">
                                                                                            <div className="mkd-pli-image-holder">
                                                                                                <div className="mkd-pli-image">
                                                                                                    <img
                                                                                                        src="test-optima1/assets/home/arista.jpg.jpg"
                                                                                                        className="attachment-full size-full wp-post-image"
                                                                                                        alt="a"
                                                                                                    />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="mkd-pli-image-drop-shadow"
                                                                                                    style={{
                                                                                                        backgroundColor: "#f2e9e9"
                                                                                                    }}
                                                                                                ></div>
                                                                                            </div>
                                                                                            <div className="mkd-pli-text-holder">
                                                                                                <div className="mkd-pli-text-wrapper">
                                                                                                    <div className="mkd-pli-text">
                                                                                                        <h3
                                                                                                            itemProp="name"
                                                                                                            className="mkd-pli-title entry-title"
                                                                                                        >
                                                                                                            NEWRY ARISTA
                                                                                                        </h3>
                                                                                                        <div className="mkd-pli-category-holder">
                                                                                                            <p>
                                                                                                                <a
                                                                                                                    itemProp="url"
                                                                                                                    className="mkd-pli-category"
                                                                                                                >
                                                                                                                    Kolathur
                                                                                                                </a>
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <p
                                                                                                            itemProp="description"
                                                                                                            className="mkd-pli-excerpt"
                                                                                                        >
                                                                                                            Serene retreat, nature's
                                                                                                            embrace, and tranquil everyday
                                                                                                            living
                                                                                                        </p>
                                                                                                        <div
                                                                                                            className="vc_empty_space"
                                                                                                            style={{ height: 32 }}
                                                                                                        >
                                                                                                            <span className="vc_empty_space_inner" />
                                                                                                        </div>
                                                                                                        <a
                                                                                                            itemProp="url"
                                                                                                            href="https://optimaresponse.com/development/newry/version1/"
                                                                                                            target="_self"
                                                                                                            style={{
                                                                                                                margin: "0 0 0 4px",
                                                                                                                float: "left"
                                                                                                            }}
                                                                                                            className="mkd-btn mkd-btn-small mkd-btn-outline"
                                                                                                        >
                                                                                                            <span className="mkd-btn-text">
                                                                                                                Know more
                                                                                                            </span>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </article>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vc_empty_space" style={{ height: 32 }}>
                                    <span className="vc_empty_space_inner" />
                                </div>
                                <section className="wpb-content-wrapper ">
                                    <div className="mkd-row-grid-section-wrapper ">
                                        <div className="mkd-row-grid-section">
                                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1516021087353">
                                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                                    <div className="vc_column-inner vc_custom_1516007647796">
                                                        <div className="wpb_wrapper">
                                                            <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                                <div
                                                                    className="mkd-eh-item    "
                                                                    data-item-class="mkd-eh-custom-8773"
                                                                    data-1280-1600="0 0 20px 0"
                                                                    data-1024-1280="0 0 20px 0"
                                                                    data-768-1024="0 0 20px 0"
                                                                    data-680-768="0 0 20px 0"
                                                                    data-680="0px"
                                                                >
                                                                    <div className="mkd-eh-item-inner">
                                                                        <div
                                                                            className="mkd-eh-item-content mkd-eh-custom-8773"
                                                                            style={{ padding: "0 0 20px 0" }}
                                                                        >
                                                                            <div className="mkd-section-title-holder  ">
                                                                                <div className="mkd-st-inner">
                                                                                    <h2 className="mkd-st-title educate">
                                                                                        Symphony in <br />
                                                                                        concrete
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="mkd-row-grid-section-wrapper ">
                                    <div className="mkd-row-grid-section">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <p>
                                                            Newry is not about putting tall, good-looking concrete
                                                            structures. It's not about using the latest
                                                            technology. Newry buildings are one with nature. A
                                                            harmonious balance of ventilation, light, air and
                                                            perfect vaastu. We're revolutionizing the construction
                                                            industry by harmonizing nature and urban living,
                                                            prioritizing the resident's welfare, and integrating
                                                            innovative design principles. Our focus extends beyond
                                                            traditional benchmarks to create environments that
                                                            inspire, nurture, and thrive.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vc_empty_space" style={{ height: 40 }}>
                                    <span className="vc_empty_space_inner" />
                                </div>
                                <div
                                    className="mkd-row-grid-section-wrapper mkd-parallax-row-holder mkd-content-aligment-left"
                                    data-parallax-bg-image="freepik/2.jpg"
                                    data-parallax-bg-speed={1}
                                    data-parallax-bg-height={760}
                                >
                                    <div className="mkd-row-grid-section">
                                        <div className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner vc_custom_1516718150958">
                                                    <div className="wpb_wrapper">
                                                        <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                            <div
                                                                className="mkd-eh-item    "
                                                                data-item-class="mkd-eh-custom-1384"
                                                                data-1280-1600="100px 0 0 0 "
                                                                data-1024-1280="100px 0 0 0 "
                                                                data-768-1024="100px 0 164px 0"
                                                                data-680-768="100px 0 164px 0"
                                                                data-680="100px 0"
                                                            >
                                                                <div className="mkd-eh-item-inner">
                                                                    <div
                                                                        className="mkd-eh-item-content mkd-eh-custom-1384"
                                                                        style={{ padding: "100px 0 0 0" }}
                                                                    >
                                                                        <div className="mkd-section-title-holder  ">
                                                                            <div className="mkd-st-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vc_empty_space" style={{ height: 70 }}>
                                    <span className="vc_empty_space_inner" />
                                </div>
                                <section className="wpb-content-wrapper awards">
                                    <div className="mkd-row-grid-section-wrapper ">
                                        <div className="mkd-row-grid-section">
                                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1516021087353">
                                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                                    <div className="vc_column-inner vc_custom_1516007647796">
                                                        <div className="wpb_wrapper">
                                                            <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                                <div
                                                                    className="mkd-eh-item    "
                                                                    data-item-class="mkd-eh-custom-8773"
                                                                    data-1280-1600="0 0 20px 0"
                                                                    data-1024-1280="0 0 20px 0"
                                                                    data-768-1024="0 0 20px 0"
                                                                    data-680-768="0 0 20px 0"
                                                                    data-680="0px"
                                                                >
                                                                    <div className="mkd-eh-item-inner">
                                                                        <div
                                                                            className="mkd-eh-item-content mkd-eh-custom-8773"
                                                                            style={{ padding: "0 0 20px 0" }}
                                                                        >
                                                                            <div className="mkd-section-title-holder  ">
                                                                                <div className="mkd-st-inner">
                                                                                    <h2 className="mkd-st-title">
                                                                                        Citations <br /> And Awards
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="mkd-row-grid-section-wrapper ">
                                    <div className="mkd-row-grid-section">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <p>
                                                            Our accolades attest to our unwavering commitment to
                                                            excellence, reflecting our legacy of trust and quality
                                                            in every project.
                                                        </p>
                                                    </div>
                                                    <br />
                                                    <div className="wpb_wrapper">
                                                        <img src="test-optima1/assets/home/awards.jpg" />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mkd-full-width">
                                    <div className="mkd-full-width-inner">
                                        <div className="mkd-grid-row">
                                            <div className="mkd-page-content-holder mkd-grid-col-12">
                                                <section className="wpb-content-wrapper location-advantages awards">
                                                    <div className="mkd-row-grid-section-wrapper ">
                                                        <div className="mkd-row-grid-section">
                                                            <div className="vc_row wpb_row vc_row-fluid">
                                                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-12 vc_col-xs-12">
                                                                    <div className="vc_column-inner padding-0">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="mkd-iwt clearfix">
                                                                                <div className="mkd-iwt-content border-right">
                                                                                    <h5>
                                                                                        National Real Estate Excellence Awards
                                                                                        2017
                                                                                    </h5>
                                                                                    <h3
                                                                                        className="mkd-iwt-title"
                                                                                        style={{
                                                                                            color: "#464646",
                                                                                            marginTop: 4
                                                                                        }}
                                                                                    >
                                                                                        <span className="mkd-iwt-title-text">
                                                                                            Best Luxury Real Estate Company
                                                                                        </span>
                                                                                    </h3>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-12 vc_col-xs-12">
                                                                    <div className="vc_column-inner padding-0">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="mkd-iwt clearfix">
                                                                                <div className="mkd-iwt-content border-right">
                                                                                    <h5>Golder Globe Tiger Awards 2018</h5>
                                                                                    <h3
                                                                                        className="mkd-iwt-title"
                                                                                        style={{
                                                                                            color: "#464646",
                                                                                            marginTop: 4
                                                                                        }}
                                                                                    >
                                                                                        <span className="mkd-iwt-title-text">
                                                                                            Commercial Property of the Year
                                                                                        </span>
                                                                                    </h3>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-12 vc_col-xs-12">
                                                                    <div className="vc_column-inner padding-0">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="mkd-iwt clearfix">
                                                                                <div className="mkd-iwt-content border-right">
                                                                                    <h5>BAM Awards 2018</h5>
                                                                                    <h3
                                                                                        className="mkd-iwt-title"
                                                                                        style={{
                                                                                            color: "#464646",
                                                                                            marginTop: 4
                                                                                        }}
                                                                                    >
                                                                                        <span className="mkd-iwt-title-text">
                                                                                            Builder Awards of the Year
                                                                                        </span>
                                                                                    </h3>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-12 vc_col-xs-12">
                                                                    <div className="vc_column-inner padding-0">
                                                                        <div className="wpb_wrapper">
                                                                            <div className="mkd-iwt clearfix">
                                                                                <div className="mkd-iwt-content border-right no-border">
                                                                                    <h5>ET Now Real Estate Awards 2019</h5>
                                                                                    <h3
                                                                                        className="mkd-iwt-title"
                                                                                        style={{
                                                                                            color: "#464646",
                                                                                            marginTop: 4
                                                                                        }}
                                                                                    >
                                                                                        <span className="mkd-iwt-title-text">
                                                                                            Most Promising Delievery
                                                                                        </span>
                                                                                    </h3>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vc_empty_space" style={{ height: 70 }}>
                                    <span className="vc_empty_space_inner" />
                                </div>
                                <section className="wpb-content-wrapper blogs">
                                    <div className="mkd-row-grid-section-wrapper ">
                                        <div className="mkd-row-grid-section">
                                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1516021087353">
                                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                                    <div className="vc_column-inner vc_custom_1516007647796">
                                                        <div className="wpb_wrapper">
                                                            <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                                <div
                                                                    className="mkd-eh-item    "
                                                                    data-item-class="mkd-eh-custom-8773"
                                                                    data-1280-1600="0 0 20px 0"
                                                                    data-1024-1280="0 0 20px 0"
                                                                    data-768-1024="0 0 20px 0"
                                                                    data-680-768="0 0 20px 0"
                                                                    data-680="0px"
                                                                >
                                                                    <div className="mkd-eh-item-inner">
                                                                        <div
                                                                            className="mkd-eh-item-content mkd-eh-custom-8773"
                                                                            style={{ padding: "0 0 20px 0" }}
                                                                        >
                                                                            <div className="mkd-section-title-holder  ">
                                                                                <div className="mkd-st-inner">
                                                                                    <h2 className="mkd-st-title">Blogs</h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="mkd-row-grid-section-wrapper ">
                                    <div className="mkd-row-grid-section">
                                        <div className="vc_row wpb_row vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                                <div className="vc_column-inner">
                                                    <div className="wpb_wrapper">
                                                        <p>
                                                            From expert advice on design trends and project
                                                            showcases, our blog is your go-to resource for
                                                            everything related to building and renovation.
                                                        </p>
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog1 vc_row wpb_row vc_row-fluid vc_column-gap-20 vc_row-o-equal-height vc_row-flex">
                                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12 vc_col-xs-12 vc_col-has-fill">
                                        <div className="vc_column-inner vc_custom_1515679036394">
                                            <div className="wpb_wrapper">
                                                <div
                                                    className="mkd-animation-holder mkd-grow-in"
                                                    data-animation="mkd-grow-in"
                                                    data-animation-delay={500}
                                                >
                                                    <div className="mkd-animation-inner">
                                                        <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                            <div className="mkd-eh-item">
                                                                <div className="mkd-eh-item-inner">
                                                                    <div
                                                                        className="mkd-eh-item-content mkd-eh-custom-8840"
                                                                        style={{ padding: "10%" }}
                                                                    >
                                                                        <h4 style={{ color: "black" }}>
                                                                            Why Should You Invest in Premium Villa Plots
                                                                        </h4>
                                                                        <div
                                                                            className="vc_empty_space"
                                                                            style={{ height: 18 }}
                                                                        >
                                                                            <span className="vc_empty_space_inner" />
                                                                        </div>
                                                                        <p style={{ textAlign: "left" }}>
                                                                            There are some decisions that lead you to your
                                                                            dream life. Investing in your future home is
                                                                            the biggest one. Finding the ideal abode for
                                                                            your coming years makes you consider a ton of
                                                                            things.
                                                                        </p>
                                                                        <div
                                                                            className="vc_empty_space"
                                                                            style={{ height: 48 }}
                                                                        >
                                                                            <span className="vc_empty_space_inner" />
                                                                        </div>
                                                                        <a
                                                                            itemProp="url"
                                                                            href="https://optimaresponse.com/development/newry/version1/blog-details.html"
                                                                            target="_self"
                                                                            style={{ margin: "0 0 0 4px" }}
                                                                            className="mkd-btn mkd-btn-medium mkd-btn-outline"
                                                                        >
                                                                            <span className="mkd-btn-text">
                                                                                Read more
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8 vc_col-md-12 vc_col-xs-12">
                                        <div className="vc_column-inner vc_custom_1517388638346">
                                            <div className="wpb_wrapper">
                                                <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                    <div
                                                        className="mkd-eh-item    "
                                                        data-item-class="mkd-eh-custom-8914"
                                                        data-1280-1600="0px"
                                                        data-1024-1280="0px"
                                                        data-768-1024="0%"
                                                        data-680-768="0%"
                                                        data-680="0%"
                                                    >
                                                        <div className="mkd-eh-item-inner">
                                                            <div
                                                                className="mkd-eh-item-content mkd-eh-custom-8914"
                                                                style={{ padding: 0 }}
                                                            >
                                                                <div className="mkd-single-image-holder">
                                                                    <div className="mkd-si-inner">
                                                                        <img
                                                                            width={1260}
                                                                            height={734}
                                                                            src="test-optima1/assets/home/blog1.jpg"
                                                                            className="attachment-full size-full"
                                                                            alt="a"
                                                                            loading="lazy"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog2 vc_row wpb_row vc_row-fluid vc_column-gap-15 vc_row-o-equal-height vc_row-flex">
                                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8 vc_col-md-12 vc_col-xs-12 vc_col-has-fill">
                                        <div className="vc_column-inner vc_custom_1517387242406">
                                            <div className="wpb_wrapper">
                                                <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                    <div
                                                        className="mkd-eh-item"
                                                        data-item-class="mkd-eh-custom-1385"
                                                        data-1280-1600="0px"
                                                        data-1024-1280="0px"
                                                        data-768-1024="0%"
                                                        data-680-768="0%"
                                                        data-680="0%"
                                                    >
                                                        <div className="mkd-eh-item-inner">
                                                            <div
                                                                className="mkd-eh-item-content mkd-eh-custom-1385"
                                                                style={{ padding: 0 }}
                                                            >
                                                                <div className="mkd-single-image-holder     ">
                                                                    <div className="mkd-si-inner">
                                                                        <img
                                                                            width={1260}
                                                                            height={760}
                                                                            src="test-optima1/assets/home/blog2.jpg"
                                                                            className="attachment-full size-full"
                                                                            alt="a"
                                                                            loading="lazy"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12 vc_col-xs-12 vc_col-has-fill">
                                        <div className="vc_column-inner vc_custom_1546005427307">
                                            <div className="wpb_wrapper">
                                                <div
                                                    className="mkd-animation-holder mkd-grow-in"
                                                    data-animation="mkd-grow-in"
                                                    data-animation-delay={500}
                                                >
                                                    <div className="mkd-animation-inner">
                                                        <div className="mkd-elements-holder   mkd-one-column  mkd-responsive-mode-768 ">
                                                            <div className="mkd-eh-item    ">
                                                                <div className="mkd-eh-item-inner">
                                                                    <div
                                                                        className="mkd-eh-item-content mkd-eh-custom-9754"
                                                                        style={{ padding: "10%" }}
                                                                    >
                                                                        <h4 style={{ color: "black" }}>
                                                                            Find The Home of Your Dreams and The Lifestyle
                                                                            You Deserve
                                                                        </h4>
                                                                        <div
                                                                            className="vc_empty_space"
                                                                            style={{ height: 18 }}
                                                                        >
                                                                            <span className="vc_empty_space_inner" />
                                                                        </div>
                                                                        <p style={{ textAlign: "left" }}>
                                                                            Chennai is the hub of mesmerising properties.
                                                                            It's a treat to live in this vibrant town and
                                                                            experiencing the thrill of city life. Having a
                                                                            luxurious abode here is the closest you'll get
                                                                            to heaven on earth. It makes the gateway to a
                                                                            sophisticated lifestyle filled with serenity
                                                                            and elegance.
                                                                        </p>
                                                                        <div
                                                                            className="vc_empty_space"
                                                                            style={{ height: 48 }}
                                                                        >
                                                                            <span className="vc_empty_space_inner" />
                                                                        </div>
                                                                        <a
                                                                            itemProp="url"
                                                                            href="https://optimaresponse.com/development/newry/version1/blog-details.html"
                                                                            target="_self"
                                                                            style={{ margin: "0 0 0 4px" }}
                                                                            className="mkd-btn mkd-btn-medium mkd-btn-outline"
                                                                        >
                                                                            <span className="mkd-btn-text">
                                                                                Read more
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default Home;