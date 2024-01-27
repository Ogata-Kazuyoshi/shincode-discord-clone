import './Sidebar.scss';
import pic1 from '../../assets/logo192.png';
import discordPic from '../../assets/discordIcon.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth } from '../../firebase';
import { useAppSelector } from '../../app/hooks';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src={discordPic} alt="#" />
        </div>
        <div className="serverIcon">
          <img src={pic1} alt="#" />
        </div>
        <div className="serverIcon">
          <img src={pic1} alt="#" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>

          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミング</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
          </div>
        </div>
        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img
              src={user?.photo}
              alt=""
              onClick={() => {
                auth.signOut();
              }}
            />
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{(user?.uid as string).slice(0, 5)}</span>
            </div>
          </div>
          <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
