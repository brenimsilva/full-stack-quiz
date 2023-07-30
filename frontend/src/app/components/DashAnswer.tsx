import React, { useEffect, useState } from "react";

type DashAnswerProps = {
  getAnswerData: (text: string, selected: boolean) => void;
};
export default function DashAnswer({ getAnswerData }: DashAnswerProps) {
  const [text, setText] = useState<string>("Resposta 1");
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    getAnswerData(text, selected);
  }, [text, selected]);

  const colors = [
    "bg-primary",
    "bg-secondary",
    "bg-greenHighlight",
    "text-blueHighLight",
    "text-primary",
    "bg-secondary/[0.4]",
    "shadow-greenHighlight/[0.4]",
  ];
  return (
    <div
      className={`
      group
      rounded shadow-md ${
        selected ? "shadow-greenHighlight/[0.4]" : ""
      } p-5 bg-${
        selected ? "greenHighlight" : "white"
      } text-center cursor-pointer hover:bg-${
        selected ? "greenHighlight" : "gray-100"
      } transition`}
      onClick={() => setSelected(!selected)}
    >
      <input
        type="text"
        className={`bg-${
          selected ? "greenHighlight" : "white"
        } focus:outline-none text-${
          selected ? "white" : "primary"
        } text-md rounded-lg  w-80 p-2.5 group-hover:bg-${
          selected ? "greenHighlight" : "gray-100"
        } transition w-fit`}
        placeholder="Insira a resposta..."
        required
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
