import Nav from "./Nav";
import Footer from "./Footer";

function Home() {

    return(
        <div>
            <Nav />
            <div>
                <h1 className="pt-3 text-center">This is the home page.</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Home;