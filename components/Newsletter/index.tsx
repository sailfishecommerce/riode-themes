import { Icon } from "@iconify/react";

export default function index() {
  return (
    <div className="flex items-center">
      <div className="text flex flex-col mx-2">
        <h3 className="text-white font-bold">Subscribe to our Newsletter</h3>
        <p className="text-gray-500">
          Get all the latest information, Sales and Offers.
        </p>
      </div>
      <div className="subscribe flex items-center mx-2">
        <input
          placeholder="Email address here..."
          className="rounded-l-md bg-gray-800 p-6 h-12"
        />
        <button className="text-white bg-blue-500 rounded-r-md flex items-center justify-between px-4 hover:bg-blue-600 h-12 font-bold">
          SUBSCRIBE <Icon icon="akar-icons:arrow-right" />
        </button>
      </div>
    </div>
  );
}
