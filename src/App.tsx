import { useState, useEffect } from 'react';
import styles from './App.module.css';
import {Movie} from './types/Movie';

import logoImg from './assets/logo.png'
import portImg from './assets/logo32x32black.png'
import gitImg from './assets/github.png'
import linkedImg from './assets/linkedin.png'

const App = ()=> {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(()=>{
    loadMovies();
  }, []);

  const loadMovies = ()=>{
    fetch('https://api.b7web.com.br/cinema/')

    .then((response)=>{
      return response.json();
    })

    .then((json)=>{
      setMovies(json);
    });
  }

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

      <div className={styles.containerGrid}>
        {movies.map((item, index)=>(
          <div className={styles.movieItem}>
            <img src={item.avatar} className={styles.movieAvatar} />
            <br />
            {item.titulo}
          </div>
        ))}
      </div>

    </main>

    <footer>
      <div className={styles.containerFooter}>Projeto Em Cartaz, por Kauê Graciano - 2023</div>
    </footer>

  </div>
);
}

export default App;
