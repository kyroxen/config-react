import Button from "@/components/Button.jsx";
import { handleChangeInput } from "@/lib/utils.js";
import Active from "@/components/Active.jsx";

export default function ConfigSearchFragment({
  handleSubmit,
  state,
  setSearchState,
}) {
  return (
    <>
      <form
        autoComplete="on"
        method="Post"
        onSubmit={handleSubmit}
        className="flex flex-col space-y-2 space-x-2 xl:flex-row xl:space-x-2 xl:space-y-0"
      >
        <input
          className="input w-[100px]"
          type="text"
          name="application"
          placeholder="application"
          value={state.application}
          onChange={handleChangeInput(setSearchState)}
        />
        <input
          className="input w-[100px]"
          type="text"
          name="profile"
          placeholder="profile"
          value={state.profile}
          onChange={handleChangeInput(setSearchState)}
        />
        <input
          className="input w-[100px]"
          type="text"
          name="label"
          placeholder="label"
          value={state.label}
          onChange={handleChangeInput(setSearchState)}
        />
        <Active formState={state} setFormState={setSearchState} />
        <Button type="submit">Fetch Configs</Button>
      </form>
    </>
  );
}
