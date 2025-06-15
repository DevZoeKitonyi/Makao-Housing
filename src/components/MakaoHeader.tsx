
import React from "react";
import { Link } from "react-router-dom";
import { Search, Home } from "lucide-react";

const MakaoHeader = ({
  logoIcon = <Search className="h-8 w-8 text-green-700" />,
  title = "Makao",
}) => (
  <div className="text-center mb-8">
    <Link to="/" className="flex items-center justify-center space-x-2">
      {logoIcon}
      <h1 className="text-2xl font-bold text-black">{title}</h1>
    </Link>
  </div>
);

export default MakaoHeader;
