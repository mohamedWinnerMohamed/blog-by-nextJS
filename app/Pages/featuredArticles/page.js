import Link from "next/link";

const FeaturedArticles = () => {
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
      <h1>Featured Articles</h1>
      <Link href="/Pages/articles">
        <button
          style={{
            height: "max-content",
            width: "max-content",
            fontSize: "20px",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          take me to the articles page
        </button>
      </Link>
    </div>
  );
};

export default FeaturedArticles;
