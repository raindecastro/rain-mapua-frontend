import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Layout from "../components/Layout";
import NoMatch from "../pages/NoMatch";

interface RoutingProps {}

const Routing: React.FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="pokemon/:pokemonName" element={<Profile />} />

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Routing;
