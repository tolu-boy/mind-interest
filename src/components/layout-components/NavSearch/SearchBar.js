import React, { useState } from "react";
import "./SearchBar.css";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useHistory } from "react-router-dom";
import { APP_PREFIX_PATH } from "configs/AppConfig";

function SearchBar({ placeholder, data, refetch }) {
  const history = useHistory();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // console.log(data.therapists.approval_status);
  let mapTherapist = data ? data.data.therapists : [];
  let mapuser = data ? data.data.users : [];
  let searchedResult = [...mapuser, ...mapTherapist];

//   console.log(filteredData);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = searchedResult.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else if (newFilter.length === 0) {
      setFilteredData([{ name: "No results found for query" }]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <Input
          placeholder={placeholder}
          prefix={<SearchOutlined />}
          onChange={handleFilter}
          value={wordEntered}
        />
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => (
            <div
              className="dataItem"
              onClick={() => {
                if (value.status === 0) {
                  history.push({
                    pathname: `${APP_PREFIX_PATH}/users/UserProfile/${value.id}`,
                    state: { page: "Active" },
                  });
                  setFilteredData([]);
                  setWordEntered("");
                } else if (value.status === 1) {
                  history.push({
                    pathname: `${APP_PREFIX_PATH}/users/UserProfile/${value.id}`,
                    state: { page: "Suspended" },
                  });
                  setFilteredData([]);
                  setWordEntered("");
                } else if (value.approval_status === 0) {
                  history.push({
                    pathname: `${APP_PREFIX_PATH}/therapists/Profile/${value.id}`,
                  });
                  setFilteredData([]);
                  setWordEntered("");
                } else if (value.approval_status === 1) {
                  history.push({
                    pathname: `${APP_PREFIX_PATH}/therapists/Profile/${value.id}`,
                  });
                  setFilteredData([]);
                  setWordEntered("");
                } else if (value.approval_status === 2) {
                  history.push({
                    pathname: `${APP_PREFIX_PATH}/therapists/Profile/${value.id}`,
                  });
                  setFilteredData([]);
                  setWordEntered("");
                }
              }}
            >
              <p>{value.name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
