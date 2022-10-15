import type {FC, RefObject} from "react";
import type { AboutType } from "types/home";
import s from "./About.module.scss";
import TextBlock from "components/TextBlock";
import {useEffect, useRef, useState} from "react";
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
  data: AboutType[];
}

const About: FC<Props> = ({ data }) => {
  const block = useRef<HTMLDivElement>(null);
  const abouts = useRef<HTMLDivElement>(null);
  const animation = useRef({});

  useEffect(() => {
    animation.current = gsap.timeline({
      scrollTrigger: {
        trigger: block.current,
        scrub: true,
        pin: true,
        end: '+=500%',
        start: 'center center',
        markers: true,
      }
    })

    const items = gsap.utils.toArray(abouts.current.children);

    items.forEach(item => {
      // animation.current.fromTo()
    })


    return () => animation.current.kill();
  }, [])

  return (
    <div className={s.root} ref={block}>
      <div className={s.block} ref={abouts}>
        {data.map((content) => (
          <TextBlock className={s.item} key={content.id} {...content} />
        ))}
      </div>
    </div>
  );
};

export default About;
