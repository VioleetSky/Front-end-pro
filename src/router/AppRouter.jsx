import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout.jsx';
import About from '../pages/About';
import TodoList from '../pages/TodoList.jsx';
import Task from "../pages/Task.jsx";


const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/task/:id" element={<Task />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
