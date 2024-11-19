const WarningSVG = ({ color }) => {
  return (
    <svg
      className={`h-4 w-4 ${
        (color.success && "stroke-green-500") ||
        (color.error && "stroke-red-500") ||
        (color.normal && "stroke-primary-container")
      }`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="User Interface / Exclamation Mark">
        <path
          id="Vector"
          d="M10 13.3334C9.8352 13.3334 9.67408 13.3822 9.53704 13.4738C9.4 13.5654 9.29319 13.6955 9.23011 13.8478C9.16704 14.0001 9.15054 14.1676 9.18269 14.3293C9.21485 14.4909 9.29421 14.6394 9.41076 14.7559C9.5273 14.8725 9.67579 14.9519 9.83744 14.984C9.99909 15.0162 10.1666 14.9997 10.3189 14.9366C10.4712 14.8735 10.6013 14.7667 10.6929 14.6297C10.7845 14.4926 10.8333 14.3315 10.8333 14.1667C10.8333 13.9457 10.7455 13.7337 10.5893 13.5774C10.433 13.4212 10.221 13.3334 10 13.3334ZM18.8917 14.5584L12.1833 2.89169C11.9665 2.50295 11.6498 2.17915 11.266 1.95375C10.8822 1.72834 10.4451 1.6095 10 1.6095C9.55489 1.6095 9.11785 1.72834 8.73402 1.95375C8.35019 2.17915 8.03351 2.50295 7.81668 2.89169L1.15001 14.5584C0.925677 14.9367 0.805132 15.3675 0.800551 15.8074C0.795969 16.2472 0.907512 16.6805 1.12392 17.0634C1.34032 17.4463 1.65393 17.7654 2.03308 17.9884C2.41223 18.2114 2.8435 18.3304 3.28335 18.3334H16.7167C17.1601 18.3377 17.5966 18.2241 17.9816 18.0041C18.3666 17.7841 18.6861 17.4657 18.9075 17.0815C19.1289 16.6973 19.244 16.2612 19.2413 15.8178C19.2385 15.3744 19.1178 14.9397 18.8917 14.5584ZM17.45 16.225C17.377 16.355 17.2704 16.463 17.1414 16.5377C17.0124 16.6125 16.8658 16.6513 16.7167 16.65H3.28335C3.13427 16.6513 2.9876 16.6125 2.85861 16.5377C2.72963 16.463 2.62306 16.355 2.55001 16.225C2.47687 16.0983 2.43837 15.9546 2.43837 15.8084C2.43837 15.6621 2.47687 15.5184 2.55001 15.3917L9.21668 3.72502C9.28661 3.58852 9.39286 3.47397 9.52372 3.39398C9.65458 3.31398 9.80497 3.27166 9.95835 3.27166C10.1117 3.27166 10.2621 3.31398 10.393 3.39398C10.5238 3.47397 10.6301 3.58852 10.7 3.72502L17.4083 15.3917C17.491 15.5166 17.5385 15.6614 17.5459 15.811C17.5532 15.9605 17.5201 16.1093 17.45 16.2417V16.225ZM10 6.66669C9.779 6.66669 9.56704 6.75449 9.41076 6.91077C9.25448 7.06705 9.16668 7.27901 9.16668 7.50002V10.8334C9.16668 11.0544 9.25448 11.2663 9.41076 11.4226C9.56704 11.5789 9.779 11.6667 10 11.6667C10.221 11.6667 10.433 11.5789 10.5893 11.4226C10.7455 11.2663 10.8333 11.0544 10.8333 10.8334V7.50002C10.8333 7.27901 10.7455 7.06705 10.5893 6.91077C10.433 6.75449 10.221 6.66669 10 6.66669Z"
          fill="#3D4D66"
        />
      </g>
    </svg>
  );
};

export function Textarea() {
  const color = {
    success: 0,
    error: 1,
    normal: 0,
  };
  const status =
    (color.success && "text-green-500") ||
    (color.error && "text-red-500") ||
    (color.normal && "text-primary-onContainer");

  return (
    <div className="relative">
      <textarea
        // {...register2("about", {
        //   required: true,
        //   pattern: /^[\u0600-\u06FF\s0-9]+$/,
        // })}
        defaultValue={""}
        rows={5}
        className={
          (color.error &&
            "peer h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-3 pb-[3px] text-sm outline-0 transition-all placeholder:text-transparent placeholder-shown:border-t-red-300 focus:border-t-transparent focus:pb-[3px] focus:placeholder:px-1 focus:placeholder:text-xs focus:placeholder:text-[#808D97]") ||
          (color.normal &&
            "text-primary-main peer h-full w-full rounded-[7px] border border-[#4D5F6D] border-t-transparent bg-transparent px-3 py-3 pb-[3px] text-sm outline-0 transition-all placeholder:text-transparent placeholder-shown:border-t-[#4D5F6D] focus:border-t-transparent focus:pb-[3px] focus:placeholder:px-1 focus:placeholder:text-xs focus:placeholder:text-[#808D97]") ||
          (color.success &&
            "peer h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-3 pb-[3px] text-sm outline-0 transition-all placeholder:text-transparent placeholder-shown:border-t-green-500 focus:border-t-transparent focus:pb-[3px] focus:placeholder:px-1 focus:placeholder:text-xs focus:placeholder:text-[#808D97]")
        }
        placeholder="پاسخ را اینجا بنویسید..."
      ></textarea>
      <label
        className={
          (color.error &&
            "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.6px] left-0 flex h-full w-full select-none !overflow-visible whitespace-nowrap text-[11px] leading-tight text-red-500 transition-all before:pointer-events-none before:ml-[2px] before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-r before:border-t before:border-red-500 before:transition-all after:pointer-events-none after:mr-[2px] after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-l after:border-t after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.2] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-[11.2px] peer-focus:before:!border-red-500 peer-focus:after:border-t peer-focus:after:!border-red-500") ||
          (color.normal &&
            "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.6px] left-0 flex h-full w-full select-none !overflow-visible whitespace-nowrap text-[11px] leading-tight text-[#808D97] transition-all before:pointer-events-none before:ml-[2px] before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-r before:border-t before:border-[#4D5F6D] before:transition-all after:pointer-events-none after:mr-[2px] after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-l after:border-t after:border-[#4D5F6D] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.2] peer-placeholder-shown:text-[#808D97] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-[11.2px] peer-focus:before:!border-[#4D5F6D] peer-focus:after:border-t peer-focus:after:!border-[#4D5F6D]") ||
          (color.success &&
            "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.6px] left-0 flex h-full w-full select-none !overflow-visible whitespace-nowrap text-[11px] leading-tight text-green-500 transition-all before:pointer-events-none before:ml-[2px] before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-r before:border-t before:border-[#4D5F6D] before:transition-all after:pointer-events-none after:mr-[2px] after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-l after:border-t after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.2] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-[11.2px] peer-focus:before:!border-green-500 peer-focus:after:border-t peer-focus:after:!border-green-500")
        }
      >
        توضیحات
      </label>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2 px-2">
          <WarningSVG color={color} />
          <p className={`font-yekan text-xs ${status}`}>متن کمکی</p>
        </div>
        <p className={`text-primary-onContainer mt-1 px-2 text-xs`}>0/50</p>
      </div>
    </div>
  );
}
