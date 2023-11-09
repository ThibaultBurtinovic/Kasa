import Gallery from "../../components/Gallery";
import Banner from "../../components/Banner";
import HomeBanner from "../../assets/BannerIMG.png";

function Home() {
  document.title = "Accueil";
  return (
    <section className="home">
      <Banner image={HomeBanner} texte="Chez vous, partout et ailleurs"></Banner>
      <Gallery></Gallery>
    </section>
  );
}

export default Home;
