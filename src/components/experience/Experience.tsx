import ExperienceCard from "../experience-card/ExperienceCard";
import ProjectCard from "../project-card/ProjectCard";

const Experience = () => {
  return (
    <div className="container mx-auto mt-8 mb-8">
      <div className="flex flex-col lg:flex-row gap-16 content-center justify-center items-center">
        <div className="flex flex-col gap-8 w-3/4">
          <ExperienceCard
            title="Experience"
            description="I specialize in UX/UI design, brand strategy, and Webflox development."
          />
          <ExperienceCard
            title="About me"
            description="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow
            development. I'm always striving to grow and learn something new and I don't take myself too seriously.
            I'm passionate about helping startups grow, improve their customer experience, and to raise venture capital
            through good design."
          />
          <div className="flex flex-col lg:flex-row w-full gap-8">
            <ProjectCard
              label="Lead Product Designer"
              company="Dribble"
              image="assets/dribble.png"
              slug="/"
              duration="May 2020 - Present"
            />
            <ProjectCard
              label="Product Designer"
              company="Apple"
              image="assets/apple.jpg"
              slug="/"
              duration="Jun 2018 - May 2020"
            />
          </div>
        </div>
        <div className="border-2 border-gray-100 rounded-md p-6 w-3/4 lg:w-1/4 h-fit">
          <h2 className="text-primary text-lg">Location</h2>
          <p className="text-secondary mt-2 mb-4">🇦🇺 Melbourne, Australia</p>
          <h2 className="text-primary text-lg">Website</h2>
          <p className="text-secondary mt-2 mb-4">🔗 biscuitoliva.com</p>
          <h2 className="text-primary text-lg">Portfolio</h2>
          <p className="text-secondary mt-2 mb-4">🔗 @biscuit</p>
          <h2 className="text-primary text-lg">Email</h2>
          <p className="text-secondary mt-2 mb-4">🔗 hello@biscuitoliva.com</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
