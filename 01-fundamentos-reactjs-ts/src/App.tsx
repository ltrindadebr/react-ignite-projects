import { Header } from "./components/Header.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import { Post, PostType } from "./components/Post.tsx";
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ltrindadebr.png",
      name: "Leonardo Trindade",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content: "Primeiro projetinho do React Ignite da Rocketseat saindo!",
      },
      { type: "link", content: "github.com/ltrindadebr" },
    ],
    publishedAt: new Date("2023-05-08 11:20:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </main>
      </div>
    </div>
  );
}
