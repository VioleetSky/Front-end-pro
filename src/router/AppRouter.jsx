import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import PostsList from '../pages/PostsList.jsx';
import CreatePost from "../pages/CreatePost.jsx";
import routerPaths from "./routerPaths.js";
import EditPost from "../pages/EditPost.jsx";
import ViewPost from "../pages/ViewPost.jsx";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<h1>Main Page</h1>} />
                    <Route path={routerPaths.posts} element={<PostsList />} />
                    <Route path={routerPaths.createPost} element={<CreatePost />} />
                    <Route path={routerPaths.viewPost + '/:id'} element={<ViewPost />} />
                    <Route path={routerPaths.editPost + '/:id'} element={<EditPost />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
