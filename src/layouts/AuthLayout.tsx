import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container } from "@mui/joy";

export default function AuthLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Box>
        <Box>
          <Header />
          {children ?? (
            <Container>
              <Outlet />
            </Container>
          )}
          <Footer />
        </Box>
      </Box>
    </>
  );
}
