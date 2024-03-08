"use client";

import { logout } from "../actions/user";

export default function LogoutButton() {
  return (
    <button
      onClick={() => logout()}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
    >
      Logout
    </button>
  );
}
