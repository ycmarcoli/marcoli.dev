import { Link } from "react-router-dom";
import ObfuscatedText from "./ObfuscatedText";
import ProjectTag from "./ProjectTag";

interface HomeProjectCardProps {
  year: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  slug: string;
}

export default function HomeProjectCard({
  year,
  title,
  description,
  tags,
  githubLink,
  slug,
}: HomeProjectCardProps) {
  return (
    <div className="bg-gray-200 border-gray-400 border rounded-lg p-6 flex flex-col h-full">
      <div className="flex-grow">
        <span className="text-gray-500">{year}</span>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-bold mb-2 hover:underline">
            <ObfuscatedText text={title} underline />
          </h3>
        </a>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <ProjectTag key={index}>{tag}</ProjectTag>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Link to={`/projects/${slug}`} className="text-yellow-500 hover:text-yellow-600">
          <ObfuscatedText text="Learn More →" />
        </Link>
      </div>
    </div>
  );
}