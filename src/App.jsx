import { useState } from "react";
import ImageCard from "./components/imageCard";
import InputContainer from "./components/inputContainer";
import Nav from "./components/nav";
import FadeLoader from "react-spinners/FadeLoader";

function App() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Nav />
      <InputContainer changeData={setData} setLoading={setLoading} />
      {loading ? (
        <div className="spinner">
          <FadeLoader
            color={`white`}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        //'Loading....'
        <div className="img-ctn">
          {datas.map((photo, id) => {
            return <ImageCard photo={photo} key={id} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
