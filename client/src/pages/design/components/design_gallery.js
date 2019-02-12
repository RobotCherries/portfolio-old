import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';


class DesignGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images
        };
    }

    render() {
        return (
            <div className='design-gallery container'>
                <Gallery
                    images={this.state.images}
                    enableImageSelection={false}
                    enableLightbox={true}
                    lightboxWidth={1700}
                    rowHeight={500}
                    margin={5}
                />
            </div>
        );
    }
}

DesignGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

DesignGallery.defaultProps = {
    images: [
        {
            src: 'https://i.imgur.com/FJXAdg8.png',
            thumbnail: 'https://i.imgur.com/FJXAdg8.png',
            thumbnailWidth: 700,
            thumbnailHeight: 500,
            caption: 'Big Stone Lodge - logo design',
        },
        {
            src: 'https://i.imgur.com/NSTULKN.png',
            thumbnail: 'https://i.imgur.com/NSTULKN.png',
            thumbnailWidth: 881,
            thumbnailHeight: 500,
            caption: 'Big Stone Lodge - logo design | black bkg',
        },
        {
            src: 'https://i.imgur.com/FJlg5fR.png',
            thumbnail: 'https://i.imgur.com/FJlg5fR.png',
            thumbnailWidth: 881,
            thumbnailHeight: 500,
            caption: 'Big Stone Lodge - logo design | white bkg',
        },
        {
            src: 'https://i.imgur.com/R4LYZlZ.png',
            thumbnail: 'https://i.imgur.com/R4LYZlZ.png',
            thumbnailWidth: 766.66666666667,
            thumbnailHeight: 500,
            caption: 'PharmaNow - logo design concept 1/2',
        },
        {
            src: 'https://i.imgur.com/vDdPAFe.png',
            thumbnail: 'https://i.imgur.com/vDdPAFe.png',
            thumbnailWidth: 766.66666666667,
            thumbnailHeight: 500,
            caption: 'PharmaNow - logo design concept 2/2',
        },
        {
            src: 'https://i.imgur.com/SiCVwuB.png',
            thumbnail: 'https://i.imgur.com/SiCVwuB.png',
            thumbnailWidth: 888.88888888889,
            thumbnailHeight: 500,
            caption: 'PharmaNow - web design concept',
        },
        {
            src: 'https://i.imgur.com/BAYFMj9.png',
            thumbnail: 'https://i.imgur.com/BAYFMj9.png',
            thumbnailWidth: 760,
            thumbnailHeight: 500,
            caption: 'Big Stone Lodge - logo design',
        },
        {
            src: 'https://i.imgur.com/P26gG4T.png',
            thumbnail: 'https://i.imgur.com/P26gG4T.png',
            thumbnailWidth: 760,
            thumbnailHeight: 500,
            caption: 'Big Stone Lodge - logo design',
        },
        {
            src: 'https://i.imgur.com/v9cCCMk.png',
            thumbnail: 'https://i.imgur.com/v9cCCMk.png',
            thumbnailWidth: 1333.3333333333,
            thumbnailHeight: 500,
            caption: 'Tum Tums - logo design concept',
        },
        {
            src: 'https://i.imgur.com/qrg9mmV.png',
            thumbnail: 'https://i.imgur.com/qrg9mmV.png',
            thumbnailWidth: 500,
            thumbnailHeight: 500,
            caption: 'Supersized Eye - digital painting',
        },
        {
            src: 'https://i.imgur.com/r1Xiau5.png',
            thumbnail: 'https://i.imgur.com/r1Xiau5.png',
            thumbnailWidth: 660,
            thumbnailHeight: 500,
            caption: 'Go Straw Free - logo & package design',
        },
        {
            src: 'https://i.imgur.com/GHB0R8y.png',
            thumbnail: 'https://i.imgur.com/GHB0R8y.png',
            thumbnailWidth: 500,
            thumbnailHeight: 500,
            caption: 'Go Straw Free - logo design process - 1/3',
        },
        {
            src: 'https://i.imgur.com/vuIfwSR.png',
            thumbnail: 'https://i.imgur.com/vuIfwSR.png',
            thumbnailWidth: 500,
            thumbnailHeight: 500,
            caption: 'Go Straw Free - logo design process - 2/3',
        },
        {
            src: 'https://i.imgur.com/EXaFWqi.png',
            thumbnail: 'https://i.imgur.com/EXaFWqi.png',
            thumbnailWidth: 500,
            thumbnailHeight: 500,
            caption: 'Go Straw Free - logo design process - 3/3',
        },
        {
            src: 'https://i.imgur.com/AL5qa0w.png',
            thumbnail: 'https://i.imgur.com/AL5qa0w.png',
            thumbnailWidth: 1333.3333333333,
            thumbnailHeight: 500,
            caption: 'PharmaNow - old logo design concept',
        },
        {
            src: 'https://i.imgur.com/3KOpI7N.png',
            thumbnail: 'https://i.imgur.com/3KOpI7N.png',
            thumbnailWidth: 666.66666666667,
            thumbnailHeight: 500,
            caption: 'DreamBig - car wrapper, banner design | frontal view',
        },
        {
            src: 'https://i.imgur.com/bYnc6xp.png',
            thumbnail: 'https://i.imgur.com/bYnc6xp.png',
            thumbnailWidth: 730,
            thumbnailHeight: 500,
            caption: 'DreamBig - car wrapper, banner design | side view',
        }
    ]
};

export default DesignGallery;