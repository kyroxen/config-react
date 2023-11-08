import { handleChangeInput, timeElapsed } from "@/lib/utils.js";
import { useState } from "react";
import Fuse from "fuse.js";

import Button from "@/components/Button.jsx";
import Modal from "@/routes/_private/dashboard/component/Modal.jsx";
import SearchBar from "@/routes/_private/dashboard/component/SearchBar.jsx";
import { searchAPI } from "@/lib/services/DashboardService.js";
import EditRowModalForm from "@/routes/_private/dashboard/component/EditRowModalForm.jsx";
import FilterSearch from "@/routes/_private/dashboard/component/FilterSearch.jsx";

export default function Dashboard() {
  const columnsToDisplay = ["key", "value", "label", "updatedAt"];

  /**
   * These are the states required for managing config search bar states
   */
  const [configs, setConfigs] = useState([]);
  const [searchState, setSearchState] = useState({
    application: "cf",
    profile: "stage",
    label: "latest",
    active: true,
  });

  /**
   * These are the states required for managing row edit modals
   */
  const [rowEditModalStates, setRowEditModalStates] = useState(
    new Array(configs.length).fill(false),
  );

  /**
   * This state is for search filter
   */
  const [searchFilter, setSearchFilter] = useState("");

  function search() {
    searchAPI(searchState).then((data) => {
      data?.sort((a, b) => a.key.localeCompare(b.key));
      setConfigs(data);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  const openRowEditModal = (index) => {
    const updatedStates = [...rowEditModalStates];
    updatedStates[index] = true;
    setRowEditModalStates(updatedStates);
  };

  const closeRowEditModal = (index) => {
    const updatedStates = [...rowEditModalStates];
    updatedStates[index] = false;
    setRowEditModalStates(updatedStates);
  };

  const fuse = new Fuse(configs, {
    includeScore: true,
    threshold: 0.3,
    keys: ["key"],
  });

  function filterConfigs() {
    const r = fuse.search(searchFilter);
    const newArray = r?.map((obj) => obj.item) || [];
    // setSearchFilterResults(newArray);
    // setConfigs(newArray);

    const sortedConfigs = [...configs].sort((a, b) => {
      const aIndex = newArray.findIndex((item) => item.key === a.key);
      const bIndex = newArray.findIndex((item) => item.key === b.key);
      if (aIndex === -1 && bIndex === -1) {
        return 0;
      }
      if (aIndex === -1) {
        return 1;
      }
      if (bIndex === -1) {
        return -1;
      }
      return aIndex - bIndex;
    });

    setConfigs(sortedConfigs);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const handleSubmitFilterConfigs = (e) => {
    e.preventDefault();
    filterConfigs();
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        state={searchState}
        setSearchState={setSearchState}
      />

      <FilterSearch
        handleSubmitFilterConfigs={(e) => handleSubmitFilterConfigs(e)}
        search={search}
        searchState={searchState}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        setConfigs={setConfigs}
      />

      <div className="flex justify-center">
        <table className="gap-4 border-collapse table-fixed w-5/6 break-all shadow-md mb-10">
          <thead className="border-2 border-stone-200 bg-lime-50 ">
            <tr>
              {columnsToDisplay.map((header) => (
                <th
                  className="border-b-2 border-b-stone-200 border-t-stone-600 p-3"
                  key={header}
                >
                  {header}
                </th>
              ))}
              <th className="border-b-2 border-stone-200 p-3">action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {(configs?.length > 0 ? configs : []).map((rowData, index) => (
              <tr className="justify-center" key={`tr_${index}`}>
                {columnsToDisplay.map((columnName) => (
                  <td
                    className="p-3 border border-slate-300  text-sm"
                    key={`cell_${columnName}_${index}`}
                  >
                    {columnName === "updatedAt"
                      ? timeElapsed(rowData[columnName])
                      : rowData[columnName]}
                  </td>
                ))}
                <td className="p-3 border border-slate-300  text-sm">
                  <div className="flex flex-col items-center">
                    <Button
                      type="button"
                      onClick={() => openRowEditModal(index)}
                    >
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {(configs?.length > 0 ? configs : []).map((rowData, index) => (
          <Modal
            key={index}
            isOpen={rowEditModalStates[index]}
            closeModal={() => closeRowEditModal(index)}
          >
            <EditRowModalForm
              rowData={rowData}
              closeModal={() => closeRowEditModal(index)}
              search={search}
            />
          </Modal>
        ))}
      </div>
    </>
  );
}
