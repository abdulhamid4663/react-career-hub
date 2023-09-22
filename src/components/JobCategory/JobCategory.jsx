
import PropTypes from 'prop-types';

const JobCategory = ({category}) => {
    const {logo, category_name, availability} = category;
    
    return (
        <div className='bg-gradient-to-r from-[#7e8ffe0a] to-[#9873ff0a] rounded-lg p-10'>
            <div className='p-4 rounded-lg bg-gradient-to-r from-[#7e8ffe1c] to-[#9873ff1c] max-w-fit'>
                <img src={logo} alt="" />
            </div>
            <h1 className='text-xl font-extrabold text-[#474747] mt-8 mb-2'>{category_name}</h1>
            <p className='text-base font-medium text-[#A3A3A3]'>{availability}</p>
        </div>
    );
};

JobCategory.propTypes = {
    category: PropTypes.object
}

export default JobCategory;