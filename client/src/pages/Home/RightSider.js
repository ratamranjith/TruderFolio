import React from "react";

function RightSider() {
  return (
    <div className="fixed right-5 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <i class="ri-facebook-circle-fill text-gray-600 text-4xl"></i>
          <i class="ri-mail-fill text-gray-600 text-4xl"></i>
          <i class="ri-instagram-line text-gray-600 text-4xl"></i>
          <i class="ri-linkedin-box-fill text-gray-600 text-4xl"></i>
          <i class="ri-github-fill text-gray-600 text-4xl"></i>
        </div>
        <div className="w-[2px] h-52 bg-teal-600 sm:hidden"></div>
      </div>
    </div>
  );
}

export default RightSider;
