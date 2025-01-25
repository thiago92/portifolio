import { CustomButtonProps } from "@/interface/custom-button-props.interface";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import React from "react";

export default function CustomButton({
  text,
  type = "button",
  href,
  tooltip,
  onClick,
  disabled = false,
}: CustomButtonProps) {
  const { t } = useTranslation();

  const buttonElement = href ? (
    // Caso seja um link
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={type === "download"}
      className={`bg-yellow-600 font-bold text-gray-950 p-2 rounded-md hover:bg-yellow-700 transition ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {t(text)}
    </a>
  ) : (
    // Caso seja um botão
    <button
      type={type as React.ButtonHTMLAttributes<HTMLButtonElement>["type"]}
      onClick={onClick}
      disabled={disabled}
      className={`bg-yellow-600 font-bold text-gray-950 p-2 rounded-md hover:bg-yellow-700 transition ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {t(text)}
    </button>
  );

  return tooltip ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {buttonElement}
        </TooltipTrigger>
        <TooltipContent>
          <p>{t(tooltip)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    buttonElement
  );
}
