import React from "react";

const Header = () => {
    return (
        <div className="bg-#17181f pb-10">
            <header className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">TaskCreator</h1>
                <nav>
                    <a href="https://vk.com" className="ml-4">Home</a>

                </nav>
            </header>
        </div>
    );
};

export default Header;
