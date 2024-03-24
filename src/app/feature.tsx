"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Expert Instructors",
    children:
      "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
  },
  {
    icon: HeartIcon,
    title: "Interactive Learning",
    children:
      "Engage with interactive quizzes, hands-on exercises, and discussion forums to reinforce your understanding and connect.",
  },
  {
    icon: LockClosedIcon,
    title: "Achievement Unlocked",
    children:
      "Earn certificates and badges as you complete courses, showcasing your newfound skills to the world.",
  },
  {
    icon: LightBulbIcon,
    title: "Personalized Progress Tracking",
    children:
      "Stay on top of your learning journey with progress tracking and personalized recommendations to keep you motivated.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Tu aplicación de aprendizaje
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Diversos recursos de aprendizaje
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Acceda a sus materiales de aprendizaje mientras viaja. Ya sea que estés
          desplazarse, esperar a un amigo o simplemente tener unos minutos libres,
          Nuestra aplicación se adapta perfectamente a tu ajetreada vida.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
