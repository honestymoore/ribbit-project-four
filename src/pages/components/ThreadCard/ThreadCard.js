import { Link } from "react-router-dom"
import { deleteThread, indexThread } from "../../../utilities/thread-api"
import './ThreadCard.css'


export default function ThreadCard ({thread, setThreadArr}) {
    function handleDeleteClick(event) {
        event.preventDefault()
        try {
            deleteThread(thread._id)
                .then(() => {
                    return indexThread()
                        .then((res) => res.json())
                        .then((resData) => setThreadArr(resData.threads))
                })
        } catch (error) {
            console.error(error)
        }
        window.location.reload();
    }

    return ( 
        <div className="container border rounded-4 shadow-sm my-3" id="thread-container">
    
        <h4 className="my-2">{thread.topic}</h4>

        <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
        
        <Link to = {`/thread/${thread._id}`}>
        <button className="btn btn-success mx-3 my-2">Inspect Thread</button>
        </Link>
        </div>
    )
}