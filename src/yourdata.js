export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Matt P.',
        headerTagline: [//Line 1 For Header
                        'Hey! im Matt Prieto',
                        //Line 2 For Header
                        'WebDev/Designer ',
                        //Line 3 For Header
                        'Im from Florida!'
    ],
        //Contact Email
        contactEmail:'Sadesanol@gmail.com',
        // Add Your About Text Here
        abouttext: "I'm Matt and for a long time I wondered and stressed fairly about what I wanted to do with the rest of my life, That is until i found the UCF coding bootcamp! Little did I know that I would fall in love so easily with the process of coding and the joy of building something from scratch with my ideas in mind!",
        aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,
            title:'Strain vein (1st iteration)', //Project Title - Add Your Project Title Here
             service:'Website Development', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             //Project URL - Add Your Project Url Here
             url:'https://github.com/aoacows/Project-1-Mattp-MattV-Noel-Kyle'
            },
            {
                id: 2,
                title: 'The Lounge (1st iteration)',
                service: 'Website Development',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://github.com/leeumt8/Project-2-Lounge'
            },
            { 
                id: 3,
                title: 'Strain vein (React/2nd iteration)',
                service: 'WIP',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            {
                id: 4,
                title: 'Project Four',
                service: 'Future Development',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/aoacows'},
            {
                name: 'Twitter',
                url: 'https://twitter.com/mattprietoe'
            },
            {
                name: 'Youtube',
                url: 'https://www.youtube.com/channel/UCkAcyI-E9LQcz62PyGo4RaA'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/prietomatthew/'
            }

        ]
    }