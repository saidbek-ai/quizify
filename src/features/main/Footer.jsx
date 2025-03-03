const Footer = () => {
  return (
    <div className="bg-teal-700 w-full">
      <div className="max-w-[1280px] text-sm text-slate-50 py-4 px-4 font-light mx-auto gap-2 flex justify-center items-center">
        <p className="">
          &copy; Copyright {new Date().getFullYear()} Quizify || All rights
          reserved
        </p>
        {/* <div className="flex justify-center md:justify-end items-center gap-2 md:w-1/2 w-full">
          <button>Privacy policy</button>
          <button>Terms of service</button>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
