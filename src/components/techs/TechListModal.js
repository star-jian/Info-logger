import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TechItem from './TechItem';

const TechListModal = () => {
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false)


  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async ()=>{
      setLoading(true)
      const res = await fetch('/techs')
      const data = await res.json()
      setTechs(data)
      setLoading(false)
  }

  return (
    <div id='tech-list-modal' className='modal'>
        <div className="modal-content">
            <h4>Technician List</h4>
            <ul className="collection">
                {!loading && techs.map(tech=>(
                    <TechItem tech={tech} key={tech.id}/>
                ))}
            </ul>
        </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default TechListModal
