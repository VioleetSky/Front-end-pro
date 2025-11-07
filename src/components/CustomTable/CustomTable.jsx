import {Table} from "react-bootstrap";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

const CustomTable = ({headers, content, ...restProps}) => {
    const buildHeaders = () => {
        const th = headers.map((header) => {
            return <th key={uuidv4()}>{header}</th>
        })

        return (
            <thead>
                <tr>
                    {th}
                </tr>
            </thead>
        )
    }
    const buildBody = () => {
        const tr = content.map((row) => {
            return <tr key={uuidv4()}>
                {row.map((cell) => {
                    return <td key={uuidv4()}>{cell}</td>
                })}
            </tr>
        })


        return (
            <tbody>
                {tr}
            </tbody>
        )
    }
    return (
        <Table {...restProps}>
            {buildHeaders()}
            {buildBody()}
        </Table>
    );
};

CustomTable.propTypes  = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.arrayOf(PropTypes.arrayOf( PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]))),
}

export default CustomTable;