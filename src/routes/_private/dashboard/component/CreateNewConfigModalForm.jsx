import { useState } from "react";
import { handleChangeCheckbox, handleChangeInput } from "@/lib/utils.js";
import Button from "@/components/Button.jsx";
import { updateConfig } from "@/lib/services/DashboardService.js";

export default function CreateNewConfigModalForm({
  closeModal,
  search,
  searchState,
}) {
  const initialState = {
    id: null,
    application: searchState.application,
    profile: searchState.profile,
    label: searchState.label,
    key: "",
    value: "",
    active: true,
  };

  const [formState, setFormState] = useState({
    ...initialState,
  });

  function handleSubmit(event) {
    event.preventDefault();
    updateConfig(formState).then((response) => {
      if (response && response === true) {
        // close modal
        closeModal();
        // fetch api
        search();
      }
    });
  }

  return (
    <div className="flex flex-col bg-white p-3 rounded-md w-[450px]">
      <div className="flex justify-center text-2xl mb-6">Create New Config</div>
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        method="Post"
        className="flex flex-col space-y-5"
      >
        <div className="flex flex-row justify-between items-center">
          <label htmlFor="key">Key </label>
          <textarea
            id="key"
            className="flex w-3/4 rounded-md border border-input bg-background px-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            name="key"
            placeholder="Enter a config key e.g cities"
            value={formState.key}
            onChange={handleChangeInput(setFormState)}
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <label htmlFor="value">Value </label>
          <textarea
            id="value"
            className="flex w-3/4 rounded-md border border-input bg-background px-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            name="value"
            placeholder="Enter a config value e.g New Delhi, Mumbai"
            value={formState.value}
            onChange={handleChangeInput(setFormState)}
          />
        </div>
        <div className="flex flex-row justify-center space-x-3 items-center">
          <label htmlFor="isActive" className="">
            Active{" "}
          </label>
          <input
            id="isActive"
            type="checkbox"
            className="flex"
            name="active"
            checked={formState.active}
            onChange={handleChangeCheckbox(setFormState)}
          />
        </div>
        <Button className="w-full" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
