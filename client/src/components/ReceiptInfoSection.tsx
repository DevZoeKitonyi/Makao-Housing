
import React from "react";
import { Calendar } from "lucide-react";

type ReceiptInfoSectionProps = {
  date: string;
  status: string;
};

const ReceiptInfoSection: React.FC<ReceiptInfoSectionProps> = ({ date, status }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2 text-gray-600">
      <Calendar className="h-4 w-4" />
      <span>{date}</span>
    </div>
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      {status}
    </div>
  </div>
);
export default ReceiptInfoSection;
