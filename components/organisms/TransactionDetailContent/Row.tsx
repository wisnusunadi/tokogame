import React from "react";
interface RowProps {
  title: string;
  value: string | number;
  className?: string;
}

export default function Row(props: Partial<RowProps>) {
  const { title, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {title} <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
}
