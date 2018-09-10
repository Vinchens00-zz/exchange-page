import React from 'react';
import Carousel from 'nuka-carousel';

import cn from 'utils/bem';
import Arrow from 'elements/Arrow';
import CarouselBottomDots from 'elements/CarouselBottomDots';
import AssetAmount from 'elements/AssetAmount';

import { propTypes } from './props';

import './style.styl';

const b = cn('asset-selector');

class AssetSelector extends React.Component {
  static propTypes = propTypes;

  onChange = newIndex => {
    const { assets, onChange } = this.props;
    onChange && onChange(assets[newIndex]);
  };

  onSlideChange = newIndex => () => this.onChange(newIndex);

  render() {
    const { assets, selectedAsset, className } = this.props;

    return (
      <Carousel
        className={b(null, null, className)}
        speed={1000}
        renderCenterRightControls={({ currentSlide, slideCount }) => (
          <Arrow
            disabled={currentSlide + 1 === slideCount}
            onClick={this.onSlideChange(currentSlide + 1)}
            mod="right"
          />
        )}
        renderCenterLeftControls={({ currentSlide }) => (
          <Arrow
            disabled={currentSlide === 0}
            onClick={this.onSlideChange(currentSlide - 1)}
            mod="left"
          />
        )}
        renderBottomCenterControls={CarouselBottomDots}
        slideIndex={assets.findIndex(asset => asset.id === selectedAsset.id)}
      >
        {assets.map(asset => (
          <div key={asset.id} className={b('item')}>
            <div className={b('info')}>
              <span className={b('asset-name')}>{asset.name}</span>
              <span className={b('asset-balance')}>
                <span>You have </span>
                <AssetAmount
                  assetId={asset.id}
                  amount={String(asset.balance)}
                  assetSignClassName={b('asset-sign')}
                />
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default AssetSelector;
