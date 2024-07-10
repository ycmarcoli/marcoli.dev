import HomeProjectCard from "../HomeProjectCard";
import homeImage from "/images/home-icon.png";

export default function Home() {
  const projectData = {
    year: "2024",
    title: "Real Estate LLM ChatBot",
    description:
      "Web-based chatbot using an open-source Large Language Model (LLM) that can run locally.",
    tags: ["AWS Amplify", "Route 53", "DynamoDB", "Cognito", "Next.js", "React Native"],
    githubLink: "https://github.com/ycmarcoli/AmpliBot",
    slug: "real-estate-llm-chatbot",
  };

  return (
    <div className="font-agave">
      <div className="flex justify-between my-28 gap-8">
        <div className="md:w-3/4">
          <h1 className="text-5xl font-bold">Hello, I'm Marco</h1>
          <p className="text-lg">
            Welcome to my portfolio! I'm a third year engineering student who just happens to love
            coding. Browse around and see what I'm up to!
          </p>
        </div>
        <div className="w-full md:w-1/6 flex justify-center items-center">
          <img className="w-full h-auto object-cover" src={homeImage} alt="Description of image" />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
        <HomeProjectCard {...projectData} />
      </div>
    </div>
  );
}
