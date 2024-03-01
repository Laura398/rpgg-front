import { Container } from "@mui/joy";

export default function ContainerLayout({ children }: { children: React.JSX.Element }) {
  return (
    <Container>
      {children}
    </Container>
  );
};