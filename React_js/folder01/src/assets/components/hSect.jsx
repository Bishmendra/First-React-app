import heroimg from "./heroimg.png";

const HSect = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Hello, I'm Bishmendra Kumar Shah</h1>
                <h2>Data Scientist</h2>
                <p>
                    This site contains all my efforts and dedication for being a data science engineeer.
                </p>

                <button className="btn">Explore Course</button>

                <div className="social-icons">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-behance"></i></a>
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="hero-right">
                <div className="accent-shape"></div>
                <img src={heroimg} alt="Bishmendra" className="hero-image" />
            </div>
        </section>
    );
};

export default HSect;
