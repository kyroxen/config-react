import { useState } from "react";
import { handleChangeCheckbox, handleChangeInput } from "@/lib/utils.js";
import Button from "@/components/Button.jsx";
import { updateConfig } from "@/lib/services/DashboardService.js";

export default function EditRowModalForm({ rowData, closeModal, search }) {
  const [formState, setFormState] = useState({
    ...rowData,
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
    <div className="flex flex-col bg-white p-3 rounded-md w-[350px]">
      <div className="flex justify-center text-2xl mb-6">
        Edit: <span className="italic bg-lime-50 ">{rowData.key}</span>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        method="Post"
        className="flex flex-col space-y-3"
      >
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          name="value"
          placeholder={formState.value}
          value={formState.value}
          onChange={handleChangeInput(setFormState)}
        />
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
