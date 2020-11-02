// #region Global Imports
import {
    Button,
    Container,
    TextareaAutosize,
    TextField,
    Typography,
} from "@material-ui/core";
import React from "react";
import { Section } from "../../Loose/Section";
import { Title } from "../../Loose/Title";
// #endregion Global Imports

// #region Local Imports
import { IContact } from "./Contact";
import styles from "./Contact.module.scss";
// #endregion Local Imports

export const Contact: React.FC<IContact.IProps> = (_props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

    return (
        <>
            <Section id="contacts" backgroundColor="#fff">
                <Title text="Contacts" color="#000"></Title>
                <Container component="main" maxWidth="xs">
                    <div className={styles.paper}>
                        <form
                            className={styles.form}
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <Typography variant="h5">
                                Send me a message
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name  "
                                autoFocus
                            ></TextField>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                name="message"
                                autoComplete="message"
                                autoFocus
                                multiline={true}
                                rowsMax={4}
                            ></TextField>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={styles.submit}
                            >
                                Send
                            </Button>
                        </form>
                    </div>
                </Container>
            </Section>
        </>
    );
};
