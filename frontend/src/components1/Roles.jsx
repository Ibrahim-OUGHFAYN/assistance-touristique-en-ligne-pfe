import React from "react";

const Roles = ({ value, onChange }) => {
  return (
    <div>
      <select
        id="role"
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 shadow-xs  rounded-md border hover:border-red-500"
      >
        <option value="voyageur">Voyageur</option>
        <option value="guide">Guide</option>
      </select>
    </div>
  );
};

export default Roles;
