import { handleChangeInput } from "@/lib/utils.js";
import { useState } from "react";
import Button from "@/components/Button.jsx";
import Modal from "@/routes/_private/dashboard/component/Modal.jsx";
import SearchBar from "@/routes/_private/dashboard/component/SearchBar.jsx";
import { searchAPI } from "@/lib/services/DashboardService.js";

export default function Dashboard() {
  const columnsToDisplay = ["key", "value", "label", "updatedAt"];
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchState] = useState({
    application: "cf",
    profile: "stage",
    label: "latest",
  });

  function search() {
    searchAPI(searchState).then((data) => {
      setSearchResults(data);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  const [modalStates, setModalStates] = useState(
    new Array(searchResults.length).fill(false),
  );

  const openModal = (index) => {
    const updatedStates = [...modalStates];
    updatedStates[index] = true;
    setModalStates(updatedStates);
  };

  const closeModal = (index) => {
    const updatedStates = [...modalStates];
    updatedStates[index] = false;
    setModalStates(updatedStates);
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        handleInputChange={handleChangeInput(setSearchState)}
        state={searchState}
      />

      <div className="flex justify-center mt-5">
        <table className="gap-4 border-collapse table-fixed w-1/2 break-all shadow-md">
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
            {searchResults
              ?.sort((a, b) => a.key.localeCompare(b.key))
              .map((rowData, index) => (
                <tr className="justify-center" key={`tr_${index}`}>
                  {columnsToDisplay.map((columnName) => (
                    <td
                      className="p-3 border border-slate-300  text-sm"
                      key={`cell_${columnName}_${index}`}
                    >
                      {rowData[columnName]}
                    </td>
                  ))}
                  <td className="p-3 border border-slate-300  text-sm">
                    <div className="flex flex-col items-center">
                      <Button type="button" onClick={() => openModal(index)}>
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {searchResults?.map((rowData, index) => (
          <Modal
            key={index}
            rowData={rowData}
            isOpen={modalStates[index]}
            closeModal={() => closeModal(index)}
            search={search}
          />
        ))}
      </div>
    </>
  );
}
