import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "semantic-ui-react";

const AllRemove = ({onAllRemove}) => {
    const center = {width:"80%",height:"50px", fontSize:"18px" }
    return (
        <addBtn>
            <Button type="button"
                variant="contained"
                color="google plus"
                disableElevation
                style={center}
                className={"center"}
                onClick={onAllRemove}
                >
                    All Remove
            </Button>
        </addBtn>
    );
};

export default AllRemove;