import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%", bgcolor: "primary.main",
                color: "white", py: 3, mt: 5, textAlign: "center",
            }}
        >
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} ANNA. Всі права захищені.
            </Typography>
        </Box>
    );
}

export default Footer;
