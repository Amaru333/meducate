import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

function SettingsPage() {
  return (
    <div>
      <p className="text-2xl font-semibold mb-4">Settings</p>
      <div className="p-8 bg-white shadow-md rounded-2xl flex flex-col gap-y-4">
        <div className="flex text-sm items-center">
          <p className="w-40 font-medium">Name</p>
          <input value="Full Name" className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md outline-none border border-gray-100 w-96" />
        </div>
        <div className="flex text-sm items-center">
          <p className="w-40 font-medium">Email</p>
          <input value="username@email.com" className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md outline-none border border-gray-100 w-96" />
        </div>
        <div className="flex text-sm items-center">
          <p className="w-40 font-medium">Phone Number</p>
          <input value="+17010000000" className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md outline-none border border-gray-100 w-96" />
        </div>
        <button className="bg-primary px-12 py-2 text-white rounded-md w-fit text-xs mt-6 hover:opacity-90 active:scale-95 transition-all">Save</button>
      </div>
      <p className="text-2xl font-semibold mb-4 mt-8">Preferences</p>
      <div className="p-8 bg-white shadow-md rounded-2xl flex flex-col gap-y-4">
        <div className="flex text-sm items-center">
          <p className="w-40 font-medium">Weekly Goal</p>
          <div className="flex items-center gap-x-2">
            <input value={200} inputMode="numeric" className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md outline-none border border-gray-100" />
            <p>mins</p>
          </div>
        </div>
        <div className="flex text-sm items-center my-2">
          <p className="w-40 font-medium">Emails</p>
          <div className="flex items-center space-x-2">
            <Checkbox defaultChecked id="emails" />
            <label htmlFor="emails" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I would like to receive communications and updates via email.
            </label>
          </div>
        </div>
        <div className="flex text-sm items-center">
          <p className="w-40 font-medium">Promotions</p>
          <div className="flex items-center space-x-2">
            <Checkbox defaultChecked id="emails" />
            <label htmlFor="emails" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I would like to receive promotions via email.
            </label>
          </div>
        </div>
        <button className="bg-primary px-12 py-2 text-white rounded-md w-fit text-xs mt-6 hover:opacity-90 active:scale-95 transition-all">Save</button>
      </div>
    </div>
  );
}

export default SettingsPage;
