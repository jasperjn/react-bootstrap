import React from 'react';
import $ from 'teaspoon';

import HelpBlock from '../src/HelpBlock';

describe('<HelpBlock>', () => {
  it('should render correctly', () => {
    expect(
      $(
        <HelpBlock id="foo" className="my-help-block">
          Help contents
        </HelpBlock>,
      )
        .shallowRender()
        .single('#foo.help-block.my-help-block')
        .text(),
    ).to.equal('Help contents');
  });
});
