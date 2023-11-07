import { cn } from "@/lib/utils.js";

export default function TooltipContainer({ children, className, tooltip }) {
  return (
    <div className="flex relative group">
      {children}

      <span
        className={cn(
          "min-w-max group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-[110%] opacity-0 m-4 mx-auto ",
          className,
        )}
      >
        {tooltip}
      </span>
    </div>
  );
}
