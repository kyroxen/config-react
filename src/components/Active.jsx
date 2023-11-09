import { cn, handleChangeCheckbox } from "@/lib/utils.js";

export default function Active({ formState, setFormState, className }) {
  return (
    <div
      className={cn(
        "flex flex-row justify-center space-x-3 items-center py-1 px-2 border-[1px] rounded-md bg-green-300",
        className,
      )}
    >
      <label htmlFor="isActive">Active </label>
      <input
        id="isActive"
        type="checkbox"
        className="flex"
        name="active"
        checked={formState.active}
        onChange={handleChangeCheckbox(setFormState)}
      />
    </div>
  );
}
