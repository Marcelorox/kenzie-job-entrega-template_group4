import { styled } from "styled-components";

export const StyleContainerForm = styled.div`
  width: 100%;
  max-width: 1328px;
  min-height: 80vh;
  margin: auto;

  .form_container {
    padding-top: 60px;
    width: 100%;
    max-width: 480px;
    margin: auto;
    margin-bottom: 70px;
    padding: 10px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .link_register {
    margin-bottom: 70px;
    margin-left: 10px;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      img{
        width: 20px;
        height: 20px;
      }
    }
  }

  .return_button {
    color: var(--blue);
    font-weight: 700;
  }

  h1 {
    color: var(--blue);
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      border: 1px var(--blue) solid;
      height: 40px;
      border-radius: 50px;
      padding-left: 20px;
      margin-bottom: 10px;
    }
    input::placeholder {
      color: var(--size-placeholder);
    }

    .form_button {
      margin-top: 20px;
      display: flex;
      max-width: 480px;
      width: 100%;
      flex-direction: row;
      justify-content: flex-end;

      .submit_register {
        height: 40px;
        width: 50%;
      }
    }
  }
`;
