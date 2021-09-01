import styled from "styled-components";

export const Spinner = styled.div`
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--darkGrey);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.1s linear infinite;
    /* margin: 0px auto; */

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }

        100%{
            transform: rotate(360deg);
        }
    }
    
`;