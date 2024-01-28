import React from 'react';
import './SidebarChannel.scss';
import { Channel } from '../../interface';
import { useAppDispatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';

interface SidebarProps {
  channel: Channel;
}

const SidebarChannel = (props: SidebarProps) => {
  const { channel } = props;

  const dispath = useAppDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispath(
          setChannelInfo({
            channelId: channel.id,
            channelname: channel.channel.channelname,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelname}
      </h4>
    </div>
  );
};

export default SidebarChannel;
