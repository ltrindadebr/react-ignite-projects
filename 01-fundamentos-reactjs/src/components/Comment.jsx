import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/ltrindadebr.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Trindade</strong>
              <time title="08 de Maio às 11:20h" dateTime="2023-05-08 11:20:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
