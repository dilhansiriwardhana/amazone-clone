import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./StateProvider";

import Orders from "./Orders";

function App() {
  const [{}, dispatch] = useStateValue();
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else
        dispatch({
          type: "SET_USER",
          user: null,
        });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
