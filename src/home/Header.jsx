import { ContextMenuTrigger, ContextMenu, ContextMenuItem } from 'myoasis-contextmenu';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../app/Context';
import { logout } from '../firebase/user';

function Header() {

    const { user } = useContext(Context);
    return (
        <header className="open-boxes justify-between">
            <div className="inline-flex flex-nowrap items-center gap-3">
                <img src="/icons/logo192.png" className="w-10" alt="" />
                <span className="font-semibold text-2xl text-gray-500">Scanner</span>
            </div>
            <div className="inline-flex flex-nowrap z-10 items-center gap-3">
                {user && <>
                    <ContextMenuTrigger exact={false} menu="user-options" trigger="click" className="w-10 h-10 hover:shadow-lg rounded-full hover:cursor-pointer">
                        <img src={user.photoURL} alt="" />
                    </ContextMenuTrigger>
                    <ContextMenu menu="user-options" animation="spring" className="contextmenu">
                        <ContextMenuItem className="contextmenuitem"><i className="fas fa-qrcode fa-fw"></i> My QR codes</ContextMenuItem>
                        <ContextMenuItem className="contextmenuitem" onClick={logout}><i className="fas fa-power-off fa-fw"></i> Logout</ContextMenuItem>
                    </ContextMenu>
                </>}
                {!user && <Link to="/accounts" className="open-btn-teal">Signin</Link>}
            </div>
        </header>
    );
};

export default Header;