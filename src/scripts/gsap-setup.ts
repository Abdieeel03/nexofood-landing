import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

let isRegistered = false;

export function ensureGsapRegistered() {
  if (typeof window !== 'undefined' && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger, SplitText, Flip, Draggable, ScrollToPlugin);
    gsap.defaults({
      ease: 'power3.out',
      duration: 0.75,
    });
    isRegistered = true;
  }
  return { gsap, ScrollTrigger, SplitText, Flip, Draggable, ScrollToPlugin };
}
