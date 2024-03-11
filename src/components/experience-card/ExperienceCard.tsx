type ExperienceCardType = {
  title: string;
  description: string;
};

const ExperienceCard = ({ title, description }: ExperienceCardType) => {
  return (
    <div className="border-b-2 border-gray-100 pb-4">
      <h1 className="text-primary text-xl font-medium">{title}</h1>
      <p className="text-secondary mt-2">{description}</p>
    </div>
  );
};

export default ExperienceCard;
