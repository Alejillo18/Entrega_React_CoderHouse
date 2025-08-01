import Title from "./Title";
import Subtitle from "./Subtitle";
import ContainerTable from "./ContainerTable";
function MainBody() {
  return (
    <>
      <div className="main-body">
        <Title>Welcome to our E-Commerce Store</Title>
        <Subtitle>Your one-stop shop for all things fashion</Subtitle>
        <ContainerTable />
      </div>
    </>

  );
}

export default MainBody;
