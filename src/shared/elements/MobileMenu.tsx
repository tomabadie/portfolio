const MobileMenu = () => {
  return (
    <div className="flex items-center justify-center md:hidden">
      <button type="button" className="group relative cursor-pointer">
        <div className="border-primary bg-gobal-secondary bg-global-secondary relative flex h-[40px] w-[40px] transform items-center justify-center overflow-hidden rounded-full border shadow-md transition-all duration-200 group-focus:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-light)] dark:group-focus:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)] dark:hover:shadow-[0_0_12px_4px_var(--color-btn-primary-hover-dark)]">
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
            <div className="bg-text-primary-light dark:bg-text-primary-dark h-[2px] w-7 origin-left transform transition-all delay-100 duration-300 group-focus:translate-y-6" />
            <div className="bg-text-primary-light dark:bg-text-primary-dark h-[2px] w-7 transform rounded transition-all delay-75 duration-300 group-focus:translate-y-6" />
            <div className="bg-text-primary-light dark:bg-text-primary-dark h-[2px] w-7 origin-left transform transition-all duration-300 group-focus:translate-y-6" />

            <div className="absolute top-5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
              <div className="bg-text-primary-light dark:bg-text-primary-dark absolute h-[2px] w-5 rotate-0 transform transition-all delay-300 duration-500 group-focus:rotate-45" />
              <div className="bg-text-primary-light dark:bg-text-primary-dark absolute h-[2px] w-5 -rotate-0 transform transition-all delay-300 duration-500 group-focus:-rotate-45" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MobileMenu;
