import React from "react";
import "./Projects.css";
import cartx from "./images/cartx.png";
import finance from "./images/financeHacks.png";
import ecovision from "./images/ecovision.png";
import { Badge, Title, Text, Container, Group, ActionIcon } from "@mantine/core";
import classes from "../Experience/FeaturesCards.module.css";
import linkIcon from "./github.svg";
import { IconBrandGithub } from '@tabler/icons-react';

import proj4 from "./images/proj4.png";
import proj5 from "./images/proj5.png";
import proj6 from "./images/proj6.png";

const cardData = [
  {
    id: 1,
    type: "FINANCE FOR ALL 🏆🏆🏆",
    title: "1st Place Hackathon Winner",
    content:
      "Developed a platform using React and Express JS that simplifies bank comparisons for accounts, credit cards, and loan rates, saving users significant research time. Integrated Google Gemini to create a responsive chatbot, enhancing user experience with financial literacy support.",
    img: finance,
    tags: ["GEMINI-PRO API", "REACT", "EXPRESS JS"],
    link: "https://github.com/Nikulp23/FinanceHacks",
    alt: "picture",
  },
  {
    id: 2,
    type: "ECO VISION 🏆🏆🏆",
    title: "Hack RPI Best AI Hack",
    content:
      "Created a web app using React and Flask to identify recyclables with 95% accuracy, leveraging AI and OpenCV for image/video analysis. Enhanced waste sorting efficiency by 20% and provided actionable sustainability insights.",
    img: ecovision,
    tags: ["OPENAI API", "REACT", "FLASK", "Python", "OpenCV"],
    link: "https://devpost.com/software/recircle-ot57su",
    alt: "ecovision",
  },
  {
    id: 3,
    type: "CARTX 🛍️ 🛒",
    title: "Cost-Optimizing Shopping App",
    content:
      "CartX Vision revolutionizes shopping by finding the best local deals with a single click. Leveraging a dynamic React frontend and a powerful Node.js backend, it reduces shopping time by up to 30%. Integrated with RESTful APIs and advanced web scraping, CartX provides users with real-time price comparisons across major retailers.",
    img: cartx,
    tags: [ "MONGO DB", "REACT", "SELENIUM", "PYTHON"],
    link: "https://github.com/orgs/CartX-RCOS/repositories",
    alt: "cartx picture",
  },
  {
    id: 4,
    type: "MATH WHISPERERS ♿️",
    title: "Voice-Powered Math Solver",
    content:
      "Transforming math accessibility with voice commands, our project empowers visually impaired users to solve equations effortlessly. Advanced speech recognition and NLP deliver intuitive auditory responses, making education more inclusive.",
    img: proj4,
    tags: [ "OPENAI API", "WOLFRAM API" , "VOICE RECOGNITION"],
    link: "https://github.com/Nikulp23/math-whisperer",
    alt: "cartx",
  },

  {
    id: 5,
    type: "STRATUS ☁️📍",
    title: "Weather based Navigation App",
    content:
      "Developed an mobile navigation app that leverages real-time weather data to recommend the best routes and departure times.",
    img: proj5,
    tags: ["REACT NATIVE", "EXPO GO", "GOOGLE APIs"],
    link: "https://github.com/CSCI-4440/App",
    alt: "STRATUS",
  },
  {
    id: 6,
    type: "OpenAI - Microsoft Bing 🤖 🧠",
    title: "Image to Web Recognition",
    content:
      "Created a cutting-edge feature that harnesses OpenAI’s Vision Model to analyze images and retrieve related web information via Microsoft Bing. This integration utilizes advanced AI trained on 400 million image-text pairs to deliver insightful and relevant search results.",
    img: proj6,
    tags: ["OPENAI API", "AZURE VISION API", "AZURE"],
    link: "https://github.com/Nikulp23/Projects/blob/main/Instagram%20Clone/pages/tweet/imageAPI.js",
    alt: "OpenAI",
  }
];

const Projects = () => {
    return (
      <Container size="lg" py="xl">
        {/* header */}
        <div className={classes.header} style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Group justify="center" gap="sm">
            <Badge variant="filled" size="xl">
              MY PROJECTS
            </Badge>
            <ActionIcon
              component="a"
              href="https://github.com/Nikulp23"
              target="_blank"
              size="xl"
              variant="filled"
              color="dark"
              radius="md"
            >
              <IconBrandGithub size={20} stroke={2.5} />
            </ActionIcon>
          </Group>
  
          <Title order={3} className={classes.title} align="center" mt="sm">
            Let's take a look at my projects
          </Title>
  
          <Text c="dimmed" className={classes.description} align="center" mt="md">
            A mix of hackathon builds, open-source work, and side projects I
            started to solve a problem I ran into.
          </Text>
        </div>
  
        {/* grid of cards */}
        <div className="projects-container">
          {cardData.slice(0, 6).map((card) => (
            <div className="project-card" key={card.id}>
              <img src={card.img} alt={card.type} className="project-image" />
  
              <div className="project-overlay">
  
                {/* hidden until hover */}
                <div className="project-details">

                <h2 className="project-title">{card.type}
                    
                    <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Open ${card.type} repository`}
                    >
                      <img
                        src={linkIcon}
                        alt=""
                        className="project-link-icon"
                      />
                    </a>
  
                  </h2>
  
                  <p className="project-tech">{card.tags.join(" • ")}</p>
                  <p className="project-award">{card.title}</p>
                  <p className="project-description">{card.content}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
};
  
export default Projects;