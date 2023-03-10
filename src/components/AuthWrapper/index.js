import React from "react";

const AuthWrapper = ({ headline, children }) => {
    return (
        <div className="authWrapper">
            <div className="wrap">
                {headline && <h2>{headline}</h2>}

                <div className="children">
                    {children && children}

                </div>
            </div>

        </div>
    );
}
export default AuthWrapper;  