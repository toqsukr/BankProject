import css from './App.module.css'
import CardBar from './cardBar/cardBar.component'
import Header from './header/header.component'

function App() {

  return (
    <section id={css.mainSection}>
      <Header/>
      <div id={css.mainInnerContainer}>
          <CardBar/>
      </div>
    </section>
  )
}

export default App
