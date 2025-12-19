
import HSect from './hSect';
import Course from './course';
import Contact from './contact';
const Home = () => {
  return (
    <>
      <section id="home">
        <HSect />
      </section>

      <section id="course">
        <Course />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
