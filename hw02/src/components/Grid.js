import React, { Component } from 'react';
import Card from './Card';
import {chunk} from '../utils';

class Grid extends Component {
    render() {
        const { list, onToggle } = this.props;

        return (
            <div className="Grid">
                {/* split the list into lists with 8 elements each for better view */}
                {chunk(list, 8).map(l => {
                    return (
                    <div key={l.id} className="Grid"> 
                        {l.map(card => {
														return ( // TODO
															<button className="Card"><Card card={card} /></button>
                            )
                        })}
                    </div>)
                })}
            </div>
        );
    }
}

export default Grid;