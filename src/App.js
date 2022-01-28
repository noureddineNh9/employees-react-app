import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// parameter state comes from index.js provider store state(rootReducers)

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Employees = React.lazy(() => import("./pages/Employees"));
const Performance = React.lazy(() => import("./pages/performance/Performance"));

class App extends React.Component {
   componentDidMount() {}
   render() {
      return (
         <>
            <div className="flex h-screen">
               <input
                  type="checkbox"
                  class="side__navbar__checkbox hidden"
                  id="nav-toggle"
               />
               <label
                  id="sidebar-btn"
                  for="nav-toggle"
                  class="side__navbar__button lg:hidden"
               >
                  <span class="side__navbar__icon">&nbsp;</span>
               </label>
               <div
                  className="navbar-container bg-white border-r border-gray-400  h-screen
                  absolute lg:relative  w-0 lg:w-96"
                  style={{
                     transition: "all .7s",
                  }}
               >
                  <Navbar />
               </div>
               <div className="bg-gray-100 p-12 w-full overflow-y-scroll">
                  <div className="bg-white p-10  border rounded-xl min-h-screen shadow-lg">
                     <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                           <Route exact path="/">
                              <HomePage />
                           </Route>
                           <Route path="/employees">
                              <Employees />
                           </Route>
                           <Route path="/performance">
                              <Performance />
                           </Route>
                        </Switch>
                     </Suspense>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default App;
