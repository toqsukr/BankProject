import CardBar from '@components/cardBar/cardBar.component';
import Header from '@components/header/header.component';
import MainSection from '@components/mainSection/mainSection.component';
import css from './Home.module.css';

function Home() {
  return (
    <section id={css.mainSection}>
      <Header />
      <section id={css.mainInnerSection}>
        <CardBar />
        <MainSection />
      </section>
    </section>
  );
}

export default Home;
