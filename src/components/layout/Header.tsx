import Container from "./Container";

const Header = () => {
  return (
    <header className="h-48">
      <Container>
        <div className="relative w-full h-full px-12 bg-header-image bg-gray-100 bg-cover bg-no-repeat bg-right-bottom">
          <div className="absolute bottom-4 text-left">
            <h1 className="font-semibold my-4">Career path test</h1>
            <p className="font-medium my-4 text-gray-600">
              Discover careers that match your skills and personality
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
