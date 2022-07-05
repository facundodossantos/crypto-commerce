/* eslint-disable jsx-a11y/anchor-is-valid */
const Links = ({ links }) => {
  return (
    <div>
      <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 bloc">
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {links.map((link) => (
            <li key={ link } className="text-gray-600 hover:text-blue-600">
              <a className="cursor-pointer">{ link }</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
