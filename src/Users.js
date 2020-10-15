import * as React from "react";
import { List, Datagrid, TextField, TextInput, Create, DateInput, SimpleForm, Show, SimpleShowLayout, DateField } from 'react-admin';

import { ShowButton } from 'react-admin';


export const UserList = (props) => (
    <List {...props} sort={{}} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="created_at" />
            <TextField source="updated_at" />
            <ShowButton />
        </Datagrid>
    </List >
);


export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <DateInput label="Created at" source="created_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="username" />
            <DateField label="Created at" source="created_at" />
        </SimpleShowLayout>
    </Show>
);
