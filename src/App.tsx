import styles from './App.module.css';

import logoImg from './assets/logo.png'
import portImg from './assets/logo32x32black.png'
import gitImg from './assets/github.png'
import linkedImg from './assets/linkedin.png'

const App = ()=> {


  return( 

  <div className={styles.main}> 
    <header>
      
      <div className={styles.containerHeader}>
        
        <div className={styles.logo}>
          <a><img src= {logoImg}></img></a>
        </div>

        <div className={styles.headerTitle}>Filmes em cartaz hoje</div>

        <div className={styles.contacts}>

          <div className={styles.contactsPort}>
            <a><img src= {portImg}></img></a>
          </div>

          <div className={styles.contactsIn}>
            <a href='https://www.linkedin.com/in/gracianokaue'><img src= {linkedImg}></img></a>
          </div>

          <div className={styles.contactsGit}>
            <a href='https://github.com/gracianokaue'><img src= {gitImg}></img></a>
          </div>

        </div>
        
      </div>

    </header>

    <main>
      ...
    </main>

    <footer>
      <div className={styles.containerFooter}>Projeto Em Cartaz, por Kauê Graciano - 2023</div>
    </footer>

  </div>
);
}

export default App;
