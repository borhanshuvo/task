import React, { createContext, useState } from "react";

import Home from "./components/Home/Home";

export const PostData = createContext();

function App() {
  const [allData, setAllData] = useState([]);
  return (
    <PostData.Provider value={[allData, setAllData]}>
      <div className="bg-light">
        <Home />
      </div>
    </PostData.Provider>
  );
}

export default App;
