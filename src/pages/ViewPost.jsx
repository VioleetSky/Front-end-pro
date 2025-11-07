import PageHeader from "../components/PageHeader/index.js";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchData} from "../utils/api.js";
import {Alert, Spinner} from "react-bootstrap";

const ViewUser = () => {
    const {id} = useParams();
    const [post, setPosts] = useState(null);
    const [loading, serLoading] = useState(false);

    useEffect(() => {
        const loadPosts = async () => {
            serLoading(true)
            try {
                const data  = await fetchData(`/posts/${id}`);
                setPosts(data);
            } catch (error) {
                console.log(error)
            } finally {
                serLoading(false)
            }
        }

        loadPosts()
    }, []);

    const getPostTitle  = () => {
        let title = 'Post #' + id;

        if(post !== null) {
            title = post.title
        }

        return title
    }

    return (
        <div>
            <PageHeader title={getPostTitle()} />


            {loading ? <Alert variant={'warning'} className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading post...</span>
                </Spinner>
            </Alert> : null}

            {post ? <div className="content col-4 offset-4">
                {post.body}
            </div> : null}
        </div>
    );
};

export default ViewUser;
