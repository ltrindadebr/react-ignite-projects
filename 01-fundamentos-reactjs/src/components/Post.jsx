import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/ltrindadebr.png" />
          <div className={styles.authorInfo}>
            <strong>Leonardo Trindade</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="08 de Maio às 11:20h" dateTime="2023-05-08 11:20:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>Primeiro projetinho do React Ignite da Rocketseat saindo!</p>
        <p>
          👉{" "}
          <a href="https://github.com/ltrindadebr" target="_blank">
            github.com/ltrindadebr
          </a>
        </p>
        <p>
          <a href="#">#ignite</a> <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
