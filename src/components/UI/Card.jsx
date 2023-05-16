const Card = (props) => {
    const cardClasses = `bg-white p-5 rounded-xl ${props.className}`;
  
    return (
      <div className={cardClasses}>
        {props.children}
      </div>
    );
  };
  
  export default Card;
  