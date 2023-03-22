const schema = {
  title: "Add Request Form",
  name: "addRequestForm",
  fields: [
    {
      title: "Request Name",
      name: "requestName",
      type: "string",
    },
    {
      title: "Description",
      name: "requestDescription",
      type: "text",
    },
    {
      title: "Due Date",
      name: "requestDueDate",
      type: "string",
    },
    {
      title: 'Category',
      name: 'requestCategory',
      type: 'multiple',
      options: [
        { title: 'Other', value: 'other' },
        { title: 'Car Request', value: 'car' },
        { title: 'Request for Money', value: 'money' },
        { title: 'Chore Request', value: 'chore' },
      ]
    },
    {
      title: "Is this Urgent?",
      name: "requestUrgent",
      type: "boolean",
    },
    // {
    //   title: "Due Date",
    //   name: "requestDueDate",
    //   type: "date",
    // },
  ],
};

export default schema;
