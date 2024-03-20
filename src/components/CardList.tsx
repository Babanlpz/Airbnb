import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../data/data.json";
import { selectCards, setCards } from "../slice/cardSlice";
import Card from "./Card";

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    dispatch(setCards(data));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 gap-5 justify-center items-center p-10 border-b-2 px-20">
      {cards.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardList;
