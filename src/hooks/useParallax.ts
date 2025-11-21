import type { MotionValue } from "motion";
import { useTransform } from "motion/react";

interface useParallaxProps {
  value: MotionValue<number>;
  distance: number;
}

export const useParallax = ({ value, distance }: useParallaxProps) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};
