
export const CardSteps = [
    {
        stepId: 0,
        stepContent: [
            {
                id: "outlined-basic",
                required: true,
                label_name: 'Username',
                rpcValue: "username",
                defaultValue: '',
                type: 'text',
                errorStatus: false

            },
            {
                id: "outlined-basic",
                required: true,
                label_name: 'Password',
                rpcValue: "password",
                defaultValue: '',
                type: 'password',
                errorStatus: false
            },
        ],
        cardStyle: {
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            gap: '15px',
            alignItems: 'center',
            margin: '15px 0px'
        }
    },
    {
        stepId: 1,
        stepContent: [
            {
                id: "outlined-basic",
                required: false,
                label_name: 'First Name',
                rpcValue: "first_name",
                defaultValue: '',
                type: 'text',
                div_style: {
                    flex: .5
                }

            },
            {
                id: "outlined-basic",
                required: false,
                label_name: 'Last Name',
                rpcValue: "last_name",
                defaultValue: '',
                type: 'text',
                div_style: {
                    flex: .5
                }

            },
            {
                id: "outlined-basic",
                required: true,
                label_name: 'Email',
                rpcValue: "email",
                defaultValue: '',
                type: 'text',
                div_style: {
                    flex: .5
                }

            },
            {
                id: "outlined-basic",
                required: false,
                label_name: 'Date of Birth',
                rpcValue: "DOB",
                defaultValue: '',
                type: 'date',
                shrink: true,
                div_style: {
                    flex: .5
                }

            }],
        cardStyle: {
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: '15px',
            margin: '15px 0px',
            alignItems: 'center',
        }
    },
    {
        stepId: 2,
        stepContent: [
            {
                id: "outlined-basic",
                required: false,
                label_name: 'Image',
                rpcValue: "image",
                defaultValue: '',
                type: 'text'

            },
            {
                id: "outlined-basic",
                required: false,
                label_name: 'Bio',
                rpcValue: "bio",
                defaultValue: '',
                type: 'text'
            },
        ],
        cardStyle: {
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            gap: '15px',
            alignItems: 'center',
            margin: '15px 0px'

        }
    },
]