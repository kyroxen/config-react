import Button from "@/components/Button.jsx";
import SimpleModal from "@/components/SimpleModal.jsx";
import CreateNewConfigModalForm from "@/routes/_private/dashboard/component/edit/CreateNewConfigModalForm.jsx";
import { useState } from "react";
import ConfigSearchFragment from "@/routes/_private/dashboard/component/search/ConfigSearchFragment.jsx";
import ConfigFilterFragment from "@/routes/_private/dashboard/component/search/ConfigFilterFragment.jsx";

export default function FilterAndSearchBar({
  handleSubmitFilterConfigs,
  search,
  searchState,
  searchFilter,
  setSearchFilter,
  setConfigs,
  handleSubmit,
  setSearchState,
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
      <div className="sticky top-0 z-50 flex flex-col mx-auto mt-5 justify-between w-5/6 p-2 border-2 border-stone-200/30 shadow-md bg-gradient-light xl:flex-row">
        <div className="flex flex-row space-x-2 h-fit">
          <ConfigFilterFragment
            handleSubmitFilterConfigs={handleSubmitFilterConfigs}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
            clearSearch={clearSearch}
          />
        </div>

        <ConfigSearchFragment
          handleSubmit={handleSubmit}
          state={searchState}
          setSearchState={setSearchState}
        />

        <Button
          className="bg-sky-100 hover:bg-sky-200"
          onClick={() => openCreateNewModal()}
        >
          Create New
        </Button>
        <SimpleModal
          isOpen={createNewModalState}
          closeModal={() => closeCreateNewModal()}
        >
          <CreateNewConfigModalForm
            closeModal={() => closeCreateNewModal()}
            search={search}
            searchState={searchState}
          />
        </SimpleModal>
      </div>
    </>
  );
}
