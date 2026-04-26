'use client';

import { useRef, useState } from 'react';

import { sliderLists } from '../../constants';

const Menu = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setcurrentIndex] = useState(0);

  const totalCocktails: number = sliderLists.length;

  const gotToSlide = (index: number): void => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setcurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffSet: number) =>
    sliderLists[(currentIndex + indexOffSet + totalCocktails) % totalCocktails];

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="" aria-hidden="true" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="" aria-hidden="true" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
              onClick={() => gotToSlide(index)}
              key={cocktail.id}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={() => gotToSlide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>

          <button className="text-left" onClick={() => gotToSlide(currentIndex + 1)}>
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" alt="" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
