import React from 'react';
import '../App.css';
import slugify from 'slugify';
/* import PartsListPicker from '../PartsListPicker/PartsListPicker'; */

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class PartsList extends React.Component {
    render() {
        return (
            Object.keys(this.props.features).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={item.name === this.props.selected[feature].name}
                        onChange={e => this.props.updateFeature(feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                    </div>
                );
                });

                return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                    <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
                );
    }));
}}
      

export default PartsList