import { CustomButtonProps } from "@/interface/custom-button-props.interface";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import { useTranslation } from "react-i18next";

export default function CustomButton({ text, type = 'button', href = '#', tooltip }: CustomButtonProps) {

    const { t } = useTranslation()

    const buttonElement = (
        <a 
            href={href} 
            download={type === 'download'} 
            className="bg-yellow-600 font-bold text-gray-950 p-2 rounded-md hover:bg-yellow-700 transition"
        >
            {text}
        </a>
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