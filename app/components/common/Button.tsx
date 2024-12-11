
import { cn } from "@/app/utils/helper";

type ButtonPropsType = {
    text?: string;
    style?: string;
}

const Button = ({ text,style }: ButtonPropsType) => {
    return (
        <button
            type="submit"
            className={cn('bg-sky-blue-400 text-white font-medium text-[18px] leading-[20px] rounded-xl px-10 py-3',style)}

        >
            {text}
        </button>
    )
}

export default Button