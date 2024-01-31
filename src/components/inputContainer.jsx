import { useState } from "react";

const InputContainer = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      if (searchValue.length !== 0) {
        props.setLoading(true);
        //fetching data from the API
        fetch(`https://api.pexels.com/v1/search?query=${searchValue}`, {
          method: "GET",
          headers: {
            Authorization:
              "01MI7LQ75fTxPnKldRwKWGjBJiB7GyF1hw6GEgYfa4LMeUfogSuyjbJw",
            "Content-Type": "application/json",
          },
        })
          .then((result) => result.json())
          .then((data) => {
            props.changeData(data.photos);
            props.setLoading(false);
          });
      } else {
        throw new Error("Input a value");
      }
    } catch (err) {}
  };

  return (
    <div className="ctn">
      <form onSubmit={handleSearch} className="input_form" id="Photo_form">
        <input
          type="text"
          placeholder="Search for a picture"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default InputContainer;
