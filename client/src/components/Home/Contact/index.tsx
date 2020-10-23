// #region Global Imports
import React from "react";
import { Section } from "../../Loose/Section";
import { Title } from "../../Loose/Title";
// #endregion Global Imports

// #region Local Imports
import { IContact } from "./Contact";
// #endregion Local Imports

export const Contact: React.FC<IContact.IProps> = (_props) => {
    return (
        <>
            <Section id="contacts" backgroundColor="#fff">
                <Title text="Contacts" color="#000"></Title>
            </Section>
        </>
    );
};
