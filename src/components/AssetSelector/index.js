import React from 'react';
import Carousel from 'nuka-carousel';

import cn from 'utils/bem';
import Arrow from 'elements/Arrow';
import CarouselBottomDots from 'elements/CarouselBottomDots';

import { propTypes } from './props';

import './style.styl';

const b = cn('asset-selector');

const AssetSelector = ({ assets, selectedAsset, onChange, className }) => (
  <Carousel
    className={b(null, null, className)}
    speed={1000}
    renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => (
      <Arrow
        disabled={currentSlide + 1 === slideCount}
        onClick={nextSlide}
        mod="right"
      />
    )}
    renderCenterLeftControls={({ previousSlide, currentSlide }) => (
      <Arrow disabled={currentSlide === 0} onClick={previousSlide} mod="left" />
    )}
    renderBottomCenterControls={CarouselBottomDots}
    afterSlide={index => onChange(assets[index])}
    slideIndex={assets.findIndex(asset => asset.id === selectedAsset.id)}
  >
    {assets.map(asset => (
      <div key={asset.id} className={b('item')}>
        <span className={b('asset-name')}>{asset.name}</span>
      </div>
    ))}
  </Carousel>
);

AssetSelector.propTypes = propTypes;

export default AssetSelector;
