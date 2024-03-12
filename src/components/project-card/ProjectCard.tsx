import { Link } from "react-router-dom";
import { ProjectCardI } from "../../types/components";

const ProjectCard = ({
  label,
  image,
  company,
  slug,
  duration,
}: ProjectCardI) => {
  return (
    <div className="border-2 border-gray-100 rounded-md p-6 w-full">
      <div className="flex items-center gap-2">
        <img src={image} alt="dribble" className="rounded-full w-12 h-12" />
        <div>
          <h1 className="text-xl font-medium text-primary">{label}</h1>
          <p className="text-secondary">{company}</p>
        </div>
      </div>
      <p className="text-secondary py-6">{duration}</p>
      <hr className="mx-[-25px] py-2" />
      <Link
        to={slug}
        className="flex justify-end items-end text-right pt-2 text-secondary hover:opacity-80 "
      >
        <span className="m">View project</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
