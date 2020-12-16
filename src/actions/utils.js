import uuid from 'react-uuid';

export const IsEditButtonClicked = () => {

    const data = uuid();

    return(
        {
            type: "IS_EDIT_BUTTON_CLICKED",
            payload: data,
        }
    );
}