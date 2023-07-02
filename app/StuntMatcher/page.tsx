"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import Card from "../../components/card";
import TinderCard from "react-tinder-card";
import Header from "../../components/header";
import Selectors from "../../components/selectors";
import { useAppContext } from "@/hooks/context";
import { fetchStuntMen } from "@/store/asyncActions/Index";

function StuntMatcher() {
  const { swiped, outOfFrame, childRefs } = useAppContext();
  const { data, loader } = useAppSelector((state) => state.stunt);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStuntMen());
  }, []);

  return (
    <div className="wrapper">
      <Header title="Stunt Doubles" logo="/assets/images/logo.jpg" />
      <div className="cardContainer">
        {loader ? (
          <h3>Loading ...</h3>
        ) : (
          data.map((character, index) => {
            const marginMultiplyer = index - 4 > 0 ? index - 4 : 1;
            const isTopFour = data.length - 6;
            const margin = index > isTopFour ? marginMultiplyer * 6 : 6;

            return (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <Card character={character} margin={margin} />
              </TinderCard>
            );
          })
        )}
      </div>
      <Selectors />
    </div>
  );
}

export default StuntMatcher;
