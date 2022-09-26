import Nav from "./Nav";
import Footer from "./Footer";

function About() {

    return(
        <div className="page">
            <Nav />
            <div>
                <h1 className="pt-3 text-center">This is the about page.</h1>
            </div>
            <Footer />
        </div>
    )
}

export default About;