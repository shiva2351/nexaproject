import ImageUpload from "./components/ImageUpload";
import SimilarProducts from "./components/SimilarProducts";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Image-Based Product Search</h1>
      <ImageUpload />
      <SimilarProducts />
    </div>
  );
};

export default App;
