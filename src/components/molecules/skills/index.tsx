import {
  EXPRESS,
  GIT,
  GRAPHQL,
  JAVASCRIPT,
  JEST,
  NEXT,
  NODE,
  REACT,
  REACT_NATIVE,
  REDUX,
  TYPESCRIPT,
} from "assets";
import { Typography } from "@mui/material";
import React from "react";

function Skills() {
  const skill = [
    {
      id: 1,
      name: "JavaScript",
      component: <JAVASCRIPT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 2,
      name: "TypeScript",
      component: <TYPESCRIPT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 11,
      name: "Node Js",
      component: <NODE className="w-40 h-40 filter-gray" />,
    },
    {
      id: 3,
      name: "React Js",
      component: <REACT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 4,
      name: "Next Js",
      component: <NEXT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 5,
      name: "React Native",
      component: <REACT_NATIVE className="w-40 h-40 filter-gray" />,
    },
    {
      id: 6,
      name: "Express Js",
      component: <EXPRESS className="w-40 h-40 filter-gray" />,
    },
    {
      id: 7,
      name: "Graphql",
      component: <GRAPHQL className="w-40 h-40 filter-gray" />,
    },
    {
      id: 9,
      name: "GIT",
      component: <GIT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 8,
      name: "JEST",
      component: <JEST className="w-40 h-40 filter-gray" />,
    },
    {
      id: 12,
      name: "Redux",
      component: <REDUX className="w-40 h-40 filter-gray" />,
    },
  ];
  return (
    <div className="w-full h-screen flex items-start justify-start flex-col gap-4">
      <Typography className="my-8 font-bold" variant="h5">
        Skill
      </Typography>
      <div className="w-full h-full flex items-center justify-center gap-12 flex-wrap">
        {skill.map((item: any) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              {item.component}
              <Typography variant="h5">{item.name}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
