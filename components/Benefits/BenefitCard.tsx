interface BenefitCardProps {
  content: { title: string; text: string; iconClassName: string };
}

export default function BenefitCard({ content }: BenefitCardProps) {
  return (
    <div className="flex">
      <div className="card-icon mr-2">
        <i className={content.iconClassName}></i>
      </div>
      <div className="card-text flex flex-col">
        <h4 className="font-bold">{content.title}</h4>
        <p>{content.text}</p>
      </div>
    </div>
  );
}
