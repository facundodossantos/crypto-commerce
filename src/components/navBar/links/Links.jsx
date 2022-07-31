import { useNavigate } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Links = ({ links }) => {
  const navigate = useNavigate();
  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }
  return (
    <div>
      <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 bloc">
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {links.map((link) => (
            <li key={link} className="text-gray-600 hover:text-blue-600">
              <a className="text-violet-400 cursor-pointer">{link}</a>
            </li>
          ))}
          <select
            onChange={event => handleChange(event.target.value)}
            id="small"
            className="cursor-pointer block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="/">Show All</option>
            <option value="/category/lazy-lion">Lazy Lion</option>
            <option value="/category/bored-ape">Bored Ape</option>
            <option value="/category/mutant-ape">Mutant Ape</option>
            <option value="/category/crypto-casino">CryptoCasino</option>
          </select>
        </ul>
      </div>
    </div>
  );
};

export default Links;
