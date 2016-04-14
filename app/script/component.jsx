import '../css/component.css';
import '../sass/common.scss';
import React from 'react';

var Hello = React.createClass({
    render: function () {
        return (
            <div className="component m10">
                <h1>Hello world</h1>
            </div>
            );
    }
  })

export default Hello; 
// module.exports = Hello;
// exports.Hello;
