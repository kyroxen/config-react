import { cn } from "@/lib/utils.js";

export default function Button({
  children,
  className,
  onClick,
  tooltip,
  type,
}) {
  return (
    <div className="group flex relative">
      <button
        onClick={onClick}
        type={type}
        className={cn(
          "px-3 bg-lime-100 h-10 text-black hover:bg-lime-200 rounded-md border-stone-600 border-2 hover:border-black",
          className,
        )}
      >
        {children}
      </button>
      {tooltip ? (
        <span
          className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[130%] opacity-0 m-4 mx-auto"
        >
          {tooltip}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
