import React from "react";
import MButton, { MButtonType } from "./MButton";

type Props = {
  base: string;
  buttons: Array<MButtonType>;
};

export default function Menu({ buttons, base }: Props) {
  return (
    <div className="bg-gray-200 w-12 flex justify-center align-center flex-col gap-5 p-2 h-screen">
      {buttons.map((button) => {
        return (
          <MButton
            iconClass={button.iconClass}
            route={`${base}/${button.route}`}
            name={button.name}
          />
        );
      })}
    </div>
  );
}
