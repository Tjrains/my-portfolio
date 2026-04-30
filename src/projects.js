import portfolioImg from "./assets/BCanyon.jpg";
import draftBotsImg from "./assets/DeathValley.jpg";
import soccerBotImg from "./assets/GCanyon.jpg";

export const projects = [
  {
    id: 1,
    slug: "personal-website",
    title: "Personal Website",
    image: portfolioImg,
    shortDescription: "A React portfolio site showcasing my projects and blog.",
    fullDescription: `This personal website was built with React and Vite.

It includes a homepage, project cards, blog posts, and individual pages for more detailed content. I focused on clean layout, responsive design, and consistent styling across the site.`,
  },
  {
    id: 2,
    slug: "draftbots",
    title: "DraftBots",
    image: draftBotsImg,
    shortDescription: "A fictional robot sports betting website concept.",
    fullDescription: `DraftBots is a website concept for a fictional robot sports betting platform.

The goal was to practice layout design, navigation, and presenting information clearly for a themed web app.`,
  },
  {
    id: 3,
    slug: "soccer-bot",
    title: "Soccer Bot",
    image: soccerBotImg,
    shortDescription: "A robot car project focused on autonomous soccer logic.",
    fullDescription: `Soccer Bot is a robotics project where the robot tracks a ball, moves around the field, and attempts to score.

The project involves object tracking, movement logic, state machines, and tuning robot behavior for real-world conditions.`,
  },
];