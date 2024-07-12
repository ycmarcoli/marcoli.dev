import HomeProjectCard from "../HomeProjectCard";

export default function Projects() {
  const llmProjectData = {
    year: "2024",
    title: "Real Estate LLM ChatBot",
    description:
      "Web-based chatbot using local Llama3 that can provide contexual responses based on the current state.",
    tags: ["AWS Amplify", "Route 53", "DynamoDB", "Cognito", "Next.js", "React Native"],
    githubLink: "https://github.com/ycmarcoli/AmpliBot",
    slug: "real-estate-llm-chatbot",
  };

  const personalWebsiteData = {
    year: "2024",
    title: "Personal Website (this website)",
    description:
      "My personal website that showcases my projects, achievements, and a little bit about myself.",
    tags: ["React.js", "Route 53", "Cloudfront", "S3"],
    githubLink: "https://github.com/ycmarcoli/AmpliBot",
    slug: "personal-website",
  };

  return (
    <div className="font-agave">
      <div className="mt-28 mb-8 md:w-3/4">
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <HomeProjectCard {...llmProjectData} />
        </div>
        <div className="flex-1">
          <HomeProjectCard {...personalWebsiteData} />
        </div>
      </div>
    </div>
  );
}