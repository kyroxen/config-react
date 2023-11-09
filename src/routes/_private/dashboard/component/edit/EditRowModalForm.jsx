import { useState } from "react";
import { handleChangeInput } from "@/lib/utils.js";
import Button from "@/components/Button.jsx";
import { updateConfig } from "@/lib/services/DashboardService.js";
import Active from "@/components/Active.jsx";

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
        Edit Key: &nbsp;{" "}
        <span className="italic bg-lime-50 border-2 px-2 border-lime-400">
          {rowData.key}
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        method="Post"
        className="flex flex-col space-y-3"
      >
        <textarea
          className="textarea w-full"
          name="value"
          placeholder={formState.value}
          value={formState.value}
          onChange={handleChangeInput(setFormState)}
        />
        <Active formState={formState} setFormState={setFormState} />
        <Button className="w-full" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
