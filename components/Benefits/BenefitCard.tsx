import { Icon } from "@iconify/react";

interface BenefitCardProps {
  content: { title: string; text: string; iconClassName: string };
}

export default function BenefitCard({ content }: BenefitCardProps) {
  return (
    <div className="flex p-4 items-center">
      <Icon
        className="mr-4"
        icon={content.iconClassName}
        height={30}
        width={30}
      />{" "}
      <div className="card-text flex flex-col">
        <h4 className="font-bold">{content.title}</h4>
        <p className="text-gray-500">{content.text}</p>
      </div>
    </div>
  );
}
