import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

// export default function PostItem({ postObj : {message, image}})
export default function PostItem({ postObj }) {
    return (
        <div className="bg-white px-4 py-3 border shadow rounded-lg gap-2">
            <PostHeader postObj={postObj} />
            <PostContent message={postObj.message} image={postObj.image} />
            <PostFooter postObj={postObj} />
        </div>
    )
}
