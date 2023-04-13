import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="App">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <section className="site start">
                <h1> WELCOME TO THE SITE</h1>
            </section>
            <section className="site bg-v">
                <h1>Test Page 1/5</h1>
            </section>
            <section className="site bg-b">
                <h1>Test Page 2/5</h1>
            </section>
            <section className="site bg-o">
                <h1>Test Page 3/5</h1>
            </section>
            <section className="site bg-p">
                <h1>Test Page 4/5</h1>
            </section>
            <section className="site bg-g">
                <h1>Test Page 5/5</h1>
            </section>
        </div>
    );
}
