
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};
const MakaoSectionHeader = ({ title, subtitle, className = "" }: Props) => (
  <div className={`text-center mb-8 ${className}`}>
    <h2 className="text-3xl font-bold text-black">{title}</h2>
    {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
  </div>
);
export default MakaoSectionHeader;
