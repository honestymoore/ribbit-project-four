import { useState } from "react";
import { deleteComment } from "../../../utilities/comment-api";

export default function Comment({ comments, thread, post }) {
    console.log(comments)
    console.log(post)
    const [deleteAComment, setDeleteAComment] = useState({
        threadId: `${thread._id}`,
    })

    function handleDelete() {
        try {
            deleteComment(thread._id, comments._id)
                .then((res) => res.json())
                .then((resData) => setDeleteAComment(resData.comments))
                window.location.reload();

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="container border rounded-4 my-2 shadow-sm" id="white">
                <p className="mt-2">{comments.text}</p>

                <button
                    className="btn btn-danger mb-2"
                    onClick={handleDelete}
                    data-id={deleteAComment.threadId}
                >Delete</button>
                
            </div>
        
        </>
    )
}