import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    SimpleList,
    TopToolbar,
    Show,
    SimpleShowLayout,
    RichTextField,
    DateField,
} from 'react-admin';





const PostShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <EditButton basePath={basePath} record={data} />
        {/* Add your custom actions */}
        <Button color="primary">Custom Action</Button>
    </TopToolbar>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


export const PostShow = (props) => (
    <Show actions={<PostShowActions />} title={<PostTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);



export const PostList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} >
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );

}
    
    // <List {...props}>
    // <SimpleList
    //     primaryText={record => record.title}
    //     secondaryText={record => `${record.views} views`}
    //     tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
    //  />
    // </List>
    // <List filters={postFilters} {...props}>
    //       <SimpleList
    //         primaryText={record => record.title}
    //         secondaryText={record => `${record.views} views`}
    //         tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
    //     />
    //     <Datagrid>
    //     <TextField source="id" />
    //         <ReferenceField source="userId" reference="users">
    //             {/* <TextField source="id" /> */}
    //             <TextField source="name" />
    //         </ReferenceField>
    //         <TextField source="id" />
    //         <TextField source="title" />
    //         <TextField source="body" />
    //         <EditButton />
    //     </Datagrid>
    // </List>



export const PostEdit = props => (
    // <Edit {...props}>
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                {/* <SelectInput optionText="id" /> */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            {/* <TextInput source="id" /> */}
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />

        </SimpleForm>

    </Create>
)