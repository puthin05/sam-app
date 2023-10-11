import * as React from 'react';
import "./s.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footerbar() {
    return(<div className="ll">
    <div className="a">
    <p align="center" className='A'>Login</p>
    <p id="b" action="i.jpg"></p>
        <label className='A'>User Name</label>
        <input className='box' type="text" placeholder='Enter User Name:-' />
        <label className='A'>Password</label>
        <input className='box' type="text" placeholder='Enter Password:-'/>
       
      <p></p>
      <a href='sam-app/src/puthin.html'><button  type="submit" className='box'><i className="A">Login</i></button></a>
     
    </div>
    </div>
    )
     const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>

}

