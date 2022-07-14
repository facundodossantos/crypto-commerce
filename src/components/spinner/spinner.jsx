import './spinner.scss';

const Spinner = () => {
  return (
    <div className="loader">
      <div className="carriage">
        <div className="box"></div>
        <div className="box second"></div>
        <div className="box spacer"></div>
        <div className="box spacer"></div>
        <div className="box third"></div>
        <div className="box fourth white"></div>
      </div>
    </div>
  );
};

export default Spinner;
