import css from './App.module.css';
import CardBar from './cardBar/cardBar.component';
import Header from './header/header.component';
import MainSection from './mainSection/mainSection.component';

function App() {
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

export default App;
