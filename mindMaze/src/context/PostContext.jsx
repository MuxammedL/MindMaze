import { createContext, useState, useEffect } from "react";



export const PostContext = createContext();


export const PostProvider = ({children}) => {

    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setSeconds(prevSeconds => {
                const newSeconds = prevSeconds - 1;

                if (newSeconds < 0) {
                    clearInterval(timerInterval);
                    console.log('stopped');
                    return 0;
                }

                return newSeconds;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);




    return (
        <PostContext.Provider value={{seconds}}>
            {children}
        </PostContext.Provider>
    )



}
