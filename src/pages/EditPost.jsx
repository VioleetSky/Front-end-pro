import {useParams} from "react-router-dom";
import {fetchData} from "../utils/api.js";
import {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Alert} from "react-bootstrap";
import routerPaths from "../router/routerPaths.js";
import {useNavigate} from "react-router-dom";

const EditPost = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [requestSuccess, setRequestSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            try {
                const data  = await fetchData(`/posts/${id}`);
                setPost(data);
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        }
        loadPosts()
    }, [id]);

    const putRequest = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    userId: post.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const json = await response.json();
            setRequestSuccess(true);
            console.log("Успішно оновлено:", json);
            setTimeout(() => {
                navigate(routerPaths.posts)
            }, 2000)

        } catch (error) {
            console.error("Помилка при оновленні:", error);
            setRequestSuccess(false);
        } finally {
            setSubmitting(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setRequestSuccess(true);
        putRequest();
    }

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setPost((prevState)=>{
            return {...prevState, [name]: value};
        })
    }

    if(loading){
        return <p>Loading..</p>
    }
    if(!post){
        return <p>Пост не знайдено</p>
    }

    return (
        <>
            { post ? <div>
                <Card className="mb-5 mt-5" >
                    <Card.Header as="h5">{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> : null}

            {requestSuccess ? <Alert variant={'success'} className="text-center">Data Update!</Alert> : null}

            <Form className="m-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="titleId">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        onChange={handleChange}
                        type="text"
                        value={post.title}
                        disabled={submitting}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bodyId">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        name="body"
                        onChange={handleChange} as="textarea"
                        rows={5} value={post.body} disabled={submitting}
                    />
                    <Button
                        className="mt-3" type="submit" variant="success"
                        disabled={submitting}
                    >
                        {submitting ? "Оновлення..." : "Success"}
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default EditPost;