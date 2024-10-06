const Footer = () => {
  return (
    <div className="bg-teal-700 w-full">
      <div className="max-w-[1280px] flex flex-col md:flex-row  justify-between items-center text-sm text-slate-50 py-4 px-4 font-light mx-auto gap-2">
        <p className="md:w-1/2 w-full text-center md:text-start">
          &copy; Copyright {new Date().getFullYear()} Quizify || All rights
          reserved
        </p>
        <div className="flex justify-center md:justify-end items-center gap-2 md:w-1/2 w-full">
          <button>Privacy policy</button>
          <button>Terms of service</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
