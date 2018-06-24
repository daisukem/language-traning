import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export class ChannelList extends React.Component<{},{}> {
    public render() {
        const channels = ['general', 'random'];
        return (
            <Menu inverted vertical fixed={'left'}>
                <Menu.Item>
                Channels
                <Menu.Menu>
                    {channels.map(channel => 
                      <Menu.Item key={channel} as={NavLink} to={{ pathname: `/channels/${channel}`}}>
                          {channel}
                      </Menu.Item>)
                    }
                </Menu.Menu>
              </Menu.Item>
            </Menu>
        );
    }
}
