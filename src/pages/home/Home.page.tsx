import CardBar from '@components/cardBar/cardBar.component';
import Header from '@components/header/header.component';
import AuthLayout from '@components/layouts/authLayout/authLayout.component';
import MainSection from '@components/mainSection/mainSection.component';
import css from './Home.module.css';

function Home() {
  return (
    <AuthLayout>
      <section id={css.mainSection}>
        <Header />
        <section id={css.mainInnerSection}>
          <CardBar />
          <MainSection />
        </section>
      </section>
    </AuthLayout>
  );
}

export default Home;
