async function postDetails({ postId }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 120 } }
  );
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const posts = await response.json();

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          borderRadius: "5px",
          padding: "10px",
          marginTop: "10px",
          width: "95%",
          backgroundColor: "#cecbda",
        }}
        key={posts.id}
      >
        <h2
          style={{
            color: "#19335a",
          }}
        >
          {posts.title}
        </h2>
        <br />
        <p style={{ color: "#30333c" }}>{posts.body}</p>
      </div>
    </div>
  );
}

export default postDetails;
