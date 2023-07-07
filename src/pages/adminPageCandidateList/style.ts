import styled from "styled-components";


export const StyledContainerAdminCandidateList = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1328px;
    height: 75vh;

    h1 {
        font-family: var(--Font-primary);
        font-weight: 700;
        font-size: 4rem;
        line-height: 4.9063rem;
        color: var(--blue);
    }

    .titleCandidatureDetails {
        font-family: var(--Font-primary);
        font-size: 18px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0em;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1.5rem;
        margin-top: 3.5em;
    }

    .candidateEmail, h2  {
        font-family: var(--Font-primary);
        font-size: 21px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
    }

    li {
        display: flex;
        flex-direction: column;
        height: max-content;
        min-height: 7.375rem;
        width: 100%;
        background-color: var(--lightblue);
        padding: 2rem;
    }

    .candidateNameDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .descriptionCandidateDiv {
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
        gap: 1.5rem;
    }

    
`