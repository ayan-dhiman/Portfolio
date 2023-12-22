import "./Header.scss";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

function Header() {
  return (
    <div className='header'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro">
            <p>AYAN D.</p>
          </a>
        </div>
        {/* <div className="center">
            <a href="#hireme">
              <button className='header_button'>
                HIRE ME <WorkOutlineTwoToneIcon className="hireIcon" />
              </button>
            </a>
        </div> */}
        <div className="right">
          <MenuSharpIcon/>
        </div>
      </div>
    </div>
  );
}

export default Header;
