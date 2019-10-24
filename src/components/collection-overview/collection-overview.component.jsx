import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './collection-overview.style.scss';

const CollectionOverview = ({collections}) => (
    <div className='collectionOverview'>
            {
            collections.map((collection) => (
                <CollectionPreview 
                key={collection.id} 
                title={collection.title} 
                items={collection.items}
                />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)