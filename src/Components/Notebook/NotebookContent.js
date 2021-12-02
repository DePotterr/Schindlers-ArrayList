import React, { useState, useContext } from "react";
import "./Notebook.css";
import { CluesContext } from "../Main";
export const NotebookContent = () => {
  const clues = useContext(CluesContext);
  clues.forEach((clue) => {
    clue.isClue = false;
  });

  const [checklist, setChecklist] = useState(JSON.parse(sessionStorage.getItem("checklistClues")) ?? clues);
  const toggleComplete = (id) => {
    let updatedList = checklist.map((clue) =>
      clue.id === id ? { ...clue, isClue: !clue.isClue } : clue
    );
    sessionStorage.setItem("checklistClues", JSON.stringify(updatedList));
    setChecklist(updatedList);
  };

  return (
    <div className="notes-container">
      <span className="notes-header">Kamer</span>
      {checklist.map((clue) => {
        if (clue.type === "room") {
          return (
            <tr key={clue.id}>
              <td>
                <input
                  type="checkbox"
                  checked={clue.isClue}
                  onChange={() => toggleComplete(clue.id)}
                />
              </td>
              <td className="clue-item" onClick={() => toggleComplete(clue.id)}>
                {clue.title}
              </td>
            </tr>
          );
        }
      })}
      <span className="notes-header">Wapen</span>
      {checklist.map((clue) => {
        if (clue.type === "weapon") {
          return (
            <tr key={clue.id}>
              <td>
                <input
                  type="checkbox"
                  checked={clue.isClue}
                  onChange={() => toggleComplete(clue.id)}
                />
              </td>
              <td className="clue-item" onClick={() => toggleComplete(clue.id)}>
                {clue.title}
              </td>
            </tr>
          );
        }
      })}
      <span className="notes-header">Verdachte</span>
      {checklist.map((clue) => {
        if (clue.type === "suspect") {
          return (
            <tr key={clue.id}>
              <td>
                <input
                  type="checkbox"
                  checked={clue.isClue}
                  onChange={() => toggleComplete(clue.id)}
                />
              </td>
              <td className="clue-item" onClick={() => toggleComplete(clue.id)}>
                {clue.title}
              </td>
            </tr>
          );
        }
      })}
    </div>
  );
};
