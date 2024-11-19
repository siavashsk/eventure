interface IRadio {
  name?: string;
  label?: string;
}

export function RadioButton({ name, label }: IRadio) {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-3"
        htmlFor="html"
      >
        <input
          name={name}
          type="radio"
          className="before:content[''] border-blue-gray-200 text-primary-main before:bg-blue-gray-500 checked:border-primary-main checked:before:bg-primary-main peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10"
          id="html"
        />
        <span className="text-primary-main pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label
        className="text-primary-onContainer2 mt-px cursor-pointer select-none font-light"
        htmlFor="html"
      >
        {label}
      </label>
    </div>
  );
}
