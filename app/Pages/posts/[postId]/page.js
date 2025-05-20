import PostDetails from "../../../components/postDetails.jsx";
import { Suspense } from "react";

async function PostDetailsPage({ params }) {
  const postId = params.postId;
  const loadingJsx = (
    <div>
      <h1>wait...</h1>
    </div>
  );

  return (
    <div style={{ padding: "15px", marginLeft: "15px" }}>
      <h1 style={{ color: "#0d1b46" }}>Post Details Page</h1>

      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

export default PostDetailsPage;
