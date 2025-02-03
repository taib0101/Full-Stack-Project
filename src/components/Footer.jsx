export const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full text-white py-8 h-[50dvh]">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-24">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">About Me</h3>
            <p className="text-sm">
              I write clean and efficient code by minimizing time, space, and
              complexity. I turn logical ideas into clear, effective solutions.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">
              Kazi-Para, Mirpur, Dhaka
              <br />
              City, State 1216
              <br />
              Email: murtazataib01@gmail.com
              <br />
              Phone: +8801969330120
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {`Taib's Company. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};
