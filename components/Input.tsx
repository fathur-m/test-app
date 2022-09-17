import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface Props {
  name: string;
  type: string;
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const Input = ({ type, value, name, onChange, label }: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [focus, setFocus] = useState<any>(false);

  if (type === "password") {
    return (
      <label className="relative w-full rounded-lg bg-ctm-white">
        <span
          className={`absolute top-0 left-0 pl-4 pt-3 text-gray-400 transition duration-200 ${
            focus && "-translate-y-[9px] text-sm"
          } ${focus ?? "hidden"}`}
        >
          {label}
        </span>
        <input
          name={name}
          value={value}
          type={showPass ? "text" : "password"}
          className={`relative w-full bg-transparent px-4 py-3 pr-10 text-black outline-none transition duration-200 ${
            focus && "translate-y-[8px]"
          }`}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            if (value !== "") {
              setFocus(null);
            } else {
              setFocus(false);
            }
          }}
        />
        <span
          onClick={() => setShowPass(!showPass)}
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
        >
          {showPass ? (
            <EyeSlashIcon className="h-6 w-6" />
          ) : (
            <EyeIcon className="h-6 w-6" />
          )}
        </span>
      </label>
    );
  }

  return (
    <label className="relative w-full rounded-lg bg-ctm-white">
      <span
        className={`absolute top-0 left-0 pl-4 pt-3 text-gray-400 transition duration-200 ${
          focus && "-translate-y-[9px] text-sm"
        } ${focus ?? "hidden"}`}
      >
        {label}
      </span>
      <input
        name={name}
        value={value}
        type={type}
        className={`w-full bg-transparent px-4 py-3 text-black outline-none transition duration-200 ${
          focus && "translate-y-[8px]"
        }`}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          if (value !== "") {
            setFocus(null);
          } else {
            setFocus(false);
          }
        }}
      />
    </label>
  );
};

export default Input;
