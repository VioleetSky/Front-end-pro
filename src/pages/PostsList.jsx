import {Alert, Button, Modal, Spinner} from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import {fetchData} from "../utils/api.js";
import {useEffect, useState} from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import nameNormalizer from "../utils/nameNormalizer.js";
import {useNavigate} from "react-router-dom";
import routerPaths from "../router/routerPaths.js";

const PostsList = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deletePostId, setDeletePostId] = useState(null);

    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = async () => {
        setLoading(true)
        let data = null;

        try {
            data = await fetchData('/posts?_limit=10');
            setPosts(data);
            setIsError(false);
        } catch (error) {
            console.log(error)
            setIsError(true)
        } finally {
            setLoading(false)
        }

    }

    const getHeaders = (posts, excludeKeys) => {
         const headers = Object.keys(posts[0]).reduce((acc, item) => {
            if(!excludeKeys.includes(item)) {
                acc.push(nameNormalizer(item))
            }

            return acc
        }, [])

        headers.push('Controls')
        return headers;
    }

    const onHide = () => {
        setDeletePostId(null)
        setShowDeleteModal(false)
    };

    const handlePostDelete = (id) => () => {
        setDeletePostId(id)
        setShowDeleteModal(true)
    }

    const handleDeletePost = async () => {
        setShowDeleteModal(false)
        await fetch('https://jsonplaceholder.typicode.com/posts/' + deletePostId, {
            method: 'DELETE',
        });
        setPosts(null)
        await loadPosts()
    }

    const getContents = (posts, excludeKeys) => {
        const contents = posts.map(user => {
            const postData = Object.keys(user).reduce((acc, item) => {
                if(!excludeKeys.includes(item)) {
                    acc.push(user[item])
                }

                return acc
            }, [])

            postData.push(<div className="d-flex gap-2">
                <Button onClick={() => navigate(routerPaths.viewPost + `/${postData[0]}`)} variant={"success"} size={'sm'}>View</Button>
                <Button onClick={() => navigate(routerPaths.editPost +`/${postData[0]}`)} variant={"primary"} size={'sm'}>Edit</Button>
                <Button variant={"danger"} size={'sm'} onClick={handlePostDelete(postData[0])}>Delete</Button>
            </div>  )

            return postData
        })
        return contents;
    }

    return (
        <div>
            <PageHeader
                title={'Posts'}
                LeftControl={() => <Button variant={'success'} onClick={loadPosts}>Upload posts</Button>}
            />

            {!posts &&
                <Alert variant={'secondary'} className="text-center">
                    Please press "Upload posts" button to upload users from API.
                </Alert>
            }

            {loading ? <Alert variant={'warning'} className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Alert> : null}


            {isError ? <Alert variant={'danger'} className="text-center">Error while loading data</Alert> : null}

            {posts ? <div className="content">
                <CustomTable
                    responsive="lg"
                    variant="secondary"
                    headers={getHeaders(posts, ['userId', 'body'])}
                    content={getContents(posts, ['userId', 'body'])}
                />
            </div> : null}

            <Modal show={showDeleteModal} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post</Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleDeletePost}>
                        Confirm delete
                    </Button>
                    <Button variant="secondary" onClick={onHide}>
                        Cancel delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default PostsList;
