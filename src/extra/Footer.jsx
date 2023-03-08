import React from 'react';

function Footer() {
    return (
        <footer className="flex w-full py-1 px-3 flex-nowrap items-center justify-between">
            <span className="font-bold text-xs text-gray-500">© Myoasis.tech 2022-{(new Date()).getFullYear()}</span>
            <div className="flex justify-between items-center gap-3">
                <a href="https://myoasis.tech/legal" target="_blank" className="open-link" rel="noreferrer">Privacy</a>
                <a href="https://myoasis.tech/legal/terms" target="_blank" className="open-link" rel="noreferrer">Terms</a>
            </div>
        </footer>
    );
};

export default Footer;