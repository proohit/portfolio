import React from 'react';
import Typing from 'react-typing-animation';
import HeadingElement from './HeadingElement';

export const welcomeText = `Hi, I'm Direnc!`;
export const softwareDeveloper = ` a software developer.`;
export const animeWeeb = `I like anime `;
export const metalhead = `and metal.`;

const TitleHeader = () => {
  return (
    <Typing cursorClassName="text-light" speed={1} loop>
      <HeadingElement>Hi, </HeadingElement>
      <Typing.Delay ms={750} />
      <HeadingElement>I'm Direnc</HeadingElement>
      <Typing.Backspace
        count={welcomeText.length + 1}
        delay={1500}
        speed={-10}
      />
      <HeadingElement>{softwareDeveloper}</HeadingElement>
      <Typing.Delay ms={750} />
      <Typing.Backspace
        count={softwareDeveloper.length + 1}
        delay={1500}
        speed={-50}
      />
      <HeadingElement>{animeWeeb}</HeadingElement>
      <Typing.Delay ms={750} />
      <HeadingElement>{metalhead}</HeadingElement>
      <Typing.Backspace
        count={animeWeeb.length + metalhead.length + 1}
        delay={1500}
        speed={-20}
      />
      <Typing.Delay ms={750} />
    </Typing>
  );
};

export default TitleHeader;
