import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import Catalog from '../pages/Catalog';
import Order from '../pages/Order';
import Goods from '../pages/Goods';


const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Catalog/>} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/goods/:id" element={<Goods />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
