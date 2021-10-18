import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = React.useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
