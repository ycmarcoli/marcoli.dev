import { Link } from "react-router-dom";
import ObfuscatedText from "../ObfuscatedText";

export default function About() {
  return (
    <div className="py-28 font-agave">
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="mb-4">
        Hi there! I'm Marco, a Software/Computer Engineer student at the University of Waterloo!
      </p>

      <h2 className="text-2xl font-semibold mb-2">Professional Journey</h2>
      <p className="mb-4">
        I specialize in Full-Stack Development, with 5 years of experience in Software Engineering.
        My journey in tech began on Scratch since I was in fourth grade, igniting my passion for
        coding. Since then, I've been deeply interested in AI and web development, always eager to
        explore new technologies and push the boundaries of what's possible.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Skills & Expertise (but not limited to)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>JavaScript/TypeScript</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
          <ul className="list-disc list-inside">
            <li>MERN Stack</li>
            <li>LAMP Stack</li>
            <li>T3 Stack</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Databases</h3>
          <ul className="list-disc list-inside">
            <li>SQL (MySQL, PostgreSQL)</li>
            <li>NoSQL (MongoDB)</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">AI and Machine Learning</h3>
          <ul className="list-disc list-inside">
            <li>Huggingface</li>
            <li>llama.cpp</li>
            <li>LangChain</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">DevOps and Tools</h3>
          <ul className="list-disc list-inside">
            <li>Git</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>CI/CD pipelines</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
          <ul className="list-disc list-inside">
            <li>Data Structures & Algorithms</li>
            <li>Software Design Patterns</li>
            <li>PCB Design</li>
            <li>Having fun while working</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
      <p className="mb-4">
        When I'm not coding, you can find me immersed in the world of racing. I'm particularly
        interested in sim racing, which allows me to combine my love for technology with the thrill
        of motorsports. I'm also passionate about real-life racing and enjoy following various
        racing series. This interest in racing not only serves as a hobby but also inspires my
        approach to problem-solving and continuous improvement in my tech career!
      </p>
      <p className="mb-4">
        I'm particularly interested in GT3! Feel free to reach out and race with me :)
      </p>
      <img src="/images/ferrarigt3.jpeg" alt="Ferrari GT3" className="rounded-xl border-2" />
      <p className="mb-4">
        Image Credit: <span>GT World Challenge Powered by AWS</span>
      </p>
      <h2 className="text-2xl font-semibold mb-2">Closing Note</h2>
      <p className="mb-4">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of
        your visions. Feel free to check out my portfolio and don't hesitate to reach out through my{" "}
        <Link
          to="https://www.linkedin.com/in/ycmarcoli/"
          target="_blank"
          className="text-yellow-500 hover:text-yellow-600"
        >
          <ObfuscatedText text="LinkedIn" />
        </Link>
        or{" "}
        <Link
          to="mailto:johndoe@fakeemail.com"
          target="_blank"
          className="text-yellow-500 hover:text-yellow-600"
        >
          <ObfuscatedText text="ycmarcoli@gmail.com" />
        </Link>
        !
      </p>
    </div>
  );
}
