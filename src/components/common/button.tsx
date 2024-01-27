import React from "react";

import { IAppButtonProps } from "@/types/common-components";
import Link from "next/link";

// =====================================================================================================

const AppButton: React.FC<IAppButtonProps> = ({
  type = "button",
  href = "#",
  title,
  handleClick,
  classes,
  disabled
}: IAppButtonProps) => {
  return (
    type === "submit" ? (
      <button
        type={type}
        disabled={disabled}
        onSubmit={handleClick}
        className={`px-[24px] py-[12px] rounded-lg border-[1px] border-white ${classes} ${disabled && "disabled"}`}
        style={{ lineHeight: "24px", fontSize: "15px" }}
      >
        {title}
        {/* {href !== "#" ? <Link href={href}>{title}</Link> : title} */}
      </button>
    ) : (
      <Link href={href ?? "#"} className="no-hover">
        <button
          type={type}
          onClick={handleClick}
          className={`px-[24px] py-[12px] rounded-lg border-[1px] border-white ${classes}`}
          style={{ lineHeight: "24px", fontSize: "15px" }}
        >
          {title}
          {/* {href !== "#" ? <Link href={href}>{title}</Link> : title} */}
        </button>
      </Link>
    )
  );
};

export default AppButton;
