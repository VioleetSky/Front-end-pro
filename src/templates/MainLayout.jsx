import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { Box, Container } from "@mui/material";

const MainLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

            <NavigationBar />
            <Container sx={{ flex: 1, mt: 3 }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
