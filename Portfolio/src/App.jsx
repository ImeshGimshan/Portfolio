import styles from "./App.module.css";
import {Navbar} from "./componets/Navbar/Navbar";
import {Hero} from "./componets/Hero/Hero";
import {About} from "./componets/About/About";

function App() {
  
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        {/* <Experiences /> */}
      </div>
    </>
  )
}

export default App
