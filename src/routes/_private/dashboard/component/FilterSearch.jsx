import { handleChangeInputSimple } from "@/lib/utils.js";
import Button from "@/components/Button.jsx";
import Modal from "@/routes/_private/dashboard/component/Modal.jsx";
import CreateNewConfigModalForm from "@/routes/_private/dashboard/component/CreateNewConfigModalForm.jsx";
import { useState } from "react";

export default function FilterSearch({
  handleSubmitFilterConfigs,
  search,
  searchState,
  searchFilter,
  setSearchFilter,
  setConfigs,
}) {
  const [createNewModalState, setCreateNewModalState] = useState(false);
  const openCreateNewModal = () => {
    setCreateNewModalState(true);
  };

  const closeCreateNewModal = () => {
    setCreateNewModalState(false);
  };

  const clearSearch = () => {
    setSearchFilter("");
    setConfigs((data) => {
      return data?.sort((a, b) => a.key.localeCompare(b.key));
    });
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex flex-row mx-auto mt-5 justify-between w-5/6 p-2 bg-stone-50 border-2 border-stone-200/30 shadow-md ">
        <div className="flex flex-row space-x-2">
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
          <Button
            onClick={clearSearch}
            className="bg-pink-300 hover:bg-pink-400"
          >
            Clear
          </Button>
        </div>

        <Button
          className="bg-sky-100 hover:bg-sky-200"
          onClick={() => openCreateNewModal()}
        >
          Create New
        </Button>
        <Modal
          isOpen={createNewModalState}
          closeModal={() => closeCreateNewModal()}
        >
          <CreateNewConfigModalForm
            closeModal={() => closeCreateNewModal()}
            search={search}
            searchState={searchState}
          />
        </Modal>
      </div>
    </>
  );
}
