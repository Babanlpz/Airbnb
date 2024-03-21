import React from "react";
import CardList from "../components/CardList";
import Categories from "../components/Categories";
import LinksHome from "../components/LinksHome";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Search />
      <Categories />
      <CardList />
      <LinksHome />
      <Footer />
    </>
  );
}
