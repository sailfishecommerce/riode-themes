import { Icon } from "@iconify/react";

interface BenefitCardProps {
  content: {
    title: string;
    text: string;
    iconClassName: string;
    bordered?: boolean;
  };
}

export default function BenefitCard({ content }: BenefitCardProps) {
  const isBordered = content?.bordered ? "border-l border-r" : "";
  return (
    <div className={`flex p-4 items-center w-1/2 justify-center ${isBordered}`}>
      <Icon
        className="mr-4"
        icon={content.iconClassName}
        height={30}
        width={30}
      />
      <div className="card-text flex flex-col">
        <h4 className="font-bold">{content.title}</h4>
        <p className="text-gray-500">{content.text}</p>
      </div>
    </div>
  );
}
