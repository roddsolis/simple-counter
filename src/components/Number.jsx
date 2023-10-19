import PropTypes from 'prop-types';

const Number = ({numero, numColor}) => {

  return (
      <>
       <div className="numberContainer" style={{color:numColor}}> {numero} </div> 
      </>
        
  )
}

Number.defaultProps = {
    numero: 0,
    numColor: '#2c2c2c',
}

Number.propTypes = {
    objNum: PropTypes.number,
    objColor: PropTypes.string,
}

export default Number