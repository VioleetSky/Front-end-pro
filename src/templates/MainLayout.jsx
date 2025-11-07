import { Container } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Container className="mt-4">
                {children}
            </Container>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
