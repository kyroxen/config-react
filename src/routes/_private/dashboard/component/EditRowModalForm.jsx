import { useState } from "react";
import { handleChangeInput } from "@/lib/utils.js";
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
        <Button className="w-full" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
