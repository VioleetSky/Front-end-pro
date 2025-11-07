import PropTypes from "prop-types";

const PageHeader = ({title, LeftControl}) => {
    return (
        <div className="page-header d-flex justify-content-between align-items-center">
            <h1>{title}</h1>

            {LeftControl && <div>
                <LeftControl />
            </div>}

        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    LeftControl: PropTypes.func,
};

export default PageHeader;