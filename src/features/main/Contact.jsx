const Contact = () => {
  return (
    <div className="min-h-[90vh] max-w-[1280px] mx-auto flex flex-col justify-center items-center px-4 bg-contact-pattern">
      <div className="flex flex-col gap-6 px-4 py-6 rounded-md shadow-lg">
        <div className="flex flex-col gap-2">
          <h4 className="font-light text-teal-700 text-center text-xl">
            Contact us
          </h4>
          <h3 className="text-teal-700 text-3xl font-bold text-center ">
            {" "}
            Get <span className="text-orange-400">In Touch</span>
          </h3>
          <p className="text-sm font-normal text-teal-600">
            If you have any offer or question feel free to tell about it!
          </p>
        </div>
        <form className="max-w-[380px] w-full  py-10 px-4 rounded-md flex flex-col gap-4 bg-teal-700">
          <input
            type="tel"
            placeholder="phone number"
            className="w-full rounded-md py-2 px-4 outline-none caret-teal-700 text-teal-700 focus:outline-orange-400"
          />
          <input
            type="text"
            placeholder="full name"
            className="w-full rounded-md py-2 px-4 outline-none caret-teal-700 text-teal-700 focus:outline-orange-400"
          />
          <textarea
            placeholder="message"
            className="w-full rounded-md resize-none py-2 px-4 outline-none caret-teal-700 text-teal-700 focus:outline-orange-400"
          />
          <button className="bg-orange-400 text-white py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
