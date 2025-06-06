import homeImage from './homeImage.png';

function Home() {
  return (
    <>
      <img src={homeImage} alt="image" />      
      <h1>Welcome to the Home Page</h1>
      <input type="button" value="About" />
    </>
  );
}

export default Home;
 