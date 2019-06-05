import React from "react";

export const i18nContext = React.createContext({});

export default (WrappedComponent) =>{
    return(props)=>{
        return (
        <i18nContext.Consumer>
            {
                (i18n) => <WrappedComponent {...props} i18n={i18n} />
            }
        </i18nContext.Consumer>
        )
    }
}