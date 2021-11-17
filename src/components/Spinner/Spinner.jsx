import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import SpinnerStyled from './Spinner.styled';

const Spinner = () => {
    return (
        <SpinnerStyled>
            <Loader
                type="Circles"
                color="#ff6b08"
                height={50}
                width={50}
            />
        </SpinnerStyled>
    );
};

export default Spinner;