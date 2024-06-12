import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonails from "./Components/Testimonails/Testimonails";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
    const [play, setPlay] = useState(false);
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle="OUR PROGRAM" title="WHAT WE OFFER" />
                <Programs />
                <About setPlay={setPlay} />
                <Title subTitle="Gallery" title="Campus Photos" />
                <Campus />
                <Title subTitle="TESTIMONAILS" title="What Students Says'" />
                <Testimonails />
                <Title subTitle="Contact US" title="Get in Touch" />
                <Contact />
                <Footer />
            </div>
            <VideoPlayer play={play} setPlay={setPlay} />
        </div>
    );
};
export default App;
