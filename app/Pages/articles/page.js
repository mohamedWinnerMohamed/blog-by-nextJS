import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Articles Page</h1>
      <Link href="/Pages/featuredArticles">
        <br />
        <button
          style={{
            height: "max-content",
            width: "max-content",
            fontSize: "20px",
            padding: "10px",
            
          }}
        >
          take me to the featuredArticles page
        </button>
      </Link>
    </div>
  );
}
