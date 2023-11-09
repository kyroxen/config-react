import { useState } from "react";
import { handleChangeInput } from "@/lib/utils.js";
import Button from "@/components/Button.jsx";
import { updateConfig } from "@/lib/services/DashboardService.js";
import Active from "@/components/Active.jsx";

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
            className="textarea"
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
            className="textarea"
            name="value"
            placeholder="Enter a config value e.g New Delhi, Mumbai"
            value={formState.value}
            onChange={handleChangeInput(setFormState)}
          />
        </div>
        <Active formState={formState} setFormState={setFormState} />
        <Button className="w-full" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
