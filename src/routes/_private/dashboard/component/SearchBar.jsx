import Button from "@/components/Button.jsx";
import { handleChangeCheckbox, handleChangeInput } from "@/lib/utils.js";

export default function SearchBar({ handleSubmit, state, setSearchState }) {
  return (
    <>
      <div className=" mx-auto w-5/6 justify-center mt-5">
        <div className="flex rounded-lg border-2 border-stone-200/30 shadow-sm bg-stone-50 justify-around">
          <form
            autoComplete="on"
            method="Post"
            onSubmit={handleSubmit}
            className="max-lg:flex-col max-lg:space-y-2 lg:flex lg:space-x-2 p-2"
          >
            <input
              className="input"
              type="text"
              name="application"
              placeholder="application"
              value={state.application}
              onChange={handleChangeInput(setSearchState)}
            />
            <input
              className="input"
              type="text"
              name="profile"
              placeholder="profile"
              value={state.profile}
              onChange={handleChangeInput(setSearchState)}
            />
            <input
              className="input"
              type="text"
              name="label"
              placeholder="label"
              value={state.label}
              onChange={handleChangeInput(setSearchState)}
            />

            <div className="flex flex-row justify-center space-x-3 items-center bg-white px-2 border-[1px] rounded-md">
              <label htmlFor="isActive">Active </label>
              <input
                id="isActive"
                type="checkbox"
                className="flex"
                name="active"
                checked={state.active}
                onChange={handleChangeCheckbox(setSearchState)}
              />
            </div>

            <Button type="submit">Fetch Configs</Button>
          </form>
        </div>
      </div>
    </>
  );
}
