import classNames from 'classnames';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Context from '../app/Context';
import { setTitle } from '../app/Function';
import { getQrCodeObject } from '../app/Qr';
import Footer from '../extra/Footer';
import Header from './Header';

function Index() {
    setTitle("");

    const { user } = useContext(Context);

    const output = useRef();

    const [qrCode, setQrCode] = useState(null);
    const [inputValue, setInputValue] = useState("https://myoasis.tech");

    useEffect(() => {
        inputValue.length <= 512 && getQrCodeObject(inputValue, (code) => {
            setQrCode(code);
        });
    }, [inputValue]);

    useEffect(() => {
        output.current.innerHTML = "";
        qrCode?.append && qrCode.append(output.current);
    }, [qrCode]);
    return (
        <div className="open-box">
            <Header />
            <section className="w-full flex gap-3 flex-1">
                {user && <aside className="open-boxes max-w-xs flex-2">
                    <div className="font-semibold text-xl text-gray-500">Customize</div>

                </aside>}
                <main className="w-full flex flex-col gap-3">
                    <div className="open-boxes relative pt-5">
                        <textarea value={inputValue} onChange={({ target }) => setInputValue(target.value)} className="w-full outline-none resize-y max-h-60 min-h-[60px] h-32" placeholder="Input content here..."></textarea>
                        <span className={classNames(
                            "absolute top-0 right-3 text-xs font-medium",
                            {
                                "text-green-700": inputValue.length <= 512,
                                "text-red-700": inputValue.length > 512,
                            }
                        )}>{inputValue.length}/512</span>
                    </div>
                    <div className="w-full flex gap-3 flex-1 relative">
                        <div className="open-boxes flex-1 items-center justify-center flex-nowrap relative [&>*]:max-w-[100%] [&>*]:max-h-[100%]" ref={output}>
                        </div>
                        <div className="open-boxes flex-1"></div>
                    </div>
                </main>
            </section>
            <Footer />
        </div>
    );
};

export default Index;