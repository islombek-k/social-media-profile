import { ExperienceType } from "../../types/components";
import ExperienceCard from "../experience-card/ExperienceCard";
import ProjectCard from "../project-card/ProjectCard";

const Experience = ({
  experience,
  about,
  location,
  website,
  email,
  username,
  myCompanies,
}: ExperienceType) => {
  return (
    <div className="container mx-auto mt-8 mb-8">
      <div className="flex flex-col lg:flex-row gap-16 content-center justify-center items-center">
        <div className="flex flex-col gap-8 w-3/4">
          <ExperienceCard title="Experience" description={experience} />
          <ExperienceCard title="About me" description={about} />
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {myCompanies?.map((company) => (
              <ProjectCard
                label={company.label}
                company={company.company}
                image={company.image}
                slug={company.slug}
                duration={company.duration}
                key={company.id}
              />
            ))}
          </div>
        </div>
        <div className="border-2 border-gray-100 rounded-md p-6 w-3/4 lg:w-1/4 h-fit">
          <h2 className="text-primary text-lg">Location</h2>
          <p className="text-secondary mt-2 mb-4">{location}</p>
          <h2 className="text-primary text-lg">Website</h2>
          <a
            href={website}
            target="_blank"
            className="text-secondary mt-2 mb-4"
          >
            🔗 {website}
          </a>
          <h2 className="text-primary text-lg">Portfolio</h2>
          <p className="text-secondary mt-2 mb-4">{username}</p>
          <h2 className="text-primary text-lg">Email</h2>
          <a href={`mailto:${email}`} className="text-secondary mt-2 mb-4">
            🔗 {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
