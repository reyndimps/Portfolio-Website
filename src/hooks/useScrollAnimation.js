import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * Works with React 17+ — no external dependencies.
 *
 * @param {Object} options
 * @param {number} options.threshold - How much of the element must be visible (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.once - If true, animation only plays once
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
const useScrollAnimation = ({ threshold = 0.15, rootMargin = '0px', once = true } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};

export default useScrollAnimation;
