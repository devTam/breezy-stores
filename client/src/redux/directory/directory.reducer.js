const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.postimg.cc/nV3SNvPg/hats.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.postimg.cc/fR9H31RQ/jackets.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/tQRP6HV/sneakers.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.postimg.cc/RhDKSVr5/womens.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.postimg.cc/3NN13cc6/mens.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default directoryReducer