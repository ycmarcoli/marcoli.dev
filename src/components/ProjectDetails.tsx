import { useParams } from "react-router-dom";
import ObfuscatedText from "./ObfuscatedText";
import ProjectTag from "./ProjectTag";

// This is a mock database. In a real application, you'd fetch this data from an API or database.
const projectsData = {
  "real-estate-llm-chatbot": {
    year: "2024",
    title: "Real Estate LLM ChatBot",
    description:
      "Web-based chatbot using local Llama3 that can provide contexual responses based on the current state.",
    longDescription:
      "This project involves developing an intelligent web-based chatbot using an open-source Large Language Model (LLM) that can run locally. The chatbot will be capable of understanding natural language queries and providing relevant, accurate responses related to real estate.",
    tags: ["AWS Amplify", "Route 53", "DynamoDB", "Cognito", "Next.js", "React Native"],
    githubLink: "https://github.com/ycmarcoli/AmpliBot",
    demoLink: "https://chatbot.marcoli.dev",
    features: [
      "Natural language processing for understanding complex real estate queries",
      "Chat session management for individual users",
      "Personalized recommendations based on user preferences",
      "Multi-platform support (web and mobile)",
    ],
    challenges: [
      "Defining a robust project structure, component diagrams, and implementing them",
      "Ensuring accuracy and relevance of responses in the complex real estate domain",
      "Implementing efficient local deployment of large language models",
      "Designing a user-friendly interface for both web and mobile platforms",
    ],
  },
  // Add more projects here as needed
};

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return <div className="font-agave">Project details not available yet. Come back later!</div>;
  }

  return (
    <div className="font-agave max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-4">{project.year}</p>
      <p className="text-xl mb-6">{project.longDescription}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <ProjectTag key={index} dark>
            {tag}
          </ProjectTag>
        ))}
      </div>
      <div className="flex gap-8">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-600 mb-8 block"
        >
          <ObfuscatedText text="View on GitHub →" />
        </a>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-600 mb-8 block"
        >
          <ObfuscatedText text="View Demo →" />
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="list-disc list-inside mb-6">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4">Challenges</h2>
      <ul className="list-disc list-inside mb-6">
        {project.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4">Design Document</h2>
      <div className="w-full" style={{ paddingTop: "141.4%", position: "relative" }}>
        <iframe
          src="/pdfs/llm-design-doc.pdf"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
