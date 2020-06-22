import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.postimg.cc/nV3SNvPg/hats.jpg',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.postimg.cc/fR9H31RQ/jackets.jpg',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/tQRP6HV/sneakers.jpg',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.postimg.cc/7Yp9yXMs/womens.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.postimg.cc/3NN13cc6/mens.jpg',
                    size: 'large',
                    id: 5
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
