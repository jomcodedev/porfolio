import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const twMergeClassnames = (...inputs) => {
    return twMerge(clsx(...inputs));
};
export default twMergeClassnames