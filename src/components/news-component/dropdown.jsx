import "../modules/news-box.css";

const Dropdown = () => {
    return ( 
        <div className="dropdown">
            <div className="dd-option">
                <span>News Category</span>
                <select name="BBC" id="1"></select>
            </div>
            <div className="dd-option">
                <span>Language</span>
                <select name="BBC" id="1"></select>
            </div>
            <div className="dd-option">
                <span>Country</span>
                <select name="BBC" id="1"></select>
            </div>
        </div>
     );
}
 
export default Dropdown;