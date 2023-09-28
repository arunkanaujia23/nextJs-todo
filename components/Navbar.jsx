import React from "react";
import ColorSchemaToggle from "./ColorSchemaToggle";

const Navbar = () => {
  return (
    <nav className="navbar px-14 bg-zinc-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        {/* <ColorSchemaToggle/> */}
      </div>
    </nav>
  );
};

export default Navbar;
