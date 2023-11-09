import { handleChangeInputSimple } from "@/lib/utils.js";
import Button from "@/components/Button.jsx";

export default function ConfigFilterFragment({
  handleSubmitFilterConfigs,
  searchFilter,
  setSearchFilter,
  clearSearch,
}) {
  return (
    <>
      <form
        onSubmit={handleSubmitFilterConfigs}
        className="flex flex-row space-x-2"
      >
        <input
          type="text"
          className="input"
          placeholder="Enter key"
          name="key"
          value={searchFilter}
          onChange={handleChangeInputSimple(setSearchFilter)}
        />
        <Button type="submit">Filter</Button>
      </form>
      <Button onClick={clearSearch} className="bg-pink-300 hover:bg-pink-400">
        Clear
      </Button>
    </>
  );
}
