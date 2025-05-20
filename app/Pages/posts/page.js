import next from "next";
import Todo from "../../components/todo";
import Link from "next/link";
export const metadata = {
  title: "Posts",
  description: "Posts Page",
};

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const posts = await response.json();
  console.log(posts);
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/Pages/posts/${post.id}`} key={post.id}>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            width: "100%",
            backgroundColor: "#cecbda",
          }}
        >
          <h2
            style={{
              color: "#19335a",
            }}
          >
            {capitalizeFirstLetter(post.title)}
          </h2>
          <br />
          <p style={{ color: "#30333c" }}>{post.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <h1 style={{ color: "#0d1b46" }}>Posts Page</h1>
      <div style={{ width: "80%" }}>{postsJSX}</div>
    </div>
  );
}
